# 🌴 ISLAND SURVIVAL - 3D Browser Survival Game

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-Play%20Online-00e5ff?style=for-the-badge&logo=github)](https://1humza1.github.io/It-survives/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

**ISLAND SURVIVAL** is an immersive, browser-based first-person 3D survival game built with **Three.js**, modern **JavaScript (ES Modules)**, Web Audio API, and high-performance WebGL graphics.

Play directly in your browser:  
👉 **[https://1humza1.github.io/It-survives/](https://1humza1.github.io/It-survives/)**

---

## 🎮 Game Overview

Stranded on an uncharted tropical island after a plane crash, your objective is to survive the elements, scavenge wreckage debris, harvest island flora, forge weapons and tools, construct base shelters, hunt fauna, and uncover hidden volcanic caves.

---

## 🌟 Key Gameplay Systems

### 1. Realistic 3D Tropical Environment & Weather
- **Procedural Island Geography**: Multi-octave Simplex noise terrain featuring golden sandy beaches, lush coastal jungles, rocky ravines, freshwater rivers/lagoons, hidden caves, and mountain crags.
- **Dynamic 24-Hour Day/Night Cycle**: Realistic celestial orbital progression with moving Sun & Moon, corona halos, atmospheric gradient sky dome, and 1,400 twinkling stars.
- **Dynamic Tropical Weather**: Real-time atmospheric shifts between **Clear Skies**, **Overcast Clouds**, **Tropical Rain**, and **Thunderstorms** with lightning flashes and thunderclaps.
- **Gerstner Wave Ocean**: Multi-octave Gerstner wave displacement, crystal cyan-to-sapphire depth gradient, shoreline foam, underwater caustics, and swimming buoyancy.

### 2. Complete Fauna & Hunting System
- **Wild Deer**: Timid meadow grazers; raise head alertly at 18m; gallop away at high speed (8.2 m/s) when approached. Drops `raw_meat`, `animal_hide`, and `bone`.
- **Island Rabbits**: Fast hopping creatures on coastal slopes with twitching ears. Drops `raw_meat`, `fiber`, and `bone`.
- **Tropical Macaws & Birds**: Perch on ground boulders and take off with wing-flapping animations to soar in high-altitude thermals (24–36m). Drops `feathers` and `raw_meat`.
- **Reef Fish**: Swim in coastal shallows and freshwater lagoons with sinusoidal tail swishes; scatter when approached. Can be speared or fished with a rod. Drops `raw_fish`.
- **Jungle Vipers**: Venomous serpents with articulated 8-segment bodies; rear up and hiss at 5m; strike for poison damage at <2.2m. Drops `snake_skin` and `raw_meat`.
- **Wild Boars**: Aggressive jungle predators that charge at 6.5 m/s and gore players with ivory tusks. Drops `raw_meat`, `animal_hide`, and `bone`.
- **Coastal Crabs**: Shoreline scavengers with sideways scuttling animations. Drops `raw_crab`.
- **Campfire Cooking**: Roast raw game at campfires into nutritious meals:
  - 🥩 Raw Meat $\to$ Roasted Meat Steak (+55 Hunger, +30 Health)
  - 🐠 Raw Reef Fish $\to$ Grilled Reef Fish (+42 Hunger, +22 Health)
  - 🦀 Raw Crab $\to$ Roasted Crab Meat (+35 Hunger, +15 Health)

### 3. Base Construction & Snapping
- **Quick-Bar Mode (<kbd>B</kbd>)**: Real-time holographic preview with grid snapping, elevation alignment, and placement collision validation (Green = Valid, Red = Obstructed).
- **Structures**:
  - **Campfire**: Heat source, light, and cooking grill.
  - **Lean-to Shelter & Bed**: Sleep safely until morning (06:00 AM) and regenerate vitality.
  - **Storage Box**: 12-slot persistent container for excess items and resources.
  - **Wood Foundation**: Elevated stilt platform for base building.
  - **Wood Wall & Doorway**: Modular timber walls with an interactive hinged door (<kbd>E</kbd>).
  - **Thatched Roof**: Angled canopy for weather protection.
  - **Rainwater Basin**: Passively collects clean fresh drinking water during tropical showers.

### 4. Survival Vitals & Statistics
- **Health**: Depleted by starvation, dehydration, drowning, falls, and predator attacks.
- **Hunger & Thirst**: Metabolic drain over time, accelerated by sprinting and midday heat. Soothed by tropical rain.
- **Stamina**: Governs sprinting, jumping, and weapon exertion. Regenerates faster when resting.
- **Interactive Tutorial Questline**: Guides new castaways from scavenging crash crates to forging axes, spears, hunting, campfire cooking, and constructing their first shelter.
- **Persistent Statistics**: Tracks days lived, distance traveled, resources gathered, wildlife hunted, items crafted, and meals cooked.

---

## 🕹️ Controls

| Key | Action |
| :--- | :--- |
| <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> | Move / Strafe |
| <kbd>Shift</kbd> | Sprint (consumes stamina) |
| <kbd>Space</kbd> | Jump / Swim to Surface |
| <kbd>Mouse Look</kbd> | Look around (Pointer Lock) |
| <kbd>Left Click</kbd> | Attack / Spear Thrust / Chop / Mine / Place Structure |
| <kbd>Right Click</kbd> | Eat Food / Drink Water / Cancel Placement |
| <kbd>E</kbd> | Contextual Interact (Scavenge, Gather, Drink, Cook, Sleep, Open Door) |
| <kbd>1</kbd> - <kbd>6</kbd> | Select Hotbar Item (or Mouse Wheel) |
| <kbd>Tab</kbd> / <kbd>I</kbd> | Open Backpack & Crafting Screen |
| <kbd>B</kbd> | Toggle Base Construction Quick-Bar |
| <kbd>R</kbd> | Rotate Building Blueprint by 45° |
| <kbd>Esc</kbd> | Pause Menu |

---

## 🛠️ Developer & Debug Mode

Launch the debug version with PowerShell:
```powershell
Start-Process "http://localhost:5173/?debug=true"
```

| Debug Hotkey | Function |
| :--- | :--- |
| <kbd>F1</kbd> | Give 20x all resources, tools, hunting spear, and meats |
| <kbd>F2</kbd> | Fast-forward time (+3 Hours) |
| <kbd>F3</kbd> or <kbd>`</kbd> | Toggle live HUD Debug Monitor (coordinates, FPS, targeted entity) |
| <kbd>F4</kbd> | God Mode (refills Health, Hunger, Thirst, Stamina to 100%) |
| <kbd>F5</kbd> | Cycle Weather (Clear $\to$ Cloudy $\to$ Rain $\to$ Storm) |

---

## 💻 Local Development

1. Clone repository:
   ```bash
   git clone https://github.com/1HUMZA1/It-survives.git
   cd It-survives
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

*Crafted with Three.js & modern WebGL.*
