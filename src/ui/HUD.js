// Enhanced Survival HUD: Glowing Health, Hunger, Thirst, Stamina Bars with Warning Pulses & Feedback
import { ITEMS } from '../items/ItemDefinitions.js';
import { BUILDING_PIECES } from '../building/BuildingSystem.js';

export class HUD {
  constructor(container = document.body) {
    this.container = container;
    this.element = null;
    this.notificationsContainer = null;
    this.promptEl = null;
    this.damageVignetteEl = null;
    this.floatingFeedbacksContainer = null;
    this.isBuildMode = false;
    this.onBuildPieceSelect = null;

    this.prevVitals = { health: 100, hunger: 100, thirst: 100, stamina: 100 };

    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.id = 'game-hud';
    this.element.className = 'hud-container';
    this.element.innerHTML = `
      <!-- Fullscreen Damage & Danger Vignette -->
      <div id="damage-vignette" class="damage-vignette"></div>

      <!-- Top Left: Time, Day, Compass, Weather & Survival Tutorial -->
      <div class="hud-top-left">
        <div class="hud-panel time-panel">
          <div class="time-header">
            <span id="hud-celestial-icon">☀️</span>
            <span id="hud-day-text">Day 1</span>
            <span id="hud-clock-text">09:00</span>
            <span id="hud-weather-badge" class="weather-badge">CLEAR</span>
          </div>
          <div class="compass-bar">
            <span id="hud-compass-text">N</span>
          </div>
        </div>

        <!-- Interactive Survival Tutorial Guide -->
        <div id="hud-tutorial-panel" class="hud-panel tutorial-panel">
          <div class="tutorial-header">
            <span class="tutorial-badge">SURVIVAL GUIDE</span>
            <span id="tutorial-step-tag" class="tutorial-step-tag">Step 1/6</span>
          </div>
          <div id="tutorial-title" class="tutorial-title">🧳 Scavenge the Crash Site</div>
          <div id="tutorial-desc" class="tutorial-desc">Search plane debris or pick up coconuts & stones. (0/3)</div>
        </div>
      </div>

      <!-- Top Right: Notification Feed -->
      <div class="hud-top-right">
        <div id="hud-notifications" class="notifications-feed"></div>
      </div>

      <!-- Center: Crosshair & Interaction Prompt -->
      <div class="hud-center">
        <div class="crosshair-dot"></div>
        <div id="hud-prompt" class="interaction-prompt hidden"></div>
      </div>

      <!-- Bottom Left: Survival Vitals (Health, Hunger, Thirst, Stamina) -->
      <div class="hud-bottom-left">
        <!-- Floating Stat Gains (+Hunger, +Thirst, +HP) -->
        <div id="hud-stat-feedbacks" class="stat-feedbacks-stack"></div>

        <div class="hud-panel vitals-panel">
          <div class="vitals-header">
            <span>SURVIVAL VITALS</span>
            <span id="vitals-status-badge" class="vitals-badge">STABLE</span>
          </div>

          <!-- 1. HEALTH -->
          <div class="vital-row" id="row-health">
            <span class="vital-icon">❤️</span>
            <div class="vital-meta">
              <span class="vital-name">HEALTH</span>
              <span id="badge-health" class="vital-warning-badge hidden">CRITICAL</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-health" class="vital-bar-fill vital-health" style="width: 100%"></div>
            </div>
            <span id="val-health" class="vital-val">100</span>
          </div>

          <!-- 2. HUNGER -->
          <div class="vital-row" id="row-hunger">
            <span class="vital-icon">🍖</span>
            <div class="vital-meta">
              <span class="vital-name">HUNGER</span>
              <span id="badge-hunger" class="vital-warning-badge hidden">STARVING</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-hunger" class="vital-bar-fill vital-hunger" style="width: 90%"></div>
            </div>
            <span id="val-hunger" class="vital-val">90</span>
          </div>

          <!-- 3. THIRST -->
          <div class="vital-row" id="row-thirst">
            <span class="vital-icon">💧</span>
            <div class="vital-meta">
              <span class="vital-name">THIRST</span>
              <span id="badge-thirst" class="vital-warning-badge hidden">DEHYDRATED</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-thirst" class="vital-bar-fill vital-thirst" style="width: 85%"></div>
            </div>
            <span id="val-thirst" class="vital-val">85</span>
          </div>

          <!-- 4. STAMINA -->
          <div class="vital-row" id="row-stamina">
            <span class="vital-icon">⚡</span>
            <div class="vital-meta">
              <span class="vital-name">STAMINA</span>
              <span id="badge-stamina" class="vital-warning-badge hidden">EXHAUSTED</span>
            </div>
            <div class="vital-bar-track">
              <div id="bar-stamina" class="vital-bar-fill vital-stamina" style="width: 100%"></div>
            </div>
            <span id="val-stamina" class="vital-val">100</span>
          </div>

          <!-- Oxygen (Shown underwater) -->
          <div id="row-oxygen" class="vital-row hidden">
            <span class="vital-icon">🫧</span>
            <div class="vital-meta"><span class="vital-name">OXYGEN</span></div>
            <div class="vital-bar-track">
              <div id="bar-oxygen" class="vital-bar-fill vital-oxygen" style="width: 100%"></div>
            </div>
            <span id="val-oxygen" class="vital-val">100</span>
          </div>
        </div>
      </div>

      <!-- Bottom Center: Hotbar & Base Construction Quick-Bar -->
      <div class="hud-bottom-center">
        <!-- Building Mode Quick-Bar Overlay (Shown in [B] Base Construction Mode) -->
        <div id="hud-build-bar" class="build-mode-container hidden">
          <div class="build-mode-header">
            <span class="build-mode-title">🔨 BASE CONSTRUCTION MODE</span>
            <span class="build-mode-sub">Press <kbd>1-7</kbd> to Select Piece • <kbd>R</kbd> Rotate • <kbd>B</kbd> Exit</span>
          </div>
          <div id="build-piece-slots" class="build-piece-slots"></div>
        </div>

        <div id="hud-equipped-name" class="equipped-name-badge">Hands</div>
        <div id="hud-hotbar" class="hotbar-slots"></div>
        <div class="hotbar-hint">[1-6] Select | [Tab/I] Inventory & Craft | [B] Build | [R] Rotate</div>
      </div>
    `;

    this.container.appendChild(this.element);

    this.notificationsContainer = this.element.querySelector('#hud-notifications');
    this.promptEl = this.element.querySelector('#hud-prompt');
    this.damageVignetteEl = this.element.querySelector('#damage-vignette');
    this.floatingFeedbacksContainer = this.element.querySelector('#hud-stat-feedbacks');

    this.renderHotbarSlots();
  }

