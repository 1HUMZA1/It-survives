// Complete Survival Player Controller: Physics, Fixed YXZ Camera, Robust Survival Systems (Health, Hunger, Thirst, Stamina)
import * as THREE from '../three.js';
import { PlayerArms } from './PlayerArms.js';
import { PlayerModel } from './PlayerModel.js';
import { ITEMS } from '../items/ItemDefinitions.js';
import { survivalStats } from '../core/SurvivalStats.js';
import { physicsManager } from '../core/PhysicsManager.js';

export class Player {
  constructor(camera, scene, terrain, ocean, inventory, audio, cameraController = null) {
    this.camera = camera;
    this.scene = scene;
    this.terrain = terrain;
    this.ocean = ocean;
    this.inventory = inventory;
    this.audio = audio;
    this.cameraController = cameraController;
    this.physicsManager = physicsManager;

    // Explicitly enforce YXZ rotation order on camera to eliminate any 90-degree roll bug
    this.camera.rotation.order = 'YXZ';

    // Viewmodel arms and tool representation (First-Person)
    this.arms = new PlayerArms(camera);

    // 3D Survivor Avatar Model (Third-Person)
    this.playerModel = new PlayerModel(scene);

    // Initial position on beach near airplane crash site
    this.position = new THREE.Vector3(56, 1.8, 76);
    this.velocity = new THREE.Vector3();
    this.height = 1.75; // Eye height

    // Rotation angles
    this.yaw = -Math.PI / 2; // Facing inland towards jungle
    this.pitch = 0;

    // Movement parameters
    this.walkSpeed = 4.8;
    this.sprintSpeed = 8.2;
    this.swimSpeed = 3.6;
    this.jumpForce = 7.2;
    this.gravity = -20.0;

    // Physics & Movement States
    this.isGrounded = true;
    this.isSwimming = false;
    this.isUnderwater = false;
    this.isSprinting = false;
    this.isResting = true;
    this.footstepTimer = 0;

    // --- Core 4 Survival Statistics ---
    this.vitals = {
      health: 100,
      hunger: 90,
      thirst: 85,
      stamina: 100,
      oxygen: 100
    };

    // Warning alert cooldown timers
    this.starveAlertTimer = 0;
    this.thirstAlertTimer = 0;

    this.isDead = false;
    this.daysSurvived = 1;

    // Callbacks
    this.onVitalsChanged = null;
    this.onPlayerDeath = null;
    this.onNotification = null;
    this.onDamageTaken = null;
    this.onOpenChest = null;
    this.onExitBuildMode = null;
    this.onStructurePlaced = null;

    // Raycaster for aiming and interactions
    this.raycaster = new THREE.Raycaster();
  }

  // Handle first-person mouse look with locked horizon and pitch clamping
  handleMouseLook(dx, dy, sensitivity = 0.0022, invertY = false) {
    if (this.isDead) return;

    this.yaw -= dx * sensitivity;
    const pitchFactor = invertY ? -1 : 1;
    this.pitch -= dy * sensitivity * pitchFactor;

    // Clamp pitch between looking straight down (-89°) and straight up (+89°)
    const maxPitch = Math.PI / 2 - 0.04;
    this.pitch = Math.max(-maxPitch, Math.min(maxPitch, this.pitch));

    // Strictly enforce YXZ Euler angles with zero Z-roll at all times
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
  }

