// ============================================================
// HiPython — Lesson page (three-column resizable layout)
// ============================================================
//
// Layout model:
//   [left: fixed] [resize] [center: flex:1] [resize] [right: fixed]
//
// When a panel is collapsed its width → 0 and the adjacent resize
// handle hides, so the center column reclaims the space naturally
// via flex:1.
// ============================================================

import { useState, useCallback, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLesson, getNextLesson, getPrevLesson } from '../data/courses';
import { usePyodide } from '../hooks/usePyodide';
import { useProgress } from '../hooks/useProgress';
import { CodeEditor, type CodeEditorHandle } from '../components/editor/CodeEditor';
import { CodeTemplates } from '../components/editor/CodeTemplates';
import { OutputPanel } from '../components/output/OutputPanel';
import { LessonView } from '../components/lesson/LessonView';
import { LessonNav } from '../components/lesson/LessonNav';
import { ResizeHandle } from '../components/layout/ResizeHandle';
import type { ExecutionResult, CodeCheck } from '../types';
import styles from './Lesson.module.css';

// ---- Default column widths ----
const LEFT_DEFAULT = 280;
const RIGHT_DEFAULT = 380;
const LEFT_MIN = 200;
const RIGHT_MIN = 260;

// ---- Collapse button (shown inside panel header) ----
function CollapseButton({
  direction,
  onClick,
  label,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  label: string;
}) {
  const arrow = direction === 'left' ? '◀' : '▶';
  return (
    <button
      className={styles.collapseBtn}
      onClick={onClick}
      title={`收起${label}`}
    >
      {arrow}
    </button>
  );
}

// ---- Expand tab (vertical strip shown when panel is collapsed) ----
function ExpandTab({
  label,
  icon,
  side,
  onClick,
}: {
  label: string;
  icon: string;
  side: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <div
      className={`${styles.expandTab} ${side === 'left' ? styles.expandTabLeft : styles.expandTabRight}`}
      onClick={onClick}
      title={`展开${label}`}
    >
      <span className={styles.expandIcon}>{icon}</span>
      <span className={styles.expandLabel}>{label}</span>
    </div>
  );
}

