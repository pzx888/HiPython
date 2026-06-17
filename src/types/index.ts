// ============================================================
// HiPython — Shared type definitions
// ============================================================

/** Difficulty levels 1-5 */
export type Difficulty = 1 | 2 | 3 | 4 | 5;

/** Course series */
export type Series = 'main' | 'story' | 'game';

/** A section within a lesson's teaching content */
export interface ContentSection {
  type: 'text' | 'code' | 'tip' | 'challenge' | 'image';
  title?: string;
  body: string; // markdown / plain text
}

/** Lesson content structure */
export interface LessonContent {
  intro: string; // opening hook — "Today we're going to build..."
  sections: ContentSection[];
  summary: string; // recap
}

/** Auto-check rule for validation */
export interface CodeCheck {
  description: string; // human-readable: "Your code should use print()"
  type: 'contains' | 'output_contains' | 'no_error' | 'max_lines';
  value?: string | number; // the string to look for, or max line count
}

/** A single lesson */
export interface Lesson {
  id: string;
  title: string;
  series: Series;
  difficulty: Difficulty;
  prerequisites: string[];
  estimatedTime: number; // minutes
  objectives: string[]; // learning objectives
  content: LessonContent;
  starterCode: string;
  solution: string;
  hints: string[]; // 3 progressive hints
  checks: CodeCheck[];
}

/** Achievement badge */
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji
  condition: string; // human-readable unlock condition
}

/** Progress for a single lesson */
export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  stars: number; // 0-3
  attempts: number;
  lastCode: string;
}

// ============================================================
// Typing practice types
// ============================================================

/** Typing practice difficulty */
export type TypingDifficulty = 1 | 2 | 3 | 4 | 5;

/** Typing practice content category */
export type TypingCategory = 'letters' | 'words' | 'python' | 'sentences';

/** A single typing task */
export interface TypingTask {
  id: string;
  text: string;
  category: TypingCategory;
  difficulty: TypingDifficulty;
  hint?: string;
}

/** A complete typing practice session (~5 min) */
export interface TypingSession {
  id: string;
  title: string;
  description: string;
  difficulty: TypingDifficulty;
  tasks: TypingTask[];
}

/** Per-task stats during a typing session */
export interface TaskStats {
  taskId: string;
  text: string;
  totalKeystrokes: number;
  correctKeystrokes: number;
  errors: number;
  maxCombo: number;
  accuracy: number;
  score: number;
  duration: number; // seconds
}

/** A single typing practice record */
export interface TypingRecord {
  sessionId: string;
  date: string;
  totalTasks: number;
  completedTasks: number;
  totalKeystrokes: number;
  correctKeystrokes: number;
  errors: number;
  accuracy: number;
  maxCombo: number;
  score: number;
  duration: number; // seconds
  wpm: number;
  stars: number;
}

/** Typing growth level definition */
export interface TypingLevelDef {
  level: number;
  title: string;
  minScore: number;
  icon: string;
}

/** User typing statistics */
export interface TypingStats {
  totalScore: number;
  totalPracticeTime: number;  // seconds
  totalKeystrokes: number;
  bestWpm: number;
  bestAccuracy: number;
  bestCombo: number;
  currentStreak: number;
  lastPracticeDate: string;
  records: TypingRecord[];
  level: number;
}

/** Overall user progress */
export interface UserProgress {
  completedLessons: Record<string, LessonProgress>;
  unlockedBadges: string[];
  totalStars: number;
  typingStats: TypingStats;
}

/** Execution result from Pyodide */
export interface ExecutionResult {
  stdout: string;
  error: string | null; // translated kid-friendly error, or null
  rawError: string | null; // original Python error (for debugging)
  success: boolean;
  turtleCommands: TurtleCommand[]; // turtle drawing instructions
  variables: Record<string, VariableInfo>; // user-defined variables
}

// ============================================================
// Turtle types
// ============================================================

/** A single turtle drawing command */
export interface TurtleCommand {
  type: TurtleCommandType;
  value?: number | string;
}

export type TurtleCommandType =
  | 'forward'
  | 'backward'
  | 'left'
  | 'right'
  | 'penup'
  | 'pendown'
  | 'color'
  | 'speed'
  | 'circle'
  | 'goto'
  | 'setheading'
  | 'clear'
  | 'done';

/** Turtle pen state for Canvas rendering */
export interface TurtleState {
  x: number;
  y: number;
  angle: number; // degrees, 0 = right, 90 = down (Canvas coords)
  penDown: boolean;
  color: string;
  speed: number; // 1-10, controls animation speed
}

// ============================================================
// Variable viewer types
// ============================================================

/** Info about a single Python variable */
export interface VariableInfo {
  name: string;
  type: string;
  value: string;
}