  renderHotbarSlots() {
    const hotbarEl = this.element.querySelector('#hud-hotbar');
    hotbarEl.innerHTML = '';

    for (let i = 0; i < 6; i++) {
      const slot = document.createElement('div');
      slot.className = `hotbar-slot ${i === 0 ? 'active' : ''}`;
      slot.setAttribute('data-index', i);
      if (slot.dataset) slot.dataset.index = i;
      slot.innerHTML = `
        <span class="slot-key">${i + 1}</span>
        <div class="slot-icon"></div>
        <span class="slot-count"></span>
      `;
      hotbarEl.appendChild(slot);
    }
  }

  updateVitals(vitals, isUnderwater) {
    const setBar = (name, val) => {
      const bar = this.element.querySelector(`#bar-${name}`);
      const txt = this.element.querySelector(`#val-${name}`);
      const pct = Math.max(0, Math.min(100, Math.round(val)));
      if (bar) bar.style.width = `${pct}%`;
      if (txt) txt.textContent = pct;
      return pct;
    };

    const hp = setBar('health', vitals.health);
    const hunger = setBar('hunger', vitals.hunger);
    const thirst = setBar('thirst', vitals.thirst);
    const stamina = setBar('stamina', vitals.stamina);
    setBar('oxygen', vitals.oxygen);

    // Warning Pulses & Badges
    const badgeHealth = this.element.querySelector('#badge-health');
    const badgeHunger = this.element.querySelector('#badge-hunger');
    const badgeThirst = this.element.querySelector('#badge-thirst');
    const badgeStamina = this.element.querySelector('#badge-stamina');
    const statusBadge = this.element.querySelector('#vitals-status-badge');

    // Health warning (< 25)
    if (hp <= 25) {
      badgeHealth.classList.remove('hidden');
      this.element.querySelector('#bar-health').classList.add('pulse-danger');
    } else {
      badgeHealth.classList.add('hidden');
      this.element.querySelector('#bar-health').classList.remove('pulse-danger');
    }

    // Hunger warning (< 20)
    if (hunger <= 20) {
      badgeHunger.classList.remove('hidden');
      this.element.querySelector('#bar-hunger').classList.add('pulse-warning');
    } else {
      badgeHunger.classList.add('hidden');
      this.element.querySelector('#bar-hunger').classList.remove('pulse-warning');
    }

    // Thirst warning (< 20)
    if (thirst <= 20) {
      badgeThirst.classList.remove('hidden');
      this.element.querySelector('#bar-thirst').classList.add('pulse-warning');
    } else {
      badgeThirst.classList.add('hidden');
      this.element.querySelector('#bar-thirst').classList.remove('pulse-warning');
    }

    // Stamina exhausted (< 10)
    if (stamina <= 10) {
      badgeStamina.classList.remove('hidden');
      this.element.querySelector('#bar-stamina').classList.add('pulse-exhausted');
    } else {
      badgeStamina.classList.add('hidden');
      this.element.querySelector('#bar-stamina').classList.remove('pulse-exhausted');
    }

    // Overall Status Tag
    if (hp <= 20 || hunger <= 0 || thirst <= 0) {
      statusBadge.textContent = 'DYING';
      statusBadge.className = 'vitals-badge danger';
    } else if (hunger <= 20 || thirst <= 20) {
      statusBadge.textContent = 'DANGER';
      statusBadge.className = 'vitals-badge warning';
    } else if (hunger >= 75 && thirst >= 75) {
      statusBadge.textContent = 'NOURISHED (+HP)';
      statusBadge.className = 'vitals-badge nourished';
    } else {
      statusBadge.textContent = 'STABLE';
      statusBadge.className = 'vitals-badge stable';
    }

    // Floating stat popups when player eats/drinks/heals
    if (vitals.hunger > this.prevVitals.hunger + 4) {
      this.showFloatingStat(`+${Math.round(vitals.hunger - this.prevVitals.hunger)} Hunger`, '#ff9800');
    }
    if (vitals.thirst > this.prevVitals.thirst + 4) {
      this.showFloatingStat(`+${Math.round(vitals.thirst - this.prevVitals.thirst)} Thirst`, '#00bcd4');
    }
    if (vitals.health > this.prevVitals.health + 4) {
      this.showFloatingStat(`+${Math.round(vitals.health - this.prevVitals.health)} Health`, '#4caf50');
    }

    this.prevVitals = { ...vitals };

    // Underwater oxygen row
    const oxyRow = this.element.querySelector('#row-oxygen');
    if (oxyRow) {
      if (isUnderwater || vitals.oxygen < 98) {
        oxyRow.classList.remove('hidden');
      } else {
        oxyRow.classList.add('hidden');
      }
    }
  }

