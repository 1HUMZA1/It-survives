// Atmospheric Sky Dome, Realistic Billowy Clouds, Sun Corona, Dynamic Weather & Rain, and 24-Hour Day/Night Lighting
import * as THREE from '../three.js';
import { audio } from './AudioManager.js';

export class TimeWeatherManager {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    this.dayDuration = 720; // 12 minutes per full day/night cycle
    this.timeOfDay = 9.5;   // Start in bright morning tropical sun
    this.dayCount = 1;

    // Weather Systems
    this.weather = 'clear'; // 'clear' | 'cloudy' | 'rain' | 'storm'
    this.weatherTimer = 160.0; // Seconds until next weather cycle
    this.rainParticles = null;
    this.rainVelocities = null;
    this.rainIntensity = 0.0;
    this.lightningTimer = 0.0;

    // Lights
    this.sunLight = null;
    this.moonLight = null;
    this.hemiLight = null;

    // Celestial Meshes
    this.sunMesh = null;
    this.sunCorona = null;
    this.moonMesh = null;
    this.skyDome = null;
    this.skyMaterial = null;
    this.cloudsGroup = null;
    this.cloudMaterial = null;
    this.starField = null;

    this.sunDirection = new THREE.Vector3();

    this.init();
  }

  init() {
    // 1. Atmospheric Fog (matches horizon haze)
    this.scene.fog = new THREE.FogExp2(0x90caf9, 0.0028);

    // 2. Realistic Sky Dome with Horizon-to-Zenith Gradient Shader
    this.createAtmosphericSkyDome();

    // 3. Hemisphere Ambient Light (Sky color down, Sand/Ground bounce up)
    this.hemiLight = new THREE.HemisphereLight(0xb3e5fc, 0x8d6e63, 0.7);
    this.scene.add(this.hemiLight);

    // 4. Directional Sun Light (Tightly framed shadow frustum for crisp shadow details)
    this.sunLight = new THREE.DirectionalLight(0xfff8e7, 1.5);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 5;
    this.sunLight.shadow.camera.far = 380;
    const d = 80;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0004;
    this.scene.add(this.sunLight);

    // 5. Directional Moon Light (Cool moonlight)
    this.moonLight = new THREE.DirectionalLight(0x90caf9, 0.35);
    this.moonLight.castShadow = false;
    this.scene.add(this.moonLight);

    // 6. Visual Sun Sphere with Soft Corona Flare
    const sunGeo = new THREE.SphereGeometry(16, 16, 16);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xfff9c4 });
    this.sunMesh = new THREE.Mesh(sunGeo, sunMat);

    // Sun Corona Halo
    const coronaGeo = new THREE.PlaneGeometry(64, 64);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffe082,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide
    });
    this.sunCorona = new THREE.Mesh(coronaGeo, coronaMat);
    this.sunMesh.add(this.sunCorona);
    this.scene.add(this.sunMesh);

    // 7. Visual Moon
    const moonGeo = new THREE.SphereGeometry(12, 16, 16);
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xe0e0e0 });
    this.moonMesh = new THREE.Mesh(moonGeo, moonMat);
    this.scene.add(this.moonMesh);

    // 8. 1,400 Twinkling Stars
    this.createStars();

    // 9. Soft Billowy Cumulus Cloud Deck
    this.createRealisticClouds();

    // 10. Dynamic Rain Particle System
    this.createRainSystem();

    this.update(0);
  }

  createRainSystem() {
    const rainCount = 3000;
    const rainGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(rainCount * 3);
    const velocities = new Float32Array(rainCount);

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      velocities[i] = 26.0 + Math.random() * 12.0;
    }

    rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.rainVelocities = velocities;

    const rainMat = new THREE.PointsMaterial({
      color: 0xbbdefb,
      size: 0.35,
      transparent: true,
      opacity: 0.0,
      depthWrite: false
    });

    this.rainParticles = new THREE.Points(rainGeo, rainMat);
    this.scene.add(this.rainParticles);
  }

  createAtmosphericSkyDome() {
    const skyGeo = new THREE.SphereGeometry(650, 32, 24);

    this.skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uZenithColor: { value: new THREE.Color(0x1976d2) },
        uHorizonColor: { value: new THREE.Color(0xbbdefb) },
        uSunPosition: { value: new THREE.Vector3(0, 1, 0) }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform vec3 uZenithColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uSunPosition;
        varying vec3 vWorldPosition;

        void main() {
          vec3 dir = normalize(vWorldPosition);
          float heightFactor = clamp(dir.y * 1.5, 0.0, 1.0);

          // Smooth atmospheric gradient from horizon to zenith
          vec3 sky = mix(uHorizonColor, uZenithColor, pow(heightFactor, 0.65));

          // Soft sun bloom glow across the sky
          float sunDot = max(0.0, dot(dir, normalize(uSunPosition)));
          sky += vec3(0.35, 0.25, 0.1) * pow(sunDot, 12.0);

          gl_FragColor = vec4(sky, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false
    });

    this.skyDome = new THREE.Mesh(skyGeo, this.skyMaterial);
    this.scene.add(this.skyDome);
  }

  createStars() {
    const starCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const radius = 620;

    for (let i = 0; i < starCount; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(Math.random() * 0.9 + 0.1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2.2,
      transparent: true,
      opacity: 0.0
    });

    this.starField = new THREE.Points(geometry, material);
    this.scene.add(this.starField);
  }

  createRealisticClouds() {
    this.cloudsGroup = new THREE.Group();

    // Soft, lit cloud material with subtle rim lighting
    this.cloudMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.95,
      metalness: 0.02,
      transparent: true,
      opacity: 0.88,
      flatShading: true
    });

    const cloudMat = this.cloudMaterial;

    // 24 Clusters of puffy cumulus clouds
    const cloudCount = 24;
    for (let i = 0; i < cloudCount; i++) {
      const cloud = new THREE.Group();
      const puffs = 7 + Math.floor(Math.random() * 5);

      for (let p = 0; p < puffs; p++) {
        const radius = 16 + Math.random() * 16;
        const puffGeo = new THREE.DodecahedronGeometry(radius, 1);
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        puff.position.set(
          (p - puffs / 2) * 16 + (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 16
        );
        puff.scale.set(1.4, 0.65, 1.1);
        cloud.add(puff);
      }

      const angle = (i / cloudCount) * Math.PI * 2 + Math.random() * 0.3;
      const dist = 60 + Math.random() * 340;
      cloud.position.set(
        Math.cos(angle) * dist,
        95 + (Math.random() - 0.5) * 20,
        Math.sin(angle) * dist
      );
      this.cloudsGroup.add(cloud);
    }

    this.scene.add(this.cloudsGroup);
  }

  update(delta, playerPos = new THREE.Vector3(0, 0, 0)) {
    this.timeOfDay += (delta / this.dayDuration) * 24.0;
    if (this.timeOfDay >= 24.0) {
      this.timeOfDay -= 24.0;
      this.dayCount++;
    }

    // Sync ambient music day/night variation
    if (audio && audio.setNightMusic) {
      audio.setNightMusic(this.isNight());
    }

    // 1. Dynamic Weather Cycling
    this.weatherTimer -= delta;
    if (this.weatherTimer <= 0) {
      const roll = Math.random();
      if (roll < 0.55) this.weather = 'clear';
      else if (roll < 0.75) this.weather = 'cloudy';
      else if (roll < 0.90) this.weather = 'rain';
      else this.weather = 'storm';
      this.weatherTimer = 140.0 + Math.random() * 180.0;
    }

    // 2. Weather Rain Particles Animation & Audio Sync
    let targetRainOpacity = 0.0;
    let targetRainAudio = 0.0;
    if (this.weather === 'rain') {
      targetRainOpacity = 0.65;
      targetRainAudio = 0.55;
    } else if (this.weather === 'storm') {
      targetRainOpacity = 0.88;
      targetRainAudio = 1.0;
    }

    if (audio && audio.setRainIntensity) {
      audio.setRainIntensity(targetRainAudio);
    }

    if (this.rainParticles) {
      this.rainParticles.position.set(playerPos.x, 0, playerPos.z);
      const rainMat = this.rainParticles.material;
      rainMat.opacity = THREE.MathUtils.lerp(rainMat.opacity, targetRainOpacity, delta * 2.0);

      if (rainMat.opacity > 0.02) {
        const positions = this.rainParticles.geometry.attributes.position.array;
        const velocities = this.rainVelocities;
        const count = velocities.length;

        for (let i = 0; i < count; i++) {
          positions[i * 3 + 1] -= velocities[i] * delta;
          if (positions[i * 3 + 1] < 0) {
            positions[i * 3 + 1] = 45.0 + Math.random() * 8.0;
          }
        }
        this.rainParticles.geometry.attributes.position.needsUpdate = true;
      }
    }

    // 3. Storm Lightning & Thunder
    if (this.weather === 'storm') {
      this.lightningTimer -= delta;
      if (this.lightningTimer <= 0) {
        this.lightningTimer = 10.0 + Math.random() * 18.0;
        if (this.sunLight) {
          const origInt = this.sunLight.intensity;
          this.sunLight.intensity = 4.2;
          if (audio && audio.playThunder) {
            audio.playThunder();
          }
          setTimeout(() => {
            if (this.sunLight) this.sunLight.intensity = origInt;
          }, 140);
        }
      }
    }

    // 4. Cloud Color Modulation for Overcast / Rain
    if (this.cloudMaterial) {
      let targetCloudColor = new THREE.Color(0xffffff);
      if (this.weather === 'cloudy') targetCloudColor.set(0xb0bec5);
      else if (this.weather === 'rain') targetCloudColor.set(0x78909c);
      else if (this.weather === 'storm') targetCloudColor.set(0x37474f);
      this.cloudMaterial.color.lerp(targetCloudColor, delta * 1.5);
    }

    // Drift clouds across the island
    if (this.cloudsGroup) {
      this.cloudsGroup.children.forEach((cloud) => {
        cloud.position.x += delta * 2.2;
        if (cloud.position.x > 480) {
          cloud.position.x = -480;
        }
      });
    }

    // Celestial Orbit Angles
    const sunAngle = ((this.timeOfDay - 6.0) / 24.0) * Math.PI * 2;
    const dist = 480;

    const sunX = playerPos.x + Math.cos(sunAngle) * dist;
    const sunY = playerPos.y + Math.sin(sunAngle) * dist;
    const sunZ = playerPos.z + Math.cos(sunAngle * 0.5) * 50;

    this.sunMesh.position.set(sunX, sunY, sunZ);
    this.sunLight.position.set(sunX, sunY, sunZ);
    this.sunLight.target.position.copy(playerPos);
    this.sunLight.target.updateMatrixWorld();

    if (this.sunCorona) {
      this.sunCorona.lookAt(playerPos);
    }

    this.sunDirection.set(Math.cos(sunAngle), Math.sin(sunAngle), 0.1).normalize();

    // Opposite Moon
    const moonAngle = sunAngle + Math.PI;
    const moonX = playerPos.x + Math.cos(moonAngle) * dist;
    const moonY = playerPos.y + Math.sin(moonAngle) * dist;
    const moonZ = playerPos.z + Math.cos(moonAngle * 0.5) * 50;

    this.moonMesh.position.set(moonX, moonY, moonZ);
    this.moonLight.position.set(moonX, moonY, moonZ);
    this.moonLight.target.position.copy(playerPos);
    this.moonLight.target.updateMatrixWorld();

    // Update Sky Dome Center around Player
    if (this.skyDome) {
      this.skyDome.position.copy(playerPos);
    }
    if (this.starField) {
      this.starField.position.copy(playerPos);
    }

    // --- Atmospheric Colors Progression ---
    const curZenith = new THREE.Color();
    const curHorizon = new THREE.Color();
    let sunIntensity = 0;
    let moonIntensity = 0;
    let starOpacity = 0;

    const h = this.timeOfDay;

    if (h >= 5.0 && h < 7.0) {
      // Dawn (05:00 - 07:00): Fiery Coral Horizon, Soft Violet Zenith
      const t = (h - 5.0) / 2.0;
      curHorizon.set(0x0a1426).lerp(new THREE.Color(0xfd7e48), t);
      curZenith.set(0x060c18).lerp(new THREE.Color(0x5c4278), t);
      sunIntensity = t * 0.9;
      starOpacity = (1.0 - t) * 0.9;
    } else if (h >= 7.0 && h < 9.0) {
      // Morning (07:00 - 09:00): Transition to Azure Blue
      const t = (h - 7.0) / 2.0;
      curHorizon.set(0xfd7e48).lerp(new THREE.Color(0x90caf9), t);
      curZenith.set(0x5c4278).lerp(new THREE.Color(0x1976d2), t);
      sunIntensity = 0.9 + t * 0.6;
      starOpacity = 0;
    } else if (h >= 9.0 && h < 16.5) {
      // High Tropical Day (09:00 - 16:30): Bright Caribbean Azure
      curHorizon.set(0xb3e5fc);
      curZenith.set(0x0288d1);
      sunIntensity = 1.5;
      starOpacity = 0;
    } else if (h >= 16.5 && h < 19.0) {
      // Golden Hour & Sunset (16:30 - 19:00): Crimson, Gold & Twilight
      const t = (h - 16.5) / 2.5;
      curHorizon.set(0xb3e5fc).lerp(new THREE.Color(0xff5722), t);
      curZenith.set(0x0288d1).lerp(new THREE.Color(0x6a1b9a), t);
      sunIntensity = 1.5 - t * 1.0;
      starOpacity = t * 0.4;
    } else if (h >= 19.0 && h < 21.0) {
      // Twilight to Night (19:00 - 21:00)
      const t = (h - 19.0) / 2.0;
      curHorizon.set(0xff5722).lerp(new THREE.Color(0x0d1b2a), t);
      curZenith.set(0x6a1b9a).lerp(new THREE.Color(0x050c18), t);
      sunIntensity = (1.0 - t) * 0.5;
      moonIntensity = t * 0.4;
      starOpacity = 0.4 + t * 0.6;
    } else {
      // Deep Starry Pacific Night (21:00 - 05:00)
      curHorizon.set(0x0a1424);
      curZenith.set(0x020712);
      sunIntensity = 0.0;
      moonIntensity = 0.4;
      starOpacity = 1.0;
    }

    if (this.skyMaterial && this.skyMaterial.uniforms) {
      this.skyMaterial.uniforms.uHorizonColor.value.copy(curHorizon);
      this.skyMaterial.uniforms.uZenithColor.value.copy(curZenith);
      this.skyMaterial.uniforms.uSunPosition.value.set(sunX, sunY, sunZ);
    }

    // Weather dimming & overcast fog
    if (this.weather === 'rain') {
      sunIntensity *= 0.45;
      curHorizon.lerp(new THREE.Color(0x546e7a), 0.45);
      curZenith.lerp(new THREE.Color(0x37474f), 0.45);
    } else if (this.weather === 'storm') {
      sunIntensity *= 0.22;
      curHorizon.lerp(new THREE.Color(0x263238), 0.7);
      curZenith.lerp(new THREE.Color(0x1a2327), 0.7);
    }

    if (!this.scene.background) {
      this.scene.background = new THREE.Color();
    }
    this.scene.background.copy(curHorizon);

    if (this.scene.fog) {
      this.scene.fog.color.copy(curHorizon);
      const targetDensity = (this.weather === 'rain' || this.weather === 'storm') ? 0.0048 : 0.0028;
      this.scene.fog.density = THREE.MathUtils.lerp(this.scene.fog.density, targetDensity, 0.05);
    }

    this.sunLight.intensity = Math.max(0, sunIntensity);
    this.moonLight.intensity = Math.max(0, moonIntensity);
    this.hemiLight.intensity = 0.25 + sunIntensity * 0.45;

    if (this.starField) {
      this.starField.material.opacity = (this.weather === 'rain' || this.weather === 'storm') ? 0.0 : starOpacity;
    }
  }

  sleepUntilMorning() {
    this.timeOfDay = 6.0;
    this.dayCount++;
    this.update(0);
  }

  getFormattedTime() {
    const totalMinutes = Math.floor(this.timeOfDay * 60);
    const hours = Math.floor(totalMinutes / 60) % 24;
    const mins = totalMinutes % 60;
    const hh = hours.toString().padStart(2, '0');
    const mm = mins.toString().padStart(2, '0');
    return `${hh}:${mm}`;
  }

  isNight() {
    return this.timeOfDay < 5.5 || this.timeOfDay > 19.5;
  }

  setWeather(type) {
    if (['clear', 'cloudy', 'rain', 'storm'].includes(type)) {
      this.weather = type;
      this.weatherTimer = 240.0;
    }
  }
}
