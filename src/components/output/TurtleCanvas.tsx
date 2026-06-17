// ============================================================
// HiPython — TurtleCanvas component
// ============================================================

import { useRef, useEffect, useCallback } from 'react';
import type { TurtleCommand } from '../../types';
import {
  TURTLE_CANVAS_WIDTH,
  TURTLE_CANVAS_HEIGHT,
  createInitialState,
  executeTurtleCommands,
} from '../../engine/turtle';
import styles from './TurtleCanvas.module.css';

interface TurtleCanvasProps {
  commands: TurtleCommand[];
  isRunning: boolean;
}

export function TurtleCanvas({ commands, isRunning }: TurtleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<{ cancel: () => void } | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cancel any in-progress animation
    if (animFrameRef.current) {
      animFrameRef.current.cancel();
      animFrameRef.current = null;
    }

    if (commands.length === 0) return;

    const state = createInitialState();

    // Provide a cancel token for the animation
    let cancelled = false;
    animFrameRef.current = {
      cancel: () => {
        cancelled = true;
      },
    };

    executeTurtleCommands(ctx, commands, state, () => {
      if (cancelled) return;
      animFrameRef.current = null;
    });
  }, [commands]);

  useEffect(() => {
    draw();

    return () => {
      if (animFrameRef.current) {
        animFrameRef.current.cancel();
      }
    };
  }, [draw]);

  // If running and no commands yet, show a loading hint
  if (isRunning && commands.length === 0) {
    return (
      <div className={styles.container}>
        <canvas
          ref={canvasRef}
          width={TURTLE_CANVAS_WIDTH}
          height={TURTLE_CANVAS_HEIGHT}
          className={styles.canvas}
        />
        <div className={styles.overlay}>
          <span className={styles.loadingHint}>⏳ 正在运行…</span>
        </div>
      </div>
    );
  }

  // If no commands at all, show empty state
  if (commands.length === 0) {
    return (
      <div className={styles.emptyState}>
        <span className={styles.emptyIcon}>🐢</span>
        <p className={styles.emptyTitle}>Turtle 画布</p>
        <p className={styles.emptyHint}>
          试试用 <code>turtle.forward(100)</code> 来画一条线！
        </p>
        <p className={styles.exampleHint}>
          示例代码：
          <br />
          <code>
            import turtle{'\n'}
            turtle.forward(100){'\n'}
            turtle.left(90){'\n'}
            turtle.forward(100)
          </code>
        </p>
      </div>
    );
  }

  // Show canvas with drawings
  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        width={TURTLE_CANVAS_WIDTH}
        height={TURTLE_CANVAS_HEIGHT}
        className={styles.canvas}
      />
    </div>
  );
}