// Inventory System: Backpack, Hotbar, Equipment Slots, Item Stacking, Drag & Drop Support
import { ITEMS, RECIPES } from './ItemDefinitions.js';

export class Inventory {
  constructor(backpackSize = 24, hotbarSize = 5) {
    this.backpackSize = backpackSize;
    this.hotbarSize = hotbarSize;

    // Slots array (0..4 = hotbar, 5..28 = backpack)
    this.slots = new Array(hotbarSize + backpackSize).fill(null);
    this.selectedHotbarIndex = 0;

    // Dedicated Equipment Slots (Head, Chest, Legs, Accessory)
    this.equipment = {
      head: null,
      chest: null,
      legs: null,
      accessory: null
    };

    this.onInventoryChanged = null;

    this.initStarterItems();
  }

  initStarterItems() {
    this.addItem('wood', 4);
    this.addItem('stone', 2);
    this.addItem('fiber', 4);
    this.addItem('coconut', 2);
    this.addItem('stone_axe', 1);
  }

  clear() {
    this.slots = new Array(this.hotbarSize + this.backpackSize).fill(null);
    this.equipment = { head: null, chest: null, legs: null, accessory: null };
    if (this.onInventoryChanged) this.onInventoryChanged();
  }

  getEquippedItem() {
    return this.slots[this.selectedHotbarIndex];
  }

  selectHotbarIndex(index) {
    if (index >= 0 && index < this.hotbarSize) {
      this.selectedHotbarIndex = index;
      if (this.onInventoryChanged) this.onInventoryChanged();
    }
  }

  // Add item by ID with automatic stacking
  addItem(itemId, count = 1) {
    const defKey = Object.keys(ITEMS).find(k => ITEMS[k].id === itemId);
    if (!defKey) {
      console.warn('Unknown item ID:', itemId);
      return false;
    }
    const def = ITEMS[defKey];
    let remaining = count;

    // 1. Try stacking into existing non-full slots
    for (let i = 0; i < this.slots.length; i++) {
      const slot = this.slots[i];
      if (slot && slot.id === itemId && slot.count < def.maxStack) {
        const space = def.maxStack - slot.count;
        const addAmount = Math.min(space, remaining);
        slot.count += addAmount;
        remaining -= addAmount;
        if (remaining <= 0) break;
      }
    }

    // 2. Try placing remainder into empty slots
    if (remaining > 0) {
      for (let i = 0; i < this.slots.length; i++) {
        if (!this.slots[i]) {
          const addAmount = Math.min(def.maxStack, remaining);
          this.slots[i] = {
            id: itemId,
            count: addAmount,
            durability: def.durability || null
          };
          remaining -= addAmount;
          if (remaining <= 0) break;
        }
      }
    }

    if (this.onInventoryChanged) this.onInventoryChanged();
    return remaining < count;
  }

  // Count total amount of an item ID across all backpack and hotbar slots
  getItemCount(itemId) {
    let total = 0;
    for (let slot of this.slots) {
      if (slot && slot.id === itemId) {
        total += slot.count;
      }
    }
    return total;
  }

  // Remove specific count of an item
  removeItem(itemId, count = 1) {
    let remaining = count;
    for (let i = 0; i < this.slots.length; i++) {
      const slot = this.slots[i];
      if (slot && slot.id === itemId) {
        if (slot.count > remaining) {
          slot.count -= remaining;
          remaining = 0;
          break;
        } else {
          remaining -= slot.count;
          this.slots[i] = null;
        }
      }
    }

    if (this.onInventoryChanged) this.onInventoryChanged();
    return remaining === 0;
  }

