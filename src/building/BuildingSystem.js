// Building System: Hologram Blueprint Preview, Magnetic Socket Snapping, Placement Validation, and Structure Interactivity
import * as THREE from '../three.js';
import { StructureModels } from './StructureModels.js';

// The 7 Core Constructible Base-Building Pieces & Their Raw Resource Costs
export const BUILDING_PIECES = [
  {
    id: 'wood_foundation',
    name: 'Wood Floor',
    fullName: 'Wood Foundation & Floor',
    icon: '🪵',
    cost: [{ id: 'wood', count: 6 }],
    costLabel: '6 Wood'
  },
  {
    id: 'wood_wall',
    name: 'Wood Wall',
    fullName: 'Wood Timber Wall',
    icon: '🧱',
    cost: [{ id: 'wood', count: 4 }, { id: 'fiber', count: 1 }],
    costLabel: '4 Wood, 1 Fiber'
  },
  {
    id: 'wood_door',
    name: 'Wood Door',
    fullName: 'Wood Doorway & Door',
    icon: '🚪',
    cost: [{ id: 'wood', count: 5 }, { id: 'fiber', count: 2 }],
    costLabel: '5 Wood, 2 Fiber'
  },
  {
    id: 'wood_roof',
    name: 'Thatch Roof',
    fullName: 'Thatched Pyramid Roof',
    icon: '🎪',
    cost: [{ id: 'wood', count: 4 }, { id: 'leaves', count: 4 }],
    costLabel: '4 Wood, 4 Leaves'
  },
  {
    id: 'basic_shelter',
    name: 'Lean-to Shelter',
    fullName: 'Small Wooden Shelter & Bed',
    icon: '🏕️',
    cost: [{ id: 'wood', count: 5 }, { id: 'leaves', count: 6 }, { id: 'fiber', count: 4 }],
    costLabel: '5 Wood, 6 Leaves, 4 Fiber'
  },
  {
    id: 'storage_box',
    name: 'Storage Box',
    fullName: 'Storage Box (12 Slots)',
    icon: '📦',
    cost: [{ id: 'wood', count: 6 }, { id: 'fiber', count: 3 }],
    costLabel: '6 Wood, 3 Fiber'
  },
  {
    id: 'campfire',
    name: 'Campfire',
    fullName: 'Campfire & Cooking Ring',
    icon: '🔥',
    cost: [{ id: 'wood', count: 4 }, { id: 'stone', count: 4 }],
    costLabel: '4 Wood, 4 Stone'
  }
];