  update(delta, input, foliageManager, wildlifeManager, buildingSystem, crashSite, timeWeather) {
    if (this.isDead) return;

    // Strictly enforce YXZ rotation order and zero camera roll every frame
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.up.set(0, 1, 0);

    // 1. Sync Equipped Tool from Hotbar with viewmodel arms & 3D Building Hologram & Character Model
    const equipped = this.inventory.getEquippedItem();
    const toolId = equipped ? equipped.id : 'hands';
    this.arms.setEquippedTool(toolId);
    if (this.playerModel) {
      this.playerModel.setEquippedTool(toolId);
    }

    // If equipped item is a placeable structure, activate building preview automatically
    const isStructure = equipped && (
      equipped.id === 'wood_foundation' ||
      equipped.id === 'wood_wall' ||
      equipped.id === 'wood_door' ||
      equipped.id === 'wood_roof' ||
      equipped.id === 'campfire' ||
      equipped.id === 'basic_shelter' ||
      equipped.id === 'storage_box' ||
      equipped.id === 'shelter_lean_to' ||
      equipped.id === 'storage_chest' ||
      equipped.id === 'rain_collector'
    );

    if (isStructure && buildingSystem) {
      if (buildingSystem.activeBlueprint !== equipped.id) {
        buildingSystem.startBuilding(equipped.id);
      }
    } else if (buildingSystem && buildingSystem.activeBlueprint && !this.manualBuildMode) {
      buildingSystem.cancelBuilding();
    }

    // 2. Physics & Movement (connected to Stamina)
    this.updateMovement(delta, input);

    // 3. Complete Survival System Vitals (Health, Hunger, Thirst, Stamina)
    this.updateSurvivalVitals(delta, timeWeather);

    // 4. Update Viewmodel Arms (Idle breathing, Footstep bobbing, Attack swing, Eating/Drinking)
    const isMoving = input.keys.forward || input.keys.backward || input.keys.left || input.keys.right;
    this.arms.update(delta, isMoving && this.isGrounded, this.isSprinting);

    // 5. Update Raycaster for Contextual Aiming
    this.updateRaycaster();

    // 6. Handle Primary Action (Left Click: Attack, Chop, Mine, Place Blueprint)
    if (input.mouse.leftClicked) {
      this.handlePrimaryAction(foliageManager, wildlifeManager, buildingSystem);
    }

    // 7. Handle Secondary Action (Right Click: Eat Food, Drink Water, Cancel Build)
    if (input.mouse.rightClicked) {
      this.handleSecondaryAction(buildingSystem);
    }
  }

  updateMovement(delta, input) {
    // Determine movement direction relative to camera yaw
    const moveX = (input.keys.right ? 1 : 0) - (input.keys.left ? 1 : 0);
    const moveZ = (input.keys.backward ? 1 : 0) - (input.keys.forward ? 1 : 0);

    const inputDir = new THREE.Vector3(moveX, 0, moveZ);
    const hasInput = inputDir.lengthSq() > 0.001;
    this.isResting = !hasInput;

    if (hasInput) {
      inputDir.normalize();
      inputDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    }

    // Ground and Ocean Water height at current position
    const groundY = this.terrain.getElevation(this.position.x, this.position.z);
    const waterY = this.ocean.getWaveHeight(this.position.x, this.position.z);

    this.isSwimming = (this.position.y < waterY + 0.2);
    this.isUnderwater = (this.position.y + this.height < waterY + 0.1);

    // Sprinting requires stamina > 5 and moving forward on land
    const wantsSprint = input.keys.sprint && hasInput && input.keys.forward && !this.isSwimming;
    this.isSprinting = wantsSprint && (this.vitals.stamina > 4);

    // Sprinting consumes stamina continuously
    if (this.isSprinting) {
      this.vitals.stamina = Math.max(0, this.vitals.stamina - delta * 18.0);
    }

    let currentSpeed = this.walkSpeed;
    if (this.isSwimming) {
      currentSpeed = this.swimSpeed;
    } else if (this.isSprinting) {
      currentSpeed = this.sprintSpeed;
    }

    if (this.isSwimming) {
      // Swimming Physics & Buoyancy
      if (input.keys.jump) {
        this.velocity.y = 3.2; // swim up towards surface
      } else if (input.keys.sprint) {
        this.velocity.y = -2.8; // dive down
      } else {
        // Natural buoyant float to surface
        const targetY = waterY - 0.4;
        this.velocity.y = (targetY - this.position.y) * 4.0;
      }

      this.velocity.x = inputDir.x * currentSpeed;
      this.velocity.z = inputDir.z * currentSpeed;
    } else {
      // Land Walking & Jumping
      this.velocity.x = inputDir.x * currentSpeed;
      this.velocity.z = inputDir.z * currentSpeed;

      // Jump (consumes 12 stamina)
      if (input.keys.jump && this.isGrounded && this.vitals.stamina >= 10) {
        this.velocity.y = this.jumpForce;
        this.isGrounded = false;
        this.vitals.stamina = Math.max(0, this.vitals.stamina - 12);
        this.audio.playJump();
      }

      // Apply Gravity
      this.velocity.y += this.gravity * delta;
    }

    // Calculate desired movement translation vector
    const desiredMovement = new THREE.Vector3(
      this.velocity.x * delta,
      this.velocity.y * delta,
      this.velocity.z * delta
    );

    // Compute collision-aware movement via Rapier 3D physics if initialized
    let movement = desiredMovement;
    if (this.physicsManager && this.physicsManager.isReady) {
      movement = this.physicsManager.computePlayerMovement(this.position, desiredMovement, delta);
    }

    // Apply translation
    this.position.x += movement.x;
    this.position.y += movement.y;
    this.position.z += movement.z;

    if (hasInput && (this.isGrounded || this.isSwimming)) {
      survivalStats.recordDistance(currentSpeed * delta);
    }

    // Rock-solid Ground Collision Clamping: The player must NEVER fall through the ground!
    const updatedGroundY = this.terrain.getElevation(this.position.x, this.position.z);
    if (!this.isSwimming && this.position.y <= updatedGroundY) {
      this.position.y = updatedGroundY;
      this.velocity.y = 0;
      this.isGrounded = true;
    } else if (!this.isSwimming) {
      if (this.physicsManager && this.physicsManager.isReady && this.physicsManager.isPlayerGrounded()) {
        this.isGrounded = true;
      }
    }

    // Update Camera position (First-Person vs Third-Person)
    if (this.cameraController) {
      this.cameraController.update(delta, this.position, this.height, this.yaw, this.pitch);
      const isTPS = this.cameraController.isThirdPerson();
      if (this.playerModel) this.playerModel.setVisible(isTPS);
      if (this.arms) this.arms.setVisible(!isTPS);
    } else {
      this.camera.position.set(
        this.position.x,
        this.position.y + this.height,
        this.position.z
      );
    }

    // Update Third-Person Character Model animation
    if (this.playerModel) {
      this.playerModel.update(
        delta,
        this.position,
        this.yaw,
        hasInput,
        this.isSprinting,
        this.isGrounded,
        this.isSwimming
      );
    }

    // Footstep audio
    if (hasInput && (this.isGrounded || this.isSwimming)) {
      const stepInterval = this.isSprinting ? 0.30 : (this.isSwimming ? 0.65 : 0.46);
      this.footstepTimer += delta;
      if (this.footstepTimer >= stepInterval) {
        this.footstepTimer = 0;
        let surface = 'sand';
        if (this.isSwimming || (this.position.y < updatedGroundY + 0.3 && updatedGroundY < 0.2)) {
          surface = 'water';
        } else if (updatedGroundY > 2.5) {
          surface = 'grass';
        }
        this.audio.playFootstep(surface);
      }
    }
  }

