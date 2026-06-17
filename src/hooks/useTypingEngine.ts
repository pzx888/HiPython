// ============================================================
// HiPython — useTypingEngine hook
// Core typing practice logic
// ============================================================
import { useState, useCallback, useRef, useEffect } from 'react';
import type { TypingSession, TypingTask, TaskStats, TypingRecord } from '../types';
import {
  playCorrect,
  playError,
  playTaskComplete,
  playComboMilestone,
  playSessionComplete,
} from '../engine/sound';

interface UseTypingEngineReturn {
  // State
  phase: 'idle' | 'running' | 'complete';
  currentTaskIndex: number;
  currentCharIndex: number;
  typed: string;
  isError: boolean;

  // Stats
  combo: number;
  maxCombo: number;
  accuracy: number;
  taskStatsList: TaskStats[];
  totalScore: number;
  startTime: number | null;
  elapsedSeconds: number;

  // Next key hint (for VirtualKeyboard)
  nextExpectedChar: string;

  // Actions
  start: () => void;
  handleKeyPress: (char: string) => void;
  getRecord: () => TypingRecord;
}

/** Map a KeyboardEvent key + shift to the target character */
function mapKeyToChar(key: string, shiftKey: boolean): string {
  if (key.length === 1) {
    // Single character key — shift handling for letters
    if (shiftKey && key >= 'a' && key <= 'z') {
      return key.toUpperCase();
    }
    return key;
  }

  // Special named keys
  if (key === 'Enter') return '\n';
  if (key === 'Tab') return '\t';

  return key;
}

// Score calculation per task
function calcTaskScore(
  text: string,
  correct: number,
  errors: number,
  maxCombo: number,
  _duration: number,
): number {
  const total = correct + errors;
  if (total === 0) return 0;

  const accuracy = total > 0 ? correct / total : 0;

  // Length multiplier
  let lengthMult = 1.0;
  if (text.length > 15) lengthMult = 2.0;
  else if (text.length > 5) lengthMult = 1.5;

  // Base score
  const base = 10 * lengthMult;

  // Accuracy bonus
  const accBonus = accuracy * accuracy;

  // Combo bonus (capped at 40)
  const comboBonus = Math.min(maxCombo, 20) * 2;

  return Math.round(base * accBonus + comboBonus);
}

// Calculate WPM
function calcWpm(
  totalKeystrokes: number,
  durationSeconds: number,
): number {
  if (durationSeconds <= 0) return 0;
  // Standard: 5 characters = 1 word
  return Math.round((totalKeystrokes / 5) * (60 / durationSeconds));
}

// Calculate stars for a session
function calcStars(
  accuracy: number,
  maxCombo: number,
  completedAll: boolean,
): number {
  if (!completedAll) return 0;
  if (accuracy >= 0.95 && maxCombo >= 15) return 3;
  if (accuracy >= 0.80) return 2;
  return 1;
}