export class BuildingSystem {
  constructor(scene, terrain, inventory, audio) {
    this.scene = scene;
    this.terrain = terrain;
    this.inventory = inventory;
    this.audio = audio;

    this.activeBlueprint = null; // item ID being built
    this.ghostMesh = null;
    this.ghostRotation = 0; // User manual rotation offset in radians

    this.placedStructures = [];
    this.structuresGroup = new THREE.Group();
    this.structuresGroup.name = 'PlacedStructures';
    this.scene.add(this.structuresGroup);

    // Snapping state
    this.isSnapped = false;
    this.lastSnapId = null;
    this.snapInfo = '';
    this.validationReason = '';

    // Raycaster for aiming
    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = 14.0;

    // Translucent Ghost Hologram Materials
    this.validGhostMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.55,
      wireframe: false,
      depthWrite: false
    });

    this.invalidGhostMat = new THREE.MeshBasicMaterial({
      color: 0xff1744,
      transparent: true,
      opacity: 0.55,
      wireframe: false,
      depthWrite: false
    });
  }

  // Check if player can afford to build this structure (either has crafted piece or raw materials)
  canAfford(blueprintId) {
    if (!blueprintId) return false;
    // 1. If player has the crafted piece item in inventory
    if (this.inventory.getItemCount(blueprintId) > 0) return true;

    // 2. Check raw materials
    const piece = BUILDING_PIECES.find(p => p.id === blueprintId);
    if (!piece || !piece.cost) return false;

    for (let req of piece.cost) {
      if (this.inventory.getItemCount(req.id) < req.count) {
        return false;
      }
    }
    return true;
  }

  getCostString(blueprintId) {
    const piece = BUILDING_PIECES.find(p => p.id === blueprintId);
    return piece ? piece.costLabel : '';
  }

  getMissingCostString(blueprintId) {
    const piece = BUILDING_PIECES.find(p => p.id === blueprintId);
    if (!piece || !piece.cost) return 'Missing materials';

    const missing = [];
    for (let req of piece.cost) {
      const have = this.inventory.getItemCount(req.id);
      if (have < req.count) {
        missing.push(`${req.count} ${req.id} (Have: ${have})`);
      }
    }
    return missing.length > 0 ? `Need: ${missing.join(', ')}` : '';
  }

  // Consume resources upon placing structure
  consumeMaterials(blueprintId) {
    // 1. If player has the crafted piece in inventory, use that first
    if (this.inventory.getItemCount(blueprintId) > 0) {
      return this.inventory.removeItem(blueprintId, 1);
    }

    // 2. Otherwise deduct raw materials
    const piece = BUILDING_PIECES.find(p => p.id === blueprintId);
    if (!piece || !piece.cost) return false;

    // Verify all materials present
    for (let req of piece.cost) {
      if (this.inventory.getItemCount(req.id) < req.count) return false;
    }

    // Deduct raw materials
    for (let req of piece.cost) {
      this.inventory.removeItem(req.id, req.count);
    }
    if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
    return true;
  }

  // Set blueprint to construct
  startBuilding(itemId) {
    if (this.activeBlueprint === itemId && this.ghostMesh) return;
    this.cancelBuilding();

    this.activeBlueprint = itemId;
    this.ghostRotation = 0;
    this.isSnapped = false;
    this.lastSnapId = null;
    this.createGhostMesh(itemId);
  }

  cancelBuilding() {
    this.activeBlueprint = null;
    if (this.ghostMesh) {
      this.scene.remove(this.ghostMesh);
      this.ghostMesh = null;
    }
    this.isSnapped = false;
    this.lastSnapId = null;
    this.snapInfo = '';
    this.validationReason = '';
  }

  // Rotate blueprint with R key (45-degree or 90-degree step, or 180-degree flip when snapped to a wall edge)
  rotateBlueprint() {
    if (!this.ghostMesh) return;

    if (this.isSnapped && (this.activeBlueprint === 'wood_wall' || this.activeBlueprint === 'wood_door')) {
      // Toggle flip inside/outside
      this.ghostRotation += Math.PI;
    } else {
      // Normal 45-degree rotation
      this.ghostRotation += Math.PI / 4;
    }
    this.ghostRotation = this.ghostRotation % (Math.PI * 2);

    if (this.audio) this.audio.playUIClick();
  }

  createGhostMesh(itemId) {
    let ghost = null;
    if (itemId === 'campfire') {
      ghost = StructureModels.createCampfire(true);
    } else if (itemId === 'shelter_lean_to' || itemId === 'basic_shelter') {
      ghost = StructureModels.createShelter(true);
    } else if (itemId === 'wood_foundation') {
      ghost = StructureModels.createFoundation(true);
    } else if (itemId === 'wood_wall') {
      ghost = StructureModels.createWall(true);
    } else if (itemId === 'wood_door') {
      ghost = StructureModels.createDoor(true);
    } else if (itemId === 'wood_roof') {
      ghost = StructureModels.createRoof(true);
    } else if (itemId === 'storage_chest' || itemId === 'storage_box') {
      ghost = StructureModels.createChest(true);
    } else if (itemId === 'rain_collector') {
      ghost = StructureModels.createRainCollector(true);
    }

    if (ghost) {
      // Apply translucent ghost material to all sub-meshes
      ghost.traverse((child) => {
        if (child.isMesh) {
          child.material = this.validGhostMat;
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });
      ghost.rotation.y = this.ghostRotation;
      this.ghostMesh = ghost;
      this.scene.add(this.ghostMesh);
    }
  }

  // Core 3D Raycasting & Magnetic Socket Snapping Engine
  update(camera, playerPosition = null) {
    if (!this.ghostMesh || !this.activeBlueprint) return;

    const camPos = camera.position;
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);

    // 1. Raycast against placed structures first
    this.raycaster.set(camPos, camDir);
    const structHits = this.raycaster.intersectObjects(this.structuresGroup.children, true);

    let hitPoint = null;
    let hitObject = null;

    if (structHits.length > 0 && structHits[0].distance < 8.5) {
      hitPoint = structHits[0].point.clone();
      hitObject = structHits[0].object;
    } else {
      // 2. Raycast / March down against island terrain heightfield
      let foundGround = false;
      const step = 0.25;
      for (let dist = 1.2; dist <= 9.0; dist += step) {
        const testX = camPos.x + camDir.x * dist;
        const testY = camPos.y + camDir.y * dist;
        const testZ = camPos.z + camDir.z * dist;
        const elev = this.terrain.getElevation(testX, testZ);

        if (testY <= elev) {
          hitPoint = new THREE.Vector3(testX, elev, testZ);
          foundGround = true;
          break;
        }
      }

      if (!foundGround) {
        // Fallback: 4.5m forward along camera horizontal aim
        const targetX = camPos.x + camDir.x * 4.5;
        const targetZ = camPos.z + camDir.z * 4.5;
        const groundY = this.terrain.getElevation(targetX, targetZ);
        hitPoint = new THREE.Vector3(targetX, groundY, targetZ);
      }
    }

    // 3. Magnetic Socket Snapping Evaluation
    const snapResult = this.findBestSnapSocket(hitPoint, this.activeBlueprint, camDir);

    let finalPos = hitPoint;
    let finalRotY = this.ghostRotation;

    if (snapResult) {
      this.isSnapped = true;
      finalPos = snapResult.position;
      finalRotY = snapResult.rotationY + this.ghostRotation;
      this.snapInfo = snapResult.type;

      // Play magnetic snap click on acquiring new socket
      const socketKey = `${Math.round(finalPos.x * 5)}_${Math.round(finalPos.z * 5)}_${Math.round(finalPos.y * 5)}`;
      if (this.lastSnapId !== socketKey) {
        this.lastSnapId = socketKey;
        if (this.audio) this.audio.playUIClick();
      }
    } else {
      this.isSnapped = false;
      this.lastSnapId = null;
      this.snapInfo = '';

      // If aiming at a foundation deck with small piece (chest, campfire, shelter), snap elevation to deck surface
      if (hitObject) {
        let root = hitObject;
        while (root && root.parent !== this.structuresGroup) root = root.parent;
        if (root && root.userData && root.userData.type === 'foundation') {
          finalPos.y = root.position.y + 1.2;
        }
      }
    }

    this.ghostMesh.position.copy(finalPos);
    this.ghostMesh.rotation.set(0, finalRotY, 0);

    // 4. Validate Placement (Green = Valid, Red = Blocked / Underwater / Colliding / Insufficient Resources)
    const isValid = this.validatePlacement(finalPos, playerPosition || camPos);

    const targetMat = isValid ? this.validGhostMat : this.invalidGhostMat;
    this.ghostMesh.traverse((child) => {
      if (child.isMesh && child.material !== targetMat) {
        child.material = targetMat;
      }
    });

    this.ghostMesh.userData.isValid = isValid;
  }

  // Find the closest valid magnetic snap socket within snap distance
  findBestSnapSocket(aimPoint, blueprintId, camDir) {
    if (this.placedStructures.length === 0) return null;

    let bestSocket = null;
    let minDistance = Infinity;

    // Snapping thresholds
    const snapThreshold = 2.6; // meters

    for (let struct of this.placedStructures) {
      const type = struct.userData.type;
      const sp = struct.position;
      const sRot = struct.rotation.y;

      // === FOUNDATION SNAPPING ===
      if (blueprintId === 'wood_foundation') {
        if (type === 'foundation') {
          // 4 Lateral foundation sockets (East, West, South, North: 4.0m offset, same deck height)
          const offsets = [
            { x: 4.0, z: 0.0 },
            { x: -4.0, z: 0.0 },
            { x: 0.0, z: 4.0 },
            { x: 0.0, z: -4.0 }
          ];

          for (let off of offsets) {
            // Apply foundation rotation
            const cos = Math.cos(sRot);
            const sin = Math.sin(sRot);
            const wx = sp.x + (off.x * cos - off.z * sin);
            const wz = sp.z + (off.x * sin + off.z * cos);
            const wy = sp.y; // Level deck height match!

            const socketPos = new THREE.Vector3(wx, wy, wz);
            const dist = socketPos.distanceTo(aimPoint);

            if (dist < snapThreshold && dist < minDistance) {
              // Ensure this socket isn't already occupied by another foundation
              const occupied = this.placedStructures.some(other =>
                other !== struct &&
                other.userData.type === 'foundation' &&
                other.position.distanceTo(socketPos) < 0.6
              );

              if (!occupied) {
                minDistance = dist;
                bestSocket = {
                  position: socketPos,
                  rotationY: sRot,
                  type: 'Lateral Foundation'
                };
              }
            }
          }
        }
      }

      // === WALL & DOOR SNAPPING ===
      else if (blueprintId === 'wood_wall' || blueprintId === 'wood_door') {
        if (type === 'foundation') {
          // 4 Perimeter sockets sitting directly on the foundation deck planks (y + 1.2m, 2.0m offset from center)
          const edges = [
            { x: 0, z: -2.0, rot: 0 },
            { x: 0, z: 2.0, rot: Math.PI },
            { x: 2.0, z: 0, rot: -Math.PI / 2 },
            { x: -2.0, z: 0, rot: Math.PI / 2 }
          ];

          for (let edge of edges) {
            const cos = Math.cos(sRot);
            const sin = Math.sin(sRot);
            const wx = sp.x + (edge.x * cos - edge.z * sin);
            const wz = sp.z + (edge.x * sin + edge.z * cos);
            const wy = sp.y + 1.2; // Sit atop deck

            const socketPos = new THREE.Vector3(wx, wy, wz);
            const dist = socketPos.distanceTo(aimPoint);

            if (dist < snapThreshold && dist < minDistance) {
              const occupied = this.placedStructures.some(other =>
                (other.userData.type === 'wall' || other.userData.type === 'door') &&
                other.position.distanceTo(socketPos) < 0.6
              );

              if (!occupied) {
                minDistance = dist;
                bestSocket = {
                  position: socketPos,
                  rotationY: sRot + edge.rot,
                  type: 'Perimeter Wall'
                };
              }
            }
          }
        } else if (type === 'wall' || type === 'door') {
          // 2nd Story stacked wall directly on top (y + 2.8m)
          const socketPos = new THREE.Vector3(sp.x, sp.y + 2.8, sp.z);
          const dist = socketPos.distanceTo(aimPoint);

          if (dist < snapThreshold && dist < minDistance) {
            const occupied = this.placedStructures.some(other =>
              (other.userData.type === 'wall' || other.userData.type === 'door') &&
              other.position.distanceTo(socketPos) < 0.6
            );

            if (!occupied) {
              minDistance = dist;
              bestSocket = {
                position: socketPos,
                rotationY: sRot,
                type: '2nd Story Wall Stack'
              };
            }
          }
        }
      }

      // === ROOF SNAPPING ===
      else if (blueprintId === 'wood_roof') {
        if (type === 'wall' || type === 'door') {
          // Roof sitting directly on wall top header beam (y + 2.8m)
          const socketPos = new THREE.Vector3(sp.x, sp.y + 2.8, sp.z);
          const dist = socketPos.distanceTo(aimPoint);

          if (dist < snapThreshold && dist < minDistance) {
            const occupied = this.placedStructures.some(other =>
              other.userData.type === 'roof' &&
              other.position.distanceTo(socketPos) < 0.8
            );

            if (!occupied) {
              minDistance = dist;
              bestSocket = {
                position: socketPos,
                rotationY: sRot,
                type: 'Wall Top Roof'
              };
            }
          }
        } else if (type === 'foundation') {
          // Pavilion roof or 1-story room roof
          const hasWalls = this.placedStructures.some(w =>
            (w.userData.type === 'wall' || w.userData.type === 'door') &&
            Math.hypot(w.position.x - sp.x, w.position.z - sp.z) < 2.5
          );

          const roofY = hasWalls ? sp.y + 4.0 : sp.y + 1.2;
          const socketPos = new THREE.Vector3(sp.x, roofY, sp.z);
          const dist = socketPos.distanceTo(aimPoint);

          if (dist < 3.2 && dist < minDistance) {
            const occupied = this.placedStructures.some(other =>
              other.userData.type === 'roof' &&
              other.position.distanceTo(socketPos) < 0.8
            );

            if (!occupied) {
              minDistance = dist;
              bestSocket = {
                position: socketPos,
                rotationY: sRot,
                type: 'Foundation Roof Cap'
              };
            }
          }
        }
      }

      // === STORAGE BOX & CAMPFIRE FLOOR SNAP ===
      else if (blueprintId === 'storage_box' || blueprintId === 'storage_chest' || blueprintId === 'campfire') {
        if (type === 'foundation') {
          // Sit on top of floor deck planks
          const deckSurfaceY = sp.y + 1.2;
          const distHorizontal = Math.hypot(aimPoint.x - sp.x, aimPoint.z - sp.z);

          if (distHorizontal < 1.8) {
            const socketPos = new THREE.Vector3(aimPoint.x, deckSurfaceY, aimPoint.z);
            minDistance = 0.1;
            bestSocket = {
              position: socketPos,
              rotationY: sRot,
              type: 'Floor Deck Surface'
            };
          }
        }
      }
    }

    return bestSocket;
  }

  // Validate placement position against physics, ocean water line, player body, duplicate structures, and materials
  validatePlacement(position, playerPos) {
    // 1. Resource / Cost Check
    if (!this.canAfford(this.activeBlueprint)) {
      this.validationReason = this.getMissingCostString(this.activeBlueprint);
      return false;
    }

    // 2. Water Level Check: Cannot build deep underwater in the ocean
    const oceanLevel = -0.2;
    if (position.y < oceanLevel) {
      this.validationReason = 'Cannot build underwater in ocean';
      return false;
    }

    // 3. Player Collision Check: Don't place solid structures inside the player's body
    if (playerPos) {
      const hDist = Math.hypot(position.x - playerPos.x, position.z - playerPos.z);
      const vDist = Math.abs(position.y - playerPos.y);

      if (this.activeBlueprint === 'wood_wall' || this.activeBlueprint === 'wood_door') {
        if (hDist < 1.3 && vDist < 2.8) {
          this.validationReason = 'Obstructed by player body';
          return false;
        }
      } else if (this.activeBlueprint === 'wood_foundation') {
        if (hDist < 1.5 && vDist < 1.4) {
          this.validationReason = 'Obstructed by player body';
          return false;
        }
      }
    }

    // 4. Foundation height reachability: Foundation stilts cannot float in mid-air
    if (this.activeBlueprint === 'wood_foundation') {
      const groundAtCenter = this.terrain.getElevation(position.x, position.z);
      if (groundAtCenter > position.y + 1.2) {
        this.validationReason = 'Terrain too steep / buried';
        return false;
      }
      if (position.y - groundAtCenter > 4.5) {
        this.validationReason = 'Too high above ground level';
        return false;
      }
    }

    // 5. Duplicate piece collision: Cannot place exact identical piece in exact same spot
    const duplicate = this.placedStructures.some(s => {
      return (
        s.userData.type === this.getTypeForBlueprint(this.activeBlueprint) &&
        s.position.distanceTo(position) < 0.4
      );
    });
    if (duplicate) {
      this.validationReason = 'Space already occupied';
      return false;
    }

    this.validationReason = 'Ready to place';
    return true;
  }

  getTypeForBlueprint(blueprintId) {
    if (blueprintId === 'campfire') return 'campfire';
    if (blueprintId === 'basic_shelter' || blueprintId === 'shelter_lean_to') return 'shelter';
    if (blueprintId === 'wood_foundation') return 'foundation';
    if (blueprintId === 'wood_wall') return 'wall';
    if (blueprintId === 'wood_door') return 'door';
    if (blueprintId === 'wood_roof') return 'roof';
    if (blueprintId === 'storage_box' || blueprintId === 'storage_chest') return 'chest';
    if (blueprintId === 'rain_collector') return 'collector';
    return null;
  }

  // Construct solid structure into the game world and consume materials
  placeStructure() {
    if (!this.ghostMesh || !this.ghostMesh.userData.isValid || !this.activeBlueprint) {
      return false;
    }

    const id = this.activeBlueprint;

    // Deduct materials from inventory (crafted piece or raw resources)
    if (!this.consumeMaterials(id)) {
      return false;
    }

    const pos = this.ghostMesh.position.clone();
    const rotY = this.ghostMesh.rotation.y;

    let realStructure = null;
    if (id === 'campfire') {
      realStructure = StructureModels.createCampfire(false);
    } else if (id === 'shelter_lean_to' || id === 'basic_shelter') {
      realStructure = StructureModels.createShelter(false);
    } else if (id === 'wood_foundation') {
      realStructure = StructureModels.createFoundation(false);
    } else if (id === 'wood_wall') {
      realStructure = StructureModels.createWall(false);
    } else if (id === 'wood_door') {
      realStructure = StructureModels.createDoor(false);
    } else if (id === 'wood_roof') {
      realStructure = StructureModels.createRoof(false);
    } else if (id === 'storage_chest' || id === 'storage_box') {
      realStructure = StructureModels.createChest(false);
    } else if (id === 'rain_collector') {
      realStructure = StructureModels.createRainCollector(false);
    }

    if (realStructure) {
      realStructure.position.copy(pos);
      realStructure.rotation.y = rotY;
      this.structuresGroup.add(realStructure);
      this.placedStructures.push(realStructure);

      if (this.audio) this.audio.playPlaceStructure();

      // Check if player still has resources to continue placing
      if (!this.canAfford(id)) {
        // Still keep ghost visible, but it will turn red if unable to afford next piece
        this.ghostMesh.userData.isValid = false;
      }
      return true;
    }

    return false;
  }

  // Raycast query for interacting with placed structures (Storage Box, Campfire, Door, Bed, Water Collector)
  checkInteraction(raycaster, maxDistance = 3.8) {
    const hits = raycaster.intersectObjects(this.structuresGroup.children, true);
    for (let hit of hits) {
      if (hit.distance <= maxDistance) {
        let cur = hit.object;
        while (cur && cur.parent !== this.structuresGroup) {
          cur = cur.parent;
        }
        if (cur && cur.userData && cur.userData.type) {
          return cur;
        }
      }
    }
    return null;
  }

  // Animate dynamic campfire flame flicker and warm lighting
  updateCampfires(delta) {
    const time = performance.now() * 0.005;
    for (let s of this.placedStructures) {
      if (s.userData && s.userData.isCampfire && s.userData.flame && s.userData.light) {
        const flicker = Math.sin(time * 3 + s.position.x) * 0.12 + Math.cos(time * 5) * 0.08;
        s.userData.flame.scale.set(1.0 + flicker, 1.0 + flicker * 1.4, 1.0 + flicker);
        s.userData.light.intensity = 2.5 + flicker * 1.5;
      }
    }
  }

  // Save all placed structures and custom data to JSON
  serialize() {
    return this.placedStructures.map(s => {
      const data = {
        type: s.userData.type,
        x: Number(s.position.x.toFixed(3)),
        y: Number(s.position.y.toFixed(3)),
        z: Number(s.position.z.toFixed(3)),
        rotY: Number(s.rotation.y.toFixed(3))
      };

      if (s.userData.type === 'chest' && s.userData.items) {
        data.items = s.userData.items.map(it => it ? { id: it.id, count: it.count } : null);
      }
      if (s.userData.type === 'door') {
        data.isOpen = Boolean(s.userData.isOpen);
      }
      return data;
    });
  }

  // Restore placed structures from save data
  deserialize(data) {
    if (!Array.isArray(data)) return;

    // Clear current placed structures if any
    while (this.structuresGroup.children.length > 0) {
      this.structuresGroup.remove(this.structuresGroup.children[0]);
    }
    this.placedStructures = [];

    for (let item of data) {
      let structure = null;
      if (item.type === 'campfire') structure = StructureModels.createCampfire(false);
      else if (item.type === 'shelter') structure = StructureModels.createShelter(false);
      else if (item.type === 'foundation') structure = StructureModels.createFoundation(false);
      else if (item.type === 'wall') structure = StructureModels.createWall(false);
      else if (item.type === 'door') structure = StructureModels.createDoor(false);
      else if (item.type === 'roof') structure = StructureModels.createRoof(false);
      else if (item.type === 'chest') structure = StructureModels.createChest(false);
      else if (item.type === 'collector') structure = StructureModels.createRainCollector(false);

      if (structure) {
        structure.position.set(item.x, item.y, item.z);
        structure.rotation.y = item.rotY || 0;

        // Restore custom state
        if (item.type === 'chest' && item.items) {
          structure.userData.items = item.items;
        }
        if (item.type === 'door' && item.isOpen) {
          structure.userData.toggleDoor();
        }

        this.structuresGroup.add(structure);
        this.placedStructures.push(structure);
      }
    }
  }
}
