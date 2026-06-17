// ============================================================
// HiPython — Hints component (progressive reveal)
// ============================================================

import { useState } from 'react';
import styles from './Hints.module.css';

interface HintsProps {
  hints: string[];
}

export function Hints({ hints }: HintsProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  if (!hints || hints.length === 0) return null;

  const showHint = (level: number) => {
    if (level <= revealedCount) {
      setRevealedCount(level - 1); // hide
    } else {
      setRevealedCount(level);
    }
  };

  return (
    <div className={styles.hintsSection}>
      <h3 className={styles.hintsTitle}>💡 需要一点提示吗？</h3>
      {hints.map((hint, i) => (
        <div key={i} className={styles.hintItem}>
          <button
            className={styles.hintButton}
            onClick={() => showHint(i + 1)}
          >
            {i + 1 <= revealedCount ? '🔽' : '▶️'} 提示 {i + 1}
          </button>
          {i + 1 <= revealedCount && (
            <p className={styles.hintContent}>{hint}</p>
          )}
        </div>
      ))}
    </div>
  );
}