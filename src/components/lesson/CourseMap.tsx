// ============================================================
// HiPython — CourseMap component (visual lesson roadmap)
// ============================================================

import type { Lesson } from '../../types';
import type { LessonProgress } from '../../types';
import styles from './CourseMap.module.css';

interface CourseMapProps {
  lessons: Lesson[];
  progress: Record<string, LessonProgress>;
  currentLessonId?: string;
  onSelectLesson: (lessonId: string) => void;
}

export function CourseMap({
  lessons,
  progress,
  currentLessonId,
  onSelectLesson,
}: CourseMapProps) {
  // Group lessons by difficulty level
  const levels = new Map<number, Lesson[]>();
  lessons.forEach((lesson) => {
    const existing = levels.get(lesson.difficulty) || [];
    existing.push(lesson);
    levels.set(lesson.difficulty, existing);
  });

  const levelNames: Record<number, string> = {
    1: '🌱 L1：初识 Python',
    2: '🌿 L2：循环的魔法',
    3: '🌳 L3：判断与选择',
    4: '🏗️ L4：数据的容器',
    5: '🏰 L5：函数的艺术',
  };

  return (
    <div className={styles.courseMap}>
      <h2 className={styles.title}>🗺️ 课程地图</h2>
      <div className={styles.levels}>
        {Array.from(levels.entries()).map(([level, levelLessons]) => (
          <div key={level} className={styles.level}>
            <h3 className={styles.levelTitle}>
              {levelNames[level] || `Level ${level}`}
            </h3>
            <div className={styles.lessonGrid}>
              {levelLessons.map((lesson) => {
                const lp = progress[lesson.id];
                const isCurrent = lesson.id === currentLessonId;
                const isCompleted = lp?.completed;
                const starsCount = lp?.stars ?? 0;

                return (
                  <button
                    key={lesson.id}
                    className={`${styles.lessonCard} ${
                      isCurrent ? styles.currentCard : ''
                    } ${isCompleted ? styles.completedCard : ''}`}
                    onClick={() => onSelectLesson(lesson.id)}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardNumber}>
                        {isCompleted ? '✅' : '📝'}
                      </span>
                      {isCurrent && (
                        <span className={styles.currentBadge}>当前</span>
                      )}
                    </div>
                    <h4 className={styles.cardTitle}>{lesson.title}</h4>
                    <div className={styles.cardMeta}>
                      <span>⏱️ {lesson.estimatedTime}分钟</span>
                      {isCompleted && (
                        <span className={styles.stars}>
                          {'⭐'.repeat(starsCount)}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}