// ============================================================
export function Lesson() {
  const { lessonId = 'l1_1' } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { isReady, loadingMessage, runPython, load } = usePyodide();
  const { getLessonProgress, completeLesson, saveCode } = useProgress();

  const lesson = getLesson(lessonId);
  const prevLesson = getPrevLesson(lessonId);
  const nextLesson = getNextLesson(lessonId);

  const savedProgress = getLessonProgress(lessonId);
  const [code, setCode] = useState(
    savedProgress?.lastCode ?? lesson?.starterCode ?? '',
  );
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const [autocompleteOn, setAutocompleteOn] = useState(false);
  const [checkResults, setCheckResults] = useState<{ check: CodeCheck; passed: boolean }[] | null>(null);

  // ---- Column state ----
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [centerCollapsed, setCenterCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [leftWidth, setLeftWidth] = useState(LEFT_DEFAULT);
  const [rightWidth, setRightWidth] = useState(RIGHT_DEFAULT);

  const editorRef = useRef<CodeEditorHandle>(null);

  const handleInsertTemplate = useCallback((code: string) => {
    editorRef.current?.insertTemplate(code);
  }, []);

  // ---- Pyodide preload ----
  useEffect(() => {
    load();
  }, [load]);

  // ---- Reset when switching lessons ----
  useEffect(() => {
    if (savedProgress?.lastCode) {
      setCode(savedProgress.lastCode);
    } else if (lesson) {
      setCode(lesson.starterCode);
    }
    setResult(null);
    setJustCompleted(false);
    setCheckResults(null);
  }, [lessonId]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---- Resize handlers ----
  const handleResizeLeft = useCallback(
    (delta: number) => {
      if (leftCollapsed) return;
      setLeftWidth((w) => Math.max(LEFT_MIN, w + delta));
    },
    [leftCollapsed],
  );

  const handleResizeRight = useCallback(
    (delta: number) => {
      // Drag right divider: dragging left (negative delta) = growing center area = shrinking right panel
      if (rightCollapsed) return;
      setRightWidth((w) => Math.max(RIGHT_MIN, w - delta));
    },
    [rightCollapsed],
  );

  // ---- Run code ----
  const handleRun = useCallback(async () => {
    if (!code.trim() || isRunning) return;
    setIsRunning(true);
    setShowLoading(!isReady);
    const currentCode = code;
    try {
      const res = await runPython(currentCode);
      setResult(res);
      if (res.success) saveCode(lessonId, currentCode);

      // Evaluate checks against the just-run code + result
      if (lesson) {
        const results = lesson.checks.map((check) => {
          let passed = false;
          if (check.type === 'no_error') passed = !res.error;
          else if (check.type === 'contains' && check.value) passed = currentCode.includes(String(check.value));
          else if (check.type === 'output_contains' && check.value) passed = res.stdout.includes(String(check.value));
          else if (check.type === 'max_lines' && typeof check.value === 'number') {
            const lines = currentCode.split('\n').filter((l) => l.trim() !== '').length;
            passed = lines <= check.value;
          }
          return { check, passed };
        });
        setCheckResults(results);
      }
    } catch {
      setResult({
        stdout: '',
        error: '出了点意外问题…刷新页面再试试？',
        rawError: 'unknown',
        success: false,
        turtleCommands: [],
        variables: {},
      });
      setCheckResults(null);
    } finally {
      setIsRunning(false);
      setShowLoading(false);
    }
  }, [code, isRunning, isReady, runPython, lessonId, saveCode, lesson]);

  // ---- Complete lesson ----
  const handleComplete = useCallback(() => {
    let stars = 1;
    if (result?.success) {
      const checksPassed =
        lesson?.checks.filter((check) => {
          if (check.type === 'no_error') return !result.error;
          if (check.type === 'contains' && check.value) return code.includes(String(check.value));
          if (check.type === 'output_contains' && check.value)
            return result.stdout.includes(String(check.value));
          if (check.type === 'max_lines' && typeof check.value === 'number') {
            const lines = code.split('\n').filter((l) => l.trim() !== '').length;
            return lines <= check.value;
          }
          return false;
        }).length ?? 0;
      const totalChecks = lesson?.checks.length ?? 1;
      if (checksPassed === totalChecks) stars = 3;
      else if (checksPassed >= totalChecks / 2) stars = 2;
    }
    completeLesson(lessonId, stars, code);
    setJustCompleted(true);
  }, [result, code, lessonId, lesson?.checks, completeLesson]);

  const isLessonCompleted = justCompleted || savedProgress?.completed;
  const allChecksPassed = checkResults && checkResults.length > 0 && checkResults.every(r => r.passed);

  const handleNavigate = useCallback(
    (id: string) => navigate(`/lesson/${id}`),
    [navigate],
  );

  if (!lesson) {
    return (
      <div className={styles.notFound}>
        <h2>😕 找不到这节课</h2>
        <button onClick={() => navigate('/course-map')}>回到课程地图</button>
      </div>
    );
  }

  return (
    <div className={styles.lessonPage}>
      {/* ═══ Loading overlay ═══ */}
      {showLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingBox}>
            <span className={styles.loadingEmoji}>⏳</span>
            <p className={styles.loadingText}>{loadingMessage}</p>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} />
            </div>
          </div>
        </div>
      )}

      {/* ═══ Celebration overlay ═══ */}
      {justCompleted && (
        <div className={styles.celebration} onClick={() => setJustCompleted(false)}>
          <div className={styles.celebrationContent}>
            <span className={styles.celebrationEmoji}>🎉</span>
            <p className={styles.celebrationText}>
              {savedProgress?.stars ? '⭐'.repeat(savedProgress.stars) : '⭐'}
            </p>
            <p className={styles.celebrationSub}>太棒了！点击继续…</p>
          </div>
        </div>
      )}

      {/* ═══ Three-column row ═══ */}
      <div className={styles.columns}>
        {/* Left: Lesson content */}
        {leftCollapsed ? (
          <ExpandTab label="课程" icon="📖" side="left" onClick={() => setLeftCollapsed(false)} />
        ) : (
          <div className={`${styles.leftPanel} ${centerCollapsed ? styles.expandFill : ''}`} style={{ width: leftWidth }}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>📖 课程内容</span>
              <CollapseButton direction="left" onClick={() => setLeftCollapsed(true)} label="课程内容" />
            </div>
            <div className={styles.panelBody}>
              <LessonView lesson={lesson} />
            </div>
          </div>
        )}

        {/* Resize: left | center */}
        {!leftCollapsed && !centerCollapsed && <ResizeHandle onResize={handleResizeLeft} />}

        {/* Center: Editor */}
        {centerCollapsed ? (
          <ExpandTab label="编辑器" icon="💻" side="right" onClick={() => setCenterCollapsed(false)} />
        ) : (
          <div className={styles.centerPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>💻 代码编辑器</span>
              <div className={styles.panelHeaderActions}>
                <button
                  className={`${styles.resetButton} ${autocompleteOn ? styles.toggleOn : ''}`}
                  onClick={() => setAutocompleteOn((v) => !v)}
                  title={autocompleteOn ? '关闭代码提示' : '开启代码提示'}
                >💡 提示{autocompleteOn ? ' ON' : ' OFF'}</button>
                <button
                  className={styles.resetButton}
                  onClick={() => setCode(lesson.starterCode)}
                  title="恢复到初始代码"
                >🔄 重置</button>
                {isLessonCompleted ? (
                  <span className={styles.completedBadge}>
                    ✅ 已完成{' '}
                    {savedProgress?.stars ? '⭐'.repeat(savedProgress.stars) : ''}
                  </span>
                ) : result?.success && allChecksPassed ? (
                  <button className={styles.completeButton} onClick={handleComplete}>
                    ✅ 完成本节
                  </button>
                ) : null}
                <CollapseButton direction="right" onClick={() => setCenterCollapsed(true)} label="代码编辑器" />
              </div>
            </div>
            <div className={styles.editorBody}>
              <CodeEditor
                ref={editorRef}
                value={code}
                onChange={setCode}
                onRun={handleRun}
                disabled={isRunning}
                loading={showLoading}
                autocompleteEnabled={autocompleteOn}
              >
                <CodeTemplates onInsert={handleInsertTemplate} />
              </CodeEditor>
            </div>
            {/* ═══ Check results bar ═══ */}
            {checkResults && checkResults.length > 0 && (
              <div className={styles.checkBar}>
                {checkResults.map((item, i) => (
                  <div
                    key={i}
                    className={`${styles.checkItem} ${item.passed ? styles.checkPassed : styles.checkFailed}`}
                  >
                    <span className={styles.checkIcon}>{item.passed ? '✅' : '❌'}</span>
                    <span className={styles.checkLabel}>{item.check.description}</span>
                  </div>
                ))}
                {!allChecksPassed && (
                  <p className={styles.checkHint}>修改代码后点 ▶ 运行重新检查</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Resize: center | right */}
        {!centerCollapsed && !rightCollapsed && <ResizeHandle onResize={handleResizeRight} />}

        {/* Right: Output */}
        {rightCollapsed ? (
          <ExpandTab label="输出" icon="📤" side="right" onClick={() => setRightCollapsed(false)} />
        ) : (
          <div className={styles.rightPanel} style={{ width: rightWidth }}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>📤 控制台 · 画布 · 变量</span>
              <CollapseButton direction="right" onClick={() => setRightCollapsed(true)} label="输出面板" />
            </div>
            <div className={styles.panelBody}>
              <OutputPanel result={result} isRunning={isRunning} />
            </div>
          </div>
        )}
      </div>

      {/* ═══ Bottom nav ═══ */}
      <div className={styles.bottomNav}>
        <LessonNav
          prevId={prevLesson?.id}
          nextId={nextLesson?.id}
          prevTitle={prevLesson?.title}
          nextTitle={nextLesson?.title}
          onNavigate={handleNavigate}
          nextDisabled={lesson.series === 'game' && !isLessonCompleted}
          nextDisabledHint="游戏关卡需要先完成当前关卡才能继续！"
        />
      </div>
    </div>
  );
}