  // Complete Survival System Vitals Logic
  updateSurvivalVitals(delta, timeWeather) {
    // 1. Stamina Regeneration (faster when resting)
    if (!this.isSprinting) {
      // Rest rate: standing still recovers twice as fast as walking
      const regenRate = this.isResting ? 24.0 : 12.0;

      // Dehydration or starvation slows stamina recovery
      let efficiency = 1.0;
      if (this.vitals.thirst < 20 || this.vitals.hunger < 20) {
        efficiency = 0.5;
      }

      const stamBonus = (this.inventory && this.inventory.hasAccessory && this.inventory.hasAccessory('shell_amulet')) ? 1.25 : 1.0;
      this.vitals.stamina = Math.min(100, this.vitals.stamina + delta * regenRate * efficiency * stamBonus);
    }

    // 2. Hunger Depletion over time
    // Base metabolic drain: 0.16/s. Sprinting accelerates hunger by 2.5x
    const hungerDrain = this.isSprinting ? 0.42 : 0.16;
    this.vitals.hunger = Math.max(0, this.vitals.hunger - delta * hungerDrain);

    // 3. Thirst Depletion over time
    // Base dehydration: 0.28/s. Faster under hot midday sun (11:00 - 15:00) and sprinting
    let thirstDrain = 0.28;
    if (timeWeather && timeWeather.timeOfDay >= 11.0 && timeWeather.timeOfDay <= 15.0) {
      thirstDrain *= 1.5; // Scorching tropical noon heat
      // Woven Palm Hat protection against scorching sun
      if (this.inventory && this.inventory.equipment && this.inventory.equipment.head && this.inventory.equipment.head.id === 'palm_hat') {
        thirstDrain *= 0.8;
      }
    }
    if (this.isSprinting) {
      thirstDrain *= 1.8;
    }
    // Soothing rain slows dehydration and quenches thirst
    if (timeWeather && (timeWeather.weather === 'rain' || timeWeather.weather === 'storm') && !this.isUnderwater) {
      thirstDrain *= 0.25;
      this.vitals.thirst = Math.min(100, this.vitals.thirst + delta * 0.15);
    }
    this.vitals.thirst = Math.max(0, this.vitals.thirst - delta * thirstDrain);

    // 4. Oxygen (Underwater breathing)
    if (this.isUnderwater) {
      this.vitals.oxygen = Math.max(0, this.vitals.oxygen - delta * 12.5);
    } else {
      this.vitals.oxygen = Math.min(100, this.vitals.oxygen + delta * 25.0);
    }

    // 5. Starvation & Dehydration Health Consequences
    let damage = 0;
    this.starveAlertTimer -= delta;
    this.thirstAlertTimer -= delta;

    if (this.vitals.hunger <= 0) {
      damage += delta * 2.2; // Starvation damages health
      if (this.starveAlertTimer <= 0) {
        this.starveAlertTimer = 6.0;
        if (this.onNotification) this.onNotification('⚠️ You are STARVING! Find food immediately.');
      }
    }

    if (this.vitals.thirst <= 0) {
      damage += delta * 3.8; // Dehydration damages health rapidly!
      if (this.thirstAlertTimer <= 0) {
        this.thirstAlertTimer = 5.0;
        if (this.onNotification) this.onNotification('🚨 You are DEHYDRATED! Drink freshwater immediately.');
      }
    }

    if (this.vitals.oxygen <= 0) {
      damage += delta * 16.0; // Drowning
    }

    if (damage > 0) {
      this.takeDamage(damage, this.vitals.thirst <= 0 ? 'Severe Dehydration' : 'Starvation');
    } else if (this.vitals.hunger > 70 && this.vitals.thirst > 70 && this.vitals.health < 100) {
      // Natural passive health regeneration when well-fed and well-hydrated!
      this.vitals.health = Math.min(100, this.vitals.health + delta * 1.5);
    }

    // Dispatch update to HUD
    if (this.onVitalsChanged) {
      this.onVitalsChanged(this.vitals);
    }
  }

