// Procedural 3D Models for Island Wildlife: Deer, Rabbits, Birds, Fish, Snakes, Boars & Coastal Crabs
import * as THREE from '../three.js';

export class AnimalModels {
  // Shared materials for optimal performance and instancing
  static getSharedMaterials() {
    if (!this._mats) {
      this._mats = {
        deerFur: new THREE.MeshStandardMaterial({ color: 0x8d5b36, roughness: 0.85, flatShading: true }),
        deerUnderbelly: new THREE.MeshStandardMaterial({ color: 0xd7ccc8, roughness: 0.9, flatShading: true }),
        antler: new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.7, flatShading: true }),
        hoof: new THREE.MeshStandardMaterial({ color: 0x212121, roughness: 0.9 }),
        rabbitFur: new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.95, flatShading: true }),
        rabbitBelly: new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.9 }),
        earPink: new THREE.MeshStandardMaterial({ color: 0xffcdd2, roughness: 0.8 }),
        birdRed: new THREE.MeshStandardMaterial({ color: 0xd32f2f, roughness: 0.7, flatShading: true }),
        birdBlue: new THREE.MeshStandardMaterial({ color: 0x1976d2, roughness: 0.6, flatShading: true }),
        birdYellow: new THREE.MeshStandardMaterial({ color: 0xfbc02d, roughness: 0.6 }),
        beak: new THREE.MeshStandardMaterial({ color: 0x263238, roughness: 0.5 }),
        fishOrange: new THREE.MeshStandardMaterial({ color: 0xff6d00, roughness: 0.4, flatShading: true }),
        fishWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }),
        fishFin: new THREE.MeshStandardMaterial({ color: 0xffab00, roughness: 0.3, transparent: true, opacity: 0.85 }),
        snakeGreen: new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.7, flatShading: true }),
        snakeGold: new THREE.MeshStandardMaterial({ color: 0xfbc02d, roughness: 0.6 }),
        snakeTongue: new THREE.MeshBasicMaterial({ color: 0xd50000 }),
        boarDark: new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.95, flatShading: true }),
        boarSnout: new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.9 }),
        tusk: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
        crabRed: new THREE.MeshStandardMaterial({ color: 0xd84315, roughness: 0.6, metalness: 0.1 }),
        blackEye: new THREE.MeshBasicMaterial({ color: 0x111111 }),
        amberEye: new THREE.MeshBasicMaterial({ color: 0xffb300 })
      };
    }
    return this._mats;
  }

  // 1. Wild Deer (Graceful, Alert, Runs from Player)
  static createDeer() {
    const deer = new THREE.Group();
    const mats = this.getSharedMaterials();

    // Main Torso
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.44, 1.35, 7);
    torsoGeo.rotateX(Math.PI / 2);
    const torso = new THREE.Mesh(torsoGeo, mats.deerFur);
    torso.position.y = 0.95;
    torso.castShadow = true;
    deer.add(torso);

    // Light underbelly
    const bellyGeo = new THREE.BoxGeometry(0.48, 0.18, 0.9);
    const belly = new THREE.Mesh(bellyGeo, mats.deerUnderbelly);
    belly.position.set(0, 0.76, 0.05);
    deer.add(belly);

    // Slender Neck (angled up-forward)
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, 1.15, 0.55);

    const neckGeo = new THREE.CylinderGeometry(0.18, 0.26, 0.65, 6);
    neckGeo.rotateX(Math.PI / 4);
    const neck = new THREE.Mesh(neckGeo, mats.deerFur);
    neck.position.set(0, 0.22, 0.18);
    neckGroup.add(neck);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.45, 0.35);

    const headGeo = new THREE.ConeGeometry(0.22, 0.52, 6);
    headGeo.rotateX(-Math.PI / 2.2);
    const head = new THREE.Mesh(headGeo, mats.deerFur);
    head.castShadow = true;
    headGroup.add(head);

    // Muzzle / Nose
    const muzzleGeo = new THREE.BoxGeometry(0.12, 0.12, 0.16);
    const muzzle = new THREE.Mesh(muzzleGeo, mats.deerUnderbelly);
    muzzle.position.set(0, -0.05, 0.28);
    headGroup.add(muzzle);

    const noseGeo = new THREE.SphereGeometry(0.045, 4, 4);
    const nose = new THREE.Mesh(noseGeo, mats.blackEye);
    nose.position.set(0, -0.02, 0.36);
    headGroup.add(nose);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.038, 5, 5);
    const eyeL = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeL.position.set(0.13, 0.08, 0.10);
    const eyeR = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeR.position.set(-0.13, 0.08, 0.10);
    headGroup.add(eyeL);
    headGroup.add(eyeR);

    // Ears
    const earGeo = new THREE.ConeGeometry(0.07, 0.24, 4);
    const earL = new THREE.Mesh(earGeo, mats.deerFur);
    earL.position.set(0.16, 0.22, -0.06);
    earL.rotation.z = -0.5;
    earL.rotation.x = -0.2;
    const earR = new THREE.Mesh(earGeo, mats.deerFur);
    earR.position.set(-0.16, 0.22, -0.06);
    earR.rotation.z = 0.5;
    earR.rotation.x = -0.2;
    headGroup.add(earL);
    headGroup.add(earR);

    // Antlers (Branching)
    const antlerMainGeo = new THREE.CylinderGeometry(0.025, 0.035, 0.55, 5);
    const antlerBranchGeo = new THREE.CylinderGeometry(0.018, 0.025, 0.28, 4);

    // Left Antler
    const antlerL = new THREE.Group();
    antlerL.position.set(0.10, 0.18, -0.02);
    const aBeamL = new THREE.Mesh(antlerMainGeo, mats.antler);
    aBeamL.position.set(0.08, 0.26, -0.04);
    aBeamL.rotation.z = -0.3;
    aBeamL.rotation.x = -0.2;
    const aTineL = new THREE.Mesh(antlerBranchGeo, mats.antler);
    aTineL.position.set(0.15, 0.28, 0.06);
    aTineL.rotation.z = -0.7;
    aTineL.rotation.x = 0.4;
    antlerL.add(aBeamL);
    antlerL.add(aTineL);
    headGroup.add(antlerL);

    // Right Antler
    const antlerR = new THREE.Group();
    antlerR.position.set(-0.10, 0.18, -0.02);
    const aBeamR = new THREE.Mesh(antlerMainGeo, mats.antler);
    aBeamR.position.set(-0.08, 0.26, -0.04);
    aBeamR.rotation.z = 0.3;
    aBeamR.rotation.x = -0.2;
    const aTineR = new THREE.Mesh(antlerBranchGeo, mats.antler);
    aTineR.position.set(-0.15, 0.28, 0.06);
    aTineR.rotation.z = 0.7;
    aTineR.rotation.x = 0.4;
    antlerR.add(aBeamR);
    antlerR.add(aTineR);
    headGroup.add(antlerR);

    neckGroup.add(headGroup);
    deer.add(neckGroup);

    // Tail (White underside flag)
    const tailGeo = new THREE.ConeGeometry(0.08, 0.22, 4);
    tailGeo.rotateX(Math.PI / 1.5);
    const tail = new THREE.Mesh(tailGeo, mats.deerUnderbelly);
    tail.position.set(0, 1.05, -0.72);
    deer.add(tail);

    // 4 Articulated Running Legs
    const legGeo = new THREE.CylinderGeometry(0.055, 0.042, 0.85, 6);
    const hoofGeo = new THREE.BoxGeometry(0.07, 0.08, 0.10);
    const legs = [];

    const legOffsets = [
      [-0.18, 0.42, 0.42],  // Front Left
      [0.18, 0.42, 0.42],   // Front Right
      [-0.19, 0.42, -0.45], // Back Left
      [0.19, 0.42, -0.45]   // Back Right
    ];

    for (let pos of legOffsets) {
      const legGroup = new THREE.Group();
      legGroup.position.set(pos[0], pos[1], pos[2]);

      const legMesh = new THREE.Mesh(legGeo, mats.deerFur);
      legMesh.position.y = 0;
      legMesh.castShadow = true;
      legGroup.add(legMesh);

      const hoof = new THREE.Mesh(hoofGeo, mats.hoof);
      hoof.position.set(0, -0.40, 0.01);
      legGroup.add(hoof);

      deer.add(legGroup);
      legs.push(legGroup);
    }

    deer.userData = {
      type: 'deer',
      name: 'Wild Deer',
      maxHealth: 45,
      health: 45,
      speed: 6.2,
      fleeRadius: 14.0,
      alertRadius: 22.0,
      loot: { raw_meat: 2, animal_hide: 2, bone: 1 },
      legs: legs,
      head: headGroup,
      neck: neckGroup,
      tail: tail
    };

    return deer;
  }

  // 2. Island Rabbit (Small, Timid, Hopping Animation)
  static createRabbit() {
    const rabbit = new THREE.Group();
    const mats = this.getSharedMaterials();

    // Body (Plump Egg Shape)
    const bodyGeo = new THREE.SphereGeometry(0.24, 7, 7);
    bodyGeo.scale(1.0, 0.85, 1.25);
    const body = new THREE.Mesh(bodyGeo, mats.rabbitFur);
    body.position.y = 0.22;
    body.castShadow = true;
    rabbit.add(body);

    // Fluffy White Belly
    const bellyGeo = new THREE.SphereGeometry(0.18, 6, 6);
    bellyGeo.scale(0.9, 0.5, 1.0);
    const belly = new THREE.Mesh(bellyGeo, mats.rabbitBelly);
    belly.position.set(0, 0.14, 0.05);
    rabbit.add(belly);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.32, 0.24);

    const headGeo = new THREE.SphereGeometry(0.16, 7, 7);
    headGeo.scale(0.9, 0.95, 1.05);
    const head = new THREE.Mesh(headGeo, mats.rabbitFur);
    head.castShadow = true;
    headGroup.add(head);

    // Nose
    const noseGeo = new THREE.SphereGeometry(0.028, 4, 4);
    const nose = new THREE.Mesh(noseGeo, mats.earPink);
    nose.position.set(0, -0.02, 0.17);
    headGroup.add(nose);

    // Black Bead Eyes
    const eyeGeo = new THREE.SphereGeometry(0.03, 5, 5);
    const eyeL = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeL.position.set(0.11, 0.05, 0.08);
    const eyeR = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeR.position.set(-0.11, 0.05, 0.08);
    headGroup.add(eyeL);
    headGroup.add(eyeR);

    // Long Upright Ears
    const earGeo = new THREE.ConeGeometry(0.045, 0.32, 5);
    const earInnerGeo = new THREE.ConeGeometry(0.03, 0.28, 4);

    const earL = new THREE.Group();
    earL.position.set(0.065, 0.14, -0.02);
    earL.rotation.z = -0.15;
    earL.rotation.x = -0.1;
    const earLMesh = new THREE.Mesh(earGeo, mats.rabbitFur);
    const earLInner = new THREE.Mesh(earInnerGeo, mats.earPink);
    earLInner.position.z = 0.015;
    earL.add(earLMesh);
    earL.add(earLInner);
    headGroup.add(earL);

    const earR = new THREE.Group();
    earR.position.set(-0.065, 0.14, -0.02);
    earR.rotation.z = 0.15;
    earR.rotation.x = -0.1;
    const earRMesh = new THREE.Mesh(earGeo, mats.rabbitFur);
    const earRInner = new THREE.Mesh(earInnerGeo, mats.earPink);
    earRInner.position.z = 0.015;
    earR.add(earRMesh);
    earR.add(earRInner);
    headGroup.add(earR);

    rabbit.add(headGroup);

    // Fluffy Cotton-Ball Tail
    const tailGeo = new THREE.SphereGeometry(0.065, 6, 6);
    const tail = new THREE.Mesh(tailGeo, mats.rabbitBelly);
    tail.position.set(0, 0.22, -0.32);
    rabbit.add(tail);

    // 4 Little Paws
    const pawGeo = new THREE.BoxGeometry(0.07, 0.05, 0.14);
    const paws = [];
    const pawPositions = [
      [-0.10, 0.03, 0.14],
      [0.10, 0.03, 0.14],
      [-0.12, 0.04, -0.16],
      [0.12, 0.04, -0.16]
    ];

    for (let p of pawPositions) {
      const paw = new THREE.Mesh(pawGeo, mats.rabbitFur);
      paw.position.set(p[0], p[1], p[2]);
      rabbit.add(paw);
      paws.push(paw);
    }

    rabbit.userData = {
      type: 'rabbit',
      name: 'Island Hare',
      maxHealth: 15,
      health: 15,
      speed: 5.4,
      fleeRadius: 8.0,
      alertRadius: 14.0,
      loot: { raw_meat: 1, fiber: 2, bone: 1 },
      legs: paws,
      head: headGroup,
      earL: earL,
      earR: earR
    };

    return rabbit;
  }

  // 3. Tropical Bird / Macaw (Perching, Flapping Wings & Flying)
  static createBird() {
    const bird = new THREE.Group();
    const mats = this.getSharedMaterials();

    // Body
    const bodyGeo = new THREE.ConeGeometry(0.18, 0.65, 6);
    bodyGeo.rotateX(-Math.PI / 2.5);
    const body = new THREE.Mesh(bodyGeo, mats.birdRed);
    body.position.y = 0.28;
    body.castShadow = true;
    bird.add(body);

    // Golden Yellow Breast
    const breastGeo = new THREE.SphereGeometry(0.15, 6, 6);
    breastGeo.scale(0.8, 0.9, 1.0);
    const breast = new THREE.Mesh(breastGeo, mats.birdYellow);
    breast.position.set(0, 0.25, 0.08);
    bird.add(breast);

    // Head
    const headGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const head = new THREE.Mesh(headGeo, mats.birdRed);
    head.position.set(0, 0.46, 0.22);
    bird.add(head);

    // Curved Beak
    const beakGeo = new THREE.ConeGeometry(0.05, 0.15, 4);
    beakGeo.rotateX(-Math.PI / 1.7);
    const beak = new THREE.Mesh(beakGeo, mats.beak);
    beak.position.set(0, 0.44, 0.35);
    bird.add(beak);

    // Black Bead Eyes
    const eyeGeo = new THREE.SphereGeometry(0.022, 4, 4);
    const eyeL = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeL.position.set(0.09, 0.48, 0.26);
    const eyeR = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeR.position.set(-0.09, 0.48, 0.26);
    bird.add(eyeL);
    bird.add(eyeR);

    // Flapping Left & Right Wings
    const wingGeo = new THREE.BoxGeometry(0.65, 0.03, 0.35);
    wingGeo.translate(0.32, 0, 0);

    const wingL = new THREE.Group();
    wingL.position.set(0.10, 0.32, 0.02);
    const wingLMesh = new THREE.Mesh(wingGeo, mats.birdBlue);
    wingLMesh.castShadow = true;
    wingL.add(wingLMesh);
    bird.add(wingL);

    const wingR = new THREE.Group();
    wingR.position.set(-0.10, 0.32, 0.02);
    const wingRMesh = new THREE.Mesh(wingGeo, mats.birdBlue);
    wingRMesh.rotation.y = Math.PI;
    wingRMesh.castShadow = true;
    wingR.add(wingRMesh);
    bird.add(wingR);

    // Long Tail Feathers
    const tailGeo = new THREE.PlaneGeometry(0.14, 0.7);
    tailGeo.rotateX(Math.PI / 2.3);
    const tail = new THREE.Mesh(tailGeo, mats.birdBlue);
    tail.position.set(0, 0.22, -0.45);
    bird.add(tail);

    // Little Perching Talons
    const clawGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.12, 4);
    const clawL = new THREE.Mesh(clawGeo, mats.beak);
    clawL.position.set(0.08, 0.06, 0.02);
    const clawR = new THREE.Mesh(clawGeo, mats.beak);
    clawR.position.set(-0.08, 0.06, 0.02);
    bird.add(clawL);
    bird.add(clawR);

    bird.userData = {
      type: 'bird',
      name: 'Tropical Macaw',
      maxHealth: 18,
      health: 18,
      speed: 7.2,
      fleeRadius: 7.0,
      loot: { feathers: 3, raw_meat: 1 },
      wingL: wingL,
      wingR: wingR,
      isFlying: false,
      altitude: 0,
      tail: tail
    };

    return bird;
  }

  // 4. Tropical Reef Fish (Colorful, Swims in Schools, Sinusoidal Swish)
  static createFish() {
    const fish = new THREE.Group();
    const mats = this.getSharedMaterials();

    // Streamlined Fish Body (Clownfish Orange & White)
    const bodyGeo = new THREE.SphereGeometry(0.16, 7, 7);
    bodyGeo.scale(0.65, 1.0, 1.85);
    const body = new THREE.Mesh(bodyGeo, mats.fishOrange);
    body.position.y = 0.18;
    fish.add(body);

    // 2 White Coral Stripes
    const stripeGeo = new THREE.CylinderGeometry(0.165, 0.165, 0.08, 7);
    stripeGeo.rotateX(Math.PI / 2);
    stripeGeo.scale(0.68, 1.02, 1.0);

    const stripe1 = new THREE.Mesh(stripeGeo, mats.fishWhite);
    stripe1.position.set(0, 0.18, 0.08);
    fish.add(stripe1);

    const stripe2 = new THREE.Mesh(stripeGeo, mats.fishWhite);
    stripe2.position.set(0, 0.18, -0.12);
    fish.add(stripe2);

    // Dorsal Fin
    const dorsalGeo = new THREE.PlaneGeometry(0.12, 0.26);
    dorsalGeo.rotateZ(Math.PI / 4);
    const dorsal = new THREE.Mesh(dorsalGeo, mats.fishFin);
    dorsal.position.set(0, 0.32, 0);
    fish.add(dorsal);

    // Tail Fin (Animated Swish)
    const tailPivot = new THREE.Group();
    tailPivot.position.set(0, 0.18, -0.28);

    const tailGeo = new THREE.ConeGeometry(0.15, 0.24, 4);
    tailGeo.rotateX(-Math.PI / 2);
    tailGeo.scale(0.18, 1.0, 1.0);
    const tailFin = new THREE.Mesh(tailGeo, mats.fishFin);
    tailFin.position.set(0, 0, -0.12);
    tailPivot.add(tailFin);
    fish.add(tailPivot);

    // Pectoral Fins
    const pecGeo = new THREE.PlaneGeometry(0.12, 0.16);
    const pecL = new THREE.Mesh(pecGeo, mats.fishFin);
    pecL.position.set(0.12, 0.16, 0.12);
    pecL.rotation.y = 0.6;
    const pecR = new THREE.Mesh(pecGeo, mats.fishFin);
    pecR.position.set(-0.12, 0.16, 0.12);
    pecR.rotation.y = -0.6;
    fish.add(pecL);
    fish.add(pecR);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.024, 4, 4);
    const eyeL = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeL.position.set(0.09, 0.20, 0.22);
    const eyeR = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeR.position.set(-0.09, 0.20, 0.22);
    fish.add(eyeL);
    fish.add(eyeR);

    fish.userData = {
      type: 'fish',
      name: 'Tropical Reef Fish',
      maxHealth: 10,
      health: 10,
      speed: 2.8,
      scatterRadius: 3.5,
      loot: { raw_fish: 1 },
      tailPivot: tailPivot
    };

    return fish;
  }

  // 5. Jungle Snake / Viper (Segmented Body, Slithering S-Curve, Aggressive Strike)
  static createSnake() {
    const snake = new THREE.Group();
    const mats = this.getSharedMaterials();

    // 8 Body Segments along Spline
    const segmentCount = 8;
    const segments = [];

    for (let i = 0; i < segmentCount; i++) {
      const radius = Math.max(0.04, 0.08 - i * 0.006);
      const segGeo = new THREE.SphereGeometry(radius, 6, 6);
      segGeo.scale(1.1, 0.7, 1.3);

      const mat = (i % 2 === 0) ? mats.snakeGreen : mats.snakeGold;
      const segMesh = new THREE.Mesh(segGeo, mat);
      segMesh.position.set(0, radius * 0.7, -i * 0.15);
      segMesh.castShadow = true;
      snake.add(segMesh);
      segments.push(segMesh);
    }

    // Head Group (Attached to first segment)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.10, 0.08);

    // Broad Diamond Viper Head
    const headGeo = new THREE.ConeGeometry(0.09, 0.22, 4);
    headGeo.rotateX(-Math.PI / 2.2);
    headGeo.scale(1.2, 0.6, 1.0);
    const head = new THREE.Mesh(headGeo, mats.snakeGreen);
    head.castShadow = true;
    headGroup.add(head);

    // Amber Slit Eyes
    const eyeGeo = new THREE.SphereGeometry(0.022, 4, 4);
    const eyeL = new THREE.Mesh(eyeGeo, mats.amberEye);
    eyeL.position.set(0.07, 0.03, 0.05);
    const eyeR = new THREE.Mesh(eyeGeo, mats.amberEye);
    eyeR.position.set(-0.07, 0.03, 0.05);
    headGroup.add(eyeL);
    headGroup.add(eyeR);

    // Flickering Forked Tongue
    const tongueGeo = new THREE.BoxGeometry(0.015, 0.005, 0.12);
    const tongue = new THREE.Mesh(tongueGeo, mats.snakeTongue);
    tongue.position.set(0, -0.01, 0.15);
    headGroup.add(tongue);

    snake.add(headGroup);

    snake.userData = {
      type: 'snake',
      name: 'Jungle Viper',
      maxHealth: 28,
      health: 28,
      speed: 3.2,
      attackRadius: 2.2,
      hissRadius: 5.0,
      loot: { snake_skin: 1, raw_meat: 1 },
      segments: segments,
      headGroup: headGroup,
      tongue: tongue
    };

    return snake;
  }

  // 6. Wild Jungle Boar (Muscular, Bristled Fur, Curved Tusks, Charges Player)
  static createBoar() {
    const boar = new THREE.Group();
    const mats = this.getSharedMaterials();

    // Body
    const bodyGeo = new THREE.CylinderGeometry(0.48, 0.65, 1.4, 8);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, mats.boarDark);
    body.position.y = 0.75;
    body.castShadow = true;
    boar.add(body);

    // Head Group
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.85, 0.85);

    const headGeo = new THREE.ConeGeometry(0.38, 0.75, 6);
    headGeo.rotateX(-Math.PI / 2);
    const head = new THREE.Mesh(headGeo, mats.boarDark);
    head.castShadow = true;
    headGroup.add(head);

    // Snout
    const snoutGeo = new THREE.CylinderGeometry(0.16, 0.18, 0.25, 6);
    snoutGeo.rotateX(Math.PI / 2);
    const snout = new THREE.Mesh(snoutGeo, mats.boarSnout);
    snout.position.set(0, -0.07, 0.40);
    headGroup.add(snout);

    // Dangerous Curved Tusks
    const tuskGeo = new THREE.ConeGeometry(0.04, 0.22, 4);
    tuskGeo.rotateX(Math.PI / 3);
    const tuskL = new THREE.Mesh(tuskGeo, mats.tusk);
    tuskL.position.set(0.18, -0.11, 0.30);
    tuskL.rotation.z = 0.2;
    const tuskR = new THREE.Mesh(tuskGeo, mats.tusk);
    tuskR.position.set(-0.18, -0.11, 0.30);
    tuskR.rotation.z = -0.2;
    headGroup.add(tuskL);
    headGroup.add(tuskR);

    // Ears
    const earGeo = new THREE.ConeGeometry(0.12, 0.28, 4);
    const earL = new THREE.Mesh(earGeo, mats.boarDark);
    earL.position.set(0.24, 0.27, -0.20);
    earL.rotation.z = 0.5;
    const earR = new THREE.Mesh(earGeo, mats.boarDark);
    earR.position.set(-0.24, 0.27, -0.20);
    earR.rotation.z = -0.5;
    headGroup.add(earL);
    headGroup.add(earR);

    boar.add(headGroup);

    // 4 Animated Legs
    const legGeo = new THREE.CylinderGeometry(0.1, 0.08, 0.58, 6);
    const legs = [];
    const legPositions = [
      [-0.26, 0.3, 0.45],  // Front Left
      [0.26, 0.3, 0.45],   // Front Right
      [-0.28, 0.3, -0.45], // Back Left
      [0.28, 0.3, -0.45]   // Back Right
    ];

    for (let p of legPositions) {
      const leg = new THREE.Mesh(legGeo, mats.hoof);
      leg.position.set(p[0], p[1], p[2]);
      leg.castShadow = true;
      boar.add(leg);
      legs.push(leg);
    }

    boar.userData = {
      type: 'boar',
      name: 'Wild Boar',
      maxHealth: 65,
      health: 65,
      speed: 3.8,
      chargeSpeed: 6.5,
      aggroRadius: 9.0,
      loot: { raw_meat: 2, animal_hide: 2, bone: 2 },
      legs: legs,
      head: headGroup
    };

    return boar;
  }

  // 7. Coastal Crab (Beach Scavenger)
  static createCrab() {
    const crab = new THREE.Group();
    const mats = this.getSharedMaterials();

    // Carapace Shell
    const shellGeo = new THREE.DodecahedronGeometry(0.35, 1);
    shellGeo.scale(1.2, 0.5, 0.9);
    const shell = new THREE.Mesh(shellGeo, mats.crabRed);
    shell.position.y = 0.22;
    shell.castShadow = true;
    crab.add(shell);

    // Eye Stalks
    const eyeGeo = new THREE.SphereGeometry(0.045, 6, 6);
    const eyeL = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeL.position.set(0.12, 0.38, 0.24);
    const eyeR = new THREE.Mesh(eyeGeo, mats.blackEye);
    eyeR.position.set(-0.12, 0.38, 0.24);
    crab.add(eyeL);
    crab.add(eyeR);

    // Claws / Pincers
    const clawGeo = new THREE.ConeGeometry(0.12, 0.32, 5);
    clawGeo.rotateX(Math.PI / 2);
    const clawL = new THREE.Mesh(clawGeo, mats.crabRed);
    clawL.position.set(0.38, 0.22, 0.28);
    clawL.rotation.y = 0.4;
    clawL.castShadow = true;
    crab.add(clawL);

    const clawR = new THREE.Mesh(clawGeo, mats.crabRed);
    clawR.position.set(-0.38, 0.22, 0.28);
    clawR.rotation.y = -0.4;
    clawR.castShadow = true;
    crab.add(clawR);

    // 6 Walking Legs
    const legGeo = new THREE.CylinderGeometry(0.025, 0.02, 0.32, 4);
    const legs = [];
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 3; i++) {
        const leg = new THREE.Mesh(legGeo, mats.crabRed);
        const zOff = (i - 1) * 0.14;
        leg.position.set(side * 0.35, 0.12, zOff);
        leg.rotation.z = side * 0.7;
        leg.rotation.y = side * 0.2;
        leg.castShadow = true;
        crab.add(leg);
        legs.push(leg);
      }
    }

    crab.userData = {
      type: 'crab',
      name: 'Coastal Crab',
      maxHealth: 25,
      health: 25,
      speed: 2.2,
      fleeRadius: 5.0,
      loot: { raw_crab: 1 },
      legs: legs
    };

    return crab;
  }
}
