// ============================================================
// HiPython — Pyodide execution engine
// ============================================================

import { translateError } from './errorTranslate';
import { TURTLE_PYTHON_MODULE } from './turtle';
import type { ExecutionResult, TurtleCommand, VariableInfo } from '../types';

/** Global Pyodide singleton */
let pyodideInstance: any = null;
let isLoading = false;
let loadPromise: Promise<any> | null = null;

/** Called when Pyodide starts/finishes loading */
type LoadingCallback = (loading: boolean, progress?: string) => void;
let loadingCallbacks: LoadingCallback[] = [];

export function onLoadingChange(cb: LoadingCallback) {
  loadingCallbacks.push(cb);
  return () => {
    loadingCallbacks = loadingCallbacks.filter((c) => c !== cb);
  };
}

function notifyLoading(loading: boolean, progress?: string) {
  loadingCallbacks.forEach((cb) => cb(loading, progress));
}

/**
 * Lazy-load Pyodide. Returns the singleton instance.
 * First call downloads ~11MB WASM — shows progress.
 */
export async function loadPyodide(): Promise<any> {
  if (pyodideInstance) return pyodideInstance;
  if (loadPromise) return loadPromise;

  isLoading = true;
  notifyLoading(true, '正在加载 Python 引擎…');

  loadPromise = (async () => {
    try {
      // Dynamic import to avoid bundling Pyodide into the main chunk
      const { loadPyodide: initPyodide } = await import('pyodide');

      const indexURL = import.meta.env.PROD
        ? 'https://cdn.jsdelivr.net/npm/pyodide@314.0.0/'
        : '/pyodide/';

      notifyLoading(true, '正在下载 Python 环境（约11MB）…');
      const pyodide = await initPyodide({ indexURL });

      notifyLoading(true, 'Python 环境就绪！');
      pyodideInstance = pyodide;
      return pyodide;
    } finally {
      isLoading = false;
      notifyLoading(false);
    }
  })();

  return loadPromise;
}

/**
 * Reset Pyodide's global namespace for a fresh execution context.
 */
function resetGlobals(pyodide: any): void {
  // Clear user-defined global variables but keep builtins
  pyodide.runPython(`
import sys
import builtins
# Keep a copy of standard builtins
_keep = set(dir(builtins))
_keep.update(['__name__', '__doc__', '__builtins__', '_keep'])
for k in list(globals().keys()):
    if k not in _keep:
        del globals()[k]
`);
}

/**
 * Inject the turtle module and set up the JS bridge for command collection.
 */
function setupTurtleBridge(pyodide: any): void {
  // Inject the turtle module (it writes commands to a Python global list)
  pyodide.runPython(TURTLE_PYTHON_MODULE);
}

/**
 * Read collected turtle commands from the Python global _commands list.
 * Python side serializes _commands to JSON for zero-fuss JS access.
 */
function collectTurtleCommands(pyodide: any): TurtleCommand[] {
  try {
    // Python serializes _commands (list of tuples) to JSON
    // e.g. [("forward", 100), ("goto", 200.0, 200.0)] → [["forward",100],["goto",200,200]]
    pyodide.runPython(`
import json
try:
    __turtle_json = json.dumps(_commands)
except:
    __turtle_json = '[]'
`);
    const jsonStr = pyodide.globals.get('__turtle_json');
    if (!jsonStr) return [];
    const raw = JSON.parse(jsonStr as string) as unknown[][];
    return raw.map((tuple) => {
      const cmd: TurtleCommand = { type: tuple[0] as TurtleCommand['type'] };
      if (tuple.length === 2) {
        cmd.value = tuple[1] as number | string;
      } else if (tuple.length >= 3 && tuple[0] === 'goto') {
        // goto sends 3 args: type, x, y → store as [x, y]
        cmd.value = [tuple[1] as number, tuple[2] as number] as unknown as typeof cmd.value;
      }
      return cmd;
    });
  } catch {
    return [];
  }
}

/**
 * Read user-defined variables from Pyodide's global namespace.
 */
