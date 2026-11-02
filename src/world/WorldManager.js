// World Manager: 5-Island Archipelago Architecture & Distant Horizon LOD Systems
import * as THREE from '../three.js';

export const ISLANDS_REGISTRY = [
  {
    id: 'island_starting',
    name: 'Isla de la Esperanza',
    title: 'Starting Sanctuary',
    coordinates: { x: 0, y: 0, z: 0 },
    radius: 320,
    difficulty: 'Normal',
    biome: 'Tropical Atoll & Mountain Jungle',
    resources: ['Palm Wood', 'Coconut', 'Flint', 'Fresh Water', 'Wild Berries', 'Fiber'],
    landmarks: ['Crashed Airplane Wreck', 'Freshwater Lagoon', 'Hidden Crystal Cave', 'Central Volcanic Ridge'],
    description: 'Stranded sanctuary with golden beaches, fresh lagoon, coconut palms, and the downed aircraft debris.',
    isLoaded: true,
    isCurrent: true
  },
  {
    id: 'island_esmeralda',
    name: 'Isla Esmeralda',
    title: 'Emerald Rainforest Peak',
    coordinates: { x: 520, y: 0, z: -420 },
    radius: 260,
    difficulty: 'Challenging',
    biome: 'Mountainous Cloud Forest',
    resources: ['Hardwood Timber', 'Medicinal Herbs', 'Rare Feathers', 'Granite'],
    landmarks: ['Emerald Peak Summit', 'Twin Waterfalls', 'Misty Ravine'],
    description: 'A towering emerald peak cloaked in persistent trade wind mists, rich with hardwood and rare fauna.',
    isLoaded: false,
    isCurrent: false
  },
  {
    id: 'island_volcan',
    name: 'Isla Volcán',
    title: 'Basalt Caldera',
    coordinates: { x: -580, y: 0, z: -360 },
    radius: 280,
    difficulty: 'Severe',
    biome: 'Volcanic Crags & Basalt',
    resources: ['Obsidian Shards', 'Sulfur', 'Black Sand', 'Iron Ore'],
    landmarks: ['Active Smoldering Caldera', 'Basalt Columns', 'Sulfur Geysers'],
    description: 'Dark volcanic shores of obsidian and sulfur, dominated by a smoldering caldera peak.',
    isLoaded: false,
    isCurrent: false
  },
  {
    id: 'island_cayo_coral',
    name: 'Cayo Coral',
    title: 'Turquoise Coral Atoll',
    coordinates: { x: 480, y: 0, z: 480 },
    radius: 240,
    difficulty: 'Easy',
    biome: 'Coral Reefs & White Sands',
    resources: ['Giant Clams', 'Coral Shards', 'White Sand', 'Tropical Fish'],
    landmarks: ['Sunken Blue Hole', 'Staghorn Barrier Reef', 'Powder Sandbar'],
    description: 'Shallow turquoise lagoons protected by vibrant coral barriers and low powder-sand cayos.',
    isLoaded: false,
    isCurrent: false
  },
  {
    id: 'island_naufragio',
    name: 'Isla Naufragio',
    title: 'Shipwreck Reef',
    coordinates: { x: -460, y: 0, z: 520 },
    radius: 270,
    difficulty: 'Hard',
    biome: 'Jagged Sea Stacks & Wreckage',
    resources: ['Salvaged Ship Timber', 'Iron Cannons', 'Ancient Gold Coins', 'Rope'],
    landmarks: ['17th-Century Galleon Hull', 'Siren Sea Stacks', 'Smugglers Cove'],
    description: 'Treacherous sea stacks surrounded by jagged rocks where a 17th-century galleon was lost.',
    isLoaded: false,
    isCurrent: false
  }
];

export class WorldManager {
  constructor(scene, startingTerrain, startingFoliage, startingCrashSite, startingWildlife) {
    this.scene = scene;
    this.startingTerrain = startingTerrain;
    this.startingFoliage = startingFoliage;
    this.startingCrashSite = startingCrashSite;
    this.startingWildlife = startingWildlife;

    this.islands = JSON.parse(JSON.stringify(ISLANDS_REGISTRY));
    this.currentIslandId = 'island_starting';

    this.placeholderGroup = new THREE.Group();
    this.placeholderGroup.name = 'archipelago-horizon-islands';
    this.scene.add(this.placeholderGroup);

    this.animTime = 0;
    this.smokeParticles = null;

    // Callbacks
    this.onIslandEnter = null;

    this.initArchipelagoPlaceholders();
  }

