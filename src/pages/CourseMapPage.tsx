// ============================================================
// HiPython — CourseMap page
// ============================================================

import { useNavigate } from 'react-router-dom';
import { allLessons } from '../data/courses';
import { useProgress } from '../hooks/useProgress';
import { CourseMap } from '../components/lesson/CourseMap';

export function CourseMapPage() {
  const navigate = useNavigate();
  const { progress } = useProgress();

  return (
    <CourseMap
      lessons={allLessons}
      progress={progress.completedLessons}
      onSelectLesson={(id) => navigate(`/lesson/${id}`)}
    />
  );
}