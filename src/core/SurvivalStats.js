// Persistent Survival Statistics Tracker & Interactive Tutorial Guide for Island Survival
import { audio } from './AudioManager.js';

export class SurvivalStats {
  constructor() {
    this.stats = {
      daysSurvived: 1,
      distanceWalked: 0,
      resourcesHarvested: 0,
      itemsCrafted: 0,
      structuresBuilt: 0,
      animalsHunted: 0,
      mealsCooked: 0,
      damageDealt: 0
    };

    // Tutorial Questline Progress
    this.tutorial = {
      step: 0,
      completed: false,
      scavengeCount: 0,
      woodCount: 0
    };

    this.steps = [
      {
        id: 'scavenge',
        title: '🧳 Scavenge the Crash Site',
        desc: 'Search plane debris or pick up coconuts & stones on the beach.',
        goal: 3,
        get progress() { return this.current || 0; }
      },
      {
        id: 'craft_tool',
        title: '🪓 Craft Your First Tool',
        desc: 'Press [Tab] to open Crafting. Craft a Wooden Axe or Stone Hatchet.',
        goal: 1,
        get progress() { return this.current || 0; }
      },
      {
        id: 'harvest_wood',
        title: '🪵 Harvest Island Timber',
        desc: 'Equip your axe ([1-6]) and chop palm trees for wood & fiber.',
        goal: 6,
        get progress() { return this.current || 0; }
      },
      {
        id: 'craft_spear',
        title: '🗡️ Forge a Hunting Spear',
        desc: 'Open Crafting ([Tab]) and forge a Wooden Spear with 4.8m reach.',
        goal: 1,
        get progress() { return this.current || 0; }
      },
      {
        id: 'hunt_and_cook',
        title: '🥩 Hunt Wildlife & Cook Meat',
        desc: 'Hunt an animal (Deer, Boar, Rabbit, Fish) and roast meat at a Campfire.',
        goal: 1,
        get progress() { return this.current || 0; }
      },
      {
        id: 'build_shelter',
        title: '🏕️ Construct Base Shelter',
        desc: 'Press [B] for Base Construction Mode. Build a foundation or shelter.',
        goal: 1,
        get progress() { return this.current || 0; }
      }
    ];

    this.onTutorialUpdate = null;
    this.onTutorialCompleted = null;
    this.load();
  }

  recordDistance(meters) {
    if (meters > 0 && meters < 50) {
      this.stats.distanceWalked += Math.round(meters);
    }
  }

  recordHarvest(count = 1) {
    this.stats.resourcesHarvested += count;

    // Check tutorial step 0 (scavenge)
    if (this.tutorial.step === 0) {
      this.tutorial.scavengeCount += count;
      if (this.tutorial.scavengeCount >= 3) {
        this.advanceTutorial(0);
      } else if (this.onTutorialUpdate) {
        this.onTutorialUpdate(this.getCurrentTutorialObjective());
      }
    }
  }

  recordWoodGathered(count = 1) {
    if (this.tutorial.step === 2) {
      this.tutorial.woodCount += count;
      if (this.tutorial.woodCount >= 6) {
        this.advanceTutorial(2);
      } else if (this.onTutorialUpdate) {
        this.onTutorialUpdate(this.getCurrentTutorialObjective());
      }
    }
  }

  recordCraft(itemId) {
    this.stats.itemsCrafted++;

    if (this.tutorial.step === 1) {
      if (itemId === 'wooden_axe' || itemId === 'stone_axe' || itemId === 'stone_pickaxe') {
        this.advanceTutorial(1);
      }
    } else if (this.tutorial.step === 3) {
      if (itemId === 'wooden_spear') {
        this.advanceTutorial(3);
      }
    }
  }

  recordHunt() {
    this.stats.animalsHunted++;
  }

  recordCook() {
    this.stats.mealsCooked++;
    if (this.tutorial.step === 4) {
      this.advanceTutorial(4);
    }
  }

  recordBuild() {
    this.stats.structuresBuilt++;
    if (this.tutorial.step === 5) {
      this.advanceTutorial(5);
    }
  }

  advanceTutorial(currentStep) {
    if (this.tutorial.step === currentStep) {
      this.tutorial.step++;
      audio.playQuestComplete();

      if (this.tutorial.step >= this.steps.length) {
        this.tutorial.completed = true;
        if (this.onTutorialCompleted) {
          this.onTutorialCompleted();
        }
      }

      this.save();
      if (this.onTutorialUpdate) {
        this.onTutorialUpdate(this.getCurrentTutorialObjective());
      }
    }
  }

  getCurrentTutorialObjective() {
    if (this.tutorial.completed || this.tutorial.step >= this.steps.length) {
      return {
        title: '👑 Master Survivor',
        desc: 'You have conquered all survival essentials! Explore caves and build freely.',
        completed: true,
        progress: '100%'
      };
    }

    const s = this.steps[this.tutorial.step];
    let prog = '';
    if (this.tutorial.step === 0) {
      prog = ` (${Math.min(3, this.tutorial.scavengeCount)}/3)`;
    } else if (this.tutorial.step === 2) {
      prog = ` (${Math.min(6, this.tutorial.woodCount)}/6)`;
    }

    return {
      stepIndex: this.tutorial.step + 1,
      totalSteps: this.steps.length,
      title: s.title,
      desc: s.desc + prog,
      completed: false
    };
  }

  getRankTitle() {
    const days = this.stats.daysSurvived;
    const hunted = this.stats.animalsHunted;
    const built = this.stats.structuresBuilt;

    if (days >= 10 && hunted >= 15 && built >= 10) return '🏆 Legendary Apex Survivor';
    if (days >= 5 || hunted >= 8) return '🏕️ Seasoned Island Pioneer';
    if (days >= 2 || built >= 4) return '🌴 Resourceful Castaway';
    return '🏝️ Island Stranded Novice';
  }

  save() {
    try {
      localStorage.setItem('island_survival_stats', JSON.stringify({
        stats: this.stats,
        tutorial: this.tutorial
      }));
    } catch (e) {}
  }

  load() {
    try {
      const raw = localStorage.getItem('island_survival_stats');
      if (raw) {
        const data = JSON.parse(raw);
        if (data.stats) Object.assign(this.stats, data.stats);
        if (data.tutorial) Object.assign(this.tutorial, data.tutorial);
      }
    } catch (e) {}
  }

  reset() {
    this.stats = {
      daysSurvived: 1,
      distanceWalked: 0,
      resourcesHarvested: 0,
      itemsCrafted: 0,
      structuresBuilt: 0,
      animalsHunted: 0,
      mealsCooked: 0,
      damageDealt: 0
    };
    this.tutorial = {
      step: 0,
      completed: false,
      scavengeCount: 0,
      woodCount: 0
    };
    this.save();
  }
}

export const survivalStats = new SurvivalStats();