  takeDamage(amount, reason = '') {
    // Armor reduction from equipped gear
    const armor = this.inventory ? this.inventory.getTotalArmor() : 0;
    const reduction = Math.min(0.65, armor * 0.02);
    const finalDamage = Math.max(0.5, amount * (1 - reduction));

    this.vitals.health = Math.max(0, this.vitals.health - finalDamage);
    this.audio.playHurt();

    if (this.onDamageTaken) {
      this.onDamageTaken();
    }

    if (this.vitals.health <= 0 && !this.isDead) {
      this.die(reason);
    }
  }

  die(reason) {
    this.isDead = true;
    if (this.onPlayerDeath) {
      this.onPlayerDeath(reason);
    }
  }

  respawn() {
    this.isDead = false;
    const spawnY = this.terrain ? Math.max(1.8, this.terrain.getElevation(56, 76) + 0.1) : 1.8;
    this.position.set(56, spawnY, 76);
    this.velocity.set(0, 0, 0);
    if (this.physicsManager && this.physicsManager.isReady) {
      this.physicsManager.setPlayerPosition(this.position);
    }
    this.vitals.health = 100;
    this.vitals.hunger = 85;
    this.vitals.thirst = 85;
    this.vitals.stamina = 100;
    this.vitals.oxygen = 100;
    this.yaw = -Math.PI / 2;
    this.pitch = 0;
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(0, this.yaw, 0, 'YXZ');
  }

  updateRaycaster() {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
  }

