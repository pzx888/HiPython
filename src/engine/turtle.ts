// ============================================================
// HiPython — Turtle graphics engine (JS-side Canvas renderer)
// ============================================================

import type { TurtleCommand, TurtleState } from '../types';

// ---- Default canvas dimensions ----
export const TURTLE_CANVAS_WIDTH = 400;
export const TURTLE_CANVAS_HEIGHT = 400;

// ---- Initial turtle state ----
export function createInitialState(): TurtleState {
  return {
    x: TURTLE_CANVAS_WIDTH / 2,
    y: TURTLE_CANVAS_HEIGHT / 2,
    angle: 0, // 0° = facing right (Canvas coords)
    penDown: true,
    color: '#333333',
    speed: 5,
  };
}

// ---- Python-side turtle module source ----
// Injected into Pyodide before running user code.
// Creates a proper Python module registered in sys.modules so
// "import turtle" works like the standard library turtle module.
// Each turtle method pushes a drawing command to the JS bridge.
export const TURTLE_PYTHON_MODULE = `
import sys
import types
import math


# ── Command queue (pure Python list, read by JS after execution) ──
_commands = []


# ── Internal pen ──────────────────────────────────────────
class _TurtlePen:
    """A mini turtle that pushes drawing commands to the JS bridge."""

    def __init__(self):
        self._reset()

    def _reset(self):
        self._x = 200.0
        self._y = 200.0
        self._angle = 0.0        # 0 = right, 90 = down (Canvas coords)
        self._pendown = True
        self._color = '#333333'

    def _cmd(self, cmd_type, *args):
        """Append a drawing command to the Python command queue."""
        if len(args) == 1:
            _commands.append((cmd_type, args[0]))
        elif len(args) >= 2:
            _commands.append((cmd_type, args[0], args[1]))
        else:
            _commands.append((cmd_type,))

    # ── Movement ──────────────────────────────────────────

    def forward(self, distance):
        self._cmd('forward', float(distance))

    def backward(self, distance):
        self._cmd('backward', float(distance))

    def left(self, angle):
        self._cmd('left', float(angle))

    def right(self, angle):
        self._cmd('right', float(angle))

    def goto(self, x, y=None):
        if y is None:
            _commands.append(('goto', float(x), float(x)))
        else:
            _commands.append(('goto', float(x), float(y)))

    def setheading(self, angle):
        self._cmd('setheading', float(angle))

    def home(self):
        self._cmd('goto', 200.0, 200.0)
        self._cmd('setheading', 0.0)

    def circle(self, radius, extent=None, steps=None):
        # Simplified: always draw a full circle.
        # extent & steps are accepted for API compatibility but ignored.
        self._cmd('circle', float(radius))

    # ── Pen control ───────────────────────────────────────

    def penup(self):
        self._cmd('penup')

    def pendown(self):
        self._cmd('pendown')

    def color(self, *args):
        """color(pencolor) or color(pencolor, fillcolor)"""
        if len(args) >= 1:
            self._cmd('color', str(args[0]))

    def speed(self, s):
        self._cmd('speed', int(s))

    # ── Canvas ────────────────────────────────────────────

    def clear(self):
        self._cmd('clear')

    def reset(self):
        self._reset()
        self._cmd('clear')

    def done(self):
        self._cmd('done')


# ── Create the default turtle instance ────────────────────
_default_turtle = _TurtlePen()


# ── Module-level functions (delegate to default turtle) ───
def forward(distance):
    _default_turtle.forward(distance)

def backward(distance):
    _default_turtle.backward(distance)

def left(angle):
    _default_turtle.left(angle)

def right(angle):
    _default_turtle.right(angle)

def goto(x, y=None):
    _default_turtle.goto(x, y)

def setheading(angle):
    _default_turtle.setheading(angle)

def home():
    _default_turtle.home()

def circle(radius, extent=None, steps=None):
    _default_turtle.circle(radius)

def penup():
    _default_turtle.penup()

def pendown():
    _default_turtle.pendown()

def color(*args):
    _default_turtle.color(*args)

def speed(s):
    _default_turtle.speed(s)

def clear():
    _default_turtle.clear()

def reset():
    _default_turtle.reset()

def done():
    _default_turtle.done()


# ── Build a proper module and register in sys.modules ─────
# This is what makes "import turtle" work.
_turtle_module = types.ModuleType('turtle')
_turtle_module.Turtle = _TurtlePen
_turtle_module.forward = forward
_turtle_module.backward = backward
_turtle_module.left = left
_turtle_module.right = right
_turtle_module.goto = goto
_turtle_module.setheading = setheading
_turtle_module.home = home
_turtle_module.circle = circle
_turtle_module.penup = penup
_turtle_module.pendown = pendown
_turtle_module.color = color
_turtle_module.speed = speed
_turtle_module.clear = clear
_turtle_module.reset = reset
_turtle_module.done = done
_turtle_module._default_turtle = _default_turtle

sys.modules['turtle'] = _turtle_module
`;

// ---- Command execution on Canvas ----

/**
 * Execute all turtle commands and draw the result on a Canvas.
 * Returns a promise that resolves when drawing is complete (or immediately
 * when speed is set to 0 / "instant").
 */
