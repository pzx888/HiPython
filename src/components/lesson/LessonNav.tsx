// ============================================================
// HiPython — LessonNav component (prev/next lesson)
// ============================================================

import styles from './LessonNav.module.css';

interface LessonNavProps {
  prevId?: string;
  nextId?: string;
  prevTitle?: string;
  nextTitle?: string;
  onNavigate: (lessonId: string) => void;
  /** Disable the "next" button — e.g. game levels require completion */
  nextDisabled?: boolean;
  /** Tooltip shown when next is disabled */
  nextDisabledHint?: string;
}

export function LessonNav({
  prevId,
  nextId,
  prevTitle,
  nextTitle,
  onNavigate,
  nextDisabled,
  nextDisabledHint,
}: LessonNavProps) {
  return (
    <div className={styles.lessonNav}>
      {prevId ? (
        <button
          className={styles.navButton}
          onClick={() => onNavigate(prevId)}
        >
          ← {prevTitle || '上一课'}
        </button>
      ) : (
        <div />
      )}
      {nextId && (
        <button
          className={`${styles.navButton} ${styles.nextButton} ${nextDisabled ? styles.nextDisabled : ''}`}
          onClick={() => !nextDisabled && onNavigate(nextId)}
          disabled={nextDisabled}
          title={nextDisabled ? (nextDisabledHint || '请先完成当前关卡！') : (nextTitle || '下一课')}
        >
          {nextDisabled ? '🔒 先通关再前进' : `${nextTitle || '下一课'} →`}
        </button>
      )}
    </div>
  );
}
