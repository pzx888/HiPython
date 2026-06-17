// ============================================================
// HiPython — TypingTarget component
// Displays the current target text with per-character state
// ============================================================

import type { TypingTask } from '../../types';
import styles from './TypingTarget.module.css';

interface TypingTargetProps {
  task: TypingTask;
  currentCharIndex: number;
  isError: boolean;
}

export function TypingTarget({ task, currentCharIndex, isError }: TypingTargetProps) {
  const chars = [...task.text];

  return (
    <div className={styles.container}>
      <div className={styles.hint}>{task.hint}</div>
      <div className={`${styles.target} ${isError ? styles.shake : ''}`}>
        {chars.map((char, i) => {
          let stateClass: string;
          if (i < currentCharIndex) {
            stateClass = styles.correct;
          } else if (i === currentCharIndex) {
            stateClass = isError ? styles.error : styles.current;
          } else {
            stateClass = styles.pending;
          }

          // Render space as visible block
          const display = char === ' ' ? '␣' : char;

          return (
            <span key={i} className={`${styles.char} ${stateClass}`}>
              {display}
            </span>
          );
        })}
      </div>

      {/* Cursor indicator: show after last char when all completed */}
      {currentCharIndex >= chars.length && (
        <div className={styles.complete}>✅ 完成！</div>
      )}
    </div>
  );
}