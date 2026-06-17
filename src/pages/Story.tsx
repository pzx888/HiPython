// ============================================================
// HiPython — Story page (story mode overview + episode launcher)
// ============================================================

import { useNavigate } from 'react-router-dom';
import { storyLessons } from '../data/courses';
import { useProgress } from '../hooks/useProgress';
import { StoryMap } from '../components/story/StoryMap';
import styles from './Story.module.css';

export function StoryPage() {
  const navigate = useNavigate();
  const { progress } = useProgress();

  const handleSelectEpisode = (id: string) => {
    navigate(`/lesson/${id}`);
  };

  const completedCount = storyLessons.filter(
    (ep) => progress.completedLessons[ep.id]?.completed,
  ).length;

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>🐍 故事模式</h1>
        <p className={styles.subtitle}>
          和 Python 小蛇一起踏上代码世界的冒险旅程！
        </p>
        <div className={styles.progress}>
          已完成 {completedCount} / {storyLessons.length} 关
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${storyLessons.length > 0 ? (completedCount / storyLessons.length) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mapWrapper}>
          <StoryMap
            episodes={storyLessons}
            progress={progress.completedLessons}
            onSelectEpisode={handleSelectEpisode}
          />
        </div>

        <div className={styles.intro}>
          <h3>📖 故事简介</h3>
          <p>
            在神秘的代码世界里，Python 小蛇沉睡了。
            你需要用编程魔法唤醒它，然后一起穿越数字峡谷、
            走过三岔路口、探索魔法宝库，最后铸造属于自己的魔法杖！
          </p>
          <p>
            每一关都是一个编程挑战——学会新的 Python 技能，
            你就能帮小蛇克服一个又一个难关。
          </p>
          <p className={styles.cta}>
            🚀 准备好了吗？从第一关开始，唤醒 Python 小蛇！
          </p>
        </div>
      </div>
    </div>
  );
}