export function useTypingEngine(
  session: TypingSession,
): UseTypingEngineReturn {
  const [phase, setPhase] = useState<'idle' | 'running' | 'complete'>('idle');
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [isError, setIsError] = useState(false);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [taskStatsList, setTaskStatsList] = useState<TaskStats[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Per-task tracking refs (avoid re-renders during keystrokes)
  const taskCorrectRef = useRef(0);
  const taskErrorsRef = useRef(0);
  const taskMaxComboRef = useRef(0);
  const taskStartTimeRef = useRef<number>(0);
  const currentComboRef = useRef(0);
  const totalCorrectRef = useRef(0);
  const totalKeystrokesRef = useRef(0);

  const currentTask: TypingTask | undefined = session.tasks[currentTaskIndex];

  // Timer
  useEffect(() => {
    if (phase !== 'running' || !startTime) return;
    const timer = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, startTime]);

  /** Next expected character (for keyboard hint) */
  const nextExpectedChar: string =
    phase === 'running' && currentTask
      ? currentTask.text[currentCharIndex] ?? ''
      : '';

  /** Overall accuracy */
  const accuracy: number =
    totalKeystrokesRef.current > 0
      ? totalCorrectRef.current / totalKeystrokesRef.current
      : 0;

  /** Start the session */
  const start = useCallback(() => {
    setPhase('running');
    setCurrentTaskIndex(0);
    setCurrentCharIndex(0);
    setTyped('');
    setIsError(false);
    setCombo(0);
    setMaxCombo(0);
    setTotalScore(0);
    setTaskStatsList([]);
    const now = Date.now();
    setStartTime(now);
    setElapsedSeconds(0);
    taskCorrectRef.current = 0;
    taskErrorsRef.current = 0;
    taskMaxComboRef.current = 0;
    taskStartTimeRef.current = now;
    currentComboRef.current = 0;
    totalCorrectRef.current = 0;
    totalKeystrokesRef.current = 0;
  }, []);

  /** Finish current task and move to next */
  const completeCurrentTask = useCallback(() => {
    const task = session.tasks[currentTaskIndex];
    const taskDuration =
      (Date.now() - taskStartTimeRef.current) / 1000;

    const taskScore = calcTaskScore(
      task.text,
      taskCorrectRef.current,
      taskErrorsRef.current,
      taskMaxComboRef.current,
      taskDuration,
    );

    const taskStats: TaskStats = {
      taskId: task.id,
      text: task.text,
      totalKeystrokes: taskCorrectRef.current + taskErrorsRef.current,
      correctKeystrokes: taskCorrectRef.current,
      errors: taskErrorsRef.current,
      maxCombo: taskMaxComboRef.current,
      accuracy:
        taskCorrectRef.current + taskErrorsRef.current > 0
          ? taskCorrectRef.current /
            (taskCorrectRef.current + taskErrorsRef.current)
          : 0,
      score: taskScore,
      duration: taskDuration,
    };

    setTotalScore((prev) => prev + taskScore);
    setTaskStatsList((prev) => [...prev, taskStats]);

    playTaskComplete();

    // Move to next task
    const nextIndex = currentTaskIndex + 1;
    if (nextIndex >= session.tasks.length) {
      // All tasks complete
      setPhase('complete');
      setCurrentCharIndex(task.text.length); // Mark current as complete
      playSessionComplete();
    } else {
      setCurrentTaskIndex(nextIndex);
      setCurrentCharIndex(0);
      setTyped('');
      setIsError(false);
      // Reset per-task tracking
      taskCorrectRef.current = 0;
      taskErrorsRef.current = 0;
      taskMaxComboRef.current = 0;
      taskStartTimeRef.current = Date.now();
    }
  }, [currentTaskIndex, session.tasks]);

  /** Handle a key press — takes the mapped character */
  const handleKeyPress = useCallback(
    (char: string) => {
      if (phase !== 'running' || !currentTask) return;

      const expected = currentTask.text[currentCharIndex];

      // Handle backspace
      if (char === 'Backspace') {
        if (currentCharIndex > 0) {
          // Go back one character, restore combo state is hard,
          // so we just allow going back; combo unaffected
          setCurrentCharIndex((prev) => prev - 1);
          setTyped((prev) => prev.slice(0, -1));
          setIsError(false);
        }
        return;
      }

      // Ignore modifier-only keys
      if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab', 'Escape'].includes(char)) {
        return;
      }

      // Check if the typed character matches expected
      if (char === expected || (char === ' ' && expected === ' ')) {
        // Correct!
        totalKeystrokesRef.current += 1;
        totalCorrectRef.current += 1;
        taskCorrectRef.current += 1;
        currentComboRef.current += 1;

        if (currentComboRef.current > taskMaxComboRef.current) {
          taskMaxComboRef.current = currentComboRef.current;
        }
        if (currentComboRef.current > maxCombo) {
          setMaxCombo(currentComboRef.current);
        }

        setCombo(currentComboRef.current);
        setIsError(false);

        const newIndex = currentCharIndex + 1;
        setTyped((prev) => prev + char);
        setCurrentCharIndex(newIndex);

        playCorrect(newIndex - 1);

        // Combo milestone
        if (currentComboRef.current > 0 && currentComboRef.current % 10 === 0) {
          playComboMilestone(currentComboRef.current);
        }

        // Check if task is complete
        if (newIndex >= currentTask.text.length) {
          completeCurrentTask();
        }
      } else {
        // Incorrect!
        totalKeystrokesRef.current += 1;
        taskErrorsRef.current += 1;
        currentComboRef.current = 0;
        setCombo(0);
        setIsError(true);

        playError();

        // Reset error state after a brief flash
        setTimeout(() => setIsError(false), 300);
      }
    },
    [phase, currentTask, currentCharIndex, maxCombo, completeCurrentTask],
  );

  /** Build the final record */
  const getRecord = useCallback((): TypingRecord => {
    const duration = startTime ? (Date.now() - startTime) / 1000 : 0;
    const totalCorrect = totalCorrectRef.current;
    const totalKeystrokes = totalKeystrokesRef.current;
    const acc =
      totalKeystrokes > 0 ? totalCorrect / totalKeystrokes : 0;
    const wpm = calcWpm(totalKeystrokes, duration);
    const stars = calcStars(acc, maxCombo, phase === 'complete');

    return {
      sessionId: session.id,
      date: new Date().toISOString(),
      totalTasks: session.tasks.length,
      completedTasks: session.tasks.length, // All completed if we're here
      totalKeystrokes,
      correctKeystrokes: totalCorrect,
      errors: totalKeystrokes - totalCorrect,
      accuracy: acc,
      maxCombo,
      score: totalScore,
      duration: Math.round(duration),
      wpm,
      stars,
    };
  }, [startTime, maxCombo, totalScore, session, phase]);

  return {
    phase,
    currentTaskIndex,
    currentCharIndex,
    typed,
    isError,

    combo,
    maxCombo,
    accuracy,
    taskStatsList,
    totalScore,
    startTime,
    elapsedSeconds,

    nextExpectedChar,

    start,
    handleKeyPress,
    getRecord,
  };
}

export { mapKeyToChar };