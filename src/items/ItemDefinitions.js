// Definitions for all items, tools, equipment, structures, and crafting recipes in Island Survival

export const ITEMS = {
  // --- Natural Resources ---
  WOOD: {
    id: 'wood',
    name: 'Palm Wood',
    category: 'resource',
    icon: '🪵',
    description: 'Sturdy timber harvested from palm trees. Essential for tools, weapons, and shelter.',
    maxStack: 50
  },
  STONE: {
    id: 'stone',
    name: 'Hard Stone',
    category: 'resource',
    icon: '🪨',
    description: 'Smooth river stone found on beaches and mined from boulders.',
    maxStack: 50
  },
  FLINT: {
    id: 'flint',
    name: 'Sharp Flint',
    category: 'resource',
    icon: '🔪',
    description: 'Chipped mineral with razor-sharp edges. Used for spears and fire starting.',
    maxStack: 30
  },
  FIBER: {
    id: 'fiber',
    name: 'Plant Fiber',
    category: 'resource',
    icon: '🌿',
    description: 'Tough fibers stripped from jungle ferns and palm leaves. Used for cordage and lashings.',
    maxStack: 50
  },
  LEAVES: {
    id: 'leaves',
    name: 'Tropical Leaves',
    category: 'resource',
    icon: '🍃',
    description: 'Broad tropical leaves harvested from jungle trees and ferns. Used for thatching and clothing.',
    maxStack: 50
  },
  PALM_FROND: {
    id: 'palm_frond',
    name: 'Palm Fronds',
    category: 'resource',
    icon: '🌴',
    description: 'Large tropical palm fronds used for thatching roofs, lean-to shelters, and crafting.',
    maxStack: 30
  },
  BRANCH: {
    id: 'branch',
    name: 'Fallen Branch',
    category: 'resource',
    icon: '🪵',
    description: 'Dry fallen tree branch. Used for campfire fuel, kindling, spears, and crafting.',
    maxStack: 50
  },
  MUSHROOM: {
    id: 'mushroom',
    name: 'Wild Forest Mushroom',
    category: 'consumable',
    icon: '🍄',
    description: 'Edible forest mushroom harvested from shady roots and caves. Restores hunger and vitality.',
    maxStack: 30,
    consumable: {
      hunger: 16,
      thirst: 6,
      health: 8,
      useSound: 'eat'
    }
  },
  SCRAP_METAL: {
    id: 'scrap_metal',
    name: 'Plane Debris Scrap',
    category: 'resource',
    icon: '⚙️',
    description: 'Alloy salvaged from the plane crash wreckage. Useful for advanced mechanisms.',
    maxStack: 20
  },
  HERB: {
    id: 'herb',
    name: 'Medicinal Herbs',
    category: 'resource',
    icon: '🌱',
    description: 'Healing tropical flora. Can be applied directly or crafted into soothing bandages.',
    maxStack: 25,
    consumable: {
      hunger: 5,
      thirst: 2,
      health: 15,
      useSound: 'eat'
    }
  },
  FEATHERS: {
    id: 'feathers',
    name: 'Tropical Feathers',
    category: 'resource',
    icon: '🪶',
    description: 'Soft brightly colored bird plumage collected from island birds.',
    maxStack: 40
  },
  ANIMAL_HIDE: {
    id: 'animal_hide',
    name: 'Animal Hide',
    category: 'resource',
    icon: '🦌',
    description: 'Tough pelt harvested from deer and boars. Used for leather crafting.',
    maxStack: 25
  },
  BONE: {
    id: 'bone',
    name: 'Animal Bone',
    category: 'resource',
    icon: '🦴',
    description: 'Sturdy bone harvested from game animals. Useful for tools and talismans.',
    maxStack: 30
  },
  SNAKE_SKIN: {
    id: 'snake_skin',
    name: 'Serpent Scales',
    category: 'resource',
    icon: '🐍',
    description: 'Patterned scales stripped from venomous island vipers.',
    maxStack: 20
  },

  // --- Consumables & Food ---
  COCONUT: {
    id: 'coconut',
    name: 'Fresh Coconut',
    category: 'consumable',
    icon: '🥥',
    description: 'Sweet coconut milk and meat. Restores thirst and slight hunger.',
    maxStack: 15,
    consumable: {
      hunger: 12,
      thirst: 25,
      health: 2,
      useSound: 'drink'
    }
  },
  BERRIES: {
    id: 'berries',
    name: 'Island Berries',
    category: 'consumable',
    icon: '🫐',
    description: 'Juicy tropical wild berries. Sweet and thirst-quenching.',
    maxStack: 30,
    consumable: {
      hunger: 10,
      thirst: 8,
      health: 3,
      useSound: 'eat'
    }
  },
  RAW_CRAB: {
    id: 'raw_crab',
    name: 'Raw Crab Meat',
    category: 'consumable',
    icon: '🦀',
    description: 'Freshly harvested coastal crab meat. Better cooked to avoid food sickness.',
    maxStack: 15,
    consumable: {
      hunger: 15,
      thirst: -5,
      health: -5,
      useSound: 'eat'
    }
  },
  COOKED_CRAB: {
    id: 'cooked_crab',
    name: 'Grilled Crab Meat',
    category: 'consumable',
    icon: '🍤',
    description: 'Roasted to perfection on the campfire. Plump and delicious.',
    maxStack: 15,
    consumable: {
      hunger: 35,
      thirst: 5,
      health: 15,
      useSound: 'eat'
    }
  },
  RAW_FISH: {
    id: 'raw_fish',
    name: 'Raw Reef Fish',
    category: 'consumable',
    icon: '🐟',
    description: 'Freshly caught coastal reef fish. Cook over a campfire before eating.',
    maxStack: 15,
    consumable: {
      hunger: 18,
      thirst: -4,
      health: -5,
      useSound: 'eat'
    }
  },
  COOKED_FISH: {
    id: 'cooked_fish',
    name: 'Grilled Reef Fish',
    category: 'consumable',
    icon: '🐠',
    description: 'Tender fish grilled to perfection over a campfire. Highly nutritious.',
    maxStack: 15,
    consumable: {
      hunger: 42,
      thirst: 8,
      health: 22,
      useSound: 'eat'
    }
  },
  RAW_MEAT: {
    id: 'raw_meat',
    name: 'Raw Game Meat',
    category: 'consumable',
    icon: '🥩',
    description: 'Raw meat from island wildlife. High protein, but unsafe raw.',
    maxStack: 15,
    consumable: {
      hunger: 20,
      thirst: -8,
      health: -10,
      useSound: 'eat'
    }
  },
  COOKED_MEAT: {
    id: 'cooked_meat',
    name: 'Roasted Meat Steak',
    category: 'consumable',
    icon: '🍖',
    description: 'Hearty roasted steak. Greatly restores hunger and vitality.',
    maxStack: 15,
    consumable: {
      hunger: 55,
      thirst: 5,
      health: 30,
      useSound: 'eat'
    }
  },
  WATER_CANTEEN: {
    id: 'water_canteen',
    name: 'Purified Water Flask',
    category: 'consumable',
    icon: '💧',
    description: 'Fresh clean water sealed in a hollow coconut canteen.',
    maxStack: 5,
    consumable: {
      hunger: 0,
      thirst: 60,
      health: 5,
      useSound: 'drink'
    }
  },
  BANDAGE: {
    id: 'bandage',
    name: 'Herbal Bandage',
    category: 'consumable',
    icon: '🩹',
    description: 'Plant fibers woven with healing medicinal herbs. Heals 40 HP.',
    maxStack: 10,
    consumable: {
      hunger: 0,
      thirst: 0,
      health: 40,
      useSound: 'eat'
    }
  },

  // --- Tools & Weapons ---
  WOODEN_AXE: {
    id: 'wooden_axe',
    name: 'Wooden Axe',
    category: 'tool',
    toolType: 'axe',
    icon: '🪓',
    description: 'Carved hardwood axe. Efficient at chopping palm timber and collecting leaves.',
    efficiency: { tree: 2.6, rock: 0.6, attack: 16 },
    durability: 80,
    maxStack: 1
  },
  STONE_AXE: {
    id: 'stone_axe',
    name: 'Stone Axe',
    category: 'tool',
    toolType: 'axe',
    icon: '🪓',
    description: 'Sharpened stone bound to a wooden handle. Chops trees and timber rapidly.',
    efficiency: { tree: 3.5, rock: 1.0, attack: 22 },
    durability: 100,
    maxStack: 1
  },
  STONE_PICKAXE: {
    id: 'stone_pickaxe',
    name: 'Stone Pickaxe',
    category: 'tool',
    toolType: 'pickaxe',
    icon: '⛏️',
    description: 'Pointed flint pick. Shatters boulders and extracts flint and mineral ore.',
    efficiency: { tree: 1.0, rock: 3.5, attack: 18 },
    durability: 100,
    maxStack: 1
  },
  WOODEN_SPEAR: {
    id: 'wooden_spear',
    name: 'Wooden Spear',
    category: 'tool',
    toolType: 'spear',
    icon: '🗡️',
    description: 'Fire-hardened hunting spear with a sharpened tip. Long reach and high damage against wildlife.',
    efficiency: { tree: 0.8, rock: 0.5, attack: 35 },
    durability: 80,
    maxStack: 1
  },
  FISHING_ROD: {
    id: 'fishing_rod',
    name: 'Fishing Rod',
    category: 'tool',
    toolType: 'rod',
    icon: '🎣',
    description: 'Bamboo fishing pole with a plant fiber line and stone hook. Cast into coastal waters to catch fish.',
    efficiency: { tree: 0.2, rock: 0.1, attack: 8 },
    durability: 60,
    maxStack: 1
  },
  TORCH: {
    id: 'torch',
    name: 'Survival Torch',
    category: 'tool',
    toolType: 'torch',
    icon: '🔥',
    description: 'Burns bright with resin-soaked fiber. Illuminates dark nights and caves.',
    durability: 150,
    maxStack: 1
  },
  BUILDING_HAMMER: {
    id: 'building_hammer',
    name: 'Construction Mallet',
    category: 'tool',
    toolType: 'hammer',
    icon: '🔨',
    description: 'Use to enter Building Blueprint mode and construct island shelters.',
    durability: 100,
    maxStack: 1
  },

  // --- Wearable Equipment Slots ---
  PALM_HAT: {
    id: 'palm_hat',
    name: 'Woven Palm Hat',
    category: 'equipment',
    equipSlot: 'head',
    icon: '👒',
    description: 'Woven from tropical palm leaves. Blocks scorching sun and reduces thirst depletion by 20%.',
    armor: 5,
    maxStack: 1
  },
  FIBER_VEST: {
    id: 'fiber_vest',
    name: 'Fiber Chest Armor',
    category: 'equipment',
    equipSlot: 'chest',
    icon: '🦺',
    description: 'Reinforced vest woven from tough jungle fiber. Absorbs animal bites and falls.',
    armor: 12,
    maxStack: 1
  },
  LEAF_PANTS: {
    id: 'leaf_pants',
    name: 'Palm Leaf Kilt',
    category: 'equipment',
    equipSlot: 'legs',
    icon: '🩳',
    description: 'Lightweight tropical kilt providing thorn protection and agility.',
    armor: 8,
    maxStack: 1
  },
  SHELL_AMULET: {
    id: 'shell_amulet',
    name: 'Seashell Talisman',
    category: 'equipment',
    equipSlot: 'accessory',
    icon: '📿',
    description: 'Ocean shell necklace that increases stamina recovery speed by 25%.',
    armor: 3,
    maxStack: 1
  },

  // --- Structures (Craftable Placeables) ---
  CAMPFIRE: {
    id: 'campfire',
    name: 'Campfire',
    category: 'structure',
    icon: '⛺',
    description: 'Provides heat, light, and allows cooking raw meats and fish. Keeps predators away.',
    structureType: 'campfire',
    maxStack: 5
  },
  BASIC_SHELTER: {
    id: 'basic_shelter',
    name: 'Basic Shelter',
    category: 'structure',
    icon: '🏕️',
    description: 'A sturdy lean-to shelter with palm leaf bedding. Sleep safely through the night to dawn.',
    structureType: 'shelter',
    maxStack: 3
  },
  STORAGE_BOX: {
    id: 'storage_box',
    name: 'Storage Box',
    category: 'structure',
    icon: '📦',
    description: 'Crafted wooden storage box to store gathered resources and extra tools safely.',
    structureType: 'chest',
    maxStack: 5
  },
  WOOD_FOUNDATION: {
    id: 'wood_foundation',
    name: 'Wood Foundation',
    category: 'structure',
    icon: '🪵',
    description: 'Elevated wooden deck platform to build base walls and living quarters on.',
    structureType: 'foundation',
    maxStack: 10
  },
  WOOD_WALL: {
    id: 'wood_wall',
    name: 'Wood Wall',
    category: 'structure',
    icon: '🧱',
    description: 'Solid wooden plank wall. Protects your camp from coastal winds and animals.',
    structureType: 'wall',
    maxStack: 10
  },
  WOOD_DOOR: {
    id: 'wood_door',
    name: 'Wood Doorway & Door',
    category: 'structure',
    icon: '🚪',
    description: 'Wall with an interactive wooden door that can be opened and closed.',
    structureType: 'doorway',
    maxStack: 5
  },
  WOOD_ROOF: {
    id: 'wood_roof',
    name: 'Thatched Roof',
    category: 'structure',
    icon: '🏠',
    description: 'Angled palm frond roof to keep rain off your head.',
    structureType: 'roof',
    maxStack: 10
  },
  RAIN_COLLECTOR: {
    id: 'rain_collector',
    name: 'Rainwater Basin',
    category: 'structure',
    icon: '🪣',
    description: 'Collects clean fresh rainwater continuously for safe drinking.',
    structureType: 'collector',
    maxStack: 3
  }
};

