// In-Game Debug Monitor & Developer Tool Suite for Island Survival
import { ITEMS } from '../items/ItemDefinitions.js';

export class DebugOverlay {
  constructor(game, container = document.body) {
    this.game = game;
    this.container = container;
    this.visible = window.location.search.includes('debug=true');

    this.fps = 60;
    this.frameCount = 0;
    this.lastFpsUpdate = performance.now();

    this.element = null;
    this.init();
    this.bindHotkeys();
  }

  init() {
    this.element = document.createElement('div');
    this.element.id = 'debug-overlay';
    this.element.className = 'debug-overlay' + (this.visible ? '' : ' hidden');
    this.element.innerHTML = `
      <div class="debug-panel">
        <div class="debug-header">
          <span class="debug-title">🛠️ ISLAND SURVIVAL DEBUG v1.2</span>
          <span id="dbg-fps" class="debug-badge fps-badge">60 FPS</span>
        </div>
        <div class="debug-section">
          <div class="debug-row"><span>POS:</span> <span id="dbg-pos" class="dbg-val">0, 0, 0</span></div>
          <div class="debug-row"><span>YAW:</span> <span id="dbg-yaw" class="dbg-val">0°</span></div>
          <div class="debug-row"><span>BIOME:</span> <span id="dbg-biome" class="dbg-val">Beach</span></div>
          <div class="debug-row"><span>TIME:</span> <span id="dbg-time" class="dbg-val">Day 1 09:00</span></div>
        </div>
        <div class="debug-section">
          <div class="debug-subtitle">🎯 TARGETED RESOURCE NODE:</div>
          <div id="dbg-target-info" class="dbg-target-box">Looking at nothing</div>
        </div>
        <div class="debug-section">
          <div class="debug-subtitle">⚡ DEBUG HOTKEYS:</div>
          <div class="debug-hotkeys">
            <div><kbd>F1</kbd> Give 20x All Resources & Tools</div>
            <div><kbd>F2</kbd> Advance Time (+3 Hours)</div>
            <div><kbd>F3</kbd> Toggle Debug Overlay</div>
            <div><kbd>F4</kbd> God Mode (Refill All Vitals)</div>
            <div><kbd>F5</kbd> Cycle Weather (Clear / Rain / Storm)</div>
          </div>
        </div>
      </div>
    `;
    this.container.appendChild(this.element);

    // CSS Styling for Debug Overlay
    const style = document.createElement('style');
    style.textContent = `
      .debug-overlay {
        position: fixed;
        top: 80px;
        left: 20px;
        z-index: 99999;
        pointer-events: none;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 12px;
        color: #00ff66;
        text-shadow: 0 1px 3px rgba(0,0,0,0.9);
      }
      .debug-overlay.hidden {
        display: none !important;
      }
      .debug-panel {
        background: rgba(10, 18, 14, 0.88);
        border: 1px solid rgba(0, 255, 102, 0.4);
        border-radius: 6px;
        padding: 10px 14px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        min-width: 280px;
      }
      .debug-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0,255,102,0.25);
        padding-bottom: 6px;
        margin-bottom: 6px;
      }
      .debug-title {
        font-weight: bold;
        color: #afffcf;
      }
      .debug-badge {
        background: rgba(0,255,102,0.2);
        border: 1px solid #00ff66;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 11px;
      }
      .debug-section {
        margin-top: 6px;
        padding-top: 4px;
        border-top: 1px dashed rgba(255,255,255,0.1);
      }
      .debug-subtitle {
        color: #ffd54f;
        font-size: 11px;
        margin-bottom: 3px;
      }
      .debug-row {
        display: flex;
        justify-content: space-between;
        line-height: 1.4;
      }
      .dbg-val {
        color: #ffffff;
      }
      .dbg-target-box {
        background: rgba(0,0,0,0.4);
        padding: 4px 8px;
        border-radius: 4px;
        color: #80d8ff;
        font-size: 11px;
        line-height: 1.35;
      }
      .debug-hotkeys {
        font-size: 11px;
        color: #b0bec5;
        line-height: 1.45;
      }
      .debug-hotkeys kbd {
        background: #263238;
        border: 1px solid #455a64;
        color: #ffeb3b;
        padding: 1px 4px;
        border-radius: 3px;
        font-size: 10px;
      }
    `;
    document.head.appendChild(style);
  }

