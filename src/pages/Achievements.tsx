// ============================================================
// HiPython — Achievements page
// ============================================================

import { useState } from 'react';
import { useUserProfile } from '../context/UserProfileContext';
import { useProgress } from '../hooks/useProgress';
import { ACHIEVEMENTS, getUnlockableBadges } from '../data/achievements';
import styles from './Achievements.module.css';

export function AchievementsPage() {
  const { currentProfile } = useUserProfile();
  const { progress, resetProgress } = useProgress();
  const [showConfirm, setShowConfirm] = useState(false);

  // Compute which badges are unlocked: saved + runtime-checked
  const runtimeBadges = getUnlockableBadges(progress);
  const unlockedBadges = new Set([
    ...progress.unlockedBadges,
    ...runtimeBadges,
  ]);

  const totalEarned = ACHIEVEMENTS.filter((b) => unlockedBadges.has(b.id)).length;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🏆 我的成就</h1>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>⭐ {progress.totalStars}</span>
          <span className={styles.statLabel}>总星星</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>🏅 {totalEarned}</span>
          <span className={styles.statLabel}>徽章 / {ACHIEVEMENTS.length}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>
            📝 {Object.values(progress.completedLessons).filter(
              (lp) => lp.completed
            ).length}
          </span>
          <span className={styles.statLabel}>已完成课程</span>
        </div>
      </div>

      <div className={styles.badgeGrid}>
        {ACHIEVEMENTS.map((badge) => {
          const unlocked = unlockedBadges.has(badge.id);
          return (
            <div
              key={badge.id}
              className={`${styles.badgeCard} ${unlocked ? styles.unlocked : styles.locked}`}
            >
              <span className={styles.badgeEmoji}>
                {unlocked ? badge.icon : '🔒'}
              </span>
              <h3 className={styles.badgeName}>{badge.name}</h3>
              <p className={styles.badgeDesc}>{badge.description}</p>
              {!unlocked && <div className={styles.lockOverlay} />}
            </div>
          );
        })}
      </div>

      {/* Reset button */}
      <div className={styles.resetSection}>
        {!showConfirm ? (
          <button
            className={styles.resetButton}
            onClick={() => setShowConfirm(true)}
          >
            🗑️ 重置当前用户的学习记录
          </button>
        ) : (
          <div className={styles.confirmBox}>
            <p className={styles.confirmText}>
              ⚠️ 确定要清空「{currentProfile.name}」的学习记录吗？<br />
              <strong>该用户的星星、徽章、代码都会被删除，无法恢复！</strong>
            </p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmYes}
                onClick={() => {
                  resetProgress();
                  setShowConfirm(false);
                }}
              >
                确定重置
              </button>
              <button
                className={styles.confirmNo}
                onClick={() => setShowConfirm(false)}
              >
                取消
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}