export function executeTurtleCommands(
  ctx: CanvasRenderingContext2D,
  commands: TurtleCommand[],
  state: TurtleState,
  onComplete?: () => void,
): void {
  if (commands.length === 0) {
    onComplete?.();
    return;
  }

  let i = 0;
  const total = commands.length;

  function step() {
    // Process a batch of commands per frame
    const batchSize = state.speed >= 10 ? total : Math.max(1, Math.floor(state.speed / 2));
    const end = Math.min(i + batchSize, total);

    for (; i < end; i++) {
      applyCommand(ctx, state, commands[i]);
    }

    if (i < total) {
      // Speed-based delay: speed 1 = slowest (~50ms/frame), speed 10 = fastest (~5ms/frame)
      const delay = Math.max(2, 60 - state.speed * 5);
      setTimeout(step, delay);
    } else {
      drawTurtleIcon(ctx, state);
      onComplete?.();
    }
  }

  // First, clear the canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Draw a subtle grid background
  drawGrid(ctx);

  step();
}

/**
 * Apply a single command to the state + canvas.
 */
function applyCommand(
  ctx: CanvasRenderingContext2D,
  state: TurtleState,
  cmd: TurtleCommand,
): void {
  switch (cmd.type) {
    case 'forward':
    case 'backward': {
      const dist = typeof cmd.value === 'number' ? cmd.value : 0;
      const actualDist = cmd.type === 'backward' ? -dist : dist;
      const rad = (state.angle * Math.PI) / 180;
      const newX = state.x + actualDist * Math.cos(rad);
      const newY = state.y + actualDist * Math.sin(rad);

      if (state.penDown) {
        ctx.beginPath();
        ctx.moveTo(state.x, state.y);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = state.color;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      state.x = newX;
      state.y = newY;
      break;
    }

    case 'left': {
      const angle = typeof cmd.value === 'number' ? cmd.value : 0;
      state.angle -= angle; // counter-clockwise
      break;
    }

    case 'right': {
      const angle = typeof cmd.value === 'number' ? cmd.value : 0;
      state.angle += angle; // clockwise
      break;
    }

    case 'penup':
      state.penDown = false;
      break;

    case 'pendown':
      state.penDown = true;
      break;

    case 'color': {
      if (typeof cmd.value === 'string') {
        state.color = cmd.value;
      }
      break;
    }

    case 'speed': {
      if (typeof cmd.value === 'number') {
        state.speed = Math.max(1, Math.min(10, cmd.value));
      }
      break;
    }

    case 'circle': {
      const radius = typeof cmd.value === 'number' ? cmd.value : 50;
      if (state.penDown) {
        ctx.beginPath();
        ctx.arc(state.x, state.y, Math.abs(radius), 0, Math.PI * 2);
        ctx.strokeStyle = state.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      break;
    }

    case 'goto': {
      if (Array.isArray(cmd.value) && cmd.value.length >= 2) {
        const [gx, gy] = cmd.value as number[];
        if (state.penDown) {
          ctx.beginPath();
          ctx.moveTo(state.x, state.y);
          ctx.lineTo(gx, gy);
          ctx.strokeStyle = state.color;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
        state.x = gx;
        state.y = gy;
      }
      break;
    }

    case 'setheading': {
      if (typeof cmd.value === 'number') {
        state.angle = cmd.value;
      }
      break;
    }

    case 'clear':
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawGrid(ctx);
      break;

    case 'done':
      // No-op: marks end of drawing
      break;
  }
}

/**
 * Draw a subtle grid background to help orient the student.
 */
function drawGrid(ctx: CanvasRenderingContext2D): void {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const step = 40;

  ctx.strokeStyle = '#e8e8e8';
  ctx.lineWidth = 0.5;

  for (let x = 0; x <= w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }

  for (let y = 0; y <= h; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Draw center crosshair
  ctx.strokeStyle = '#d0d0d0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w / 2, 0);
  ctx.lineTo(w / 2, h);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();
}

/**
 * Draw the turtle icon (a small triangle) at the current position.
 */
function drawTurtleIcon(ctx: CanvasRenderingContext2D, state: TurtleState): void {
  const size = 10;
  const rad = (state.angle * Math.PI) / 180;

  // Triangle pointing in the direction of the angle
  const tipX = state.x + size * Math.cos(rad);
  const tipY = state.y + size * Math.sin(rad);
  const leftX = state.x + size * Math.cos(rad + (2 * Math.PI) / 3);
  const leftY = state.y + size * Math.sin(rad + (2 * Math.PI) / 3);
  const rightX = state.x + size * Math.cos(rad + (4 * Math.PI) / 3);
  const rightY = state.y + size * Math.sin(rad + (4 * Math.PI) / 3);

  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(leftX, leftY);
  ctx.lineTo(rightX, rightY);
  ctx.closePath();
  ctx.fillStyle = state.penDown ? '#4CAF50' : '#FF9800';
  ctx.fill();
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1;
  ctx.stroke();
}

/**
 * Draw a static result (no animation) — used when we just want the final image.
 */
export function drawTurtleResult(
  ctx: CanvasRenderingContext2D,
  commands: TurtleCommand[],
): void {
  const state = createInitialState();

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawGrid(ctx);

  for (const cmd of commands) {
    applyCommand(ctx, state, cmd);
  }

  drawTurtleIcon(ctx, state);
}