  bindHotkeys() {
    window.addEventListener('keydown', (e) => {
      // Toggle overlay with F3 or Backquote (tilde)
      if (e.code === 'F3' || e.code === 'Backquote') {
        e.preventDefault();
        this.toggle();
      }

      // F1: Give all resources and starter tools
      if (e.code === 'F1') {
        e.preventDefault();
        this.giveAllResources();
      }

      // F2: Advance time of day (+3 hours)
      if (e.code === 'F2') {
        e.preventDefault();
        this.advanceTime();
      }

      // F4: God Mode / Refill Vitals
      if (e.code === 'F4') {
        e.preventDefault();
        this.refillVitals();
      }

      // F5: Cycle Weather
      if (e.code === 'F5') {
        e.preventDefault();
        this.cycleWeather();
      }
    });
  }

  cycleWeather() {
    const tw = this.game.timeWeather;
    if (!tw) return;
    const weathers = ['clear', 'cloudy', 'rain', 'storm'];
    const curIdx = weathers.indexOf(tw.weather);
    const nextWeather = weathers[(curIdx + 1) % weathers.length];
    tw.setWeather(nextWeather);
    if (this.game.hud) {
      this.game.hud.addNotification(`🌧️ [DEBUG] Set Weather: ${nextWeather.toUpperCase()}`);
    }
  }

  toggle() {
    this.visible = !this.visible;
    this.element.classList.toggle('hidden', !this.visible);
    if (this.game.hud) {
      this.game.hud.addNotification(`Debug Overlay: ${this.visible ? 'ENABLED' : 'DISABLED'}`);
    }
  }

  giveAllResources() {
    const inv = this.game.inventory;
    if (!inv) return;

    // 7 Core Resources
    inv.addItem('wood', 20);
    inv.addItem('stone', 20);
    inv.addItem('leaves', 20);
    inv.addItem('coconut', 10);
    inv.addItem('berries', 15);
    inv.addItem('mushroom', 10);
    inv.addItem('fiber', 20);
    inv.addItem('flint', 10);

    // Tools & Equipment
    inv.addItem('wooden_axe', 1);
    inv.addItem('stone_axe', 1);
    inv.addItem('stone_pickaxe', 1);
    inv.addItem('wooden_spear', 1);
    inv.addItem('fishing_rod', 1);
    inv.addItem('torch', 1);
    inv.addItem('building_hammer', 1);
    inv.addItem('water_canteen', 1);
    inv.addItem('palm_hat', 1);
    inv.addItem('fiber_vest', 1);

    // Hunting & Cooking Resources
    inv.addItem('raw_meat', 6);
    inv.addItem('cooked_meat', 4);
    inv.addItem('raw_fish', 6);
    inv.addItem('cooked_fish', 4);
    inv.addItem('animal_hide', 8);
    inv.addItem('bone', 8);
    inv.addItem('feathers', 10);
    inv.addItem('snake_skin', 6);

    // Base Building Structures
    inv.addItem('wood_foundation', 8);
    inv.addItem('wood_wall', 12);
    inv.addItem('wood_door', 2);
    inv.addItem('wood_roof', 4);
    inv.addItem('storage_box', 2);
    inv.addItem('campfire', 2);
    inv.addItem('basic_shelter', 1);

    if (this.game.inventoryUI && this.game.inventoryUI.isOpen) {
      this.game.inventoryUI.render();
    }

    if (this.game.hud) {
      this.game.hud.updateHotbar(inv);
      this.game.hud.addNotification('🛠️ [DEBUG] Added 20x All Resources, Crafting Tools & Wearable Gear!');
    }
  }

  advanceTime() {
    const tw = this.game.timeWeather;
    if (!tw) return;
    // Add 3 hours = 0.125 of 24h cycle
    tw.timeOfDay = (tw.timeOfDay + 0.125) % 1.0;
    tw.update(0, this.game.player.position);
    if (this.game.hud) {
      this.game.hud.addNotification(`⏳ [DEBUG] Fast-forwarded time (+3h) -> ${tw.getFormattedTime()}`);
    }
  }