  // Move or merge items between slots (handles drag and drop and click swaps)
  moveOrMerge(fromIndex, toIndex) {
    if (fromIndex === toIndex) return;
    if (fromIndex < 0 || fromIndex >= this.slots.length || toIndex < 0 || toIndex >= this.slots.length) return;

    const source = this.slots[fromIndex];
    const target = this.slots[toIndex];

    if (!source) return;

    if (!target) {
      // Direct move to empty slot
      this.slots[toIndex] = source;
      this.slots[fromIndex] = null;
    } else if (source.id === target.id) {
      // Merge stacks
      const def = Object.values(ITEMS).find(d => d.id === source.id);
      const max = def ? def.maxStack : 50;
      const space = max - target.count;

      if (space > 0) {
        const toAdd = Math.min(space, source.count);
        target.count += toAdd;
        source.count -= toAdd;
        if (source.count <= 0) {
          this.slots[fromIndex] = null;
        }
      } else {
        // Target is already full, swap
        this.slots[fromIndex] = target;
        this.slots[toIndex] = source;
      }
    } else {
      // Different items, swap
      this.slots[fromIndex] = target;
      this.slots[toIndex] = source;
    }

    if (this.onInventoryChanged) this.onInventoryChanged();
  }

  // Equip an item from inventory to an equipment slot
  equipItem(slotName, inventoryIndex) {
    const item = this.slots[inventoryIndex];
    if (!item) return false;

    const def = Object.values(ITEMS).find(d => d.id === item.id);
    if (!def || def.category !== 'equipment' || def.equipSlot !== slotName) {
      return false;
    }

    // Swap with currently equipped item in that slot
    const prevEquipped = this.equipment[slotName];
    this.equipment[slotName] = item;
    this.slots[inventoryIndex] = prevEquipped;

    if (this.onInventoryChanged) this.onInventoryChanged();
    return true;
  }

  // Unequip an item to inventory
  unequipItem(slotName) {
    const item = this.equipment[slotName];
    if (!item) return false;

    // Find first empty slot
    const emptyIdx = this.slots.findIndex(s => s === null);
    if (emptyIdx === -1) {
      return false; // Inventory full
    }

    this.slots[emptyIdx] = item;
    this.equipment[slotName] = null;

    if (this.onInventoryChanged) this.onInventoryChanged();
    return true;
  }

  // Calculate total armor defense value
  getTotalArmor() {
    let total = 0;
    for (let key of Object.keys(this.equipment)) {
      const item = this.equipment[key];
      if (item) {
        const def = Object.values(ITEMS).find(d => d.id === item.id);
        if (def && def.armor) total += def.armor;
      }
    }
    return total;
  }

  // Check if player has specific accessory equipped
  hasAccessory(itemId) {
    return this.equipment.accessory && this.equipment.accessory.id === itemId;
  }

  // Check crafting feasibility
  canCraft(recipeId) {
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return false;

    for (let ing of recipe.ingredients) {
      const itemDef = ITEMS[ing.item];
      if (!itemDef) return false;
      if (this.getItemCount(itemDef.id) < ing.count) {
        return false;
      }
    }
    return true;
  }

  // Execute crafting
  craft(recipeId) {
    if (!this.canCraft(recipeId)) return false;
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return false;

    // Deduct ingredients
    for (let ing of recipe.ingredients) {
      const itemDef = ITEMS[ing.item];
      this.removeItem(itemDef.id, ing.count);
    }

    // Add crafted result
    const resultDef = ITEMS[recipe.result];
    this.addItem(resultDef.id, recipe.count);

    if (this.onInventoryChanged) this.onInventoryChanged();
    return true;
  }

  swapSlots(indexA, indexB) {
    this.moveOrMerge(indexA, indexB);
  }

  serialize() {
    return {
      slots: this.slots,
      equipment: this.equipment,
      selectedHotbarIndex: this.selectedHotbarIndex
    };
  }

  deserialize(data) {
    if (data && data.slots) {
      this.slots = data.slots;
      this.equipment = data.equipment || { head: null, chest: null, legs: null, accessory: null };
      this.selectedHotbarIndex = data.selectedHotbarIndex || 0;
    }
  }
}
