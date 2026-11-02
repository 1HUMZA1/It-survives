// Smooth First-Person & Third-Person Camera Controller with Collision Handling
import * as THREE from '../three.js';

export const CAMERA_MODE = {
  FIRST_PERSON: 'FPS',
  THIRD_PERSON: 'TPS'
};

export class CameraController {
  constructor(camera, scene, terrain) {
    this.camera = camera;
    this.scene = scene;
    this.terrain = terrain;

    // Camera Mode
    this.mode = CAMERA_MODE.FIRST_PERSON;
    this.targetMode = CAMERA_MODE.FIRST_PERSON;

    // Smooth transition progress: 0 = 100% FPS, 1 = 100% TPS
    this.transitionT = 0.0;
    this.transitionSpeed = 4.2; // ~0.24s transition

    // Third-person offsets
    this.tpsDistance = 3.2;      // Default distance behind player
    this.tpsHeight = 0.35;       // Elevation offset above pivot
    this.tpsShoulder = 0.38;     // Right shoulder offset for tactical view
    this.minDistance = 0.6;      // Minimum distance when occluded

    // Collision raycaster
    this.raycaster = new THREE.Raycaster();
    this.collidableObjects = [];

    // Working vectors to avoid memory allocation in loop
    this._pivot = new THREE.Vector3();
    this._idealPos = new THREE.Vector3();
    this._camPos = new THREE.Vector3();
    this._forward = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
    this._rayDir = new THREE.Vector3();

    // Callbacks
    this.onModeChange = null;

    // Strict rotation order to avoid any camera roll
    this.camera.rotation.order = 'YXZ';
  }

  // Toggle between First-Person and Third-Person
  toggleMode() {
    if (this.targetMode === CAMERA_MODE.FIRST_PERSON) {
      this.setMode(CAMERA_MODE.THIRD_PERSON);
    } else {
      this.setMode(CAMERA_MODE.FIRST_PERSON);
    }
  }

  setMode(mode) {
    this.targetMode = mode;
    this.mode = mode;
    if (this.onModeChange) {
      this.onModeChange(this.mode);
    }
  }

  getMode() {
    return this.mode;
  }

  isFirstPerson() {
    return this.mode === CAMERA_MODE.FIRST_PERSON;
  }

  isThirdPerson() {
    return this.mode === CAMERA_MODE.THIRD_PERSON;
  }

  setCollidableObjects(objects) {
    this.collidableObjects = objects;
  }

  // Update camera position and orientation every frame
  update(delta, playerPosition, playerHeight, yaw, pitch) {
    // 1. Advance smooth transition
    const targetT = (this.targetMode === CAMERA_MODE.THIRD_PERSON) ? 1.0 : 0.0;
    if (this.transitionT !== targetT) {
      const step = delta * this.transitionSpeed;
      if (this.transitionT < targetT) {
        this.transitionT = Math.min(targetT, this.transitionT + step);
      } else {
        this.transitionT = Math.max(targetT, this.transitionT - step);
      }
    }

    // Cubic smoothstep easing for buttery camera transitions
    const t = this.transitionT * this.transitionT * (3.0 - 2.0 * this.transitionT);

    // 2. Strict camera orientation (Zero Z roll)
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(pitch, yaw, 0, 'YXZ');
    this.camera.up.set(0, 1, 0);

    // 3. Compute directional vectors based on yaw & pitch
    this._forward.set(
      -Math.sin(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      -Math.cos(yaw) * Math.cos(pitch)
    ).normalize();

    this._right.set(
      Math.cos(yaw),
      0,
      -Math.sin(yaw)
    ).normalize();

    // 4. FPS eye position
    const fpsY = playerPosition.y + playerHeight;
    const fpsPos = new THREE.Vector3(playerPosition.x, fpsY, playerPosition.z);

    if (t <= 0.001) {
      // Pure First-Person
      this.camera.position.copy(fpsPos);
      return;
    }

    // 5. TPS Pivot point (around head/shoulders)
    this._pivot.set(
      playerPosition.x,
      playerPosition.y + playerHeight * 0.92,
      playerPosition.z
    );

    // Compute ideal TPS position: pivot - (forward * distance) + (right * shoulder) + (up * height)
    let effectiveDist = this.tpsDistance;

    this._idealPos.copy(this._pivot)
      .addScaledVector(this._forward, -effectiveDist)
      .addScaledVector(this._right, this.tpsShoulder)
      .addScaledVector(this._up, this.tpsHeight);

    // 6. Camera Collision Handling (prevent wall & terrain clipping)
    this._rayDir.subVectors(this._idealPos, this._pivot);
    const maxRayDist = this._rayDir.length();

    if (maxRayDist > 0.001) {
      this._rayDir.normalize();
      this.raycaster.set(this._pivot, this._rayDir);
      this.raycaster.near = 0.1;
      this.raycaster.far = maxRayDist;

      // Check collision against world collidables
      if (this.collidableObjects && this.collidableObjects.length > 0) {
        const hits = this.raycaster.intersectObjects(this.collidableObjects, true);
        if (hits.length > 0) {
          const firstHit = hits[0];
          // Pull camera closer to avoid clipping
          effectiveDist = Math.max(this.minDistance, firstHit.distance - 0.25);
          this._idealPos.copy(this._pivot)
            .addScaledVector(this._forward, -effectiveDist)
            .addScaledVector(this._right, this.tpsShoulder * (effectiveDist / this.tpsDistance))
            .addScaledVector(this._up, this.tpsHeight);
        }
      }
    }

    // 7. Ensure camera never dips below terrain
    if (this.terrain && this.terrain.getElevation) {
      const terrainH = this.terrain.getElevation(this._idealPos.x, this._idealPos.z);
      const minCamY = terrainH + 0.35;
      if (this._idealPos.y < minCamY) {
        this._idealPos.y = minCamY;
      }
    }

    // 8. Lerp between FPS and TPS positions based on transition progress
    this._camPos.lerpVectors(fpsPos, this._idealPos, t);
    this.camera.position.copy(this._camPos);
  }
}
