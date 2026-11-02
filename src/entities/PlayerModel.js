// 3D Procedural Survivor Character Model for Third-Person Perspective
import * as THREE from '../three.js';

export class PlayerModel {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'player-survivor-model';

    // Materials (reusable, optimized)
    this.skinMat = new THREE.MeshLambertMaterial({ color: 0xdfa675 });
    this.hairMat = new THREE.MeshLambertMaterial({ color: 0x3d2314 });
    this.bandanaMat = new THREE.MeshLambertMaterial({ color: 0xb71c1c });
    this.shirtMat = new THREE.MeshLambertMaterial({ color: 0x4e6b52 }); // Olive jungle shirt
    this.vestMat = new THREE.MeshLambertMaterial({ color: 0x6d573d });  // Leather/canvas vest
    this.backpackMat = new THREE.MeshLambertMaterial({ color: 0x42382c });
    this.pantsMat = new THREE.MeshLambertMaterial({ color: 0x3e4a59 }); // Dark cargo shorts
    this.bootMat = new THREE.MeshLambertMaterial({ color: 0x241d17 });
    this.toolWoodMat = new THREE.MeshLambertMaterial({ color: 0x8d5b36 });
    this.toolStoneMat = new THREE.MeshLambertMaterial({ color: 0x888b90 });

    // Animation state
    this.walkCycle = 0;
    this.breathCycle = 0;
    this.swingProgress = 0;
    this.isSwinging = false;
    this.currentToolId = 'hands';

    this.buildCharacter();
    this.scene.add(this.group);

