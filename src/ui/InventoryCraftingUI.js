// Complete Survival Backpack, 4-Slot Equipment Paperdoll, Crafting Workbench & Storage Box Transfer UI
import { ITEMS, RECIPES } from '../items/ItemDefinitions.js';
import { survivalStats } from '../core/SurvivalStats.js';

export class InventoryCraftingUI {
  constructor(inventory, buildingSystem, audio, container = document.body, hud = null) {
    this.inventory = inventory;
    this.buildingSystem = buildingSystem;
    this.audio = audio;
    this.container = container;
    this.hud = hud;

    this.isOpen = false;
    this.selectedSlotIndex = null;
    this.selectedEquipSlot = null;
    this.selectedRecipeId = 'craft_stone_axe';
    this.activeCategory = 'all';
    this.searchQuery = '';

    // Active placed chest being inspected/stored into
    this.activeChest = null;
    this.selectedChestSlotIndex = null;

    // Drag-and-drop state
    this.dragSource = null; // { type: 'inventory'|'equipment'|'chest', index?: number, slotKey?: string }

    this.onClose = null;

    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.id = 'inventory-screen';
    this.element.className = 'modal-backdrop hidden';
    this.element.innerHTML = `
      <div class="inventory-window pro-layout">
        <!-- Window Header -->
        <div class="window-header">
          <div class="header-left">
            <span class="header-badge">ISLAND SURVIVOR</span>
            <h2 id="main-window-title">🎒 BACKPACK & CRAFTING WORKBENCH</h2>
          </div>
          <div class="header-right">
            <span class="hotkey-tip">Press <kbd>Tab</kbd> or <kbd>I</kbd> to Close</span>
            <button id="inv-close-btn" class="close-x-btn" title="Close Inventory">✖</button>
          </div>
        </div>

        <!-- Window Body: 3-Column Layout -->
        <div class="window-body">
          <!-- COLUMN 1: Character Equipment & Item Inspector -->
          <div class="inv-column col-character">
            <div class="section-header">
              <span class="sec-icon">👤</span>
              <span class="sec-title">SURVIVOR & GEAR</span>
            </div>

            <!-- Paperdoll / Equipment Slots -->
            <div class="equipment-container">
              <div class="paperdoll-silhouette">
                <div class="silhouette-graphic">🏝️</div>
              </div>

              <div class="equipment-slots-grid">
                <!-- Head Slot -->
                <div class="equip-slot-card" data-equip-slot="head">
                  <div class="equip-slot-label">HEAD</div>
                  <div class="equip-slot" id="equip-slot-head">
                    <span class="slot-placeholder">👒</span>
                  </div>
                </div>

                <!-- Chest Slot -->
                <div class="equip-slot-card" data-equip-slot="chest">
                  <div class="equip-slot-label">TORSO</div>
                  <div class="equip-slot" id="equip-slot-chest">
                    <span class="slot-placeholder">🦺</span>
                  </div>
                </div>

                <!-- Legs Slot -->
                <div class="equip-slot-card" data-equip-slot="legs">
                  <div class="equip-slot-label">LEGS</div>
                  <div class="equip-slot" id="equip-slot-legs">
                    <span class="slot-placeholder">🩳</span>
                  </div>
                </div>

                <!-- Accessory Slot -->
                <div class="equip-slot-card" data-equip-slot="accessory">
                  <div class="equip-slot-label">TALISMAN</div>
                  <div class="equip-slot" id="equip-slot-accessory">
                    <span class="slot-placeholder">📿</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Survivor Gear Stats Summary -->
            <div class="gear-stats-card">
              <div class="stat-line">
                <span>🛡️ Total Armor:</span>
                <span id="gear-stat-armor" class="val-highlight">0%</span>
              </div>
              <div class="stat-line">
                <span>⚡ Stamina Boost:</span>
                <span id="gear-stat-stamina" class="val-highlight">Normal</span>
              </div>
              <div class="stat-line">
                <span>☀️ Sun Protection:</span>
                <span id="gear-stat-sun" class="val-highlight">Normal</span>
              </div>
            </div>

            <!-- Item Inspector Details -->
            <div class="section-header inspector-header-bar">
              <span class="sec-icon">🔍</span>
              <span class="sec-title">ITEM INSPECTOR</span>
            </div>
            <div id="item-inspector" class="item-inspector empty">
              <div class="inspector-placeholder">Select or drag any item to view properties.</div>
            </div>
          </div>

          <!-- COLUMN 2: Storage Grid (Hotbar + 24 Backpack Slots) -->
          <div class="inv-column col-storage">
            <!-- Hotbar Section (1 - 5) -->
            <div class="section-header">
              <span class="sec-icon">⚡</span>
              <span class="sec-title">QUICK ACCESS HOTBAR (1 - 5)</span>
            </div>
            <div id="inv-hotbar-grid" class="slots-grid hotbar-grid"></div>

            <!-- Main Backpack Grid (24 Slots) -->
            <div class="section-header backpack-header">
              <div class="flex-between">
                <span><span class="sec-icon">🎒</span> <span class="sec-title">BACKPACK STORAGE (24 SLOTS)</span></span>
                <span id="inv-capacity-badge" class="capacity-badge">0 / 29 Items</span>
              </div>
            </div>
            <div id="inv-backpack-grid" class="slots-grid backpack-grid"></div>

            <!-- Drop Zone for Discarding -->
            <div id="inv-drop-zone" class="drop-zone-box">
              <span class="drop-icon">🗑️</span>
              <span class="drop-text">Drag item here to drop onto ground</span>
            </div>
          </div>

          <!-- COLUMN 3: Crafting Workbench / Storage Box Transfer -->
          <div class="inv-column col-crafting">
            <!-- 1. Normal Crafting View -->
            <div id="crafting-panel-view" class="column-view-group">
              <div class="section-header">
                <span class="sec-icon">🔨</span>
                <span class="sec-title">CRAFTING BLUEPRINTS</span>
              </div>

              <!-- Search Bar -->
              <div class="craft-search-bar">
                <input type="text" id="craft-search-input" placeholder="🔍 Search recipes..." />
              </div>

              <!-- Crafting Category Tabs -->
              <div class="crafting-tabs">
                <button class="craft-tab active" data-category="all">All</button>
                <button class="craft-tab" data-category="tools">Tools</button>
                <button class="craft-tab" data-category="survival">Survival</button>
                <button class="craft-tab" data-category="building">Building</button>
                <button class="craft-tab" data-category="equipment">Gear</button>
              </div>

              <!-- Recipe Selection List -->
              <div id="recipe-list" class="recipe-list"></div>

              <!-- Recipe Materials Details & Craft Action -->
              <div id="recipe-details" class="recipe-details"></div>
            </div>

            <!-- 2. Placed Storage Box Transfer View -->
            <div id="chest-panel-view" class="column-view-group hidden">
              <div class="section-header flex-between">
                <span><span class="sec-icon">📦</span> <span class="sec-title">STORAGE BOX (12 SLOTS)</span></span>
                <div class="chest-quick-btns">
                  <button id="btn-chest-take-all" class="chest-btn">Take All</button>
                  <button id="btn-chest-store-all" class="chest-btn">Deposit All</button>
                </div>
              </div>
              <div id="chest-slots-grid" class="chest-slots-grid"></div>
              <div class="chest-hint-note">Click or drag items to transfer between your backpack and the storage box.</div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(this.element);
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Close button
    this.element.querySelector('#inv-close-btn').addEventListener('click', () => {
      this.close();
    });

    // Close on backdrop click
    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) {
        this.close();
      }
    });

    // Search input
    const searchInput = this.element.querySelector('#craft-search-input');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderRecipeList();
    });

    // Category Tabs
    const tabs = this.element.querySelectorAll('.craft-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeCategory = tab.dataset.category;
        this.renderRecipeList();
      });
    });

    // Drop zone drag events
    const dropZone = this.element.querySelector('#inv-drop-zone');
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('drag-active');
    });
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drag-active');
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-active');
      if (this.dragSource) {
        if (this.dragSource.type === 'inventory') {
          const item = this.inventory.slots[this.dragSource.index];
          if (item) {
            this.inventory.slots[this.dragSource.index] = null;
            if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
            this.audio.playUIClick();
            this.selectedSlotIndex = null;
            this.render();
          }
        } else if (this.dragSource.type === 'equipment') {
          this.inventory.equipment[this.dragSource.slotKey] = null;
          if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
          this.audio.playUIClick();
          this.selectedEquipSlot = null;
          this.render();
        } else if (this.dragSource.type === 'chest' && this.activeChest) {
          this.activeChest.userData.items[this.dragSource.index] = null;
          this.audio.playUIClick();
          this.selectedChestSlotIndex = null;
          this.render();
        }
        this.dragSource = null;
      }
    });

    // Chest Take All Button
    const takeAllBtn = this.element.querySelector('#btn-chest-take-all');
    if (takeAllBtn) {
      takeAllBtn.addEventListener('click', () => {
        if (!this.activeChest || !this.activeChest.userData.items) return;
        const items = this.activeChest.userData.items;
        for (let i = 0; i < items.length; i++) {
          const it = items[i];
          if (it) {
            if (this.inventory.addItem(it.id, it.count)) {
              items[i] = null;
            }
          }
        }
        this.audio.playPickup();
        this.render();
      });
    }

    // Chest Deposit All Button
    const storeAllBtn = this.element.querySelector('#btn-chest-store-all');
    if (storeAllBtn) {
      storeAllBtn.addEventListener('click', () => {
        if (!this.activeChest || !this.activeChest.userData.items) return;
        const items = this.activeChest.userData.items;
        for (let i = 0; i < this.inventory.slots.length; i++) {
          const it = this.inventory.slots[i];
          if (it) {
            let targetIdx = items.findIndex(s => s && s.id === it.id);
            if (targetIdx !== -1) {
              items[targetIdx].count += it.count;
              this.inventory.slots[i] = null;
            } else {
              targetIdx = items.findIndex(s => s === null);
              if (targetIdx !== -1) {
                items[targetIdx] = { id: it.id, count: it.count };
                this.inventory.slots[i] = null;
              }
            }
          }
        }
        if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
        this.audio.playPickup();
        this.render();
      });
    }
  }

  open(activeChest = null) {
    this.isOpen = true;
    this.activeChest = activeChest;
    this.selectedChestSlotIndex = null;
    this.selectedSlotIndex = null;
    this.selectedEquipSlot = null;

    if (this.activeChest && this.activeChest.userData && this.activeChest.userData.toggleOpen) {
      this.activeChest.userData.toggleOpen(true);
    }

    this.element.classList.remove('hidden');
    this.audio.playUIClick();
    this.render();
  }

  close() {
    this.isOpen = false;
    if (this.activeChest && this.activeChest.userData && this.activeChest.userData.toggleOpen) {
      this.activeChest.userData.toggleOpen(false);
    }
    this.activeChest = null;
    this.selectedChestSlotIndex = null;
    this.element.classList.add('hidden');
    this.audio.playUIClick();
    if (this.onClose) this.onClose();
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  render() {
    this.renderEquipment();
    this.renderSlots();
    this.renderInspector();

    const titleEl = this.element.querySelector('#main-window-title');
    const craftingPanel = this.element.querySelector('#crafting-panel-view');
    const chestPanel = this.element.querySelector('#chest-panel-view');

    if (this.activeChest) {
      if (titleEl) titleEl.textContent = '📦 STORAGE BOX & BACKPACK TRANSFER';
      if (craftingPanel) craftingPanel.classList.add('hidden');
      if (chestPanel) {
        chestPanel.classList.remove('hidden');
        this.renderChestSlots();
      }
    } else {
      if (titleEl) titleEl.textContent = '🎒 BACKPACK & CRAFTING WORKBENCH';
      if (craftingPanel) craftingPanel.classList.remove('hidden');
      if (chestPanel) chestPanel.classList.add('hidden');
      this.renderRecipeList();
      this.renderRecipeDetails();
    }
  }

  // Render 4 Wearable Equipment Slots (Head, Torso, Legs, Talisman)
  renderEquipment() {
    const slots = ['head', 'chest', 'legs', 'accessory'];
    const placeholders = { head: '👒', chest: '🦺', legs: '🩳', accessory: '📿' };

    for (let slotKey of slots) {
      const slotEl = this.element.querySelector(`#equip-slot-${slotKey}`);
      if (!slotEl) continue;

      const item = this.inventory.equipment[slotKey];
      slotEl.innerHTML = '';
      slotEl.className = `equip-slot ${this.selectedEquipSlot === slotKey ? 'selected' : ''}`;

      if (item) {
        const def = Object.values(ITEMS).find(d => d.id === item.id);
        slotEl.innerHTML = `
          <span class="slot-icon">${def ? def.icon : '🛡️'}</span>
          <span class="slot-name-badge">${def ? def.name : item.id}</span>
        `;
        slotEl.setAttribute('draggable', 'true');

        // Drag start from equipment
        slotEl.addEventListener('dragstart', (e) => {
          this.dragSource = { type: 'equipment', slotKey: slotKey };
          e.dataTransfer.setData('text/plain', JSON.stringify(this.dragSource));
          slotEl.classList.add('is-dragging');
        });

        slotEl.addEventListener('dragend', () => {
          slotEl.classList.remove('is-dragging');
          this.dragSource = null;
        });
      } else {
        slotEl.innerHTML = `<span class="slot-placeholder">${placeholders[slotKey]}</span>`;
        slotEl.removeAttribute('draggable');
      }

      // Slot Click (Select for inspecting or unequip)
      slotEl.addEventListener('click', () => {
        this.audio.playUIClick();
        if (this.selectedEquipSlot === slotKey) {
          this.selectedEquipSlot = null;
        } else {
          this.selectedEquipSlot = slotKey;
          this.selectedSlotIndex = null;
          this.selectedChestSlotIndex = null;
        }
        this.render();
      });

      // Double-click to quick-unequip
      slotEl.addEventListener('dblclick', () => {
        if (this.inventory.equipment[slotKey]) {
          this.inventory.unequipItem(slotKey);
          this.audio.playUIClick();
          this.selectedEquipSlot = null;
          this.render();
        }
      });

      // Drop onto equipment slot from inventory
      slotEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        slotEl.classList.add('drag-over');
      });
      slotEl.addEventListener('dragleave', () => {
        slotEl.classList.remove('drag-over');
      });
      slotEl.addEventListener('drop', (e) => {
        e.preventDefault();
        slotEl.classList.remove('drag-over');
        if (this.dragSource && this.dragSource.type === 'inventory') {
          const invIdx = this.dragSource.index;
          if (this.inventory.equipItem(slotKey, invIdx)) {
            this.audio.playUIClick();
            this.render();
          }
          this.dragSource = null;
        }
      });
    }

    // Update gear stats readout
    const armorEl = this.element.querySelector('#gear-stat-armor');
    if (armorEl) {
      const armorVal = this.inventory.getTotalArmor();
      armorEl.textContent = `+${armorVal}% Defense`;
    }

    const stamEl = this.element.querySelector('#gear-stat-stamina');
    if (stamEl) {
      stamEl.textContent = this.inventory.hasAccessory('shell_amulet') ? '+25% Regen' : 'Normal';
    }

    const sunEl = this.element.querySelector('#gear-stat-sun');
    if (sunEl) {
      sunEl.textContent = (this.inventory.equipment.head && this.inventory.equipment.head.id === 'palm_hat') ? '-20% Thirst Drain' : 'Normal';
    }
  }

  // Render Hotbar & 24-slot Backpack Grid
  renderSlots() {
    const hotbarGrid = this.element.querySelector('#inv-hotbar-grid');
    const backpackGrid = this.element.querySelector('#inv-backpack-grid');
    const capBadge = this.element.querySelector('#inv-capacity-badge');

    hotbarGrid.innerHTML = '';
    backpackGrid.innerHTML = '';

    let usedSlots = 0;

    const hotbarCount = this.inventory.hotbarSize || 5;
    const totalSlots = this.inventory.slots.length;

    // 1. Hotbar Slots (0 .. hotbarCount-1)
    for (let i = 0; i < hotbarCount; i++) {
      if (this.inventory.slots[i]) usedSlots++;
      const slotEl = this.createSlotElement(i, true);
      hotbarGrid.appendChild(slotEl);
    }

    // 2. Backpack Slots (hotbarCount .. totalSlots-1)
    for (let i = hotbarCount; i < totalSlots; i++) {
      if (this.inventory.slots[i]) usedSlots++;
      const slotEl = this.createSlotElement(i, false);
      backpackGrid.appendChild(slotEl);
    }

    if (capBadge) {
      capBadge.textContent = `${usedSlots} / ${totalSlots} Slots`;
    }
  }

  createSlotElement(index, isHotbar) {
    const item = this.inventory.slots[index];
    const el = document.createElement('div');
    el.className = `inv-slot ${index === this.selectedSlotIndex ? 'selected' : ''} ${isHotbar ? 'hotbar-slot-style' : ''}`;
    el.dataset.index = index;

    // Hotbar key indicator
    if (isHotbar) {
      const keySpan = document.createElement('span');
      keySpan.className = 'slot-key-number';
      keySpan.textContent = index + 1;
      el.appendChild(keySpan);
    }

    if (item) {
      const def = Object.values(ITEMS).find(d => d.id === item.id);
      el.setAttribute('draggable', 'true');

      const content = document.createElement('div');
      content.className = 'slot-item-content';
      content.innerHTML = `
        <span class="slot-icon">${def ? def.icon : '📦'}</span>
        <span class="slot-count-badge">${item.count > 1 ? item.count : ''}</span>
      `;
      el.appendChild(content);

      // Drag start
      el.addEventListener('dragstart', (e) => {
        this.dragSource = { type: 'inventory', index: index };
        e.dataTransfer.setData('text/plain', JSON.stringify(this.dragSource));
        el.classList.add('is-dragging');
      });

      el.addEventListener('dragend', () => {
        el.classList.remove('is-dragging');
        this.dragSource = null;
      });
    } else {
      el.removeAttribute('draggable');
    }

    // Drag over & drop handling (Full Drag-and-Drop between any slots)
    el.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      el.classList.add('drag-over');
    });

    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over');
    });

    el.addEventListener('drop', (e) => {
      e.preventDefault();
      el.classList.remove('drag-over');

      if (this.dragSource) {
        if (this.dragSource.type === 'inventory') {
          const fromIdx = this.dragSource.index;
          if (fromIdx !== index) {
            this.inventory.moveOrMerge(fromIdx, index);
            this.audio.playUIClick();
            this.render();
          }
        } else if (this.dragSource.type === 'equipment') {
          // Dragging from equipment slot to inventory slot
          const slotKey = this.dragSource.slotKey;
          const equipItem = this.inventory.equipment[slotKey];
          if (equipItem) {
            const targetItem = this.inventory.slots[index];
            if (!targetItem) {
              this.inventory.slots[index] = equipItem;
              this.inventory.equipment[slotKey] = null;
            } else {
              const def = Object.values(ITEMS).find(d => d.id === targetItem.id);
              if (def && def.category === 'equipment' && def.equipSlot === slotKey) {
                this.inventory.equipment[slotKey] = targetItem;
                this.inventory.slots[index] = equipItem;
              }
            }
            if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
            this.audio.playUIClick();
            this.render();
          }
        } else if (this.dragSource.type === 'chest' && this.activeChest) {
          // Dragging from chest into inventory slot
          const chestIdx = this.dragSource.index;
          const chestItem = this.activeChest.userData.items[chestIdx];
          if (chestItem) {
            const targetItem = this.inventory.slots[index];
            if (!targetItem) {
              this.inventory.slots[index] = chestItem;
              this.activeChest.userData.items[chestIdx] = null;
            } else if (targetItem.id === chestItem.id) {
              targetItem.count += chestItem.count;
              this.activeChest.userData.items[chestIdx] = null;
            } else {
              this.inventory.slots[index] = chestItem;
              this.activeChest.userData.items[chestIdx] = targetItem;
            }
            if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
            this.audio.playUIClick();
            this.render();
          }
        }
        this.dragSource = null;
      }
    });

    // Click to select or move/swap (Click-to-swap support alongside drag-and-drop)
    el.addEventListener('click', () => {
      this.audio.playUIClick();

      if (this.selectedChestSlotIndex !== null && this.activeChest) {
        // Transfer from selected chest slot into this inventory slot
        const chestItem = this.activeChest.userData.items[this.selectedChestSlotIndex];
        if (chestItem) {
          const targetItem = this.inventory.slots[index];
          if (!targetItem) {
            this.inventory.slots[index] = chestItem;
            this.activeChest.userData.items[this.selectedChestSlotIndex] = null;
          } else if (targetItem.id === chestItem.id) {
            targetItem.count += chestItem.count;
            this.activeChest.userData.items[this.selectedChestSlotIndex] = null;
          } else {
            this.inventory.slots[index] = chestItem;
            this.activeChest.userData.items[this.selectedChestSlotIndex] = targetItem;
          }
          if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
          this.selectedChestSlotIndex = null;
          this.render();
          return;
        }
      }

      if (this.selectedEquipSlot !== null) {
        // Equipping from selected equipment back into clicked inventory slot
        const equipItem = this.inventory.equipment[this.selectedEquipSlot];
        if (equipItem && !item) {
          this.inventory.slots[index] = equipItem;
          this.inventory.equipment[this.selectedEquipSlot] = null;
          this.selectedEquipSlot = null;
          if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
          this.render();
          return;
        }
      }

      if (this.selectedSlotIndex === null) {
        if (item) this.selectedSlotIndex = index;
      } else if (this.selectedSlotIndex === index) {
        this.selectedSlotIndex = null;
      } else {
        // Swap or merge
        this.inventory.moveOrMerge(this.selectedSlotIndex, index);
        this.selectedSlotIndex = null;
      }
      this.selectedChestSlotIndex = null;
      this.render();
    });

    // Double-click to quick-action (Quick-Equip gear, Quick-Consume food/drink, Quick-Store into chest)
    el.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      const currentItem = this.inventory.slots[index];
      if (!currentItem) return;
      const def = Object.values(ITEMS).find(d => d.id === currentItem.id);
      if (!def) return;

      if (this.activeChest && this.activeChest.userData && this.activeChest.userData.items) {
        // Quick store into chest
        const chestItems = this.activeChest.userData.items;
        let targetIdx = chestItems.findIndex(s => s && s.id === currentItem.id);
        if (targetIdx !== -1) {
          chestItems[targetIdx].count += currentItem.count;
          this.inventory.slots[index] = null;
        } else {
          targetIdx = chestItems.findIndex(s => s === null);
          if (targetIdx !== -1) {
            chestItems[targetIdx] = { id: currentItem.id, count: currentItem.count };
            this.inventory.slots[index] = null;
          }
        }
        if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
        this.audio.playPickup();
        this.selectedSlotIndex = null;
        this.render();
        return;
      }

      if (def.category === 'equipment') {
        // Quick equip into gear slot
        if (this.inventory.equipItem(def.equipSlot, index)) {
          this.audio.playUIClick();
          if (this.hud) {
            this.hud.addNotification(`🛡️ Equipped ${def.name} to ${def.equipSlot.toUpperCase()}`);
          }
          this.selectedSlotIndex = null;
          this.render();
          return;
        }
      } else if (def.category === 'consumable') {
        // Quick consume
        this.inventory.removeItem(currentItem.id, 1);
        if (def.consumable && def.consumable.useSound === 'drink') {
          this.audio.playDrink ? this.audio.playDrink() : this.audio.playEat();
        } else {
          this.audio.playEat();
        }
        if (this.hud) {
          this.hud.addNotification(`🍽️ Consumed ${def.name}`);
        }
        this.selectedSlotIndex = null;
        this.render();
        return;
      }
    });

    return el;
  }

  // Render Storage Box 12-Slot Grid
  renderChestSlots() {
    const grid = this.element.querySelector('#chest-slots-grid');
    if (!grid || !this.activeChest) return;
    grid.innerHTML = '';

    const items = this.activeChest.userData.items || [];

    for (let i = 0; i < 12; i++) {
      const item = items[i];
      const el = document.createElement('div');
      el.className = `inv-slot ${i === this.selectedChestSlotIndex ? 'selected' : ''}`;
      el.dataset.chestIndex = i;

      if (item) {
        const def = Object.values(ITEMS).find(d => d.id === item.id);
        el.setAttribute('draggable', 'true');
        el.innerHTML = `
          <div class="slot-item-content">
            <span class="slot-icon">${def ? def.icon : '📦'}</span>
            <span class="slot-count-badge">${item.count > 1 ? item.count : ''}</span>
          </div>
        `;

        el.addEventListener('dragstart', (e) => {
          this.dragSource = { type: 'chest', index: i };
          e.dataTransfer.setData('text/plain', JSON.stringify(this.dragSource));
          el.classList.add('is-dragging');
        });

        el.addEventListener('dragend', () => {
          el.classList.remove('is-dragging');
          this.dragSource = null;
        });
      }

      el.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        el.classList.add('drag-over');
      });

      el.addEventListener('dragleave', () => {
        el.classList.remove('drag-over');
      });

      el.addEventListener('drop', (e) => {
        e.preventDefault();
        el.classList.remove('drag-over');

        if (this.dragSource) {
          if (this.dragSource.type === 'inventory') {
            const invIdx = this.dragSource.index;
            const invItem = this.inventory.slots[invIdx];
            if (invItem) {
              const curChest = items[i];
              if (!curChest) {
                items[i] = invItem;
                this.inventory.slots[invIdx] = null;
              } else if (curChest.id === invItem.id) {
                curChest.count += invItem.count;
                this.inventory.slots[invIdx] = null;
              } else {
                items[i] = invItem;
                this.inventory.slots[invIdx] = curChest;
              }
              if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
              this.audio.playUIClick();
              this.render();
            }
          } else if (this.dragSource.type === 'chest') {
            const fromIdx = this.dragSource.index;
            if (fromIdx !== i) {
              const tmp = items[i];
              items[i] = items[fromIdx];
              items[fromIdx] = tmp;
              this.audio.playUIClick();
              this.render();
            }
          }
          this.dragSource = null;
        }
      });

      el.addEventListener('click', () => {
        this.audio.playUIClick();

        if (this.selectedSlotIndex !== null) {
          // Transfer from selected backpack slot into this chest slot
          const invItem = this.inventory.slots[this.selectedSlotIndex];
          if (invItem) {
            const curChest = items[i];
            if (!curChest) {
              items[i] = invItem;
              this.inventory.slots[this.selectedSlotIndex] = null;
            } else if (curChest.id === invItem.id) {
              curChest.count += invItem.count;
              this.inventory.slots[this.selectedSlotIndex] = null;
            } else {
              items[i] = invItem;
              this.inventory.slots[this.selectedSlotIndex] = curChest;
            }
            if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
            this.selectedSlotIndex = null;
            this.render();
            return;
          }
        }

        if (this.selectedChestSlotIndex === i) {
          this.selectedChestSlotIndex = null;
        } else {
          this.selectedChestSlotIndex = i;
          this.selectedSlotIndex = null;
          this.selectedEquipSlot = null;
        }
        this.render();
      });

      grid.appendChild(el);
    }
  }

  // Render Detailed Item Inspector Card
  renderInspector() {
    const inspectorEl = this.element.querySelector('#item-inspector');

    let item = null;
    let isEquipment = false;
    let isChestItem = false;

    if (this.selectedChestSlotIndex !== null && this.activeChest) {
      item = this.activeChest.userData.items[this.selectedChestSlotIndex];
      isChestItem = true;
    } else if (this.selectedSlotIndex !== null) {
      item = this.inventory.slots[this.selectedSlotIndex];
    } else if (this.selectedEquipSlot !== null) {
      item = this.inventory.equipment[this.selectedEquipSlot];
      isEquipment = true;
    }

    if (!item) {
      inspectorEl.className = 'item-inspector empty';
      inspectorEl.innerHTML = `<div class="inspector-placeholder">Click or drag any item in your backpack, hotbar, or equipment slots to inspect.</div>`;
      return;
    }

    const def = Object.values(ITEMS).find(d => d.id === item.id);
    if (!def) return;

    inspectorEl.className = 'item-inspector active';

    let statsHtml = '';
    if (def.consumable) {
      if (def.consumable.hunger) statsHtml += `<span class="stat-badge stat-hunger">🍖 +${def.consumable.hunger} Hunger</span>`;
      if (def.consumable.thirst) statsHtml += `<span class="stat-badge stat-thirst">💧 +${def.consumable.thirst} Thirst</span>`;
      if (def.consumable.health) statsHtml += `<span class="stat-badge stat-health">❤️ +${def.consumable.health} Health</span>`;
    }
    if (def.efficiency) {
      statsHtml += `<span class="stat-badge stat-attack">⚔️ Attack: ${def.efficiency.attack}</span>`;
      if (def.efficiency.tree > 1) statsHtml += `<span class="stat-badge stat-chop">🪓 Chop: x${def.efficiency.tree}</span>`;
      if (def.efficiency.rock > 1) statsHtml += `<span class="stat-badge stat-mine">⛏️ Mine: x${def.efficiency.rock}</span>`;
    }
    if (def.armor) {
      statsHtml += `<span class="stat-badge stat-armor">🛡️ Armor: +${def.armor}%</span>`;
    }

    let actionBtnHtml = '';
    if (isChestItem) {
      actionBtnHtml = `<button id="btn-inspect-take" class="btn-action primary">📤 Take to Backpack</button>`;
    } else {
      if (this.activeChest) {
        actionBtnHtml += `<button id="btn-inspect-store" class="btn-action primary">📥 Store in Box</button>`;
      }
      if (def.category === 'consumable') {
        actionBtnHtml += `<button id="btn-inspect-consume" class="btn-action secondary">🍽️ Consume / Eat</button>`;
      } else if (def.category === 'equipment') {
        if (isEquipment) {
          actionBtnHtml += `<button id="btn-inspect-unequip" class="btn-action primary">🛡️ Unequip Item</button>`;
        } else {
          actionBtnHtml += `<button id="btn-inspect-equip" class="btn-action primary">🛡️ Equip to ${def.equipSlot.toUpperCase()}</button>`;
        }
      } else if (def.category === 'structure') {
        actionBtnHtml += `<button id="btn-inspect-build" class="btn-action secondary">📐 Enter Blueprint Mode</button>`;
      }
    }

    inspectorEl.innerHTML = `
      <div class="inspector-header">
        <span class="inspector-icon">${def.icon}</span>
        <div class="inspector-meta">
          <div class="inspector-title">${def.name}</div>
          <div class="inspector-cat">${def.category.toUpperCase()} • ${item.count > 1 ? `Stack of ${item.count}` : 'Single Item'}</div>
        </div>
      </div>
      <div class="inspector-desc">${def.description}</div>
      <div class="inspector-stats">${statsHtml}</div>
      <div class="inspector-actions">
        ${actionBtnHtml}
        <button id="btn-inspect-drop" class="btn-action danger" title="Drop item onto ground">🗑️ Drop</button>
      </div>
    `;

    // Hook buttons
    const takeBtn = inspectorEl.querySelector('#btn-inspect-take');
    if (takeBtn) {
      takeBtn.addEventListener('click', () => {
        if (this.inventory.addItem(item.id, item.count)) {
          this.activeChest.userData.items[this.selectedChestSlotIndex] = null;
          this.selectedChestSlotIndex = null;
          this.audio.playPickup();
          this.render();
        }
      });
    }

    const storeBtn = inspectorEl.querySelector('#btn-inspect-store');
    if (storeBtn && this.activeChest) {
      storeBtn.addEventListener('click', () => {
        const items = this.activeChest.userData.items;
        let targetIdx = items.findIndex(s => s && s.id === item.id);
        if (targetIdx !== -1) {
          items[targetIdx].count += item.count;
          this.inventory.slots[this.selectedSlotIndex] = null;
        } else {
          targetIdx = items.findIndex(s => s === null);
          if (targetIdx !== -1) {
            items[targetIdx] = { id: item.id, count: item.count };
            this.inventory.slots[this.selectedSlotIndex] = null;
          }
        }
        if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
        this.selectedSlotIndex = null;
        this.audio.playPickup();
        this.render();
      });
    }

    const consumeBtn = inspectorEl.querySelector('#btn-inspect-consume');
    if (consumeBtn) {
      consumeBtn.addEventListener('click', () => {
        this.inventory.removeItem(item.id, 1);
        this.audio.playEat();
        this.selectedSlotIndex = null;
        this.render();
      });
    }

    const equipBtn = inspectorEl.querySelector('#btn-inspect-equip');
    if (equipBtn) {
      equipBtn.addEventListener('click', () => {
        if (this.selectedSlotIndex !== null) {
          this.inventory.equipItem(def.equipSlot, this.selectedSlotIndex);
          this.selectedSlotIndex = null;
          this.audio.playUIClick();
          this.render();
        }
      });
    }

    const unequipBtn = inspectorEl.querySelector('#btn-inspect-unequip');
    if (unequipBtn) {
      unequipBtn.addEventListener('click', () => {
        if (this.selectedEquipSlot) {
          this.inventory.unequipItem(this.selectedEquipSlot);
          this.selectedEquipSlot = null;
          this.audio.playUIClick();
          this.render();
        }
      });
    }

    const buildBtn = inspectorEl.querySelector('#btn-inspect-build');
    if (buildBtn) {
      buildBtn.addEventListener('click', () => {
        this.buildingSystem.startBuilding(item.id);
        this.close();
      });
    }

    const dropBtn = inspectorEl.querySelector('#btn-inspect-drop');
    if (dropBtn) {
      dropBtn.addEventListener('click', () => {
        if (this.selectedChestSlotIndex !== null && this.activeChest) {
          this.activeChest.userData.items[this.selectedChestSlotIndex] = null;
          this.selectedChestSlotIndex = null;
        } else if (this.selectedSlotIndex !== null) {
          this.inventory.slots[this.selectedSlotIndex] = null;
          if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
          this.selectedSlotIndex = null;
        } else if (this.selectedEquipSlot !== null) {
          this.inventory.equipment[this.selectedEquipSlot] = null;
          if (this.inventory.onInventoryChanged) this.inventory.onInventoryChanged();
          this.selectedEquipSlot = null;
        }
        this.audio.playUIClick();
        this.render();
      });
    }
  }

  // Render Scrollable Recipe Cards List with Status Badges
  renderRecipeList() {
    const listEl = this.element.querySelector('#recipe-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    const filtered = RECIPES.filter(r => {
      const resultDef = ITEMS[r.result];
      if (!resultDef) return false;

      // Category filter
      if (this.activeCategory !== 'all' && r.category !== this.activeCategory) {
        return false;
      }

      // Search filter
      if (this.searchQuery && !resultDef.name.toLowerCase().includes(this.searchQuery)) {
        return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="recipe-empty-msg">No blueprints match your filter.</div>`;
      return;
    }

    for (let recipe of filtered) {
      const resultDef = ITEMS[recipe.result];
      const canCraft = this.inventory.canCraft(recipe.id);
      const isSelected = recipe.id === this.selectedRecipeId;

      // Ingredients preview string
      const ingPreview = recipe.ingredients
        .map(ing => {
          const d = ITEMS[ing.item];
          return `${d ? d.icon : ''} x${ing.count}`;
        })
        .join('  ');

      const card = document.createElement('div');
      card.className = `recipe-card ${isSelected ? 'selected' : ''} ${canCraft ? 'craftable' : 'locked'}`;
      card.innerHTML = `
        <span class="recipe-icon">${resultDef.icon}</span>
        <div class="recipe-info">
          <div class="recipe-name">${resultDef.name}</div>
          <div class="recipe-ing-preview">${ingPreview}</div>
        </div>
        <div class="recipe-status-pill ${canCraft ? 'ready' : 'missing'}">
          ${canCraft ? '✨ Ready' : 'Locked'}
        </div>
      `;

      card.addEventListener('click', () => {
        this.selectedRecipeId = recipe.id;
        this.audio.playUIClick();
        this.renderRecipeList();
        this.renderRecipeDetails();
      });

      listEl.appendChild(card);
    }
  }

  // Render Selected Recipe Details, Exact Ingredient Status & Craft Action
  renderRecipeDetails() {
    const detailsEl = this.element.querySelector('#recipe-details');
    if (!detailsEl) return;

    const recipe = RECIPES.find(r => r.id === this.selectedRecipeId);
    if (!recipe) {
      detailsEl.innerHTML = `<div class="inspector-placeholder">Select a recipe from the list above.</div>`;
      return;
    }

    const resultDef = ITEMS[recipe.result];
    if (!resultDef) return;

    const canCraft = this.inventory.canCraft(recipe.id);

    let ingredientsHtml = '';
    for (let ing of recipe.ingredients) {
      const itemDef = ITEMS[ing.item];
      if (!itemDef) continue;

      const playerHas = this.inventory.getItemCount(itemDef.id);
      const satisfied = playerHas >= ing.count;

      ingredientsHtml += `
        <div class="ing-row ${satisfied ? 'met' : 'missing'}">
          <span class="ing-icon">${itemDef.icon}</span>
          <span class="ing-name">${itemDef.name}</span>
          <span class="ing-count">${playerHas} / ${ing.count} ${satisfied ? '✔' : '✖'}</span>
        </div>
      `;
    }

    let extraActionBtn = '';
    if (resultDef.category === 'structure') {
      const hasStructure = this.inventory.getItemCount(resultDef.id) > 0;
      if (hasStructure) {
        extraActionBtn = `<button id="btn-blueprint-mode" class="btn-action secondary">📐 Enter Blueprint Mode</button>`;
      }
    }

    detailsEl.innerHTML = `
      <div class="recipe-detail-header">
        <span class="recipe-detail-icon">${resultDef.icon}</span>
        <div class="recipe-detail-text">
          <h3>${resultDef.name}</h3>
          <p>${resultDef.description}</p>
        </div>
      </div>

      <div class="section-title">REQUIRED MATERIALS</div>
      <div class="ingredients-list">${ingredientsHtml}</div>

      <div class="craft-actions">
        <button id="btn-craft" class="btn-craft ${canCraft ? 'active' : 'disabled'}" ${!canCraft ? 'disabled' : ''}>
          🔨 Craft ${resultDef.name} ${!canCraft ? '(Missing Materials)' : ''}
        </button>
        ${extraActionBtn}
      </div>
    `;

    // Hook Craft Button
    const craftBtn = detailsEl.querySelector('#btn-craft');
    if (craftBtn && canCraft) {
      craftBtn.addEventListener('click', () => {
        if (this.inventory.craft(recipe.id)) {
          this.audio.playCraft();
          survivalStats.recordCraft(resultDef.id);
          if (this.hud) {
            this.hud.addNotification(`🔨 Crafted 1x ${resultDef.name}!`);
            this.hud.updateHotbar(this.inventory);
          }
          craftBtn.classList.add('craft-pulse');
          setTimeout(() => craftBtn.classList.remove('craft-pulse'), 300);
          this.render();
        }
      });
    }

    const blueprintBtn = detailsEl.querySelector('#btn-blueprint-mode');
    if (blueprintBtn) {
      blueprintBtn.addEventListener('click', () => {
        this.buildingSystem.startBuilding(resultDef.id);
        this.close();
      });
    }
  }
}
