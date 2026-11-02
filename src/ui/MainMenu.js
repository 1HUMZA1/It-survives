// Cinematic 3D Main Menu with New Game, Continue, Settings, Guide, and Exit
import { SaveManager } from '../core/SaveManager.js';

export class MainMenu {
  constructor(audio, onNewGame, onContinue, onOpenSettings, container = document.body) {
    this.audio = audio;
    this.onNewGame = onNewGame;
    this.onContinue = onContinue;
    this.onOpenSettings = onOpenSettings;
    this.container = container;

    this.element = null;
    this.isVisible = true;

    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.id = 'main-menu-screen';
    this.element.className = 'main-menu-container';

    const hasSave = SaveManager.hasSave();

    this.element.innerHTML = `
      <div class="menu-overlay">
        <!-- Brand Title & Lore -->
        <div class="menu-header">
          <div class="game-badge">🌴 3D PACIFIC SURVIVAL SIMULATION</div>
          <h1 class="game-title">ISLAND SURVIVAL</h1>
          <p class="game-subtitle">Stranded on an uncharted tropical atoll after a plane crash. Hunt, gather, craft, build shelters, and endure.</p>
        </div>

        <!-- Main Action Buttons -->
        <div class="menu-buttons">
          <button id="btn-new-game" class="btn-menu primary">
            <span class="btn-icon">⚡</span>
            <div class="btn-content">
              <span class="btn-title">NEW GAME</span>
              <span class="btn-desc">Awaken at the beach plane wreckage</span>
            </div>
          </button>

          <button id="btn-continue" class="btn-menu secondary ${hasSave ? '' : 'disabled'}" ${hasSave ? '' : 'title="No save game found"'}>
            <span class="btn-icon">💾</span>
            <div class="btn-content">
              <span class="btn-title">CONTINUE</span>
              <span class="btn-desc">${hasSave ? 'Resume your island journey' : 'No saved game found'}</span>
            </div>
          </button>

          <button id="btn-settings" class="btn-menu">
            <span class="btn-icon">⚙️</span>
            <div class="btn-content">
              <span class="btn-title">SETTINGS</span>
              <span class="btn-desc">Graphics, Audio & Controls</span>
            </div>
          </button>

          <button id="btn-guide" class="btn-menu">
            <span class="btn-icon">📖</span>
            <div class="btn-content">
              <span class="btn-title">CONTROLS & GUIDE</span>
              <span class="btn-desc">Keybindings & survival tips</span>
            </div>
          </button>

          <button id="btn-exit" class="btn-menu danger">
            <span class="btn-icon">🚪</span>
            <div class="btn-content">
              <span class="btn-title">EXIT GAME</span>
              <span class="btn-desc">Quit survival simulation</span>
            </div>
          </button>
        </div>

        <!-- Version & Credits -->
        <div class="menu-footer">
          <span>Three.js • First-Person 3D WebGL • Island Survival v1.0</span>
        </div>
      </div>

      <!-- Controls Guide Modal -->
      <div id="guide-modal" class="modal-backdrop hidden">
        <div class="guide-window">
          <div class="window-header">
            <h2>📖 SURVIVAL CONTROLS & SURVIVOR'S GUIDE</h2>
            <button id="guide-close-btn" class="close-x-btn">✖</button>
          </div>
          <div class="guide-body">
            <div class="guide-grid">
              <div class="guide-card">
                <h4>🎮 KEYBOARD & MOUSE CONTROLS</h4>
                <ul>
                  <li><kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> - Walk / Strafe</li>
                  <li><kbd>Shift</kbd> - Sprint (consumes stamina)</li>
                  <li><kbd>Space</kbd> - Jump / Swim to surface</li>
                  <li><kbd>Mouse Look</kbd> - Rotate first-person camera</li>
                  <li><kbd>Left Click</kbd> - Swing tool / Mine / Chop / Attack</li>
                  <li><kbd>Right Click</kbd> - Eat / Drink in hand | Cancel build</li>
                  <li><kbd>E</kbd> - Contextual interact (Scavenge, Cook, Sleep, Drink)</li>
                  <li><kbd>Tab</kbd> / <kbd>I</kbd> - Open Backpack & Crafting</li>
                  <li><kbd>1</kbd> - <kbd>5</kbd> - Select Hotbar Item</li>
                  <li><kbd>C</kbd> - Switch Camera Perspective (FPS / TPS)</li>
                  <li><kbd>B</kbd> - Open Construction Blueprint</li>
                  <li><kbd>R</kbd> - Rotate building hologram</li>
                  <li><kbd>Esc</kbd> - Pause Menu</li>
                </ul>
              </div>

              <div class="guide-card">
                <h4>🥥 SURVIVAL BASICS</h4>
                <p><strong>1. Hydration & Hunger:</strong> Drink from coconuts, freshwater inland streams, or build a Rainwater Basin. Thirst depletes quickly under the midday sun.</p>
                <p><strong>2. Tool Progression:</strong> Start by punching or scavenging plane debris. Craft a Stone Hatchet to chop palms and a Pickaxe to mine boulders for flint.</p>
                <p><strong>3. Wildlife:</strong> Crabs on the beach yield raw crab meat. Boars in the jungle provide leather and steak. Always cook meat over a Campfire to avoid sickness!</p>
                <p><strong>4. Nightfall:</strong> Nights are dark and cold. Craft a Survival Torch for light and a Palm Leaf Shelter to sleep through the night until 06:00 dawn.</p>
              </div>
            </div>
            <button id="guide-ok-btn" class="btn-menu primary" style="margin-top: 18px; width: 100%;">Understood, Let's Survive!</button>
          </div>
        </div>
      </div>

      <!-- Exit Confirmation Modal -->
      <div id="exit-modal" class="modal-backdrop hidden">
        <div class="exit-window">
          <h3>Are you sure you want to exit?</h3>
          <p>Your current island survival progress will be safely saved in your browser.</p>
          <div class="exit-actions">
            <button id="btn-exit-confirm" class="btn-menu danger">Confirm Exit</button>
            <button id="btn-exit-cancel" class="btn-menu secondary">Stay on Island</button>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
  }

  bindEvents() {
    // New Game
    this.element.querySelector('#btn-new-game').addEventListener('click', () => {
      this.audio.playUIClick();
      this.hide();
      if (this.onNewGame) this.onNewGame();
    });

    // Continue
    const continueBtn = this.element.querySelector('#btn-continue');
    continueBtn.addEventListener('click', () => {
      if (SaveManager.hasSave()) {
        this.audio.playUIClick();
        this.hide();
        if (this.onContinue) this.onContinue();
      } else {
        alert('No existing save found. Please click "NEW GAME" to begin your journey!');
      }
    });

    // Settings
    this.element.querySelector('#btn-settings').addEventListener('click', () => {
      this.audio.playUIClick();
      if (this.onOpenSettings) this.onOpenSettings();
    });

    // Guide Modal
    const guideModal = this.element.querySelector('#guide-modal');
    this.element.querySelector('#btn-guide').addEventListener('click', () => {
      this.audio.playUIClick();
      guideModal.classList.remove('hidden');
    });

    const closeGuide = () => {
      this.audio.playUIClick();
      guideModal.classList.add('hidden');
    };
    this.element.querySelector('#guide-close-btn').addEventListener('click', closeGuide);
    this.element.querySelector('#guide-ok-btn').addEventListener('click', closeGuide);

    // Exit Modal
    const exitModal = this.element.querySelector('#exit-modal');
    this.element.querySelector('#btn-exit').addEventListener('click', () => {
      this.audio.playUIClick();
      exitModal.classList.remove('hidden');
    });

    this.element.querySelector('#btn-exit-cancel').addEventListener('click', () => {
      this.audio.playUIClick();
      exitModal.classList.add('hidden');
    });

    this.element.querySelector('#btn-exit-confirm').addEventListener('click', () => {
      // Graceful browser exit
      try {
        window.close();
      } catch (e) {}
      document.body.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#0d1b2a;color:#fff;font-family:sans-serif;text-align:center;">
          <h1 style="font-size:32px;margin-bottom:12px;">🌴 You have left the island.</h1>
          <p style="color:#90e0ef;font-size:18px;">Thank you for playing ISLAND SURVIVAL.</p>
          <button onclick="location.reload()" style="margin-top:20px;padding:12px 28px;background:#00b4d8;color:#000;border:none;border-radius:6px;font-size:16px;cursor:pointer;font-weight:bold;">Restart Game</button>
        </div>
      `;
    });
  }

  show() {
    this.isVisible = true;
    this.element.classList.remove('hidden');

    // Update Continue button availability
    const continueBtn = this.element.querySelector('#btn-continue');
    const hasSave = SaveManager.hasSave();
    if (hasSave) {
      continueBtn.classList.remove('disabled');
      continueBtn.querySelector('.btn-desc').textContent = 'Resume your island journey';
    } else {
      continueBtn.classList.add('disabled');
      continueBtn.querySelector('.btn-desc').textContent = 'No saved game found';
    }
  }

  hide() {
    this.isVisible = false;
    this.element.classList.add('hidden');
  }
}