  showFloatingStat(text, color) {
    if (!this.floatingFeedbacksContainer) return;
    const item = document.createElement('div');
    item.className = 'floating-stat-gain';
    item.textContent = text;
    item.style.color = color;
    item.style.borderColor = color;

    this.floatingFeedbacksContainer.appendChild(item);

    setTimeout(() => {
      item.classList.add('fade-up');
      setTimeout(() => {
        if (item.parentNode) item.parentNode.removeChild(item);
      }, 500);
    }, 1200);
  }

  triggerDamageFlash() {
    if (!this.damageVignetteEl) return;
    this.damageVignetteEl.classList.add('flash');
    setTimeout(() => {
      if (this.damageVignetteEl) this.damageVignetteEl.classList.remove('flash');
    }, 280);
  }

  updateTimeAndCompass(timeFormatted, dayCount, isNight, yaw, weather = 'clear') {
    const clockEl = this.element.querySelector('#hud-clock-text');
    const dayEl = this.element.querySelector('#hud-day-text');
    const iconEl = this.element.querySelector('#hud-celestial-icon');
    const compassEl = this.element.querySelector('#hud-compass-text');
    const weatherEl = this.element.querySelector('#hud-weather-badge');

    if (clockEl) clockEl.textContent = timeFormatted;
    if (dayEl) dayEl.textContent = `Day ${dayCount}`;
    if (iconEl) iconEl.textContent = isNight ? '🌙' : '☀️';

    if (weatherEl) {
      if (weather === 'storm') {
        weatherEl.textContent = 'STORM ⛈️';
        weatherEl.className = 'weather-badge storm';
      } else if (weather === 'rain') {
        weatherEl.textContent = 'RAIN 🌧️';
        weatherEl.className = 'weather-badge rain';
      } else if (weather === 'cloudy') {
        weatherEl.textContent = 'OVERCAST ☁️';
        weatherEl.className = 'weather-badge cloudy';
      } else {
        weatherEl.textContent = 'SUNNY ☀️';
        weatherEl.className = 'weather-badge sunny';
      }
    }

    if (compassEl) {
      let deg = (yaw * (180 / Math.PI)) % 360;
      if (deg < 0) deg += 360;

      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      const index = Math.round(deg / 45) % 8;
      compassEl.textContent = `${directions[index]} (${Math.round(deg)}°)`;
    }
  }