  // Build lightweight procedural horizon meshes for the other 4 islands
  initArchipelagoPlaceholders() {
    // 1. Island 2: Isla Esmeralda (Towering lush green mountain in distance)
    const esmeraldaGroup = new THREE.Group();
    esmeraldaGroup.position.set(520, 0, -420);

    const esmeraldaMountainGeo = new THREE.ConeGeometry(95, 68, 9);
    const esmeraldaMat = new THREE.MeshLambertMaterial({
      color: 0x1f4728,
      flatShading: true
    });
    const esmeraldaMesh = new THREE.Mesh(esmeraldaMountainGeo, esmeraldaMat);
    esmeraldaMesh.position.y = 34;
    esmeraldaMesh.castShadow = true;
    esmeraldaMesh.receiveShadow = true;
    esmeraldaGroup.add(esmeraldaMesh);

    // Subsidiary ridges
    const ridgeGeo = new THREE.ConeGeometry(55, 42, 7);
    const ridge1 = new THREE.Mesh(ridgeGeo, esmeraldaMat);
    ridge1.position.set(45, 21, -25);
    esmeraldaGroup.add(ridge1);

    const sandSkirtGeo = new THREE.CylinderGeometry(110, 125, 6, 12);
    const distantSandMat = new THREE.MeshLambertMaterial({ color: 0xd6c28f });
    const sandSkirt1 = new THREE.Mesh(sandSkirtGeo, distantSandMat);
    sandSkirt1.position.y = 2;
    esmeraldaGroup.add(sandSkirt1);

    this.placeholderGroup.add(esmeraldaGroup);

    // 2. Island 3: Isla Volcán (Volcanic Caldera cone with dark basalt)
    const volcanGroup = new THREE.Group();
    volcanGroup.position.set(-580, 0, -360);

    const volcanoGeo = new THREE.CylinderGeometry(28, 110, 78, 10);
    const volcanMat = new THREE.MeshLambertMaterial({
      color: 0x2b292c,
      flatShading: true
    });
    const volcanoMesh = new THREE.Mesh(volcanoGeo, volcanMat);
    volcanoMesh.position.y = 39;
    volcanoMesh.castShadow = true;
    volcanoMesh.receiveShadow = true;
    volcanGroup.add(volcanoMesh);

    // Caldera glowing rim
    const craterGeo = new THREE.CylinderGeometry(16, 26, 8, 8);
    const craterMat = new THREE.MeshLambertMaterial({ color: 0x3d1c14 });
    const craterMesh = new THREE.Mesh(craterGeo, craterMat);
    craterMesh.position.y = 75;
    volcanGroup.add(craterMesh);

    // Volcanic Plume Billboard
    const smokeGeo = new THREE.SphereGeometry(18, 6, 6);
    const smokeMat = new THREE.MeshBasicMaterial({
      color: 0x5a5450,
      transparent: true,
      opacity: 0.6
    });
    this.smokeParticles = new THREE.Mesh(smokeGeo, smokeMat);
    this.smokeParticles.position.set(0, 92, 0);
    volcanGroup.add(this.smokeParticles);

    this.placeholderGroup.add(volcanGroup);

    // 3. Island 4: Cayo Coral (Low turquoise coral ring with white sandbars)
    const cayoGroup = new THREE.Group();
    cayoGroup.position.set(480, 0, 480);

    const cayoRingGeo = new THREE.TorusGeometry(85, 26, 6, 16);
    cayoRingGeo.rotateX(Math.PI / 2);
    const cayoMat = new THREE.MeshLambertMaterial({
      color: 0xe5d8aa,
      flatShading: true
    });
    const cayoMesh = new THREE.Mesh(cayoRingGeo, cayoMat);
    cayoMesh.position.y = 3;
    cayoMesh.scale.set(1.0, 0.18, 0.85);
    cayoGroup.add(cayoMesh);

    // Shallow turquoise lagoon center
    const lagoonGeo = new THREE.CircleGeometry(65, 12);
    lagoonGeo.rotateX(-Math.PI / 2);
    const lagoonMat = new THREE.MeshBasicMaterial({
      color: 0x2cd9c5,
      transparent: true,
      opacity: 0.75
    });
    const lagoonMesh = new THREE.Mesh(lagoonGeo, lagoonMat);
    lagoonMesh.position.y = 2.4;
    cayoGroup.add(lagoonMesh);

    this.placeholderGroup.add(cayoGroup);

    // 4. Island 5: Isla Naufragio (Jagged sea stacks & galleon shipwreck)
    const naufragioGroup = new THREE.Group();
    naufragioGroup.position.set(-460, 0, 520);

    const stackGeo1 = new THREE.ConeGeometry(24, 46, 5);
    const rockStackMat = new THREE.MeshLambertMaterial({
      color: 0x47494d,
      flatShading: true
    });
    const stack1 = new THREE.Mesh(stackGeo1, rockStackMat);
    stack1.position.set(-18, 23, 10);
    stack1.castShadow = true;
    naufragioGroup.add(stack1);

    const stack2 = new THREE.Mesh(new THREE.ConeGeometry(18, 38, 5), rockStackMat);
    stack2.position.set(22, 19, -15);
    naufragioGroup.add(stack2);

    // Distant galleon hull silhouette
    const wreckGeo = new THREE.BoxGeometry(16, 14, 42);
    const wreckMat = new THREE.MeshLambertMaterial({ color: 0x3d2719 });
    const wreckMesh = new THREE.Mesh(wreckGeo, wreckMat);
    wreckMesh.position.set(5, 7, 0);
    wreckMesh.rotation.set(0.2, 0.4, 0.35); // Tilted on rocks
    naufragioGroup.add(wreckMesh);

    // Galleon broken mast
    const mastGeo = new THREE.CylinderGeometry(0.6, 0.8, 28, 6);
    const mastMesh = new THREE.Mesh(mastGeo, wreckMat);
    mastMesh.position.set(4, 22, 0);
    mastMesh.rotation.z = -0.25;
    naufragioGroup.add(mastMesh);

    this.placeholderGroup.add(naufragioGroup);
  }

