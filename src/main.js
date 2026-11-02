// ISLAND SURVIVAL - Main Game Entry & Game Loop
import * as THREE from './three.js';
import { InputManager } from './core/InputManager.js';
import { CameraController } from './core/CameraController.js';
import { physicsManager } from './core/PhysicsManager.js';
import { audio } from './core/AudioManager.js';
import { SaveManager } from './core/SaveManager.js';
import { TimeWeatherManager } from './core/TimeWeatherManager.js';
import { IslandTerrain } from './world/Terrain.js';
import { Ocean } from './world/Ocean.js';
import { FoliageManager } from './world/FoliageManager.js';
import { CrashSite } from './world/CrashSite.js';
import { WorldManager } from './world/WorldManager.js';
import { WildlifeManager } from './entities/Wildlife.js';
import { Inventory } from './items/Inventory.js';
import { BuildingSystem, BUILDING_PIECES } from './building/BuildingSystem.js';
import { Player } from './entities/Player.js';
import { HUD } from './ui/HUD.js';
import { InventoryCraftingUI } from './ui/InventoryCraftingUI.js';
import { MainMenu } from './ui/MainMenu.js';
import { SettingsModal } from './ui/SettingsModal.js';
import { PauseMenu } from './ui/PauseMenu.js';
import { DeathScreen } from './ui/DeathScreen.js';
import { DebugOverlay } from './ui/DebugOverlay.js';
import { survivalStats } from './core/SurvivalStats.js';

class Game {
  constructor() {
    this.container = document.getElementById('canvas-container');

    // Game States
    this.STATE_MENU = 'MENU';
    this.STATE_PLAYING = 'PLAYING';
    this.STATE_INVENTORY = 'INVENTORY';
    this.STATE_PAUSED = 'PAUSED';
    this.STATE_DEAD = 'DEAD';
    this.state = this.STATE_MENU;

    // Menu Camera Orbit
    this.menuOrbitAngle = 0;

    // Clock
    this.clock = new THREE.Clock();

    this.initThree();
    this.initWorld();
    this.initPlayerAndSystems();
    this.initUI();
    this.bindEvents();
    this.initPhysics();

    this.animate();
  }

  initThree() {
    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1200
    );
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.setClearColor(0x90caf9, 1.0);

    this.container.appendChild(this.renderer.domElement);

    // Responsive resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  initWorld() {
    // 1. Input Manager
    this.input = new InputManager(this.renderer.domElement);

    // 2. Dynamic Atmosphere & Day/Night Cycle
    this.timeWeather = new TimeWeatherManager(this.scene, this.renderer);

    // 3. Tropical Island Terrain
    this.terrain = new IslandTerrain(this.scene, 600, 160);

    // 4. Animated Tropical Ocean
    this.ocean = new Ocean(this.scene, 1400);

    // 5. Procedural Foliage, Palm Trees, Boulders & Bushes
    this.foliage = new FoliageManager(this.scene, this.terrain);
    this.foliage.generateFoliage(360);

    // 6. Stranded Plane Crash Site
    this.crashSite = new CrashSite(this.scene, this.terrain, 50, 70);

    // 7. Tropical Wildlife Ecosystem (Deer, Rabbits, Birds, Fish, Snakes, Boars & Crabs)
    this.wildlife = new WildlifeManager(this.scene, this.terrain);
    this.wildlife.spawnAnimals({
      deer: 7,
      rabbits: 10,
      birds: 8,
      fish: 12,
      snakes: 6,
      boars: 6,
      crabs: 10
    });