  updateTutorial(obj) {
    const titleEl = this.element.querySelector('#tutorial-title');
    const descEl = this.element.querySelector('#tutorial-desc');
    const stepEl = this.element.querySelector('#tutorial-step-tag');
    const panelEl = this.element.querySelector('#hud-tutorial-panel');

    if (!obj || !titleEl || !descEl) return;

    titleEl.textContent = obj.title;
    descEl.textContent = obj.desc;

    if (stepEl) {
      stepEl.textContent = obj.completed ? 'COMPLETED ✔' : `Step ${obj.stepIndex}/${obj.totalSteps}`;
    }

    if (obj.completed && panelEl) {
      panelEl.classList.add('completed');
    }
  }

  updateHotbar(inventory) {
    const slots = inventory.slots.slice(0, 6);
    const activeIdx = inventory.selectedHotbarIndex;

    const hotbarEl = this.element.querySelector('#hud-hotbar');
    const children = hotbarEl.children;

    for (let i = 0; i < 6; i++) {
      const slotEl = children[i];
      const item = slots[i];
      const iconEl = slotEl.querySelector('.slot-icon');
      const countEl = slotEl.querySelector('.slot-count');

      if (i === activeIdx) {
        slotEl.classList.add('active');
      } else {
        slotEl.classList.remove('active');
      }

      if (item) {
        const def = Object.values(ITEMS).find(d => d.id === item.id);
        iconEl.textContent = def ? def.icon : '📦';
        countEl.textContent = item.count > 1 ? item.count : '';
      } else {
        iconEl.textContent = '';
        countEl.textContent = '';
      }
    }

    const equipped = inventory.getEquippedItem();
    const equippedNameEl = this.element.querySelector('#hud-equipped-name');
    if (equipped) {
      const def = Object.values(ITEMS).find(d => d.id === equipped.id);
      equippedNameEl.textContent = def ? def.name : 'Unknown Item';
    } else {
      equippedNameEl.textContent = 'Bare Hands';
    }
  }

  showInteractionPrompt(text) {
    if (!this.promptEl) return;
    if (text) {
      this.promptEl.textContent = text;
      this.promptEl.classList.remove('hidden');
    } else {
      this.promptEl.classList.add('hidden');
    }
  }

  addNotification(message) {
    if (!this.notificationsContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    this.notificationsContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 2800);
  }

  setBuildMode(active, buildingSystem, inventory) {
    this.isBuildMode = Boolean(active);
    const buildBarEl = this.element.querySelector('#hud-build-bar');
    if (buildBarEl) {
      buildBarEl.classList.toggle('hidden', !this.isBuildMode);
    }
    if (this.isBuildMode) {
      this.updateBuildBar(buildingSystem, inventory);
    }
  }

  updateBuildBar(buildingSystem, inventory) {
    const slotsContainer = this.element.querySelector('#build-piece-slots');
    if (!slotsContainer || !buildingSystem) return;
    slotsContainer.innerHTML = '';

    BUILDING_PIECES.forEach((piece, index) => {
      const canAfford = buildingSystem.canAfford(piece.id);
      const isSelected = (buildingSystem.activeBlueprint === piece.id);

      const slot = document.createElement('div');
      slot.className = `build-slot ${isSelected ? 'active' : ''} ${canAfford ? 'affordable' : 'unaffordable'}`;
      slot.title = `${piece.fullName} (Cost: ${piece.costLabel})`;
      slot.innerHTML = `
        <span class="build-slot-key">${index + 1}</span>
        <span class="build-slot-icon">${piece.icon}</span>
        <span class="build-slot-name">${piece.name}</span>
        <span class="build-slot-cost">${piece.costLabel} ${canAfford ? '✔' : '✖'}</span>
      `;

      slot.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.onBuildPieceSelect) {
          this.onBuildPieceSelect(piece.id);
        } else {
          buildingSystem.startBuilding(piece.id);
          this.updateBuildBar(buildingSystem, inventory);
        }
      });

      slotsContainer.appendChild(slot);
    });
  }

  setVisible(visible) {
    if (this.element) {
      this.element.style.display = visible ? 'block' : 'none';
    }
  }
}
