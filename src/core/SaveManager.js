// LocalStorage Save & Load Manager for Island Survival
export class SaveManager {
  static SAVE_KEY = 'island_survival_save_data';

  static hasSave() {
    return localStorage.getItem(this.SAVE_KEY) !== null;
  }

  static saveGame(player, timeWeather, buildingSystem) {
    try {
      const saveData = {
        timestamp: Date.now(),
        player: {
          x: player.position.x,
          y: player.position.y,
          z: player.position.z,
          yaw: player.yaw,
          pitch: player.pitch,
          vitals: player.vitals
        },
        inventory: player.inventory.serialize(),
        timeWeather: {
          timeOfDay: timeWeather.timeOfDay,
          dayCount: timeWeather.dayCount,
          weather: timeWeather.weather
        },
        structures: buildingSystem.serialize()
      };

      localStorage.setItem(this.SAVE_KEY, JSON.stringify(saveData));
      return true;
    } catch (e) {
      console.error('Failed to save game:', e);
      return false;
    }
  }

  static loadGame(player, timeWeather, buildingSystem) {
    try {
      const raw = localStorage.getItem(this.SAVE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);

      if (data.player) {
        player.position.set(data.player.x, data.player.y, data.player.z);
        player.yaw = data.player.yaw || 0;
        player.pitch = data.player.pitch || 0;
        if (data.player.vitals) {
          Object.assign(player.vitals, data.player.vitals);
        }
      }

      if (data.inventory) {
        player.inventory.deserialize(data.inventory);
      }

      if (data.timeWeather) {
        timeWeather.timeOfDay = data.timeWeather.timeOfDay || 9.0;
        timeWeather.dayCount = data.timeWeather.dayCount || 1;
        if (data.timeWeather.weather && timeWeather.setWeather) {
          timeWeather.setWeather(data.timeWeather.weather);
        }
        timeWeather.update(0, player.position);
      }

      if (data.structures) {
        buildingSystem.deserialize(data.structures);
      }

      return true;
    } catch (e) {
      console.error('Failed to load game:', e);
      return false;
    }
  }

  static clearSave() {
    localStorage.removeItem(this.SAVE_KEY);
  }
}
