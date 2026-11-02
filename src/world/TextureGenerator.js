// Procedural High-Resolution Texture Generator for Island Survival
// Creates rich, realistic textures with zero external image dependencies
import * as THREE from '../three.js';

export class TextureGenerator {
  // 1. Tropical Beach Sand (golden coral sand with ripples)
  static createSandTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base warm coral sand
    ctx.fillStyle = '#eddab4';
    ctx.fillRect(0, 0, 512, 512);

    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;

    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const i = (y * 512 + x) * 4;
        // Subtle ripple waves in sand
        const ripple = Math.sin(x * 0.08 + Math.sin(y * 0.04) * 3) * 8;
        // Grain noise
        const grain = (Math.random() - 0.5) * 16;
        const speckle = Math.random() < 0.02 ? 25 : (Math.random() < 0.015 ? -25 : 0);

        data[i] = Math.min(255, Math.max(0, 237 + ripple + grain + speckle));     // R
        data[i + 1] = Math.min(255, Math.max(0, 218 + ripple * 0.9 + grain + speckle)); // G
        data[i + 2] = Math.min(255, Math.max(0, 180 + ripple * 0.7 + grain));     // B
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(12, 12);
    return texture;
  }

  // 2. Wet Sand (shoreline wetness, darker with glossy look)
  static createWetSandTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#bda87f';
    ctx.fillRect(0, 0, 512, 512);

    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;

    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const i = (y * 512 + x) * 4;
        const grain = (Math.random() - 0.5) * 12;
        data[i] = Math.min(255, Math.max(0, 189 + grain));
        data[i + 1] = Math.min(255, Math.max(0, 168 + grain));
        data[i + 2] = Math.min(255, Math.max(0, 127 + grain));
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(12, 12);
    return texture;
  }

  // 3. Lush Tropical Jungle Grass (vibrant blades, deep forest moss)
  static createGrassTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#2e7d32';
    ctx.fillRect(0, 0, 512, 512);

    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;

    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const i = (y * 512 + x) * 4;
        const n1 = Math.sin(x * 0.05) * Math.cos(y * 0.05);
        const n2 = Math.sin(x * 0.12 + y * 0.1);
        const variation = (n1 * 25 + n2 * 18 + (Math.random() - 0.5) * 20);

        data[i] = Math.min(255, Math.max(0, 46 + variation * 0.5));     // R
        data[i + 1] = Math.min(255, Math.max(0, 125 + variation));       // G
        data[i + 2] = Math.min(255, Math.max(0, 50 + variation * 0.4));  // B
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(14, 14);
    return texture;
  }

  // 4. Mountain Cliff Rock (striated rock strata, volcanic crag, crevices)
  static createRockTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#5c544d';
    ctx.fillRect(0, 0, 512, 512);

    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;

    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const i = (y * 512 + x) * 4;
        // Horizontal rock strata lines
        const strata = Math.sin(y * 0.15 + (Math.random() - 0.5) * 2) * 22;
        const noise = (Math.random() - 0.5) * 25;
        const total = strata + noise;

        data[i] = Math.min(255, Math.max(0, 95 + total));
        data[i + 1] = Math.min(255, Math.max(0, 88 + total));
        data[i + 2] = Math.min(255, Math.max(0, 80 + total));
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    return texture;
  }

  // 5. Palm Trunk Fibrous Bark Texture
  static createPalmBarkTexture() {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#6d4c41';
    ctx.fillRect(0, 0, 256, 512);

    const imgData = ctx.getImageData(0, 0, 256, 512);
    const data = imgData.data;

    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 256; x++) {
        const i = (y * 256 + x) * 4;
        // Horizontal bark rings
        const ring = Math.sin(y * 0.4) * 28;
        const fiber = (Math.random() - 0.5) * 18;
        const total = ring + fiber;

        data[i] = Math.min(255, Math.max(0, 109 + total));
        data[i + 1] = Math.min(255, Math.max(0, 76 + total * 0.8));
        data[i + 2] = Math.min(255, Math.max(0, 65 + total * 0.7));
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  // 6. Realistic Palm Frond Texture with leaflets
  static createPalmLeafTexture() {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    if (ctx.clearRect) {
      ctx.clearRect(0, 0, 256, 512);
    }

    // Draw realistic feather-like palm frond
    ctx.strokeStyle = '#8bc34a';
    ctx.lineWidth = 4;
    // Central stem
    ctx.beginPath();
    ctx.moveTo(128, 500);
    ctx.quadraticCurveTo(128, 200, 128, 20);
    ctx.stroke();

    // Leaflets fanning out
    ctx.strokeStyle = '#2e7d32';
    ctx.lineWidth = 3;
    for (let y = 480; y > 30; y -= 6) {
      const progress = y / 512;
      const length = Math.sin(progress * Math.PI) * 110 + 10;
      const angle = (1 - progress) * 0.2;

      // Left leaflet
      ctx.beginPath();
      ctx.moveTo(128, y);
      ctx.quadraticCurveTo(128 - length * 0.6, y - 10, 128 - length, y + 20 - angle * 50);
      ctx.stroke();

      // Right leaflet
      ctx.beginPath();
      ctx.moveTo(128, y);
      ctx.quadraticCurveTo(128 + length * 0.6, y - 10, 128 + length, y + 20 - angle * 50);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  // 7. Water Caustics Texture
  static createCausticsTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 256, 256);

    const imgData = ctx.getImageData(0, 0, 256, 256);
    const data = imgData.data;

    for (let y = 0; y < 256; y++) {
      for (let x = 0; x < 256; x++) {
        const i = (y * 256 + x) * 4;
        const v1 = Math.sin(x * 0.15 + y * 0.1);
        const v2 = Math.sin(x * 0.08 - y * 0.12);
        const v3 = Math.sin(Math.sqrt(x * x + y * y) * 0.1);
        let val = (v1 + v2 + v3) / 3;
        val = Math.pow(Math.max(0, val), 2.5) * 255;

        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 16);
    return texture;
  }
}
