// ============================================================
// HiPython — TypingProgress component
// Shows progress bar and real-time stats during typing
// ============================================================

import styles from './TypingProgress.module.css';

interface TypingProgressProps {
  currentTaskIndex: number;
  totalTasks: number;
  combo: number;
  maxCombo: number;
  totalScore: number;
  accuracy: number;
  elapsedSeconds: number;
}

export function TypingProgress({
  currentTaskIndex,
  totalTasks,
  combo,
  maxCombo,
  totalScore,
  accuracy,
  elapsedSeconds,
}: TypingProgressProps) {
  const progressPct = totalTasks > 0
    ? Math.round((currentTaskIndex / totalTasks) * 100)
    : 0;

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const comboClass = combo >= 20
    ? styles.comboHot
    : combo >= 10
    ? styles.comboWarm
    : '';

  return (
    <div className={styles.container}>
      {/* Progress bar */}
      <div className={styles.progressWrapper}>
        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className={styles.progressLabel}>
          {currentTaskIndex} / {totalTasks}
        </span>
      </div>

      {/* Real-time stats */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>得分</span>
          <span className={styles.statValue}>⭐ {totalScore}</span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statLabel}>连击</span>
          <span className={`${styles.statValue} ${comboClass}`}>
            {combo > 0 ? `🔥 x${combo}` : '-'}
          </span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statLabel}>最高连击</span>
          <span className={styles.statValue}>
            {maxCombo > 0 ? `✨ ${maxCombo}` : '-'}
          </span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statLabel}>准确率</span>
          <span className={styles.statValue}>
            {Math.round(accuracy * 100)}%
          </span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statLabel}>时间</span>
          <span className={styles.statValue}>{formatTime(elapsedSeconds)}</span>
        </div>
      </div>
    </div>
  );
}