// Physics Manager: Rapier 3D Physics Integration for Island Survival
import * as THREE from '../three.js';

export class PhysicsManager {
  constructor() {
    this.RAPIER = null;
    this.world = null;
    this.characterController = null;
    this.playerBody = null;
    this.playerCollider = null;

    this.isReady = false;
    this.gravity = { x: 0.0, y: -9.81, z: 0.0 };
    this.staticColliders = [];

    this._tempRay = null;
  }

  async init() {
    if (this.isReady) return;
    try {
      let RAPIER = null;
      try {
        const mod = await import('@dimforge/rapier3d-compat');
        RAPIER = mod.default || mod;
      } catch (e1) {
        try {
          const mod = await import('/node_modules/@dimforge/rapier3d-compat/dist/rapier.mjs');
          RAPIER = mod.default || mod;
        } catch (e2) {
          console.warn('Rapier 3D package unavailable in browser, continuing with built-in physics.');
        }
      }

      if (RAPIER && typeof RAPIER.init === 'function') {
        await RAPIER.init();
        this.RAPIER = RAPIER;

        // 1. Create Physics World with standard earth gravity
        this.world = new RAPIER.World(this.gravity);

        // 2. Create Kinematic Character Controller
        const offset = 0.08;
        this.characterController = this.world.createCharacterController(offset);
        this.characterController.enableAutostep(0.45, 0.25, true);
        this.characterController.setMaxSlopeClimbAngle((48 * Math.PI) / 180);
        this.characterController.setMinSlopeSlideAngle((52 * Math.PI) / 180);
        this.characterController.enableSnapToGround(0.35);

        this.isReady = true;
        console.log('✅ Rapier 3D Physics Initialized successfully!');
      } else {
        console.log('ℹ️ Using built-in high-precision island physics engine.');
      }
    } catch (err) {
      console.warn('Rapier 3D init notice, continuing with built-in physics:', err);
    }
  }

  // Create Kinematic Player Capsule Collider
  createPlayer(initialPos = { x: 0, y: 5, z: 0 }) {
    if (!this.isReady) return null;

    // Capsule height = 1.8m (cylinder half-height 0.45, radius 0.35)
    const bodyDesc = this.RAPIER.RigidBodyDesc.kinematicPositionBased()
      .setTranslation(initialPos.x, initialPos.y, initialPos.z);

    this.playerBody = this.world.createRigidBody(bodyDesc);

    const colliderDesc = this.RAPIER.ColliderDesc.capsule(0.52, 0.35);
    this.playerCollider = this.world.createCollider(colliderDesc, this.playerBody);

    return this.playerBody;
  }

  // Create static Trimesh Collider from Three.js Mesh / Geometry (Terrain, Rocks, Cliffs)
  createTrimeshCollider(geometry, position = new THREE.Vector3()) {
    if (!this.isReady || !geometry) return null;

    try {
      let positions = geometry.attributes.position.array;
      let indices = null;

      if (geometry.index) {
        indices = geometry.index.array;
      } else {
        const count = positions.length / 3;
        indices = new Uint32Array(count);
        for (let i = 0; i < count; i++) indices[i] = i;
      }

      // Convert to Float32Array & Uint32Array required by Rapier
      const floatPositions = new Float32Array(positions);
      const uintIndices = new Uint32Array(indices);

      const colliderDesc = this.RAPIER.ColliderDesc.trimesh(floatPositions, uintIndices);
      colliderDesc.setTranslation(position.x, position.y, position.z);

      const collider = this.world.createCollider(colliderDesc);
      this.staticColliders.push(collider);
      return collider;
    } catch (e) {
      console.warn('Error creating Rapier trimesh collider:', e);
      return null;
    }
  }

  // Set Player Position in Rapier Physics World
  setPlayerPosition(pos) {
    if (!this.isReady || !this.playerBody) return;
    try {
      this.playerBody.setTranslation({ x: pos.x, y: pos.y + 0.9, z: pos.z }, true);
    } catch (e) {
      // ignore
    }
  }

  // Move player via Rapier Character Controller
  computePlayerMovement(currentPos, desiredMovement, delta) {
    if (!this.isReady || !this.characterController || !this.playerCollider || !this.playerBody) {
      return desiredMovement;
    }

    try {
      // Sync player rigid body position with Three.js player coordinates
      if (currentPos) {
        this.playerBody.setTranslation({
          x: currentPos.x,
          y: currentPos.y + 0.9,
          z: currentPos.z
        }, true);
      }

      // Calculate collision-aware movement
      this.characterController.computeColliderMovement(
        this.playerCollider,
        desiredMovement
      );

      const corrected = this.characterController.computedMovement();

      // Safeguard: If player is actively moving with WASD but physics controller is trapped/pinched,
      // allow fluid movement rather than freezing the character in place!
      const inputSpeed = Math.hypot(desiredMovement.x, desiredMovement.z);
      const correctedSpeed = Math.hypot(corrected.x, corrected.z);
      if (inputSpeed > 0.0001 && correctedSpeed < 0.00001) {
        return desiredMovement;
      }

      return new THREE.Vector3(corrected.x, corrected.y, corrected.z);
    } catch (e) {
      return desiredMovement;
    }
  }

  // Check if player is on ground via character controller
  isPlayerGrounded() {
    if (!this.isReady || !this.characterController) return true;
    try {
      return this.characterController.computedGrounded();
    } catch (e) {
      return true;
    }
  }

  // Step physics simulation
  step(delta) {
    if (!this.isReady || !this.world) return;
    const clampedDelta = Math.min(delta, 0.05);
    this.world.timestep = clampedDelta;
    this.world.step();
  }
}

export const physicsManager = new PhysicsManager();