  // Left Click Primary Action: Swing Tool / Mine / Chop / Attack / Place Building
  handlePrimaryAction(foliageManager, wildlifeManager, buildingSystem) {
    if (buildingSystem && buildingSystem.activeBlueprint) {
      if (buildingSystem.placeStructure()) {
        const bpName = buildingSystem.getTypeForBlueprint(buildingSystem.activeBlueprint);
        survivalStats.recordBuild();
        if (this.onNotification) {
          this.onNotification(`🔨 Constructed ${bpName ? bpName.toUpperCase() : 'Structure'}!`);
        }
        if (this.onStructurePlaced) {
          this.onStructurePlaced();
        }
      } else {
        if (this.onNotification && buildingSystem.validationReason) {
          this.onNotification(`⚠️ ${buildingSystem.validationReason}`);
        }
      }
      return;
    }

    // Tool exertion consumes 5 stamina and slight hunger
    if (this.vitals.stamina < 5) {
      if (this.onNotification) this.onNotification('Too exhausted to swing!');
      return;
    }
    this.vitals.stamina = Math.max(0, this.vitals.stamina - 5);
    this.vitals.hunger = Math.max(0, this.vitals.hunger - 0.2);

    // Play swing animation and tool swoosh
    this.arms.swing();
    if (this.playerModel) {
      this.playerModel.triggerSwing();
    }

    const equipped = this.inventory.getEquippedItem();
    let attackPower = 10;
    let treePower = 0.35;
    let rockPower = 0.25;
    let toolType = 'hands';
    let attackRange = 3.6;

    if (equipped) {
      const def = Object.values(ITEMS).find(i => i.id === equipped.id);
      if (def) {
        toolType = def.id;
        if (def.efficiency) {
          attackPower = def.efficiency.attack || 10;
          treePower = def.efficiency.tree || 0.35;
          rockPower = def.efficiency.rock || 0.25;
        }
        if (toolType === 'wooden_spear') {
          attackRange = 4.8; // Extended hunting reach for spear!
        }
      }
    }

    if (toolType === 'wooden_spear' && this.audio.playSpearThrust) {
      this.audio.playSpearThrust();
    } else {
      this.audio.playSwing();
    }

    // 1. Check Wildlife Attack
    const animalHit = wildlifeManager.checkAttack(this.raycaster, attackRange);
    if (animalHit) {
      wildlifeManager.damageAnimal(animalHit.animal, attackPower, (loot, type, animalName) => {
        survivalStats.recordHunt();
        let lootDetails = [];
        for (let itemKey of Object.keys(loot)) {
          this.inventory.addItem(itemKey, loot[itemKey]);
          const itemDef = Object.values(ITEMS).find(it => it.id === itemKey);
          const name = itemDef ? itemDef.name : itemKey.replace('_', ' ').toUpperCase();
          lootDetails.push(`+${loot[itemKey]} ${name}`);
        }
        if (this.onNotification) {
          this.onNotification(`🏹 Hunted ${animalName || type.toUpperCase()}! (${lootDetails.join(', ')})`);
        }
        this.audio.playPickup();
      });
      return;
    }

    // 2. Check Foliage / Trees / Rocks / Ground Pickups
    const foliageHit = foliageManager.checkRaycast(this.raycaster, 3.8);
    if (foliageHit) {
      const node = foliageHit.node;
      const nodeType = node.userData.type;

      // If it's a direct ground pickup, gather it immediately!
      if (node.userData.isDirectPickup) {
        if (nodeType === 'berry_bush') this.audio.playBerryPluck();
        else if (nodeType === 'ground_coconut' || nodeType === 'ground_stone') this.audio.playPickup();
        else this.audio.playGather();

        foliageManager.gatherDirectNode(node, this.audio, (yieldItems) => {
          survivalStats.recordHarvest(1);
          for (let itemKey of Object.keys(yieldItems)) {
            this.inventory.addItem(itemKey, yieldItems[itemKey]);
            if (this.onNotification) {
              this.onNotification(`+${yieldItems[itemKey]} ${itemKey.replace('_', ' ').toUpperCase()}`);
            }
          }
        });
        return;
      }

      let effectiveDmg = 15;

      // Check if holding a fishing rod near ocean or river
      if (toolType === 'fishing_rod') {
        const waterY = this.ocean.getWaveHeight(this.position.x, this.position.z);
        if (this.position.y < waterY + 2.4 || Math.hypot(this.position.x, this.position.z) > 135) {
          this.audio.playPickup();
          if (Math.random() < 0.7) {
            this.inventory.addItem('raw_fish', 1);
            if (this.onNotification) this.onNotification('🎣 Reeled in a Raw Reef Fish! Cook it at a campfire.');
          } else {
            if (this.onNotification) this.onNotification('🎣 The fish nibbled and got away! Cast again.');
          }
          return;
        }
      }

      if (nodeType === 'palm_tree' || nodeType === 'jungle_tree') {
        if (toolType === 'stone_axe') {
          effectiveDmg = 42; // Fast 2-3 chop felling with Stone Hatchet!
        } else if (toolType === 'wooden_axe') {
          effectiveDmg = 30; // Solid chopping with Wooden Axe!
        } else {
          effectiveDmg = 8;
          if (this.onNotification && Math.random() < 0.4) {
            this.onNotification('Tip: Equip an Axe to chop trees quickly!');
          }
        }
        this.audio.playChopTree();
      } else if (nodeType === 'rock_node') {
        if (toolType === 'stone_pickaxe') {
          effectiveDmg = 38; // Fast mining with Stone Pickaxe!
        } else {
          effectiveDmg = 6;
          if (this.onNotification && Math.random() < 0.4) {
            this.onNotification('Tip: Equip a Stone Pickaxe to mine boulders!');
          }
        }
        this.audio.playMineRock();
      } else {
        effectiveDmg = 25;
        this.audio.playGather();
      }

      const res = foliageManager.damageNode(
        node,
        effectiveDmg,
        foliageHit.point,
        this.audio,
        (yieldItems) => {
          survivalStats.recordHarvest(1);
          if (nodeType === 'palm_tree' || nodeType === 'jungle_tree') {
            survivalStats.recordWoodGathered(2);
          }
          const gatheredList = [];
          for (let itemKey of Object.keys(yieldItems)) {
            this.inventory.addItem(itemKey, yieldItems[itemKey]);
            const itemDef = Object.values(ITEMS).find(it => it.id === itemKey);
            const name = itemDef ? itemDef.name : itemKey.replace('_', ' ').toUpperCase();
            gatheredList.push(`+${yieldItems[itemKey]} ${name}`);
          }
          if (this.onNotification) {
            const nodeTitle = node.userData.name || 'Resource';
            this.onNotification(`🎉 Harvested ${nodeTitle}! (${gatheredList.join(', ')})`);
          }
        }
      );

      if (res && !res.destroyed && this.onNotification) {
        const remaining = Math.max(0, Math.round(res.health));
        if (nodeType === 'palm_tree' || nodeType === 'jungle_tree') {
          this.onNotification(`🪵 Chopping ${node.userData.name} (${remaining}/${node.userData.maxHealth} HP)`);
        } else if (nodeType === 'rock_node') {
          this.onNotification(`⛏️ Mining ${node.userData.name} (${remaining}/${node.userData.maxHealth} HP)`);
        }
      }
    }
  }