  // Get current active island
  getCurrentIsland() {
    return this.islands.find(isl => isl.id === this.currentIslandId) || this.islands[0];
  }

  // Get all 5 archipelago islands
  getAllIslands() {
    return this.islands;
  }

  // Detect which island territory a coordinate is within
  getIslandAt(x, z) {
    for (let isl of this.islands) {
      const dx = isl.coordinates.x - x;
      const dz = isl.coordinates.z - z;
      const dist = Math.hypot(dx, dz);
      if (dist <= isl.radius) {
        return isl;
      }
    }
    return null; // In open ocean waters
  }

  // Check closest island to given coordinates and distance
  getClosestIsland(x, z) {
    let closest = this.islands[0];
    let minDist = Infinity;

    for (let isl of this.islands) {
      const dx = isl.coordinates.x - x;
      const dz = isl.coordinates.z - z;
      const dist = Math.hypot(dx, dz);
      if (dist < minDist) {
        minDist = dist;
        closest = isl;
      }
    }

    return { island: closest, distance: minDist };
  }

  // Calculate compass bearings and distances to all 5 archipelago islands
  getArchipelagoNavData(playerX, playerZ) {
    return this.islands.map(isl => {
      const dx = isl.coordinates.x - playerX;
      const dz = isl.coordinates.z - playerZ;
      const dist = Math.round(Math.hypot(dx, dz));
      const rad = Math.atan2(dx, -dz);
      let deg = Math.round((rad * 180) / Math.PI);
      if (deg < 0) deg += 360;

      return {
        id: isl.id,
        name: isl.name,
        title: isl.title,
        distance: dist,
        bearingDeg: deg,
        isCurrent: isl.id === this.currentIslandId
      };
    });
  }

  // Load an island environment
  loadIsland(islandId) {
    const target = this.islands.find(isl => isl.id === islandId);
    if (!target) {
      console.warn('Unknown island ID to load:', islandId);
      return false;
    }

    this.islands.forEach(isl => {
      isl.isCurrent = (isl.id === islandId);
    });
    this.currentIslandId = islandId;
    target.isLoaded = true;

    if (this.onIslandEnter) {
      this.onIslandEnter(target);
    }

    console.log(`🏝️ WorldManager: Loaded ${target.name} (${target.title})`);
    return true;
  }

  // Unload island to free resources
  unloadIsland(islandId) {
    if (islandId === 'island_starting') {
      // Keep starting island baseline intact
      return;
    }
    const target = this.islands.find(isl => isl.id === islandId);
    if (target) {
      target.isLoaded = false;
      console.log(`🏝️ WorldManager: Unloaded ${target.name}`);
    }
  }

  // Frame update
  update(delta, playerPos) {
    this.animTime += delta;

    // Subtle breathing pulse for distant volcanic plume
    if (this.smokeParticles) {
      const scale = 1.0 + Math.sin(this.animTime * 1.5) * 0.12;
      this.smokeParticles.scale.set(scale, scale * 1.3, scale);
      this.smokeParticles.position.y = 92 + Math.sin(this.animTime * 0.8) * 3;
    }

    // Check if player entered a new island territory
    if (playerPos) {
      const detectedIsland = this.getIslandAt(playerPos.x, playerPos.z);
      if (detectedIsland && detectedIsland.id !== this.currentIslandId) {
        this.loadIsland(detectedIsland.id);
      }
    }
  }
}
