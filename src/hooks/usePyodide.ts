// ============================================================
// HiPython — usePyodide hook
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  loadPyodide,
  runPython as runPythonEngine,
  isPyodideReady,
  isPyodideLoading,
  onLoadingChange,
} from '../engine/pyodide';
import type { ExecutionResult } from '../types';

interface UsePyodideReturn {
  /** Whether Pyodide is fully loaded and ready */
  isReady: boolean;
  /** Whether Pyodide is currently loading */
  isLoading: boolean;
  /** Loading progress message */
  loadingMessage: string;
  /** Execute Python code */
  runPython: (code: string) => Promise<ExecutionResult>;
  /** Manually trigger Pyodide load (e.g. pre-warm) */
  load: () => Promise<void>;
}

export function usePyodide(): UsePyodideReturn {
  const [isReady, setIsReady] = useState(isPyodideReady);
  const [isLoading, setIsLoading] = useState(isPyodideLoading);
  const [loadingMessage, setLoadingMessage] = useState('');
  const loadingRef = useRef(false);

  useEffect(() => {
    const unsub = onLoadingChange((loading, progress) => {
      setIsLoading(loading);
      if (progress) setLoadingMessage(progress);
    });

    // Check initial state
    setIsReady(isPyodideReady());
    setIsLoading(isPyodideLoading());

    return unsub;
  }, []);

  const load = useCallback(async () => {
    if (loadingRef.current || isPyodideReady()) return;
    loadingRef.current = true;
    try {
      await loadPyodide();
      setIsReady(true);
      setIsLoading(false);
    } finally {
      loadingRef.current = false;
    }
  }, []);

  const runPython = useCallback(
    async (code: string): Promise<ExecutionResult> => {
      if (!isPyodideReady()) {
        await loadPyodide();
        setIsReady(true);
      }
      return runPythonEngine(code);
    },
    [],
  );

  return { isReady, isLoading, loadingMessage, runPython, load };
}