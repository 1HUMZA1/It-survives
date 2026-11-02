// Hidden Walkable Mountain Cavern System: Stalactites, Bioluminescent Mushrooms, Mineral Veins
import * as THREE from '../three.js';

export class HiddenCave {
  constructor(scene, entranceX = -45, entranceZ = -30, groundY = 16) {
    this.scene = scene;
    this.entranceX = entranceX;
    this.entranceZ = entranceZ;
    this.groundY = groundY;

    this.group = new THREE.Group();
    this.mineralNodes = [];
    this.mushrooms = [];

    this.init();
  }

  init() {
    this.group.position.set(this.entranceX, this.groundY, this.entranceZ);

    // 1. Cave Tunnel Geometry (curving underground cavern)
    const cavePath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),        // Entrance
      new THREE.Vector3(5, -1.5, -12),   // Descending passage
      new THREE.Vector3(12, -3.0, -26),  // Turning into chamber
      new THREE.Vector3(10, -3.5, -42),  // Main underground chamber
      new THREE.Vector3(-2, -3.0, -52),  // Deep cavern sanctuary
    ]);

    // Outer rock hull
    const tunnelGeo = new THREE.TubeGeometry(cavePath, 24, 4.2, 12, false);
    const caveRockMat = new THREE.MeshStandardMaterial({
      color: 0x2e2926,
      roughness: 0.95,
      metalness: 0.05,
      side: THREE.BackSide, // Visible from inside the tunnel
      flatShading: true
    });
    const tunnelMesh = new THREE.Mesh(tunnelGeo, caveRockMat);
    tunnelMesh.castShadow = true;
    tunnelMesh.receiveShadow = true;
    this.group.add(tunnelMesh);

    // Flat walkable cave floor slabs
    const floorGeo = new THREE.PlaneGeometry(6, 60);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x3d3530,
      roughness: 0.9
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(5, -3.2, -26);
    this.group.add(floor);

    // 2. Hanging Stalactites & Floor Stalagmites
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x4a433d,
      roughness: 0.92,
      flatShading: true
    });

    // Hanging Stalactites from ceiling
    for (let i = 0; i < 18; i++) {
      const h = 1.2 + Math.random() * 2.2;
      const r = 0.2 + Math.random() * 0.25;
      const stalGeo = new THREE.ConeGeometry(r, h, 6);
      stalGeo.rotateX(Math.PI); // Pointing downwards
      const stal = new THREE.Mesh(stalGeo, stoneMat);
      stal.position.set(
        (Math.random() - 0.5) * 5 + 6,
        1.2 + Math.random() * 0.8,
        -8 - Math.random() * 38
      );
      this.group.add(stal);
    }

    // Floor Stalagmites
    for (let i = 0; i < 14; i++) {
      const h = 0.8 + Math.random() * 1.6;
      const r = 0.2 + Math.random() * 0.2;
      const stagGeo = new THREE.ConeGeometry(r, h, 6);
      const stag = new THREE.Mesh(stagGeo, stoneMat);
      stag.position.set(
        (Math.random() - 0.5) * 4 + 6,
        -3.2 + h * 0.5,
        -10 - Math.random() * 36
      );
      this.group.add(stag);
    }

    // 3. Bioluminescent Glowing Mushrooms (Cyan & Emerald)
    this.createGlowingMushrooms(8, -2.8, -22, 0x00e5ff);
    this.createGlowingMushrooms(11, -3.2, -36, 0x00e676);
    this.createGlowingMushrooms(2, -2.8, -48, 0x76ff03);

    // 4. Harvestable Mineral / Crystal Veins (Iron Ore & Glowing Crystals)
    this.createMineralNode(8.2, -1.8, -18, 'iron_vein');
    this.createMineralNode(12.5, -2.2, -32, 'crystal_deposit');
    this.createMineralNode(-0.5, -2.2, -45, 'iron_vein');

    // 5. Underground Cave Pool (Shimmering blue fresh spring)
    const poolGeo = new THREE.CircleGeometry(3.5, 16);
    poolGeo.rotateX(-Math.PI / 2);
    const poolMat = new THREE.MeshStandardMaterial({
      color: 0x00bcd4,
      roughness: 0.1,
      metalness: 0.2,
      transparent: true,
      opacity: 0.82
    });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.set(6, -3.15, -34);
    this.group.add(pool);

    this.scene.add(this.group);
  }

  createGlowingMushrooms(x, y, z, colorHex) {
    const shroomGroup = new THREE.Group();
    shroomGroup.position.set(x, y, z);

    const shroomMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      emissive: colorHex,
      emissiveIntensity: 0.85,
      roughness: 0.3
    });

    const stemMat = new THREE.MeshStandardMaterial({ color: 0x263238, roughness: 0.8 });

    // Cluster of 4-6 mushrooms
    for (let i = 0; i < 5; i++) {
      const stemGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.45, 6);
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.set((Math.random() - 0.5) * 0.6, 0.22, (Math.random() - 0.5) * 0.6);
      stem.rotation.z = (Math.random() - 0.5) * 0.4;
      shroomGroup.add(stem);

      const capGeo = new THREE.SphereGeometry(0.18, 8, 8, 0, Math.PI * 2, 0, Math.PI * 0.55);
      const cap = new THREE.Mesh(capGeo, shroomMat);
      cap.position.copy(stem.position);
      cap.position.y += 0.22;
      shroomGroup.add(cap);
    }

    // Soft point light glowing in the dark cave
    const light = new THREE.PointLight(colorHex, 2.2, 14);
    light.position.set(0, 0.8, 0);
    shroomGroup.add(light);

    this.group.add(shroomGroup);
    this.mushrooms.push({ group: shroomGroup, light, color: colorHex });
  }

  createMineralNode(x, y, z, type) {
    const node = new THREE.Group();
    node.position.set(x, y, z);

    const isCrystal = type === 'crystal_deposit';
    const geo = new THREE.DodecahedronGeometry(0.85, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: isCrystal ? 0x00e5ff : 0x8d6e63,
      emissive: isCrystal ? 0x00bcd4 : 0x3e2723,
      emissiveIntensity: isCrystal ? 0.6 : 0.1,
      roughness: isCrystal ? 0.2 : 0.8,
      metalness: isCrystal ? 0.4 : 0.7,
      flatShading: true
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    node.add(mesh);

    node.userData = {
      type: 'rock_node',
      subType: type,
      maxHealth: 100,
      health: 100,
      resourceYield: isCrystal
        ? { flint: 4, stone: 4, scrap_metal: 2 }
        : { stone: 6, flint: 3, scrap_metal: 2 }
    };

    this.group.add(node);
    this.mineralNodes.push(node);
  }

  // Check if player position is inside the cave tunnel
  isInsideCave(worldPos) {
    const local = worldPos.clone().sub(this.group.position);
    return (local.z < 2 && local.z > -55 && Math.abs(local.x - 6) < 6);
  }
}
