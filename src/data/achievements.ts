// ============================================================
// HiPython — Achievements data (centralized badge definitions)
// ============================================================

import type { UserProgress } from '../types';
import { allLessons } from './courses';

// Lesson IDs per level (used for level-completion checks)
const LEVEL_LESSONS: Record<number, string[]> = {};
allLessons.forEach((l) => {
  if (l.series === 'main') {
    (LEVEL_LESSONS[l.difficulty] ??= []).push(l.id);
  }
});

export interface AchievementDef {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'course' | 'typing';
  /** Check if this achievement should be unlocked */
  check: (progress: UserProgress) => boolean;
}

/** Complete list of all achievements */
export const ACHIEVEMENTS: AchievementDef[] = [
  // ========================================
  // Course achievements
  // ========================================
  {
    id: 'first_run',
    name: '初次运行',
    icon: '▶️',
    description: '第一次运行 Python 代码',
    category: 'course',
    check: (p) => Object.keys(p.completedLessons).length > 0,
  },
  {
    id: 'first_print',
    name: '开口说话',
    icon: '🗣️',
    description: '使用 print() 输出文字',
    category: 'course',
    check: (p) => Object.keys(p.completedLessons).length > 0,
  },
  {
    id: 'first_math',
    name: '小小数学家',
    icon: '🧮',
    description: '使用 Python 做数学运算',
    category: 'course',
    check: (p) => p.completedLessons['l1_3']?.completed ?? false,
  },
  {
    id: 'first_var',
    name: '记忆大师',
    icon: '📦',
    description: '创建和使用变量',
    category: 'course',
    check: (p) => p.completedLessons['l1_4']?.completed ?? false,
  },
  {
    id: 'complete_l1',
    name: '初学者',
    icon: '🌱',
    description: '完成 L1 全部课程',
    category: 'course',
    check: (p) => levelCompleted(p, 1),
  },
  {
    id: 'complete_l2',
    name: '循环大师',
    icon: '🔄',
    description: '完成 L2 全部课程',
    category: 'course',
    check: (p) => levelCompleted(p, 2),
  },
  {
    id: 'complete_l3',
    name: '逻辑达人',
    icon: '🧠',
    description: '完成 L3 全部课程',
    category: 'course',
    check: (p) => levelCompleted(p, 3),
  },
  {
    id: 'complete_l4',
    name: '数据专家',
    icon: '📊',
    description: '完成 L4 全部课程',
    category: 'course',
    check: (p) => levelCompleted(p, 4),
  },
  {
    id: 'complete_l5',
    name: '函数大师',
    icon: '🎩',
    description: '完成 L5 全部课程',
    category: 'course',
    check: (p) => levelCompleted(p, 5),
  },
  {
    id: 'all_stars',
    name: '完美通关',
    icon: '🌟',
    description: '所有课程都拿到 3 颗星',
    category: 'course',
    check: (p) => {
      const completed = Object.values(p.completedLessons).filter(
        (lp) => lp.completed,
      );
      if (completed.length < allLessons.length) return false;
      return completed.every((lp) => lp.stars >= 3);
    },
  },

  // ========================================
  // Typing achievements (checked by useProgress)
  // ========================================
  {
    id: 'typing_first',
    name: '初识键盘',
    icon: '⌨️',
    description: '完成第一次打字练习',
    category: 'typing',
    check: (p) => p.typingStats.records.length >= 1,
  },
  {
    id: 'typing_10_sessions',
    name: '坚持不懈',
    icon: '📅',
    description: '累计完成 10 次打字练习',
    category: 'typing',
    check: (p) => p.typingStats.records.length >= 10,
  },
  {
    id: 'typing_streak_7',
    name: '天天向上',
    icon: '🔥',
    description: '连续 7 天练习打字',
    category: 'typing',
    check: (p) => p.typingStats.currentStreak >= 7,
  },
  {
    id: 'typing_wpm_20',
    name: '键盘小飞手',
    icon: '💨',
    description: '最快速度达到 20 WPM',
    category: 'typing',
    check: (p) => p.typingStats.bestWpm >= 20,
  },
  {
    id: 'typing_accuracy_95',
    name: '一丝不苟',
    icon: '🎯',
    description: '单次练习准确率达到 95%',
    category: 'typing',
    check: (p) => p.typingStats.bestAccuracy >= 0.95,
  },
  {
    id: 'typing_combo_30',
    name: '连击大师',
    icon: '✨',
    description: '达成单次 30 连击',
    category: 'typing',
    check: (p) => p.typingStats.bestCombo >= 30,
  },
  {
    id: 'typing_level_5',
    name: '闪电打字员',
    icon: '⚡',
    description: '打字等级达到 5 级',
    category: 'typing',
    check: (p) => p.typingStats.level >= 5,
  },
  {
    id: 'typing_1000_score',
    name: '积分破千',
    icon: '💰',
    description: '累计打字积分超过 1000',
    category: 'typing',
    check: (p) => p.typingStats.totalScore >= 1000,
  },
  {
    id: 'typing_perfect',
    name: '又快又准',
    icon: '💎',
    description: '准确率 95% 且速度达到 20 WPM',
    category: 'typing',
    check: (p) => p.typingStats.bestAccuracy >= 0.95 && p.typingStats.bestWpm >= 20,
  },
];

/** Check if all lessons in a given level are completed */
function levelCompleted(progress: UserProgress, level: number): boolean {
  const ids = LEVEL_LESSONS[level];
  if (!ids || ids.length === 0) return false;
  return ids.every((id) => progress.completedLessons[id]?.completed);
}

/** Get the set of achievement IDs that should be unlocked given progress */
export function getUnlockableBadges(progress: UserProgress): string[] {
  return ACHIEVEMENTS.filter((a) => a.check(progress)).map((a) => a.id);
}