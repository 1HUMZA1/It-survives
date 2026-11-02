// In-game Pause Menu with Live Survival Statistics
import { survivalStats } from '../core/SurvivalStats.js';

export class PauseMenu {
  constructor(audio, onResume, onSave, onSettings, onMainMenu, container = document.body) {
    this.audio = audio;
    this.onResume = onResume;
    this.onSave = onSave;
    this.onSettings = onSettings;
    this.onMainMenu = onMainMenu;
    this.container = container;

    this.isOpen = false;
    this.element = null;

    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.id = 'pause-menu-modal';
    this.element.className = 'modal-backdrop hidden';
    this.element.innerHTML = `
      <div class="pause-window">
        <h2>⏸️ GAME PAUSED</h2>

        <!-- Survivor Honor Title Badge -->
        <div id="pause-rank-badge" class="pause-rank-badge">🌴 Resourceful Castaway</div>

        <!-- Live Survival Statistics Box -->
        <div class="pause-stats-summary">
          <div class="pause-stat-item">
            <span class="p-lbl">Days Lived:</span>
            <span id="p-stat-days" class="p-val">1</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Traveled:</span>
            <span id="p-stat-dist" class="p-val">0m</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Harvested:</span>
            <span id="p-stat-harvest" class="p-val">0</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Hunted:</span>
            <span id="p-stat-hunt" class="p-val">0</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Crafted:</span>
            <span id="p-stat-craft" class="p-val">0</span>
          </div>
          <div class="pause-stat-item">
            <span class="p-lbl">Structures:</span>
            <span id="p-stat-build" class="p-val">0</span>
          </div>
        </div>

        <div class="pause-buttons">
          <button id="btn-pause-resume" class="btn-menu primary">
            <span class="btn-icon">▶️</span>
            <div class="btn-content">
              <span class="btn-title">RESUME</span>
              <span class="btn-desc">Return to survival</span>
            </div>
          </button>

          <button id="btn-pause-save" class="btn-menu secondary">
            <span class="btn-icon">💾</span>
            <div class="btn-content">
              <span class="btn-title">SAVE GAME</span>
              <span class="btn-desc">Persist progress to browser</span>
            </div>
          </button>

          <button id="btn-pause-settings" class="btn-menu">
            <span class="btn-icon">⚙️</span>
            <div class="btn-content">
              <span class="btn-title">SETTINGS</span>
              <span class="btn-desc">Audio, controls & visuals</span>
            </div>
          </button>

          <button id="btn-pause-main-menu" class="btn-menu danger">
            <span class="btn-icon">🏠</span>
            <div class="btn-content">
              <span class="btn-title">MAIN MENU</span>
              <span class="btn-desc">Save and return to title</span>
            </div>
          </button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
  }

  bindEvents() {
    this.element.querySelector('#btn-pause-resume').addEventListener('click', () => {
      this.close();
      if (this.onResume) this.onResume();
    });

    this.element.querySelector('#btn-pause-save').addEventListener('click', () => {
      this.audio.playCraft();
      if (this.onSave) {
        this.onSave();
        const desc = this.element.querySelector('#btn-pause-save .btn-desc');
        desc.textContent = 'Saved Successfully!';
        setTimeout(() => {
          desc.textContent = 'Persist progress to browser';
        }, 2000);
      }
    });

    this.element.querySelector('#btn-pause-settings').addEventListener('click', () => {
      this.audio.playUIClick();
      if (this.onSettings) this.onSettings();
    });

    this.element.querySelector('#btn-pause-main-menu').addEventListener('click', () => {
      this.audio.playUIClick();
      this.close();
      if (this.onMainMenu) this.onMainMenu();
    });
  }

  open() {
    this.isOpen = true;

    // Refresh live stats
    const s = survivalStats.stats;
    const rankEl = this.element.querySelector('#pause-rank-badge');
    if (rankEl) rankEl.textContent = survivalStats.getRankTitle();

    const setVal = (id, val) => {
      const el = this.element.querySelector(`#${id}`);
      if (el) el.textContent = val;
    };
    setVal('p-stat-days', s.daysSurvived);
    setVal('p-stat-dist', `${s.distanceWalked}m`);
    setVal('p-stat-harvest', s.resourcesHarvested);
    setVal('p-stat-hunt', s.animalsHunted);
    setVal('p-stat-craft', s.itemsCrafted);
    setVal('p-stat-build', s.structuresBuilt);

    this.element.classList.remove('hidden');
    this.audio.playUIClick();
  }

  close() {
    this.isOpen = false;
    this.element.classList.add('hidden');
  }
}
