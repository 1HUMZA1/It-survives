// Enhanced Realistic Tropical Island Terrain: Dynamic Elevations, Beaches, Rocky Coastlines, Cliffs & Mountains
import * as THREE from '../three.js';
import { SimplexNoise } from './SimplexNoise.js';
import { TextureGenerator } from './TextureGenerator.js';
import { HiddenCave } from './HiddenCave.js';

export class IslandTerrain {
  constructor(scene, size = 720, resolution = 220) {
    this.scene = scene;
    this.size = size;
    this.resolution = resolution;
    this.noise = new SimplexNoise(5555);
    this.detailNoise = new SimplexNoise(9999);
    this.erosionNoise = new SimplexNoise(7777);

    this.heightData = new Float32Array((resolution + 1) * (resolution + 1));
    this.geometry = null;
    this.mesh = null;
    this.coastalRocksGroup = new THREE.Group();
    this.coastalRocksGroup.name = 'coastal-sea-stacks';

    // Island shape parameters
    this.radius = size * 0.44; // ~316m island radius
    this.maxHeight = 62.0;     // Towering central mountain peaks
    this.beachHeight = 2.8;    // Sandy beach threshold
    this.waterLevel = 0.0;

    // Hidden Cave
    this.hiddenCave = null;

    this.init();
    this.generateCoastalSeaStacks();
  }

  init() {
    this.geometry = new THREE.PlaneGeometry(
      this.size,
      this.size,
      this.resolution,
      this.resolution
    );
    this.geometry.rotateX(-Math.PI / 2);

    const positions = this.geometry.attributes.position;
    const colors = new Float32Array(positions.count * 3);

    // Natural Color Palette
    const colorSand = new THREE.Color(0xf4e5c8);        // Warm sunny coral sand
    const colorSandWet = new THREE.Color(0xb59e75);     // Dark glistening wet beach sand
    const colorGrassLush = new THREE.Color(0x388e3c);   // Vibrant tropical jungle turf
    const colorGrassDeep = new THREE.Color(0x1b5e20);   // Deep rainforest moss & undergrowth
    const colorCliffDark = new THREE.Color(0x423832);   // Volcanic basalt cliff
    const colorCliffWarm = new THREE.Color(0x6d5e53);   // Weathered granite rock
    const colorPeak = new THREE.Color(0x8d837a);        // Mountain ridge crag
    const colorCoralSeabed = new THREE.Color(0x2d6874); // Turquoise underwater seabed

    // 1. Compute realistic island elevation with beaches, rocky coastlines, and mountains
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);

