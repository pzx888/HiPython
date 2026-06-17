// ============================================================
// HiPython — Arena page (Code Arena — game challenges)
// ============================================================

import { gameLessons } from '../data/courses';
import { useProgress } from '../hooks/useProgress';
import { useNavigate } from 'react-router-dom';
import styles from './Arena.module.css';

export function ArenaPage() {
  const navigate = useNavigate();
  const { progress } = useProgress();

  const completedCount = gameLessons.filter(
    (g) => progress.completedLessons[g.id]?.completed,
  ).length;

  const totalStars = gameLessons.reduce(
    (sum, g) => sum + (progress.completedLessons[g.id]?.stars ?? 0),
    0,
  );

  const handleStart = (id: string) => {
    navigate(`/lesson/${id}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>🏟️ Code Arena</h1>
        <p className={styles.subtitle}>
          代码竞技场 — 挑战你的编程极限！
        </p>
        <div className={styles.stats}>
          <span>🏆 {completedCount}/{gameLessons.length} 关已通关</span>
          <span>⭐ {totalStars} 颗星</span>
        </div>
      </div>

      <div className={styles.challengeGrid}>
        {gameLessons.map((challenge, index) => {
          const lp = progress.completedLessons[challenge.id];
          const isCompleted = lp?.completed;
          const isLocked =
            index > 0 &&
            !progress.completedLessons[gameLessons[index - 1].id]?.completed;

          return (
            <div
              key={challenge.id}
              className={`${styles.challengeCard} ${
                isCompleted ? styles.completed : ''
              } ${isLocked ? styles.locked : ''}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.challengeNum}>
                  {isCompleted ? '✅' : isLocked ? '🔒' : '⚔️'}
                </span>
                <span className={styles.difficulty}>
                  {'⭐'.repeat(challenge.difficulty)}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{challenge.title}</h3>
              <p className={styles.cardDesc}>
                {challenge.content.intro.split('\n').slice(0, 2).join(' ')}
              </p>
              <div className={styles.cardMeta}>
                <span>⏱️ {challenge.estimatedTime}分钟</span>
                {isCompleted && (
                  <span className={styles.starsEarned}>
                    {'⭐'.repeat(lp.stars)}
                  </span>
                )}
              </div>
              <button
                className={styles.startBtn}
                onClick={() => handleStart(challenge.id)}
                disabled={isLocked}
              >
                {isLocked
                  ? '先通关前面'
                  : isCompleted
                    ? '再挑战一次'
                    : '开始挑战'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}