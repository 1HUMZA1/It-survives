// Enhanced Island Terrain with Dramatic Mountains, Volcanic Cliffs, Detailed Beaches & Cave Entrance
import * as THREE from '../three.js';
import { SimplexNoise } from './SimplexNoise.js';
import { TextureGenerator } from './TextureGenerator.js';
import { HiddenCave } from './HiddenCave.js';

export class IslandTerrain {
  constructor(scene, size = 650, resolution = 200) {
    this.scene = scene;
    this.size = size;
    this.resolution = resolution;
    this.noise = new SimplexNoise(5555);
    this.detailNoise = new SimplexNoise(9999);

    this.heightData = new Float32Array((resolution + 1) * (resolution + 1));
    this.geometry = null;
    this.mesh = null;

    // Island shape parameters
    this.radius = size * 0.44;
    this.maxHeight = 52.0;    // Towering mountain peaks
    this.beachHeight = 2.6;   // Sandy beach threshold
    this.waterLevel = 0.0;

    // Hidden Cave
    this.hiddenCave = null;

    this.init();
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
    const colorSand = new THREE.Color(0xf2e2be);       // Warm coral beach sand
    const colorSandWet = new THREE.Color(0xbfa679);    // Wet shoreline sand
    const colorGrassLush = new THREE.Color(0x388e3c);  // Lush tropical jungle turf
    const colorGrassDeep = new THREE.Color(0x1b5e20);  // Deep rainforest moss
    const colorCliff = new THREE.Color(0x61564f);      // Volcanic rock cliff
    const colorPeak = new THREE.Color(0x8d837a);       // Mountain ridge crag

    // 1. Compute realistic island elevation with mountains, ridges, river and beaches
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);

      const h = this.computeHeight(x, z);
      positions.setY(i, h);
      this.heightData[i] = h;
    }

    // Compute smooth normals to eliminate harsh polygon edges
    this.geometry.computeVertexNormals();
    const normals = this.geometry.attributes.normal;

    // 2. Multi-Biome Color Blending based on elevation and slope normal
    const tempColor = new THREE.Color();
    const normal = new THREE.Vector3();
    let idx = 0;

    for (let i = 0; i < positions.count; i++) {
      const h = positions.getY(i);
      normal.fromBufferAttribute(normals, i);
      const slope = 1.0 - normal.y; // 0 = flat ground, 1 = vertical cliff

      if (h < this.waterLevel - 0.2) {
        // Underwater seabed
        const depthT = Math.min(1, Math.abs(h) / 8.0);
        tempColor.copy(colorSandWet).multiplyScalar(0.7 - depthT * 0.3);
      } else if (h <= this.beachHeight) {
        // Detailed beach: transition from wet sand to dry golden sand
        const t = Math.max(0, Math.min(1, (h - this.waterLevel) / this.beachHeight));
        tempColor.copy(colorSandWet).lerp(colorSand, t);
      } else if (slope > 0.42 || (h > 18 && slope > 0.32)) {
        // Steep mountain cliffs and rocky ravines
        const rockT = Math.min(1, (slope - 0.32) * 3.0);
        tempColor.copy(colorGrassLush).lerp(colorCliff, rockT);
        if (h > 26) {
          tempColor.lerp(colorPeak, 0.6);
        }
      } else if (h < 18) {
        // Jungle floor & rolling grassy plains
        const grassNoise = (this.detailNoise.noise2D(positions.getX(i) * 0.04, positions.getZ(i) * 0.04) + 1) * 0.5;
        tempColor.copy(colorGrassLush).lerp(colorGrassDeep, grassNoise);

        // Gentle sand-to-turf transition at beach border
        if (h < this.beachHeight + 1.8) {
          const t = (h - this.beachHeight) / 1.8;
          tempColor.lerp(colorSand, 1.0 - t);
        }
      } else {
        // High mountain plateau and alpine crest
        const peakT = Math.min(1, (h - 18) / (this.maxHeight - 18));
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
      roughness: 0.85,
      metalness: 0.05,
      flatShading: false
    });

    this.mesh = new THREE.Mesh(this.geometry, material);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
    this.scene.add(this.mesh);

    // 3. Initialize Hidden Mountain Cave
    const caveGroundY = this.getElevation(-45, -30);
    this.hiddenCave = new HiddenCave(this.scene, -45, -30, caveGroundY);
  }

  computeHeight(x, z) {
    const dist = Math.sqrt(x * x + z * z);
    const normDist = dist / this.radius;

    // Smooth radial island mask
    let mask = 1.0 - Math.pow(normDist, 2.4);
    mask = Math.max(0, mask);

    if (mask <= 0) {
      // Ocean abyss
      return -10.0 - (dist - this.radius) * 0.08;
    }

    // 1. Dramatic Central Mountain Ridge (sharp ridged noise)
    const ridgeNoise = Math.abs(this.noise.noise2D(x * 0.008, z * 0.008));
    const mountainFbm = this.noise.fbm2D(x * 0.006, z * 0.006, 5, 0.52, 2.1);

    // 2. Rolling Jungle Hills
    const hillFbm = this.noise.fbm2D(x * 0.016, z * 0.016, 4, 0.48, 2.0);

    // 3. Dune & Rock micro-details
    const micro = this.detailNoise.noise2D(x * 0.07, z * 0.07) * 0.5;

    // Mountain peak concentration in center-north of island
    const mountainCenterDist = Math.hypot(x + 20, z + 30) / (this.radius * 0.6);
    let mountainBoost = 0;
    if (mountainCenterDist < 1.0) {
      mountainBoost = Math.pow(1.0 - mountainCenterDist, 2) * 36.0 * (ridgeNoise * 1.4 + 0.2);
    }

    // Winding River & Lagoon carving
    const riverX = x * 0.012 + Math.sin(z * 0.02) * 0.4;
    const riverZ = z * 0.012;
    const riverNoise = Math.abs(this.noise.noise2D(riverX + 25, riverZ + 25));
    let riverCarve = 0;
    if (riverNoise < 0.14 && normDist < 0.8) {
      riverCarve = (1.0 - riverNoise / 0.14) * 3.2;
    }

    let elevation = (mountainFbm * 16 + hillFbm * 9 + mountainBoost + micro) * mask - riverCarve;

    // Carve Cave Entrance dip at (x = -45, z = -30)
    const distToCave = Math.hypot(x - (-45), z - (-30));
    if (distToCave < 8.0) {
      const caveCarve = (1.0 - distToCave / 8.0) * 4.5;
      elevation -= caveCarve;
    }

    // Shape wide, gentle beach plateau around sea level (y = -0.5 to 2.5)
    if (elevation > -0.8 && elevation < 2.8) {
      elevation = (elevation + 0.8) * 0.65 - 0.2;
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