  // Right Click Secondary Action: Eat Food / Drink Water / Use Bandage / Cancel Building
  handleSecondaryAction(buildingSystem) {
    if (buildingSystem && buildingSystem.activeBlueprint) {
      buildingSystem.cancelBuilding();
      if (this.onExitBuildMode) this.onExitBuildMode();
      return;
    }

    const equipped = this.inventory.getEquippedItem();
    if (!equipped) return;

    const def = Object.values(ITEMS).find(i => i.id === equipped.id);
    if (def && def.consumable) {
      const c = def.consumable;

      // Trigger hand raising eating/drinking animation
      this.arms.use();

      // Apply Survival Nutrition
      const hungerGain = c.hunger || 0;
      const thirstGain = c.thirst || 0;
      const healthGain = c.health || 0;

      this.vitals.hunger = Math.min(100, Math.max(0, this.vitals.hunger + hungerGain));
      this.vitals.thirst = Math.min(100, Math.max(0, this.vitals.thirst + thirstGain));
      this.vitals.health = Math.min(100, Math.max(0, this.vitals.health + healthGain));

      if (c.useSound === 'drink') this.audio.playDrink();
      else this.audio.playEat();

      // Deduct consumed item
      this.inventory.removeItem(equipped.id, 1);

      // Visual status notification
      let statFeedback = [];
      if (hungerGain > 0) statFeedback.push(`+${hungerGain} Hunger`);
      if (thirstGain > 0) statFeedback.push(`+${thirstGain} Thirst`);
      if (healthGain > 0) statFeedback.push(`+${healthGain} Health`);
      if (healthGain < 0) statFeedback.push(`${healthGain} Health (Food Sickness)`);

      if (this.onNotification) {
        this.onNotification(`Consumed ${def.name} (${statFeedback.join(', ')})`);
      }
    }
  }

