// Stranded Airplane Crash Site: Broken fuselage, sheared wings, scattered supply luggage
import * as THREE from '../three.js';

export class CrashSite {
  constructor(scene, terrain, posX = 50, posZ = 70) {
    this.scene = scene;
    this.terrain = terrain;
    this.x = posX;
    this.z = posZ;
    this.y = terrain.getElevation(posX, posZ);

    this.group = new THREE.Group();
    this.scavengeCrates = [];

    this.init();
  }

  init() {
    this.group.position.set(this.x, this.y, this.z);

    // 1. Airplane Main Fuselage Section (Cylindrical broken cabin)
    const fuselageGeo = new THREE.CylinderGeometry(2.8, 2.8, 12, 16, 1, true, 0, Math.PI * 1.55);
    fuselageGeo.rotateZ(Math.PI / 2);
    const fuselageMat = new THREE.MeshStandardMaterial({
      color: 0xdedede,
      metalness: 0.75,
      roughness: 0.35,
      side: THREE.DoubleSide
    });
    const fuselage = new THREE.Mesh(fuselageGeo, fuselageMat);
    fuselage.position.set(0, 1.8, 0);
    fuselage.rotation.z = 0.12;
    fuselage.rotation.y = 0.4;
    fuselage.castShadow = true;
    fuselage.receiveShadow = true;
    this.group.add(fuselage);

    // Airline stripe livery
    const stripeGeo = new THREE.CylinderGeometry(2.82, 2.82, 11.8, 16, 1, true, 0.4, 0.6);
    stripeGeo.rotateZ(Math.PI / 2);
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0x0277bd, side: THREE.DoubleSide });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.copy(fuselage.position);
    stripe.rotation.copy(fuselage.rotation);
    this.group.add(stripe);

    // 2. Sheared Airplane Wing (jutting up from the sand)
    const wingGeo = new THREE.BoxGeometry(10, 0.35, 3.2);
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.8,
      roughness: 0.3
    });
    const wing = new THREE.Mesh(wingGeo, wingMat);
    wing.position.set(-8, 2.2, 5);
    wing.rotation.set(0.3, 0.6, -0.4);
    wing.castShadow = true;
    this.group.add(wing);

    // Jet Engine Turbine stuck in sand
    const engineGeo = new THREE.CylinderGeometry(1.2, 1.1, 3.5, 12);
    engineGeo.rotateX(Math.PI / 2);
    const engineMat = new THREE.MeshStandardMaterial({
      color: 0x37474f,
      metalness: 0.9,
      roughness: 0.3
    });
    const engine = new THREE.Mesh(engineGeo, engineMat);
    engine.position.set(-9.5, 0.8, 7.5);
    engine.rotation.set(0.2, 0.4, 0.1);
    engine.castShadow = true;
    this.group.add(engine);

    // 3. Life Raft Scrap (Yellow emergency raft canvas)
    const raftGeo = new THREE.TorusGeometry(1.8, 0.35, 8, 12);
    raftGeo.rotateX(Math.PI / 2);
    const raftMat = new THREE.MeshStandardMaterial({
      color: 0xffb300,
      roughness: 0.6
    });
    const raft = new THREE.Mesh(raftGeo, raftMat);
    raft.position.set(6, 0.25, -4);
    raft.scale.set(1.4, 1.0, 1.0);
    raft.castShadow = true;
    this.group.add(raft);

    // 4. Scavengeable Cargo Crates & Luggage Suitcases
    this.createScavengeCrate(-3, 0.4, -2, 'emergency_crate');
    this.createScavengeCrate(4, 0.4, 2, 'luggage_1');
    this.createScavengeCrate(-2, 0.4, 6, 'luggage_2');
    this.createScavengeCrate(7, 0.4, -2, 'cargo_box');

    // 5. Emergency Distress Signal Flare & Smoke Plume
    this.createEmergencyFlare();

    this.scene.add(this.group);
  }

  createEmergencyFlare() {
    const flareGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.4, 8);
    const flareMat = new THREE.MeshStandardMaterial({ color: 0xff3d00, emissive: 0xff3d00, emissiveIntensity: 0.8 });
    const flare = new THREE.Mesh(flareGeo, flareMat);
    flare.position.set(2.5, 0.2, 3.5);
    this.group.add(flare);

    // Warm orange flare light
    const flareLight = new THREE.PointLight(0xff6d00, 2.0, 14);
    flareLight.position.set(2.5, 0.5, 3.5);
    this.group.add(flareLight);

    // Smoke plume puffs
    this.smokePuffs = [];
    const smokeMat = new THREE.MeshStandardMaterial({
      color: 0x90a4ae,
      transparent: true,
      opacity: 0.35,
      roughness: 0.95
    });

    for (let i = 0; i < 8; i++) {
      const puffGeo = new THREE.DodecahedronGeometry(0.35 + i * 0.12, 1);
      const puff = new THREE.Mesh(puffGeo, smokeMat);
      puff.position.set(
        2.5 + (Math.random() - 0.5) * 0.4,
        0.5 + i * 1.2,
        3.5 + (Math.random() - 0.5) * 0.4
      );
      this.group.add(puff);
      this.smokePuffs.push({ mesh: puff, baseHeight: 0.5 + i * 1.2, offset: Math.random() * 10 });
    }
  }

  update(delta) {
    if (this.smokePuffs) {
      const time = performance.now() * 0.002;
      this.smokePuffs.forEach(p => {
        p.mesh.position.y += delta * 1.2;
        p.mesh.position.x = 2.5 + Math.sin(time + p.offset) * 0.4;
        if (p.mesh.position.y > 10.5) {
          p.mesh.position.y = 0.6;
        }
      });
    }
  }

  createScavengeCrate(rx, ry, rz, crateId) {
    const crateGroup = new THREE.Group();
    crateGroup.position.set(rx, ry, rz);

    const isLuggage = crateId.includes('luggage');
    let geo, mat;

    if (isLuggage) {
      geo = new THREE.BoxGeometry(0.8, 0.4, 0.6);
      mat = new THREE.MeshStandardMaterial({
        color: crateId === 'luggage_1' ? 0xb71c1c : 0x1565c0,
        roughness: 0.7
      });
    } else {
      geo = new THREE.BoxGeometry(1.1, 0.85, 1.1);
      mat = new THREE.MeshStandardMaterial({
        color: 0x8d6e63,
        roughness: 0.85
      });
    }

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    crateGroup.add(mesh);

    crateGroup.userData = {
      type: 'crash_crate',
      id: crateId,
      searched: false,
      loot: isLuggage
        ? { scrap_metal: 2, bandage: 1 }
        : { scrap_metal: 3, flint: 2, coconut: 1 }
    };

    this.group.add(crateGroup);
    this.scavengeCrates.push(crateGroup);
  }

  checkScavenge(raycaster, maxDistance = 3.5) {
    const hits = raycaster.intersectObjects(this.group.children, true);
    for (let hit of hits) {
      if (hit.distance <= maxDistance) {
        let cur = hit.object;
        while (cur && cur.parent !== this.group) {
          cur = cur.parent;
        }
        if (cur && cur.userData && cur.userData.type === 'crash_crate') {
          return cur;
        }
      }
    }
    return null;
  }
}
