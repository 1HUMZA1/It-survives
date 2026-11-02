// Realistic First-Person 3D Viewmodel: Dual Arms, Articulated Hands, Animated Tools, Eating/Drinking & Gathering
import * as THREE from '../three.js';

export class PlayerArms {
  constructor(camera) {
    this.camera = camera;
    this.root = new THREE.Group();
    this.root.renderOrder = 999;
    this.camera.add(this.root);

    // Natural first-person resting positions in viewport space
    this.basePos = new THREE.Vector3(0, -0.25, -0.46);
    this.root.position.copy(this.basePos);

    this.currentToolType = null;
    this.pendingToolType = null;
    this.activeToolMesh = null;
    this.torchLight = null;
    this.flameMesh = null;

    // Animation States
    this.isSwinging = false;
    this.swingProgress = 0;
    this.swingDuration = 0.28;

    this.isUsing = false; // Eating or drinking
    this.useProgress = 0;
    this.useDuration = 0.72;

    this.isGathering = false; // Plucking / picking up resources
    this.gatherProgress = 0;
    this.gatherDuration = 0.32;

    this.switchProgress = 1.0;
    this.switchDuration = 0.20;

    this.idleTime = 0;
    this.walkBob = 0;

    // Materials
    this.skinMat = new THREE.MeshStandardMaterial({
      color: 0xd29b7a, // Sun-tanned tropical skin tone
      roughness: 0.72,
      metalness: 0.04
    });
    this.woodMat = new THREE.MeshStandardMaterial({
      color: 0x6d4c41,
      roughness: 0.85
    });
    this.stoneMat = new THREE.MeshStandardMaterial({
      color: 0x757575,
      roughness: 0.88,
      flatShading: true
    });
    this.cordMat = new THREE.MeshStandardMaterial({
      color: 0x8d6e63,
      roughness: 0.95
    });

    this.initDualArms();
    this.buildToolMesh('hands');
    this.currentToolType = 'hands';
  }

  initDualArms() {
    // === Right Arm Group ===
    this.rightArmGroup = new THREE.Group();
    this.rightArmGroup.position.set(0.24, 0, 0);

    // Right Forearm
    const rForearmGeo = new THREE.CylinderGeometry(0.046, 0.058, 0.38, 8);
    rForearmGeo.rotateX(Math.PI / 2.3);
    const rForearm = new THREE.Mesh(rForearmGeo, this.skinMat);
    rForearm.position.set(0.05, -0.10, 0.04);
    this.rightArmGroup.add(rForearm);

    // Right Wrist & Palm
    const rPalmGeo = new THREE.BoxGeometry(0.085, 0.07, 0.11);
    const rPalm = new THREE.Mesh(rPalmGeo, this.skinMat);
    rPalm.position.set(0.04, 0.03, -0.10);
    this.rightArmGroup.add(rPalm);

    // Right Fingers (Curled grip)
    const rFingerGeo = new THREE.BoxGeometry(0.08, 0.05, 0.065);
    const rFingers = new THREE.Mesh(rFingerGeo, this.skinMat);
    rFingers.position.set(0.04, 0.065, -0.145);
    this.rightArmGroup.add(rFingers);

    // Right Thumb
    const rThumbGeo = new THREE.BoxGeometry(0.035, 0.04, 0.06);
    const rThumb = new THREE.Mesh(rThumbGeo, this.skinMat);
    rThumb.position.set(0.005, 0.045, -0.12);
    rThumb.rotation.y = 0.35;
    this.rightArmGroup.add(rThumb);

    this.root.add(this.rightArmGroup);

    // === Left Arm Group (Rests naturally lowered out of screen edge unless gathering) ===
    this.leftRestPos = new THREE.Vector3(-0.32, -0.28, 0.16);
    this.leftArmGroup = new THREE.Group();
    this.leftArmGroup.position.copy(this.leftRestPos);

    // Left Forearm
    const lForearmGeo = new THREE.CylinderGeometry(0.048, 0.062, 0.54, 8);
    lForearmGeo.rotateX(Math.PI / 2.3);
    const lForearm = new THREE.Mesh(lForearmGeo, this.skinMat);
    lForearm.position.set(-0.04, -0.10, 0.12);
    this.leftArmGroup.add(lForearm);

    // Left Wrist & Palm
    const lPalmGeo = new THREE.BoxGeometry(0.08, 0.065, 0.10);
    const lPalm = new THREE.Mesh(lPalmGeo, this.skinMat);
    lPalm.position.set(-0.035, 0.02, -0.08);
    this.leftArmGroup.add(lPalm);

    // Left Fingers (Relaxed hand)
    const lFingerGeo = new THREE.BoxGeometry(0.075, 0.038, 0.065);
    const lFingers = new THREE.Mesh(lFingerGeo, this.skinMat);
    lFingers.position.set(-0.035, 0.035, -0.125);
    this.leftArmGroup.add(lFingers);

    // Left Thumb
    const lThumbGeo = new THREE.BoxGeometry(0.032, 0.035, 0.055);
    const lThumb = new THREE.Mesh(lThumbGeo, this.skinMat);
    lThumb.position.set(-0.005, 0.025, -0.10);
    lThumb.rotation.y = -0.35;
    this.leftArmGroup.add(lThumb);

    this.root.add(this.leftArmGroup);
  }

