// ============================================================
// HiPython — useProgress hook for tracking lesson progress
// ============================================================

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getUnlockableBadges } from '../data/achievements';
import type { UserProgress, LessonProgress, TypingRecord, TypingStats } from '../types';

export const defaultTypingStats: TypingStats = {
  totalScore: 0,
  totalPracticeTime: 0,
  totalKeystrokes: 0,
  bestWpm: 0,
  bestAccuracy: 0,
  bestCombo: 0,
  currentStreak: 0,
  lastPracticeDate: '',
  records: [],
  level: 1,
};

const defaultProgress: UserProgress = {
  completedLessons: {},
  unlockedBadges: [],
  totalStars: 0,
  typingStats: defaultTypingStats,
};

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<UserProgress>(
    'progress',
    defaultProgress,
  );

  /** Get progress for a specific lesson */
  const getLessonProgress = useCallback(
    (lessonId: string): LessonProgress | undefined => {
      return progress.completedLessons[lessonId];
    },
    [progress],
  );

  /** Mark a lesson as completed with a star rating */
  const completeLesson = useCallback(
    (lessonId: string, stars: number, code: string) => {
      setProgress((prev) => {
        const existing = prev.completedLessons[lessonId];
        const prevStars = existing?.stars ?? 0;
        const newStars = Math.max(prevStars, stars); // never downgrade

        const updated: LessonProgress = {
          lessonId,
          completed: true,
          stars: newStars,
          attempts: (existing?.attempts ?? 0) + 1,
          lastCode: code,
        };

        const totalStars =
          prev.totalStars - prevStars + newStars;

        const nextProgress: UserProgress = {
          ...prev,
          completedLessons: {
            ...prev.completedLessons,
            [lessonId]: updated,
          },
          totalStars,
        };

        // Auto-unlock course achievements
        const newBadges = getUnlockableBadges(nextProgress);
        const allBadges = [
          ...new Set([...prev.unlockedBadges, ...newBadges]),
        ];

        return {
          ...nextProgress,
          unlockedBadges: allBadges,
        };
      });
    },
    [setProgress],
  );

  /** Save code without marking complete (draft) */
  const saveCode = useCallback(
    (lessonId: string, code: string) => {
      setProgress((prev) => {
        const existing = prev.completedLessons[lessonId];
        return {
          ...prev,
          completedLessons: {
            ...prev.completedLessons,
            [lessonId]: {
              lessonId,
              completed: existing?.completed ?? false,
              stars: existing?.stars ?? 0,
              attempts: (existing?.attempts ?? 0) + 1,
              lastCode: code,
            },
          },
        };
      });
    },
    [setProgress],
  );

  /** Check if all prerequisites are met */
  const canAccess = useCallback(
    (prerequisites: string[]): boolean => {
      if (prerequisites.length === 0) return true;
      return prerequisites.every(
        (id) => progress.completedLessons[id]?.completed,
      );
    },
    [progress],
  );

  /** Get completion rate for a series */
  const getSeriesProgress = useCallback(
    (series: string, totalLessons: number): number => {
      const prefix = series === 'main' ? 'l' : series;
      const completed = Object.values(progress.completedLessons).filter(
        (lp) => lp.lessonId.startsWith(prefix) && lp.completed,
      ).length;
      return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
    },
    [progress],
  );

  /** Add a typing practice record and update stats */
  const addTypingRecord = useCallback(
    (record: TypingRecord) => {
      setProgress((prev) => {
        const stats = prev.typingStats ?? defaultTypingStats;

        // Update streak
        const today = new Date().toISOString().slice(0, 10);
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        let newStreak = stats.currentStreak;
        if (stats.lastPracticeDate === today) {
          // Already practiced today, keep streak
        } else if (stats.lastPracticeDate === yesterday) {
          newStreak = stats.currentStreak + 1;
        } else {
          newStreak = 1;
        }

        const newStats: TypingStats = {
          totalScore: stats.totalScore + record.score,
          totalPracticeTime: stats.totalPracticeTime + record.duration,
          totalKeystrokes: stats.totalKeystrokes + record.totalKeystrokes,
          bestWpm: Math.max(stats.bestWpm, record.wpm),
          bestAccuracy: Math.max(stats.bestAccuracy, record.accuracy),
          bestCombo: Math.max(stats.bestCombo, record.maxCombo),
          currentStreak: newStreak,
          lastPracticeDate: today,
          records: [record, ...(stats.records ?? [])].slice(0, 50),
          level: stats.level,
        };

        // Check typing level upgrade
        newStats.level = getTypingLevel(newStats.totalScore);

        // Auto-unlock typing badges
        const newBadges = getTypingBadges(newStats);
        const allBadges = [
          ...new Set([...prev.unlockedBadges, ...newBadges]),
        ];

        // totalStars didn't include typing stars before
        const newTotalStars = prev.totalStars + record.stars;

        return {
          ...prev,
          typingStats: newStats,
          unlockedBadges: allBadges,
          totalStars: newTotalStars,
        };
      });
    },
    [setProgress],
  );

  /** Reset all progress (with confirmation) */
  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, [setProgress]);

  return {
    progress,
    getLessonProgress,
    completeLesson,
    saveCode,
    canAccess,
    getSeriesProgress,
    addTypingRecord,
    resetProgress,
  };
}

// ============================================================
// Typing level lookup
// ============================================================

const TYPING_LEVELS: { minScore: number; level: number }[] = [
  { minScore: 0, level: 1 },
  { minScore: 100, level: 2 },
  { minScore: 300, level: 3 },
  { minScore: 800, level: 4 },
  { minScore: 2000, level: 5 },
  { minScore: 5000, level: 6 },
  { minScore: 12000, level: 7 },
  { minScore: 30000, level: 8 },
];

function getTypingLevel(totalScore: number): number {
  let level = 1;
  for (const tl of TYPING_LEVELS) {
    if (totalScore >= tl.minScore) {
      level = tl.level;
    }
  }
  return level;
}

// ============================================================
// Typing badge auto-check
// ============================================================

function getTypingBadges(stats: TypingStats): string[] {
  const badges: string[] = [];
  if (stats.records.length >= 1) badges.push('typing_first');
  if (stats.records.length >= 10) badges.push('typing_10_sessions');
  if (stats.currentStreak >= 7) badges.push('typing_streak_7');
  if (stats.bestWpm >= 20) badges.push('typing_wpm_20');
  if (stats.bestAccuracy >= 0.95) badges.push('typing_accuracy_95');
  if (stats.bestCombo >= 30) badges.push('typing_combo_30');
  if (stats.bestAccuracy >= 0.95 && stats.bestWpm >= 20) badges.push('typing_perfect');
  if (stats.level >= 5) badges.push('typing_level_5');
  if (stats.totalScore >= 1000) badges.push('typing_1000_score');
  return badges;
}