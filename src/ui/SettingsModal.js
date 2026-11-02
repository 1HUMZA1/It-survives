// Settings Screen for Graphics, Audio, Controls, Camera, and Keybindings
export class SettingsModal {
  constructor(audio, inputManager, camera, renderer, container = document.body) {
    this.audio = audio;
    this.inputManager = inputManager;
    this.camera = camera;
    this.renderer = renderer;
    this.container = container;

    this.element = null;
    this.isOpen = false;
    this.onClose = null;

    this.settings = {
      masterVol: 80,
      musicVol: 50,
      sfxVol: 90,
      ambientVol: 65,
      sensitivity: 5,
      invertY: false,
      fov: 75,
      shadows: true
    };

    this.loadSettings();
    this.init();
  }

  loadSettings() {
    try {
      const saved = localStorage.getItem('island_survival_settings');
      if (saved) {
        Object.assign(this.settings, JSON.parse(saved));
      }
    } catch (e) {}
  }

  saveSettings() {
    try {
      localStorage.setItem('island_survival_settings', JSON.stringify(this.settings));
    } catch (e) {}
  }

  init() {
    this.element = document.createElement('div');
    this.element.id = 'settings-modal';
    this.element.className = 'modal-backdrop hidden';
    this.element.innerHTML = `
      <div class="settings-window">
        <div class="window-header">
          <h2>⚙️ GAME SETTINGS</h2>
          <button id="settings-close-x" class="close-x-btn">✖</button>
        </div>

        <div class="settings-body">
          <!-- Audio Settings -->
          <div class="settings-section">
            <h3>🔊 AUDIO & MUSIC</h3>
            <div class="setting-item">
              <label>Master Volume: <span id="lbl-master-vol">${this.settings.masterVol}%</span></label>
              <input type="range" id="slider-master-vol" min="0" max="100" value="${this.settings.masterVol}">
            </div>
            <div class="setting-item">
              <label>Background Island Music: <span id="lbl-music-vol">${this.settings.musicVol}%</span></label>
              <input type="range" id="slider-music-vol" min="0" max="100" value="${this.settings.musicVol}">
            </div>
            <div class="setting-item">
              <label>Sound Effects: <span id="lbl-sfx-vol">${this.settings.sfxVol}%</span></label>
              <input type="range" id="slider-sfx-vol" min="0" max="100" value="${this.settings.sfxVol}">
            </div>
            <div class="setting-item">
              <label>Ocean, Wind & Rain: <span id="lbl-ambient-vol">${this.settings.ambientVol}%</span></label>
              <input type="range" id="slider-ambient-vol" min="0" max="100" value="${this.settings.ambientVol}">
            </div>
          </div>

          <!-- Controls Settings -->
          <div class="settings-section">
            <h3>🎮 CONTROLS & CAMERA</h3>
            <div class="setting-item">
              <label>Mouse Look Sensitivity: <span id="lbl-sens">${this.settings.sensitivity}</span></label>
              <input type="range" id="slider-sens" min="1" max="10" value="${this.settings.sensitivity}">
            </div>
            <div class="setting-item checkbox-item">
              <label for="check-invert-y">Invert Y-Axis Look:</label>
              <input type="checkbox" id="check-invert-y" ${this.settings.invertY ? 'checked' : ''}>
            </div>
            <div class="setting-item">
              <label>Field of View (FOV): <span id="lbl-fov">${this.settings.fov}°</span></label>
              <input type="range" id="slider-fov" min="60" max="95" value="${this.settings.fov}">
            </div>
          </div>

          <!-- Video & Performance -->
          <div class="settings-section">
            <h3>🖥️ GRAPHICS</h3>
            <div class="setting-item checkbox-item">
              <label for="check-shadows">Dynamic Sun Shadows & Cascades:</label>
              <input type="checkbox" id="check-shadows" ${this.settings.shadows ? 'checked' : ''}>
            </div>
          </div>

          <!-- Quick Keybindings Reference -->
          <div class="settings-section">
            <h3>⌨️ KEYBINDINGS REFERENCE</h3>
            <div class="keybindings-grid">
              <div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> Move</div>
              <div><kbd>Shift</kbd> Sprint</div>
              <div><kbd>Space</kbd> Jump / Swim Up</div>
              <div><kbd>Left Click</kbd> Attack / Spear / Chop / Mine / Place</div>
              <div><kbd>Right Click</kbd> Eat / Drink / Cancel Build</div>
              <div><kbd>E</kbd> Interact / Gather / Scavenge / Cook / Sleep</div>
              <div><kbd>1 - 6</kbd> Select Hotbar Slot</div>
              <div><kbd>Tab</kbd> / <kbd>I</kbd> Backpack & Crafting Screen</div>
              <div><kbd>B</kbd> Base Construction Mode</div>
              <div><kbd>R</kbd> Rotate Blueprint 45°</div>
              <div><kbd>Esc</kbd> Pause Menu</div>
            </div>
          </div>

          <div class="settings-actions">
            <button id="btn-settings-save" class="btn-menu primary">Save & Close</button>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
    this.applySettings();
  }

  bindEvents() {
    const bindSlider = (id, lblId, suffix, callback) => {
      const slider = this.element.querySelector(`#${id}`);
      const lbl = this.element.querySelector(`#${lblId}`);
      slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        lbl.textContent = `${val}${suffix}`;
        callback(val);
      });
    };

    bindSlider('slider-master-vol', 'lbl-master-vol', '%', (val) => {
      this.settings.masterVol = val;
      this.audio.setMasterVolume(val / 100);
    });

    bindSlider('slider-music-vol', 'lbl-music-vol', '%', (val) => {
      this.settings.musicVol = val;
      if (this.audio.setMusicVolume) {
        this.audio.setMusicVolume(val / 100);
      }
    });

    bindSlider('slider-sfx-vol', 'lbl-sfx-vol', '%', (val) => {
      this.settings.sfxVol = val;
      this.audio.setSfxVolume(val / 100);
    });

    bindSlider('slider-ambient-vol', 'lbl-ambient-vol', '%', (val) => {
      this.settings.ambientVol = val;
      this.audio.setAmbientVolume(val / 100);
    });

    bindSlider('slider-sens', 'lbl-sens', '', (val) => {
      this.settings.sensitivity = val;
      this.inputManager.sensitivity = 0.0005 + (val / 10) * 0.0035;
    });

    bindSlider('slider-fov', 'lbl-fov', '°', (val) => {
      this.settings.fov = val;
      if (this.camera) {
        this.camera.fov = val;
        this.camera.updateProjectionMatrix();
      }
    });

    this.element.querySelector('#check-invert-y').addEventListener('change', (e) => {
      this.settings.invertY = e.target.checked;
      this.inputManager.invertY = e.target.checked;
    });

    this.element.querySelector('#check-shadows').addEventListener('change', (e) => {
      this.settings.shadows = e.target.checked;
      if (this.renderer) {
        this.renderer.shadowMap.enabled = e.target.checked;
      }
    });

    const close = () => {
      this.saveSettings();
      this.close();
    };

    this.element.querySelector('#settings-close-x').addEventListener('click', close);
    this.element.querySelector('#btn-settings-save').addEventListener('click', close);
  }

  applySettings() {
    this.audio.setMasterVolume(this.settings.masterVol / 100);
    if (this.audio.setMusicVolume) {
      this.audio.setMusicVolume(this.settings.musicVol / 100);
    }
    this.audio.setSfxVolume(this.settings.sfxVol / 100);
    this.audio.setAmbientVolume(this.settings.ambientVol / 100);
    this.inputManager.sensitivity = 0.0005 + (this.settings.sensitivity / 10) * 0.0035;
    this.inputManager.invertY = this.settings.invertY;
    if (this.camera) {
      this.camera.fov = this.settings.fov;
      this.camera.updateProjectionMatrix();
    }
    if (this.renderer) {
      this.renderer.shadowMap.enabled = this.settings.shadows;
    }
  }

  open() {
    this.isOpen = true;
    this.element.classList.remove('hidden');
    this.audio.playUIClick();
  }

  close() {
    this.isOpen = false;
    this.element.classList.add('hidden');
    if (this.onClose) this.onClose();
  }
}
