# 🐍 HiPython — 少儿Python学习平台

为 10 岁孩子打造的亲子共学 Python 平台。浏览器里直接写代码、运行、看结果，无需安装任何东西。

---

## 快速启动

```bash
# 1. 进入项目目录
cd d:/work/workspace/HiPython

# 2. 安装依赖（仅首次执行，之后不用）
npm install

# 3. 启动开发服务器
npm run dev
```

启动成功后会看到类似输出：

```
  VITE v8.0.16  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

在浏览器打开 **http://localhost:5173** 即可使用。

---

## 关闭程序

在终端里按 **`Ctrl + C`** 停止开发服务器。

> 如果按了没反应，再按一次。或者直接关掉终端窗口也行。

---

## 常用命令

| 命令 | 作用 | 什么时候用 |
|------|------|------------|
| `npm install` | 安装依赖 | 刚 clone 代码、或更新了 package.json 后 |
| `npm run dev` | 启动开发服务器 | 每次开始写代码/使用前 |
| `npm run build` | 构建生产版本 | 准备部署到线上时 |
| `npm run preview` | 预览生产版本 | 构建完后，看看线上效果 |
| `npx tsc --noEmit` | TypeScript 类型检查 | 检查代码有没有类型错误 |

---

## 页面入口

| 页面 | 地址 |
|------|------|
| 首页 | http://localhost:5173/ |
| 第1课：你好，世界！ | http://localhost:5173/lesson/l1_1 |
| 第2课：我的名片 | http://localhost:5173/lesson/l1_2 |
| 第3课：迷你计算器 | http://localhost:5173/lesson/l1_3 |
| 第4课：猜猜我是谁 | http://localhost:5173/lesson/l1_4 |
| 课程地图 | http://localhost:5173/course-map |
| 成就墙 | http://localhost:5173/achievements |

---

## 首次加载说明

进入课程页面时，浏览器会自动加载 Python 运行环境（约 13MB），需要等待几秒钟。加载完成后就能无限次运行代码了，不会重复加载。

---

## 遇到问题？

1. **白屏/报错** → 试试刷新页面（F5）
2. **端口被占用** → Vite 会自动换一个端口，看终端提示的新地址
3. **Python 代码运行不了** → 等 Python 引擎加载完再点运行（加载中按钮会显示"加载中…"）
4. **其他问题** → 问问爸爸 😄