function collectVariables(pyodide: any): Record<string, VariableInfo> {
  const vars: Record<string, VariableInfo> = {};

  // Python builtins to exclude from variable display
  const builtins = new Set([
    '__name__', '__doc__', '__package__', '__loader__', '__spec__',
    '__builtins__', '_keep',
    'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint',
    'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile',
    'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod',
    'enumerate', 'eval', 'exec', 'exit', 'filter', 'float', 'format',
    'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex',
    'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len',
    'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min',
    'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property',
    'quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr',
    'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple',
    'type', 'vars', 'zip',
    'sys', 'math', 'js', 'pyodide', 'turtle', 'forward', 'backward',
    'left', 'right', 'penup', 'pendown', 'color', 'speed', 'circle',
    'goto', 'setheading', 'home', 'clear', 'reset', 'done',
    '_TurtlePen', '_turtle_module', '_default_turtle', 'types',
  ]);

  try {
    const globals = pyodide.globals.toJs({
      dict_converter: Object.fromEntries,
    });

    for (const [key, value] of Object.entries(globals)) {
      if (builtins.has(key) || key.startsWith('_')) continue;

      vars[key] = formatVariableInfo(key, value);
    }
  } catch {
    // If toJs fails, return empty vars
  }

  return vars;
}

/**
 * Format a single Python value into a VariableInfo object.
 */
function formatVariableInfo(name: string, value: unknown): VariableInfo {
  if (value === null || value === undefined) {
    return { name, type: 'NoneType', value: 'None' };
  }
  if (typeof value === 'string') {
    return { name, type: 'str', value: `"${value}"` };
  }
  if (typeof value === 'number') {
    const typeName = Number.isInteger(value) ? 'int' : 'float';
    return { name, type: typeName, value: String(value) };
  }
  if (typeof value === 'boolean') {
    return { name, type: 'bool', value: value ? 'True' : 'False' };
  }
  if (Array.isArray(value)) {
    const preview = value.slice(0, 5).map((v) => formatSimpleValue(v)).join(', ');
    const suffix = value.length > 5 ? ', ...' : '';
    return { name, type: `list[${value.length}]`, value: `[${preview}${suffix}]` };
  }
  if (typeof value === 'object') {
    // Could be a Python dict proxy or other object
    try {
      const keys = Object.keys(value);
      const preview = keys.slice(0, 3).join(', ');
      const suffix = keys.length > 3 ? ', ...' : '';
      return { name, type: `dict[${keys.length}]`, value: `{${preview}${suffix}}` };
    } catch {
      return { name, type: 'object', value: String(value).slice(0, 50) };
    }
  }
  return { name, type: typeof value, value: String(value).slice(0, 50) };
}

/**
 * Format a simple value for display inside a list preview.
 */
function formatSimpleValue(value: unknown): string {
  if (value === null || value === undefined) return 'None';
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'boolean') return value ? 'True' : 'False';
  return String(value);
}

/**
 * Execute Python code and return the result.
 */
export async function runPython(code: string): Promise<ExecutionResult> {
  const pyodide = await loadPyodide();

  let stdout = '';
  let stderr = '';

  // Capture stdout/stderr for this run
  pyodide.setStdout({
    batched: (text: string) => {
      stdout += text + '\n';
    },
  });

  pyodide.setStderr({
    batched: (text: string) => {
      stderr += text + '\n';
    },
  });

  try {
    // Reset globals to give a clean slate each run
    resetGlobals(pyodide);

    // Set up turtle bridge (inject module + command queue)
    setupTurtleBridge(pyodide);

    // Run the code
    await pyodide.runPythonAsync(code);

    const combinedOutput = (stdout + stderr).trim();
    const turtleCommands = collectTurtleCommands(pyodide);
    const variables = collectVariables(pyodide);

    return {
      stdout: combinedOutput,
      error: null,
      rawError: null,
      success: true,
      turtleCommands,
      variables,
    };
  } catch (e: unknown) {
    const rawMsg = e instanceof Error ? e.message : String(e);
    const combinedOutput = (stdout + stderr).trim();
    const turtleCommands = collectTurtleCommands(pyodide);
    const variables = collectVariables(pyodide);

    return {
      stdout: combinedOutput,
      error: translateError(e instanceof Error ? e : rawMsg),
      rawError: rawMsg,
      success: false,
      turtleCommands,
      variables,
    };
  }
}

/**
 * Check if Pyodide is loaded and ready.
 */
export function isPyodideReady(): boolean {
  return pyodideInstance !== null;
}

/**
 * Check if Pyodide is currently loading.
 */
export function isPyodideLoading(): boolean {
  return isLoading;
}