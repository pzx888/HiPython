// ============================================================
// HiPython — StoryMap component (story level progress map)
// ============================================================

import type { Lesson } from '../../types';
import type { LessonProgress } from '../../types';
import styles from './StoryMap.module.css';

interface StoryMapProps {
  episodes: Lesson[];
  progress: Record<string, LessonProgress>;
  currentEpisodeId?: string;
  onSelectEpisode: (id: string) => void;
}

export function StoryMap({
  episodes,
  progress,
  currentEpisodeId,
  onSelectEpisode,
}: StoryMapProps) {
  return (
    <div className={styles.storyMap}>
      <h3 className={styles.title}>📜 冒险旅程</h3>
      <div className={styles.chapterList}>
        {episodes.map((ep, index) => {
          const lp = progress[ep.id];
          const isCompleted = lp?.completed;
          const isCurrent = ep.id === currentEpisodeId;
          // A chapter is accessible if previous chapter is completed or it's the first one
          const canAccess = index === 0 ||
            progress[episodes[index - 1]?.id]?.completed;

          return (
            <button
              key={ep.id}
              className={`${styles.chapterNode} ${
                isCurrent ? styles.current : ''
              } ${isCompleted ? styles.completed : ''} ${
                !canAccess ? styles.locked : ''
              }`}
              onClick={() => canAccess && onSelectEpisode(ep.id)}
              disabled={!canAccess}
              title={!canAccess ? '先完成前面的关卡！' : ep.title}
            >
              <span className={styles.nodeIcon}>
                {isCompleted ? '✅' : !canAccess ? '🔒' : '📍'}
              </span>
              <div className={styles.nodeInfo}>
                <span className={styles.nodeTitle}>
                  第{index + 1}关：{ep.title.replace(/^第.+?：/, '')}
                </span>
                {isCompleted && (
                  <span className={styles.nodeStars}>
                    {'⭐'.repeat(lp.stars)}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}