// Aliases for backward compatibility
ITEMS.SHELTER_LEAN_TO = ITEMS.BASIC_SHELTER;
ITEMS.STORAGE_CHEST = ITEMS.STORAGE_BOX;

// Crafting Recipes Catalog
export const RECIPES = [
  // === Primary Target Survival Recipes ===
  {
    id: 'craft_stone_axe',
    result: 'STONE_AXE',
    count: 1,
    category: 'tools',
    ingredients: [
      { item: 'WOOD', count: 3 },
      { item: 'STONE', count: 2 },
      { item: 'FIBER', count: 2 }
    ]
  },
  {
    id: 'craft_stone_pickaxe',
    result: 'STONE_PICKAXE',
    count: 1,
    category: 'tools',
    ingredients: [
      { item: 'WOOD', count: 3 },
      { item: 'STONE', count: 3 },
      { item: 'FIBER', count: 2 }
    ]
  },
  {
    id: 'craft_wooden_spear',
    result: 'WOODEN_SPEAR',
    count: 1,
    category: 'tools',
    ingredients: [
      { item: 'WOOD', count: 4 },
      { item: 'STONE', count: 2 },
      { item: 'FIBER', count: 2 }
    ]
  },
  {
    id: 'craft_fishing_rod',
    result: 'FISHING_ROD',
    count: 1,
    category: 'tools',
    ingredients: [
      { item: 'WOOD', count: 3 },
      { item: 'FIBER', count: 4 },
      { item: 'STONE', count: 1 }
    ]
  },
  {
    id: 'craft_campfire',
    result: 'CAMPFIRE',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 4 },
      { item: 'STONE', count: 4 }
    ]
  },
  {
    id: 'craft_basic_shelter',
    result: 'BASIC_SHELTER',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 5 },
      { item: 'LEAVES', count: 6 },
      { item: 'FIBER', count: 4 }
    ]
  },
  {
    id: 'craft_storage_box',
    result: 'STORAGE_BOX',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 6 },
      { item: 'FIBER', count: 3 }
    ]
  },

  // === Additional Tools & Equipment ===
  {
    id: 'craft_wooden_axe',
    result: 'WOODEN_AXE',
    count: 1,
    category: 'tools',
    ingredients: [
      { item: 'WOOD', count: 3 },
      { item: 'FIBER', count: 2 }
    ]
  },
  {
    id: 'craft_torch',
    result: 'TORCH',
    count: 1,
    category: 'tools',
    ingredients: [
      { item: 'WOOD', count: 2 },
      { item: 'FIBER', count: 3 }
    ]
  },
  {
    id: 'craft_building_hammer',
    result: 'BUILDING_HAMMER',
    count: 1,
    category: 'tools',
    ingredients: [
      { item: 'WOOD', count: 3 },
      { item: 'STONE', count: 2 },
      { item: 'FIBER', count: 1 }
    ]
  },
  {
    id: 'craft_palm_hat',
    result: 'PALM_HAT',
    count: 1,
    category: 'equipment',
    ingredients: [
      { item: 'LEAVES', count: 4 },
      { item: 'FIBER', count: 2 }
    ]
  },
  {
    id: 'craft_fiber_vest',
    result: 'FIBER_VEST',
    count: 1,
    category: 'equipment',
    ingredients: [
      { item: 'FIBER', count: 8 },
      { item: 'LEAVES', count: 2 }
    ]
  },
  {
    id: 'craft_leaf_pants',
    result: 'LEAF_PANTS',
    count: 1,
    category: 'equipment',
    ingredients: [
      { item: 'LEAVES', count: 6 },
      { item: 'FIBER', count: 4 }
    ]
  },
  {
    id: 'craft_shell_amulet',
    result: 'SHELL_AMULET',
    count: 1,
    category: 'equipment',
    ingredients: [
      { item: 'STONE', count: 2 },
      { item: 'FIBER', count: 3 }
    ]
  },

  // === Survival & Medical ===
  {
    id: 'craft_bandage',
    result: 'BANDAGE',
    count: 1,
    category: 'survival',
    ingredients: [
      { item: 'FIBER', count: 3 },
      { item: 'HERB', count: 1 }
    ]
  },
  {
    id: 'craft_water_canteen',
    result: 'WATER_CANTEEN',
    count: 1,
    category: 'survival',
    ingredients: [
      { item: 'COCONUT', count: 1 },
      { item: 'FIBER', count: 2 }
    ]
  },

  // === Shelter Construction Pieces ===
  {
    id: 'craft_wood_foundation',
    result: 'WOOD_FOUNDATION',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 6 }
    ]
  },
  {
    id: 'craft_wood_wall',
    result: 'WOOD_WALL',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 4 },
      { item: 'FIBER', count: 1 }
    ]
  },
  {
    id: 'craft_wood_door',
    result: 'WOOD_DOOR',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 5 },
      { item: 'FIBER', count: 2 }
    ]
  },
  {
    id: 'craft_wood_roof',
    result: 'WOOD_ROOF',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 4 },
      { item: 'LEAVES', count: 4 }
    ]
  },
  {
    id: 'craft_rain_collector',
    result: 'RAIN_COLLECTOR',
    count: 1,
    category: 'building',
    ingredients: [
      { item: 'WOOD', count: 4 },
      { item: 'LEAVES', count: 4 },
      { item: 'COCONUT', count: 1 }
    ]
  }
];
