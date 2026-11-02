// Enhanced 3D Procedural Models for Tropical Flora, Natural Resources & Gathering Nodes
import * as THREE from '../three.js';
import { TextureGenerator } from './TextureGenerator.js';

export class FloraModels {
  static barkTex = null;
  static leafTex = null;

  static getTextures() {
    if (!this.barkTex && typeof document !== 'undefined') {
      this.barkTex = TextureGenerator.createPalmBarkTexture();
      this.leafTex = TextureGenerator.createPalmLeafTexture();
    }
    return { bark: this.barkTex || null, leaf: this.leafTex || null };
  }

  // 1. Large Majestic Tropical Coconut Palm Tree with Varied Sizes
  static createPalmTree(variant = 'tall') {
    const group = new THREE.Group();
    const tex = this.getTextures();

    let height = 12.5 + Math.random() * 3.5;
    let lean = 2.6 + Math.random() * 2.0;
    let trunkRadius = 0.50;
    let frondCount = 16;
    let nutCount = 4;

    if (variant === 'king') {
      height = 16.0 + Math.random() * 3.5;
      lean = 2.2 + Math.random() * 1.8;
      trunkRadius = 0.65;
      frondCount = 20;
      nutCount = 6;
    } else if (variant === 'leaning') {
      lean = 5.6 + Math.random() * 2.2;
      height = 10.5 + Math.random() * 2.2;
      trunkRadius = 0.48;
      frondCount = 14;
      nutCount = 4;
    } else if (variant === 'dwarf') {
      height = 5.5 + Math.random() * 1.8;
      lean = 1.0 + Math.random() * 0.8;
      trunkRadius = 0.35;
      frondCount = 12;
      nutCount = 3;
    } else if (variant === 'sapling') {
      height = 3.2 + Math.random() * 1.2;
      lean = 0.5;
      trunkRadius = 0.22;
      frondCount = 8;
      nutCount = 0;
    }

    const leanAngle = Math.random() * Math.PI * 2;
    const curvePoints = [];
    const segments = 8;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const y = t * height;
      const horizontalOffset = Math.pow(t, 1.4) * lean;
      const x = horizontalOffset * Math.cos(leanAngle);
      const z = horizontalOffset * Math.sin(leanAngle);
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const trunkGeo = new THREE.TubeGeometry(curve, 20, trunkRadius, 10, false);

    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x82644d,
      map: tex.bark,
      roughness: 0.88,
      metalness: 0.05
    });

    const trunkMesh = new THREE.Mesh(trunkGeo, trunkMat);
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    group.add(trunkMesh);

    // Root flare at base
    const rootGeo = new THREE.CylinderGeometry(trunkRadius * 1.05, trunkRadius * 1.6, 0.8, 8);
    const rootMesh = new THREE.Mesh(rootGeo, trunkMat);
    rootMesh.position.y = 0.4;
    group.add(rootMesh);

    // Crown of Lush Arching Palm Fronds
    const crownPos = curvePoints[curvePoints.length - 1];
    const frondGroup = new THREE.Group();
    frondGroup.position.copy(crownPos);

    const frondMat = new THREE.MeshStandardMaterial({
      color: 0x388e3c,
      roughness: 0.6,
      metalness: 0.08,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < frondCount; i++) {
      const angle = (i / frondCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.15;
      const frondMesh = this.createDetailedFrond(frondMat, height);
      frondMesh.rotation.y = angle;
      const tier = i % 3;
      frondMesh.rotation.x = 0.25 + tier * 0.18 + Math.random() * 0.1;
      frondGroup.add(frondMesh);
    }

    // Cluster of Ripe Coconuts on Crown
    if (nutCount > 0) {
      const coconutMat = new THREE.MeshStandardMaterial({
        color: 0x543d2b,
        roughness: 0.75
      });
      const coconutGeo = new THREE.DodecahedronGeometry(trunkRadius * 0.65, 1);
      for (let i = 0; i < nutCount; i++) {
        const nut = new THREE.Mesh(coconutGeo, coconutMat);
        const a = (i / nutCount) * Math.PI * 2;
        nut.position.set(Math.cos(a) * (trunkRadius * 0.95), -0.35 - Math.random() * 0.2, Math.sin(a) * (trunkRadius * 0.95));
        nut.castShadow = true;
        frondGroup.add(nut);
      }
    }

    group.add(frondGroup);

    group.userData = {
      type: 'palm_tree',
      name: variant === 'king' ? 'King Coconut Palm' : (variant === 'dwarf' ? 'Dwarf Beach Palm' : 'Coconut Palm'),
      maxHealth: variant === 'king' ? 120 : (variant === 'dwarf' ? 50 : 80),
      health: variant === 'king' ? 120 : (variant === 'dwarf' ? 50 : 80),
      resourceYield: { wood: variant === 'king' ? 6 : (variant === 'dwarf' ? 2 : 4), leaves: 3, coconut: nutCount > 0 ? 2 : 0 },
      toolCategory: 'axe',
      height: height,
      frondGroup: frondGroup
    };

    return group;
  }

  static createDetailedFrond(material, treeHeight) {
    const frond = new THREE.Group();
    const length = 5.2 + Math.min(treeHeight * 0.15, 2.0);
    const leaflets = 9;

    const stemGeo = new THREE.CylinderGeometry(0.04, 0.06, length, 5);
    stemGeo.rotateX(Math.PI / 2);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x689f38, roughness: 0.7 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.z = length * 0.5;
    frond.add(stem);

    for (let i = 1; i < leaflets; i++) {
      const t = i / leaflets;
      const bladeWidth = Math.sin(t * Math.PI) * 1.6 + 0.3;
      const bladeLength = length / leaflets * 1.1;

      const bladeGeo = new THREE.ConeGeometry(bladeWidth * 0.5, bladeLength, 3);
      bladeGeo.rotateX(Math.PI / 2);
      const blade = new THREE.Mesh(bladeGeo, material);

      const droop = Math.pow(t, 2.0) * 1.4;
      blade.position.set(0, -droop, t * length);
      blade.scale.set(1.0, 0.08, 1.0);
      blade.castShadow = true;
      frond.add(blade);
    }

    return frond;
  }

  // 2. Dense Rainforest Jungle Tree
  static createJungleTree() {
    const group = new THREE.Group();
    const trunkHeight = 13 + Math.random() * 4;

    const trunkGeo = new THREE.CylinderGeometry(0.75, 1.3, trunkHeight, 8);
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x4a3525,
      roughness: 0.92,
      flatShading: true
    });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = trunkHeight / 2;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);

    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x1b5e20,
      roughness: 0.75,
      flatShading: true
    });

    const canopyPuffs = 6;
    for (let i = 0; i < canopyPuffs; i++) {
      const r = 4.2 + Math.random() * 2.2;
      const fGeo = new THREE.DodecahedronGeometry(r, 1);
      const puff = new THREE.Mesh(fGeo, foliageMat);
      const angle = (i / canopyPuffs) * Math.PI * 2;
      const dist = 2.2 + Math.random() * 2.5;

      puff.position.set(
        Math.cos(angle) * dist,
        trunkHeight + (Math.random() - 0.5) * 2.5,
        Math.sin(angle) * dist
      );
      puff.scale.set(1.3, 0.75, 1.3);
      puff.castShadow = true;
      group.add(puff);
    }

    group.userData = {
      type: 'jungle_tree',
      name: 'Rainforest Banyan',
      maxHealth: 110,
      health: 110,
      resourceYield: { wood: 6, leaves: 4, fiber: 4 },
      toolCategory: 'axe'
    };

    return group;
  }

  // 3. Harvestable Boulder / Mineral Rock Node
  static createRockNode() {
    const group = new THREE.Group();
    const radius = 1.3 + Math.random() * 0.8;

    const rockGeo = new THREE.DodecahedronGeometry(radius, 1);
    const pos = rockGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i);
      v.x += (Math.random() - 0.5) * 0.4;
      v.y *= 0.65 + Math.random() * 0.3;
      v.z += (Math.random() - 0.5) * 0.4;
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    rockGeo.computeVertexNormals();

    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x6e6359,
      roughness: 0.9,
      metalness: 0.15,
      flatShading: true
    });

    const rockMesh = new THREE.Mesh(rockGeo, rockMat);
    rockMesh.castShadow = true;
    rockMesh.receiveShadow = true;
    rockMesh.position.y = radius * 0.45;
    group.add(rockMesh);

    group.userData = {
      type: 'rock_node',
      name: 'Granite Boulder',
      maxHealth: 75,
      health: 75,
      resourceYield: { stone: 5, flint: 2 },
      toolCategory: 'pickaxe'
    };

    return group;
  }

  // 4. Beach Driftwood Log (Can be chopped or gathered)
  static createDriftwood() {
    const group = new THREE.Group();
    const length = 3.0 + Math.random() * 1.8;
    const woodGeo = new THREE.CylinderGeometry(0.20, 0.28, length, 7);
    woodGeo.rotateZ(Math.PI / 2);

    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x9e887a,
      roughness: 0.95,
      flatShading: true
    });

    const mesh = new THREE.Mesh(woodGeo, woodMat);
    mesh.position.y = 0.18;
    mesh.rotation.y = Math.random() * Math.PI;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    group.userData = {
      type: 'driftwood',
      name: 'Beach Driftwood',
      maxHealth: 25,
      health: 25,
      resourceYield: { wood: 3, fiber: 2 },
      isDirectPickup: true,
      pickupPrompt: '[E] Gather Driftwood Timber'
    };

    return group;
  }

  // 5. Ground Coconut (Loose on sand under palms, collect with [E])
  static createGroundCoconut() {
    const group = new THREE.Group();

    // Fibrous outer husk
    const huskGeo = new THREE.DodecahedronGeometry(0.26, 1);
    const huskMat = new THREE.MeshStandardMaterial({
      color: 0x5d4037,
      roughness: 0.88,
      flatShading: true
    });
    const husk = new THREE.Mesh(huskGeo, huskMat);
    husk.position.y = 0.20;
    husk.scale.set(0.9, 1.15, 0.9);
    husk.castShadow = true;
    group.add(husk);

    // Three coconut eye indents on top
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x271911 });
    const eyeGeo = new THREE.SphereGeometry(0.035, 4, 4);
    for (let i = 0; i < 3; i++) {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      const angle = (i / 3) * Math.PI * 2;
      eye.position.set(Math.cos(angle) * 0.08, 0.42, Math.sin(angle) * 0.08);
      group.add(eye);
    }

    group.userData = {
      type: 'ground_coconut',
      name: 'Fresh Coconut',
      isDirectPickup: true,
      resourceYield: { coconut: 1 },
      pickupPrompt: '[E] Pick up Fresh Coconut'
    };

    return group;
  }

  // 6. Loose Beach & River Stone (Smooth pebble, collect with [E])
  static createGroundStone() {
    const group = new THREE.Group();

    const stoneGeo = new THREE.DodecahedronGeometry(0.24, 1);
    const pos = stoneGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i);
      v.x += (Math.random() - 0.5) * 0.08;
      v.y *= 0.55;
      v.z += (Math.random() - 0.5) * 0.08;
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    stoneGeo.computeVertexNormals();

    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x78909c,
      roughness: 0.82,
      metalness: 0.1,
      flatShading: true
    });

    const mesh = new THREE.Mesh(stoneGeo, stoneMat);
    mesh.position.y = 0.10;
    mesh.castShadow = true;
    group.add(mesh);

    group.userData = {
      type: 'ground_stone',
      name: 'Hard Stone',
      isDirectPickup: true,
      resourceYield: { stone: 1 },
      pickupPrompt: '[E] Pick up Hard Stone'
    };

    return group;
  }

  // 7. Wild Berry Bush (Glossy berries attached, pluck with [E])
  static createBerryBush() {
    const group = new THREE.Group();

    // Bush foliage core
    const bushMat = new THREE.MeshStandardMaterial({
      color: 0x2e7d32,
      roughness: 0.7,
      flatShading: true
    });

    const puffs = 4;
    for (let i = 0; i < puffs; i++) {
      const r = 0.6 + Math.random() * 0.35;
      const bGeo = new THREE.DodecahedronGeometry(r, 1);
      const bMesh = new THREE.Mesh(bGeo, bushMat);
      const angle = (i / puffs) * Math.PI * 2;
      bMesh.position.set(Math.cos(angle) * 0.35, 0.45 + (Math.random() - 0.5) * 0.2, Math.sin(angle) * 0.35);
      bMesh.castShadow = true;
      group.add(bMesh);
    }

    // Plump red/purple berry clusters
    const berryMat = new THREE.MeshStandardMaterial({
      color: 0xc2185b,
      roughness: 0.35,
      metalness: 0.1
    });
    const berryGeo = new THREE.SphereGeometry(0.085, 6, 6);
    const berryGroup = new THREE.Group();

    const berryCount = 8;
    for (let i = 0; i < berryCount; i++) {
      const berry = new THREE.Mesh(berryGeo, berryMat);
      const a = (i / berryCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const dist = 0.65 + Math.random() * 0.25;
      berry.position.set(Math.cos(a) * dist, 0.5 + (Math.random() - 0.5) * 0.3, Math.sin(a) * dist);
      berry.castShadow = true;
      berryGroup.add(berry);
    }
    group.add(berryGroup);

    group.userData = {
      type: 'berry_bush',
      name: 'Island Berry Bush',
      isDirectPickup: true,
      berryGroup: berryGroup,
      resourceYield: { berries: 3 },
      pickupPrompt: '[E] Pick Island Berries'
    };

    return group;
  }

  // 8. Wild Forest Mushroom Cluster (Red caps with white spots, gather with [E])
  static createMushroomNode() {
    const group = new THREE.Group();

    const stemMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.85 });
    const capMat = new THREE.MeshStandardMaterial({ color: 0xd32f2f, roughness: 0.5 });
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const shroomCount = 3;
    for (let i = 0; i < shroomCount; i++) {
      const shroom = new THREE.Group();
      const scale = 0.7 + Math.random() * 0.5;

      // Stem
      const stemGeo = new THREE.CylinderGeometry(0.035, 0.05, 0.30, 6);
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.y = 0.15;
      shroom.add(stem);

      // Cap
      const capGeo = new THREE.ConeGeometry(0.18, 0.14, 8);
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.y = 0.30;
      shroom.add(cap);

      // White spots on cap
      const dotGeo = new THREE.SphereGeometry(0.022, 4, 4);
      for (let d = 0; d < 4; d++) {
        const dot = new THREE.Mesh(dotGeo, dotMat);
        const da = (d / 4) * Math.PI * 2;
        dot.position.set(Math.cos(da) * 0.09, 0.28, Math.sin(da) * 0.09);
        shroom.add(dot);
      }

      const angle = (i / shroomCount) * Math.PI * 2;
      shroom.position.set(Math.cos(angle) * 0.22, 0, Math.sin(angle) * 0.22);
      shroom.scale.set(scale, scale, scale);
      shroom.castShadow = true;
      group.add(shroom);
    }

    group.userData = {
      type: 'mushroom_node',
      name: 'Wild Forest Mushrooms',
      isDirectPickup: true,
      resourceYield: { mushroom: 2 },
      pickupPrompt: '[E] Harvest Wild Mushrooms'
    };

    return group;
  }

  // 9. Tropical Jungle Fern (Gather fiber & leaves with [E])
  static createFernNode() {
    const group = new THREE.Group();
    const frondCount = 7;

    const fernMat = new THREE.MeshStandardMaterial({
      color: 0x43a047,
      roughness: 0.65,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < frondCount; i++) {
      const angle = (i / frondCount) * Math.PI * 2;
      const bladeGeo = new THREE.ConeGeometry(0.35, 1.4, 4);
      bladeGeo.rotateX(Math.PI / 2.5);
      const blade = new THREE.Mesh(bladeGeo, fernMat);
      blade.rotation.y = angle;
      blade.position.set(Math.cos(angle) * 0.25, 0.15, Math.sin(angle) * 0.25);
      blade.scale.set(1.0, 0.06, 1.0);
      blade.castShadow = true;
      group.add(blade);
    }

    group.userData = {
      type: 'fern_node',
      name: 'Tropical Fern Plant',
      isDirectPickup: true,
      resourceYield: { fiber: 3, leaves: 2 },
      pickupPrompt: '[E] Harvest Plant Fiber & Leaves'
    };

    return group;
  }

  // 10. Monstera Tropical Shrub
  static createMonsteraBush() {
    const group = new THREE.Group();
    const leafCount = 6;
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x2e7d32,
      roughness: 0.65,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < leafCount; i++) {
      const angle = (i / leafCount) * Math.PI * 2;
      const leafGeo = new THREE.ConeGeometry(0.65, 1.9, 5);
      leafGeo.rotateX(Math.PI / 2.3);
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.rotation.y = angle;
      leaf.position.set(Math.cos(angle) * 0.35, 0.3, Math.sin(angle) * 0.35);
      leaf.scale.set(1.0, 0.1, 1.0);
      leaf.castShadow = true;
      group.add(leaf);
    }

    group.userData = {
      type: 'bush',
      name: 'Monstera Shrub',
      maxHealth: 30,
      health: 30,
      resourceYield: { fiber: 3, leaves: 3, berries: 2 },
      isDirectPickup: true,
      pickupPrompt: '[E] Harvest Foliage & Berries'
    };

    return group;
  }

  // 11. Wild Tropical Banana Palm Tree
  static createWildBananaTree() {
    const group = new THREE.Group();
    const height = 4.2 + Math.random() * 1.2;

    // Green fleshy pseudostem trunk
    const stemGeo = new THREE.CylinderGeometry(0.24, 0.36, height, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x689f38, roughness: 0.7 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = height / 2;
    stem.castShadow = true;
    group.add(stem);

    // Large broad paddle leaves
    const leafCount = 7;
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x43a047,
      roughness: 0.55,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < leafCount; i++) {
      const angle = (i / leafCount) * Math.PI * 2;
      const leafGeo = new THREE.ConeGeometry(0.75, 3.2, 4);
      leafGeo.rotateX(Math.PI / 2.2);
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(0, height * 0.95, 0);
      leaf.rotation.y = angle;
      leaf.scale.set(1.0, 0.05, 1.0);
      leaf.castShadow = true;
      group.add(leaf);
    }

    // Hanging banana fruit stem
    const fruitGeo = new THREE.SphereGeometry(0.3, 5, 5);
    const fruitMat = new THREE.MeshStandardMaterial({ color: 0xffd600, roughness: 0.6 });
    const fruit = new THREE.Mesh(fruitGeo, fruitMat);
    fruit.position.set(0.3, height * 0.82, 0.3);
    fruit.scale.set(0.8, 1.4, 0.8);
    group.add(fruit);

    group.userData = {
      type: 'banana_tree',
      name: 'Wild Banana Tree',
      maxHealth: 45,
      health: 45,
      resourceYield: { fiber: 4, leaves: 3, banana: 3 },
      toolCategory: 'axe'
    };

    return group;
  }

  // 12. Giant Mountain & Coastal Cliff Rock Face
  static createCliffRockFace() {
    const group = new THREE.Group();
    const w = 6.5 + Math.random() * 3.5;
    const h = 5.0 + Math.random() * 4.0;
    const d = 4.0 + Math.random() * 2.5;

    const rockGeo = new THREE.DodecahedronGeometry(w * 0.5, 1);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x4a443e,
      roughness: 0.92,
      metalness: 0.08,
      flatShading: true
    });

    const mesh = new THREE.Mesh(rockGeo, rockMat);
    mesh.scale.set(1.2, h / (w * 0.5), d / (w * 0.5));
    mesh.position.y = h * 0.45;
    mesh.rotation.set((Math.random() - 0.5) * 0.3, Math.random() * Math.PI, (Math.random() - 0.5) * 0.3);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    group.userData = {
      type: 'rock_node',
      name: 'Basalt Cliff Crag',
      maxHealth: 150,
      health: 150,
      resourceYield: { stone: 8, flint: 3 },
      toolCategory: 'pickaxe'
    };

    return group;
  }

  // 13. Slender Bamboo Grove
  static createBambooGrove() {
    const group = new THREE.Group();
    const stalkCount = 6;
    const bambooMat = new THREE.MeshStandardMaterial({ color: 0x7cb342, roughness: 0.6 });
    const stalkGeo = new THREE.CylinderGeometry(0.06, 0.08, 8.5, 6);

    for (let i = 0; i < stalkCount; i++) {
      const stalk = new THREE.Mesh(stalkGeo, bambooMat);
      stalk.position.set(
        (Math.random() - 0.5) * 1.8,
        4.25,
        (Math.random() - 0.5) * 1.8
      );
      stalk.rotation.set((Math.random() - 0.5) * 0.1, 0, (Math.random() - 0.5) * 0.1);
      stalk.castShadow = true;
      group.add(stalk);
    }

    group.userData = {
      type: 'bamboo',
      name: 'Bamboo Grove',
      maxHealth: 50,
      health: 50,
      resourceYield: { wood: 4, fiber: 4 },
      toolCategory: 'axe'
    };

    return group;
  }
}