      const h = this.computeHeight(x, z);
      positions.setY(i, h);
      this.heightData[i] = h;
    }

    // Compute smooth vertex normals
    this.geometry.computeVertexNormals();
    const normals = this.geometry.attributes.normal;

    // 2. Multi-Biome Color Blending based on elevation and slope normal
    const tempColor = new THREE.Color();
    const normal = new THREE.Vector3();
    let idx = 0;

    for (let i = 0; i < positions.count; i++) {
      const h = positions.getY(i);
      const x = positions.getX(i);
      const z = positions.getZ(i);

      normal.fromBufferAttribute(normals, i);
      const slope = 1.0 - normal.y; // 0 = flat ground, 1 = vertical cliff

      if (h < this.waterLevel - 0.2) {
        // Underwater seabed & shallow reef shelves
        const depthT = Math.min(1.0, Math.abs(h) / 8.0);
        tempColor.copy(colorSandWet).lerp(colorCoralSeabed, depthT * 0.7);
      } else if (h <= this.beachHeight) {
        // Detailed beach: transition from wet tide-line sand to dry golden sand
        const t = Math.max(0, Math.min(1, (h - this.waterLevel) / this.beachHeight));
        tempColor.copy(colorSandWet).lerp(colorSand, t);

        // Rocky shoreline accents on northern/eastern coast (x < 0 or z < 0)
        if ((x < -20 || z < -20) && slope > 0.28) {
          tempColor.lerp(colorCliffWarm, (slope - 0.28) * 2.5);
        }
      } else if (slope > 0.36 || (h > 18 && slope > 0.28)) {
        // Steep mountain cliffs, volcanic rock faces and coastal bluffs
        const rockT = Math.min(1.0, (slope - 0.28) * 3.2);
        tempColor.copy(colorGrassLush).lerp(colorCliffDark, rockT);

        // Lichen and lighter granite tones on high altitude crags
        if (h > 24) {
          const altitudeT = Math.min(1.0, (h - 24) / (this.maxHeight - 24));
          tempColor.lerp(colorPeak, altitudeT * 0.65);
        }
      } else if (h < 22) {
        // Lowland jungle floor, riverbanks & rolling grassy plains
        const grassNoise = (this.detailNoise.noise2D(x * 0.035, z * 0.035) + 1) * 0.5;
        tempColor.copy(colorGrassLush).lerp(colorGrassDeep, grassNoise);

        // Gentle sand-to-turf transition at beach border
        if (h < this.beachHeight + 2.2) {
          const t = (h - this.beachHeight) / 2.2;
          tempColor.lerp(colorSand, 1.0 - t);
        }
      } else {
        // High mountain plateau and alpine crest
        const peakT = Math.min(1.0, (h - 22) / (this.maxHeight - 22));
        tempColor.copy(colorGrassDeep).lerp(colorPeak, peakT);
      }

      colors[idx++] = tempColor.r;
      colors[idx++] = tempColor.g;
      colors[idx++] = tempColor.b;
    }

    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // High quality procedural sand and rock normal maps for tactical tactile surface
    const sandTex = TextureGenerator.createSandTexture();

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      map: sandTex,
      roughness: 0.82,
      metalness: 0.04,
      flatShading: false
    });

    this.mesh = new THREE.Mesh(this.geometry, material);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
    this.scene.add(this.mesh);

    // 3. Initialize Hidden Mountain Cave at (-45, -30)
    const caveGroundY = this.computeHeight(-45, -30);
    this.hiddenCave = new HiddenCave(this.scene, -45, -30, caveGroundY);
  }

  // Generate realistic procedural sea stacks and coastal cliff boulders along rocky shores
  generateCoastalSeaStacks() {
    this.scene.add(this.coastalRocksGroup);

    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x544c45,
      roughness: 0.92,
      metalness: 0.08,
      flatShading: true
    });

    const stackGeo1 = new THREE.ConeGeometry(5.5, 14, 6);
    const stackGeo2 = new THREE.DodecahedronGeometry(4.2, 1);

    // Place coastal rocks around northern and eastern rocky coastlines
    const rockLocations = [
      { x: -160, z: -140, scale: 1.4, h: 12 },
      { x: -185, z: -110, scale: 1.1, h: 9 },
      { x: -130, z: -180, scale: 1.6, h: 15 },
      { x: -90,  z: -210, scale: 1.3, h: 11 },
      { x: 140,  z: -170, scale: 1.5, h: 13 },
      { x: 175,  z: -130, scale: 1.2, h: 10 },
      { x: -210, z: 40,   scale: 1.3, h: 10 },
      { x: -190, z: 90,   scale: 1.5, h: 14 }
    ];

    rockLocations.forEach((loc, idx) => {
      const rockGroup = new THREE.Group();
      rockGroup.position.set(loc.x, 0.5, loc.z);

      const isSpire = idx % 2 === 0;
      const mesh = new THREE.Mesh(isSpire ? stackGeo1 : stackGeo2, rockMat);
      mesh.scale.set(loc.scale, loc.scale * 1.2, loc.scale);
      mesh.position.y = loc.h * 0.45;
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.2,
        Math.random() * Math.PI,
        (Math.random() - 0.5) * 0.2
      );
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      rockGroup.add(mesh);

      this.coastalRocksGroup.add(rockGroup);
    });
  }

  computeHeight(x, z) {
    const dist = Math.sqrt(x * x + z * z);

    // Asymmetric organic island coastline domain warping
    const coastWarp = (
      Math.sin(Math.atan2(z, x) * 3.0) * 28.0 +
      Math.sin(Math.atan2(z, x) * 7.0) * 14.0 +
      this.noise.noise2D(x * 0.008, z * 0.008) * 35.0
    );

    const effectiveRadius = this.radius + coastWarp;
    const normDist = dist / Math.max(1, effectiveRadius);

    // Smooth radial island mask with gentle coastal dropoff
    let mask = 1.0 - Math.pow(Math.min(1.0, normDist), 2.2);
    mask = Math.max(0, mask);

    if (mask <= 0) {
      // Ocean abyss
      return -12.0 - (dist - effectiveRadius) * 0.08;
    }

    // 1. Central Rugged Volcanic Ridge & Mountain Peaks
    const mountainCenterDist = Math.hypot(x + 15, z + 25) / (this.radius * 0.55);
    let mountainBoost = 0;
    if (mountainCenterDist < 1.0) {
      const ridgeNoise = Math.abs(this.noise.noise2D(x * 0.009, z * 0.009));
      const sharpSpur = Math.pow(1.0 - mountainCenterDist, 2.0);
      mountainBoost = sharpSpur * 42.0 * (ridgeNoise * 1.45 + 0.25);
    }

    // 2. Multi-octave Fractured Mountain Crags (FBM)
    const mountainFbm = this.noise.fbm2D(x * 0.007, z * 0.007, 5, 0.52, 2.15);

    // 3. Rolling Tropical Jungle Foothills & River Valleys
    const hillFbm = this.noise.fbm2D(x * 0.015, z * 0.015, 4, 0.46, 2.0);

    // 4. Hydraulic Erosion Grooves
    const erosion = Math.abs(this.erosionNoise.noise2D(x * 0.022, z * 0.022)) * 3.5;

    // 5. Dune & Sand Ripple micro-details
    const micro = this.detailNoise.noise2D(x * 0.065, z * 0.065) * 0.45;

    // Asymmetric coastlines:
    // South/West (x > 0, z > 0): Wide, gentle sweeping sandy beaches
    // North/East (x < 0, z < 0): High rocky cliffs and coastal bluffs plunging into water
    let coastalCliffBonus = 0;
    if (x < -20 || z < -20) {
      const cliffZone = Math.max(0, 1.0 - Math.abs(normDist - 0.75) / 0.25);
      coastalCliffBonus = cliffZone * 9.5;
    }

    // Winding River & Fresh Water Lagoon carving
    const riverX = x * 0.012 + Math.sin(z * 0.02) * 0.4;
    const riverZ = z * 0.012;
    const riverNoise = Math.abs(this.noise.noise2D(riverX + 25, riverZ + 25));
    let riverCarve = 0;
    if (riverNoise < 0.13 && normDist < 0.78) {
      riverCarve = (1.0 - riverNoise / 0.13) * 3.4;
    }

    let elevation = (mountainFbm * 17.5 + hillFbm * 8.5 + mountainBoost + coastalCliffBonus + micro - erosion) * mask - riverCarve;

    // Carve Cave Entrance dip at (x = -45, z = -30)
    const distToCave = Math.hypot(x - (-45), z - (-30));
    if (distToCave < 8.5) {
      const caveCarve = (1.0 - distToCave / 8.5) * 4.6;
      elevation -= caveCarve;
    }

    // Shape wide, gentle beach plateau around sea level on south/west coasts
    if (elevation > -0.9 && elevation < 3.2 && (x > -30 || z > -30)) {
      elevation = (elevation + 0.9) * 0.65 - 0.25;
    }

    return elevation;
  }

  // Fast bilinear elevation sampler
  getElevation(x, z) {
    // If player is inside the hidden cave, return cave floor height
    if (this.hiddenCave && this.hiddenCave.isInsideCave(new THREE.Vector3(x, 0, z))) {
      return this.hiddenCave.groundY - 3.2;
    }

    const halfSize = this.size / 2;
    if (x < -halfSize || x > halfSize || z < -halfSize || z > halfSize) {
      return -12.0;
    }

    const gridX = ((x + halfSize) / this.size) * this.resolution;
    const gridZ = ((z + halfSize) / this.size) * this.resolution;

    const ix = Math.floor(gridX);
    const iz = Math.floor(gridZ);

    if (ix < 0 || ix >= this.resolution || iz < 0 || iz >= this.resolution) {
      return -12.0;
    }

    const fx = gridX - ix;
    const fz = gridZ - iz;

    const rowSize = this.resolution + 1;
    const i00 = iz * rowSize + ix;
    const i10 = iz * rowSize + (ix + 1);
    const i01 = (iz + 1) * rowSize + ix;
    const i11 = (iz + 1) * rowSize + (ix + 1);

    const h00 = this.heightData[i00] !== undefined ? this.heightData[i00] : 0;
    const h10 = this.heightData[i10] !== undefined ? this.heightData[i10] : h00;
    const h01 = this.heightData[i01] !== undefined ? this.heightData[i01] : h00;
    const h11 = this.heightData[i11] !== undefined ? this.heightData[i11] : h00;

    const h0 = h00 * (1 - fx) + h10 * fx;
    const h1 = h01 * (1 - fx) + h11 * fx;
    return h0 * (1 - fz) + h1 * fz;
  }

  getNormal(x, z, target = new THREE.Vector3()) {
    const eps = 0.5;
    const hl = this.getElevation(x - eps, z);
    const hr = this.getElevation(x + eps, z);
    const hd = this.getElevation(x, z - eps);
    const hu = this.getElevation(x, z + eps);

    target.set(hl - hr, 2.0 * eps, hd - hu).normalize();
    return target;
  }
}
