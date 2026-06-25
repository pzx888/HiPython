// ============================================================
// HiPython — App root with routing
// ============================================================

import { Routes, Route } from 'react-router-dom'
import { UserProfileProvider } from './context/UserProfileContext'
import { AppShell } from './components/layout/AppShell'
import { Home } from './pages/Home'
import { Lesson } from './pages/Lesson'
import { CourseMapPage } from './pages/CourseMapPage'
import { AchievementsPage } from './pages/Achievements'
import { TypingPage } from './pages/Typing'
import { StoryPage } from './pages/Story'
import { ArenaPage } from './pages/Arena'

export default function App() {
  return (
    <UserProfileProvider>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="/course-map" element={<CourseMapPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/arena" element={<ArenaPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/typing" element={<TypingPage />} />
        </Route>
      </Routes>
    </UserProfileProvider>
  )
}