// ============================================================
// HiPython — TypingResults component
// Session completion summary panel with stats and stars
// ============================================================

import type { TypingRecord, TypingLevelDef, TypingSession } from '../../types';
import styles from './TypingResults.module.css';

interface TypingResultsProps {
  record: TypingRecord;
  session: TypingSession;
  currentLevel: TypingLevelDef;
  onContinue: () => void;
  onRetry: () => void;
}

export function TypingResults({
  record,
  session,
  currentLevel,
  onContinue,
  onRetry,
}: TypingResultsProps) {
  const stars = [1, 2, 3];

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}分${s}秒`;
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <h2 className={styles.title}>🎉 练习完成！</h2>
        <p className={styles.sessionName}>{session.title}</p>

        {/* Stars */}
        <div className={styles.starsRow}>
          {stars.map((s) => (
            <span
              key={s}
              className={`${styles.star} ${s <= record.stars ? styles.earned : styles.empty}`}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Stats grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>总得分</span>
            <span className={styles.statValue}>+{record.score}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>准确率</span>
            <span className={styles.statValue}>{Math.round(record.accuracy * 100)}%</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>速度</span>
            <span className={styles.statValue}>{record.wpm} WPM</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>最高连击</span>
            <span className={styles.statValue}>🔥 {record.maxCombo}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>总击键</span>
            <span className={styles.statValue}>{record.totalKeystrokes}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>用时</span>
            <span className={styles.statValue}>{formatTime(record.duration)}</span>
          </div>
        </div>

        {/* Level info */}
        <div className={styles.levelInfo}>
          <span className={styles.levelIcon}>{currentLevel.icon}</span>
          <span className={styles.levelTitle}>
            {currentLevel.title} (Lv.{currentLevel.level})
          </span>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.retryBtn} onClick={onRetry}>
            🔄 再练一次
          </button>
          <button className={styles.continueBtn} onClick={onContinue}>
            📋 选择其他练习
          </button>
        </div>
      </div>
    </div>
  );
}