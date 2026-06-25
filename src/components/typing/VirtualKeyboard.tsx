// ============================================================
// HiPython — VirtualKeyboard component
// Renders a US QWERTY keyboard with key state highlighting
// ============================================================

import { useEffect, useRef, useState } from 'react';
import styles from './VirtualKeyboard.module.css';

// Keyboard row definitions
// Each key: { label, code, width (in grid units, default 1) }
const KEYBOARD_ROWS = [
  [
    { label: '`', code: 'Backquote' },
    { label: '1', code: 'Digit1' },
    { label: '2', code: 'Digit2' },
    { label: '3', code: 'Digit3' },
    { label: '4', code: 'Digit4' },
    { label: '5', code: 'Digit5' },
    { label: '6', code: 'Digit6' },
    { label: '7', code: 'Digit7' },
    { label: '8', code: 'Digit8' },
    { label: '9', code: 'Digit9' },
    { label: '0', code: 'Digit0' },
    { label: '-', code: 'Minus' },
    { label: '=', code: 'Equal' },
    { label: '⌫', code: 'Backspace', width: 2 },
  ],
  [
    { label: 'Tab', code: 'Tab', width: 1.5 },
    { label: 'Q', code: 'KeyQ' },
    { label: 'W', code: 'KeyW' },
    { label: 'E', code: 'KeyE' },
    { label: 'R', code: 'KeyR' },
    { label: 'T', code: 'KeyT' },
    { label: 'Y', code: 'KeyY' },
    { label: 'U', code: 'KeyU' },
    { label: 'I', code: 'KeyI' },
    { label: 'O', code: 'KeyO' },
    { label: 'P', code: 'KeyP' },
    { label: '[', code: 'BracketLeft' },
    { label: ']', code: 'BracketRight' },
    { label: '\\', code: 'Backslash', width: 1.5 },
  ],
  [
    { label: 'Caps', code: 'CapsLock', width: 1.75 },
    { label: 'A', code: 'KeyA' },
    { label: 'S', code: 'KeyS' },
    { label: 'D', code: 'KeyD' },
    { label: 'F', code: 'KeyF' },
    { label: 'G', code: 'KeyG' },
    { label: 'H', code: 'KeyH' },
    { label: 'J', code: 'KeyJ' },
    { label: 'K', code: 'KeyK' },
    { label: 'L', code: 'KeyL' },
    { label: ';', code: 'Semicolon' },
    { label: "'", code: 'Quote' },
    { label: 'Enter', code: 'Enter', width: 2.25 },
  ],
  [
    { label: 'Shift', code: 'ShiftLeft', width: 2.25 },
    { label: 'Z', code: 'KeyZ' },
    { label: 'X', code: 'KeyX' },
    { label: 'C', code: 'KeyC' },
    { label: 'V', code: 'KeyV' },
    { label: 'B', code: 'KeyB' },
    { label: 'N', code: 'KeyN' },
    { label: 'M', code: 'KeyM' },
    { label: ',', code: 'Comma' },
    { label: '.', code: 'Period' },
    { label: '/', code: 'Slash' },
    { label: 'Shift', code: 'ShiftRight', width: 2.25 },
  ],
  [
    { label: 'Space', code: 'Space', width: 6 },
  ],
];

interface VirtualKeyboardProps {
  /** The next character the user should type (lowercase) */
  nextExpectedChar: string;
  /** Changes when advancing to a new task — clears stale key highlights */
  taskIndex: number;
  /** The last key that was pressed (event.code) */
  lastKeyCode: string | null;
  /** Whether the last keypress was correct */
  lastKeyCorrect: boolean | null;
  /** Whether audio is muted */
  muted: boolean;
  onToggleMute: () => void;
}

export function VirtualKeyboard({
  nextExpectedChar,
  taskIndex,
  lastKeyCode,
  lastKeyCorrect,
  muted,
  onToggleMute,
}: VirtualKeyboardProps) {
  // Track which keys are currently "pressed" (for brief visual feedback)
  const [activeCodes, setActiveCodes] = useState<Record<string, 'correct' | 'error'>>({});

  // Timeout refs for clearing active states
  const timersRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    if (!lastKeyCode) return;

    const keyCode = lastKeyCode;
    const state = lastKeyCorrect ? 'correct' : 'error';
    setActiveCodes((prev) => ({ ...prev, [keyCode]: state }));

    if (timersRef.current[keyCode]) {
      clearTimeout(timersRef.current[keyCode]);
    }

    timersRef.current[keyCode] = setTimeout(() => {
      setActiveCodes((prev) => {
        const next = { ...prev };
        delete next[keyCode];
        return next;
      });
      delete timersRef.current[keyCode];
    }, 350);
  }, [lastKeyCode, lastKeyCorrect]);

  // Unmount only — do NOT clear all timers when lastKeyCode changes
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      Object.values(timers).forEach((t) => clearTimeout(t));
    };
  }, []);

  // New task → wipe any lingering highlights
  useEffect(() => {
    Object.values(timersRef.current).forEach((t) => clearTimeout(t));
    timersRef.current = {};
    setActiveCodes({});
  }, [taskIndex]);

  // Determine which code corresponds to the next expected char
  function getCodeForChar(char: string): string | null {
    if (!char || char.length === 0) return null;
    const lower = char.toLowerCase();
    // Direct lookup
    for (const row of KEYBOARD_ROWS) {
      for (const key of row) {
        if (key.label.toLowerCase() === lower) {
          return key.code;
        }
        // Special cases
        if (lower === ' ' && key.code === 'Space') return 'Space';
        if (lower === '\n' && key.code === 'Enter') return 'Enter';
        if (lower === '\t' && key.code === 'Tab') return 'Tab';
      }
    }
    return null;
  }

  const hintCode = getCodeForChar(nextExpectedChar);

  return (
    <div className={styles.keyboard}>
      {KEYBOARD_ROWS.map((row, ri) => (
        <div key={ri} className={styles.row}>
          {row.map((key) => {
            const state = activeCodes[key.code];
            const isHint = hintCode === key.code;

            let keyClass = styles.key;
            if (state === 'correct') keyClass += ` ${styles.correct}`;
            else if (state === 'error') keyClass += ` ${styles.error}`;
            if (isHint) keyClass += ` ${styles.hint}`;
            if (key.code === 'Space') keyClass += ` ${styles.spaceKey}`;
            if (key.code === 'Backspace') keyClass += ` ${styles.wideKey}`;

            const style: React.CSSProperties = key.width
              ? { flex: key.width }
              : { flex: 1 };

            return (
              <div key={key.code} className={keyClass} style={style}>
                <span className={styles.keyLabel}>{key.label}</span>
                {/* Home row bumps */}
                {(key.code === 'KeyF' || key.code === 'KeyJ') && (
                  <span className={styles.homeBump} />
                )}
              </div>
            );
          })}
        </div>
      ))}

      {/* Mute toggle */}
      <button
        className={styles.muteButton}
        onClick={onToggleMute}
        title={muted ? '开启音效' : '静音'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}