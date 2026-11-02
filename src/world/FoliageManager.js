// Foliage & Resource Gathering Manager: 100% Real Interactive Flora, Direct Pickups & Multi-hit Harvesting
import * as THREE from '../three.js';
import { FloraModels } from './FloraModels.js';

export class FoliageManager {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;

    this.interactiveNodes = [];
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.particles = [];
    this.fallingTrees = [];
  }

  generateFoliage(count = 560) {
    const radius = this.terrain.radius;

    for (let i = 0; i < count; i++) {
      const r = Math.sqrt(Math.random()) * (radius * 0.95);
      const theta = Math.random() * Math.PI * 2;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      const y = this.terrain.getElevation(x, z);
      if (y < 0.25) continue; // Don't spawn underwater

      // Keep starter clearing around plane crash site (x=50, z=70)
      const distToCrash = Math.hypot(x - 50, z - 70);
      if (distToCrash < 16) continue;

      // Keep clearing in front of Hidden Cave entrance (-45, -30)
      const distToCave = Math.hypot(x - (-45), z - (-30));
      if (distToCave < 10) continue;

      let node = null;

      if (y <= 3.2) {
        // --- 🏖️ Coastal Beach Zone ---
        const roll = Math.random();
        if (roll < 0.42) {
          // Varied tropical palm trees (king, tall, leaning, dwarf, sapling)
          const palmRoll = Math.random();
          let variant = 'tall';
          if (palmRoll < 0.25) variant = 'king';
          else if (palmRoll < 0.55) variant = 'leaning';
          else if (palmRoll < 0.85) variant = 'dwarf';
          else variant = 'sapling';

          node = FloraModels.createPalmTree(variant);

          // Often spawn a fallen ground coconut nearby on the sand!
          if (Math.random() < 0.65) {
            const nut = FloraModels.createGroundCoconut();
            const offset = (Math.random() - 0.5) * 3.5;
            const nutX = x + offset;
            const nutZ = z + offset;
            const nutY = this.terrain.getElevation(nutX, nutZ);
            if (nutY >= 0.2) {
              nut.position.set(nutX, nutY, nutZ);
              nut.rotation.y = Math.random() * Math.PI * 2;
              this.group.add(nut);
              this.interactiveNodes.push(nut);
            }
          }
        } else if (roll < 0.60) {
          node = FloraModels.createGroundStone(); // Loose beach stones!
        } else if (roll < 0.76) {
          node = FloraModels.createDriftwood(); // Beach driftwood logs!
        } else if (roll < 0.88) {
          node = FloraModels.createGroundCoconut();
        } else {
          node = FloraModels.createRockNode();
        }
      } else if (y <= 22.0) {
        // --- 🌴 Dense Tropical Jungle & Rainforest Zone ---
        const roll = Math.random();
        if (roll < 0.18) {
          node = FloraModels.createPalmTree('king');
        } else if (roll < 0.36) {
          node = FloraModels.createJungleTree();
        } else if (roll < 0.48) {
          node = FloraModels.createWildBananaTree(); // Wild banana trees!
        } else if (roll < 0.58) {
          node = FloraModels.createBambooGrove(); // Slender bamboo groves!
        } else if (roll < 0.70) {
          node = FloraModels.createBerryBush(); // Wild juicy berry bushes!
        } else if (roll < 0.82) {
          node = FloraModels.createFernNode(); // Lush tropical ferns!
        } else if (roll < 0.90) {
          node = FloraModels.createMushroomNode(); // Forest mushroom clusters!
        } else if (roll < 0.95) {
          node = FloraModels.createMonsteraBush();
        } else {
          node = FloraModels.createRockNode();
        }
      } else {
        // --- ⛰️ Mountain, Cliff & Ridge Zone ---
        const roll = Math.random();
        if (roll < 0.35) {
          node = FloraModels.createCliffRockFace(); // Massive mountain cliff rock faces!
        } else if (roll < 0.62) {
          node = FloraModels.createRockNode(); // Mineral boulders
        } else if (roll < 0.82) {
          node = FloraModels.createGroundStone(); // Mountain scree stones
        } else if (roll < 0.92) {
          node = FloraModels.createFernNode();
        } else {
          node = FloraModels.createMushroomNode(); // Cliffside fungi
        }
      }

      if (node) {
        node.position.set(x, y, z);
        node.rotation.y = Math.random() * Math.PI * 2;
        this.group.add(node);
        this.interactiveNodes.push(node);
      }
    }

    // Instanced Lush Tropical Undergrowth Grass Tufts for cinematic natural scenery
    this.createInstancedGrassTufts(radius);

    // Connect cave mineral nodes if present
    if (this.terrain.hiddenCave && this.terrain.hiddenCave.mineralNodes) {
      for (let minNode of this.terrain.hiddenCave.mineralNodes) {
        this.interactiveNodes.push(minNode);
      }
    }
  }

  // Instanced high-performance tropical grass & beach dune tufts
  createInstancedGrassTufts(radius) {
    const tuftCount = 450;
    const bladeGeo = new THREE.ConeGeometry(0.35, 0.9, 4);
    bladeGeo.rotateX(Math.PI / 2.4);

    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x43a047,
      roughness: 0.7,
      side: THREE.DoubleSide
    });

    const instancedMesh = new THREE.InstancedMesh(bladeGeo, grassMat, tuftCount);
    const dummy = new THREE.Object3D();
    const colorDummy = new THREE.Color();
    const colors = [0x43a047, 0x388e3c, 0x689f38, 0x8bc34a, 0x2e7d32];

    let validCount = 0;
    for (let i = 0; i < tuftCount; i++) {
      const r = Math.sqrt(Math.random()) * (radius * 0.92);
      const theta = Math.random() * Math.PI * 2;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      const y = this.terrain.getElevation(x, z);

      if (y > 0.4 && y < 28.0) {
        dummy.position.set(x, y + 0.1, z);
        const s = 0.8 + Math.random() * 0.7;
        dummy.scale.set(s, s * (0.8 + Math.random() * 0.5), s);
        dummy.rotation.set((Math.random() - 0.5) * 0.2, Math.random() * Math.PI * 2, (Math.random() - 0.5) * 0.2);
        dummy.updateMatrix();

        instancedMesh.setMatrixAt(validCount, dummy.matrix);
        colorDummy.setHex(colors[i % colors.length]);
        instancedMesh.setColorAt(validCount, colorDummy);
        validCount++;
      }
    }

    instancedMesh.count = validCount;
    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
    instancedMesh.receiveShadow = true;
    this.group.add(instancedMesh);
  }

  // Check raycast for interactive nodes
  checkRaycast(raycaster, maxDistance = 4.0) {
    const hits = raycaster.intersectObjects(this.group.children, true);
    for (let hit of hits) {
      if (hit.distance <= maxDistance) {
        let cur = hit.object;
        while (cur && cur.parent !== this.group) {
          cur = cur.parent;
        }
        if (cur && cur.userData && cur.userData.type) {
          return { node: cur, point: hit.point, distance: hit.distance };
        }
      }
    }

    // Check cave mineral nodes
    if (this.terrain.hiddenCave) {
      const caveHits = raycaster.intersectObjects(this.terrain.hiddenCave.group.children, true);
      for (let hit of caveHits) {
        if (hit.distance <= maxDistance) {
          let cur = hit.object;
          while (cur && cur.parent !== this.terrain.hiddenCave.group) {
            cur = cur.parent;
          }
          if (cur && cur.userData && cur.userData.type) {
            return { node: cur, point: hit.point, distance: hit.distance };
          }
        }
      }
    }

    return null;
  }

  // Direct collection via [E] key for ground pickups (coconuts, stones, berries, mushrooms, ferns)
  gatherDirectNode(node, audioManager, onResourceCollected) {
    if (!node || !node.userData) return false;

    const yieldItems = node.userData.resourceYield || {};
    const type = node.userData.type;

    // Remove from active nodes immediately
    const idx = this.interactiveNodes.indexOf(node);
    if (idx !== -1) {
      this.interactiveNodes.splice(idx, 1);
    }

    // Spawn quick sparkling collection particles
    this.spawnPickupParticles(node.position, type);

    // Shrink and remove object with pop animation
    let scale = 1.0;
    const popInterval = setInterval(() => {
      scale -= 0.2;
      if (scale <= 0.1) {
        clearInterval(popInterval);
        if (node.parent) node.parent.remove(node);
      } else {
        node.scale.set(scale, scale, scale);
      }
    }, 25);

    if (onResourceCollected) {
      onResourceCollected(yieldItems, type);
    }

    return true;
  }

  // Multi-hit tool harvesting (Chopping trees with axe, mining rocks with pickaxe)
  damageNode(node, damage, hitPoint, audioManager, onResourceCollected) {
    if (!node || !node.userData) return null;

    node.userData.health -= damage;
    this.wobbleNode(node);
    this.spawnHitParticles(hitPoint, node.userData.type);

    if (node.userData.health <= 0) {
      const yieldItems = node.userData.resourceYield || {};
      const type = node.userData.type;

      if (onResourceCollected) {
        onResourceCollected(yieldItems, type);
      }

      const idx = this.interactiveNodes.indexOf(node);
      if (idx !== -1) {
        this.interactiveNodes.splice(idx, 1);
      }

      if (type === 'palm_tree' || type === 'jungle_tree') {
        // Dramatic falling tree animation
        this.animateFallingTree(node, audioManager);
      } else if (type === 'rock_node') {
        // Shatter boulder into stone chunks
        if (audioManager) audioManager.playStoneBreak();
        this.shatterRock(node);
      } else {
        this.destroyNode(node);
      }

      return { destroyed: true, yield: yieldItems };
    }

    return { destroyed: false, health: node.userData.health };
  }

  wobbleNode(node) {
    const origRotX = node.rotation.x;
    const origRotZ = node.rotation.z;
    const wobble = 0.08;

    node.rotation.x += (Math.random() - 0.5) * wobble;
    node.rotation.z += (Math.random() - 0.5) * wobble;

    setTimeout(() => {
      if (node && node.parent) {
        node.rotation.x = origRotX;
        node.rotation.z = origRotZ;
      }
    }, 110);
  }

  animateFallingTree(treeNode, audioManager) {
    if (audioManager) audioManager.playTreeFall();

    const fallAxis = Math.random() > 0.5 ? 'x' : 'z';
    const fallDir = Math.random() > 0.5 ? 1 : -1;

    this.fallingTrees.push({
      node: treeNode,
      axis: fallAxis,
      dir: fallDir,
      angle: 0,
      speed: 0.05
    });
  }

  shatterRock(rockNode) {
    this.spawnHitParticles(rockNode.position, 'rock_node', 18);
    let scale = 1.0;
    const shrink = setInterval(() => {
      scale -= 0.18;
      if (scale <= 0.1) {
        clearInterval(shrink);
        if (rockNode.parent) rockNode.parent.remove(rockNode);
      } else {
        rockNode.scale.set(scale, scale, scale);
      }
    }, 28);
  }

  destroyNode(node) {
    let scale = 1.0;
    const shrinkInterval = setInterval(() => {
      scale -= 0.15;
      if (scale <= 0.1) {
        clearInterval(shrinkInterval);
        if (node.parent) node.parent.remove(node);
      } else {
        node.scale.set(scale, scale, scale);
      }
    }, 28);
  }

  spawnHitParticles(point, type, count = 8) {
    if (!point) return;
    let color = 0x8d6e63;
    if (type === 'rock_node') color = 0x90a4ae;
    else if (type === 'bush' || type === 'fern_node') color = 0x4caf50;
    else if (type === 'berry_bush') color = 0xc2185b;

    const pMat = new THREE.MeshBasicMaterial({ color: color });
    const pGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);

    for (let i = 0; i < count; i++) {
      const p = new THREE.Mesh(pGeo, pMat);
      p.position.copy(point);
      p.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 4.5,
          Math.random() * 3.5 + 1.2,
          (Math.random() - 0.5) * 4.5
        ),
        life: 0.45
      };
      this.scene.add(p);
      this.particles.push(p);
    }
  }

  spawnPickupParticles(pos, type) {
    let color = 0xffeb3b;
    if (type === 'berry_bush') color = 0xe91e63;
    else if (type === 'mushroom_node') color = 0xff5722;
    else if (type === 'ground_coconut') color = 0x8d6e63;
    else if (type === 'ground_stone') color = 0x90caf9;
    else if (type === 'fern_node') color = 0x81c784;

    const pMat = new THREE.MeshBasicMaterial({ color: color });
    const pGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);

    for (let i = 0; i < 7; i++) {
      const p = new THREE.Mesh(pGeo, pMat);
      p.position.set(pos.x, pos.y + 0.3, pos.z);
      p.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 2.2,
          Math.random() * 2.5 + 1.0,
          (Math.random() - 0.5) * 2.2
        ),
        life: 0.35
      };
      this.scene.add(p);
      this.particles.push(p);
    }
  }

  update(delta) {
    // 1. Animate hit & pickup particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.userData.life -= delta;
      p.position.addScaledVector(p.userData.velocity, delta);
      p.userData.velocity.y -= 9.8 * delta;

      if (p.userData.life <= 0) {
        this.scene.remove(p);
        this.particles.splice(i, 1);
      }
    }

    // 2. Animate falling timber trees
    for (let i = this.fallingTrees.length - 1; i >= 0; i--) {
      const item = this.fallingTrees[i];
      item.speed += delta * 3.5;
      item.angle += item.speed * delta;

      if (item.axis === 'x') {
        item.node.rotation.x += item.dir * item.speed * delta;
      } else {
        item.node.rotation.z += item.dir * item.speed * delta;
      }

      if (item.angle >= Math.PI / 2) {
        // Reached ground, despawn tree
        if (item.node.parent) item.node.parent.remove(item.node);
        this.fallingTrees.splice(i, 1);
      }
    }
  }
}