  refillVitals() {
    const p = this.game.player;
    if (!p) return;
    p.vitals.health = 100;
    p.vitals.hunger = 100;
    p.vitals.thirst = 100;
    p.vitals.stamina = 100;
    p.vitals.oxygen = 100;
    if (this.game.hud) {
      this.game.hud.updateVitals(p.vitals, false);
      this.game.hud.addNotification('💚 [DEBUG] God Mode: All vitals refilled to 100%!');
    }
  }

  update(delta) {
    if (!this.visible) return;

    // Calculate FPS
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastFpsUpdate >= 500) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
      this.frameCount = 0;
      this.lastFpsUpdate = now;
      const fpsEl = document.getElementById('dbg-fps');
      if (fpsEl) fpsEl.textContent = `${this.fps} FPS`;
    }

    const player = this.game.player;
    if (!player) return;

    // Update position and yaw
    const posEl = document.getElementById('dbg-pos');
    if (posEl) {
      posEl.textContent = `X: ${player.position.x.toFixed(1)}, Y: ${player.position.y.toFixed(1)}, Z: ${player.position.z.toFixed(1)}`;
    }

    const yawEl = document.getElementById('dbg-yaw');
    if (yawEl) {
      const deg = Math.round(((player.yaw % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) * (180 / Math.PI));
      yawEl.textContent = `${deg}° (order: YXZ)`;
    }

    // Biome
    const biomeEl = document.getElementById('dbg-biome');
    if (biomeEl) {
      const y = player.position.y;
      let bName = 'Coastal Beach';
      if (player.isUnderwater) bName = 'Underwater Ocean';
      else if (player.isSwimming) bName = 'Ocean Surface';
      else if (y > 18) bName = 'Mountain Ridge';
      else if (y > 3.2) bName = 'Tropical Rainforest Jungle';
      biomeEl.textContent = bName;
    }

    // Time
    const timeEl = document.getElementById('dbg-time');
    if (timeEl && this.game.timeWeather) {
      timeEl.textContent = `Day ${this.game.timeWeather.dayCount} ${this.game.timeWeather.getFormattedTime()}`;
    }

    // Target Wildlife or Resource Node Raycast
    const targetEl = document.getElementById('dbg-target-info');
    if (targetEl) {
      const animalHit = this.game.wildlife ? this.game.wildlife.checkAttack(player.raycaster, 5.0) : null;
      if (animalHit && animalHit.animal && animalHit.animal.userData) {
        const u = animalHit.animal.userData;
        const name = u.name || u.type.toUpperCase();
        const dist = animalHit.distance ? animalHit.distance.toFixed(2) : '3.0';
        const lootStr = u.loot ? Object.entries(u.loot).map(([k, v]) => `${k}:${v}`).join(', ') : 'None';
        targetEl.innerHTML = `<strong>🐾 ${name}</strong> (${dist}m) | HP: ${u.health}/${u.maxHealth} [State: ${u.ai ? u.ai.state : 'idle'}]<br><span style="color:#ffb74d">Hunt Drops: [${lootStr}]</span>`;
      } else if (this.game.foliage) {
        const hit = this.game.foliage.checkRaycast(player.raycaster, 4.0);
        if (hit && hit.node && hit.node.userData) {
          const u = hit.node.userData;
          const name = u.name || u.type;
          const dist = hit.distance.toFixed(2);
          const hp = u.health !== undefined ? ` | HP: ${u.health}/${u.maxHealth}` : ' [Direct [E] Pickup]';
          const yieldStr = u.resourceYield ? Object.entries(u.resourceYield).map(([k, v]) => `${k}:${v}`).join(', ') : 'None';
          targetEl.innerHTML = `<strong>${name}</strong> (${dist}m)${hp}<br><span style="color:#a7ffeb">Drops: [${yieldStr}]</span>`;
        } else {
          targetEl.textContent = 'Looking at terrain / atmosphere';
        }
      }
    }
  }
}