    // 8. 5-Island World Architecture & Distant Horizon Placeholders
    this.worldManager = new WorldManager(
      this.scene,
      this.terrain,
      this.foliage,
      this.crashSite,
      this.wildlife
    );
  }

  initPlayerAndSystems() {
    // 1. Inventory (5 Hotbar slots, 24 Backpack slots)
    this.inventory = new Inventory(24, 5);

    // 2. Base Construction System
    this.building = new BuildingSystem(this.scene, this.terrain, this.inventory, audio);

    // 3. Camera Controller (First-Person & Third-Person with smooth switching & collision)
    this.cameraController = new CameraController(this.camera, this.scene, this.terrain);
    this.cameraController.setCollidableObjects([this.terrain.mesh]);

    // 4. Player Controller
    this.player = new Player(
      this.camera,
      this.scene,
      this.terrain,
      this.ocean,
      this.inventory,
      audio,
      this.cameraController
    );
  }

  async initPhysics() {
    await physicsManager.init();
    if (physicsManager.isReady) {
      physicsManager.createPlayer(this.player.position);
      if (this.terrain && this.terrain.mesh) {
        physicsManager.createTrimeshCollider(this.terrain.mesh.geometry, this.terrain.mesh.position);
      }
    }
  }

  initUI() {
    // 1. Survival HUD
    this.hud = new HUD();
    this.hud.updateHotbar(this.inventory);

    // 2. Inventory & Crafting Screen
    this.inventoryUI = new InventoryCraftingUI(
      this.inventory,
      this.building,
      audio
    );

    // 3. Settings Modal
    this.settingsModal = new SettingsModal(
      audio,
      this.input,
      this.camera,
      this.renderer
    );

    // 4. Pause Menu
    this.pauseMenu = new PauseMenu(
      audio,
      () => this.resumeGame(),
      () => SaveManager.saveGame(this.player, this.timeWeather, this.building),
      () => this.settingsModal.open(),
      () => this.returnToMainMenu()
    );

    // 5. Death Screen with Complete Survival Legacy Report
    this.deathScreen = new DeathScreen(
      audio,
      () => this.respawnPlayer(),
      () => this.returnToMainMenu()
    );

    // Sync tutorial updates with HUD
    survivalStats.onTutorialUpdate = (questObj) => {
      this.hud.updateTutorial(questObj);
    };
    survivalStats.onTutorialCompleted = () => {
      this.hud.addNotification('🏆 CONGRATULATIONS! You completed the Survival Guide!');
    };
    this.hud.updateTutorial(survivalStats.getCurrentTutorialObjective());

    // 6. Main Menu
    this.mainMenu = new MainMenu(
      audio,
      () => this.startNewGame(),
      () => this.continueGame(),
      () => this.settingsModal.open()
    );

    // 7. Developer & Debug Monitor Suite
    this.debugOverlay = new DebugOverlay(this);

    // Sync inventory changes with HUD & Construction Bar
    this.inventory.onInventoryChanged = () => {
      this.hud.updateHotbar(this.inventory);
      if (this.hud.isBuildMode) {
        this.hud.updateBuildBar(this.building, this.inventory);
      }
    };

    // Construction piece clicked on HUD
    this.hud.onBuildPieceSelect = (pieceId) => {
      this.building.startBuilding(pieceId);
      this.hud.updateBuildBar(this.building, this.inventory);
      audio.playUIClick();
    };

    // Exit build mode from player
    this.player.onExitBuildMode = () => {
      this.hud.setBuildMode(false, this.building, this.inventory);
    };

    // Refresh build bar upon placing structure
    this.player.onStructurePlaced = () => {
      if (this.hud.isBuildMode) {
        this.hud.updateBuildBar(this.building, this.inventory);
      }
      // Save game automatically after construction
      SaveManager.saveGame(this.player, this.timeWeather, this.building);
    };

    // Notifications
    this.player.onNotification = (msg) => {
      this.hud.addNotification(msg);
    };

    // Vitals changed
    this.player.onVitalsChanged = (vitals) => {
      this.hud.updateVitals(vitals, this.player.isUnderwater);
    };

    // Damage flash vignette
    this.player.onDamageTaken = () => {
      this.hud.triggerDamageFlash();
    };

    // Player Death
    this.player.onPlayerDeath = (reason) => {
      this.state = this.STATE_DEAD;
      this.input.exitLock();
      this.deathScreen.show(reason, this.timeWeather.dayCount);
    };

    // Open Placed Storage Box Chest
    this.player.onOpenChest = (chestStruct) => {
      this.state = this.STATE_INVENTORY;
      this.input.exitLock();
      this.inventoryUI.open(chestStruct);
    };

    // Initially hide HUD in Main Menu
    this.hud.setVisible(false);
  }

  bindEvents() {
    // Pointer Lock change listener
    this.input.onLockChange = (locked) => {
      if (!locked && this.state === this.STATE_PLAYING) {
        // If player unlocks pointer while playing, open pause menu
        this.openPauseMenu();
      }
    };

    // 'E' Key interaction
    this.input.onInteractPress = () => {
      if (this.state === this.STATE_PLAYING) {
        this.player.interact(this.building, this.crashSite, this.foliage, this.timeWeather);
      }
    };

    // 'Tab' / 'I' Inventory toggle
    this.input.onInventoryToggle = () => {
      if (this.state === this.STATE_PLAYING) {
        this.openInventory();
      } else if (this.state === this.STATE_INVENTORY) {
        this.closeInventory();
      }
    };

    this.inventoryUI.onClose = () => {
      if (this.state === this.STATE_INVENTORY) {
        this.resumeGame();
      }
    };

    // 'B' Base Construction Mode toggle
    this.input.onBuildToggle = () => {
      if (this.state === this.STATE_PLAYING) {
        if (this.hud.isBuildMode) {
          this.hud.setBuildMode(false, this.building, this.inventory);
          this.building.cancelBuilding();
          audio.playUIClick();
        } else {
          this.hud.setBuildMode(true, this.building, this.inventory);
          // Default to Wood Foundation / Floor
          this.building.startBuilding('wood_foundation');
          this.hud.updateBuildBar(this.building, this.inventory);
          audio.playUIClick();
        }
      }
    };

    // 'R' Rotate blueprint
    this.input.onRotatePress = () => {
      if (this.state === this.STATE_PLAYING && this.building.activeBlueprint) {
        this.building.rotateBlueprint();
      }
    };

    // 'C' Key camera perspective toggle (First-Person <-> Third-Person)
    this.input.onCameraToggle = () => {
      if (this.state === this.STATE_PLAYING) {
        this.cameraController.toggleMode();
      }
    };

    this.cameraController.onModeChange = (mode) => {
      this.hud.updateCameraMode(mode);
      audio.playUIClick();
      this.hud.addNotification(
        mode === 'TPS' ? '🎥 Switched to 3rd-Person Perspective' : '🎥 Switched to 1st-Person Perspective'
      );
    };

    const camBadge = document.getElementById('hud-camera-badge');
    if (camBadge) {
      camBadge.addEventListener('click', () => {
        if (this.state === this.STATE_PLAYING) {
          this.cameraController.toggleMode();
        }
      });
    }

    // Hotbar & Construction Piece selection (Keys 1-5 for hotbar, 1-7 for build mode)
    this.input.onSlotSelect = (index) => {
      if (this.state === this.STATE_PLAYING) {
        if (this.hud.isBuildMode) {
          const piece = BUILDING_PIECES[index];
          if (piece) {
            this.building.startBuilding(piece.id);
            this.hud.updateBuildBar(this.building, this.inventory);
            audio.playUIClick();
          }
        } else if (index < 5) {
          this.inventory.selectHotbarIndex(index);
          this.hud.updateHotbar(this.inventory);
          audio.playUIClick();
        }
      }
    };

    // Pause toggle
    this.input.onPauseToggle = () => {
      if (this.state === this.STATE_PLAYING) {
        this.openPauseMenu();
      } else if (this.state === this.STATE_PAUSED) {
        this.resumeGame();
      } else if (this.state === this.STATE_INVENTORY) {
        this.closeInventory();
      }
    };
  }

  startNewGame() {
    audio.resume();
    this.state = this.STATE_PLAYING;
    this.mainMenu.hide();
    this.hud.setVisible(true);

    this.camera.up.set(0, 1, 0);
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(0, -Math.PI / 2, 0, 'YXZ');

    this.player.respawn();
    this.input.requestLock();
    this.hud.addNotification('Stranded on island. Search plane debris for supplies!');
  }

  continueGame() {
    audio.resume();
    const success = SaveManager.loadGame(this.player, this.timeWeather, this.building);
    if (success) {
      this.state = this.STATE_PLAYING;
      this.mainMenu.hide();
      this.hud.setVisible(true);

      this.camera.up.set(0, 1, 0);
      this.camera.rotation.order = 'YXZ';
      this.camera.rotation.set(this.player.pitch, this.player.yaw, 0, 'YXZ');

      this.input.requestLock();
      this.hud.addNotification('Game loaded successfully. Welcome back to the island!');
    } else {
      this.startNewGame();
    }
  }

  openInventory() {
    this.state = this.STATE_INVENTORY;
    this.input.exitLock();
    this.inventoryUI.open();
  }

  closeInventory() {
    this.inventoryUI.close();
    this.resumeGame();
  }

  openPauseMenu() {
    this.state = this.STATE_PAUSED;
    this.input.exitLock();
    this.pauseMenu.open();
  }

  resumeGame() {
    this.state = this.STATE_PLAYING;
    this.pauseMenu.close();
    this.inventoryUI.close();
    this.settingsModal.close();
    this.input.requestLock();
  }

  returnToMainMenu() {
    // Auto save on exit to main menu
    SaveManager.saveGame(this.player, this.timeWeather, this.building);

    this.state = this.STATE_MENU;
    this.input.exitLock();
    this.pauseMenu.close();
    this.hud.setVisible(false);
    this.mainMenu.show();
  }

  respawnPlayer() {
    this.player.respawn();
    this.resumeGame();
    this.hud.addNotification('You woke up ashore with renewed determination.');
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);

    // 1. Main Menu Cinematic Camera Orbit
    if (this.state === this.STATE_MENU) {
      this.menuOrbitAngle += delta * 0.08;
      const camDist = 180;
      const camX = Math.cos(this.menuOrbitAngle) * camDist;
      const camZ = Math.sin(this.menuOrbitAngle) * camDist;
      const camY = 32 + Math.sin(this.menuOrbitAngle * 2) * 6;

      this.camera.position.set(camX, camY, camZ);
      this.camera.lookAt(0, 10, 0);

      // Advance ocean waves and atmosphere
      this.ocean.update(delta, this.timeWeather.sunDirection);
      this.timeWeather.update(delta * 0.5, new THREE.Vector3(0, 0, 0));
      this.building.updateCampfires(delta);
      this.crashSite.update(delta);
      this.renderer.render(this.scene, this.camera);
      return;
    }

    // 2. Active Gameplay
    if (this.state === this.STATE_PLAYING) {
      // Mouse Look
      this.player.handleMouseLook(
        this.input.mouse.dx,
        this.input.mouse.dy,
        this.input.sensitivity,
        this.input.invertY
      );

      // Mouse Wheel hotbar scroll (5 slots)
      if (this.input.mouse.wheel !== 0) {
        let newIdx = this.inventory.selectedHotbarIndex + this.input.mouse.wheel;
        if (newIdx < 0) newIdx = 4;
        if (newIdx > 4) newIdx = 0;
        this.inventory.selectHotbarIndex(newIdx);
        this.hud.updateHotbar(this.inventory);
        audio.playUIClick();
      }

      // Update Player
      this.player.update(
        delta,
        this.input,
        this.foliage,
        this.wildlife,
        this.building,
        this.crashSite,
        this.timeWeather
      );

      // Update Building Hologram
      this.building.update(this.camera, this.player.position);

      // Contextual HUD Prompt
      const promptText = this.player.getInteractionPrompt(
        this.building,
        this.crashSite,
        this.foliage,
        this.wildlife
      );
      this.hud.showInteractionPrompt(promptText);
    }

    // Update Wildlife
    this.wildlife.update(delta, this.player.position, (dmg, reason) => {
      this.player.takeDamage(dmg, reason);
    });

    // Step Rapier 3D Physics Simulation
    physicsManager.step(delta);

    // Update Archipelago Horizons & World Manager
    if (this.worldManager) {
      this.worldManager.update(delta, this.player.position);
    }

    // Update Ocean & Day/Night Atmosphere
    this.ocean.update(delta, this.timeWeather.sunDirection);
    this.timeWeather.update(delta, this.player.position);
    this.foliage.update(delta);
    this.crashSite.update(delta);
    this.building.updateCampfires(delta);

    // Update HUD Clock, Compass & Dynamic Weather Badge
    if (this.state === this.STATE_PLAYING || this.state === this.STATE_INVENTORY) {
      this.hud.updateTimeAndCompass(
        this.timeWeather.getFormattedTime(),
        this.timeWeather.dayCount,
        this.timeWeather.isNight(),
        this.player.yaw,
        this.timeWeather.weather
      );
    }

    // Reset frame deltas
    this.input.resetDeltas();

    // Update Developer Debug Monitor
    if (this.debugOverlay) {
      this.debugOverlay.update(delta);
    }

    // Render Scene
    this.renderer.render(this.scene, this.camera);
  }
}

// Boot application
window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
