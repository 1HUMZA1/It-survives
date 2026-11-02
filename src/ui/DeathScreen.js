// Player Death & Game Over Screen with complete survival statistics & respawn options
import { survivalStats } from '../core/SurvivalStats.js';

export class DeathScreen {
  constructor(audio, onRespawn, onMainMenu, container = document.body) {
    this.audio = audio;
    this.onRespawn = onRespawn;
    this.onMainMenu = onMainMenu;
    this.container = container;

    this.element = null;
    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.id = 'death-screen-modal';
    this.element.className = 'modal-backdrop death-backdrop hidden';
    this.element.innerHTML = `
      <div class="death-window">
        <div class="skull-badge">💀</div>
        <h1 class="death-title">YOU PERISHED ON THE ISLAND</h1>
        <p id="death-reason" class="death-reason">Succumbed to the elements</p>

        <!-- Survivor Honor Title Badge -->
        <div id="death-rank-badge" class="death-rank-badge">🌴 Resourceful Castaway</div>

        <!-- Full Survival Statistics Grid -->
        <div class="death-stats-grid">
          <div class="stat-box">
            <span class="stat-num" id="stat-days-survived">1</span>
            <span class="stat-lbl">DAYS LIVED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-distance-walked">0m</span>
            <span class="stat-lbl">DISTANCE EXPLORED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-harvested">0</span>
            <span class="stat-lbl">RESOURCES GATHERED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-hunted">0</span>
            <span class="stat-lbl">WILDLIFE HUNTED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-crafted">0</span>
            <span class="stat-lbl">ITEMS CRAFTED</span>
          </div>
          <div class="stat-box">
            <span class="stat-num" id="stat-structures">0</span>
            <span class="stat-lbl">STRUCTURES BUILT</span>
          </div>
        </div>

        <div class="death-actions">
          <button id="btn-respawn" class="btn-menu primary">
            <span class="btn-icon">⚡</span>
            <div class="btn-content">
              <span class="btn-title">RESPAWN ON SHORE</span>
              <span class="btn-desc">Wake up at plane crash site</span>
            </div>
          </button>

          <button id="btn-death-menu" class="btn-menu secondary">
            <span class="btn-icon">🏠</span>
            <div class="btn-content">
              <span class="btn-title">MAIN MENU</span>
              <span class="btn-desc">Return to title screen</span>
            </div>
          </button>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);

    this.element.querySelector('#btn-respawn').addEventListener('click', () => {
      this.audio.playUIClick();
      this.hide();
      if (this.onRespawn) this.onRespawn();
    });

    this.element.querySelector('#btn-death-menu').addEventListener('click', () => {
      this.audio.playUIClick();
      this.hide();
      if (this.onMainMenu) this.onMainMenu();
    });
  }

  show(reason, daysSurvived) {
    const reasonEl = this.element.querySelector('#death-reason');
    const rankEl = this.element.querySelector('#death-rank-badge');

    if (reasonEl) reasonEl.textContent = reason || 'The harsh island elements overtook you';

    const s = survivalStats.stats;
    s.daysSurvived = Math.max(s.daysSurvived, daysSurvived || 1);

    if (rankEl) rankEl.textContent = survivalStats.getRankTitle();

    const setVal = (id, val) => {
      const el = this.element.querySelector(`#${id}`);
      if (el) el.textContent = val;
    };

    setVal('stat-days-survived', s.daysSurvived);
    setVal('stat-distance-walked', `${s.distanceWalked}m`);
    setVal('stat-harvested', s.resourcesHarvested);
    setVal('stat-hunted', s.animalsHunted);
    setVal('stat-crafted', s.itemsCrafted);
    setVal('stat-structures', s.structuresBuilt);

    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}