  // 'E' Key Interaction: Gather Pickups, Drink Fresh Water, Cook Meat, Sleep in Bed, Scavenge
  interact(buildingSystem, crashSite, foliageManager, timeWeather) {
    // 1. Direct Ground Resource Gathering (Coconuts, Stones, Berries, Mushrooms, Ferns, Driftwood)
    const foliageHit = foliageManager.checkRaycast(this.raycaster, 3.8);
    if (foliageHit && foliageHit.node.userData.isDirectPickup) {
      const node = foliageHit.node;
      const type = node.userData.type;

      this.arms.gather();

      if (type === 'berry_bush') {
        this.audio.playBerryPluck();
      } else if (type === 'ground_coconut' || type === 'ground_stone') {
        this.audio.playPickup();
      } else {
        this.audio.playGather();
      }

      foliageManager.gatherDirectNode(node, this.audio, (yieldItems, collectedType) => {
        survivalStats.recordHarvest(1);
        for (let itemKey of Object.keys(yieldItems)) {
          this.inventory.addItem(itemKey, yieldItems[itemKey]);
          const itemDef = Object.values(ITEMS).find(it => it.id === itemKey);
          const name = itemDef ? itemDef.name : itemKey.replace('_', ' ').toUpperCase();
          if (this.onNotification) {
            this.onNotification(`+${yieldItems[itemKey]} ${name}`);
          }
        }
      });
      return;
    }

    // 2. Scavenge Airplane Crates & Luggage
    const crateHit = crashSite.checkScavenge(this.raycaster, 3.5);
    if (crateHit && !crateHit.userData.searched) {
      crateHit.userData.searched = true;
      survivalStats.recordHarvest(1);
      this.arms.gather();
      const loot = crateHit.userData.loot || {};
      for (let k of Object.keys(loot)) {
        this.inventory.addItem(k, loot[k]);
        if (this.onNotification) this.onNotification(`Scavenged: +${loot[k]} ${k.replace('_', ' ').toUpperCase()}`);
      }
      this.audio.playPickup();
      return;
    }

    // 3. Placed Structures (Storage Box, Campfire cooking, Bed sleeping, Door, Rain collector)
    const structHit = buildingSystem.checkInteraction(this.raycaster, 3.8);
    if (structHit) {
      const data = structHit.userData;
      if (data.isChest) {
        if (this.onOpenChest) {
          this.onOpenChest(structHit);
        }
        return;
      } else if (data.type === 'door') {
        data.toggleDoor();
        this.audio.playPlaceStructure();
        return;
      } else if (data.isBed) {
        timeWeather.sleepUntilMorning();
        this.vitals.health = Math.min(100, this.vitals.health + 25);
        this.vitals.stamina = 100;
        this.audio.playDrink();
        if (this.onNotification) this.onNotification('Slept until morning! Vitality restored.');
        return;
      } else if (data.isCampfire) {
        if (this.inventory.getItemCount('raw_fish') > 0) {
          this.inventory.removeItem('raw_fish', 1);
          this.inventory.addItem('cooked_fish', 1);
          this.audio.playCraft();
          survivalStats.recordCook();
          if (this.onNotification) this.onNotification('🐠 Grilled Fresh Reef Fish on the campfire! (+42 Hunger, +22 Health)');
        } else if (this.inventory.getItemCount('raw_crab') > 0) {
          this.inventory.removeItem('raw_crab', 1);
          this.inventory.addItem('cooked_crab', 1);
          this.audio.playCraft();
          survivalStats.recordCook();
          if (this.onNotification) this.onNotification('🦀 Roasted Crab Meat on the campfire! (+35 Hunger, +15 Health)');
        } else if (this.inventory.getItemCount('raw_meat') > 0) {
          this.inventory.removeItem('raw_meat', 1);
          this.inventory.addItem('cooked_meat', 1);
          this.audio.playCraft();
          survivalStats.recordCook();
          if (this.onNotification) this.onNotification('🥩 Grilled Roasted Steak on the campfire! (+55 Hunger, +30 Health)');
        } else {
          if (this.onNotification) this.onNotification('Campfire: Hold Raw Meat, Crab, or Fish to cook.');
        }
        return;
      } else if (data.isCollector) {
        this.arms.use();
        this.vitals.thirst = Math.min(100, this.vitals.thirst + 50);
        this.audio.playDrink();
        if (this.onNotification) this.onNotification('Drank pure collected rainwater! (+50 Thirst)');
        return;
      }
    }

    // 4. Drink from Freshwater Inland Stream / Lagoon
    const groundY = this.terrain.getElevation(this.position.x, this.position.z);
    if (groundY > 0.4 && groundY < 2.2 && Math.hypot(this.position.x, this.position.z) < 140) {
      this.arms.use();
      this.vitals.thirst = Math.min(100, this.vitals.thirst + 35);
      this.audio.playDrink();
      if (this.onNotification) this.onNotification('Drank fresh clean stream water! (+35 Thirst)');
      return;
    }
  }

