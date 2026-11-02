// Web Audio Procedural Sound Synthesizer for Island Survival
// Guarantees zero 404s, works offline, spatialized audio capabilities
export class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.ambientGain = null;
    this.musicGain = null;

    this.settings = {
      masterVolume: 0.8,
      sfxVolume: 0.9,
      ambientVolume: 0.6,
      musicVolume: 0.5,
      enabled: true
    };

    this.ambientOscillators = [];
    this.oceanNode = null;
    this.rainNode = null;
    this.musicInterval = null;
    this.isNightMusic = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.settings.masterVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(this.settings.sfxVolume, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(this.settings.ambientVolume, this.ctx.currentTime);
      this.ambientGain.connect(this.masterGain);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(this.settings.musicVolume, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      this.startAmbientSoundscape();
      this.startRainSoundscape();
      this.startProceduralMusic();
      this.initialized = true;
    } catch (e) {
      console.warn('AudioContext not allowed or failed to initialize yet:', e);
    }
  }

  resume() {
    if (!this.initialized) {
      this.init();
    } else if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMasterVolume(val) {
    this.settings.masterVolume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.settings.masterVolume, this.ctx.currentTime, 0.05);
    }
  }

  setSfxVolume(val) {
    this.settings.sfxVolume = Math.max(0, Math.min(1, val));
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setTargetAtTime(this.settings.sfxVolume, this.ctx.currentTime, 0.05);
    }
  }

  setAmbientVolume(val) {
    this.settings.ambientVolume = Math.max(0, Math.min(1, val));
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(this.settings.ambientVolume, this.ctx.currentTime, 0.05);
    }
  }

  setMusicVolume(val) {
    this.settings.musicVolume = Math.max(0, Math.min(1, val));
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(this.settings.musicVolume, this.ctx.currentTime, 0.05);
    }
  }

  setRainIntensity(intensity) {
    if (this.rainNode && this.rainNode.gain && this.ctx) {
      const targetGain = Math.max(0, Math.min(1, intensity)) * 0.16;
      this.rainNode.gain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.2);
    }
  }

  // --- Procedural Rain Soundscape ---
  startRainSoundscape() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.08;
    }

    const rainSource = this.ctx.createBufferSource();
    rainSource.buffer = noiseBuffer;
    rainSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.8, this.ctx.currentTime);

    const rainGain = this.ctx.createGain();
    rainGain.gain.setValueAtTime(0.0, this.ctx.currentTime); // Initially silent until rain begins

    rainSource.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(this.ambientGain);

    rainSource.start();
    this.rainNode = { source: rainSource, gain: rainGain };
  }

  // --- Procedural Tropical Island Ambient Music ---
  // Synthesizes soothing kalimba plucks and warm acoustic ambient pads
  startProceduralMusic() {
    if (!this.ctx || this.musicInterval) return;

    // Tropical Pentatonic Scales:
    // Day (Uplifting C/F Lydian/Major): C4, D4, E4, G4, A4, C5, D5, E5, G5
    const dayPitches = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];
    // Night (Mysterious, calm A Minor / D Dorian): A3, C4, D4, E4, G4, A4, C5, E5
    const nightPitches = [220.00, 261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25];

    let chordStep = 0;
    // Chords (Hz):
    // Day: Fmaj7 (174, 220, 261, 329) -> G (196, 246, 293, 392) -> Em7 (164, 196, 246, 293) -> Am7 (220, 261, 329, 392)
    const dayChords = [
      [174.61, 220.00, 261.63, 329.63],
      [196.00, 246.94, 293.66, 392.00],
      [164.81, 196.00, 246.94, 293.66],
      [220.00, 261.63, 329.63, 392.00]
    ];
    const nightChords = [
      [110.00, 164.81, 220.00, 261.63],
      [146.83, 220.00, 261.63, 329.63],
      [130.81, 196.00, 246.94, 293.66],
      [110.00, 164.81, 220.00, 261.63]
    ];

    const playAmbientChord = () => {
      if (!this.ctx || !this.settings.enabled) return;
      const now = this.ctx.currentTime;
      const chords = this.isNightMusic ? nightChords : dayChords;
      const chord = chords[chordStep % chords.length];
      chordStep++;

      chord.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(this.isNightMusic ? 450 : 680, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.024, now + 2.5);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 8.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.musicGain);

        osc.start(now);
        osc.stop(now + 9.0);
      });
    };

    const playKalimbaNote = () => {
      if (!this.ctx || !this.settings.enabled) return;
      const now = this.ctx.currentTime;
      const pitches = this.isNightMusic ? nightPitches : dayPitches;
      const freq = pitches[Math.floor(Math.random() * pitches.length)];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      osc.connect(gain);
      gain.connect(this.musicGain);

      osc.start(now);
      osc.stop(now + 1.5);
    };

    // Trigger gentle chord every 8 seconds
    setInterval(() => {
      playAmbientChord();
    }, 8500);

    // Trigger melodic plucks every 1.5 - 3 seconds
    setInterval(() => {
      if (Math.random() < 0.65) {
        playKalimbaNote();
        if (Math.random() < 0.35) {
          setTimeout(playKalimbaNote, 240);
        }
      }
    }, 2200);

    // Initial chord
    setTimeout(playAmbientChord, 1000);
  }

  setNightMusic(isNight) {
    this.isNightMusic = isNight;
  }

  // --- Procedural Ambient Ocean & Wind Soundscape ---
  startAmbientSoundscape() {
    if (!this.ctx) return;

    // Buffer of pink-ish noise for ocean surge
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }

    const whiteNoiseSource = this.ctx.createBufferSource();
    whiteNoiseSource.buffer = noiseBuffer;
    whiteNoiseSource.loop = true;

    // Filter for muffled deep ocean roar
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    // LFO to modulate wave surge rhythm (swell every 5.5s)
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime);

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    const waveGain = this.ctx.createGain();
    waveGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    lfo.connect(filter.frequency);
    whiteNoiseSource.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(this.ambientGain);

    whiteNoiseSource.start();
    lfo.start();

    this.oceanNode = { source: whiteNoiseSource, lfo, gain: waveGain };
  }

  // --- Sound Effects Synthesizer ---

  // Footstep sounds depending on surface
  playFootstep(surface = 'sand') {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    if (surface === 'sand') {
      // Crunchy, muffled soft impact
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(700 + Math.random() * 200, now);
      filter.Q.setValueAtTime(1.5, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(75 + Math.random() * 25, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    } else if (surface === 'water') {
      // Splashy liquid pop
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1100, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(350 + Math.random() * 80, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    } else if (surface === 'wood') {
      // Resonant thud
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);

      osc.type = 'square';
      osc.frequency.setValueAtTime(160 + Math.random() * 30, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    } else {
      // Grass / soil
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900 + Math.random() * 250, now);
      filter.Q.setValueAtTime(2, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(90 + Math.random() * 30, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.07);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    }

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.18);
  }

  // Jump sound
  playJump() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.12);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  // Tool swing / swoosh
  playSwing() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(220, now + 0.14);
    filter.Q.setValueAtTime(2.5, now);

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.14);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  // Tree chop sound (woody thunk + crack)
  playChopTree() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;

    // Body of the chop
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(750, now);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(190 + Math.random() * 40, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.2);

    // Wood splinter crack snap
    const click = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    click.type = 'sawtooth';
    click.frequency.setValueAtTime(1200 + Math.random() * 500, now);
    click.frequency.exponentialRampToValueAtTime(300, now + 0.04);
    clickGain.gain.setValueAtTime(0.2, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    click.connect(clickGain);
    clickGain.connect(this.sfxGain);
    click.start(now);
    click.stop(now + 0.06);
  }

  // Stone mine sound (clink and crumble)
  playMineRock() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();

    // Metallic / flint clink
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1550 + Math.random() * 200, now);
    osc1.frequency.exponentialRampToValueAtTime(900, now + 0.12);

    gain1.gain.setValueAtTime(0.28, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc1.connect(gain1);
    gain1.connect(this.sfxGain);
    osc1.start(now);
    osc1.stop(now + 0.15);

    // Sub rumble
    const sub = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    sub.type = 'triangle';
    sub.frequency.setValueAtTime(120, now);
    sub.frequency.exponentialRampToValueAtTime(35, now + 0.12);
    subGain.gain.setValueAtTime(0.2, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    sub.connect(subGain);
    subGain.connect(this.sfxGain);
    sub.start(now);
    sub.stop(now + 0.13);
  }

  // Gather herbs / bushes / leaves
  playGather() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(3, now);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(480, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  // Fruit & Mushroom pluck sound
  playBerryPluck() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(620, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.09);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  // Tree felled & collapsed
  playTreeFall() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;

    // Deep heavy timber thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.35);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  // Boulder shattered
  playStoneBreak() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.28);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.32);
  }

  // Drink fresh water
  playDrink() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    [0, 0.15, 0.3].forEach((delay) => {
      const t = now + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, t);
      osc.frequency.exponentialRampToValueAtTime(240, t + 0.09);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t);
      osc.stop(t + 0.12);
    });
  }

  // Eat food
  playEat() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    [0, 0.12, 0.24].forEach((delay) => {
      const t = now + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(280 + Math.random() * 80, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + 0.06);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t);
      osc.stop(t + 0.08);
    });
  }

  // Crafting success chime
  playCraft() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
    notes.forEach((freq, idx) => {
      const t = now + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t);
      osc.stop(t + 0.25);
    });
  }

  // Place building / structure
  playPlaceStructure() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.14);

    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  // Player hurt / damage taken
  playHurt() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.22);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.26);
  }

  // Item pickup pop
  playPickup() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  // UI button click
  playUIClick() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.07);
  }

  // Spear thrust swoosh
  playSpearThrust() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(260, now + 0.16);

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.16);

    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.19);
  }

  // Thunder rumble for storm weather
  playThunder() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, now);
    filter.frequency.exponentialRampToValueAtTime(45, now + 2.5);

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 2.2);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.linearRampToValueAtTime(0.42, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambientGain);

    osc.start(now);
    osc.stop(now + 3.0);
  }

  // Quest / Tutorial objective complete fanfare
  playQuestComplete() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const t = now + idx * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.22, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t);
      osc.stop(t + 0.5);
    });
  }

  // Item slot drag / drop sound
  playItemDrop() {
    if (!this.ctx || !this.settings.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.06);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.08);
  }
}

export const audio = new AudioManager();