  setEquippedTool(toolType) {
    if (this.currentToolType === toolType || this.pendingToolType === toolType) return;
    this.pendingToolType = toolType;
    this.switchProgress = 0;
  }

  buildToolMesh(toolType) {
    this.currentToolType = toolType;

    // Clean up previous tool
    if (this.activeToolMesh) {
      this.rightArmGroup.remove(this.activeToolMesh);
      this.activeToolMesh = null;
    }
    if (this.torchLight) {
      this.rightArmGroup.remove(this.torchLight);
      this.torchLight = null;
    }
    this.flameMesh = null;

    if (toolType === 'hands') {
      return;
    }

    const toolGroup = new THREE.Group();
    toolGroup.position.set(0.04, 0.065, -0.12);

    if (toolType === 'stone_axe' || toolType === 'wooden_axe') {
      // Axe wooden handle
      const shaftGeo = new THREE.CylinderGeometry(0.02, 0.024, 0.62, 7);
      const shaft = new THREE.Mesh(shaftGeo, this.woodMat);
      shaft.position.y = 0.16;
      toolGroup.add(shaft);

      // Blade head: Stone or Carved Hardwood
      const bladeMat = toolType === 'wooden_axe' ? this.woodMat : this.stoneMat;
      const bladeGeo = new THREE.BoxGeometry(0.18, 0.13, 0.04);
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(0.06, 0.40, 0);
      toolGroup.add(blade);

      // Plant fiber lashings
      const lashGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.08, 6);
      const lash = new THREE.Mesh(lashGeo, this.cordMat);
      lash.position.set(0, 0.40, 0);
      toolGroup.add(lash);

      toolGroup.rotation.set(0.25, 0.12, -0.36);
    } else if (toolType === 'fishing_rod') {
      // Slender flexible bamboo fishing rod
      const rodGeo = new THREE.CylinderGeometry(0.012, 0.022, 1.65, 6);
      const rodMat = new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.7 });
      const rod = new THREE.Mesh(rodGeo, rodMat);
      rod.position.set(0, 0.35, -0.45);
      rod.rotation.x = -Math.PI / 3.0;
      toolGroup.add(rod);

      // Dangling fishing line
      const lineGeo = new THREE.CylinderGeometry(0.003, 0.003, 0.75, 4);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.position.set(0, 0.60, -1.05);
      toolGroup.add(line);

      // Hook at end
      const hookGeo = new THREE.TorusGeometry(0.025, 0.006, 4, 8, Math.PI * 1.5);
      const hookMat = new THREE.MeshStandardMaterial({ color: 0xb0bec5, metalness: 0.8 });
      const hook = new THREE.Mesh(hookGeo, hookMat);
      hook.position.set(0, 0.22, -1.05);
      toolGroup.add(hook);
    } else if (toolType === 'stone_pickaxe') {
      // Pickaxe handle
      const shaftGeo = new THREE.CylinderGeometry(0.02, 0.024, 0.65, 7);
      const shaft = new THREE.Mesh(shaftGeo, this.woodMat);
      shaft.position.y = 0.16;
      toolGroup.add(shaft);

      // Curved pick head
      const pickGeo = new THREE.ConeGeometry(0.04, 0.36, 5);
      pickGeo.rotateZ(Math.PI / 2);
      const pick = new THREE.Mesh(pickGeo, this.stoneMat);
      pick.position.set(0, 0.42, 0);
      toolGroup.add(pick);

      toolGroup.rotation.set(0.25, 0.12, -0.36);
    } else if (toolType === 'wooden_spear') {
      const shaftGeo = new THREE.CylinderGeometry(0.018, 0.022, 1.4, 6);
      const shaft = new THREE.Mesh(shaftGeo, this.woodMat);
      shaft.position.set(0, 0.25, -0.20);
      shaft.rotation.x = -Math.PI / 2.4;
      toolGroup.add(shaft);

      const tipGeo = new THREE.ConeGeometry(0.038, 0.22, 4);
      tipGeo.rotateX(Math.PI / 2);
      const tip = new THREE.Mesh(tipGeo, this.stoneMat);
      tip.position.set(0, 0.72, -0.78);
      toolGroup.add(tip);
    } else if (toolType === 'torch') {
      const stickGeo = new THREE.CylinderGeometry(0.026, 0.03, 0.55, 6);
      const stick = new THREE.Mesh(stickGeo, this.woodMat);
      stick.position.y = 0.16;
      toolGroup.add(stick);

      const wrapGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.14, 6);
      const wrap = new THREE.Mesh(wrapGeo, this.cordMat);
      wrap.position.set(0, 0.38, 0);
      toolGroup.add(wrap);

      // Animated flame
      const flameGeo = new THREE.ConeGeometry(0.07, 0.20, 6);
      const flameMat = new THREE.MeshBasicMaterial({ color: 0xff6d00 });
      this.flameMesh = new THREE.Mesh(flameGeo, flameMat);
      this.flameMesh.position.set(0, 0.50, 0);
      toolGroup.add(this.flameMesh);

      // Torch Light
      this.torchLight = new THREE.PointLight(0xff9100, 2.5, 20);
      this.torchLight.position.set(0, 0.52, 0);
      toolGroup.add(this.torchLight);

      toolGroup.rotation.set(0.2, 0.1, -0.22);
    } else if (toolType === 'building_hammer') {
      const handleGeo = new THREE.CylinderGeometry(0.022, 0.026, 0.50, 6);
      const handle = new THREE.Mesh(handleGeo, this.woodMat);
      handle.position.y = 0.14;
      toolGroup.add(handle);

      const malletGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.18, 6);
      malletGeo.rotateZ(Math.PI / 2);
      const mallet = new THREE.Mesh(malletGeo, this.woodMat);
      mallet.position.set(0, 0.34, 0);
      toolGroup.add(mallet);

      toolGroup.rotation.set(0.22, 0.1, -0.32);
    } else if (toolType === 'coconut') {
      const nutGeo = new THREE.DodecahedronGeometry(0.12, 1);
      const nutMat = new THREE.MeshStandardMaterial({ color: 0x4e3629, roughness: 0.85 });
      const nut = new THREE.Mesh(nutGeo, nutMat);
      nut.position.set(0, 0.06, -0.03);
      toolGroup.add(nut);
    } else if (toolType === 'water_canteen') {
      const flaskGeo = new THREE.CylinderGeometry(0.07, 0.08, 0.22, 8);
      const flaskMat = new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.7 });
      const flask = new THREE.Mesh(flaskGeo, flaskMat);
      flask.position.set(0, 0.08, -0.03);
      toolGroup.add(flask);
    } else if (toolType === 'mushroom') {
      const stemGeo = new THREE.CylinderGeometry(0.02, 0.03, 0.12, 6);
      const stemMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.8 });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.set(0, 0.04, -0.02);
      toolGroup.add(stem);

      const capGeo = new THREE.ConeGeometry(0.08, 0.06, 8);
      const capMat = new THREE.MeshStandardMaterial({ color: 0xe53935, roughness: 0.6 });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.set(0, 0.10, -0.02);
      toolGroup.add(cap);
    } else if (toolType === 'leaves' || toolType === 'palm_frond' || toolType === 'fiber') {
      const leafGeo = new THREE.ConeGeometry(0.10, 0.38, 4);
      leafGeo.rotateX(Math.PI / 2);
      const leafMat = new THREE.MeshStandardMaterial({ color: 0x388e3c, roughness: 0.65 });
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(0, 0.10, -0.05);
      toolGroup.add(leaf);
    } else if (toolType === 'stone') {
      const stoneGeo = new THREE.DodecahedronGeometry(0.08, 1);
      const stoneMesh = new THREE.Mesh(stoneGeo, this.stoneMat);
      stoneMesh.position.set(0, 0.05, -0.03);
      toolGroup.add(stoneMesh);
    } else if (toolType === 'wood') {
      const woodGeo = new THREE.CylinderGeometry(0.04, 0.045, 0.32, 6);
      woodGeo.rotateZ(Math.PI / 3);
      const woodMesh = new THREE.Mesh(woodGeo, this.woodMat);
      woodMesh.position.set(0, 0.06, -0.03);
      toolGroup.add(woodMesh);
    } else {
      // General food / meat / berries
      const foodGeo = new THREE.DodecahedronGeometry(0.10, 1);
      const foodMat = new THREE.MeshStandardMaterial({
        color: toolType.includes('cooked') ? 0x8d4925 : (toolType.includes('crab') ? 0xd84315 : (toolType === 'berries' ? 0x7b1fa2 : 0xc62828)),
        roughness: 0.65
      });
      const food = new THREE.Mesh(foodGeo, foodMat);
      food.position.set(0, 0.06, -0.03);
      toolGroup.add(food);
    }

    this.activeToolMesh = toolGroup;
    this.rightArmGroup.add(toolGroup);
  }

  // Trigger primary swing / attack / chop animation
  swing() {
    if (this.isSwinging || this.isUsing || this.isGathering) return;
    this.isSwinging = true;
    this.swingProgress = 0;
  }

  // Trigger eating or drinking animation
  use() {
    if (this.isUsing || this.isSwinging || this.isGathering) return;
    this.isUsing = true;
    this.useProgress = 0;
  }

  // Trigger reaching / plucking collection animation
  gather() {
    if (this.isGathering || this.isSwinging || this.isUsing) return;
    this.isGathering = true;
    this.gatherProgress = 0;
  }

  update(delta, isMoving, isSprinting) {
    this.idleTime += delta * 2.2;

    // 1. Tool Switch Transition Animation
    if (this.switchProgress < 1.0) {
      this.switchProgress += delta / this.switchDuration;
      if (this.switchProgress >= 0.5 && this.pendingToolType) {
        this.buildToolMesh(this.pendingToolType);
        this.pendingToolType = null;
      }
      const switchOffset = Math.sin(this.switchProgress * Math.PI) * 0.22;
      this.root.position.y = this.basePos.y - switchOffset;
    } else {
      this.root.position.y = this.basePos.y;
    }

    // 2. Torch Light Flicker
    if (this.flameMesh && this.torchLight) {
      const flicker = Math.sin(this.idleTime * 14) * 0.15 + (Math.random() - 0.5) * 0.1;
      this.flameMesh.scale.set(1.0 + flicker, 1.0 + flicker * 1.5, 1.0 + flicker);
      this.torchLight.intensity = 2.4 + flicker * 1.2;
    }

    // 3. Movement Bobbing & Idle Sway
    if (isMoving) {
      const bobFreq = isSprinting ? 12.5 : 8.0;
      this.walkBob += delta * bobFreq;

      const swayX = Math.sin(this.walkBob * 0.5) * (isSprinting ? 0.035 : 0.02);
      const bobY = Math.abs(Math.sin(this.walkBob)) * (isSprinting ? 0.038 : 0.022);

      this.root.position.x = this.basePos.x + swayX;
      this.root.position.y = (this.switchProgress < 1.0 ? this.root.position.y : this.basePos.y) + bobY;

      // Natural counter-rhythm for left and right arms
      this.rightArmGroup.rotation.z = Math.sin(this.walkBob * 0.5) * 0.08;
      this.leftArmGroup.rotation.z = -Math.sin(this.walkBob * 0.5) * 0.04;
      this.leftArmGroup.position.y = this.leftRestPos.y - Math.sin(this.walkBob) * 0.01;
    } else {
      // Idle breathing sway
      const idleSwayX = Math.sin(this.idleTime * 0.6) * 0.006;
      const idleSwayY = Math.sin(this.idleTime * 1.2) * 0.008;

      this.root.position.x = this.basePos.x + idleSwayX;
      if (this.switchProgress >= 1.0) {
        this.root.position.y = this.basePos.y + idleSwayY;
      }
      this.rightArmGroup.rotation.z = 0;
      this.leftArmGroup.rotation.z = 0;
      this.leftArmGroup.position.copy(this.leftRestPos);
    }

    // 4. Primary Swing / Thrust Action
    if (this.isSwinging) {
      this.swingProgress += delta / this.swingDuration;
      if (this.swingProgress >= 1.0) {
        this.swingProgress = 0;
        this.isSwinging = false;
        this.rightArmGroup.rotation.set(0, 0, 0);
        this.rightArmGroup.position.set(0.24, 0, 0);
      } else {
        const t = this.swingProgress;
        const swingArc = Math.sin(t * Math.PI);

        if (this.currentToolType === 'wooden_spear') {
          // Sharp forward spear thrust
          this.rightArmGroup.position.z = -swingArc * 0.38;
          this.rightArmGroup.position.y = swingArc * 0.06;
          this.rightArmGroup.rotation.x = swingArc * 0.15;
          this.rightArmGroup.rotation.y = -swingArc * 0.1;
        } else {
          // Powerful downward-inward chop / mining strike
          this.rightArmGroup.rotation.x = -swingArc * 1.25;
          this.rightArmGroup.rotation.y = swingArc * 0.45;
          this.rightArmGroup.rotation.z = -swingArc * 0.55;
          this.rightArmGroup.position.z = -swingArc * 0.16;
          this.rightArmGroup.position.x = 0.24 - swingArc * 0.08;
        }
      }
    }

    // 5. Secondary Eat / Drink Animation
    else if (this.isUsing) {
      this.useProgress += delta / this.useDuration;
      if (this.useProgress >= 1.0) {
        this.useProgress = 0;
        this.isUsing = false;
        this.rightArmGroup.rotation.set(0, 0, 0);
        this.rightArmGroup.position.set(0.24, 0, 0);
      } else {
        const t = this.useProgress;
        const useArc = Math.sin(t * Math.PI);
        // Bring food/canteen up toward center/mouth
        this.rightArmGroup.position.x = 0.24 - useArc * 0.16;
        this.rightArmGroup.position.y = useArc * 0.18;
        this.rightArmGroup.position.z = -useArc * 0.14;
        this.rightArmGroup.rotation.x = useArc * 0.65;
        this.rightArmGroup.rotation.y = -useArc * 0.35;
        // Subtle eating/drinking nibble
        this.rightArmGroup.position.y += Math.sin(t * Math.PI * 8) * 0.012;
      }
    }

    // 6. Pluck / Reach / Gather Collection Animation (E Key)
    else if (this.isGathering) {
      this.gatherProgress += delta / this.gatherDuration;
      if (this.gatherProgress >= 1.0) {
        this.gatherProgress = 0;
        this.isGathering = false;
        this.rightArmGroup.rotation.set(0, 0, 0);
        this.rightArmGroup.position.set(0.24, 0, 0);
        this.leftArmGroup.position.copy(this.leftRestPos);
      } else {
        const t = this.gatherProgress;
        const reachArc = Math.sin(t * Math.PI);
        // Hand dips down and forward in a quick collection pluck
        this.rightArmGroup.position.x = 0.24 - reachArc * 0.12;
        this.rightArmGroup.position.y = -reachArc * 0.16;
        this.rightArmGroup.position.z = -reachArc * 0.24;
        this.rightArmGroup.rotation.x = -reachArc * 0.40;
        this.rightArmGroup.rotation.z = reachArc * 0.20;

        // Left hand stabilizes
        this.leftArmGroup.position.x = this.leftRestPos.x + reachArc * 0.08;
        this.leftArmGroup.position.y = this.leftRestPos.y + reachArc * 0.10;
      }
    }
  }
}
