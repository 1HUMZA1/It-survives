// Wildlife Manager: Complete animal AI, wandering, grazing, fleeing, predator attacks, flight, school swimming & weapon hunting
import * as THREE from '../three.js';
import { AnimalModels } from './AnimalModels.js';

export class WildlifeManager {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;
    this.animals = [];
    this.respawnQueue = [];
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Temp vector caches to prevent GC stutter
    this._v1 = new THREE.Vector3();
    this._v2 = new THREE.Vector3();
    this._lookTarget = new THREE.Vector3();
  }

  // Populate the tropical island with all wildlife species across their native biomes
  spawnAnimals(counts = {}) {
    const radius = this.terrain.radius;

    const deerCount = counts.deer !== undefined ? counts.deer : 7;
    const rabbitCount = counts.rabbits !== undefined ? counts.rabbits : 10;
    const birdCount = counts.birds !== undefined ? counts.birds : 8;
    const fishCount = counts.fish !== undefined ? counts.fish : 12;
    const snakeCount = counts.snakes !== undefined ? counts.snakes : 6;
    const boarCount = counts.boars !== undefined ? counts.boars : 6;
    const crabCount = counts.crabs !== undefined ? counts.crabs : 10;

    // 1. Wild Deer (Meadows, Forest Clearings & Grassy Plateaus)
    for (let i = 0; i < deerCount; i++) {
      const pos = this.findBiomePosition(0.25, 0.70, 3.0, 15.0);
      if (pos) {
        const deer = AnimalModels.createDeer();
        deer.position.copy(pos);
        deer.rotation.y = Math.random() * Math.PI * 2;
        deer.userData.ai = {
          state: 'wander',
          target: pos.clone(),
          homePos: pos.clone(),
          timer: 2 + Math.random() * 4,
          animTime: Math.random() * 10,
          attackCooldown: 0
        };
        this.group.add(deer);
        this.animals.push(deer);
      }
    }

    // 2. Island Rabbits (Grassy Beach Margins, Low Hills, Sandy Turf)
    for (let i = 0; i < rabbitCount; i++) {
      const pos = this.findBiomePosition(0.45, 0.88, 1.2, 8.5);
      if (pos) {
        const rabbit = AnimalModels.createRabbit();
        rabbit.position.copy(pos);
        rabbit.rotation.y = Math.random() * Math.PI * 2;
        rabbit.userData.ai = {
          state: 'wander',
          target: pos.clone(),
          homePos: pos.clone(),
          timer: 1.5 + Math.random() * 3,
          animTime: Math.random() * 10,
          hopOffset: 0
        };
        this.group.add(rabbit);
        this.animals.push(rabbit);
      }
    }

    // 3. Tropical Birds / Macaws (Half perched on rocks/shore, half soaring high in sky)
    for (let i = 0; i < birdCount; i++) {
      const isSkyBird = i % 2 === 1;
      const angle = (i / birdCount) * Math.PI * 2 + Math.random() * 0.4;
      const r = radius * (0.3 + Math.random() * 0.45);
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const groundY = this.terrain.getElevation(x, z);

      const bird = AnimalModels.createBird();
      if (isSkyBird) {
        // Soaring in sky thermals
        const skyY = 24.0 + Math.random() * 12.0;
        bird.position.set(x, skyY, z);
        bird.userData.isFlying = true;
        bird.userData.altitude = skyY;
        bird.userData.ai = {
          state: 'soar',
          orbitAngle: angle,
          orbitRadius: r,
          orbitSpeed: 0.18 + Math.random() * 0.12,
          timer: 6 + Math.random() * 8,
          animTime: Math.random() * 10
        };
      } else {
        // Perched on ground / boulders
        bird.position.set(x, Math.max(1.0, groundY), z);
        bird.userData.isFlying = false;
        bird.userData.ai = {
          state: 'perch',
          target: new THREE.Vector3(x, groundY, z),
          homePos: new THREE.Vector3(x, groundY, z),
          timer: 3 + Math.random() * 6,
          animTime: Math.random() * 10
        };
      }
      this.group.add(bird);
      this.animals.push(bird);
    }

    // 4. Tropical Reef Fish (Swimming in coastal shallows & freshwater lagoon)
    for (let i = 0; i < fishCount; i++) {
      const angle = (i / fishCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const r = radius * (0.85 + Math.random() * 0.22);
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const elevation = this.terrain.getElevation(x, z);

      if (elevation < 0.2) {
        const fish = AnimalModels.createFish();
        const fishY = Math.min(-0.25, Math.max(-1.4, elevation + 0.35));
        fish.position.set(x, fishY, z);
        fish.userData.ai = {
          state: 'swim',
          target: new THREE.Vector3(x, fishY, z),
          homePos: new THREE.Vector3(x, fishY, z),
          timer: 2 + Math.random() * 4,
          animTime: Math.random() * 10
        };
        this.group.add(fish);
        this.animals.push(fish);
      }
    }

    // 5. Jungle Snakes / Vipers (Tall Grass, Cave Surroundings & Rocky Outcrops)
    for (let i = 0; i < snakeCount; i++) {
      const pos = this.findBiomePosition(0.2, 0.72, 2.8, 14.0);
      if (pos) {
        const snake = AnimalModels.createSnake();
        snake.position.copy(pos);
        snake.rotation.y = Math.random() * Math.PI * 2;
        snake.userData.ai = {
          state: 'wander',
          target: pos.clone(),
          homePos: pos.clone(),
          timer: 2.5 + Math.random() * 4,
          animTime: Math.random() * 10,
          attackCooldown: 0
        };
        this.group.add(snake);
        this.animals.push(snake);
      }
    }

    // 6. Wild Boars (Deep Jungle, Foothills & Forest Shadows)
    for (let i = 0; i < boarCount; i++) {
      const pos = this.findBiomePosition(0.18, 0.65, 3.5, 16.0);
      if (pos) {
        const boar = AnimalModels.createBoar();
        boar.position.copy(pos);
        boar.rotation.y = Math.random() * Math.PI * 2;
        boar.userData.ai = {
          state: 'wander',
          target: pos.clone(),
          homePos: pos.clone(),
          timer: 3 + Math.random() * 5,
          animTime: Math.random() * 10,
          attackCooldown: 0
        };
        this.group.add(boar);
        this.animals.push(boar);
      }
    }

    // 7. Coastal Crabs (Sandy Beach Shoreline)
    for (let i = 0; i < crabCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = radius * (0.78 + Math.random() * 0.18);
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = this.terrain.getElevation(x, z);

      if (y > 0.1 && y < 2.5) {
        const crab = AnimalModels.createCrab();
        crab.position.set(x, y, z);
        crab.userData.ai = {
          state: 'wander',
          target: new THREE.Vector3(x, y, z),
          homePos: new THREE.Vector3(x, y, z),
          timer: 2 + Math.random() * 4,
          animTime: Math.random() * 10
        };
        this.group.add(crab);
        this.animals.push(crab);
      }
    }
  }

  // Helper: Find valid position in a specific elevation & radial biome band
  findBiomePosition(minRadiusRatio, maxRadiusRatio, minElevation, maxElevation) {
    const radius = this.terrain.radius;
    for (let attempts = 0; attempts < 30; attempts++) {
      const angle = Math.random() * Math.PI * 2;
      const r = radius * (minRadiusRatio + Math.random() * (maxRadiusRatio - minRadiusRatio));
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = this.terrain.getElevation(x, z);

      if (y >= minElevation && y <= maxElevation) {
        return new THREE.Vector3(x, y, z);
      }
    }
    return null;
  }

  // Main frame update for all wildlife
  update(delta, playerPos, onPlayerDamaged) {
    // 1. Process Respawn Queue
    this.updateRespawns(delta);

    // 2. Update Active Animals
    for (let i = this.animals.length - 1; i >= 0; i--) {
      const animal = this.animals[i];
      if (!animal.parent) continue;

      const data = animal.userData;
      const ai = data.ai;

      ai.timer -= delta;
      if (ai.attackCooldown > 0) ai.attackCooldown -= delta;

      const distToPlayer = animal.position.distanceTo(playerPos);

      // Distance LOD: beyond 85m, freeze high-frequency animations to maintain 60 FPS
      const isNearPlayer = distToPlayer < 85.0;
      if (isNearPlayer) {
        ai.animTime += delta * 7.0;
      }

      // Delegate update by animal species
      switch (data.type) {
        case 'deer':
          this.updateDeer(animal, delta, playerPos, distToPlayer, isNearPlayer);
          break;
        case 'rabbit':
          this.updateRabbit(animal, delta, playerPos, distToPlayer, isNearPlayer);
          break;
        case 'bird':
          this.updateBird(animal, delta, playerPos, distToPlayer, isNearPlayer);
          break;
        case 'fish':
          this.updateFish(animal, delta, playerPos, distToPlayer, isNearPlayer);
          break;
        case 'snake':
          this.updateSnake(animal, delta, playerPos, distToPlayer, isNearPlayer, onPlayerDamaged);
          break;
        case 'boar':
          this.updateBoar(animal, delta, playerPos, distToPlayer, isNearPlayer, onPlayerDamaged);
          break;
        case 'crab':
          this.updateCrab(animal, delta, playerPos, distToPlayer, isNearPlayer);
          break;
      }
    }
  }

  // 1. Deer AI: Timid Grazer, Alert Posture, Fast Galloping Flee
  updateDeer(deer, delta, playerPos, distToPlayer, isNearPlayer) {
    const data = deer.userData;
    const ai = data.ai;

    // State Transitions
    if (distToPlayer < data.fleeRadius || data.health < data.maxHealth) {
      ai.state = 'flee';
    } else if (distToPlayer < data.alertRadius && ai.state !== 'flee') {
      ai.state = 'alert';
    } else if (ai.timer <= 0) {
      ai.state = Math.random() < 0.35 ? 'idle' : 'wander';
      ai.timer = 3.5 + Math.random() * 5.0;
      if (ai.state === 'wander') {
        const wanderAngle = Math.random() * Math.PI * 2;
        const wanderDist = 6.0 + Math.random() * 8.0;
        ai.target.set(
          deer.position.x + Math.cos(wanderAngle) * wanderDist,
          0,
          deer.position.z + Math.sin(wanderAngle) * wanderDist
        );
      }
    }

    let moveDir = this._v1.set(0, 0, 0);
    let speed = 0;

    if (ai.state === 'flee') {
      // Gallop directly away from player
      moveDir.subVectors(deer.position, playerPos).setY(0);
      if (moveDir.lengthSq() > 0.01) moveDir.normalize();
      speed = data.speed * 1.35; // Fast sprint (~8.2 m/s)

      if (distToPlayer > data.alertRadius + 10.0) {
        ai.state = 'wander';
      }
    } else if (ai.state === 'alert') {
      // Freeze, turn towards player, lift head alertly
      moveDir.subVectors(playerPos, deer.position).setY(0);
      if (moveDir.lengthSq() > 0.01) {
        this._lookTarget.copy(deer.position).add(moveDir);
        deer.lookAt(this._lookTarget);
      }
      if (data.head && isNearPlayer) {
        data.head.rotation.x = THREE.MathUtils.lerp(data.head.rotation.x, -0.35, 0.1);
      }
    } else if (ai.state === 'wander') {
      moveDir.subVectors(ai.target, deer.position).setY(0);
      if (moveDir.length() > 0.6) {
        moveDir.normalize();
        speed = data.speed * 0.45;
      } else {
        ai.state = 'idle';
      }
    } else if (ai.state === 'idle') {
      // Grazing motion: lower head to nibble grass
      if (data.head && isNearPlayer) {
        data.head.rotation.x = Math.sin(ai.animTime * 0.4) * 0.28 + 0.15;
      }
    }

    // Apply translation
    if (speed > 0) {
      deer.position.addScaledVector(moveDir, speed * delta);
      this._lookTarget.copy(deer.position).add(moveDir);
      deer.lookAt(this._lookTarget);

      // Articulated 4-leg gallop trot
      if (data.legs && isNearPlayer) {
        data.legs.forEach((leg, idx) => {
          const phase = idx % 2 === 0 ? 1 : -1;
          const stride = ai.state === 'flee' ? 0.75 : 0.45;
          leg.rotation.x = Math.sin(ai.animTime * (ai.state === 'flee' ? 2.0 : 1.0) + idx) * stride * phase;
        });
      }
    }

    // Ground clamping & sea-avoidance
    const groundY = this.terrain.getElevation(deer.position.x, deer.position.z);
    deer.position.y = Math.max(1.8, groundY);
    if (groundY < 1.8) {
      // Turn back toward island center
      ai.target.set(0, 0, 0);
      ai.state = 'wander';
    }
  }

  // 2. Rabbit AI: Timid, Twitching Ears, Rapid Hopping Arc
  updateRabbit(rabbit, delta, playerPos, distToPlayer, isNearPlayer) {
    const data = rabbit.userData;
    const ai = data.ai;

    if (distToPlayer < data.fleeRadius || data.health < data.maxHealth) {
      ai.state = 'flee';
    } else if (distToPlayer < data.alertRadius && ai.state !== 'flee') {
      ai.state = 'alert';
    } else if (ai.timer <= 0) {
      ai.state = Math.random() < 0.4 ? 'idle' : 'wander';
      ai.timer = 2.0 + Math.random() * 3.5;
      if (ai.state === 'wander') {
        const wanderAngle = Math.random() * Math.PI * 2;
        const wanderDist = 3.5 + Math.random() * 5.0;
        ai.target.set(
          rabbit.position.x + Math.cos(wanderAngle) * wanderDist,
          0,
          rabbit.position.z + Math.sin(wanderAngle) * wanderDist
        );
      }
    }

    let moveDir = this._v1.set(0, 0, 0);
    let speed = 0;

    if (ai.state === 'flee') {
      moveDir.subVectors(rabbit.position, playerPos).setY(0);
      if (moveDir.lengthSq() > 0.01) moveDir.normalize();
      speed = data.speed * 1.35; // Rapid sprint

      if (distToPlayer > data.alertRadius + 6.0) {
        ai.state = 'wander';
      }
    } else if (ai.state === 'alert') {
      moveDir.subVectors(playerPos, rabbit.position).setY(0);
      if (moveDir.lengthSq() > 0.01) {
        this._lookTarget.copy(rabbit.position).add(moveDir);
        rabbit.lookAt(this._lookTarget);
      }
      // Ears perk up alertly
      if (data.earL && data.earR && isNearPlayer) {
        data.earL.rotation.z = -0.1 + Math.sin(ai.animTime * 1.5) * 0.08;
        data.earR.rotation.z = 0.1 + Math.cos(ai.animTime * 1.5) * 0.08;
      }
    } else if (ai.state === 'wander') {
      moveDir.subVectors(ai.target, rabbit.position).setY(0);
      if (moveDir.length() > 0.4) {
        moveDir.normalize();
        speed = data.speed * 0.55;
      } else {
        ai.state = 'idle';
      }
    } else if (ai.state === 'idle') {
      // Nibbling idle with twitching ears
      if (data.earL && data.earR && isNearPlayer) {
        data.earL.rotation.z = -0.15 + Math.sin(ai.animTime * 1.2) * 0.12;
        data.earR.rotation.z = 0.15 + Math.cos(ai.animTime * 1.2) * 0.12;
      }
    }

    // Hopping arc
    let hopY = 0;
    if (speed > 0) {
      rabbit.position.addScaledVector(moveDir, speed * delta);
      this._lookTarget.copy(rabbit.position).add(moveDir);
      rabbit.lookAt(this._lookTarget);

      // Realistic parabolic hop
      const hopFreq = ai.state === 'flee' ? 14.0 : 9.0;
      hopY = Math.abs(Math.sin(ai.animTime * (hopFreq / 7.0))) * 0.28;

      // Paws kicking motion
      if (data.legs && isNearPlayer) {
        data.legs.forEach((leg, idx) => {
          leg.rotation.x = Math.sin(ai.animTime * 2.0 + idx) * 0.4;
        });
      }
    }

    const groundY = this.terrain.getElevation(rabbit.position.x, rabbit.position.z);
    rabbit.position.y = Math.max(0.6, groundY) + hopY;
    if (groundY < 0.6) {
      ai.target.set(0, 0, 0);
      ai.state = 'wander';
    }
  }

  // 3. Bird AI: Ground Perch, Takeoff Flap, High Sky Soaring in Thermals
  updateBird(bird, delta, playerPos, distToPlayer, isNearPlayer) {
    const data = bird.userData;
    const ai = data.ai;

    if (!data.isFlying) {
      // Perched on ground / boulder
      if (distToPlayer < data.fleeRadius || data.health < data.maxHealth) {
        // Take off immediately!
        data.isFlying = true;
        ai.state = 'takeoff';
        data.altitude = 26.0 + Math.random() * 8.0;
        ai.orbitAngle = Math.atan2(bird.position.z, bird.position.x);
        ai.orbitRadius = Math.hypot(bird.position.x, bird.position.z);
        ai.orbitSpeed = 0.20;
      } else {
        // Idle head turning on perch
        if (ai.timer <= 0) {
          ai.timer = 2 + Math.random() * 4;
          bird.rotation.y += (Math.random() - 0.5) * 1.2;
        }
        // Wings folded snugly
        if (data.wingL && data.wingR) {
          data.wingL.rotation.z = 0;
          data.wingR.rotation.z = 0;
        }
        return;
      }
    }

    // Flying / Soaring in Sky
    if (ai.state === 'takeoff') {
      // Flap wings rapidly and ascend smoothly
      bird.position.y += delta * 7.5;
      if (data.wingL && data.wingR && isNearPlayer) {
        const flap = Math.sin(ai.animTime * 3.5) * 0.75;
        data.wingL.rotation.z = flap;
        data.wingR.rotation.z = -flap;
      }
      if (bird.position.y >= data.altitude) {
        ai.state = 'soar';
      }
    } else {
      // Soaring circle orbit
      ai.orbitAngle += delta * (ai.orbitSpeed || 0.18);
      const targetX = Math.cos(ai.orbitAngle) * ai.orbitRadius;
      const targetZ = Math.sin(ai.orbitAngle) * ai.orbitRadius;

      // Smooth flight trajectory
      this._v1.set(targetX, data.altitude + Math.sin(ai.orbitAngle * 3) * 1.5, targetZ);
      bird.position.lerp(this._v1, delta * 2.0);

      // Face direction of flight
      const nextAngle = ai.orbitAngle + 0.1;
      this._lookTarget.set(
        Math.cos(nextAngle) * ai.orbitRadius,
        bird.position.y,
        Math.sin(nextAngle) * ai.orbitRadius
      );
      bird.lookAt(this._lookTarget);

      // Banking into turns
      bird.rotation.z = -0.35;

      // Periodic gentle wing flap (flaps for 2s, glides flat for 4s)
      const flapCycle = (ai.animTime * 0.6) % 6.0;
      if (flapCycle < 2.2 && data.wingL && data.wingR && isNearPlayer) {
        const flap = Math.sin(ai.animTime * 2.2) * 0.55;
        data.wingL.rotation.z = flap;
        data.wingR.rotation.z = -flap;
      } else if (data.wingL && data.wingR) {
        data.wingL.rotation.z = 0.05;
        data.wingR.rotation.z = -0.05;
      }
    }
  }

  // 4. Fish AI: Schooling in Coastal Shallows, Sinusoidal Tail Swish, Scatter on Approach
  updateFish(fish, delta, playerPos, distToPlayer, isNearPlayer) {
    const data = fish.userData;
    const ai = data.ai;

    if (distToPlayer < data.scatterRadius || data.health < data.maxHealth) {
      ai.state = 'scatter';
    } else if (ai.timer <= 0) {
      ai.state = Math.random() < 0.3 ? 'idle' : 'swim';
      ai.timer = 2.5 + Math.random() * 4.0;
      if (ai.state === 'swim') {
        const swimAngle = Math.random() * Math.PI * 2;
        const swimDist = 4.0 + Math.random() * 6.0;
        ai.target.set(
          fish.position.x + Math.cos(swimAngle) * swimDist,
          0,
          fish.position.z + Math.sin(swimAngle) * swimDist
        );
      }
    }

    let moveDir = this._v1.set(0, 0, 0);
    let speed = 0;

    if (ai.state === 'scatter') {
      // Dart rapidly into deeper water away from player
      moveDir.subVectors(fish.position, playerPos).setY(0);
      if (moveDir.lengthSq() > 0.01) moveDir.normalize();
      speed = data.speed * 1.6; // Rapid dart (~4.5 m/s)

      if (distToPlayer > data.scatterRadius + 5.0) {
        ai.state = 'swim';
      }
    } else if (ai.state === 'swim') {
      moveDir.subVectors(ai.target, fish.position).setY(0);
      if (moveDir.length() > 0.5) {
        moveDir.normalize();
        speed = data.speed * 0.6;
      } else {
        ai.state = 'idle';
      }
    }

    // Apply swimming translation
    if (speed > 0) {
      fish.position.addScaledVector(moveDir, speed * delta);
      this._lookTarget.copy(fish.position).add(moveDir);
      fish.lookAt(this._lookTarget);
    }

    // Continuous sinusoidal tail fin swish
    if (data.tailPivot && isNearPlayer) {
      const swishFreq = ai.state === 'scatter' ? 2.8 : 1.4;
      data.tailPivot.rotation.y = Math.sin(ai.animTime * swishFreq) * 0.42;
    }

    // Depth clamping: keep submerged in water (-1.4m to -0.2m)
    const groundY = this.terrain.getElevation(fish.position.x, fish.position.z);
    fish.position.y = Math.min(-0.25, Math.max(groundY + 0.25, -1.35 + Math.sin(ai.animTime * 0.5) * 0.12));

    // Turn back into ocean if hitting dry beach
    if (groundY > -0.15) {
      const oceanDir = this._v2.set(fish.position.x, 0, fish.position.z).normalize().multiplyScalar(this.terrain.radius * 0.95);
      ai.target.copy(oceanDir);
      ai.state = 'swim';
    }
  }

  // 5. Snake AI: Realistic S-Curve Wave, Forked Tongue, Hiss Posture & Ambush Strike
  updateSnake(snake, delta, playerPos, distToPlayer, isNearPlayer, onPlayerDamaged) {
    const data = snake.userData;
    const ai = data.ai;

    if (distToPlayer < data.attackRadius || data.health < data.maxHealth) {
      ai.state = 'attack';
    } else if (distToPlayer < data.hissRadius) {
      ai.state = 'hiss';
    } else if (ai.timer <= 0) {
      ai.state = Math.random() < 0.4 ? 'idle' : 'wander';
      ai.timer = 2.5 + Math.random() * 4.0;
      if (ai.state === 'wander') {
        const angle = Math.random() * Math.PI * 2;
        const dist = 3.0 + Math.random() * 4.0;
        ai.target.set(
          snake.position.x + Math.cos(angle) * dist,
          0,
          snake.position.z + Math.sin(angle) * dist
        );
      }
    }

    let moveDir = this._v1.set(0, 0, 0);
    let speed = 0;

    if (ai.state === 'attack') {
      // Slither aggressively toward player to strike
      moveDir.subVectors(playerPos, snake.position).setY(0);
      if (moveDir.lengthSq() > 0.01) moveDir.normalize();
      speed = data.speed * 1.25;

      // Contact strike
      if (distToPlayer < 1.7 && ai.attackCooldown <= 0) {
        if (onPlayerDamaged) {
          onPlayerDamaged(12, '⚠️ Jungle Viper Bitten you! (-12 HP)');
        }
        ai.attackCooldown = 2.2;
        // Recoil back slightly
        snake.position.addScaledVector(moveDir, -0.6);
      }
    } else if (ai.state === 'hiss') {
      // Threat posture: face player, elevate head diamond, flicker tongue
      moveDir.subVectors(playerPos, snake.position).setY(0);
      if (moveDir.lengthSq() > 0.01) {
        this._lookTarget.copy(snake.position).add(moveDir);
        snake.lookAt(this._lookTarget);
      }
      if (data.headGroup && isNearPlayer) {
        data.headGroup.position.y = 0.22 + Math.sin(ai.animTime * 0.8) * 0.04;
      }
    } else if (ai.state === 'wander') {
      moveDir.subVectors(ai.target, snake.position).setY(0);
      if (moveDir.length() > 0.4) {
        moveDir.normalize();
        speed = data.speed * 0.5;
      } else {
        ai.state = 'idle';
      }
    }

    // Apply slithering translation
    if (speed > 0) {
      snake.position.addScaledVector(moveDir, speed * delta);
      this._lookTarget.copy(snake.position).add(moveDir);
      snake.lookAt(this._lookTarget);
    }

    // Articulated 8-Segment S-Curve Wave & Flickering Tongue
    if (isNearPlayer) {
      if (data.segments) {
        data.segments.forEach((seg, idx) => {
          const wave = Math.sin(ai.animTime * 1.2 + idx * 0.75) * 0.13;
          seg.position.x = wave;
        });
      }
      if (data.tongue) {
        data.tongue.position.z = 0.14 + Math.sin(ai.animTime * 3.5) * 0.06;
      }
    }

    const groundY = this.terrain.getElevation(snake.position.x, snake.position.z);
    snake.position.y = Math.max(0.6, groundY);
    if (groundY < 0.6) {
      ai.target.set(0, 0, 0);
      ai.state = 'wander';
    }
  }

  // 6. Boar AI: Aggressive Jungle Beast, Snout Rooting, Ferocious Charge & Goring Tusks
  updateBoar(boar, delta, playerPos, distToPlayer, isNearPlayer, onPlayerDamaged) {
    const data = boar.userData;
    const ai = data.ai;

    if (distToPlayer < data.aggroRadius || data.health < data.maxHealth) {
      ai.state = 'charge';
    } else if (ai.timer <= 0) {
      ai.state = Math.random() < 0.35 ? 'idle' : 'wander';
      ai.timer = 3.0 + Math.random() * 5.0;
      if (ai.state === 'wander') {
        const wanderAngle = Math.random() * Math.PI * 2;
        const wanderDist = 5.0 + Math.random() * 7.0;
        ai.target.set(
          boar.position.x + Math.cos(wanderAngle) * wanderDist,
          0,
          boar.position.z + Math.sin(wanderAngle) * wanderDist
        );
      }
    }

    let moveDir = this._v1.set(0, 0, 0);
    let speed = 0;

    if (ai.state === 'charge') {
      moveDir.subVectors(playerPos, boar.position).setY(0);
      if (moveDir.lengthSq() > 0.01) moveDir.normalize();
      speed = data.chargeSpeed || 6.5; // Fast charge

      // Tusks lower for gore
      if (data.head && isNearPlayer) {
        data.head.rotation.x = -0.22;
      }

      // Contact gore damage
      if (distToPlayer < 1.8 && ai.attackCooldown <= 0) {
        if (onPlayerDamaged) {
          onPlayerDamaged(18, '⚠️ Wild Boar Gored you with ivory tusks! (-18 HP)');
        }
        ai.attackCooldown = 1.6;
        // Rebound slightly after impact
        boar.position.addScaledVector(moveDir, -0.8);
      }
    } else if (ai.state === 'wander') {
      moveDir.subVectors(ai.target, boar.position).setY(0);
      if (moveDir.length() > 0.5) {
        moveDir.normalize();
        speed = data.speed * 0.55;
      } else {
        ai.state = 'idle';
      }
      if (data.head && isNearPlayer) {
        data.head.rotation.x = 0;
      }
    } else if (ai.state === 'idle') {
      // Snout rooting in dirt
      if (data.head && isNearPlayer) {
        data.head.rotation.x = Math.sin(ai.animTime * 0.5) * 0.18 + 0.1;
      }
    }

    // Apply translation
    if (speed > 0) {
      boar.position.addScaledVector(moveDir, speed * delta);
      this._lookTarget.copy(boar.position).add(moveDir);
      boar.lookAt(this._lookTarget);

      // 4-leg trotting / charging animation
      if (data.legs && isNearPlayer) {
        data.legs.forEach((leg, idx) => {
          const phase = idx % 2 === 0 ? 1 : -1;
          const stride = ai.state === 'charge' ? 0.65 : 0.42;
          leg.rotation.x = Math.sin(ai.animTime * (ai.state === 'charge' ? 1.8 : 1.0) + idx) * stride * phase;
        });
      }
    }

    const groundY = this.terrain.getElevation(boar.position.x, boar.position.z);
    boar.position.y = Math.max(1.8, groundY);
    if (groundY < 1.8) {
      ai.target.set(0, 0, 0);
      ai.state = 'wander';
    }
  }

  // 7. Crab AI: Beach Scavenger, Sideways Scuttle & Water Flee
  updateCrab(crab, delta, playerPos, distToPlayer, isNearPlayer) {
    const data = crab.userData;
    const ai = data.ai;

    if (distToPlayer < data.fleeRadius) {
      ai.state = 'flee';
    } else if (ai.timer <= 0) {
      ai.state = Math.random() < 0.4 ? 'idle' : 'wander';
      ai.timer = 2.0 + Math.random() * 4.0;
      if (ai.state === 'wander') {
        const wanderAngle = Math.random() * Math.PI * 2;
        const wanderDist = 3.0 + Math.random() * 4.0;
        ai.target.set(
          crab.position.x + Math.cos(wanderAngle) * wanderDist,
          0,
          crab.position.z + Math.sin(wanderAngle) * wanderDist
        );
      }
    }

    let moveDir = this._v1.set(0, 0, 0);
    let speed = 0;

    if (ai.state === 'flee') {
      moveDir.subVectors(crab.position, playerPos).setY(0);
      if (moveDir.lengthSq() > 0.01) moveDir.normalize();
      speed = data.speed * 1.35;
    } else if (ai.state === 'wander') {
      moveDir.subVectors(ai.target, crab.position).setY(0);
      if (moveDir.length() > 0.4) {
        moveDir.normalize();
        speed = data.speed * 0.5;
      } else {
        ai.state = 'idle';
      }
    }

    if (speed > 0) {
      crab.position.addScaledVector(moveDir, speed * delta);
      this._lookTarget.copy(crab.position).add(moveDir);
      crab.lookAt(this._lookTarget);

      // 6-leg scuttling
      if (data.legs && isNearPlayer) {
        data.legs.forEach((leg, idx) => {
          leg.rotation.x = Math.sin(ai.animTime * 1.8 + idx) * 0.35;
        });
      }
    }

    const groundY = this.terrain.getElevation(crab.position.x, crab.position.z);
    crab.position.y = Math.max(0.08, groundY);
  }

  // Check raycast attack from player weapons (spear, axe, pickaxe, tools)
  checkAttack(raycaster, maxRange = 3.8) {
    const hits = raycaster.intersectObjects(this.group.children, true);
    for (let hit of hits) {
      if (hit.distance <= maxRange) {
        let cur = hit.object;
        while (cur && cur.parent !== this.group) {
          cur = cur.parent;
        }
        if (cur && cur.userData && cur.userData.type) {
          return { animal: cur, point: hit.point, distance: hit.distance };
        }
      }
    }
    return null;
  }

  // Damage animal and trigger death/loot drop
  damageAnimal(animal, damage, onLootDrop) {
    if (!animal || !animal.userData) return;
    const data = animal.userData;
    data.health -= damage;

    // Red flash reaction
    animal.traverse((child) => {
      if (child.isMesh && child.material && child.material.color) {
        const origColor = child.material.color.clone();
        child.material.color.set(0xff1744);
        setTimeout(() => {
          if (child && child.material) child.material.color.copy(origColor);
        }, 130);
      }
    });

    // Alert reaction on hit
    if (data.type === 'deer' || data.type === 'rabbit' || data.type === 'crab') {
      data.ai.state = 'flee';
    } else if (data.type === 'bird') {
      data.isFlying = true;
      data.ai.state = 'takeoff';
      data.altitude = 28.0;
    } else if (data.type === 'boar' || data.type === 'snake') {
      data.ai.state = 'charge';
    }

    // Death Check
    if (data.health <= 0) {
      if (onLootDrop) {
        onLootDrop(data.loot, data.type, data.name);
      }
      this.destroyAnimal(animal);
    }
  }

  // Destroy dead animal with death animation and queue for respawn
  destroyAnimal(animal) {
    const idx = this.animals.indexOf(animal);
    if (idx !== -1) {
      this.animals.splice(idx, 1);
    }

    const deadType = animal.userData.type;
    const spawnPos = animal.userData.ai ? animal.userData.ai.homePos : animal.position.clone();

    // Queue for future respawn (55 seconds)
    this.respawnQueue.push({
      type: deadType,
      timer: 55.0,
      spawnPos: spawnPos
    });

    // Death tumble animation
    let count = 0;
    const fallInterval = setInterval(() => {
      count++;
      animal.rotation.z += 0.16;
      animal.position.y -= 0.04;
      animal.scale.multiplyScalar(0.92);
      if (count > 14) {
        clearInterval(fallInterval);
        this.group.remove(animal);
      }
    }, 30);
  }

  // Process wildlife respawn pool
  updateRespawns(delta) {
    for (let i = this.respawnQueue.length - 1; i >= 0; i--) {
      const respawn = this.respawnQueue[i];
      respawn.timer -= delta;
      if (respawn.timer <= 0) {
        this.spawnSingleAnimal(respawn.type, respawn.spawnPos);
        this.respawnQueue.splice(i, 1);
      }
    }
  }

  // Spawn an individual animal of a given type
  spawnSingleAnimal(type, suggestedPos) {
    let animal = null;
    switch (type) {
      case 'deer':
        animal = AnimalModels.createDeer();
        break;
      case 'rabbit':
        animal = AnimalModels.createRabbit();
        break;
      case 'bird':
        animal = AnimalModels.createBird();
        break;
      case 'fish':
        animal = AnimalModels.createFish();
        break;
      case 'snake':
        animal = AnimalModels.createSnake();
        break;
      case 'boar':
        animal = AnimalModels.createBoar();
        break;
      case 'crab':
        animal = AnimalModels.createCrab();
        break;
    }

    if (animal) {
      const pos = suggestedPos || new THREE.Vector3(0, 2, 0);
      const groundY = this.terrain.getElevation(pos.x, pos.z);
      animal.position.set(pos.x, Math.max(0.2, groundY), pos.z);
      animal.userData.ai = {
        state: 'wander',
        target: pos.clone(),
        homePos: pos.clone(),
        timer: 3 + Math.random() * 4,
        animTime: Math.random() * 10,
        attackCooldown: 0
      };
      this.group.add(animal);
      this.animals.push(animal);
    }
  }
}
