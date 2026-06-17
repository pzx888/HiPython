// ============================================================
// HiPython — Sound engine using Web Audio API
// ============================================================

let audioCtx: AudioContext | null = null;
let isMuted = false;

export function setMuted(muted: boolean): void {
  isMuted = muted;
  if (muted && audioCtx) {
    audioCtx.suspend();
  } else if (!muted && audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

export function getMuted(): boolean {
  return isMuted;
}

function getAudioContext(): AudioContext | null {
  if (isMuted) return null;
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  // Resume if suspended (browser autoplay policy)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// C major pentatonic scale frequencies, octave 4-6
const NOTE_FREQS = [
  261.63, 293.66, 329.63, 349.23, 392.00, // C4, D4, E4, F4, G4
  440.00, 493.88, 523.25, 587.33, 659.25, // A4, B4, C5, D5, E5
  698.46, 783.99, 880.00, 987.77, 1046.50, // F5, G5, A5, B5, C6
];

/** Play a pleasant piano-like tone for a correct keypress.
 *  index: position in the current word (0, 1, 2, ...) — higher = brighter tone */
export function playCorrect(index: number): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const freq = NOTE_FREQS[index % NOTE_FREQS.length];
    const now = ctx.currentTime;

    // Carrier oscillator (sine wave — soft piano tone)
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Gain envelope — quick attack, fast decay
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.02);  // attack
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3); // decay

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  } catch {
    // Silently ignore — audio is best-effort
  }
}

/** Play a short error buzz */
export function playError(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(180, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  } catch {
    // Silently ignore
  }
}

/** Play an ascending arpeggio on task completion */
export function playTaskComplete(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 — C major arpeggio

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.1);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now + i * 0.1);
      gain.gain.linearRampToValueAtTime(0.3, now + i * 0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.45);
    });
  } catch {
    // Silently ignore
  }
}

/** Play a victory melody on session completion */
export function playSessionComplete(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    // Happy ascending melody
    const melody = [
      523.25, 587.33, 659.25, 783.99, // C5 D5 E5 G5
      783.99, 880.00, 1046.50,         // G5 A5 C6
    ];

    melody.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.12);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.3, now + i * 0.12 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.55);
    });
  } catch {
    // Silently ignore
  }
}

/** Play a special sound for combo milestones (10, 20, 30...) */
export function playComboMilestone(combo: number): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    // Two-note chime
    const freq = 440 + (combo / 10) * 110; // Higher combo = higher chime
    const freqs = [freq, freq * 1.5];

    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.08);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.3, now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.35);
    });
  } catch {
    // Silently ignore
  }
}