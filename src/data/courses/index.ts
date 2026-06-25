// ============================================================
// HiPython — Course registry (all lessons indexed)
// ============================================================

import type { Lesson } from '../../types';
import { l1Lessons } from './main/l1';
import { l2Lessons } from './main/l2';
import { l3Lessons } from './main/l3';
import { l4Lessons } from './main/l4';
import { l5Lessons } from './main/l5';
import { l6Lessons } from './main/l6';
import { storyLessons } from './story';
import { gameLessons } from './game';

// All lessons in order
export const allLessons: Lesson[] = [
  ...l1Lessons,
  ...l2Lessons,
  ...l3Lessons,
  ...l4Lessons,
  ...l5Lessons,
  ...l6Lessons,
  ...storyLessons,
  ...gameLessons,
];

/** All story episodes */
export { storyLessons };

/** All game challenges */
export { gameLessons };

/** Get a lesson by ID */
export function getLesson(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

/** Get all lessons in a specific level */
export function getLessonsByLevel(level: number): Lesson[] {
  return allLessons.filter((l) => l.difficulty === level);
}

/** Get the next lesson after the given ID */
export function getNextLesson(currentId: string): Lesson | undefined {
  const idx = allLessons.findIndex((l) => l.id === currentId);
  if (idx === -1 || idx >= allLessons.length - 1) return undefined;
  return allLessons[idx + 1];
}

/** Get the previous lesson before the given ID */
export function getPrevLesson(currentId: string): Lesson | undefined {
  const idx = allLessons.findIndex((l) => l.id === currentId);
  if (idx <= 0) return undefined;
  return allLessons[idx - 1];
}