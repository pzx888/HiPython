// ============================================================
// HiPython — Typing level definitions
// ============================================================
import type { TypingLevelDef } from '../../types';

export const typingLevels: TypingLevelDef[] = [
  { level: 1, title: '键盘新手', minScore: 0, icon: '⌨️' },
  { level: 2, title: '字母小达人', minScore: 100, icon: '🔤' },
  { level: 3, title: '指法小能手', minScore: 300, icon: '👆' },
  { level: 4, title: '键盘小飞侠', minScore: 800, icon: '🚀' },
  { level: 5, title: '闪电打字员', minScore: 2000, icon: '⚡' },
  { level: 6, title: '代码输入师', minScore: 5000, icon: '💻' },
  { level: 7, title: '键盘大师', minScore: 12000, icon: '🎹' },
  { level: 8, title: '键盘传奇', minScore: 30000, icon: '🏆' },
];

export function getLevelByScore(score: number): TypingLevelDef {
  let current = typingLevels[0];
  for (const level of typingLevels) {
    if (score >= level.minScore) {
      current = level;
    }
  }
  return current;
}

export function getNextLevel(score: number): TypingLevelDef | null {
  for (const level of typingLevels) {
    if (score < level.minScore) {
      return level;
    }
  }
  return null; // Already at max level
}