    // Hidden by default until TPS mode is activated
    this.group.visible = false;
  }

  buildCharacter() {
    // Root anchor (base at player feet: y = 0)
    // 1. Torso Pivot (around waist: y = 0.95)
    this.torso = new THREE.Group();
    this.torso.position.set(0, 0.95, 0);
    this.group.add(this.torso);

    // Torso Body Mesh
    const torsoGeo = new THREE.BoxGeometry(0.48, 0.58, 0.28);
    const torsoMesh = new THREE.Mesh(torsoGeo, this.shirtMat);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    this.torso.add(torsoMesh);

    // Survivor Vest Overlay
    const vestGeo = new THREE.BoxGeometry(0.50, 0.52, 0.30);
    const vestMesh = new THREE.Mesh(vestGeo, this.vestMat);
    vestMesh.castShadow = true;
    this.torso.add(vestMesh);

    // Survivor Backpack
    const packGeo = new THREE.BoxGeometry(0.36, 0.42, 0.18);
    const packMesh = new THREE.Mesh(packGeo, this.backpackMat);
    packMesh.position.set(0, 0.05, -0.22);
    packMesh.castShadow = true;
    this.torso.add(packMesh);

    // Bedroll tied to bottom of pack
    const bedrollGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.40, 8);
    bedrollGeo.rotateZ(Math.PI / 2);
    const bedrollMesh = new THREE.Mesh(bedrollGeo, this.vestMat);
    bedrollMesh.position.set(0, -0.20, -0.22);
    this.torso.add(bedrollMesh);

    // 2. Neck & Head
    this.neck = new THREE.Group();
    this.neck.position.set(0, 0.34, 0);
    this.torso.add(this.neck);

    // Head Mesh
    const headGeo = new THREE.BoxGeometry(0.24, 0.26, 0.24);
    const headMesh = new THREE.Mesh(headGeo, this.skinMat);
    headMesh.position.set(0, 0.14, 0);
    headMesh.castShadow = true;
    this.neck.add(headMesh);

    // Survivor Hair & Bandana
    const hairGeo = new THREE.BoxGeometry(0.26, 0.10, 0.26);
    const hairMesh = new THREE.Mesh(hairGeo, this.hairMat);
    hairMesh.position.set(0, 0.24, 0.01);
    this.neck.add(hairMesh);

    const bandanaGeo = new THREE.BoxGeometry(0.255, 0.06, 0.255);
    const bandanaMesh = new THREE.Mesh(bandanaGeo, this.bandanaMat);
    bandanaMesh.position.set(0, 0.18, 0);
    this.neck.add(bandanaMesh);

    // 3. Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.31, 0.24, 0);
    this.torso.add(this.leftArm);

    const armGeo = new THREE.BoxGeometry(0.14, 0.54, 0.14);
    armGeo.translate(0, -0.24, 0);
    const leftArmMesh = new THREE.Mesh(armGeo, this.skinMat);
    leftArmMesh.castShadow = true;
    this.leftArm.add(leftArmMesh);

    // 4. Right Arm (Weapon / Tool Wielding Arm)
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.31, 0.24, 0);
    this.torso.add(this.rightArm);

    const rightArmMesh = new THREE.Mesh(armGeo.clone(), this.skinMat);
    rightArmMesh.castShadow = true;
    this.rightArm.add(rightArmMesh);

    // Tool Socket at right hand
    this.toolSocket = new THREE.Group();
    this.toolSocket.position.set(0, -0.48, 0.10);
    this.rightArm.add(this.toolSocket);

    // 5. Left Leg
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.14, 0, 0);
    this.group.add(this.leftLeg);

    const legGeo = new THREE.BoxGeometry(0.18, 0.52, 0.18);
    legGeo.translate(0, -0.26, 0);
    const leftLegMesh = new THREE.Mesh(legGeo, this.pantsMat);
    leftLegMesh.castShadow = true;
    this.leftLeg.add(leftLegMesh);

    const bootGeo = new THREE.BoxGeometry(0.19, 0.24, 0.26);
    bootGeo.translate(0, -0.46, 0.04);
    const leftBootMesh = new THREE.Mesh(bootGeo, this.bootMat);
    leftBootMesh.castShadow = true;
    this.leftLeg.add(leftBootMesh);

    // 6. Right Leg
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.14, 0, 0);
    this.group.add(this.rightLeg);

    const rightLegMesh = new THREE.Mesh(legGeo.clone(), this.pantsMat);
    rightLegMesh.castShadow = true;
    this.rightLeg.add(rightLegMesh);

    const rightBootMesh = new THREE.Mesh(bootGeo.clone(), this.bootMat);
    rightBootMesh.castShadow = true;
    this.rightLeg.add(rightBootMesh);

    this.rebuildToolMesh('hands');
  }

  // Attach 3D tool/weapon into character's hand
  setEquippedTool(toolId) {
    if (this.currentToolId === toolId) return;
    this.currentToolId = toolId;
    this.rebuildToolMesh(toolId);
  }

  rebuildToolMesh(toolId) {
    // Clear previous tool
    while (this.toolSocket.children.length > 0) {
      const child = this.toolSocket.children[0];
      this.toolSocket.remove(child);
      if (child.geometry) child.geometry.dispose();
    }

    if (!toolId || toolId === 'hands') return;

    const toolGroup = new THREE.Group();

    if (toolId.includes('axe') || toolId === 'wooden_axe' || toolId === 'stone_hatchet') {
      // Hatchet / Axe
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.028, 0.65, 8), this.toolWoodMat);
      shaft.position.set(0, 0.18, 0);
      shaft.castShadow = true;
      toolGroup.add(shaft);

      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.18), this.toolStoneMat);
      blade.position.set(0, 0.42, 0.08);
      blade.castShadow = true;
      toolGroup.add(blade);
    } else if (toolId.includes('pickaxe') || toolId === 'stone_pickaxe') {
      // Pickaxe
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.028, 0.70, 8), this.toolWoodMat);
      shaft.position.set(0, 0.18, 0);
      shaft.castShadow = true;
      toolGroup.add(shaft);

      const head = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.38, 5), this.toolStoneMat);
      head.rotation.z = Math.PI / 2;
      head.position.set(0, 0.46, 0);
      head.castShadow = true;
      toolGroup.add(head);
    } else if (toolId.includes('spear') || toolId === 'wooden_spear') {
      // Spear
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 1.35, 8), this.toolWoodMat);
      shaft.position.set(0, 0.35, 0);
      shaft.castShadow = true;
      toolGroup.add(shaft);

      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.24, 6), this.toolStoneMat);
      tip.position.set(0, 1.05, 0);
      tip.castShadow = true;
      toolGroup.add(tip);
    } else {
      // Generic carried item block
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), this.toolWoodMat);
      box.position.set(0, 0.05, 0.08);
      box.castShadow = true;
      toolGroup.add(box);
    }

    toolGroup.rotation.x = Math.PI / 3;
    this.toolSocket.add(toolGroup);
  }

  triggerSwing() {
    this.isSwinging = true;
    this.swingProgress = 0;
  }

  setVisible(visible) {
    this.group.visible = visible;
  }

  // Update position, orientation and limb animations
  update(delta, playerPos, yaw, isMoving, isSprinting, isGrounded, isSwimming) {
    if (!this.group.visible) return;

    // Align model with player position and yaw
    this.group.position.copy(playerPos);
    this.group.rotation.y = yaw + Math.PI; // Face forward direction

    // Advance animation clocks
    this.breathCycle += delta * 2.0;

    // Handle Attack / Chop Swing Animation
    if (this.isSwinging) {
      this.swingProgress += delta * 6.0;
      if (this.swingProgress >= 1.0) {
        this.swingProgress = 0;
        this.isSwinging = false;
      }
    }

    if (isSwimming) {
      // Swimming Breaststroke animation
      this.walkCycle += delta * 3.5;
      const swimT = Math.sin(this.walkCycle);

      this.torso.rotation.x = 0.55; // Lean forward into water
      this.leftArm.rotation.x = -1.2 + swimT * 0.5;
      this.rightArm.rotation.x = -1.2 + Math.cos(this.walkCycle) * 0.5;
      this.leftLeg.rotation.x = 0.3 + swimT * 0.3;
      this.rightLeg.rotation.x = 0.3 - swimT * 0.3;
    } else if (!isGrounded) {
      // Jumping / Falling pose
      this.torso.rotation.x = 0.10;
      this.leftArm.rotation.x = -0.55;
      this.rightArm.rotation.x = -0.45;
      this.leftLeg.rotation.x = 0.40;
      this.rightLeg.rotation.x = 0.20;
    } else if (isMoving) {
      // Walking / Sprinting Strides
      const speedMult = isSprinting ? 12.0 : 7.5;
      const strideAmp = isSprinting ? 0.85 : 0.55;
      this.walkCycle += delta * speedMult;

      const legAngle = Math.sin(this.walkCycle) * strideAmp;
      this.leftLeg.rotation.x = legAngle;
      this.rightLeg.rotation.x = -legAngle;

      // Arm counter-swing
      const armAmp = strideAmp * 0.75;
      this.leftArm.rotation.x = -legAngle * 0.8;
      if (!this.isSwinging) {
        this.rightArm.rotation.x = legAngle * 0.8;
      }

      // Torso slight forward lean when sprinting
      this.torso.rotation.x = isSprinting ? 0.22 : 0.08;
      this.torso.position.y = 0.95 + Math.abs(Math.sin(this.walkCycle)) * 0.04;
    } else {
      // Idle Breathing
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.torso.rotation.x = 0;
      this.torso.position.y = 0.95 + Math.sin(this.breathCycle) * 0.015;

      this.leftArm.rotation.x = Math.sin(this.breathCycle) * 0.05;
      if (!this.isSwinging) {
        this.rightArm.rotation.x = -Math.sin(this.breathCycle) * 0.05;
      }
    }

    // Apply Swing Animation Override on Right Arm
    if (this.isSwinging) {
      const swingPhase = Math.sin(this.swingProgress * Math.PI);
      this.rightArm.rotation.x = -1.2 + swingPhase * 1.8;
      this.rightArm.rotation.z = -0.25;
    } else {
      this.rightArm.rotation.z = 0;
    }
  }

  destroy() {
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
