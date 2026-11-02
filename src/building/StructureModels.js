// Procedural 3D Models for Survival Base Building & Placeable Structures
import * as THREE from '../three.js';

export class StructureModels {
  // Shared materials
  static getMaterials() {
    return {
      wood: new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.9, flatShading: true }),
      plank: new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.85 }),
      thatch: new THREE.MeshStandardMaterial({ color: 0x33691e, roughness: 0.8, side: THREE.DoubleSide }),
      stone: new THREE.MeshStandardMaterial({ color: 0x616161, roughness: 0.95, flatShading: true }),
      metal: new THREE.MeshStandardMaterial({ color: 0x37474f, roughness: 0.4, metalness: 0.8 })
    };
  }

  // 1. Campfire (Stones, Logs, Animated Fire & Smoke)
  static createCampfire(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    // Stone ring
    const stoneGeo = new THREE.DodecahedronGeometry(0.22, 1);
    const stoneCount = 8;
    for (let i = 0; i < stoneCount; i++) {
      const a = (i / stoneCount) * Math.PI * 2;
      const stone = new THREE.Mesh(stoneGeo, mats.stone);
      stone.position.set(Math.cos(a) * 0.75, 0.1, Math.sin(a) * 0.75);
      stone.scale.set(1.0, 0.7, 1.0);
      stone.castShadow = !isGhost;
      group.add(stone);
    }

    // Crossed wood logs
    const logGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.85, 6);
    logGeo.rotateX(Math.PI / 2);
    for (let i = 0; i < 3; i++) {
      const log = new THREE.Mesh(logGeo, mats.wood);
      log.rotation.y = (i * Math.PI) / 3;
      log.position.y = 0.12;
      log.castShadow = !isGhost;
      group.add(log);
    }

    if (!isGhost) {
      // Animated Flame
      const flameGeo = new THREE.ConeGeometry(0.24, 0.55, 6);
      const flameMat = new THREE.MeshBasicMaterial({ color: 0xff6d00 });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.y = 0.38;
      group.add(flame);

      // Dynamic warm fire light
      const fireLight = new THREE.PointLight(0xff7a00, 2.5, 16);
      fireLight.position.set(0, 0.6, 0);
      group.add(fireLight);

      group.userData = {
        type: 'campfire',
        name: 'Campfire',
        flame: flame,
        light: fireLight,
        isCampfire: true
      };
    }

    return group;
  }

  // 2. Lean-to Shelter & Bed
  static createShelter(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    // A-frame timber poles
    const poleGeo = new THREE.CylinderGeometry(0.08, 0.09, 2.8, 6);
    const pole1 = new THREE.Mesh(poleGeo, mats.wood);
    pole1.position.set(-1.2, 1.2, 0);
    pole1.rotation.z = -0.3;
    group.add(pole1);

    const pole2 = new THREE.Mesh(poleGeo, mats.wood);
    pole2.position.set(1.2, 1.2, 0);
    pole2.rotation.z = 0.3;
    group.add(pole2);

    // Ridge beam
    const ridgeGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.8, 6);
    ridgeGeo.rotateZ(Math.PI / 2);
    const ridge = new THREE.Mesh(ridgeGeo, mats.wood);
    ridge.position.set(0, 2.2, 0);
    group.add(ridge);

    // Thatched Palm Roof Canopy
    const roofGeo = new THREE.PlaneGeometry(2.6, 2.4);
    roofGeo.rotateX(-Math.PI / 3);
    const roof = new THREE.Mesh(roofGeo, mats.thatch);
    roof.position.set(0, 1.2, -0.6);
    roof.castShadow = !isGhost;
    group.add(roof);

    // Palm leaf sleeping bed
    const bedGeo = new THREE.BoxGeometry(1.4, 0.18, 2.0);
    const bed = new THREE.Mesh(bedGeo, mats.thatch);
    bed.position.set(0, 0.1, 0.2);
    group.add(bed);

    group.userData = {
      type: 'shelter',
      name: 'Lean-to Shelter & Bed',
      isBed: true
    };

    return group;
  }

  // 3. Wood Foundation
  static createFoundation(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    // 4 Corner stilts
    const stiltGeo = new THREE.CylinderGeometry(0.12, 0.14, 1.2, 6);
    const corners = [[-1.8, -1.8], [1.8, -1.8], [-1.8, 1.8], [1.8, 1.8]];
    for (let c of corners) {
      const stilt = new THREE.Mesh(stiltGeo, mats.wood);
      stilt.position.set(c[0], 0.6, c[1]);
      group.add(stilt);
    }

    // Floor deck planks
    const deckGeo = new THREE.BoxGeometry(4.0, 0.22, 4.0);
    const deck = new THREE.Mesh(deckGeo, mats.plank);
    deck.position.y = 1.2;
    deck.castShadow = !isGhost;
    deck.receiveShadow = !isGhost;
    group.add(deck);

    group.userData = { type: 'foundation', name: 'Wood Foundation' };
    return group;
  }

  // 4. Wood Wall
  static createWall(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    // Vertical timber logs
    const wallGeo = new THREE.BoxGeometry(4.0, 2.8, 0.25);
    const wall = new THREE.Mesh(wallGeo, mats.plank);
    wall.position.y = 1.4;
    wall.castShadow = !isGhost;
    wall.receiveShadow = !isGhost;
    group.add(wall);

    // Support frame
    const frameGeo = new THREE.CylinderGeometry(0.1, 0.1, 4.0, 6);
    frameGeo.rotateZ(Math.PI / 2);
    const beam = new THREE.Mesh(frameGeo, mats.wood);
    beam.position.y = 2.7;
    group.add(beam);

    group.userData = { type: 'wall', name: 'Wood Wall' };
    return group;
  }

  // 5. Wood Doorway & Interactive Door
  static createDoor(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    // Left and right wall segments
    const sideGeo = new THREE.BoxGeometry(1.3, 2.8, 0.25);
    const sideL = new THREE.Mesh(sideGeo, mats.plank);
    sideL.position.set(-1.35, 1.4, 0);
    group.add(sideL);

    const sideR = new THREE.Mesh(sideGeo, mats.plank);
    sideR.position.set(1.35, 1.4, 0);
    group.add(sideR);

    // Header beam
    const headerGeo = new THREE.BoxGeometry(1.4, 0.6, 0.25);
    const header = new THREE.Mesh(headerGeo, mats.plank);
    header.position.set(0, 2.5, 0);
    group.add(header);

    // Interactive swinging door
    const doorPivot = new THREE.Group();
    doorPivot.position.set(-0.7, 0, 0);

    const doorPanelGeo = new THREE.BoxGeometry(1.35, 2.2, 0.15);
    const doorPanel = new THREE.Mesh(doorPanelGeo, mats.wood);
    doorPanel.position.set(0.675, 1.1, 0);
    doorPivot.add(doorPanel);
    group.add(doorPivot);

    group.userData = {
      type: 'door',
      name: 'Wood Door',
      doorPivot: doorPivot,
      isOpen: false,
      toggleDoor: () => {
        group.userData.isOpen = !group.userData.isOpen;
        doorPivot.rotation.y = group.userData.isOpen ? Math.PI / 2.2 : 0;
      }
    };
    return group;
  }

  // 6. Thatched Roof
  static createRoof(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    const roofGeo = new THREE.ConeGeometry(3.0, 1.8, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roof = new THREE.Mesh(roofGeo, mats.thatch);
    roof.position.y = 0.9;
    roof.castShadow = !isGhost;
    group.add(roof);

    group.userData = { type: 'roof', name: 'Thatched Roof' };
    return group;
  }

  // 7. Storage Box / Chest
  static createChest(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    // Chest Body Box
    const baseGeo = new THREE.BoxGeometry(1.2, 0.5, 0.75);
    const base = new THREE.Mesh(baseGeo, mats.plank);
    base.position.y = 0.25;
    base.castShadow = !isGhost;
    group.add(base);

    // Reinforced corner iron bands
    const bandMat = mats.metal;
    const bandGeo = new THREE.BoxGeometry(1.22, 0.08, 0.77);
    const bandBottom = new THREE.Mesh(bandGeo, bandMat);
    bandBottom.position.y = 0.10;
    group.add(bandBottom);

    const bandTop = new THREE.Mesh(bandGeo, bandMat);
    bandTop.position.y = 0.45;
    group.add(bandTop);

    // Hinged Lid Pivot
    const lidPivot = new THREE.Group();
    lidPivot.position.set(0, 0.50, -0.375);

    const lidGeo = new THREE.BoxGeometry(1.24, 0.14, 0.78);
    const lid = new THREE.Mesh(lidGeo, mats.wood);
    lid.position.set(0, 0.07, 0.39);
    lidPivot.add(lid);

    // Front Metal Clasp / Latch
    const lockGeo = new THREE.BoxGeometry(0.12, 0.18, 0.08);
    const lock = new THREE.Mesh(lockGeo, mats.metal);
    lock.position.set(0, 0.04, 0.79);
    lidPivot.add(lock);

    group.add(lidPivot);

    group.userData = {
      type: 'chest',
      name: 'Storage Box',
      isChest: true,
      lidPivot: lidPivot,
      isOpen: false,
      items: Array.from({ length: 12 }, () => null),
      toggleOpen: (open) => {
        const targetOpen = open !== undefined ? open : !group.userData.isOpen;
        group.userData.isOpen = targetOpen;
        lidPivot.rotation.x = targetOpen ? -Math.PI / 2.5 : 0;
      }
    };
    return group;
  }

  // 8. Rainwater Basin / Collector
  static createRainCollector(isGhost = false) {
    const group = new THREE.Group();
    const mats = this.getMaterials();

    // Trough tub
    const tubGeo = new THREE.CylinderGeometry(0.6, 0.5, 0.7, 8);
    const tub = new THREE.Mesh(tubGeo, mats.wood);
    tub.position.y = 0.35;
    tub.castShadow = !isGhost;
    group.add(tub);

    // Palm leaf catch funnel
    const funnelGeo = new THREE.ConeGeometry(0.9, 0.5, 6);
    funnelGeo.rotateX(Math.PI);
    const funnel = new THREE.Mesh(funnelGeo, mats.thatch);
    funnel.position.y = 0.85;
    group.add(funnel);

    group.userData = {
      type: 'collector',
      name: 'Rainwater Collector',
      waterLevel: 50,
      maxWater: 100,
      isCollector: true
    };
    return group;
  }
}
