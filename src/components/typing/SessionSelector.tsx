// ============================================================
// HiPython — SessionSelector component
// Card-based session selection screen for typing practice
// ============================================================

import type { TypingSession, TypingStats } from '../../types';
import { getLevelByScore } from '../../data/typing';
import styles from './SessionSelector.module.css';

interface SessionSelectorProps {
  sessions: TypingSession[];
  typingStats: TypingStats;
  onSelect: (session: TypingSession) => void;
}

export function SessionSelector({
  sessions,
  typingStats,
  onSelect,
}: SessionSelectorProps) {
  const currentLevel = getLevelByScore(typingStats.totalScore);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.levelBadge}>
          <span className={styles.levelIcon}>{currentLevel.icon}</span>
          <span className={styles.levelTitle}>{currentLevel.title}</span>
          <span className={styles.levelNum}>Lv.{currentLevel.level}</span>
        </div>
        <div className={styles.headerStats}>
          <span>⭐ {typingStats.totalScore} 积分</span>
          <span>📝 {typingStats.records.length} 次练习</span>
        </div>
      </div>

      {/* Session cards */}
      <div className={styles.grid}>
        {sessions.map((session) => {
          const isUnlocked = session.difficulty <= currentLevel.level + 1;

          return (
            <button
              key={session.id}
              className={`${styles.card} ${!isUnlocked ? styles.locked : ''}`}
              onClick={() => isUnlocked && onSelect(session)}
              disabled={!isUnlocked}
            >
              <div className={styles.cardDifficulty}>
                {'⭐'.repeat(session.difficulty)}
              </div>
              <h3 className={styles.cardTitle}>{session.title}</h3>
              <p className={styles.cardDesc}>{session.description}</p>
              <div className={styles.cardMeta}>
                <span>{session.tasks.length} 条练习</span>
                <span>约 {Math.round(session.tasks.length * 0.4)} 分钟</span>
              </div>
              {!isUnlocked && (
                <div className={styles.lockOverlay}>
                  <span className={styles.lockIcon}>🔒</span>
                  <span className={styles.lockText}>
                    达到 {currentLevel.level + 1} 级后解锁
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}