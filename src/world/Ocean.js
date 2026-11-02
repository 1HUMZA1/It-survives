// Animated Tropical Ocean with Gerstner Waves, Dedicated Shoreline Surf Foam, Caustics & Near-Beach Underwater Ecosystem
import * as THREE from '../three.js';
import { TextureGenerator } from './TextureGenerator.js';

export class Ocean {
  constructor(scene, size = 1500) {
    this.scene = scene;
    this.size = size;
    this.waterLevel = 0.0;
    this.mesh = null;
    this.material = null;
    this.time = 0;

    // Dedicated Shoreline Surf Foam Ring
    this.shorelineFoamMesh = null;
    this.shorelineFoamMat = null;

    // Underwater Scenery Elements
    this.underwaterGroup = new THREE.Group();
    this.underwaterGroup.name = 'underwater-ecosystem';
    this.fishList = [];
    this.kelpPositions = [];

    this.init();
    this.createShorelineFoamRing();
    this.createUnderwaterScenery();
  }

  init() {
    const segments = 180;
    const geometry = new THREE.PlaneGeometry(this.size, this.size, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const causticsTex = TextureGenerator.createCausticsTexture();

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDeepWaterColor: { value: new THREE.Color(0x003366) },    // Deep sapphire ocean
        uShallowWaterColor: { value: new THREE.Color(0x00e5ff) }, // Crystal cyan turquoise
        uFoamColor: { value: new THREE.Color(0xffffff) },
        uCausticsTex: { value: causticsTex },
        uSunDirection: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
        uSunColor: { value: new THREE.Color(0xfff6e0) }
      },
      vertexShader: `
        uniform float uTime;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vWaveHeight;
        varying vec2 vUv;

        vec3 gerstnerWave(vec3 pos, float steepness, float wavelength, vec2 dir, float speed, inout vec3 tangent, inout vec3 binormal) {
          float k = 2.0 * 3.14159 / wavelength;
          float c = sqrt(9.8 / k);
          vec2 d = normalize(dir);
          float f = k * (dot(d, pos.xz) - speed * uTime);
          float a = steepness / k;

          tangent += vec3(
            -d.x * d.x * (steepness * sin(f)),
            d.x * (steepness * cos(f)),
            -d.x * d.y * (steepness * sin(f))
          );
          binormal += vec3(
            -d.x * d.y * (steepness * sin(f)),
            d.y * (steepness * cos(f)),
            -d.y * d.y * (steepness * sin(f))
          );

          return vec3(
            d.x * (a * cos(f)),
            a * sin(f),
            d.y * (a * cos(f))
          );
        }

        void main() {
          vUv = uv;
          vec3 gridPoint = position;
          vec3 tangent = vec3(1.0, 0.0, 0.0);
          vec3 binormal = vec3(0.0, 0.0, 1.0);
          vec3 p = gridPoint;

          // 3-Octave Gerstner Wave displacement
          p += gerstnerWave(gridPoint, 0.16, 26.0, vec2(1.0, 0.25), 1.1, tangent, binormal);
          p += gerstnerWave(gridPoint, 0.12, 13.0, vec2(0.65, 0.75), 1.5, tangent, binormal);
          p += gerstnerWave(gridPoint, 0.07, 5.5, vec2(-0.3, 0.95), 2.2, tangent, binormal);

          vec3 normal = normalize(cross(binormal, tangent));
          vNormal = normal;
          vWaveHeight = p.y;

          vec4 worldPos = modelMatrix * vec4(p, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uDeepWaterColor;
        uniform vec3 uShallowWaterColor;
        uniform vec3 uFoamColor;
        uniform sampler2D uCausticsTex;
        uniform vec3 uSunDirection;
        uniform vec3 uSunColor;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vWaveHeight;
        varying vec2 vUv;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          vec3 norm = normalize(vNormal);

          // Fresnel reflectance
          float fresnel = dot(viewDir, norm);
          fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
          fresnel = pow(fresnel, 2.4);

          // Sun Specular reflection
          vec3 halfVector = normalize(uSunDirection + viewDir);
          float spec = max(0.0, dot(norm, halfVector));
          spec = pow(spec, 115.0) * 1.9;

          // Depth-based tropical color blend
          float dist = length(vWorldPosition.xz);
          float depthFactor = clamp((dist - 120.0) / 125.0, 0.0, 1.0);
          vec3 waterColor = mix(uShallowWaterColor, uDeepWaterColor, depthFactor);

          // Animated Caustics in shallow waters
          if (depthFactor < 0.85) {
            vec2 causticsUv = vWorldPosition.xz * 0.05 + vec2(uTime * 0.02, uTime * 0.015);
            float caustics = texture2D(uCausticsTex, causticsUv).r;
            waterColor += vec3(0.12, 0.24, 0.28) * caustics * (1.0 - depthFactor);
          }

          // Wave crest foam
          float foamMask = smoothstep(0.22, 0.36, vWaveHeight);
          waterColor = mix(waterColor, uFoamColor, foamMask * 0.65);

          // Final color composition with specular glints
          vec3 finalColor = mix(waterColor, uDeepWaterColor * 1.35, fresnel * 0.42) + uSunColor * spec;

          // Water transparency
          float alpha = mix(0.76, 0.94, depthFactor);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.position.y = this.waterLevel;
    this.scene.add(this.mesh);
  }

  // Dedicated Animated Shoreline Foam Band along beach contours
  createShorelineFoamRing() {
    const foamTex = TextureGenerator.createShoreFoamTexture();
    const ringGeo = new THREE.RingGeometry(110, 220, 64, 4);
    ringGeo.rotateX(-Math.PI / 2);

    this.shorelineFoamMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uFoamTex: { value: foamTex }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform sampler2D uFoamTex;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        void main() {
          // Lapping tide wave animation
          float tidePulse = sin(uTime * 1.5 - vUv.x * 20.0) * 0.5 + 0.5;
          vec2 uv = vUv * vec2(16.0, 4.0) + vec2(uTime * 0.04, 0.0);
          float foam = texture2D(uFoamTex, uv).r;

          float edgeFade = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.65, vUv.y);
          float alpha = foam * tidePulse * edgeFade * 0.75;

          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }
      `,
      transparent: true,
      depthWrite: false
    });

    this.shorelineFoamMesh = new THREE.Mesh(ringGeo, this.shorelineFoamMat);
    this.shorelineFoamMesh.position.y = this.waterLevel + 0.08;
    this.scene.add(this.shorelineFoamMesh);
  }

  // --- Rich Underwater Coral Reefs, Kelp, Shells & Tropical Fish ---
  createUnderwaterScenery() {
    this.scene.add(this.underwaterGroup);

    const coralCount = 140;
    const coralColors = [0xff4081, 0xff9100, 0x00e676, 0x7c4dff, 0x00b0ff, 0xffeb3b];

    // Brain Coral Geometry (spherical corrugated domes)
    const brainGeo = new THREE.DodecahedronGeometry(1.2, 1);
    const brainMat = new THREE.MeshStandardMaterial({
      color: 0xff6e40,
      roughness: 0.8,
      flatShading: true
    });
    const brainInstanced = new THREE.InstancedMesh(brainGeo, brainMat, coralCount / 2);

    // Staghorn Coral Geometry (branching finger clusters)
    const staghornGeo = new THREE.ConeGeometry(0.18, 1.6, 5);
    const staghornMat = new THREE.MeshStandardMaterial({
      color: 0xff4081,
      roughness: 0.7,
      flatShading: true
    });
    const staghornInstanced = new THREE.InstancedMesh(staghornGeo, staghornMat, coralCount / 2);

    const dummy = new THREE.Object3D();
    const colorDummy = new THREE.Color();

    for (let i = 0; i < coralCount / 2; i++) {
      const angle = (i / (coralCount / 2)) * Math.PI * 2 + Math.random() * 0.2;
      // Corals from shallow reef (90m) out to barrier reef (220m)
      const r = 90 + Math.random() * 110;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = -1.2 - Math.random() * 3.0;

      // Brain coral
      dummy.position.set(x, y, z);
      const s1 = 0.75 + Math.random() * 0.75;
      dummy.scale.set(s1, s1 * 0.68, s1);
      dummy.rotation.set(0, Math.random() * Math.PI, 0);
      dummy.updateMatrix();
      brainInstanced.setMatrixAt(i, dummy.matrix);
      colorDummy.setHex(coralColors[i % coralColors.length]);
      brainInstanced.setColorAt(i, colorDummy);

      // Staghorn coral cluster
      dummy.position.set(x + 2, y + 0.3, z + 2);
      const s2 = 0.85 + Math.random() * 0.85;
      dummy.scale.set(s2, s2, s2);
      dummy.rotation.set((Math.random() - 0.5) * 0.4, Math.random() * Math.PI, (Math.random() - 0.5) * 0.4);
      dummy.updateMatrix();
      staghornInstanced.setMatrixAt(i, dummy.matrix);
      colorDummy.setHex(coralColors[(i + 2) % coralColors.length]);
      staghornInstanced.setColorAt(i, colorDummy);
    }

    brainInstanced.instanceMatrix.needsUpdate = true;
    if (brainInstanced.instanceColor) brainInstanced.instanceColor.needsUpdate = true;
    staghornInstanced.instanceMatrix.needsUpdate = true;
    if (staghornInstanced.instanceColor) staghornInstanced.instanceColor.needsUpdate = true;

    this.underwaterGroup.add(brainInstanced);
    this.underwaterGroup.add(staghornInstanced);

    // 2. Underwater Seagrass / Kelp Tufts
    const kelpCount = 180;
    const kelpGeo = new THREE.CylinderGeometry(0.04, 0.1, 2.6, 4);
    const kelpMat = new THREE.MeshStandardMaterial({
      color: 0x1b5e20,
      roughness: 0.6,
      side: THREE.DoubleSide
    });
    this.kelpInstanced = new THREE.InstancedMesh(kelpGeo, kelpMat, kelpCount);

    this.kelpPositions = [];
    for (let i = 0; i < kelpCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 85 + Math.random() * 115;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = -1.1 - Math.random() * 2.8;

      dummy.position.set(x, y, z);
      dummy.scale.set(1.0, 0.85 + Math.random() * 0.65, 1.0);
      dummy.rotation.set((Math.random() - 0.5) * 0.2, Math.random() * Math.PI, 0);
      dummy.updateMatrix();
      this.kelpInstanced.setMatrixAt(i, dummy.matrix);

      this.kelpPositions.push({ pos: new THREE.Vector3(x, y, z), origRot: dummy.rotation.clone() });
    }
    this.kelpInstanced.instanceMatrix.needsUpdate = true;
    this.underwaterGroup.add(this.kelpInstanced);

    // 3. Near-Beach Shallow Seabed Elements: Sea Shells & Starfish
    this.createNearBeachSeabedDetails();

    // 4. Schools of Tropical Reef Fish
    this.createFishSchools();
  }

  // Sea Shells & Starfish on shallow sandbars near the beach (radius 60 - 130m)
  createNearBeachSeabedDetails() {
    const shellGeo = new THREE.ConeGeometry(0.18, 0.35, 5);
    const shellMat = new THREE.MeshStandardMaterial({ color: 0xffe0b2, roughness: 0.7 });
    const starfishGeo = new THREE.DodecahedronGeometry(0.24, 0);
    const starfishMat = new THREE.MeshStandardMaterial({ color: 0xff5722, roughness: 0.8 });

    const count = 45;
    const shellInstanced = new THREE.InstancedMesh(shellGeo, shellMat, count);
    const starfishInstanced = new THREE.InstancedMesh(starfishGeo, starfishMat, count);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 65 + Math.random() * 65; // Close to beach!
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      // Shells
      dummy.position.set(x, -0.6 - Math.random() * 0.8, z);
      dummy.rotation.set(Math.PI / 2, Math.random() * Math.PI, 0);
      dummy.scale.set(1, 0.45, 1);
      dummy.updateMatrix();
      shellInstanced.setMatrixAt(i, dummy.matrix);

      // Starfish
      dummy.position.set(x + 2, -0.65 - Math.random() * 0.8, z + 2);
      dummy.rotation.set(0, Math.random() * Math.PI, 0);
      dummy.scale.set(1.2, 0.3, 1.2);
      dummy.updateMatrix();
      starfishInstanced.setMatrixAt(i, dummy.matrix);
    }

    shellInstanced.instanceMatrix.needsUpdate = true;
    starfishInstanced.instanceMatrix.needsUpdate = true;

    this.underwaterGroup.add(shellInstanced);
    this.underwaterGroup.add(starfishInstanced);
  }

  createFishSchools() {
    const fishGroup = new THREE.Group();
    const fishCount = 36;

    const fishMatOrange = new THREE.MeshStandardMaterial({ color: 0xff6d00, roughness: 0.4 });
    const fishMatBlue = new THREE.MeshStandardMaterial({ color: 0x0288d1, roughness: 0.4 });
    const fishMatYellow = new THREE.MeshStandardMaterial({ color: 0xffd600, roughness: 0.4 });

    for (let i = 0; i < fishCount; i++) {
      const fish = new THREE.Group();

      // Fish body
      const bodyGeo = new THREE.ConeGeometry(0.13, 0.44, 6);
      bodyGeo.rotateZ(Math.PI / 2);
      const mat = (i % 3 === 0) ? fishMatOrange : (i % 3 === 1 ? fishMatBlue : fishMatYellow);
      const body = new THREE.Mesh(bodyGeo, mat);
      fish.add(body);

      // Tail fin
      const finGeo = new THREE.ConeGeometry(0.08, 0.20, 3);
      finGeo.rotateZ(-Math.PI / 2);
      const fin = new THREE.Mesh(finGeo, mat);
      fin.position.set(-0.26, 0, 0);
      fish.add(fin);

      // Position in schools near the beach and shallow reefs
      const schoolId = i % 5;
      const baseAngle = (schoolId / 5) * Math.PI * 2;
      const r = 85 + Math.random() * 85;
      fish.position.set(
        Math.cos(baseAngle) * r + (Math.random() - 0.5) * 8,
        -0.9 - Math.random() * 1.8,
        Math.sin(baseAngle) * r + (Math.random() - 0.5) * 8
      );

      fish.userData = {
        baseAngle: baseAngle,
        radius: r,
        orbitSpeed: 0.16 + (Math.random() - 0.5) * 0.05,
        phase: Math.random() * 10,
        fin: fin
      };

      fishGroup.add(fish);
      this.fishList.push(fish);
    }

    this.underwaterGroup.add(fishGroup);
  }

  // Calculate physical water height at (x, z)
  getWaveHeight(x, z, time = this.time) {
    const k1 = 2.0 * Math.PI / 26.0;
    const f1 = k1 * (x * 0.97 + z * 0.25 - 1.1 * time);
    const w1 = (0.16 / k1) * Math.sin(f1);

    const k2 = 2.0 * Math.PI / 13.0;
    const f2 = k2 * (x * 0.65 + z * 0.75 - 1.5 * time);
    const w2 = (0.12 / k2) * Math.sin(f2);

    const k3 = 2.0 * Math.PI / 5.5;
    const f3 = k3 * (-x * 0.3 + z * 0.95 - 2.2 * time);
    const w3 = (0.07 / k3) * Math.sin(f3);

    return this.waterLevel + w1 + w2 + w3;
  }

  update(delta, sunDirection) {
    this.time += delta;
    if (this.material && this.material.uniforms) {
      this.material.uniforms.uTime.value = this.time;
      if (sunDirection) {
        this.material.uniforms.uSunDirection.value.copy(sunDirection);
      }
    }

    if (this.shorelineFoamMat && this.shorelineFoamMat.uniforms) {
      this.shorelineFoamMat.uniforms.uTime.value = this.time;
    }

    // Animate tropical reef fish swimming
    for (let fish of this.fishList) {
      const d = fish.userData;
      d.baseAngle += d.orbitSpeed * delta * 0.42;
      const x = Math.cos(d.baseAngle) * d.radius;
      const z = Math.sin(d.baseAngle) * d.radius;
      const waveY = Math.sin(this.time * 2.2 + d.phase) * 0.22;

      fish.position.x = x;
      fish.position.z = z;
      fish.position.y = -1.4 + waveY;

      // Point in direction of motion (tangent to circle)
      fish.rotation.y = -d.baseAngle + Math.PI / 2;

      // Wag tail fin
      if (d.fin) {
        d.fin.rotation.y = Math.sin(this.time * 14 + d.phase) * 0.48;
      }
    }
  }
}