  // Get Contextual Interaction Prompt for Center Crosshair
  getInteractionPrompt(buildingSystem, crashSite, foliageManager, wildlifeManager) {
    const equipped = this.inventory ? this.inventory.getEquippedItem() : null;

    if (buildingSystem && buildingSystem.activeBlueprint) {
      const snapTag = buildingSystem.isSnapped ? ` 🧲 [SNAP: ${buildingSystem.snapInfo}]` : '';
      const bpName = buildingSystem.getTypeForBlueprint(buildingSystem.activeBlueprint) || 'Piece';
      const costStr = buildingSystem.getCostString(buildingSystem.activeBlueprint);

      if (buildingSystem.ghostMesh && buildingSystem.ghostMesh.userData && buildingSystem.ghostMesh.userData.isValid) {
        return `[Left Click] Place ${bpName.toUpperCase()} (-${costStr}) | [R] Rotate 45° | [B / Right Click] Exit${snapTag}`;
      } else {
        const reason = buildingSystem.validationReason || 'Invalid Placement';
        return `❌ Cannot Place: ${reason} | [R] Rotate 45° | [B / Right Click] Exit`;
      }
    }

    // 1. Direct Ground Resource Pickups & Harvestable Flora
    const foliageHit = foliageManager.checkRaycast(this.raycaster, 4.0);
    if (foliageHit) {
      const d = foliageHit.node.userData;
      if (d.isDirectPickup && d.pickupPrompt) {
        return d.pickupPrompt;
      }
      const hpTag = d.maxHealth ? ` [HP: ${Math.max(0, Math.round(d.health))}/${d.maxHealth}]` : '';
      const isAxe = equipped && (equipped.id === 'stone_axe' || equipped.id === 'wooden_axe');
      const isPick = equipped && (equipped.id === 'stone_pickaxe');

      if (d.type === 'palm_tree' || d.type === 'jungle_tree') {
        const title = d.name || 'Tree';
        return isAxe
          ? `🪓 [Left Click] Chop ${title} with Axe (+Wood, Leaves, Coconuts)${hpTag}`
          : `✋ [Left Click] Punch ${title}${hpTag} (Equip Axe for 4x Speed)`;
      }
      if (d.type === 'rock_node') {
        const title = d.name || 'Boulder';
        return isPick
          ? `⛏️ [Left Click] Mine ${title} with Pickaxe (+Stone, Flint)${hpTag}`
          : `✋ [Left Click] Mine ${title}${hpTag} (Equip Stone Pickaxe for 5x Speed)`;
      }
      if (d.type === 'driftwood') return `[E] Gather Driftwood | [Left Click] Chop${hpTag}`;
    }

    // 2. Scavenge Airplane Debris
    const crateHit = crashSite.checkScavenge(this.raycaster, 3.5);
    if (crateHit && !crateHit.userData.searched) {
      return `[E] Scavenge Airplane Debris`;
    }

    // 3. Placed Structures
    const structHit = buildingSystem.checkInteraction(this.raycaster, 3.8);
    if (structHit) {
      const d = structHit.userData;
      if (d.isChest) return `[E] Open Storage Box`;
      if (d.type === 'door') return `[E] ${d.isOpen ? 'Close Door' : 'Open Door'}`;
      if (d.isBed) return `[E] Sleep in Shelter until Morning (06:00)`;
      if (d.isCampfire) return `[E] Cook Food at Campfire`;
      if (d.isCollector) return `[E] Drink Clean Rainwater`;
    }

    // 4. Wildlife Hunting
    const huntRange = (equipped && equipped.id === 'wooden_spear') ? 4.8 : 3.6;
    const animalHit = wildlifeManager.checkAttack(this.raycaster, huntRange);
    if (animalHit) {
      const data = animalHit.animal.userData;
      const animalName = data.name || 'Wildlife';
      const isSpear = equipped && equipped.id === 'wooden_spear';
      return `[Left Click] ${isSpear ? 'Spear' : 'Hunt'} ${animalName} (Health: ${data.health}/${data.maxHealth})`;
    }

    // 5. Drinking clean freshwater
    const groundY = this.terrain.getElevation(this.position.x, this.position.z);
    if (groundY > 0.4 && groundY < 2.2 && Math.hypot(this.position.x, this.position.z) < 140) {
      return `[E] Drink Clean Freshwater Stream`;
    }

    // 6. Consumable prompt if holding food in hand
    if (equipped) {
      const def = Object.values(ITEMS).find(i => i.id === equipped.id);
      if (def && def.consumable) {
        return `[Right Click] Consume ${def.name}`;
      }
    }

    return null;
  }
}
