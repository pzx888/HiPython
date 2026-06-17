// ============================================================
// HiPython — LessonView component (left sidebar lesson content)
// ============================================================

import type { Lesson } from '../../types';
import { Hints } from './Hints';
import styles from './LessonView.module.css';

interface LessonViewProps {
  lesson: Lesson;
}

export function LessonView({ lesson }: LessonViewProps) {
  return (
    <div className={styles.lessonView}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.badges}>
          <span className={styles.difficultyBadge} data-level={lesson.difficulty}>
            {'⭐'.repeat(lesson.difficulty)}
          </span>
          <span className={styles.timeBadge}>
            ⏱️ {lesson.estimatedTime}分钟
          </span>
        </div>
        <h2 className={styles.title}>{lesson.title}</h2>
      </div>

      {/* Learning objectives */}
      <div className={styles.objectives}>
        <h3 className={styles.objectivesTitle}>🎯 本节目标</h3>
        <ul>
          {lesson.objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>

      {/* Content sections */}
      <div className={styles.content}>
        {/* Intro */}
        <p className={styles.intro}>{lesson.content.intro}</p>

        {lesson.content.sections.map((section, i) => (
          <ContentBlock key={i} section={section} />
        ))}

        {/* Summary */}
        <div className={styles.summary}>
          <h3>📝 小结</h3>
          <p>{lesson.content.summary}</p>
        </div>
      </div>

      {/* Hints */}
      <Hints hints={lesson.hints} />
    </div>
  );
}

function ContentBlock({
  section,
}: {
  section: Lesson['content']['sections'][number];
}) {
  switch (section.type) {
    case 'text':
      return (
        <div className={styles.textBlock}>
          {section.title && <h3>{section.title}</h3>}
          <p>{section.body}</p>
        </div>
      );
    case 'code':
      return (
        <div className={styles.codeBlock}>
          {section.title && <h4 className={styles.codeTitle}>{section.title}</h4>}
          <pre className={styles.codeExample}>
            <code>{section.body}</code>
          </pre>
        </div>
      );
    case 'tip':
      return (
        <div className={styles.tipBlock}>
          <span className={styles.tipIcon}>💡</span>
          <div>
            {section.title && <strong>{section.title}</strong>}
            <p>{section.body}</p>
          </div>
        </div>
      );
    case 'challenge':
      return (
        <div className={styles.challengeBlock}>
          <h3>🏆 挑战任务</h3>
          <p>{section.body}</p>
        </div>
      );
    default:
      return <p>{section.body}</p>;
  }
}