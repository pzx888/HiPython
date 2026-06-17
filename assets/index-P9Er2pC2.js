const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pyodide-CV6SbGYf.js","assets/rolldown-runtime-BHe-jwch.js","assets/vendor-Dpg0e8UT.js","assets/codemirror-97XVbHXg.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-BHe-jwch.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./codemirror-97XVbHXg.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./vendor-Dpg0e8UT.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var _=e(i(),1),v=g(),y={topNav:`_topNav_1wulv_1`,brand:`_brand_1wulv_14`,logo:`_logo_1wulv_22`,brandName:`_brandName_1wulv_26`,navItems:`_navItems_1wulv_32`,navLink:`_navLink_1wulv_39`,active:`_active_1wulv_54`},b=t();function x(){let e=f();return(0,b.jsxs)(`nav`,{className:y.topNav,children:[(0,b.jsxs)(d,{to:`/`,className:y.brand,children:[(0,b.jsx)(`span`,{className:y.logo,children:`🐍`}),(0,b.jsx)(`span`,{className:y.brandName,children:`HiPython`})]}),(0,b.jsx)(`div`,{className:y.navItems,children:[{path:`/`,label:`🏠 首页`},{path:`/course-map`,label:`🗺️ 课程地图`},{path:`/story`,label:`📖 故事`},{path:`/arena`,label:`🏟️ 竞技场`},{path:`/typing`,label:`⌨️ 打字`},{path:`/achievements`,label:`🏆 成就`}].map(t=>(0,b.jsx)(d,{to:t.path,className:`${y.navLink} ${e.pathname===t.path?y.active:``}`,children:t.label},t.path))})]})}var S={appShell:`_appShell_1sfxw_1`,main:`_main_1sfxw_8`,fadeIn:`_fadeIn_1sfxw_1`};function C(){return(0,b.jsxs)(`div`,{className:S.appShell,children:[(0,b.jsx)(x,{}),(0,b.jsx)(`main`,{className:S.main,children:(0,b.jsx)(p,{})})]})}function w(e,t){let n=`hipython:${e}`,[r,i]=(0,_.useState)(()=>{try{let e=window.localStorage.getItem(n);if(e){let n=JSON.parse(e);return typeof n==`object`&&n&&typeof t==`object`&&t?{...t,...n}:n}return t}catch{return t}});return[r,(0,_.useCallback)(e=>{i(t=>{let r=typeof e==`function`?e(t):e;try{window.localStorage.setItem(n,JSON.stringify(r))}catch{}return r})},[n])]}var T=[{id:`l1_1`,title:`第1课：你好，世界！`,series:`main`,difficulty:1,prerequisites:[],estimatedTime:20,objectives:[`认识 Python：知道 Python 是什么、能做什么`,`学会使用 print() 函数让计算机输出文字`,`了解什么是"运行代码"`],content:{intro:`嗨！欢迎来到 Python 的世界！🐍

Python 是一门编程语言，就像你学过的 Scratch 积木块一样，用它可以让计算机帮你做事。
只不过，这次我们不拖积木块了——我们来**打字**！这很酷，对吧？

今天，我们要让计算机对你"说话"。准备好了吗？`,sections:[{type:`text`,title:`什么是 print()？`,body:'`print()` 是 Python 里最常用的指令之一，它的作用就是**在屏幕上显示文字**。\n括号 `()` 里的内容，就是你想让计算机显示的东西。\n\n比如，你想让计算机说"你好"，就写：'},{type:`code`,title:`示例`,body:`print("你好，世界！")`},{type:`tip`,title:`注意引号`,body:'文字必须要用引号 `" "` 包起来，单引号 `\' \'` 也可以。\nPython 用引号来区分"这是文字"和"这是代码指令"。'},{type:`text`,title:`试试修改文字`,body:"你可以把 `print()` 里面的文字换成任何你想说的话！\n可以换成你的名字、你喜欢的动物、或者一句悄悄话。试试看吧！"},{type:`challenge`,body:`让计算机输出三句话：
1. 你的名字
2. 你最喜欢的颜色
3. 你今天的心情

每一句用一个 \`print()\` 来写！`}],summary:`太棒了！你学会了第一个 Python 指令：\`print()\`。
它就是让计算机"说话"的工具。现在你已经是一个小小程序员了！🎉

记住：
• \`print()\` — 显示文字在屏幕上
• 文字要放在引号里，比如 \`"你好"\`
• 点 ▶ 运行 按钮就能看到结果`},starterCode:`print("你好，世界！")`,solution:`print("小明")
print("我最喜欢蓝色")
print("今天很开心！")`,hints:['用 `print()` 把你想说的话包起来就可以啦！比如 `print("你的名字")`',"每一句话用一个 `print()`，写三行就行了",'别忘了把文字放在引号里哦：`print("学 Python 真好玩")`'],checks:[{description:`代码里至少有一个 print()`,type:`contains`,value:`print(`},{description:`代码可以正常运行（没有错误）`,type:`no_error`}]},{id:`l1_2`,title:`第2课：我的名片`,series:`main`,difficulty:1,prerequisites:[`l1_1`],estimatedTime:20,objectives:[`学会使用多个 print() 来输出多行文字`,`了解什么是字符串（文字）`,`学会用 print() 画出简单的图案`],content:{intro:`上一节课我们学会了让计算机说一句话。
这次我们来玩得更酷一点——用 print() 来做一张属于你自己的**文字名片**！📇

名片上可以写上你的名字、年龄、爱好，甚至画一些小图案出来！`,sections:[{type:`text`,title:`多行输出`,body:"你可以写多个 `print()`，每个 `print()` 会输出一行文字。\n就像这样——每一行 print 就是一行新的东西显示在屏幕上："},{type:`code`,title:`示例：我的名片`,body:`print("==================")
print("   🧒 小明")
print("   年龄：10岁")
print("   爱好：编程")
print("==================")`},{type:`tip`,title:`什么是字符串？`,body:'在 Python 里，放在引号里的一串文字叫做**字符串**（String）。\n可以理解为"一串字符"——可以是一个字母、一个单词、甚至一整句话。\n\n比如 `"Hello"` 是一个字符串，`"你好！"` 也是一个字符串。'},{type:`text`,title:`用符号画图案`,body:"python 里你可以用各种符号来画简单的图案！\n试试用 `=`、`*`、`-`、`#` 这些符号，配合 `print()` 画出边框或装饰线。"},{type:`challenge`,body:`设计一张你自己的名片！要求：

1. 要有一条装饰线（用符号拼出来的）
2. 要有你的名字（可以用 emoji 装饰）
3. 至少写上两样关于你的信息（年龄、爱好、梦想……随你选！）
4. 名片结尾也要有一条装饰线`}],summary:`不错！你已经能做文字名片了！🎨

记住：
• 每个 \`print()\` 输出一行
• 字符串 = 引号包起来的文字
• 善用符号和 emoji 可以让输出更有趣

下一课，我们要让 Python 做数学题！准备好了吗？🔢`},starterCode:`print("=============")
print("  我的名片")
print("=============")
`,solution:`print("=================")
print("  🌟 小明 🌟")
print("  年龄：10岁")
print("  爱好：踢足球")
print("  梦想：当宇航员")
print("=================")`,hints:[`先用一个 print() 画顶上的一条线，再用几个 print() 写内容，最后画底线`,'用 `"====="` 这样的符号来画线，用 emoji 来装饰内容',`试试这个结构：
print("=====")  ← 顶线
print("  名字")
print("  信息")
print("=====")  ← 底线`],checks:[{description:`代码里至少有 3 个 print()`,type:`contains`,value:`print(`},{description:`代码可以正常运行（没有错误）`,type:`no_error`}]},{id:`l1_3`,title:`第3课：迷你计算器`,series:`main`,difficulty:1,prerequisites:[`l1_2`],estimatedTime:25,objectives:[`了解 Python 可以直接做数学运算`,`认识基本运算符：+、-、*、/`,`了解数字和字符串的区别`],content:{intro:`Python 可不只会说话，它还是一个小小数学家！🧮

你可以直接用 Python 来算算术，就像用计算器一样——而且比计算器还快！
今天我们就要来探索 Python 的数学魔法。`,sections:[{type:`text`,title:`Python 会算数`,body:"在 `print()` 里，你可以直接写算式，Python 会帮你算出结果："},{type:`code`,title:`试试这些`,body:`print(3 + 5)    # 加法 → 8
print(10 - 4)   # 减法 → 6
print(6 * 7)    # 乘法 → 42
print(20 / 4)   # 除法 → 5.0`},{type:`tip`,title:`运算符小抄`,body:"• `+` 加号 → 加法\n• `-` 减号 → 减法\n• `*` 星号 → 乘法（不是 × 哦！）\n• `/` 斜线 → 除法\n\nPython 里用 `*` 做乘法、用 `/` 做除法——和数学课不一样，要记住！"},{type:`text`,title:`数字 vs 文字`,body:`注意：\`print(3 + 5)\` 和 \`print("3 + 5")\` 不一样！

• 没有引号 → Python 会算出结果（8）
• 有引号 → Python 直接显示文字（3 + 5）

引号告诉 Python："原样显示，不要算！"`},{type:`code`,title:`混合使用`,body:`print("3 + 5 =", 3 + 5)
print("10 × 6 =", 10 * 6)
print("100 − 37 =", 100 - 37)`},{type:`challenge`,body:`做一个小小计算器！

1. 写出 5 个不同的算式（加减乘除都要用）
2. 每个算式前写上文字说明
3. 试试比较大的数字，比如 \`1234 * 5678\`，看看 Python 能不能算出来`}],summary:'厉害！你发现了吗——Python 做算术比人快多了！⚡\n\n记住：\n• `+` `-` `*` `/` 四个运算符\n• 数字不加引号（让 Python 算出来）\n• 文字要加引号\n• 可以混用：`print("结果是", 6 * 7)`'},starterCode:`print("我的计算器")
print("==========")
print("3 + 5 =", 3 + 5)
`,solution:`print("我的迷你计算器")
print("================")
print("3 + 5 =", 3 + 5)
print("10 - 4 =", 10 - 4)
print("6 * 7 =", 6 * 7)
print("20 / 4 =", 20 / 4)
print("1234 * 5678 =", 1234 * 5678)`,hints:['用 `print("文字", 算式)` 的格式，逗号前面的文字加引号，后面的算式不加引号',"试试这 4 个运算符：`+` `-` `*` `/`，每个都用一次","别忘了：乘法用 `*` 不是 ×，除法用 `/` 不是 ÷"],checks:[{description:`代码中包含 * 运算符`,type:`contains`,value:`*`},{description:`代码中包含 / 运算符`,type:`contains`,value:`/`},{description:`代码可以正常运行（没有错误）`,type:`no_error`}]},{id:`l1_4`,title:`第4课：猜猜我是谁`,series:`main`,difficulty:2,prerequisites:[`l1_3`],estimatedTime:25,objectives:[`理解什么是变量`,`学会使用变量存储信息`,`学会字符串拼接（把变量和文字组合在一起）`],content:{intro:`现在我们要学一个超重要的概念——**变量**！📦

变量就像一个**贴了标签的盒子**，你可以把东西放进去，然后随时拿出来用。
在 Python 里，你可以用变量来存储名字、数字、任何东西！

如果你学过 Scratch，变量就像你在 Scratch 里创建的那些"变量积木块"——非常像！`,sections:[{type:`text`,title:`创建一个变量`,body:'创建变量很简单——给它一个名字，用一个等号 `=` 把值"装"进去：\n\n`name = "小明"` — 这行代码的意思是：创建一个叫 `name` 的盒子，把 `"小明"` 放进去。'},{type:`code`,title:`变量示例`,body:`name = "小明"
age = 10
hobby = "踢足球"

print("我叫", name)
print("我今年", age, "岁")
print("我喜欢", hobby)`},{type:`tip`,title:`变量命名小技巧`,body:"• 变量名只能由字母、数字和下划线 `_` 组成\n• 不能以数字开头（`1name` ❌，`name1` ✅）\n• 尽量用有意义的名字（`x` ❌，`studentName` ✅）\n• Python 区分大小写：`name` 和 `Name` 是两个不同的变量！"},{type:`text`,title:`字符串拼接`,body:"你可以把变量和文字组合在一起显示。Python 里用逗号 `,` 把它们连起来，\nprint() 会自动在中间加空格。\n\n又或者用 `+` 把字符串连在一起（不过数字要先转成字符串）。"},{type:`challenge`,body:`写一个"猜猜我是谁"的小程序：

1. 创建 3 个变量，分别存你的名字、年龄和爱好
2. 用 print() 把这些信息"介绍"出来
3. 再加一个变量，存一个你最喜欢的数字，然后显示出来
4. 试试修改变量的值，看看输出会怎么变化`}],summary:`太棒了！你学会了变量！🎉 这是编程里最重要的一课。

记住：
• 变量 = 带标签的盒子，用来存东西
• \`name = "小明"\` — 把 \`"小明"\` 存到 \`name\` 里
• 文字变量用引号，数字变量不用引号
• 用 \`print(变量1, 变量2)\` 来显示变量的值

恭喜你完成了 L1 的所有课程！你已经掌握了 Python 的基本功！🎓`},starterCode:`name = "小明"
age = 10

print("大家好！")
print("我叫", name)
`,solution:`name = "小明"
age = 10
hobby = "编程"
favoriteNumber = 7

print("===============")
print("  猜猜我是谁？")
print("===============")
print("我叫", name)
print("我今年", age, "岁")
print("我喜欢", hobby)
print("我最喜欢的数字是", favoriteNumber)
print("你猜对了吗？😄")`,hints:['先创建变量：`name = "你的名字"`，`age = 你的年龄`','用 `print()` 把变量显示出来：`print("我叫", name)`',`试试创建 3 个以上的变量，每个变量有不同的信息，然后用 print() 全部展示出来`],checks:[{description:`代码中至少定义了 3 个变量（包含 = 号）`,type:`contains`,value:`=`},{description:`代码中使用了 print()`,type:`contains`,value:`print(`},{description:`代码可以正常运行（没有错误）`,type:`no_error`}]}],E=[{id:`l2_5`,title:`第5课：数字倒计时`,series:`main`,difficulty:2,prerequisites:[`l1_4`],estimatedTime:25,objectives:[`认识 for 循环：知道循环是什么、为什么要用循环`,`学会使用 range() 生成一串数字`,`用 for 循环做出倒计时效果`],content:{intro:`还记得 L1 里我们让计算机"说话"吗？

今天我们要学一个超酷的新技能——**循环**！
循环就像让计算机帮你做重复的事情，你不用写 10 遍 \`print()\`，只要告诉它"做 10 次"就行了！

想象一下：你在操场上跑一圈，这是一个动作；跑 5 圈，就是把这个动作**循环**了 5 次。
Python 里的循环也是这个道理！`,sections:[{type:`text`,title:`认识 for 循环`,body:'`for` 是 Python 里"循环"的意思。`for` 后面跟着一个变量，表示"每一次"。\n`range(5)` 会生成 0, 1, 2, 3, 4 这 5 个数字。\n\n所以 `for i in range(5):` 的意思就是："让 i 依次等于 0、1、2、3、4，每变一次就做一次下面的事情"。'},{type:`code`,title:`最简单的 for 循环`,body:`for i in range(5):
    print(i)`},{type:`tip`,title:`注意冒号和缩进`,body:"1. `for` 语句末尾要有冒号 `:`\n2. 循环里面要做的代码，前面要有 4 个空格（按 Tab 键）\n3. 有缩进的代码才属于循环，没缩进的就不是了！"},{type:`text`,title:`range() 的用法`,body:`\`range(5)\` 是从 0 到 4，一共 5 个数字。
如果想让数字从 10 开始倒着数呢？

可以用 \`range(10, 0, -1)\`：从 10 开始，到 1 结束（不含 0），每次减 1。
试试看吧，超级好用！`},{type:`challenge`,body:`做一个火箭发射倒计时！

让计算机从 10 数到 1，然后说"🚀 发射！"

输出应该是这样：
10
9
8
...
1
🚀 发射！

提示：\`range(10, 0, -1)\` 可以生成 10, 9, 8, ..., 1`}],summary:"太厉害了！你学会了循环！🎉\n\n记住：\n• `for i in range(5):` — 让代码重复执行 5 次\n• `range(5)` 生成 0~4，`range(10, 0, -1)` 从 10 倒序到 1\n• 冒号 `:` 和缩进（Tab键）是 for 循环的好朋友，别忘了！"},starterCode:`for i in range(10, 0, -1):
    print(i)

print("🚀 发射！")`,solution:`for i in range(10, 0, -1):
    print(i)

print("🚀 发射！")`,hints:["用 `range(10, 0, -1)` 可以生成从大到小的数字",`在 for 循环前面写数字，循环后面（不加缩进）写发射`,'试试看：`for i in range(10, 0, -1):` 下面缩进写 `print(i)`，不缩进再写 `print("🚀 发射！")`'],checks:[{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码里有 range`,type:`contains`,value:`range(`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l2_6`,title:`第6课：乘法口诀表`,series:`main`,difficulty:2,prerequisites:[`l2_5`],estimatedTime:25,objectives:[`理解嵌套循环（循环里面套循环）`,`学会用 print() 的 end 参数控制换行`,`用嵌套循环打印乘法口诀表`],content:{intro:`上节课我们学会了 for 循环，计算机可以帮我们重复做事了！

但是如果把两个循环套在一起会怎样？就像俄罗斯套娃，大循环套小循环。

今天，我们要用这个"套娃循环"来做一个乘法口诀表。
想想数学课上背的"一一得一、一二得二"——让计算机帮我们全打出来！`,sections:[{type:`text`,title:`什么是嵌套循环？`,body:`嵌套循环就是一个循环**放在**另一个循环里面。

就像你玩游戏时的"关卡"和"每关的任务"：
• 外层循环 = 从第1关到第9关
• 内层循环 = 每关里面要做的事情

外层每走一步，内层走完一整圈。`},{type:`code`,title:`嵌套循环示例`,body:`for i in range(1, 4):      # 外层：i = 1, 2, 3
    for j in range(1, 4):  # 内层：j = 1, 2, 3
        print(i, "×", j, "=", i * j)`},{type:`tip`,title:`print() 不换行`,body:'默认的 `print()` 每次都会换行。但如果想在一行打印多个东西，可以加上 `end="  "`（两个空格）：\n\n`print(i * j, end="  ")` 就不会换行，而是在末尾加两个空格。\n等一行打完再单独 `print()` 来换行。'},{type:`text`,title:`九九乘法表的结构`,body:`我们要打印的是经典的乘法表：

1×1=1  1×2=2  1×3=3  ...  1×9=9
2×1=2  2×2=4  2×3=6  ...  2×9=18
...
9×1=9  9×2=18  9×3=27  ...  9×9=81

外层循环控制"第几行"（i 从 1 到 9），内层循环控制"一行里的第几个"（j 从 1 到 9）。`},{type:`challenge`,body:'用嵌套循环打印一个 9×9 乘法表！\n\n要求：\n1. 一共 9 行，每行 9 个算式\n2. 每个算式格式：`i×j=结果`，比如 `3×4=12`\n3. 同一行的算式用空格分开\n\n提示：内层 print 用 `end="  "`，外层每行结束用 `print()` 换行。'}],summary:`嵌套循环看起来很复杂，但其实就记住一句话：**外层走一步，内层走一圈**。

今天学会了：
• 嵌套循环 = 循环里面套循环
• \`print("文字", end="  ")\` 不换行
• \`print()\` 单独写一行就是换行

你已经可以用代码帮自己背乘法口诀了，太聪明了！🧠`},starterCode:`for i in range(1, 10):
    for j in range(1, 10):
        print(i, "×", j, "=", i * j, end="  ")
    print()`,solution:`for i in range(1, 10):
    for j in range(1, 10):
        print(i, "×", j, "=", i * j, end="  ")
    print()`,hints:["外层 `for i in range(1, 10):` 控制第几行",'内层 `for j in range(1, 10):` 控制每行里的算式，用 `end="  "` 不换行',"内层循环结束后，记得写一个空的 `print()` 来换行！"],checks:[{description:`代码里有嵌套的 for`,type:`contains`,value:`for `},{description:`代码里有 range(1, 10)`,type:`contains`,value:`range(1, 10)`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l2_7`,title:`第7课：画个正方形`,series:`main`,difficulty:2,prerequisites:[`l2_5`],estimatedTime:25,objectives:[`认识 turtle 画图工具`,`学会使用 turtle.forward() 和 turtle.left()`,`用循环画一个正方形`],content:{intro:`写代码不光能显示文字，还能**画画**！

Python 有一个画图工具叫 turtle（小海龟）。
想象有一只小海龟，它嘴里叼着一支笔。
你告诉它"向前走 100 步"，它就画一条 100 步长的线。
你告诉它"左转 90 度"，它就转个身。

走吧，我们去画第一个图形！`,sections:[{type:`text`,title:`认识 turtle`,body:"在我们这里，小海龟住在画布上。画布大小是 400×400，小海龟一开始站在正中心。\n\n最重要的两个指令：\n• `turtle.forward(100)` — 向前走 100 步（画一条线）\n• `turtle.left(90)` — 向左转 90 度\n\n试试看：先 `import turtle`（召唤小海龟），然后写一条 `turtle.forward(100)`，运行后切换到 🎨 画布 看看！"},{type:`code`,title:`画第一条线`,body:`import turtle
turtle.forward(100)
turtle.done()`},{type:`tip`,title:`别忘了 import turtle`,body:'每次画图前，都要先写 `import turtle` 来"召唤"小海龟。\n画完之后写 `turtle.done()` 告诉计算机画完了。\n运行代码后，切换到 🎨 画布 标签页看效果！'},{type:`text`,title:`用循环画正方形`,body:`正方形有 4 条边。每条边之后，小海龟要转 90 度。

如果用循环来画：重复 4 次"向前走 → 左转 90°"
用之前学的 for 循环，4 行代码就搞定了！

这就是**循环 + turtle**的魔法：用最少的代码画最多的图形。`},{type:`challenge`,body:`画一个边长为 100 的正方形！

要求：
1. 用 \`import turtle\` 召唤小海龟
2. 用 for 循环画 4 条边
3. 每条边 100 步长，转角 90 度
4. 最后写 \`turtle.done()\`

提示：\`for i in range(4):\` 下面的两行代码记得缩进！`}],summary:`你今天开始画画了！这是一个新的世界。

记住：
• \`import turtle\` — 召唤小海龟
• \`turtle.forward(100)\` — 前进画线
• \`turtle.left(90)\` — 左转（90度是一个直角）
• 循环 + 画画 = 超级组合！

正方形只是开始，下一课我们要画更酷的图案！`},starterCode:`import turtle

for i in range(4):
    turtle.forward(100)
    turtle.left(90)

turtle.done()`,solution:`import turtle

for i in range(4):
    turtle.forward(100)
    turtle.left(90)

turtle.done()`,hints:["记得先写 `import turtle`，不然小海龟不在家！","循环 4 次：每次 `turtle.forward(100)` 和 `turtle.left(90)`","画完别忘了 `turtle.done()` —— 不然小海龟会一直等！"],checks:[{description:`代码里有 import turtle`,type:`contains`,value:`import turtle`},{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码里有 forward`,type:`contains`,value:`forward`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l2_8`,title:`第8课：彩虹螺旋`,series:`main`,difficulty:2,prerequisites:[`l2_7`],estimatedTime:30,objectives:[`学会使用 turtle.color() 改变画笔颜色`,`理解 turtle.speed() 控制画图速度`,`用循环 + 颜色 + 角度变化画螺旋图案`],content:{intro:`画了正方形，还不错吧？但你有没有觉得——只有黑色有点单调？

今天我们要给小海龟配上**彩色画笔**！
红色、蓝色、绿色、紫色……想用什么颜色就用什么颜色。

而且，我们不只画正方形了——我们要画一个**彩色螺旋线**！
这种图案在数学里叫"螺旋"，看起来超酷的。`,sections:[{type:`text`,title:`换颜色`,body:'`turtle.color("red")` 把画笔变成红色。\n常用的颜色名：`"red"`（红）、`"blue"`（蓝）、`"green"`（绿）、`"purple"`（紫）、`"orange"`（橙）。\n\n但如果每次手动换颜色太麻烦了……能不能让计算机自动换？\n当然可以！把颜色名做成一个列表，用循环依次取出来就行了。'},{type:`code`,title:`颜色列表 + 循环`,body:`colors = ["red", "blue", "green", "purple", "orange"]
for c in colors:
    turtle.color(c)
    turtle.forward(100)
    turtle.left(72)`},{type:`tip`,title:`画图速度`,body:"如果觉得画得太慢或太快，可以用 `turtle.speed(10)` 来控制：\n• 速度从 1（最慢）到 10（最快）\n• 想看动画效果 → 设慢一点（3~5）\n• 想直接看结果 → 设 `turtle.speed(10)`"},{type:`text`,title:`螺旋的秘密`,body:`螺旋线的秘密就是：**每次走的步数越来越多**！

第 1 次走 10 步，第 2 次走 20 步，第 3 次走 30 步……
步数越来越大，转角一直不变，就自然形成了螺旋！

用循环变量 \`i\` 乘以一个数，就能让步数递增。`},{type:`challenge`,body:`画一条彩色螺旋线！

要求：
1. 准备好几个颜色，比如红、蓝、绿、紫、橙
2. 循环 50 次
3. 每次的角度稍微转一下（试试 59 度）
4. 每次走的步数递增（试试 \`i * 5\`）
5. 每走一步换一个颜色

看看能画出什么样的图案？试试调不同的转角（比如 60、89、91）看看效果有什么不同！`}],summary:`太美了！你用代码创造了一幅彩色螺旋艺术品！🎨

今天学到的新技能：
• \`turtle.color("red")\` — 给画笔换颜色
• \`turtle.speed(10)\` — 控制画画速度
• 颜色列表 + 循环 = 自动换色
• 步数递增 + 固定转角 = 螺旋

去试试不同的颜色组合和转角吧，看看能画出什么惊喜！`},starterCode:`import turtle
turtle.speed(10)

colors = ["red", "blue", "green", "purple", "orange"]

for i in range(50):
    turtle.color(colors[i % 5])
    turtle.forward(i * 5)
    turtle.left(59)

turtle.done()`,solution:`import turtle
turtle.speed(10)

colors = ["red", "blue", "green", "purple", "orange"]

for i in range(50):
    turtle.color(colors[i % 5])
    turtle.forward(i * 5)
    turtle.left(59)

turtle.done()`,hints:["用 `colors[i % 5]` 可以让颜色循环使用（i 除以 5 的余数取 0~4）","步数用 `i * 5` 会让每次走的距离越来越大",`转角试试 59、60、89、91，看看画出来的图案有什么不一样？`],checks:[{description:`代码里有 import turtle`,type:`contains`,value:`import turtle`},{description:`代码里有 turtle.color`,type:`contains`,value:`color(`},{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码可以正常运行`,type:`no_error`}]}],D=[{id:`l3_9`,title:`第9课：猜数字游戏`,series:`main`,difficulty:3,prerequisites:[`l2_6`],estimatedTime:25,objectives:[`理解 if/else 条件判断`,`学会使用比较运算符（>, <, ==）`,`做出一个猜数字小游戏`],content:{intro:`之前我们学的代码，计算机都是"照做"就行——你说什么它做什么。

但真正的程序需要会**做判断**：
• 如果密码正确 → 让你进门
• 如果密码错误 → 不让你进
• 如果分数高 → 显示"厉害！"
• 如果分数低 → 显示"加油！"

今天我们就来学这个"如果…就…"——Python 里的 \`if\` 语句。
然后用它做一个猜数字游戏！`,sections:[{type:`text`,title:`if 语句 — 让程序做判断`,body:'`if` 后面跟一个**条件**，冒号下面写"条件成立时要做什么"。\n\n就像说："如果外面下雨，我就带伞。"\n\n比较运算符有：\n• `>` 大于  `>=` 大于等于\n• `<` 小于  `<=` 小于等于\n• `==` 等于（两个等号！一个等号是赋值）\n• `!=` 不等于'},{type:`code`,title:`if 示例`,body:`score = 85
if score >= 60:
    print("及格啦！🎉")
else:
    print("再试一次吧！💪")`},{type:`tip`,title:`== 和 = 不一样！`,body:"`=` 一个等号 = **赋值**（把东西放在盒子里）\n`==` 两个等号 = **判断是否相等**（问问：这两个一样吗？）\n\n这是新手最容易搞混的地方，记住：判断相不相等用 `==`！"},{type:`text`,title:`猜数字游戏的思路`,body:`游戏的规则很简单：
1. 程序在心里想一个数字（比如 7）
2. 玩家输入一个数字
3. 如果猜大了 → 提示"大了"
4. 如果猜小了 → 提示"小了"
5. 如果猜对了 → 提示"恭喜！"

用 \`input()\` 获取玩家输入，用 \`int()\` 把文字转成数字，用 if/elif/else 做判断。`},{type:`challenge`,body:`做一个猜数字游戏！

要求：
1. 用一个变量 \`secret = 7\` 存储目标数字
2. 用 \`input()\` 让玩家猜
3. 用 \`int()\` 把输入的文字转成数字
4. 用 if/elif/else 判断大了、小了、还是猜中了

提示：\`int(input("请输入："))\` 可以一步完成输入和转数字。`}],summary:'你做了第一个有"判断"的程序！这是程序变聪明的第一步。\n\n记住了：\n• `if 条件:` — 条件成立就执行\n• `else:` — 否则执行\n• 比较用 `>` `<` `==` `!=`\n• `=` 赋值，`==` 判断相等\n\n试试把 secret 改成别的数字，和爸爸一起玩！'},starterCode:`secret = 7

answer = int(input("我心里想了一个1到10的数字，你猜是几？"))

if answer > secret:
    print("大了！再试试")
elif answer < secret:
    print("小了！再试试")
else:
    print("🎉 猜对了！太厉害了！")`,solution:`secret = 7

answer = int(input("我心里想了一个1到10的数字，你猜是几？"))

if answer > secret:
    print("大了！再试试")
elif answer < secret:
    print("小了！再试试")
else:
    print("🎉 猜对了！太厉害了！")`,hints:["用 `int(input(...))` 把玩家输入的文字变成数字","三个分支：`if answer > secret`、`elif answer < secret`、`else`（等于）","注意：判断相等用 `==`，不是 `=`"],checks:[{description:`代码里有 if 语句`,type:`contains`,value:`if `},{description:`代码里有 int(input())`,type:`contains`,value:`int(input(`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l3_10`,title:`第10课：年龄小管家`,series:`main`,difficulty:3,prerequisites:[`l3_9`],estimatedTime:25,objectives:[`掌握 if/elif/else 多分支判断`,`理解条件判断的顺序（从上到下依次检查）`,`学会用 int() 把文字转数字`],content:{intro:`上节课我们用 if/else 做了猜数字游戏，但只判断了 3 种情况。

现实中很多事情不止两种情况！比如：
• 0-3 岁：婴幼儿
• 4-12 岁：儿童
• 13-17 岁：青少年
• 18 岁以上：大人

这时需要 \`elif\`（else + if 的缩写），可以让程序分很多层判断。
今天我们要做一个"年龄小管家"，根据年龄给出不同的回应！`,sections:[{type:`text`,title:`if / elif / else 三兄弟`,body:`完整的判断结构就像爬楼梯：

\`if 条件1:\` — 第一层，检查条件1
\`elif 条件2:\` — 第二层，如果条件1不成立，再检查条件2
\`elif 条件3:\` — 第三层……
\`else:\` — 最后一层，上面都不成立时执行

程序**从上到下**逐个检查，哪个条件先满足就执行哪个。
一旦找到一个匹配的，后面的就不看了。`},{type:`code`,title:`elif 示例`,body:`age = 10

if age < 4:
    print("你还是个小宝宝 👶")
elif age < 13:
    print("你是儿童！🎒")
elif age < 18:
    print("你是青少年 📚")
else:
    print("你是大人了 👨‍💻")`},{type:`tip`,title:`顺序很重要！`,body:`如果把条件反过来写，结果就错了：

❌ 错误写法：先判断 \`age < 18\`，那么 3 岁也被归为"青少年"
✅ 正确写法：从最严格的条件开始判断（从小到大）

记住：**先写范围最窄的条件，再写范围更宽的条件**。`},{type:`text`,title:`input() 和 int()`,body:'`input()` 获取用户输入，但得到的是**文字**（字符串）。\n比如输入 10，Python 把它当成 `"10"` 而不是数字 10。\n\n`int()` 可以把文字转成整数：`int("10")` → 数字 10。\n所以 `age = int(input("你几岁了？"))` 一步到位！'},{type:`challenge`,body:`做一个"年龄小管家"程序！

要求：
1. 用 \`input()\` 问年龄
2. 用 \`int()\` 把输入转成数字
3. 按照年龄分多档回复：
   · 0-3 岁：小宝宝
   · 4-12 岁：小朋友
   · 13-17 岁：大朋友
   · 18+ 岁：大人
4. 如果输入的数字很奇怪（比如 200），给出特别回复！`}],summary:`if / elif / else 让你可以处理很多不同的情况，程序越来越像一个真正的"小管家"了！

记住：
• \`if\` 第一条判断 | \`elif\` 中间判断 | \`else\` 最后的兜底
• 判断是**从上到下**的，先匹配先执行
• \`int()\` 把文字转数字
• 条件从小范围写到大范围

试着改改年龄的分界点，看看不同的回复！`},starterCode:`age = int(input("请输入你的年龄："))

if age <= 3:
    print("你还是个小宝宝呢 👶")
elif age <= 12:
    print("你是个可爱的小朋友 🎒")
elif age <= 17:
    print("你是个酷酷的大朋友 📚")
elif age <= 120:
    print("你已经是大人啦！👨‍💻")
else:
    print("哇！" + str(age) + "岁？你是神仙吗？🧚")`,solution:`age = int(input("请输入你的年龄："))

if age <= 3:
    print("你还是个小宝宝呢 👶")
elif age <= 12:
    print("你是个可爱的小朋友 🎒")
elif age <= 17:
    print("你是个酷酷的大朋友 📚")
elif age <= 120:
    print("你已经是大人啦！👨‍💻")
else:
    print("哇！" + str(age) + "岁？你是神仙吗？🧚")`,hints:["用 `age = int(input(...))` 直接获取数字年龄",`条件从大到小或从小到大写，顺序要对`,`最后一个 else 用来处理"意外输入"（比如 200 岁）`],checks:[{description:`代码里有 if 和 elif`,type:`contains`,value:`elif `},{description:`代码里有 int(input())`,type:`contains`,value:`int(input(`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l3_11`,title:`第11课：画个星星`,series:`main`,difficulty:3,prerequisites:[`l2_7`,`l3_9`],estimatedTime:25,objectives:[`结合 turtle 和条件判断`,`理解五角星的几何画法`,`用循环 + 条件画出星星图案`],content:{intro:`用 turtle 画正方形很容易——每次转 90 度，循环 4 次。

但五角星呢？它的角是尖尖的，内角不是 90 度，而是 **144 度**。
这是一个有趣的数学小知识：五角星每个"转角"是 144 度（或者说是 180-144=36 度内角）。

今天我们要把 L2 学的 turtle 和 L3 学的条件判断结合，
画出一个漂亮的星星——甚至可以用 if 判断来决定画的大小！`,sections:[{type:`text`,title:`五角星的秘密`,body:`画五角星的思路很简单：

1. 向前画一条线（星星的一条边）
2. 转 144 度
3. 重复 5 次

就这 3 步，一个完美的五角星就出来了！

试试边长 150：\`turtle.forward(150)\` + \`turtle.left(144)\` × 5 次。`},{type:`code`,title:`画五角星`,body:`import turtle

for i in range(5):
    turtle.forward(150)
    turtle.left(144)

turtle.done()`},{type:`tip`,title:`为什么是 144 度？`,body:`不用深究数学原理（以后你会学到），可以先记住：
• 正多边形转角 = 360 / 边数
• 正方形 → 360÷4 = 90°
• 五角星 → 转转 144°（这是个特殊值）

试着把 144 改成其他角度，看看会画出什么奇怪的图形？`},{type:`text`,title:`用 if 改变颜色`,body:`画星星的时候，可以让奇数边用一种颜色、偶数边用另一种颜色：

\`if i % 2 == 0:\` — 判断 i 是不是偶数（除以 2 余数为 0）

偶数边用红色，奇数边用金色，一颗星就更漂亮了！`},{type:`challenge`,body:`画一颗漂亮的星星！

要求：
1. 用 turtle 画一颗五角星（5 条边，转角 144°）
2. 用 if 条件让第偶数条边是金色、第奇数条边是红色
3. 画完之后加上 \`turtle.done()\`

扩展挑战：试试画 3 颗不同大小的星星排成一排！`}],summary:`五角星搞定！现在你已经可以用 turtle 画出标准的几何图形了。

记住：
• 五角星 = forward + left(144) × 5
• \`i % 2\` 可以判断奇偶
• turtle + if = 可以按条件改变画的样式

试试把循环次数和转角改一改，探索更多有趣的图形！`},starterCode:`import turtle

turtle.speed(8)

for i in range(5):
    if i % 2 == 0:
        turtle.color("gold")
    else:
        turtle.color("red")
    turtle.forward(150)
    turtle.left(144)

turtle.done()`,solution:`import turtle

turtle.speed(8)

for i in range(5):
    if i % 2 == 0:
        turtle.color("gold")
    else:
        turtle.color("red")
    turtle.forward(150)
    turtle.left(144)

turtle.done()`,hints:[`五角星的关键是转角 144°，循环 5 次`,"用 `i % 2 == 0` 判断偶数，`else` 处理奇数","别忘了 `import turtle` 在最上面，`turtle.done()` 在最后！"],checks:[{description:`代码里有 import turtle`,type:`contains`,value:`import turtle`},{description:`代码里有 if 语句`,type:`contains`,value:`if `},{description:`代码里有 144 度转角`,type:`contains`,value:`144`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l3_12`,title:`第12课：石头剪刀布`,series:`main`,difficulty:3,prerequisites:[`l3_10`],estimatedTime:30,objectives:[`学会使用 random 模块生成随机数`,`掌握多条件嵌套判断（if 里面套 if）`,`做一个完整的人机对战小游戏`],content:{intro:`猜数字只有一个秘密数字，玩几次就腻了。

如果计算机每次**随机出招**，那就好玩多了！

Python 的 \`random\` 模块可以让计算机"随机选"。
就像一个抽签筒，每次摇出来的结果都不一样。

今天我们要做一个完整的"石头✊剪刀✌️布🖐️"小游戏——你和计算机对战！`,sections:[{type:`text`,title:`random 模块 — 让计算机随机选`,body:'`import random` 引入随机数模块。\n\n最有用的两个函数：\n• `random.randint(1, 3)` — 随机返回 1、2 或 3\n• `random.choice(["石头", "剪刀", "布"])` — 从列表中随机选一个\n\n我们用 `random.choice()` 让计算机随机出招！'},{type:`code`,title:`random 示例`,body:`import random

moves = ["石头", "剪刀", "布"]
computer = random.choice(moves)
print("计算机出了：", computer)`},{type:`tip`,title:`if 里面可以套 if`,body:`石头剪刀布的判断逻辑需要两层：

第一层：比较你和计算机谁赢（9 种组合）
第二层：每种组合里面可能有更细的判断

不用怕，用之前学的 if/elif/else 就能搞定！
关键是先把"谁赢谁输"的规则想清楚了再写代码。`},{type:`text`,title:`判断胜负的逻辑`,body:`石头剪刀布的胜负规则：
• 石头 赢 剪刀
• 剪刀 赢 布
• 布 赢 石头
• 相同 = 平局

写出所有可能的情况分别判断，或者更聪明的方法：
算出玩家和计算机出招的下标差来判断胜负（暂时不用管，先老老实实写 if）。`},{type:`challenge`,body:`做一个石头剪刀布小游戏！

要求：
1. 用 \`input()\` 让玩家出拳（石头/剪刀/布）
2. 用 \`random.choice()\` 让计算机随机出招
3. 判断胜负并显示结果
4. 如果玩家输入的不是"石头""剪刀""布"，提示输入错误

提示：先检查输入是否合法，再比较胜负！`}],summary:`你做了一个可以真正"玩"的游戏！用 random 让计算机随机出招，用 if 判断胜负。

今天的新技能：
• \`import random\` — 随机数模块
• \`random.choice()\` — 从列表随机选
• 多条件嵌套判断

现在你已经会做交互式游戏了，去和爸爸挑战几盘吧！✊✌️🖐️`},starterCode:`import random

print("=== 石头剪刀布 ===\\n")

player = input("请出拳（石头/剪刀/布）：")
computer = random.choice(["石头", "剪刀", "布"])

print("你出了：", player)
print("计算机出了：", computer)

if player == computer:
    print("平局！🤝")
elif player == "石头":
    if computer == "剪刀":
        print("你赢了！🎉")
    else:
        print("计算机赢了 😅")
elif player == "剪刀":
    if computer == "布":
        print("你赢了！🎉")
    else:
        print("计算机赢了 😅")
elif player == "布":
    if computer == "石头":
        print("你赢了！🎉")
    else:
        print("计算机赢了 😅")
else:
    print("请输入 石头、剪刀 或 布！")`,solution:`import random

print("=== 石头剪刀布 ===\\n")

player = input("请出拳（石头/剪刀/布）：")
computer = random.choice(["石头", "剪刀", "布"])

print("你出了：", player)
print("计算机出了：", computer)

if player == computer:
    print("平局！🤝")
elif player == "石头":
    if computer == "剪刀":
        print("你赢了！🎉")
    else:
        print("计算机赢了 😅")
elif player == "剪刀":
    if computer == "布":
        print("你赢了！🎉")
    else:
        print("计算机赢了 😅")
elif player == "布":
    if computer == "石头":
        print("你赢了！🎉")
    else:
        print("计算机赢了 😅")
else:
    print("请输入 石头、剪刀 或 布！")`,hints:['用 `random.choice(["石头", "剪刀", "布"])` 让计算机随机选一个',"先判断 `player == computer` → 平局",`然后分"石头""剪刀""布"三种情况，每种里面再判断计算机出什么`],checks:[{description:`代码里有 import random`,type:`contains`,value:`import random`},{description:`代码里有 if 判断`,type:`contains`,value:`if `},{description:`代码里有 input()`,type:`contains`,value:`input(`},{description:`代码可以正常运行`,type:`no_error`}]}],O=[{id:`l4_13`,title:`第13课：购物清单`,series:`main`,difficulty:4,prerequisites:[`l3_10`],estimatedTime:25,objectives:[`认识列表——一个能装很多东西的"大盒子"`,`学会用 append() 往列表里添加东西`,`用 for 循环遍历列表里的每一项`],content:{intro:`你有没有跟妈妈一起去超市买过东西？

出门前，妈妈会说："记好了，要买牛奶、面包、鸡蛋、苹果……"
如果只买一两样还能记住，但要买十样呢？肯定得写个清单！

在 Python 里，我们也需要一个"购物清单"来装很多东西。
它叫**列表（list）**，就像一个有很多格子的抽屉柜！🗄️`,sections:[{type:`text`,title:`列表——有很多格子的抽屉柜`,body:'列表用方括号 `[]` 表示，里面的东西用逗号隔开：\n\n`shopping = ["牛奶", "面包", "鸡蛋", "苹果"]`\n\n每个格子有一个**编号**，从 **0** 开始！\n• 第 0 号格子：`shopping[0]` → `"牛奶"`\n• 第 1 号格子：`shopping[1]` → `"面包"`\n• 第 2 号格子：`shopping[2]` → `"鸡蛋"`\n\n⚠️ 计算机从 0 开始数，不是从 1！刚开始会不习惯，多练几次就好啦。'},{type:`code`,title:`创建和查看列表`,body:`shopping = ["牛奶", "面包", "鸡蛋", "苹果"]

print("我的购物清单：", shopping)
print("第一样要买的是：", shopping[0])
print("一共有", len(shopping), "样东西")`},{type:`tip`,title:`len() — 数一数有多少`,body:"`len(列表名)` 可以告诉你列表里有几样东西。\n比如 `len(shopping)` 就是 4。\n\n这在写循环时特别有用——不用自己数，计算机帮你数！"},{type:`text`,title:`往列表里加东西 — append()`,body:`清单写好了，突然想起来还要买酸奶！怎么办？

用 \`append()\` 加到末尾：
\`shopping.append("酸奶")\`

就像在抽屉柜最后面再加一个新抽屉，放进"酸奶"。
append 就是"追加、添加"的意思。`},{type:`code`,title:`用 append 加东西`,body:`shopping = ["牛奶", "面包", "鸡蛋"]
print("原来：", shopping)

shopping.append("酸奶")
shopping.append("香蕉")

print("现在：", shopping)
print("一共有", len(shopping), "样")`},{type:`text`,title:`遍历列表——一件一件看`,body:'如果想打印清单里的每一样东西，用 `for` 循环就行：\n\n`for item in shopping:`\n    `print("要买：", item)`\n\n`for ... in ...` 就像你用手指着清单，一件一件念出来。\n每次循环，`item` 就变成下一件商品的名字。'},{type:`challenge`,body:`做一个你自己的购物清单程序！

要求：
1. 创建一个购物清单，至少有 3 样东西
2. 用 \`print()\` 显示清单的内容
3. 用 \`append()\` 再添加 2 样东西
4. 用 \`for\` 循环把清单里每一样都打印出来
5. 最后打印 "一共有 X 样东西要买"

💡 想想看：为什么用 for 循环比一个一个 print 更好？`}],summary:'你现在有了一个超级购物清单！以后去超市就不会忘东西啦。🛒\n\n今天学到的新技能：\n• `[ ]` — 创建列表，用逗号分隔\n• `列表[编号]` — 取出第几个东西（从 0 开始！）\n• `列表.append(东西)` — 往最后面加一个\n• `for 变量 in 列表:` — 遍历每一个\n• `len(列表)` — 数一数有几个\n\n列表是 Python 里最常用的"容器"，好好掌握它！'},starterCode:`shopping = ["牛奶", "面包", "鸡蛋"]

print("我的购物清单：", shopping)
print("第一样：", shopping[0])

# 添加两样东西
shopping.append("苹果")
shopping.append("香蕉")

print("更新后的清单：", shopping)
print("一共有", len(shopping), "样东西")`,solution:`shopping = ["牛奶", "面包", "鸡蛋"]

print("我的购物清单：", shopping)
print("第一样：", shopping[0])

shopping.append("苹果")
shopping.append("香蕉")

print("更新后的清单：")
for item in shopping:
    print("  要买：", item)

print("一共有", len(shopping), "样东西要买")`,hints:["用方括号 `[ ]` 创建列表，里面的东西用逗号隔开",'用 `列表名.append("新东西")` 来添加',"遍历用 `for item in shopping:`，`item` 是临时变量名，可以随便取"],checks:[{description:`代码里有列表（方括号）`,type:`contains`,value:`[`},{description:`代码里有 append(`,type:`contains`,value:`append(`},{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l4_14`,title:`第14课：英文单词本`,series:`main`,difficulty:4,prerequisites:[`l4_13`],estimatedTime:25,objectives:[`认识字典——用"名字"来找东西的容器`,`学会创建字典、添加和查找内容`,`用 for 循环遍历字典的每一项`],content:{intro:`上一课的列表用编号（0, 1, 2...）来找东西。
但有时候，用编号找东西不太方便——
"第 3 个单词是什么意思来着？"你得先数到第 3 个。

如果有一种容器，能**直接用名字来找**，那该多好！
比如：\`wordbook["apple"]\` 直接告诉你 → "苹果"。

这种容器就叫**字典（dict）**，就像一本真正的字典——
你查"apple"，它就告诉你意思。📖`,sections:[{type:`text`,title:`字典——每个东西都有自己的名字`,body:`字典用花括号 \`{}\`，里面是"名字: 内容"对：

\`wordbook = {"apple": "苹果", "cat": "猫", "dog": "狗"}\`

左边是**名字**（key），右边是**内容**（value）。
想知道 "apple" 是什么意思？
\`wordbook["apple"]\` → \`"苹果"\` ✅

就像查字典一样——按字母顺序找到单词，旁边写着意思！`},{type:`code`,title:`创建和查询字典`,body:`wordbook = {
    "apple": "苹果",
    "cat": "猫",
    "dog": "狗",
    "hello": "你好",
    "thank you": "谢谢",
}

print("apple 的意思是：", wordbook["apple"])
print("hello 的意思是：", wordbook["hello"])`},{type:`tip`,title:`列表 vs 字典`,body:`什么时候用列表？什么时候用字典？

📋 **列表** — 顺序重要，用编号找："第 3 个"是什么
📖 **字典** — 名字重要，用名字找："apple"是什么意思

简单说：
• 只关心"有哪些" → 用列表
• 关心"哪个是哪个" → 用字典`},{type:`text`,title:`往字典里加新词`,body:`字典不用 append，直接"赋值"就行：

\`wordbook["banana"] = "香蕉"\`

如果 "banana" 已经存在 → 修改它的意思
如果 "banana" 不存在 → 添加这个新词

就这么简单！比列表还方便。`},{type:`code`,title:`添加和修改`,body:`wordbook = {"apple": "苹果"}
print("一开始：", wordbook)

# 添加新词
wordbook["banana"] = "香蕉"
wordbook["cat"] = "猫"

print("添加后：", wordbook)

# 修改已有词
wordbook["apple"] = "🍎 苹果（好吃！）"
print("修改后：", wordbook)`},{type:`text`,title:`遍历字典`,body:"用 `for` 循环也可以遍历字典。但和列表不太一样：\n\n`for word in wordbook:` — `word` 会依次变成每个单词\n然后用 `wordbook[word]` 拿到它的意思\n\n或者更厉害的方法：\n`for word, meaning in wordbook.items():`\n一次性拿到单词 AND 意思！"},{type:`challenge`,body:`做一个你自己的英文单词本！

要求：
1. 创建一个字典，至少放 5 个英文单词和它们的中文意思
2. 用 \`input()\` 让用户输入一个英文单词
3. 如果字典里有这个单词 → 显示中文意思
4. 如果没有 → 提示"还没收录这个单词"
5. 用 \`for\` 循环打印出所有单词和意思

💡 提示：用 \`if word in wordbook:\` 检查单词是否存在！`}],summary:'你有了一本会说话的英文单词本！可以随时查单词啦。📖\n\n今天学到的新技能：\n• `{"名字": "内容"}` — 创建字典\n• `字典["名字"]` — 查找内容\n• `字典["新名字"] = "新内容"` — 添加或修改\n• `for 变量 in 字典:` — 遍历所有名字\n• `if 名字 in 字典:` — 检查有没有这个名字\n\n列表和字典是 Python 里最重要的两个"容器"，都学会啦！'},starterCode:`wordbook = {
    "apple": "苹果",
    "cat": "猫",
    "dog": "狗",
    "hello": "你好",
    "python": "蟒蛇（也是一种编程语言！）",
}

word = input("请输入英文单词：")

if word in wordbook:
    print(word, "的意思是：", wordbook[word])
else:
    print("抱歉，还没收录", word)

print("\\n我的单词本里有这些词：")
for w in wordbook:
    print(" ", w, "—", wordbook[w])`,solution:`wordbook = {
    "apple": "苹果",
    "cat": "猫",
    "dog": "狗",
    "hello": "你好",
    "python": "蟒蛇（也是一种编程语言！）",
}

word = input("请输入英文单词：")

if word in wordbook:
    print(word, "的意思是：", wordbook[word])
else:
    print("抱歉，还没收录", word)
    add = input("要添加这个词吗？(是/否)")
    if add == "是":
        meaning = input("请输入中文意思：")
        wordbook[word] = meaning
        print("已添加！")

print("\\n=== 我的单词本 ===")
for w in wordbook:
    print(" ", w, "—", wordbook[w])`,hints:["用 `if word in wordbook:` 来判断字典里有没有这个单词",'查找用 `wordbook[word]`，添加用 `wordbook[word] = "意思"`',"遍历用 `for w in wordbook:`，然后用 `wordbook[w]` 取出意思"],checks:[{description:`代码里有字典（花括号）`,type:`contains`,value:`{`},{description:`代码里有输入 input`,type:`contains`,value:`input(`},{description:`代码里有 if 判断`,type:`contains`,value:`if `},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l4_15`,title:`第15课：随机点名器`,series:`main`,difficulty:4,prerequisites:[`l4_13`],estimatedTime:25,objectives:[`复习列表和 random 模块的组合使用`,`学会从列表中随机抽取元素`,`做一个实用的随机点名小程序`],content:{intro:`上课的时候，老师想请一个同学回答问题——
但选谁好呢？每个同学都举手，老师好为难！

不如让计算机来决定！做一个**随机点名器**——
把所有同学的名字放进列表里，计算机随机选一个。
公平、公正、还有惊喜感！🎯

这就要用到我们学过的两个老朋友：**列表** + **random**！`,sections:[{type:`text`,title:`回顾两个老朋友`,body:'📋 **列表**：`students = ["小明", "小红", "小刚", "小丽"]`\n\n🎲 **random**：`import random` 让计算机做随机选择\n\n把两个结合起来：\n• `random.choice(列表)` — 从列表中随机挑一个\n• `random.randint(1, 10)` — 随机出一个 1 到 10 的数字\n\n`random.choice()` 就像抽签筒——你把手伸进去，摸出一张来！'},{type:`code`,title:`最简单的点名器`,body:`import random

students = ["小明", "小红", "小刚", "小丽"]
lucky = random.choice(students)

print("今天被点中的同学是：", lucky, "🎉")`},{type:`tip`,title:`先打乱，再抽签`,body:`如果你想更"正式"一点，可以先把名单**打乱**，再按顺序抽：

\`random.shuffle(students)\` — 把列表里的顺序随机打乱

打乱之后，\`students[0]\` 就是一个随机的人了！
而且打乱后整个列表都是随机的，可以一直按顺序点下去。`},{type:`text`,title:`不要让同一个人被点两次`,body:`如果课堂上想给每个同学机会，不要重复点名——

一种办法：每点一个人，就把它从列表里删掉！
\`students.remove("小明")\` — 把"小明"从列表里移除。

或者更简单：
• 先 \`random.shuffle()\` 打乱名单
• 用一个 \`index\` 变量记录当前点到第几个
• 每次点完 \`index + 1\`，就不会点到重复的人了`},{type:`code`,title:`不重复点名`,body:`import random

students = ["小明", "小红", "小刚", "小丽", "小华"]
random.shuffle(students)  # 打乱顺序

for index, student in enumerate(students):
    print(f"第{index+1}个：{student}")
# 这样每个人都会被点到一次，顺序随机！`},{type:`challenge`,body:`做一个实用的随机点名器！

要求：
1. 创建一个名单列表，至少放 5 个名字
2. 用 \`random.choice()\` 随机选一个人
3. 显示被选中的人，加个有趣的 emoji 🎉
4. 用 \`random.shuffle()\` 打乱名单，打印出随机排序后的名单

🌟 进阶挑战：模拟"多次点名，不重复"——
用循环每次点一个人并打印，然后从列表里删掉它，直到点完所有人！`}],summary:`你做了一个随机点名器！以后老师再也不用纠结叫谁回答问题了。😄

今天复习和学到的新技能：
• \`random.choice(列表)\` — 从列表里随机抽一个
• \`random.shuffle(列表)\` — 随机打乱顺序
• \`列表.remove(东西)\` — 从列表里删除指定内容
• 列表 + random = 无限可能！

试试把名单换成你的朋友、零食、或者周末想做的事——
让计算机帮你做选择！`},starterCode:`import random

students = ["小明", "小红", "小刚", "小丽", "小华"]

# 随机选一个
lucky = random.choice(students)
print("🎉 被点中的同学是：", lucky)

# 打乱名单
random.shuffle(students)
print("\\n随机排序后的名单：")
for i, name in enumerate(students):
    print(f"  {i+1}. {name}")`,solution:`import random

students = ["小明", "小红", "小刚", "小丽", "小华"]

# 随机选一个
lucky = random.choice(students)
print("🎉 被点中的同学是：", lucky)

# 打乱并逐个点名
random.shuffle(students)
print("\\n按顺序点名：")
for i, name in enumerate(students):
    print(f"  第{i+1}个：{name}")

print("\\n所有人都被点过啦！✅")`,hints:["先 `import random`，然后用 `random.choice(名单)` 随机选人","`random.shuffle(名单)` 会直接打乱原来的列表（不需要用 = 赋值）","要逐个点名不重复：先用 `random.shuffle()` 打乱，再用 `for` 循环依次打印"],checks:[{description:`代码里有 import random`,type:`contains`,value:`import random`},{description:`代码里有列表`,type:`contains`,value:`[`},{description:`代码里有 random.choice 或 random.shuffle`,type:`contains`,value:`random.`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l4_16`,title:`第16课：画个花园`,series:`main`,difficulty:4,prerequisites:[`l4_13`,`l2_7`],estimatedTime:30,objectives:[`用列表存储多个位置信息`,`用列表存储多个颜色`,`组合 turtle + 列表 + 循环画复杂图案`],content:{intro:`学了列表，又学过了 turtle 画图——
如果把两个组合在一起，会发生什么？💡

想象一下：你想画一个花园，有好多花。
如果一朵一朵手动写位置和颜色，要写好多行代码！

但如果用**列表**来存所有花的位置和颜色，
然后用**循环**一次性画出来——那就太帅了！

今天我们要当一回"代码园艺师"，用 Python 种出一个花园！🌸🌻🌺`,sections:[{type:`text`,title:`用列表存位置`,body:`画布上的每个点都可以用 \`turtle.goto(x, y)\` 来移动。

如果我们要在多个位置画花，可以把所有位置存在列表里：

\`positions = [(-100, 0), (0, 0), (100, 0)]\`

每个位置是一个**小括号**包起来的两个数字（x 坐标和 y 坐标）。
然后用循环依次飞到每个位置画花！`},{type:`code`,title:`移动到不同位置`,body:`import turtle
turtle.speed(10)

# 三朵花的位置
positions = [(-100, 0), (0, 0), (100, 0)]

for pos in positions:
    turtle.penup()
    turtle.goto(pos[0], pos[1])  # x, y
    turtle.pendown()
    # 在这里画花...

turtle.done()`},{type:`tip`,title:`画布的坐标系`,body:`画布大小是 400×400，中心是 (0, 0)：

• 向右 → x 变大（正数）
• 向左 → x 变小（负数）
• 向下 → y 变大（正数，Canvas 坐标）
• 向上 → y 变小（负数）

花的位置不要超过范围，不然就画到画布外面啦！`},{type:`text`,title:`画一朵花`,body:`花可以这样画：
1. 选一个颜色
2. 画一个圆圈（花瓣）
3. 转一点角度
4. 再画一个圆圈
5. 重复……直到转完一圈

用循环画几个花瓣（比如 6 个），就组成了一朵花！
把画花的代码包好，在每个位置调用一次——一个花园就出现了！`},{type:`code`,title:`画一朵花的函数`,body:`def draw_flower(x, y, color):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.color(color)
    for _ in range(6):
        turtle.circle(20)
        turtle.left(60)`},{type:`challenge`,body:`用代码画一个彩色花园！

基础要求：
1. 用 \`import turtle\` 召唤小海龟
2. 创建一个颜色列表，如 \`["red", "pink", "purple", "orange", "blue"]\`
3. 创建位置列表，至少 5 个不同的位置
4. 用循环在每个位置画一朵不同颜色的花
5. 最后 \`turtle.done()\`

🌟 提示：花可以用 \`circle()\` 画圆来组成，
或者任何你觉得好看的图形都可以！创意不限！`}],summary:`你创造了一个代码花园！每一朵花都是代码自动画出来的。🌸

今天的超级组合技：
• 列表存位置和颜色
• turtle 画图
• for 循环批量处理
• 三者组合 = 无限创作力！

列表让代码变得简洁，循环让重复工作自动化——
这就是编程的魅力！试试把位置换一换、颜色换一换，
看看能创作出什么样的花园？`},starterCode:`import turtle
turtle.speed(10)

colors = ["red", "pink", "purple", "orange", "blue"]
positions = [(-120, 0), (-60, -30), (0, 0), (60, -30), (120, 0)]

for i in range(len(positions)):
    x = positions[i][0]
    y = positions[i][1]
    color = colors[i]

    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.color(color)
    # 画一朵花：6 个花瓣
    for _ in range(6):
        turtle.circle(15)
        turtle.left(60)

turtle.done()`,solution:`import turtle
turtle.speed(10)

colors = ["red", "pink", "purple", "orange", "blue"]
positions = [(-120, 0), (-60, -30), (0, 0), (60, -30), (120, 0)]

for i in range(len(positions)):
    x = positions[i][0]
    y = positions[i][1]
    color = colors[i]

    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.color(color)
    for _ in range(6):
        turtle.circle(15)
        turtle.left(60)

turtle.done()`,hints:["用 `positions[i][0]` 取出第 i 个位置的 x 坐标，`[1]` 是 y 坐标","每个位置用 `goto()` 飞过去，再用循环画几个圆组成一朵花","颜色和位置用同一个序号 `i`，就能让每朵花颜色不同"],checks:[{description:`代码里有 import turtle`,type:`contains`,value:`import turtle`},{description:`代码里有列表`,type:`contains`,value:`[`},{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码里有 turtle.circle 或 goto`,type:`contains`,value:`circle`},{description:`代码可以正常运行`,type:`no_error`}]}],k=[{id:`l5_17`,title:`第17课：制作自己的指令`,series:`main`,difficulty:5,prerequisites:[`l4_13`],estimatedTime:25,objectives:[`理解函数的含义——自己创造新"指令"`,`学会用 def 定义函数`,`学会调用自己写的函数`],content:{intro:`还记得 Scratch 里的"自定义积木"吗？
你可以把一段常用的积木组合打包成一个新积木，
然后每次用的时候直接拖出来就行了！

Python 里也有同样的东西——叫**函数（function）**！
用 \`def\` 关键字，你就能创造属于自己的新"指令"。

就像一个魔法咒语——你给一段代码起个名字，
以后只要喊这个名字，整段代码就会自动执行！🪄`,sections:[{type:`text`,title:`函数 = 给一段代码起名字`,body:'定义函数的格式：\n\n```\ndef 函数名():\n    要执行的代码...\n```\n\n• `def` — define 的缩写，意思是"定义"\n• 函数名 — 你自己起的名字\n• `()` — 括号（暂时先空着）\n• `:` — 别忘了冒号！\n• 函数里面的代码要**缩进**（和 if/for 一样）'},{type:`code`,title:`第一个函数`,body:`# 定义一个叫 greet 的函数
def greet():
    print("=" * 20)
    print("你好！欢迎来到 Python 世界！")
    print("=" * 20)

# 调用函数（喊它的名字）
greet()
print("这是一段学习代码")
greet()  # 再喊一次！`},{type:`tip`,title:`def 和 调用的区别`,body:'`def greet():` — 这是"制造"函数，就像写一张菜谱。\n`greet()` — 这是"使用"函数，就像按菜谱做菜。\n\n⚠️ 常见错误：定义了函数但忘了调用它！\n只写 `def` 不写 `函数名()`，代码是不会自己跑的哦。'},{type:`text`,title:`函数的好处`,body:`为什么需要函数？三个好处：

1. **不用重复写** — 一段代码写一次，用很多次
2. **代码更整洁** — 给代码起个好名字，一看就懂
3. **改起来方便** — 改了函数定义，所有用到的地方都会变

以后写复杂程序，把功能拆成一个个小函数，思路会清晰很多！`},{type:`code`,title:`多个函数的组合`,body:`def print_line():
    print("-" * 30)

def show_title():
    print_line()
    print("   我的小程序")
    print_line()

def show_body():
    print("这是内容部分")
    print("这里是结尾")

# 按顺序调用
show_title()
show_body()
print_line()`},{type:`challenge`,body:`创建你自己的函数！

要求：
1. 定义一个函数 \`say_hello()\`，打印 3 句问候语
2. 定义一个函数 \`draw_stars()\`，打印一排星星（比如 10 个 ⭐）
3. 定义一个函数 \`show_motto()\`，打印你最喜欢的一句话
4. 按顺序调用这三个函数，看看效果！

💡 提示：先定义（def），再调用（函数名()）。定义放在代码前面！`}],summary:`你会创造自己的魔法咒语了！以后想说什么就定义什么！🪄

今天学到的新技能：
• \`def 函数名():\` — 定义一个函数
• \`函数名()\` — 调用（执行）一个函数
• 函数 = 给一段代码起名字
• 定义一次，随时调用

这是编程里最重要的概念之一。
所有大型程序都是由成千上万个小函数组成的！`},starterCode:`# 定义一个打招呼的函数
def say_hello():
    print("=" * 20)
    print("你好！我是 Python 小助手！")
    print("今天来学函数吧！")
    print("=" * 20)

# 调用它
say_hello()
print()
say_hello()  # 再调用一次`,solution:`def say_hello():
    print("=" * 20)
    print("你好！我是 Python 小助手！")
    print("今天来学函数吧！")
    print("=" * 20)

def draw_stars():
    print("⭐" * 10)

def show_motto():
    print("我的座右铭：只要努力，就能做到！💪")

say_hello()
draw_stars()
show_motto()
draw_stars()`,hints:["用 `def 函数名():` 开头，记得写冒号 `:`",`函数里面的代码要缩进（按 Tab 或 4 个空格）`,"定义完了之后，写 `函数名()` 来调用它"],checks:[{description:`代码里有 def`,type:`contains`,value:`def `},{description:`代码里有函数调用（括号）`,type:`contains`,value:`():`},{description:`代码里有 print(`,type:`contains`,value:`print(`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l5_18`,title:`第18课：万能画形状`,series:`main`,difficulty:5,prerequisites:[`l5_17`,`l2_7`],estimatedTime:30,objectives:[`学会给函数添加参数`,`理解参数的作用——让函数更灵活`,`用带参数的 turtle 函数画不同形状`],content:{intro:`上一课的函数很厉害——但每次做的事都一样。
如果我想画正方形，又想画三角形、五边形……
难道每种形状都写一个函数吗？

不用！给函数加上**参数（parameter）**就行！
参数就像函数肚子里的"变量槽"——
你每次调用时告诉它不同的数字，它就能做不同的事！

就像微波炉——你设定不同时间，它加热不同长度。
函数加上参数，也变成了"万能"工具！🔧`,sections:[{type:`text`,title:`带参数的函数`,body:`定义带参数的函数：

\`\`\`
def 函数名(参数1, 参数2, ...):
    在函数里使用参数...
\`\`\`

调用时传入具体的值：
\`函数名(100, "red")\`

参数让你能把"信息"传进函数里，
函数就能根据不同的信息做出不同的结果！`},{type:`code`,title:`带参数的函数示例`,body:`# sides=边数, length=边长
def draw_shape(sides, length):
    angle = 360 / sides
    for _ in range(sides):
        turtle.forward(length)
        turtle.left(angle)

draw_shape(4, 100)  # 正方形
draw_shape(3, 100)  # 三角形
draw_shape(6, 60)   # 六边形`},{type:`tip`,title:`参数名 = 变量名`,body:`定义时括号里的叫**参数名**，可以随便取。
调用时传入的叫**实参**（实际参数）。

比如 \`draw_shape(4, 100)\` 调用时：
• \`sides\` = 4
• \`length\` = 100

参数名的顺序很重要——按定义时的顺序来传！`},{type:`text`,title:`万能画形状 + turtle`,body:`现在我们来做一个"万能画形状"函数：

• 参数1：边数（画几边形）
• 参数2：边长（每条边多长）
• 参数3：颜色

有了这三个参数，你就能画任何正多边形！
三角形、正方形、五边形、六边形……甚至一百边形！`},{type:`code`,title:`万能画形状函数`,body:`import turtle
turtle.speed(10)

def draw_polygon(sides, length, color):
    turtle.color(color)
    angle = 360 / sides
    for _ in range(sides):
        turtle.forward(length)
        turtle.left(angle)

# 画各种形状
draw_polygon(3, 80, "red")    # 三角形
draw_polygon(4, 80, "blue")   # 正方形
draw_polygon(5, 60, "green")  # 五边形
draw_polygon(8, 40, "purple") # 八边形`},{type:`challenge`,body:`做一个万能画形状机器！

要求：
1. 定义一个 \`draw_polygon(sides, length, color)\` 函数
2. 函数里面计算转角 = 360 / sides
3. 用循环画出正多边形
4. 调用函数画出至少 4 种不同的形状
5. 每种形状用不同的颜色

🌟 进阶：用 \`turtle.penup()\` 和 \`turtle.goto()\` 把不同形状画在画布的不同位置，
组成一幅"几何艺术"作品！`}],summary:`你用几行代码就能画任何正多边形了——这就是参数的力量！

今天的核心技能：
• \`def func(param1, param2):\` — 带参数的函数
• 参数让函数变"万能"——不同输入，不同输出
• \`360 / sides\` — 计算任意多边形的外角
• turtle + 函数 = 几何艺术家！

试试画一个正 100 边形——它是圆的近似哦！`},starterCode:`import turtle
turtle.speed(10)

def draw_polygon(sides, length, color):
    turtle.color(color)
    angle = 360 / sides
    for _ in range(sides):
        turtle.forward(length)
        turtle.left(angle)

# 画几个形状试试
draw_polygon(3, 80, "red")
draw_polygon(4, 80, "blue")
draw_polygon(6, 50, "green")

turtle.done()`,solution:`import turtle
turtle.speed(10)

def draw_polygon(sides, length, color):
    turtle.color(color)
    angle = 360 / sides
    for _ in range(sides):
        turtle.forward(length)
        turtle.left(angle)

draw_polygon(3, 80, "red")
draw_polygon(4, 80, "blue")
draw_polygon(5, 60, "green")
draw_polygon(8, 40, "purple")

turtle.done()`,hints:["每个多边形的外角 = 360 ÷ 边数，用 `angle = 360 / sides` 计算",`画图的逻辑和画正方形一样：重复"前进 → 转角度"`,"别忘了先 `import turtle`，最后写 `turtle.done()`"],checks:[{description:`代码里有 def 定义函数`,type:`contains`,value:`def `},{description:`函数有参数（括号内有内容）`,type:`contains`,value:`draw_polygon(`},{description:`代码里有 import turtle`,type:`contains`,value:`import turtle`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`l5_19`,title:`第19课：密码生成器`,series:`main`,difficulty:5,prerequisites:[`l5_17`,`l4_13`],estimatedTime:30,objectives:[`复习函数的定义与调用`,`组合 random、字符串和循环`,`做一个实用的密码生成工具`],content:{intro:`你有没有想过——网站的密码是怎么"生成"出来的？
像 "aB3xK9mP" 这种密码，一看就不是人想的！

其实是用程序自动生成的。
今天我们要做一个**密码生成器**——
随机把字母和数字混在一起，生成安全的密码！🔐

要用到的技能：函数 + 列表 + random + 循环——
这可是你学过的"全家桶"组合！`,sections:[{type:`text`,title:`密码是怎么生成的？`,body:`生成密码的思路很简单：

1. 准备一堆可用字符（字母、数字、符号）
2. 用 \`random.choice()\` 从里面随机挑
3. 挑一次就是一个密码字符
4. 重复挑 N 次（比如 8 次），组合在一起

用 for 循环来控制密码长度，用字符串拼接来组合结果！`},{type:`code`,title:`最简单的密码生成`,body:`import random

chars = "abcdefghijklmnopqrstuvwxyz0123456789"
password = ""

for _ in range(8):
    password += random.choice(chars)

print("生成的密码：", password)`},{type:`tip`,title:`密码要够强`,body:`一个强密码通常包含：
• 大写字母 (A-Z)
• 小写字母 (a-z)
• 数字 (0-9)
• 特殊符号 (!@#$%等)

Python 提供了 \`string\` 模块帮你准备这些字符：
• \`import string\`
• \`string.ascii_letters\` — 所有英文字母
• \`string.digits\` — 所有数字
• \`string.punctuation\` — 所有符号`},{type:`text`,title:`用函数封装起来`,body:`可以把密码生成器封装成一个函数：

\`def generate_password(length):\`

参数 \`length\` 决定密码多长。
这样你就可以生成不同长度的密码：
• \`generate_password(6)\` → 6 位密码
• \`generate_password(12)\` → 12 位超强密码

函数让密码生成器变成一个随时可用的工具！`},{type:`code`,title:`完整的密码生成器函数`,body:`import random
import string

def generate_password(length):
    # 准备所有可用字符
    all_chars = string.ascii_letters + string.digits + "!@#$%"
    password = ""
    for _ in range(length):
        password += random.choice(all_chars)
    return password

print("8位密码：", generate_password(8))
print("12位密码：", generate_password(12))`},{type:`challenge`,body:`做一个密码生成器！

基础要求：
1. 定义一个 \`generate_password(length)\` 函数
2. 函数里准备好可用字符（至少包含字母和数字）
3. 用 \`random.choice()\` 随机挑选字符
4. 用循环拼出指定长度的密码
5. 调用函数生成 2-3 个不同长度的密码

🌟 进阶挑战：
• 多生成几个密码，用 \`input()\` 让用户选择想要多长的密码
• 尝试加入特殊符号让密码更强`}],summary:`你做出了一个实用的密码生成器！以后再也不怕想不出密码了。🔐

今天的综合技能：
• \`import string\` — 获取所有可用字符
• \`random.choice()\` — 随机挑选
• 字符串拼接 (\`+=\`) — 把字符拼在一起
• \`def\` 封装函数 — 做成可复用的工具
• 函数 + random + 列表 = 密码生成器！

这就是编程的乐趣——把零碎的知识组合成一个有用的工具！`},starterCode:`import random
import string

def generate_password(length):
    all_chars = string.ascii_letters + string.digits
    password = ""
    for _ in range(length):
        password += random.choice(all_chars)
    return password

print("生成的 6 位密码：", generate_password(6))
print("生成的 10 位密码：", generate_password(10))`,solution:`import random
import string

def generate_password(length):
    all_chars = string.ascii_letters + string.digits + "!@#$%&*"
    password = ""
    for _ in range(length):
        password += random.choice(all_chars)
    return password

print("=== 密码生成器 ===\\n")
print("6 位密码：", generate_password(6))
print("8 位密码：", generate_password(8))
print("12 位密码：", generate_password(12))
print("\\n选一个你喜欢的用吧！🔐")`,hints:["先 `import random` 和 `import string`","用 `string.ascii_letters` 获取所有字母，`string.digits` 获取所有数字",'密码初始值为空字符串 `""`，在循环里用 `+=` 拼接随机字符'],checks:[{description:`代码里有 def`,type:`contains`,value:`def `},{description:`代码里有 import random`,type:`contains`,value:`import random`},{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码中可以正常运行`,type:`no_error`}]},{id:`l5_20`,title:`第20课：我的作品展`,series:`main`,difficulty:5,prerequisites:[`l5_18`],estimatedTime:35,objectives:[`综合运用所有学过的 Python 知识`,`独立完成一个自由创作项目`,`体验"从想法到代码"的完整创作过程`],content:{intro:`恭喜你！你已经学完了所有基础知识。🎓

从 print() 到函数，从变量到字典——
你已经掌握了 Python 的"十八般武艺"！

今天没有固定的模板和要求——
这是你的**毕业作品展**！

把你学到的知识组合起来，创造一个属于自己的项目。
可以是一个游戏、一幅画、一个工具……任何东西！

现在是你的舞台，自由发挥吧！✨`,sections:[{type:`text`,title:`你的工具箱`,body:`来看看你掌握的技能（打 ✅ 的都会了）：

✅ \`print()\` — 输出任何东西
✅ \`input()\` — 和用户互动
✅ 变量 — 存储信息
✅ 数字运算 — +、-、*、/
✅ if/elif/else — 做判断
✅ for 循环 — 重复做事
✅ 列表 — 装很多东西
✅ 字典 — 用名字找东西
✅ \`random\` — 制造随机惊喜
✅ \`turtle\` — 画画
✅ \`def\` — 创造自己的指令

把这些组合在一起，你能创造任何东西！`},{type:`text`,title:`项目灵感和创意`,body:`不知道做什么？这里有几个方向供参考：

🎮 **小游戏**
• 猜数字（进阶版——有计分和提示温度）
• 问答小测验（问 5 道题，统计得分）
• 冒险故事（用 if 做分叉剧情）

🎨 **创意绘画**
• 用 turtle 画一座城市（房子、树、太阳）
• 画一个彩色万花筒（循环旋转图案）
• 画一张生日贺卡

🔧 **实用工具**
• 个人日记本（输入日记内容，显示所有记录）
• 单词学习助手（中英对照，随机考你）
• 食谱计算器（输入人数，计算需要多少食材）`},{type:`tip`,title:`编程小贴士`,body:`开始写之前，先想清楚三件事：

1. **要做什么？** — 用一句话描述你的作品
2. **怎么运行？** — 用户看到什么？要输入什么？
3. **需要哪些工具？** — 从工具箱里挑出你需要的

别怕出错！写代码的过程就是：
写 → 运行 → 出错 → 修改 → 再运行 → 成功！💪
每个程序员都是这样过来的。`},{type:`code`,title:`项目模板——从这里开始`,body:`# ========== 我的作品 ==========
# 作品名字：_________
# 作者：_________

print("欢迎来到我的作品！🎉")
print("=" * 30)

# 在这里写你的代码...

print("感谢使用！再见 👋")`},{type:`challenge`,body:`创作你的毕业作品！

最低要求（选一项完成）：
1. 至少用到 3 种不同的知识（如变量 + 循环 + if）
2. 代码能正常运行，有明确的"开始"和"结束"
3. 给作品起一个名字，写在注释里

⬆️ 挑战目标（试试这些加分项）：
• 用到 5 种以上的知识
• 有用户交互（input()）
• 用了函数来组织代码
• 有随机元素（turtle 或 random）

🎓 这就是你的 Python 毕业作品——尽情发挥吧！`}],summary:`🎉🎉🎉 恭喜你完成了 HiPython 全部基础课程！🎉🎉🎉

从第一行 print("Hello World") 到现在创造自己的作品——
你已经走了很长一段路了！

你学会了：
• Python 的基础语法和思维
• 用代码解决问题的方法
• 从模仿到创造的跨越

编程不是终点，而是新的起点。
继续探索，继续创造——代码世界无限广阔！

🐍 Python 小蛇会一直陪着你～`},starterCode:`# ========== 我的毕业作品 ==========
# 作品名：_________
# 用到了：print, input, if, for, list, random...

import random

print("=" * 30)
print("  欢迎来到我的作品！🎉")
print("=" * 30)

name = input("你叫什么名字？")
print("你好，", name, "！\\n")

# === 在这里发挥你的创意吧！ ===

print("感谢使用！再见 👋")`,solution:`# ========== 我的毕业作品 ==========
# 作品名：猜数字挑战赛
# 用到了：print, input, if, for, random, 变量

import random

print("=" * 30)
print("  猜数字挑战赛！🎯")
print("=" * 30)

name = input("你叫什么名字？")
print("你好，", name, "！\\n")
print("我想了一个 1-100 的数字，你有 7 次机会猜！")

secret = random.randint(1, 100)
attempts = 0
max_attempts = 7

while attempts < max_attempts:
    guess = int(input(f"第{attempts+1}次：你猜是多少？"))
    attempts += 1
    if guess == secret:
        print(f"🎉 恭喜！你用了 {attempts} 次就猜中了！")
        break
    elif guess > secret:
        print("太大了！往小猜～")
    else:
        print("太小了！往大猜～")
    print(f"还剩 {max_attempts - attempts} 次机会\\n")
else:
    print(f"😅 机会用完了！答案是 {secret}")

print(f"\\n{name}，谢谢来玩！再见 👋")`,hints:[`想想你这 20 节课学会了什么，挑你最熟悉的来组合`,`从简单的开始：先让代码跑起来，再慢慢加功能`,`不要一次写太长。写几行 → 运行 → 看看效果 → 继续写`],checks:[{description:`代码里有 print()`,type:`contains`,value:`print(`},{description:`代码至少 5 行`,type:`contains`,value:`
`},{description:`代码可以正常运行`,type:`no_error`}]}],A=[{id:`s1`,title:`第一章：唤醒小蛇`,series:`story`,difficulty:1,prerequisites:[],estimatedTime:15,objectives:[`学会使用 print() 输出文字`,`完成第一个剧情任务`],content:{intro:`🐍 在一个神秘的代码世界里，住着一条叫 Python 的小蛇…

但是有一天，Python 小蛇睡着了，怎么也叫不醒。
传说只有用 \`print()\` 魔法，才能唤醒它！

你愿意帮帮小蛇吗？`,sections:[{type:`text`,title:`📜 故事背景`,body:`你来到了代码世界的大门前。
守门的老乌龟说："想进去？先让这扇门对你说话！"

老乌龟给了你一个魔法咒语：\`print("开门！")\`
试试在编辑器里输入这个咒语，然后点运行！`},{type:`code`,title:`老乌龟的咒语`,body:`print("开门！")`},{type:`tip`,title:`print() 的用法`,body:`\`print()\` 是 Python 里最基础的"魔法"。
它能把小括号里的文字显示在屏幕上。

记住：文字要放在**引号**里！
\`"开门！"\` — 双引号包起来。`},{type:`challenge`,body:`小蛇醒了！但它还很虚弱，需要你用三句 \`print()\` 来给它能量：
1. 告诉小蛇你的名字
2. 说一句鼓励的话
3. 喊出小蛇的名字 "Python"`}],summary:`🎉 你成功唤醒了 Python 小蛇！

小蛇非常感谢你，它决定和你一起在代码世界里冒险。
下一关，你们将穿越数字峡谷…准备好了吗？`},starterCode:`print("开门！")`,solution:`print("我叫小明")
print("加油！")
print("Python")`,hints:["用 `print()` 把你想要说的话包起来","每一句用一个 `print()`，写三行",`别忘了把文字放在引号里`],checks:[{description:`代码里至少有一个 print()`,type:`contains`,value:`print(`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`s2`,title:`第二章：穿越数字峡谷`,series:`story`,difficulty:2,prerequisites:[`s1`],estimatedTime:20,objectives:[`学会使用 for 循环`,`用 range() 生成数字序列`,`理解"重复做一件事"的魔法`],content:{intro:`小蛇和你踏上了冒险之路。走着走着，眼前出现了一个巨大的峡谷——

峡谷对面有 5 座浮桥，但它们都缩回去了，需要喊 5 次"桥来！"才能伸出来。

一个一个 \`print()\` 太累了……
峡谷守卫鹰说："用**循环魔法**！"

Python 的 \`for\` 循环能帮你重复做事，一次写、自动重复！`,sections:[{type:`text`,title:`🦅 守护鹰的教导`,body:'守护鹰拍着翅膀说：\n\n"`for i in range(5):` — 这个咒语会让下面的事重复 5 次！"\n\n`range(5)` 代表 0, 1, 2, 3, 4 这 5 个数字。\n`for` 循环每次取出一个数字，然后执行缩进的代码。'},{type:`code`,title:`喊 5 次"桥来！"`,body:`for i in range(5):
    print("桥来！")`},{type:`tip`,title:`循环的缩进`,body:'和 `if` 一样，`for` 下面要缩进的代码才是"循环体"。\n`for i in range(5):` — 写冒号，然后下一行缩进！\n\n没有缩进的代码不属于循环，只会执行一次。'},{type:`text`,title:`数字也能循环`,body:'`i` 是循环变量，每次循环它会自动变成下一个数字。\n我们可以用 `i` 来做有趣的事——\n比如打印"第 1 次喊"，"第 2 次喊"……\n\n用 `i + 1`（因为 i 从 0 开始），就能显示 1、2、3、4、5！'},{type:`challenge`,body:`帮小蛇搭起 5 座浮桥！

要求：
1. 用 \`for\` 循环重复 5 次
2. 每次打印"桥来！第X次"（X 从 1 到 5）
3. 最后打印"全部浮桥已搭好！"

💡 提示：用 \`for i in range(5):\` 和 \`print("桥来！第", i+1, "次")\``}],summary:`你学会了循环魔法，轻松搭好了 5 座浮桥！🌉

今天的新技能：
• \`for i in range(5):\` — 重复 5 次
• 循环变量 \`i\` — 自动从 0 数到 4
• 缩进 — 告诉 Python 哪些代码属于循环

有了循环的力量，你和 Python 小蛇继续前进！`},starterCode:`for i in range(5):
    print("桥来！")`,solution:`for i in range(5):
    print("桥来！第", i + 1, "次")

print("\\n全部浮桥已搭好！过桥啦！🌉")`,hints:["用 `for i in range(5):` 来循环 5 次",'每次循环打印"桥来！第X次"，用 `i+1` 显示次数',`注意循环结束后要打印一句祝贺的话`],checks:[{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码里有 range(`,type:`contains`,value:`range(`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`s3`,title:`第三章：三岔路口`,series:`story`,difficulty:3,prerequisites:[`s2`],estimatedTime:25,objectives:[`学会使用 if/elif/else 做选择`,`理解条件判断的含义`,`用代码决定冒险的走向`],content:{intro:`过了峡谷，你们来到一个三岔路口。

左边是森林 🌲，中间是山洞 🏔️，右边是河流 🌊。
路牌上写着：不同的选择会通往不同的冒险！

但走哪条路呢？小蛇说："让代码来决定！"
Python 的 \`if\` 就是用来做选择的魔法——

"如果…就…"——像极了生活中的选择！`,sections:[{type:`text`,title:`🤔 if 判断——让代码做选择`,body:`\`if\` 就是"如果"的意思：

\`\`\`
if 条件:
    满足条件时执行的代码
else:
    不满足条件时执行的代码
\`\`\`

就像：如果下雨 → 带伞，否则 → 直接出门。
用 Python 的 \`if/else\`，让你的代码变聪明！`},{type:`code`,title:`岔路选择器`,body:`choice = input("你走哪条路？(森林/山洞/河流)")

if choice == "森林":
    print("你走进了森林，遇到了一只友好的小鹿")
elif choice == "山洞":
    print("你爬进了山洞，发现了闪闪发光的宝石")
elif choice == "河流":
    print("你来到河边，河水很清澈，鱼儿在游")
else:
    print("你站在路口犹豫不决…")`},{type:`tip`,title:`== 和 = 的区别`,body:`\`=\` — 赋值（把东西放进变量里）
\`==\` — 判断相等（问我俩是不是一样的）

⚠️ 判断相等一定要用 **两个等号**！
这是初学者最容易犯的错哦！`},{type:`text`,title:`elif — 多个选择`,body:"如果不止两个选择怎么办？加 `elif`！\n\n`if` — 第一个条件\n`elif` — 否则如果……（可以写多个）\n`else` — 以上都不满足时\n\n就像自助餐：先看有没有鸡腿，没有就看有没有鱼，\n都没有就随便吃点。"},{type:`challenge`,body:`帮小蛇做一个岔路选择器！

要求：
1. 用 \`input()\` 让玩家选择走哪条路
2. 用 \`if/elif/else\` 判断不同的选择
3. 每条路都有一个独特的冒险故事
4. 如果玩家输入的不是选项之一，给一个默认结果

🌟 发挥你的想象力，给每条路写一段有趣的描述！`}],summary:"你和小蛇学会了用 `if` 做选择！每条路都有不同的冒险故事。🗺️\n\n今天的新技能：\n• `if/elif/else` — 做判断、做选择\n• `==` — 判断相等（两个等号！）\n• `input()` + `if` — 互动式冒险故事\n\n代码的世界充满了选择——每一条路都是一次新的冒险！"},starterCode:`print("=== 三岔路口 ===\\n")
choice = input("你走哪条路？(森林/山洞/河流)\\n")

if choice == "森林":
    print("你走进了森林…")
elif choice == "山洞":
    print("你爬进了山洞…")
elif choice == "河流":
    print("你来到河边…")
else:
    print("你犹豫不决…")`,solution:`print("=== 三岔路口 ===\\n")
choice = input("你走哪条路？(森林/山洞/河流)\\n")

if choice == "森林":
    print("你走进了森林，遇到了一只友好的小鹿 🦌")
    print("小鹿带你去了一片秘密的果子林")
elif choice == "山洞":
    print("你爬进了山洞，发现了闪闪发光的宝石 💎")
    print("宝石照亮了整个山洞，好美啊！")
elif choice == "河流":
    print("你来到河边，河水很清澈，鱼儿在游 🐟")
    print("一条大鱼跳出水面，和你打了个招呼！")
else:
    print("你站在路口犹豫不决…")
    print("小蛇说：别怕，选一条路就好！")`,hints:["用 `input()` 获取玩家输入，用 `==` 判断是不是某个值","用 `if/elif/else` 分别处理不同的选项",`记得处理玩家输入不在选项里的情况（else）`],checks:[{description:`代码里有 if`,type:`contains`,value:`if `},{description:`代码里有 input()`,type:`contains`,value:`input(`},{description:`代码里有 ==`,type:`contains`,value:`==`},{description:`代码可以正常运行`,type:`no_error`}]},{id:`s4`,title:`第四章：魔法宝库`,series:`story`,difficulty:4,prerequisites:[`s3`],estimatedTime:25,objectives:[`认识列表——存储多项数据的容器`,`学会用 append() 添加宝物`,`用 for 循环遍历列表`],content:{intro:`你们走进了一个古老的宝库。

金光闪闪！里面有好多宝物——宝石剑、水晶盾、魔法戒指……
但宝物太多了，一个一个拿根本拿不完！

宝库守护者巨龙说："用**列表**魔法！"
列表就像一个魔法背包，可以装下任何东西——
而且想拿多少就拿多少！🎒`,sections:[{type:`text`,title:`🐉 巨龙的教导：列表魔法`,body:'列表用方括号 `[]` 创建，里面可以放很多东西：\n\n`treasures = ["宝石剑", "水晶盾", "魔法戒指"]`\n\n• 用 `[]` 加编号取出宝物：`treasures[0]` → "宝石剑"\n• 用 `append()` 添加新宝物：`treasures.append("黄金杯")`\n• 用 `for` 循环查看所有宝物\n\n巨龙说："用这个，你可以把宝库搬空！" 😄'},{type:`code`,title:`收集宝物`,body:`treasures = []  # 空背包

# 往背包里放宝物
treasures.append("宝石剑")
treasures.append("水晶盾")
treasures.append("魔法戒指")

print("你的背包里有：")
for item in treasures:
    print(" 💎", item)
print("\\n一共", len(treasures), "件宝物！")`},{type:`tip`,title:`len() — 数宝物的帮手`,body:`\`len(列表)\` 告诉你列表里有几个东西。
就像巨龙帮你数一数背包里有多少宝物——
不用自己数，代码帮你搞定！🔢`},{type:`text`,title:`序号从 0 开始`,body:"列表编号从 **0** 开始，不是 1：\n• 第 1 件：`treasures[0]`\n• 第 2 件：`treasures[1]`\n• 第 3 件：`treasures[2]`\n\n计算机习惯从 0 开始数，刚开始可能不习惯，但很快就适应啦！"},{type:`challenge`,body:`帮小蛇装满宝物背包！

要求：
1. 创建一个空列表作为背包
2. 用 \`append()\` 加入至少 5 件宝物（发挥想象！）
3. 用 \`for\` 循环打印每一件宝物
4. 最后用 \`len()\` 显示宝物总数

🌟 想象你是冒险家，会捡到什么宝物？
魔法书？龙鳞？隐身斗篷？尽管写！`}],summary:`你的背包里装满了宝物，巨龙也很佩服你！🎒

今天的新技能：
• \`[]\` — 创建列表（魔法背包）
• \`append()\` — 往背包里放东西
• \`for item in 列表:\` — 查看每件宝物
• \`len(列表)\` — 数一数有几件

带着满满的宝物，继续前进吧！`},starterCode:`treasures = []
print("你走进了魔法宝库…\\n")

# 收集宝物
treasures.append("宝石剑")
treasures.append("水晶盾")
treasures.append("魔法戒指")

print("背包里的宝物：")
for item in treasures:
    print(" 💎", item)
print("\\n共", len(treasures), "件")`,solution:`treasures = []
print("你走进了魔法宝库…\\n")

treasures.append("宝石剑")
treasures.append("水晶盾")
treasures.append("魔法戒指")
treasures.append("龙鳞护甲")
treasures.append("隐身斗篷")

print("背包里的宝物：")
for item in treasures:
    print(" 💎", item)
print("\\n一共", len(treasures), "件宝物！")
print("巨龙说：了不起的收藏家！🐉")`,hints:["先创建空列表：`treasures = []`",'用 `.append("宝物名")` 添加宝物',"用 `for item in treasures:` 遍历所有宝物"],checks:[{description:`代码里有空列表 []`,type:`contains`,value:`[]`},{description:`代码里有 append(`,type:`contains`,value:`append(`},{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码可以正常运行`,type:`no_error`}]},{id:`s5`,title:`第五章：铸造魔法杖`,series:`story`,difficulty:5,prerequisites:[`s4`],estimatedTime:25,objectives:[`学会用 def 定义函数`,`理解函数 = 创造自己的魔法咒语`,`用函数编织冒险结局`],content:{intro:`带着满满的宝物，你们来到了世界的尽头——
一座古老的魔法塔。🏰

塔顶住着最强大的魔法师。他说：
"真正的力量不是宝物本身，而是**创造**宝物的能力。"

魔法师教你最后一个魔法：\`def\` — 创造属于你自己的咒语！
这个魔法能让你把任何一段代码变成一个"咒语"，
以后只要念咒语的名字，代码就会自动执行！🪄`,sections:[{type:`text`,title:`🧙 魔法师的最后教导`,body:`定义函数的格式：

\`\`\`
def 咒语名():
    魔法效果…
\`\`\`

调用函数：
\`咒语名()\` — 念咒语，魔法生效！

就像一句话的遥控器——
你按下开关（喊出函数名），整段代码就运行了。`},{type:`code`,title:`铸造魔法杖`,body:`def cast_spell():
    print("✨ 魔法杖发光了！")
    print("🌟 星星从天而降")
    print("🎉 世界充满了光芒！")

# 挥三次魔法杖
cast_spell()
cast_spell()
cast_spell()`},{type:`tip`,title:`定义 vs 调用`,body:`\`def 函数名():\` — 定义咒语（写下来，但还没念）
\`函数名()\` — 调用咒语（真正念出来，魔法发生）

定义了不调用 = 写了咒语但不念 = 什么都不会发生！
定义一次，可以调用无数次！`},{type:`text`,title:`创造通关魔法`,body:`魔法师给你一个任务：创造三个魔法来点亮魔法塔：

1. \`light_up()\` — 点亮塔的第一层（print 星星）
2. \`celebrate()\` — 庆祝的通关烟花（print 烟花效果）
3. \`goodbye()\` — 写一段告别的话

把三个魔法组合起来，完成你的冒险旅程！`},{type:`challenge`,body:`用函数铸造你的魔法杖，完成最终冒险！

要求：
1. 定义 \`light_up()\` 函数——打印 3 行星星效果
2. 定义 \`celebrate()\` 函数——打印庆祝内容
3. 定义 \`goodbye()\` 函数——打印告别和感谢的话
4. 按顺序调用这三个函数

🌟 发挥你的创意——这是属于你的冒险结局！`}],summary:`🎉🎉🎉 恭喜你完成了所有的冒险！Python 小蛇也长大啦！🐍

你在这段旅程中学会了：
• 💬 \`print()\` — 让代码说话
• 🔁 \`for\` 循环 — 重复魔法
• 🤔 \`if/elif/else\` — 选择道路
• 🎒 列表 — 收集宝物
• 🪄 \`def\` — 创造属于自己的咒语

你已经从一个编程新手变成了真正的代码魔法师！
继续探索，继续创造——代码世界的冒险永远不会结束！`},starterCode:`print("你来到了魔法塔顶…\\n")

def light_up():
    print("✨" * 10)
    print("  魔法塔被点亮了！")
    print("✨" * 10)

light_up()`,solution:`print("你来到了魔法塔顶…\\n")

def light_up():
    print("✨" * 10)
    print("  魔法塔被点亮了！")
    print("✨" * 10)

def celebrate():
    print("🎉" * 10)
    print("  冒险成功了！你是最棒的！")
    print("🎉" * 10)

def goodbye():
    print("\\nPython 小蛇对你说：")
    print("  谢谢你陪我走完这段旅程！")
    print("  我们后会有期！🐍💚")

light_up()
celebrate()
goodbye()`,hints:[`先想想三个函数分别要打印什么`,"每个函数用 `def` 定义，注意冒号和缩进","定义完后按顺序调用：`light_up()` → `celebrate()` → `goodbye()`"],checks:[{description:`代码里有 def`,type:`contains`,value:`def `},{description:`代码里有 print()`,type:`contains`,value:`print(`},{description:`代码可以正常运行`,type:`no_error`}]}],j=[{id:`g1`,title:`挑战1：快递员`,series:`game`,difficulty:1,prerequisites:[],estimatedTime:10,objectives:[`用最少的代码行数完成任务`,`在限定时间内完成挑战`],content:{intro:`🏆 欢迎来到 Code Arena！

这里是代码竞技场，每一关都有一个挑战任务。
你需要用 Python 代码来解决问题。
越快越好，代码越短越好！

⚡ 限制：代码不能超过 **3 行**`,sections:[{type:`text`,title:`📦 任务`,body:`小明是一个快递员，他需要打印 5 次"您的快递到了！"。
你能帮他写一段代码，在屏幕上输出 5 次这句话吗？

用 \`for\` 循环，一行顶五行！`},{type:`challenge`,body:`用 \`for\` 循环来完成任务！

要求：
• 代码不能超过 3 行
• 输出必须恰好是 5 行 "您的快递到了！"

⏱️ 时间限制：5 分钟`}],summary:"太好了！你用 `for` 循环只用了 2 行代码就完成了 5 次输出！\n代码越少越优雅——这就是编程的智慧！"},starterCode:`# 在这里写代码（最多 3 行哦）
`,solution:`for i in range(5):
    print("您的快递到了！")`,hints:["还记得 `for i in range(5):` 吗？它会重复 5 次！",`range(5) 会生成 0, 1, 2, 3, 4 这 5 个数字`,`在 for 循环里面写 print()，注意缩进`],checks:[{description:`使用了 for 循环`,type:`contains`,value:`for `},{description:`使用了 range(5)`,type:`contains`,value:`range(5)`},{description:`代码不超过 3 行（不含空行）`,type:`max_lines`,value:3},{description:`代码可以正常运行`,type:`no_error`}]},{id:`g2`,title:`挑战2：密码破译`,series:`game`,difficulty:2,prerequisites:[`g1`],estimatedTime:15,objectives:[`用 random 生成随机密码`,`用 input + if 判断密码是否正确`],content:{intro:`🔐 你是一个小特工，需要破译一扇门的密码！

计算机随机生成了一个 1-10 的秘密数字。
你只有 3 次机会猜对它！

⚡ 限制：代码不能超过 **10 行**`,sections:[{type:`text`,title:`🔍 任务`,body:`做一个猜密码的小游戏：
1. 用 \`random.randint(1, 10)\` 生成密码
2. 用 \`input()\` 让玩家猜
3. 判断猜对了没有，给"太大了"或"太小了"的提示
4. 玩家猜对或猜了 3 次后结束`},{type:`challenge`,body:`破译密码，打开大门！

要求：
• 代码不能超过 10 行
• 给玩家提示"太大了"/"太小了"
• 猜对了显示"成功！"

⏱️ 时间限制：8 分钟`}],summary:"你破译了密码！如果玩家 3 次都没猜对怎么办？\n试试用 `for` 循环代替重复的 `input()`，让代码更简洁！"},starterCode:`import random

password = random.randint(1, 10)

# 写你的猜密码逻辑...
`,solution:`import random

password = random.randint(1, 10)
for i in range(3):
    guess = int(input("猜（1-10）："))
    if guess == password:
        print("成功！")
        break
    elif guess > password:
        print("太大了")
    else:
        print("太小了")`,hints:["先 `import random`，用 `random.randint(1, 10)` 生成密码","用 `for i in range(3):` 给玩家 3 次机会","用 `if/elif/else` 判断大小，猜对了用 `break` 跳出循环"],checks:[{description:`代码里有 import random`,type:`contains`,value:`import random`},{description:`代码里有 random.randint`,type:`contains`,value:`randint`},{description:`代码里有 if`,type:`contains`,value:`if `},{description:`代码不超过 10 行（不含空行）`,type:`max_lines`,value:10},{description:`代码可以正常运行`,type:`no_error`}]},{id:`g3`,title:`挑战3：列表整理师`,series:`game`,difficulty:3,prerequisites:[`g2`],estimatedTime:15,objectives:[`用列表存储数据`,`用 append 添加元素`,`用 for 遍历列表找到目标`],content:{intro:`📋 你收到了一个乱糟糟的购物清单！

里面有的东西重复了，有的东西不需要。
你的任务：把清单整理好，只留下需要的东西！

⚡ 限制：代码不能超过 **12 行**`,sections:[{type:`text`,title:`🗂️ 任务`,body:`有一个清单：\`["牛奶", "面包", "牛奶", "鸡蛋", "面包", "苹果"]\`

你的任务是：
1. 创建一个新列表，只放第一次出现的商品
2. 如果商品已经在新列表里了，跳过
3. 打印整理后的清单

提示：用 \`if item not in new_list:\` 判断！`},{type:`challenge`,body:`整理购物清单，去掉重复的商品！

要求：
• 代码不能超过 12 行
• 整理后的清单不能有重复
• 保持商品原来的顺序

⏱️ 时间限制：8 分钟`}],summary:'清单整理完毕！`if item not in new_list:` 是一个超有用的技巧。\n这个技巧在真实编程中经常用到——"去重"！'},starterCode:`items = ["牛奶", "面包", "牛奶", "鸡蛋", "面包", "苹果"]
unique_items = []

# 在这整理清单...

print("整理后：", unique_items)`,solution:`items = ["牛奶", "面包", "牛奶", "鸡蛋", "面包", "苹果"]
unique_items = []

for item in items:
    if item not in unique_items:
        unique_items.append(item)

print("整理后：", unique_items)`,hints:["创建一个空列表 `unique_items = []` 来放整理后的结果","遍历原清单，用 `if item not in unique_items:` 判断是否已存在","如果不重复，用 `unique_items.append(item)` 加入新列表"],checks:[{description:`代码里有列表`,type:`contains`,value:`[`},{description:`代码里有 append`,type:`contains`,value:`append`},{description:`代码里有 for 和 if`,type:`contains`,value:`if `},{description:`代码不超过 12 行（不含空行）`,type:`max_lines`,value:12},{description:`代码可以正常运行`,type:`no_error`}]},{id:`g4`,title:`挑战4：几何艺术家`,series:`game`,difficulty:4,prerequisites:[`g3`],estimatedTime:20,objectives:[`用 turtle 画多边形组合图形`,`用列表存储位置和颜色`,`用函数封装画图逻辑`],content:{intro:`🎨 美术馆要举办一场几何艺术展！

你的任务：用 turtle 画一幅几何艺术作品。
要求画 3 种不同的形状，每种形状用不同颜色！

⚡ 限制：代码不能超过 **15 行**`,sections:[{type:`text`,title:`🖼️ 任务`,body:`用 turtle 画一幅几何艺术品：

1. 至少画 3 种不同的形状（如三角形、正方形、五边形）
2. 每种形状用不同颜色
3. 形状不要重叠，用 \`penup()/goto()\` 移动到不同位置

用列表存位置和颜色，用循环批量画！`},{type:`challenge`,body:`创作你的几何艺术品！

要求：
• 代码不能超过 15 行
• 画 3 种以上不同边数的形状
• 每种形状不同颜色
• 形状分布在画布不同位置

⏱️ 时间限制：10 分钟`}],summary:`太美了！你用最少的代码创作了丰富的几何艺术。
列表 + 循环 + turtle = 无限创作力！这就是编程的艺术。`},starterCode:`import turtle
turtle.speed(10)

# 位置列表和颜色列表
positions = [(-80, -40), (0, -40), (80, -40)]
colors = ["red", "blue", "green"]
sides = [3, 4, 5]

# 在这里画图...

turtle.done()`,solution:`import turtle
turtle.speed(10)

positions = [(-80, -40), (0, -40), (80, -40)]
colors = ["red", "blue", "green"]
sides = [3, 4, 5]

for i in range(len(sides)):
    turtle.penup()
    turtle.goto(positions[i][0], positions[i][1])
    turtle.pendown()
    turtle.color(colors[i])
    for _ in range(sides[i]):
        turtle.forward(40)
        turtle.left(360 / sides[i])


turtle.done()`,hints:["用 `for i in range(len(sides)):` 同时遍历位置、颜色和边数","每个位置先 `penup()` → `goto()` → `pendown()`","转角公式：`360 / sides[i]`，注意和边长配合"],checks:[{description:`代码里有 import turtle`,type:`contains`,value:`import turtle`},{description:`代码里有列表`,type:`contains`,value:`[`},{description:`代码里有 for 循环`,type:`contains`,value:`for `},{description:`代码里有 goto 或 circle`,type:`contains`,value:`goto`},{description:`代码不超过 15 行（不含空行）`,type:`max_lines`,value:15},{description:`代码可以正常运行`,type:`no_error`}]},{id:`g5`,title:`挑战5：终极对决`,series:`game`,difficulty:5,prerequisites:[`g4`],estimatedTime:25,objectives:[`综合运用所有 Python 知识`,`在代码行数限制下完成复杂任务`,`体验极限编程的乐趣`],content:{intro:`🏟️ 欢迎来到终极对决！

这是 Code Arena 的最终挑战——
你需要在一个程序中完成多项任务。
用上你学过的所有技能！

⚡ 限制：代码不能超过 **20 行**`,sections:[{type:`text`,title:`🎯 任务：魔法商店`,body:`做一个"魔法商店"小程序：

1. 展示一个魔法道具清单（列表 + 循环）
2. 让用户输入想买的道具名（input）
3. 如果有 → 显示价格
4. 如果没有 → 提示"本店没有这个道具"
5. 用随机数给用户一个"惊喜折扣"`},{type:`code`,title:`参考结构`,body:`import random

shop = {"魔杖": 100, "药水": 30, "宝剑": 200}
print("欢迎光临魔法商店！")
# 展示商品
# 获取用户选择
# 判断是否有货
# 随机折扣
# 显示最终价格`},{type:`challenge`,body:`做出你的魔法商店！

要求：
• 代码不能超过 20 行
• 至少包含 4 个道具
• 用 random 给随机折扣（如 8 折）
• 显示最终价格

🏆 这是终极挑战——展示你的全部实力！`}],summary:`🎉 你完成了 Code Arena 的所有挑战！

从快递员到魔法店老板——
你用一个又一个挑战证明了自己的编程实力！

这只是开始，代码世界里还有无限的挑战等着你。
继续练习，继续成长！💪`},starterCode:`import random

shop = {"魔杖": 100, "药水": 30, "宝剑": 200, "盾牌": 150}
print("=== 欢迎光临魔法商店！===\\n")

# 展示所有商品...

# 获取用户选择...

# 判断是否有货 + 随机折扣...`,solution:`import random

shop = {"魔杖": 100, "药水": 30, "宝剑": 200, "盾牌": 150}
print("=== 欢迎光临魔法商店！===\\n")

for item, price in shop.items():
    print(f"  {item} — {price} 金币")

choice = input("\\n想买什么？")

if choice in shop:
    discount = random.randint(1, 9) / 10
    final = int(shop[choice] * discount)
    print(f"原价 {shop[choice]} 金币")
    print(f"打 {int(discount*10)} 折 → {final} 金币！")
else:
    print("本店没有这个道具哦～")`,hints:["用 `for item, price in shop.items():` 同时遍历键和值","用 `if choice in shop:` 判断用户输入的商品是否存在","折扣用 `random.randint(1, 9) / 10` 生成 0.1~0.9 的随机折扣"],checks:[{description:`代码里有 import random`,type:`contains`,value:`import random`},{description:`代码里有字典`,type:`contains`,value:`{`},{description:`代码里有 input()`,type:`contains`,value:`input(`},{description:`代码里有 if 判断`,type:`contains`,value:`if `},{description:`代码不超过 20 行（不含空行）`,type:`max_lines`,value:20},{description:`代码可以正常运行`,type:`no_error`}]}],M=[...T,...E,...D,...O,...k,...A,...j];function ee(e){return M.find(t=>t.id===e)}function te(e){let t=M.findIndex(t=>t.id===e);if(!(t===-1||t>=M.length-1))return M[t+1]}function ne(e){let t=M.findIndex(t=>t.id===e);if(!(t<=0))return M[t-1]}var N={};M.forEach(e=>{e.series===`main`&&(N[e.difficulty]??=[]).push(e.id)});var P=[{id:`first_run`,name:`初次运行`,icon:`▶️`,description:`第一次运行 Python 代码`,category:`course`,check:e=>Object.keys(e.completedLessons).length>0},{id:`first_print`,name:`开口说话`,icon:`🗣️`,description:`使用 print() 输出文字`,category:`course`,check:e=>Object.keys(e.completedLessons).length>0},{id:`first_math`,name:`小小数学家`,icon:`🧮`,description:`使用 Python 做数学运算`,category:`course`,check:e=>e.completedLessons.l1_3?.completed??!1},{id:`first_var`,name:`记忆大师`,icon:`📦`,description:`创建和使用变量`,category:`course`,check:e=>e.completedLessons.l1_4?.completed??!1},{id:`complete_l1`,name:`初学者`,icon:`🌱`,description:`完成 L1 全部课程`,category:`course`,check:e=>F(e,1)},{id:`complete_l2`,name:`循环大师`,icon:`🔄`,description:`完成 L2 全部课程`,category:`course`,check:e=>F(e,2)},{id:`complete_l3`,name:`逻辑达人`,icon:`🧠`,description:`完成 L3 全部课程`,category:`course`,check:e=>F(e,3)},{id:`complete_l4`,name:`数据专家`,icon:`📊`,description:`完成 L4 全部课程`,category:`course`,check:e=>F(e,4)},{id:`complete_l5`,name:`函数大师`,icon:`🎩`,description:`完成 L5 全部课程`,category:`course`,check:e=>F(e,5)},{id:`all_stars`,name:`完美通关`,icon:`🌟`,description:`所有课程都拿到 3 颗星`,category:`course`,check:e=>{let t=Object.values(e.completedLessons).filter(e=>e.completed);return t.length<M.length?!1:t.every(e=>e.stars>=3)}},{id:`typing_first`,name:`初识键盘`,icon:`⌨️`,description:`完成第一次打字练习`,category:`typing`,check:e=>e.typingStats.records.length>=1},{id:`typing_10_sessions`,name:`坚持不懈`,icon:`📅`,description:`累计完成 10 次打字练习`,category:`typing`,check:e=>e.typingStats.records.length>=10},{id:`typing_streak_7`,name:`天天向上`,icon:`🔥`,description:`连续 7 天练习打字`,category:`typing`,check:e=>e.typingStats.currentStreak>=7},{id:`typing_wpm_20`,name:`键盘小飞手`,icon:`💨`,description:`最快速度达到 20 WPM`,category:`typing`,check:e=>e.typingStats.bestWpm>=20},{id:`typing_accuracy_95`,name:`一丝不苟`,icon:`🎯`,description:`单次练习准确率达到 95%`,category:`typing`,check:e=>e.typingStats.bestAccuracy>=.95},{id:`typing_combo_30`,name:`连击大师`,icon:`✨`,description:`达成单次 30 连击`,category:`typing`,check:e=>e.typingStats.bestCombo>=30},{id:`typing_level_5`,name:`闪电打字员`,icon:`⚡`,description:`打字等级达到 5 级`,category:`typing`,check:e=>e.typingStats.level>=5},{id:`typing_1000_score`,name:`积分破千`,icon:`💰`,description:`累计打字积分超过 1000`,category:`typing`,check:e=>e.typingStats.totalScore>=1e3},{id:`typing_perfect`,name:`又快又准`,icon:`💎`,description:`准确率 95% 且速度达到 20 WPM`,category:`typing`,check:e=>e.typingStats.bestAccuracy>=.95&&e.typingStats.bestWpm>=20}];function F(e,t){let n=N[t];return!n||n.length===0?!1:n.every(t=>e.completedLessons[t]?.completed)}function re(e){return P.filter(t=>t.check(e)).map(e=>e.id)}var ie={totalScore:0,totalPracticeTime:0,totalKeystrokes:0,bestWpm:0,bestAccuracy:0,bestCombo:0,currentStreak:0,lastPracticeDate:``,records:[],level:1},ae={completedLessons:{},unlockedBadges:[],totalStars:0,typingStats:ie};function I(){let[e,t]=w(`progress`,ae);return{progress:e,getLessonProgress:(0,_.useCallback)(t=>e.completedLessons[t],[e]),completeLesson:(0,_.useCallback)((e,n,r)=>{t(t=>{let i=t.completedLessons[e],a=i?.stars??0,o=Math.max(a,n),s={lessonId:e,completed:!0,stars:o,attempts:(i?.attempts??0)+1,lastCode:r},c=t.totalStars-a+o,l={...t,completedLessons:{...t.completedLessons,[e]:s},totalStars:c},u=re(l),d=[...new Set([...t.unlockedBadges,...u])];return{...l,unlockedBadges:d}})},[t]),saveCode:(0,_.useCallback)((e,n)=>{t(t=>{let r=t.completedLessons[e];return{...t,completedLessons:{...t.completedLessons,[e]:{lessonId:e,completed:r?.completed??!1,stars:r?.stars??0,attempts:(r?.attempts??0)+1,lastCode:n}}}})},[t]),canAccess:(0,_.useCallback)(t=>t.length===0?!0:t.every(t=>e.completedLessons[t]?.completed),[e]),getSeriesProgress:(0,_.useCallback)((t,n)=>{let r=t===`main`?`l`:t,i=Object.values(e.completedLessons).filter(e=>e.lessonId.startsWith(r)&&e.completed).length;return n>0?Math.round(i/n*100):0},[e]),addTypingRecord:(0,_.useCallback)(e=>{t(t=>{let n=t.typingStats??ie,r=new Date().toISOString().slice(0,10),i=new Date(Date.now()-864e5).toISOString().slice(0,10),a=n.currentStreak;n.lastPracticeDate===r||(a=n.lastPracticeDate===i?n.currentStreak+1:1);let o={totalScore:n.totalScore+e.score,totalPracticeTime:n.totalPracticeTime+e.duration,totalKeystrokes:n.totalKeystrokes+e.totalKeystrokes,bestWpm:Math.max(n.bestWpm,e.wpm),bestAccuracy:Math.max(n.bestAccuracy,e.accuracy),bestCombo:Math.max(n.bestCombo,e.maxCombo),currentStreak:a,lastPracticeDate:r,records:[e,...n.records??[]].slice(0,50),level:n.level};o.level=se(o.totalScore);let s=ce(o),c=[...new Set([...t.unlockedBadges,...s])],l=t.totalStars+e.stars;return{...t,typingStats:o,unlockedBadges:c,totalStars:l}})},[t]),resetProgress:(0,_.useCallback)(()=>{t(ae)},[t])}}var oe=[{minScore:0,level:1},{minScore:100,level:2},{minScore:300,level:3},{minScore:800,level:4},{minScore:2e3,level:5},{minScore:5e3,level:6},{minScore:12e3,level:7},{minScore:3e4,level:8}];function se(e){let t=1;for(let n of oe)e>=n.minScore&&(t=n.level);return t}function ce(e){let t=[];return e.records.length>=1&&t.push(`typing_first`),e.records.length>=10&&t.push(`typing_10_sessions`),e.currentStreak>=7&&t.push(`typing_streak_7`),e.bestWpm>=20&&t.push(`typing_wpm_20`),e.bestAccuracy>=.95&&t.push(`typing_accuracy_95`),e.bestCombo>=30&&t.push(`typing_combo_30`),e.bestAccuracy>=.95&&e.bestWpm>=20&&t.push(`typing_perfect`),e.level>=5&&t.push(`typing_level_5`),e.totalScore>=1e3&&t.push(`typing_1000_score`),t}var L={home:`_home_1x42j_1`,hero:`_hero_1x42j_5`,heroContent:`_heroContent_1x42j_14`,heroTitle:`_heroTitle_1x42j_18`,heroEmoji:`_heroEmoji_1x42j_26`,heroSubtitle:`_heroSubtitle_1x42j_32`,heroDesc:`_heroDesc_1x42j_39`,heroActions:`_heroActions_1x42j_46`,btnPrimary:`_btnPrimary_1x42j_53`,progressSummary:`_progressSummary_1x42j_74`,features:`_features_1x42j_81`,featureCard:`_featureCard_1x42j_90`,featureIcon:`_featureIcon_1x42j_104`,quickStart:`_quickStart_1x42j_123`};function le(){let{progress:e}=I();return(0,b.jsxs)(`div`,{className:L.home,children:[(0,b.jsx)(`section`,{className:L.hero,children:(0,b.jsxs)(`div`,{className:L.heroContent,children:[(0,b.jsxs)(`h1`,{className:L.heroTitle,children:[(0,b.jsx)(`span`,{className:L.heroEmoji,children:`🐍`}),`欢迎来到 HiPython！`]}),(0,b.jsx)(`p`,{className:L.heroSubtitle,children:`和 Python 小蛇一起，开启编程冒险之旅 🚀`}),(0,b.jsxs)(`p`,{className:L.heroDesc,children:[`用真正的 Python 代码，做出有趣的小项目。`,(0,b.jsx)(`br`,{}),`一步一步来，你会发现编程超好玩！`]}),(0,b.jsxs)(`div`,{className:L.heroActions,children:[(0,b.jsx)(d,{to:`/course-map`,className:L.btnPrimary,children:`🗺️ 开始学习`}),e.totalStars>0&&(0,b.jsxs)(`div`,{className:L.progressSummary,children:[`⭐ `,e.totalStars,` 颗星星已获得`]})]})]})}),(0,b.jsxs)(`section`,{className:L.features,children:[(0,b.jsxs)(`div`,{className:L.featureCard,children:[(0,b.jsx)(`span`,{className:L.featureIcon,children:`📝`}),(0,b.jsx)(`h3`,{children:`真实 Python 代码`}),(0,b.jsx)(`p`,{children:`不是拖积木块，而是打真正的 Python 代码。就像真正的程序员那样！`})]}),(0,b.jsxs)(`div`,{className:L.featureCard,children:[(0,b.jsx)(`span`,{className:L.featureIcon,children:`▶️`}),(0,b.jsx)(`h3`,{children:`即时运行`}),(0,b.jsx)(`p`,{children:`写完代码，点一下运行按钮，马上就能看到结果。`})]}),(0,b.jsxs)(`div`,{className:L.featureCard,children:[(0,b.jsx)(`span`,{className:L.featureIcon,children:`🏆`}),(0,b.jsx)(`h3`,{children:`闯关收集星星`}),(0,b.jsx)(`p`,{children:`每完成一课都能获得星星，集齐所有星星成为 Python 大师！`})]}),(0,b.jsxs)(`div`,{className:L.featureCard,children:[(0,b.jsx)(`span`,{className:L.featureIcon,children:`🎨`}),(0,b.jsx)(`h3`,{children:`作品展览`}),(0,b.jsx)(`p`,{children:`每一课都能做出一个有趣的小作品：计算器、猜数字、画图形…`})]})]}),(0,b.jsxs)(`section`,{className:L.quickStart,children:[(0,b.jsx)(`h2`,{children:`🚀 快速开始`}),(0,b.jsx)(`p`,{children:`第一课只要 20 分钟，试试看？`}),(0,b.jsx)(d,{to:`/lesson/l1_1`,className:L.btnPrimary,children:`📖 第1课：你好，世界！`})]})]})}var ue=[{pattern:/NameError: name '(\w+)' is not defined/,getMessage:e=>`🤔 咦？\`${e[1]}\` 还没有被定义过哦！\n先给它一个值吧，比如：\`${e[1]} = "你好"\``},{pattern:/SyntaxError: unexpected EOF while parsing/,getMessage:()=>`📝 好像少了点什么…检查一下你的括号、引号是不是都配对了？`},{pattern:/SyntaxError: invalid syntax/,getMessage:()=>`📝 语法有点小问题！常见的可能是：
• 少了冒号 \`:\`
• 括号没配对
• 引号忘了写`},{pattern:/SyntaxError: .*([Ee]OL|[Uu]nexpected.*['"]\))/,getMessage:()=>`📝 这一行的结尾好像不太对，检查一下是不是少了括号或者引号？`},{pattern:/TypeError: .*'(\w+)'.*'(\w+)'/,getMessage:e=>`🔀 类型不匹配！你把 \`${e[1]}\` 和 \`${e[2]}\` 混在一起用了。\n它们不能直接放在一起，试试用 \`str()\` 或 \`int()\` 转换一下？`},{pattern:/TypeError: (.+)/,getMessage:e=>`🔀 类型错误：\`${e[1]}\`\n检查一下你是不是把不同类型的东西混在一起用了？`},{pattern:/IndentationError: (.+)/,getMessage:()=>`↔️ 缩进不对！Python 里，同一个代码块的每一行要对齐。
试试用 4 个空格（或按一次 Tab 键）来缩进？`},{pattern:/ZeroDivisionError: (.+)/,getMessage:()=>`➗ 哎呀，除以 0 是不行的！
在数学里不能除以0，在 Python 里也一样哦。`},{pattern:/IndexError: (.+)/,getMessage:()=>"📋 列表位置超出范围了！\n记住：列表的第1个元素的位置是 0，最后一个是 `len(列表)-1`。"},{pattern:/(ImportError|ModuleNotFoundError): .*'(\w+)'/,getMessage:e=>`📦 找不到 \`${e[2]}\` 这个模块。\n是不是名字拼错了？或者这个模块还没安装？`},{pattern:/AttributeError: .*'(\w+)'.*'(\w+)'/,getMessage:e=>`🔍 \`${e[1]}\` 没有 \`${e[2]}\` 这个功能。\n你的变量类型可能和你想的不太一样。`},{pattern:/ValueError: invalid literal for int\(\)/,getMessage:()=>'🔢 这里需要一个数字，但你给的不是数字。\n比如 `int("abc")` 就不行，`int("123")` 才行。'},{pattern:/ValueError: (.+)/,getMessage:e=>`⚠️ 数值错误：${e[1]}\n检查一下你给的数值类型对不对？`}];function de(e){let t=typeof e==`string`?e:e.message;for(let{pattern:e,getMessage:n}of ue){let r=t.match(e);if(r)return n(r)}return`😅 出错了：${t.split(`
`)[0]}\n\n别着急，仔细看看你的代码，或者问问爸爸帮忙！`}function fe(){return{x:400/2,y:400/2,angle:0,penDown:!0,color:`#333333`,speed:5}}var pe=`
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
`;function me(e,t,n,r){if(t.length===0){r?.();return}let i=0,a=t.length;function o(){let s=n.speed>=10?a:Math.max(1,Math.floor(n.speed/2)),c=Math.min(i+s,a);for(;i<c;i++)he(e,n,t[i]);if(i<a){let e=Math.max(2,60-n.speed*5);setTimeout(o,e)}else _e(e,n),r?.()}e.clearRect(0,0,e.canvas.width,e.canvas.height),ge(e),o()}function he(e,t,n){switch(n.type){case`forward`:case`backward`:{let r=typeof n.value==`number`?n.value:0,i=n.type===`backward`?-r:r,a=t.angle*Math.PI/180,o=t.x+i*Math.cos(a),s=t.y+i*Math.sin(a);t.penDown&&(e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(o,s),e.strokeStyle=t.color,e.lineWidth=2,e.lineCap=`round`,e.stroke()),t.x=o,t.y=s;break}case`left`:{let e=typeof n.value==`number`?n.value:0;t.angle-=e;break}case`right`:{let e=typeof n.value==`number`?n.value:0;t.angle+=e;break}case`penup`:t.penDown=!1;break;case`pendown`:t.penDown=!0;break;case`color`:typeof n.value==`string`&&(t.color=n.value);break;case`speed`:typeof n.value==`number`&&(t.speed=Math.max(1,Math.min(10,n.value)));break;case`circle`:{let r=typeof n.value==`number`?n.value:50;t.penDown&&(e.beginPath(),e.arc(t.x,t.y,Math.abs(r),0,Math.PI*2),e.strokeStyle=t.color,e.lineWidth=2,e.stroke());break}case`goto`:if(Array.isArray(n.value)&&n.value.length>=2){let[r,i]=n.value;t.penDown&&(e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r,i),e.strokeStyle=t.color,e.lineWidth=2,e.lineCap=`round`,e.stroke()),t.x=r,t.y=i}break;case`setheading`:typeof n.value==`number`&&(t.angle=n.value);break;case`clear`:e.clearRect(0,0,e.canvas.width,e.canvas.height),ge(e);break;case`done`:break}}function ge(e){let t=e.canvas.width,n=e.canvas.height;e.strokeStyle=`#e8e8e8`,e.lineWidth=.5;for(let r=0;r<=t;r+=40)e.beginPath(),e.moveTo(r,0),e.lineTo(r,n),e.stroke();for(let r=0;r<=n;r+=40)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke();e.strokeStyle=`#d0d0d0`,e.lineWidth=1,e.beginPath(),e.moveTo(t/2,0),e.lineTo(t/2,n),e.stroke(),e.beginPath(),e.moveTo(0,n/2),e.lineTo(t,n/2),e.stroke()}function _e(e,t){let n=t.angle*Math.PI/180,r=t.x+10*Math.cos(n),i=t.y+10*Math.sin(n),a=t.x+10*Math.cos(n+2*Math.PI/3),o=t.y+10*Math.sin(n+2*Math.PI/3),s=t.x+10*Math.cos(n+4*Math.PI/3),c=t.y+10*Math.sin(n+4*Math.PI/3);e.beginPath(),e.moveTo(r,i),e.lineTo(a,o),e.lineTo(s,c),e.closePath(),e.fillStyle=t.penDown?`#4CAF50`:`#FF9800`,e.fill(),e.strokeStyle=`#333`,e.lineWidth=1,e.stroke()}var ve=null,ye=!1,be=null,xe=[];function Se(e){return xe.push(e),()=>{xe=xe.filter(t=>t!==e)}}function Ce(e,t){xe.forEach(n=>n(e,t))}async function we(){return ve||be||(ye=!0,Ce(!0,`正在加载 Python 引擎…`),be=(async()=>{try{let{loadPyodide:e}=await u(async()=>{let{loadPyodide:e}=await import(`./pyodide-CV6SbGYf.js`);return{loadPyodide:e}},__vite__mapDeps([0,1,2,3]));Ce(!0,`正在下载 Python 环境（约11MB）…`);let t=await e({indexURL:`https://cdn.jsdelivr.net/npm/pyodide@314.0.0/`});return Ce(!0,`Python 环境就绪！`),ve=t,t}finally{ye=!1,Ce(!1)}})(),be)}function Te(e){e.runPython(`
import sys
import builtins
# Keep a copy of standard builtins
_keep = set(dir(builtins))
_keep.update(['__name__', '__doc__', '__builtins__', '_keep'])
for k in list(globals().keys()):
    if k not in _keep:
        del globals()[k]
`)}function Ee(e){e.runPython(pe)}function De(e){try{e.runPython(`
import json
try:
    __turtle_json = json.dumps(_commands)
except:
    __turtle_json = '[]'
`);let t=e.globals.get(`__turtle_json`);return t?JSON.parse(t).map(e=>{let t={type:e[0]};return e.length===2?t.value=e[1]:e.length>=3&&e[0]===`goto`&&(t.value=[e[1],e[2]]),t}):[]}catch{return[]}}function Oe(e){let t={},n=new Set(`__name__.__doc__.__package__.__loader__.__spec__.__builtins__._keep.abs.all.any.ascii.bin.bool.breakpoint.bytearray.bytes.callable.chr.classmethod.compile.complex.copyright.credits.delattr.dict.dir.divmod.enumerate.eval.exec.exit.filter.float.format.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.license.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.print.property.quit.range.repr.reversed.round.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip.sys.math.js.pyodide.turtle.forward.backward.left.right.penup.pendown.color.speed.circle.goto.setheading.home.clear.reset.done._TurtlePen._turtle_module._default_turtle.types`.split(`.`));try{let r=e.globals.toJs({dict_converter:Object.fromEntries});for(let[e,i]of Object.entries(r))n.has(e)||e.startsWith(`_`)||(t[e]=ke(e,i))}catch{}return t}function ke(e,t){if(t==null)return{name:e,type:`NoneType`,value:`None`};if(typeof t==`string`)return{name:e,type:`str`,value:`"${t}"`};if(typeof t==`number`)return{name:e,type:Number.isInteger(t)?`int`:`float`,value:String(t)};if(typeof t==`boolean`)return{name:e,type:`bool`,value:t?`True`:`False`};if(Array.isArray(t)){let n=t.slice(0,5).map(e=>Ae(e)).join(`, `),r=t.length>5?`, ...`:``;return{name:e,type:`list[${t.length}]`,value:`[${n}${r}]`}}if(typeof t==`object`)try{let n=Object.keys(t),r=n.slice(0,3).join(`, `),i=n.length>3?`, ...`:``;return{name:e,type:`dict[${n.length}]`,value:`{${r}${i}}`}}catch{return{name:e,type:`object`,value:String(t).slice(0,50)}}return{name:e,type:typeof t,value:String(t).slice(0,50)}}function Ae(e){return e==null?`None`:typeof e==`string`?`"${e}"`:typeof e==`boolean`?e?`True`:`False`:String(e)}async function je(e){let t=await we(),n=``,r=``;t.setStdout({batched:e=>{n+=e+`
`}}),t.setStderr({batched:e=>{r+=e+`
`}});try{return Te(t),Ee(t),await t.runPythonAsync(e),{stdout:(n+r).trim(),error:null,rawError:null,success:!0,turtleCommands:De(t),variables:Oe(t)}}catch(e){let i=e instanceof Error?e.message:String(e),a=(n+r).trim(),o=De(t),s=Oe(t);return{stdout:a,error:de(e instanceof Error?e:i),rawError:i,success:!1,turtleCommands:o,variables:s}}}function Me(){return ve!==null}function Ne(){return ye}function Pe(){let[e,t]=(0,_.useState)(Me),[n,r]=(0,_.useState)(Ne),[i,a]=(0,_.useState)(``),o=(0,_.useRef)(!1);(0,_.useEffect)(()=>{let e=Se((e,t)=>{r(e),t&&a(t)});return t(Me()),r(Ne()),e},[]);let s=(0,_.useCallback)(async()=>{if(!(o.current||Me())){o.current=!0;try{await we(),t(!0),r(!1)}finally{o.current=!1}}},[]);return{isReady:e,isLoading:n,loadingMessage:i,runPython:(0,_.useCallback)(async e=>(Me()||(await we(),t(!0)),je(e)),[]),load:s}}var Fe={runButton:`_runButton_rpckh_1`,icon:`_icon_rpckh_38`,label:`_label_rpckh_42`,spinner:`_spinner_rpckh_46`,spin:`_spin_rpckh_46`};function Ie({onClick:e,disabled:t,loading:n}){return n?(0,b.jsxs)(`button`,{className:Fe.runButton,disabled:!0,children:[(0,b.jsx)(`span`,{className:Fe.spinner,children:`⏳`}),(0,b.jsx)(`span`,{className:Fe.label,children:`加载中…`})]}):(0,b.jsxs)(`button`,{className:Fe.runButton,onClick:e,disabled:t,title:`运行代码 (Ctrl+Enter)`,children:[(0,b.jsx)(`span`,{className:Fe.icon,children:`▶`}),(0,b.jsx)(`span`,{className:Fe.label,children:`运行`})]})}var Le={editorWrapper:`_editorWrapper_o0x3k_5`,codeArea:`_codeArea_o0x3k_13`,bottomBar:`_bottomBar_o0x3k_35`,shortcutHint:`_shortcutHint_o0x3k_45`},Re=n.theme({"&":{fontSize:`18px`,fontFamily:`"Cascadia Code", "Fira Code", "Consolas", "Courier New", monospace`,lineHeight:`1.8`},".cm-content":{padding:`16px`},".cm-gutters":{fontSize:`14px`,borderRight:`1px solid #e0e0e0`,backgroundColor:`#fafafa`,color:`#999`},".cm-activeLineGutter":{backgroundColor:`#e8f5e9`},".cm-activeLine":{backgroundColor:`#f1f8e9 !important`},".cm-cursor":{borderLeftWidth:`2px`}}),ze=[{label:`print(`,detail:`输出文字`,type:`function`,apply:"print(${})"},{label:`input(`,detail:`让用户输入`,type:`function`,apply:'input("${}")'},{label:`int(`,detail:`转成整数`,type:`function`,apply:"int(${})"},{label:`str(`,detail:`转成字符串`,type:`function`,apply:"str(${})"},{label:`len(`,detail:`数一数有多少`,type:`function`,apply:"len(${})"},{label:`if`,detail:`如果…就…`,type:`keyword`},{label:`elif`,detail:`否则如果…`,type:`keyword`},{label:`else:`,detail:`否则`,type:`keyword`,apply:`else:
    \${}`},{label:`for i in range():`,detail:`重复做N次`,type:`keyword`,apply:"for i in range(${1}):\n    ${2}"},{label:`for item in :`,detail:`遍历列表每一项`,type:`keyword`,apply:"for ${1:item} in ${2:list}:\n    ${3}"},{label:`range(`,detail:`生成数字序列`,type:`function`,apply:"range(${})"},{label:`break`,detail:`跳出循环`,type:`keyword`},{label:`continue`,detail:`跳到下一次循环`,type:`keyword`},{label:`True`,detail:`真`,type:`constant`},{label:`False`,detail:`假`,type:`constant`},{label:`and`,detail:`并且`,type:`keyword`},{label:`or`,detail:`或者`,type:`keyword`},{label:`not`,detail:`不 / 非`,type:`keyword`},{label:`list`,detail:`列表（容器）`,type:`keyword`},{label:`append(`,detail:`往列表里加一个`,type:`function`,apply:".append(${})"},{label:`dict`,detail:`字典（配对）`,type:`keyword`},{label:`def`,detail:`定义函数`,type:`keyword`,apply:"def ${1:name}(${2}):\n    ${3}"},{label:`return`,detail:`返回结果`,type:`keyword`,apply:"return ${}"},{label:`import turtle`,detail:`召唤小海龟画图`,type:`keyword`},{label:`import random`,detail:`随机数模块`,type:`keyword`},{label:`import string`,detail:`字符串工具`,type:`keyword`},{label:`# `,detail:`注释（笔记）`,type:`keyword`}],Be=a({override:[e=>{let t=e.matchBefore(/\w*/);return!t||t.from===t.to&&!e.explicit?null:{from:t.from,options:ze}}]}),Ve=(0,_.forwardRef)(function({value:e,onChange:t,onRun:n,disabled:i,loading:a,autocompleteEnabled:s=!1,children:c},l){let u=(0,_.useRef)(null),d=(0,_.useCallback)(e=>t(e),[t]),f=(0,_.useCallback)(e=>{(e.ctrlKey||e.metaKey)&&e.key===`Enter`&&(e.preventDefault(),n())},[n]);(0,_.useImperativeHandle)(l,()=>({insertTemplate(e){let n=u.current?.view;if(!n)return;let r=n.state.selection.main.head,i=n.state.doc.toString();t(i.slice(0,r)+e+i.slice(r)),n.focus()}}));let p=e.trim().length>0,m=(0,_.useMemo)(()=>s?[o(),Re,Be]:[o(),Re],[s]);return(0,b.jsxs)(`div`,{className:Le.editorWrapper,onKeyDown:f,children:[c,(0,b.jsx)(`div`,{className:Le.codeArea,children:(0,b.jsx)(r,{ref:u,value:e,onChange:d,extensions:m,height:`100%`,basicSetup:{lineNumbers:!0,highlightActiveLineGutter:!0,highlightActiveLine:!0,foldGutter:!1,dropCursor:!0,allowMultipleSelections:!1,indentOnInput:!0,bracketMatching:!0,closeBrackets:!0,autocompletion:!1,rectangularSelection:!1,crosshairCursor:!1,highlightSelectionMatches:!0,searchKeymap:!1},theme:`light`,readOnly:i,placeholder:`在这里写 Python 代码…`})}),(0,b.jsxs)(`div`,{className:Le.bottomBar,children:[(0,b.jsx)(Ie,{onClick:n,disabled:!p||i,loading:a}),(0,b.jsx)(`span`,{className:Le.shortcutHint,children:`Ctrl+Enter 运行`})]})]})}),He={templatesBar:`_templatesBar_ea5nb_5`,label:`_label_ea5nb_26`,templateList:`_templateList_ea5nb_33`,templateBtn:`_templateBtn_ea5nb_39`,templateEmoji:`_templateEmoji_ea5nb_66`,templateLabel:`_templateLabel_ea5nb_70`},Ue=[{id:`print`,label:`打印`,emoji:`🖨️`,code:`print("你好，世界！")`,description:`用 print() 输出文字`},{id:`input`,label:`输入`,emoji:`⌨️`,code:`name = input("你叫什么名字？")
print("你好，", name)`,description:`用 input() 获取用户输入`},{id:`for`,label:`循环`,emoji:`🔁`,code:`for i in range(5):
    print("第", i+1, "次")`,description:`用 for 循环重复做事情`},{id:`if`,label:`判断`,emoji:`🤔`,code:`score = 85
if score >= 90:
    print("优秀！")
elif score >= 60:
    print("及格")
else:
    print("继续加油！")`,description:`用 if/elif/else 做判断`},{id:`list`,label:`列表`,emoji:`📋`,code:`items = ["苹果", "香蕉", "橙子"]
for item in items:
    print("有：", item)`,description:`用列表存储多个东西`},{id:`def`,label:`函数`,emoji:`🪄`,code:`def say_hello(name):
    print("你好，", name, "！")

say_hello("小明")`,description:`用 def 定义自己的函数`},{id:`variable`,label:`变量`,emoji:`📦`,code:`name = "小明"
age = 10
print("我叫", name, "，今年", age, "岁")`,description:`创建和使用变量`},{id:`random`,label:`随机`,emoji:`🎲`,code:`import random
num = random.randint(1, 10)
print("随机数字：", num)`,description:`用 random 生成随机数`},{id:`turtle`,label:`画图`,emoji:`🐢`,code:`import turtle

for i in range(4):
    turtle.forward(100)
    turtle.left(90)

turtle.done()`,description:`用 turtle 画正方形`},{id:`dict`,label:`字典`,emoji:`📖`,code:`words = {"apple": "苹果", "cat": "猫"}
print("apple 是", words["apple"])`,description:`用字典存储配对信息`}];function We({onInsert:e}){return(0,b.jsxs)(`div`,{className:He.templatesBar,children:[(0,b.jsx)(`span`,{className:He.label,children:`📎 模板：`}),(0,b.jsx)(`div`,{className:He.templateList,children:Ue.map(t=>(0,b.jsxs)(`button`,{className:He.templateBtn,onClick:()=>e(t.code),title:t.description,children:[(0,b.jsx)(`span`,{className:He.templateEmoji,children:t.emoji}),(0,b.jsx)(`span`,{className:He.templateLabel,children:t.label})]},t.id))})]})}var Ge={errorBox:`_errorBox_tm1nr_1`,errorHeader:`_errorHeader_tm1nr_10`,errorIcon:`_errorIcon_tm1nr_17`,errorTitle:`_errorTitle_tm1nr_21`,errorMessage:`_errorMessage_tm1nr_28`};function Ke({error:e}){return(0,b.jsxs)(`div`,{className:Ge.errorBox,children:[(0,b.jsxs)(`div`,{className:Ge.errorHeader,children:[(0,b.jsx)(`span`,{className:Ge.errorIcon,children:`💡`}),(0,b.jsx)(`span`,{className:Ge.errorTitle,children:`我们来修复它！`})]}),(0,b.jsx)(`p`,{className:Ge.errorMessage,children:e})]})}var R={container:`_container_10he6_5`,canvas:`_canvas_10he6_18`,overlay:`_overlay_10he6_25`,loadingHint:`_loadingHint_10he6_35`,pulse:`_pulse_10he6_1`,emptyState:`_emptyState_10he6_47`,emptyIcon:`_emptyIcon_10he6_61`,bounce:`_bounce_10he6_1`,emptyTitle:`_emptyTitle_10he6_72`,emptyHint:`_emptyHint_10he6_79`,exampleHint:`_exampleHint_10he6_95`};function qe({commands:e,isRunning:t}){let n=(0,_.useRef)(null),r=(0,_.useRef)(null),i=(0,_.useCallback)(()=>{let t=n.current;if(!t)return;let i=t.getContext(`2d`);if(!i||(r.current&&=(r.current.cancel(),null),e.length===0))return;let a=fe(),o=!1;r.current={cancel:()=>{o=!0}},me(i,e,a,()=>{o||(r.current=null)})},[e]);return(0,_.useEffect)(()=>(i(),()=>{r.current&&r.current.cancel()}),[i]),t&&e.length===0?(0,b.jsxs)(`div`,{className:R.container,children:[(0,b.jsx)(`canvas`,{ref:n,width:400,height:400,className:R.canvas}),(0,b.jsx)(`div`,{className:R.overlay,children:(0,b.jsx)(`span`,{className:R.loadingHint,children:`⏳ 正在运行…`})})]}):e.length===0?(0,b.jsxs)(`div`,{className:R.emptyState,children:[(0,b.jsx)(`span`,{className:R.emptyIcon,children:`🐢`}),(0,b.jsx)(`p`,{className:R.emptyTitle,children:`Turtle 画布`}),(0,b.jsxs)(`p`,{className:R.emptyHint,children:[`试试用 `,(0,b.jsx)(`code`,{children:`turtle.forward(100)`}),` 来画一条线！`]}),(0,b.jsxs)(`p`,{className:R.exampleHint,children:[`示例代码：`,(0,b.jsx)(`br`,{}),(0,b.jsxs)(`code`,{children:[`import turtle`,`
`,`turtle.forward(100)`,`
`,`turtle.left(90)`,`
`,`turtle.forward(100)`]})]})]}):(0,b.jsx)(`div`,{className:R.container,children:(0,b.jsx)(`canvas`,{ref:n,width:400,height:400,className:R.canvas})})}var z={panel:`_panel_m37mv_1`,tabs:`_tabs_m37mv_8`,tab:`_tab_m37mv_8`,activeTab:`_activeTab_m37mv_33`,content:`_content_m37mv_39`,consoleOutput:`_consoleOutput_m37mv_45`,output:`_output_m37mv_53`,runningIndicator:`_runningIndicator_m37mv_62`,pulse:`_pulse_m37mv_1`,emptyState:`_emptyState_m37mv_74`,emptyIcon:`_emptyIcon_m37mv_85`,hint:`_hint_m37mv_95`,successHint:`_successHint_m37mv_107`,variablesTable:`_variablesTable_m37mv_116`,varName:`_varName_m37mv_142`,varType:`_varType_m37mv_148`,varValue:`_varValue_m37mv_154`};function Je({result:e,isRunning:t}){let[n,r]=(0,_.useState)(`console`);return(0,b.jsxs)(`div`,{className:z.panel,children:[(0,b.jsxs)(`div`,{className:z.tabs,children:[(0,b.jsx)(`button`,{className:`${z.tab} ${n===`console`?z.activeTab:``}`,onClick:()=>r(`console`),children:`🖥️ 控制台`}),(0,b.jsx)(`button`,{className:`${z.tab} ${n===`canvas`?z.activeTab:``}`,onClick:()=>r(`canvas`),children:`🎨 画布`}),(0,b.jsx)(`button`,{className:`${z.tab} ${n===`variables`?z.activeTab:``}`,onClick:()=>r(`variables`),children:`📊 变量`})]}),(0,b.jsxs)(`div`,{className:z.content,children:[n===`console`&&(0,b.jsx)(Ye,{result:e,isRunning:t}),n===`canvas`&&(0,b.jsx)(qe,{commands:e?.turtleCommands??[],isRunning:t}),n===`variables`&&(0,b.jsx)(Xe,{variables:e?.variables??{}})]})]})}function Ye({result:e,isRunning:t}){return t?(0,b.jsx)(`div`,{className:z.consoleOutput,children:(0,b.jsx)(`span`,{className:z.runningIndicator,children:`⚡ 代码运行中…`})}):e?(0,b.jsxs)(`div`,{className:z.consoleOutput,children:[e.stdout&&(0,b.jsx)(`pre`,{className:z.output,children:e.stdout}),e.error&&(0,b.jsx)(Ke,{error:e.error}),!e.stdout&&!e.error&&(0,b.jsx)(`div`,{className:z.successHint,children:`✅ 代码运行成功！（没有输出内容）`})]}):(0,b.jsxs)(`div`,{className:z.emptyState,children:[(0,b.jsx)(`span`,{className:z.emptyIcon,children:`🚀`}),(0,b.jsxs)(`p`,{children:[`点击 `,(0,b.jsx)(`strong`,{children:`▶ 运行`}),` 按钮看看效果吧！`]}),(0,b.jsxs)(`p`,{className:z.hint,children:[`试试输入 `,(0,b.jsx)(`code`,{children:`print("Hello!")`})]})]})}function Xe({variables:e}){let t=Object.values(e);return t.length===0?(0,b.jsxs)(`div`,{className:z.emptyState,children:[(0,b.jsx)(`span`,{className:z.emptyIcon,children:`📊`}),(0,b.jsx)(`p`,{children:`运行代码后可以在这里查看变量值`}),(0,b.jsxs)(`p`,{className:z.hint,children:[`试试 `,(0,b.jsx)(`code`,{children:`name = "小明"`}),` 然后运行`]})]}):(0,b.jsx)(`div`,{className:z.variablesTable,children:(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`变量名`}),(0,b.jsx)(`th`,{children:`类型`}),(0,b.jsx)(`th`,{children:`值`})]})}),(0,b.jsx)(`tbody`,{children:t.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{className:z.varName,children:e.name}),(0,b.jsx)(`td`,{className:z.varType,children:e.type}),(0,b.jsx)(`td`,{className:z.varValue,children:e.value})]},e.name))})]})})}var Ze={hintsSection:`_hintsSection_1i6od_1`,hintsTitle:`_hintsTitle_1i6od_8`,hintItem:`_hintItem_1i6od_15`,hintButton:`_hintButton_1i6od_19`,hintContent:`_hintContent_1i6od_39`,slideDown:`_slideDown_1i6od_1`};function Qe({hints:e}){let[t,n]=(0,_.useState)(0);if(!e||e.length===0)return null;let r=e=>{n(e<=t?e-1:e)};return(0,b.jsxs)(`div`,{className:Ze.hintsSection,children:[(0,b.jsx)(`h3`,{className:Ze.hintsTitle,children:`💡 需要一点提示吗？`}),e.map((e,n)=>(0,b.jsxs)(`div`,{className:Ze.hintItem,children:[(0,b.jsxs)(`button`,{className:Ze.hintButton,onClick:()=>r(n+1),children:[n+1<=t?`🔽`:`▶️`,` 提示 `,n+1]}),n+1<=t&&(0,b.jsx)(`p`,{className:Ze.hintContent,children:e})]},n))]})}var B={lessonView:`_lessonView_1ig6d_1`,header:`_header_1ig6d_11`,badges:`_badges_1ig6d_17`,difficultyBadge:`_difficultyBadge_1ig6d_23`,timeBadge:`_timeBadge_1ig6d_27`,title:`_title_1ig6d_35`,objectives:`_objectives_1ig6d_43`,objectivesTitle:`_objectivesTitle_1ig6d_49`,content:`_content_1ig6d_68`,intro:`_intro_1ig6d_74`,textBlock:`_textBlock_1ig6d_81`,codeBlock:`_codeBlock_1ig6d_95`,codeTitle:`_codeTitle_1ig6d_99`,codeExample:`_codeExample_1ig6d_106`,tipBlock:`_tipBlock_1ig6d_122`,tipIcon:`_tipIcon_1ig6d_141`,challengeBlock:`_challengeBlock_1ig6d_148`,summary:`_summary_1ig6d_165`};function $e({lesson:e}){return(0,b.jsxs)(`div`,{className:B.lessonView,children:[(0,b.jsxs)(`div`,{className:B.header,children:[(0,b.jsxs)(`div`,{className:B.badges,children:[(0,b.jsx)(`span`,{className:B.difficultyBadge,"data-level":e.difficulty,children:`⭐`.repeat(e.difficulty)}),(0,b.jsxs)(`span`,{className:B.timeBadge,children:[`⏱️ `,e.estimatedTime,`分钟`]})]}),(0,b.jsx)(`h2`,{className:B.title,children:e.title})]}),(0,b.jsxs)(`div`,{className:B.objectives,children:[(0,b.jsx)(`h3`,{className:B.objectivesTitle,children:`🎯 本节目标`}),(0,b.jsx)(`ul`,{children:e.objectives.map((e,t)=>(0,b.jsx)(`li`,{children:e},t))})]}),(0,b.jsxs)(`div`,{className:B.content,children:[(0,b.jsx)(`p`,{className:B.intro,children:e.content.intro}),e.content.sections.map((e,t)=>(0,b.jsx)(et,{section:e},t)),(0,b.jsxs)(`div`,{className:B.summary,children:[(0,b.jsx)(`h3`,{children:`📝 小结`}),(0,b.jsx)(`p`,{children:e.content.summary})]})]}),(0,b.jsx)(Qe,{hints:e.hints})]})}function et({section:e}){switch(e.type){case`text`:return(0,b.jsxs)(`div`,{className:B.textBlock,children:[e.title&&(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.body})]});case`code`:return(0,b.jsxs)(`div`,{className:B.codeBlock,children:[e.title&&(0,b.jsx)(`h4`,{className:B.codeTitle,children:e.title}),(0,b.jsx)(`pre`,{className:B.codeExample,children:(0,b.jsx)(`code`,{children:e.body})})]});case`tip`:return(0,b.jsxs)(`div`,{className:B.tipBlock,children:[(0,b.jsx)(`span`,{className:B.tipIcon,children:`💡`}),(0,b.jsxs)(`div`,{children:[e.title&&(0,b.jsx)(`strong`,{children:e.title}),(0,b.jsx)(`p`,{children:e.body})]})]});case`challenge`:return(0,b.jsxs)(`div`,{className:B.challengeBlock,children:[(0,b.jsx)(`h3`,{children:`🏆 挑战任务`}),(0,b.jsx)(`p`,{children:e.body})]});default:return(0,b.jsx)(`p`,{children:e.body})}}var tt={lessonNav:`_lessonNav_g2yyi_1`,navButton:`_navButton_g2yyi_10`,nextButton:`_nextButton_g2yyi_28`,nextDisabled:`_nextDisabled_g2yyi_41`};function nt({prevId:e,nextId:t,prevTitle:n,nextTitle:r,onNavigate:i,nextDisabled:a,nextDisabledHint:o}){return(0,b.jsxs)(`div`,{className:tt.lessonNav,children:[e?(0,b.jsxs)(`button`,{className:tt.navButton,onClick:()=>i(e),children:[`← `,n||`上一课`]}):(0,b.jsx)(`div`,{}),t&&(0,b.jsx)(`button`,{className:`${tt.navButton} ${tt.nextButton} ${a?tt.nextDisabled:``}`,onClick:()=>!a&&i(t),disabled:a,title:a?o||`请先完成当前关卡！`:r||`下一课`,children:a?`🔒 先通关再前进`:`${r||`下一课`} →`})]})}var rt={handle:`_handle_ewa57_5`,disabled:`_disabled_ewa57_23`,grip:`_grip_ewa57_31`};function it({onResize:e,disabled:t}){let n=(0,_.useRef)(!1),r=(0,_.useRef)(0),i=(0,_.useCallback)(e=>{t||(e.preventDefault(),n.current=!0,r.current=e.clientX,document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`)},[t]);return(0,_.useEffect)(()=>{let t=t=>{if(!n.current)return;let i=t.clientX-r.current;r.current=t.clientX,e(i)},i=()=>{n.current&&(n.current=!1,document.body.style.cursor=``,document.body.style.userSelect=``)};return document.addEventListener(`mousemove`,t),document.addEventListener(`mouseup`,i),()=>{document.removeEventListener(`mousemove`,t),document.removeEventListener(`mouseup`,i)}},[e]),(0,b.jsx)(`div`,{className:`${rt.handle} ${t?rt.disabled:``}`,onMouseDown:i,children:(0,b.jsx)(`div`,{className:rt.grip})})}var V={lessonPage:`_lessonPage_1a16i_5`,columns:`_columns_1a16i_13`,panelHeader:`_panelHeader_1a16i_26`,panelTitle:`_panelTitle_1a16i_39`,panelBody:`_panelBody_1a16i_49`,collapseBtn:`_collapseBtn_1a16i_59`,expandTab:`_expandTab_1a16i_85`,expandTabLeft:`_expandTabLeft_1a16i_107`,expandTabRight:`_expandTabRight_1a16i_112`,expandIcon:`_expandIcon_1a16i_117`,expandLabel:`_expandLabel_1a16i_122`,leftPanel:`_leftPanel_1a16i_132`,expandFill:`_expandFill_1a16i_141`,rightPanel:`_rightPanel_1a16i_145`,centerPanel:`_centerPanel_1a16i_162`,editorBody:`_editorBody_1a16i_170`,panelHeaderActions:`_panelHeaderActions_1a16i_176`,resetButton:`_resetButton_1a16i_182`,toggleOn:`_toggleOn_1a16i_199`,completeButton:`_completeButton_1a16i_211`,popIn:`_popIn_1a16i_1`,completedBadge:`_completedBadge_1a16i_229`,bottomNav:`_bottomNav_1a16i_257`,loadingOverlay:`_loadingOverlay_1a16i_267`,fadeIn:`_fadeIn_1a16i_1`,loadingBox:`_loadingBox_1a16i_279`,loadingEmoji:`_loadingEmoji_1a16i_287`,bounce:`_bounce_1a16i_1`,loadingText:`_loadingText_1a16i_299`,progressBar:`_progressBar_1a16i_306`,progressFill:`_progressFill_1a16i_314`,shimmer:`_shimmer_1a16i_1`,checkBar:`_checkBar_1a16i_332`,checkItem:`_checkItem_1a16i_343`,checkPassed:`_checkPassed_1a16i_353`,checkFailed:`_checkFailed_1a16i_358`,checkIcon:`_checkIcon_1a16i_363`,checkLabel:`_checkLabel_1a16i_367`,checkHint:`_checkHint_1a16i_371`,notFound:`_notFound_1a16i_382`,celebration:`_celebration_1a16i_409`,celebrationContent:`_celebrationContent_1a16i_421`,popBounce:`_popBounce_1a16i_1`,celebrationEmoji:`_celebrationEmoji_1a16i_430`,confettiShake:`_confettiShake_1a16i_1`,celebrationText:`_celebrationText_1a16i_436`,starPop:`_starPop_1a16i_1`,celebrationSub:`_celebrationSub_1a16i_442`},at=280,ot=380,st=200,ct=260;function lt({direction:e,onClick:t,label:n}){let r=e===`left`?`◀`:`▶`;return(0,b.jsx)(`button`,{className:V.collapseBtn,onClick:t,title:`收起${n}`,children:r})}function ut({label:e,icon:t,side:n,onClick:r}){return(0,b.jsxs)(`div`,{className:`${V.expandTab} ${n===`left`?V.expandTabLeft:V.expandTabRight}`,onClick:r,title:`展开${e}`,children:[(0,b.jsx)(`span`,{className:V.expandIcon,children:t}),(0,b.jsx)(`span`,{className:V.expandLabel,children:e})]})}function dt(){let{lessonId:e=`l1_1`}=c(),t=m(),{isReady:n,loadingMessage:r,runPython:i,load:a}=Pe(),{getLessonProgress:o,completeLesson:s,saveCode:l}=I(),u=ee(e),d=ne(e),f=te(e),p=o(e),[h,g]=(0,_.useState)(p?.lastCode??u?.starterCode??``),[v,y]=(0,_.useState)(null),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!1),[k,A]=(0,_.useState)(null),[j,M]=(0,_.useState)(!1),[N,P]=(0,_.useState)(!1),[F,re]=(0,_.useState)(!1),[ie,ae]=(0,_.useState)(at),[oe,se]=(0,_.useState)(ot),ce=(0,_.useRef)(null),L=(0,_.useCallback)(e=>{ce.current?.insertTemplate(e)},[]);(0,_.useEffect)(()=>{a()},[a]),(0,_.useEffect)(()=>{p?.lastCode?g(p.lastCode):u&&g(u.starterCode),y(null),E(!1),A(null)},[e]);let le=(0,_.useCallback)(e=>{j||ae(t=>Math.max(st,t+e))},[j]),ue=(0,_.useCallback)(e=>{F||se(t=>Math.max(ct,t-e))},[F]),de=(0,_.useCallback)(async()=>{if(!h.trim()||x)return;S(!0),w(!n);let t=h;try{let n=await i(t);y(n),n.success&&l(e,t),u&&A(u.checks.map(e=>{let r=!1;return e.type===`no_error`?r=!n.error:e.type===`contains`&&e.value?r=t.includes(String(e.value)):e.type===`output_contains`&&e.value?r=n.stdout.includes(String(e.value)):e.type===`max_lines`&&typeof e.value==`number`&&(r=t.split(`
`).filter(e=>e.trim()!==``).length<=e.value),{check:e,passed:r}}))}catch{y({stdout:``,error:`出了点意外问题…刷新页面再试试？`,rawError:`unknown`,success:!1,turtleCommands:[],variables:{}}),A(null)}finally{S(!1),w(!1)}},[h,x,n,i,e,l,u]),fe=(0,_.useCallback)(()=>{let t=1;if(v?.success){let e=u?.checks.filter(e=>e.type===`no_error`?!v.error:e.type===`contains`&&e.value?h.includes(String(e.value)):e.type===`output_contains`&&e.value?v.stdout.includes(String(e.value)):e.type===`max_lines`&&typeof e.value==`number`?h.split(`
`).filter(e=>e.trim()!==``).length<=e.value:!1).length??0,n=u?.checks.length??1;e===n?t=3:e>=n/2&&(t=2)}s(e,t,h),E(!0)},[v,h,e,u?.checks,s]),pe=T||p?.completed,me=k&&k.length>0&&k.every(e=>e.passed),he=(0,_.useCallback)(e=>t(`/lesson/${e}`),[t]);return u?(0,b.jsxs)(`div`,{className:V.lessonPage,children:[C&&(0,b.jsx)(`div`,{className:V.loadingOverlay,children:(0,b.jsxs)(`div`,{className:V.loadingBox,children:[(0,b.jsx)(`span`,{className:V.loadingEmoji,children:`⏳`}),(0,b.jsx)(`p`,{className:V.loadingText,children:r}),(0,b.jsx)(`div`,{className:V.progressBar,children:(0,b.jsx)(`div`,{className:V.progressFill})})]})}),T&&(0,b.jsx)(`div`,{className:V.celebration,onClick:()=>E(!1),children:(0,b.jsxs)(`div`,{className:V.celebrationContent,children:[(0,b.jsx)(`span`,{className:V.celebrationEmoji,children:`🎉`}),(0,b.jsx)(`p`,{className:V.celebrationText,children:p?.stars?`⭐`.repeat(p.stars):`⭐`}),(0,b.jsx)(`p`,{className:V.celebrationSub,children:`太棒了！点击继续…`})]})}),(0,b.jsxs)(`div`,{className:V.columns,children:[j?(0,b.jsx)(ut,{label:`课程`,icon:`📖`,side:`left`,onClick:()=>M(!1)}):(0,b.jsxs)(`div`,{className:`${V.leftPanel} ${N?V.expandFill:``}`,style:{width:ie},children:[(0,b.jsxs)(`div`,{className:V.panelHeader,children:[(0,b.jsx)(`span`,{className:V.panelTitle,children:`📖 课程内容`}),(0,b.jsx)(lt,{direction:`left`,onClick:()=>M(!0),label:`课程内容`})]}),(0,b.jsx)(`div`,{className:V.panelBody,children:(0,b.jsx)($e,{lesson:u})})]}),!j&&!N&&(0,b.jsx)(it,{onResize:le}),N?(0,b.jsx)(ut,{label:`编辑器`,icon:`💻`,side:`right`,onClick:()=>P(!1)}):(0,b.jsxs)(`div`,{className:V.centerPanel,children:[(0,b.jsxs)(`div`,{className:V.panelHeader,children:[(0,b.jsx)(`span`,{className:V.panelTitle,children:`💻 代码编辑器`}),(0,b.jsxs)(`div`,{className:V.panelHeaderActions,children:[(0,b.jsxs)(`button`,{className:`${V.resetButton} ${D?V.toggleOn:``}`,onClick:()=>O(e=>!e),title:D?`关闭代码提示`:`开启代码提示`,children:[`💡 提示`,D?` ON`:` OFF`]}),(0,b.jsx)(`button`,{className:V.resetButton,onClick:()=>g(u.starterCode),title:`恢复到初始代码`,children:`🔄 重置`}),pe?(0,b.jsxs)(`span`,{className:V.completedBadge,children:[`✅ 已完成`,` `,p?.stars?`⭐`.repeat(p.stars):``]}):v?.success&&me?(0,b.jsx)(`button`,{className:V.completeButton,onClick:fe,children:`✅ 完成本节`}):null,(0,b.jsx)(lt,{direction:`right`,onClick:()=>P(!0),label:`代码编辑器`})]})]}),(0,b.jsx)(`div`,{className:V.editorBody,children:(0,b.jsx)(Ve,{ref:ce,value:h,onChange:g,onRun:de,disabled:x,loading:C,autocompleteEnabled:D,children:(0,b.jsx)(We,{onInsert:L})})}),k&&k.length>0&&(0,b.jsxs)(`div`,{className:V.checkBar,children:[k.map((e,t)=>(0,b.jsxs)(`div`,{className:`${V.checkItem} ${e.passed?V.checkPassed:V.checkFailed}`,children:[(0,b.jsx)(`span`,{className:V.checkIcon,children:e.passed?`✅`:`❌`}),(0,b.jsx)(`span`,{className:V.checkLabel,children:e.check.description})]},t)),!me&&(0,b.jsx)(`p`,{className:V.checkHint,children:`修改代码后点 ▶ 运行重新检查`})]})]}),!N&&!F&&(0,b.jsx)(it,{onResize:ue}),F?(0,b.jsx)(ut,{label:`输出`,icon:`📤`,side:`right`,onClick:()=>re(!1)}):(0,b.jsxs)(`div`,{className:V.rightPanel,style:{width:oe},children:[(0,b.jsxs)(`div`,{className:V.panelHeader,children:[(0,b.jsx)(`span`,{className:V.panelTitle,children:`📤 控制台 · 画布 · 变量`}),(0,b.jsx)(lt,{direction:`right`,onClick:()=>re(!0),label:`输出面板`})]}),(0,b.jsx)(`div`,{className:V.panelBody,children:(0,b.jsx)(Je,{result:v,isRunning:x})})]})]}),(0,b.jsx)(`div`,{className:V.bottomNav,children:(0,b.jsx)(nt,{prevId:d?.id,nextId:f?.id,prevTitle:d?.title,nextTitle:f?.title,onNavigate:he,nextDisabled:u.series===`game`&&!pe,nextDisabledHint:`游戏关卡需要先完成当前关卡才能继续！`})})]}):(0,b.jsxs)(`div`,{className:V.notFound,children:[(0,b.jsx)(`h2`,{children:`😕 找不到这节课`}),(0,b.jsx)(`button`,{onClick:()=>t(`/course-map`),children:`回到课程地图`})]})}var H={courseMap:`_courseMap_prv9b_1`,title:`_title_prv9b_7`,levels:`_levels_prv9b_14`,level:`_level_prv9b_14`,levelTitle:`_levelTitle_prv9b_27`,lessonGrid:`_lessonGrid_prv9b_34`,lessonCard:`_lessonCard_prv9b_40`,currentCard:`_currentCard_prv9b_62`,completedCard:`_completedCard_prv9b_67`,cardHeader:`_cardHeader_prv9b_72`,cardNumber:`_cardNumber_prv9b_78`,currentBadge:`_currentBadge_prv9b_82`,cardTitle:`_cardTitle_prv9b_91`,cardMeta:`_cardMeta_prv9b_97`,stars:`_stars_prv9b_105`};function ft({lessons:e,progress:t,currentLessonId:n,onSelectLesson:r}){let i=new Map;e.forEach(e=>{let t=i.get(e.difficulty)||[];t.push(e),i.set(e.difficulty,t)});let a={1:`🌱 L1：初识 Python`,2:`🌿 L2：循环的魔法`,3:`🌳 L3：判断与选择`,4:`🏗️ L4：数据的容器`,5:`🏰 L5：函数的艺术`};return(0,b.jsxs)(`div`,{className:H.courseMap,children:[(0,b.jsx)(`h2`,{className:H.title,children:`🗺️ 课程地图`}),(0,b.jsx)(`div`,{className:H.levels,children:Array.from(i.entries()).map(([e,i])=>(0,b.jsxs)(`div`,{className:H.level,children:[(0,b.jsx)(`h3`,{className:H.levelTitle,children:a[e]||`Level ${e}`}),(0,b.jsx)(`div`,{className:H.lessonGrid,children:i.map(e=>{let i=t[e.id],a=e.id===n,o=i?.completed,s=i?.stars??0;return(0,b.jsxs)(`button`,{className:`${H.lessonCard} ${a?H.currentCard:``} ${o?H.completedCard:``}`,onClick:()=>r(e.id),children:[(0,b.jsxs)(`div`,{className:H.cardHeader,children:[(0,b.jsx)(`span`,{className:H.cardNumber,children:o?`✅`:`📝`}),a&&(0,b.jsx)(`span`,{className:H.currentBadge,children:`当前`})]}),(0,b.jsx)(`h4`,{className:H.cardTitle,children:e.title}),(0,b.jsxs)(`div`,{className:H.cardMeta,children:[(0,b.jsxs)(`span`,{children:[`⏱️ `,e.estimatedTime,`分钟`]}),o&&(0,b.jsx)(`span`,{className:H.stars,children:`⭐`.repeat(s)})]})]},e.id)})})]},e))})]})}function pt(){let e=m(),{progress:t}=I();return(0,b.jsx)(ft,{lessons:M,progress:t.completedLessons,onSelectLesson:t=>e(`/lesson/${t}`)})}var U={page:`_page_o3hcl_1`,title:`_title_o3hcl_7`,stats:`_stats_o3hcl_15`,statCard:`_statCard_o3hcl_22`,statValue:`_statValue_o3hcl_32`,statLabel:`_statLabel_o3hcl_37`,badgeGrid:`_badgeGrid_o3hcl_44`,badgeCard:`_badgeCard_o3hcl_50`,unlocked:`_unlocked_o3hcl_60`,badgeEmoji:`_badgeEmoji_o3hcl_65`,badgeName:`_badgeName_o3hcl_71`,badgeDesc:`_badgeDesc_o3hcl_77`,locked:`_locked_o3hcl_82`,lockOverlay:`_lockOverlay_o3hcl_87`,resetSection:`_resetSection_o3hcl_94`,resetButton:`_resetButton_o3hcl_99`,confirmBox:`_confirmBox_o3hcl_115`,confirmText:`_confirmText_o3hcl_124`,confirmActions:`_confirmActions_o3hcl_131`,confirmYes:`_confirmYes_o3hcl_137`,confirmNo:`_confirmNo_o3hcl_153`};function mt(){let{progress:e,resetProgress:t}=I(),[n,r]=(0,_.useState)(!1),i=re(e),a=new Set([...e.unlockedBadges,...i]),o=P.filter(e=>a.has(e.id)).length;return(0,b.jsxs)(`div`,{className:U.page,children:[(0,b.jsx)(`h1`,{className:U.title,children:`🏆 我的成就`}),(0,b.jsxs)(`div`,{className:U.stats,children:[(0,b.jsxs)(`div`,{className:U.statCard,children:[(0,b.jsxs)(`span`,{className:U.statValue,children:[`⭐ `,e.totalStars]}),(0,b.jsx)(`span`,{className:U.statLabel,children:`总星星`})]}),(0,b.jsxs)(`div`,{className:U.statCard,children:[(0,b.jsxs)(`span`,{className:U.statValue,children:[`🏅 `,o]}),(0,b.jsxs)(`span`,{className:U.statLabel,children:[`徽章 / `,P.length]})]}),(0,b.jsxs)(`div`,{className:U.statCard,children:[(0,b.jsxs)(`span`,{className:U.statValue,children:[`📝 `,Object.values(e.completedLessons).filter(e=>e.completed).length]}),(0,b.jsx)(`span`,{className:U.statLabel,children:`已完成课程`})]})]}),(0,b.jsx)(`div`,{className:U.badgeGrid,children:P.map(e=>{let t=a.has(e.id);return(0,b.jsxs)(`div`,{className:`${U.badgeCard} ${t?U.unlocked:U.locked}`,children:[(0,b.jsx)(`span`,{className:U.badgeEmoji,children:t?e.icon:`🔒`}),(0,b.jsx)(`h3`,{className:U.badgeName,children:e.name}),(0,b.jsx)(`p`,{className:U.badgeDesc,children:e.description}),!t&&(0,b.jsx)(`div`,{className:U.lockOverlay})]},e.id)})}),(0,b.jsx)(`div`,{className:U.resetSection,children:n?(0,b.jsxs)(`div`,{className:U.confirmBox,children:[(0,b.jsxs)(`p`,{className:U.confirmText,children:[`⚠️ 确定要清空所有学习记录吗？`,(0,b.jsx)(`br`,{}),(0,b.jsx)(`strong`,{children:`星星、徽章、代码都会被删除，无法恢复！`})]}),(0,b.jsxs)(`div`,{className:U.confirmActions,children:[(0,b.jsx)(`button`,{className:U.confirmYes,onClick:()=>{t(),r(!1)},children:`确定重置`}),(0,b.jsx)(`button`,{className:U.confirmNo,onClick:()=>r(!1),children:`取消`})]})]}):(0,b.jsx)(`button`,{className:U.resetButton,onClick:()=>r(!0),children:`🗑️ 重置所有进度`})})]})}var W=null,ht=!1;function gt(e){ht=e,e&&W?W.suspend():!e&&W&&W.state===`suspended`&&W.resume()}function _t(){return ht}function vt(){return ht?null:(W||=new AudioContext,W.state===`suspended`&&W.resume(),W)}var yt=[261.63,293.66,329.63,349.23,392,440,493.88,523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5];function bt(e){try{let t=vt();if(!t)return;let n=yt[e%yt.length],r=t.currentTime,i=t.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(n,r);let a=t.createGain();a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(.25,r+.02),a.gain.exponentialRampToValueAtTime(.001,r+.3),i.connect(a),a.connect(t.destination),i.start(r),i.stop(r+.35)}catch{}}function xt(){try{let e=vt();if(!e)return;let t=e.currentTime,n=e.createOscillator();n.type=`square`,n.frequency.setValueAtTime(180,t);let r=e.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.15,t+.01),r.gain.exponentialRampToValueAtTime(.001,t+.2),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.25)}catch{}}function St(){try{let e=vt();if(!e)return;let t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,r)=>{let i=e.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(n,t+r*.1);let a=e.createGain();a.gain.setValueAtTime(0,t+r*.1),a.gain.linearRampToValueAtTime(.3,t+r*.1+.02),a.gain.exponentialRampToValueAtTime(.001,t+r*.1+.4),i.connect(a),a.connect(e.destination),i.start(t+r*.1),i.stop(t+r*.1+.45)})}catch{}}function Ct(){try{let e=vt();if(!e)return;let t=e.currentTime;[523.25,587.33,659.25,783.99,783.99,880,1046.5].forEach((n,r)=>{let i=e.createOscillator();i.type=`triangle`,i.frequency.setValueAtTime(n,t+r*.12);let a=e.createGain();a.gain.setValueAtTime(0,t+r*.12),a.gain.linearRampToValueAtTime(.3,t+r*.12+.03),a.gain.exponentialRampToValueAtTime(.001,t+r*.12+.5),i.connect(a),a.connect(e.destination),i.start(t+r*.12),i.stop(t+r*.12+.55)})}catch{}}function wt(e){try{let t=vt();if(!t)return;let n=t.currentTime,r=440+e/10*110;[r,r*1.5].forEach((e,r)=>{let i=t.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(e,n+r*.08);let a=t.createGain();a.gain.setValueAtTime(0,n+r*.08),a.gain.linearRampToValueAtTime(.3,n+r*.08+.02),a.gain.exponentialRampToValueAtTime(.001,n+r*.08+.3),i.connect(a),a.connect(t.destination),i.start(n+r*.08),i.stop(n+r*.08+.35)})}catch{}}function Tt(e,t){return e.length===1?t&&e>=`a`&&e<=`z`?e.toUpperCase():e:e===`Enter`?`
`:e===`Tab`?`	`:e}function Et(e,t,n,r,i){let a=t+n;if(a===0)return 0;let o=a>0?t/a:0,s=1;e.length>15?s=2:e.length>5&&(s=1.5);let c=10*s,l=o*o,u=Math.min(r,20)*2;return Math.round(c*l+u)}function Dt(e,t){return t<=0?0:Math.round(e/5*(60/t))}function Ot(e,t,n){return n?e>=.95&&t>=15?3:e>=.8?2:1:0}function kt(e){let[t,n]=(0,_.useState)(`idle`),[r,i]=(0,_.useState)(0),[a,o]=(0,_.useState)(0),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(0),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)([]),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(0),w=(0,_.useRef)(0),T=(0,_.useRef)(0),E=(0,_.useRef)(0),D=(0,_.useRef)(0),O=(0,_.useRef)(0),k=(0,_.useRef)(0),A=(0,_.useRef)(0),j=e.tasks[r];(0,_.useEffect)(()=>{if(t!==`running`||!b)return;let e=setInterval(()=>{C(Math.floor((Date.now()-b)/1e3))},1e3);return()=>clearInterval(e)},[t,b]);let M=t===`running`&&j?j.text[a]??``:``,ee=A.current>0?k.current/A.current:0,te=(0,_.useCallback)(()=>{n(`running`),i(0),o(0),c(``),u(!1),f(0),m(0),g(0),y([]);let e=Date.now();x(e),C(0),w.current=0,T.current=0,E.current=0,D.current=e,O.current=0,k.current=0,A.current=0},[]),ne=(0,_.useCallback)(()=>{let t=e.tasks[r],a=(Date.now()-D.current)/1e3,s=Et(t.text,w.current,T.current,E.current,a),l={taskId:t.id,text:t.text,totalKeystrokes:w.current+T.current,correctKeystrokes:w.current,errors:T.current,maxCombo:E.current,accuracy:w.current+T.current>0?w.current/(w.current+T.current):0,score:s,duration:a};g(e=>e+s),y(e=>[...e,l]),St();let d=r+1;d>=e.tasks.length?(n(`complete`),o(t.text.length),Ct()):(i(d),o(0),c(``),u(!1),w.current=0,T.current=0,E.current=0,D.current=Date.now())},[r,e.tasks]);return{phase:t,currentTaskIndex:r,currentCharIndex:a,typed:s,isError:l,combo:d,maxCombo:p,accuracy:ee,taskStatsList:v,totalScore:h,startTime:b,elapsedSeconds:S,nextExpectedChar:M,start:te,handleKeyPress:(0,_.useCallback)(e=>{if(t!==`running`||!j)return;let n=j.text[a];if(e===`Backspace`){a>0&&(o(e=>e-1),c(e=>e.slice(0,-1)),u(!1));return}if(![`Shift`,`Control`,`Alt`,`Meta`,`CapsLock`,`Tab`,`Escape`].includes(e))if(e===n||e===` `&&n===` `){A.current+=1,k.current+=1,w.current+=1,O.current+=1,O.current>E.current&&(E.current=O.current),O.current>p&&m(O.current),f(O.current),u(!1);let t=a+1;c(t=>t+e),o(t),bt(t-1),O.current>0&&O.current%10==0&&wt(O.current),t>=j.text.length&&ne()}else A.current+=1,T.current+=1,O.current=0,f(0),u(!0),xt(),setTimeout(()=>u(!1),300)},[t,j,a,p,ne]),getRecord:(0,_.useCallback)(()=>{let n=b?(Date.now()-b)/1e3:0,r=k.current,i=A.current,a=i>0?r/i:0,o=Dt(i,n),s=Ot(a,p,t===`complete`);return{sessionId:e.id,date:new Date().toISOString(),totalTasks:e.tasks.length,completedTasks:e.tasks.length,totalKeystrokes:i,correctKeystrokes:r,errors:i-r,accuracy:a,maxCombo:p,score:h,duration:Math.round(n),wpm:o,stars:s}},[b,p,h,e,t])}}var At=[{id:`typing_l1_homerow`,title:`键盘初体验 — 基准键位`,description:`熟悉 F 和 J 定位键，练习基准键位的指法`,difficulty:1,tasks:[{id:`hr_1`,text:`fff`,category:`letters`,difficulty:1,hint:`左手食指 - F键`},{id:`hr_2`,text:`jjj`,category:`letters`,difficulty:1,hint:`右手食指 - J键`},{id:`hr_3`,text:`ddd`,category:`letters`,difficulty:1,hint:`左手中指 - D键`},{id:`hr_4`,text:`kkk`,category:`letters`,difficulty:1,hint:`右手中指 - K键`},{id:`hr_5`,text:`sss`,category:`letters`,difficulty:1,hint:`左手无名指 - S键`},{id:`hr_6`,text:`lll`,category:`letters`,difficulty:1,hint:`右手无名指 - L键`},{id:`hr_7`,text:`aaa`,category:`letters`,difficulty:1,hint:`左手小指 - A键`},{id:`hr_8`,text:`fjfj`,category:`letters`,difficulty:1,hint:`定位键交替练习`},{id:`hr_9`,text:`asdf`,category:`letters`,difficulty:1,hint:`左手四个键位连打`},{id:`hr_10`,text:`jkl`,category:`letters`,difficulty:1,hint:`右手三个键位连打`},{id:`hr_11`,text:`fdsa`,category:`letters`,difficulty:1,hint:`左手反向练习`},{id:`hr_12`,text:`asdfjkl`,category:`letters`,difficulty:1,hint:`完整基准键位`}]},{id:`typing_l1_letters`,title:`字母总动员`,description:`熟悉键盘上所有字母键的位置`,difficulty:1,tasks:[{id:`al_1`,text:`hello`,category:`words`,difficulty:1,hint:`你好`},{id:`al_2`,text:`world`,category:`words`,difficulty:1,hint:`世界`},{id:`al_3`,text:`python`,category:`python`,difficulty:1,hint:`Python编程语言`},{id:`al_4`,text:`mouse`,category:`words`,difficulty:1,hint:`鼠标/老鼠`},{id:`al_5`,text:`keyboard`,category:`words`,difficulty:1,hint:`键盘`},{id:`al_6`,text:`snake`,category:`words`,difficulty:1,hint:`蛇`},{id:`al_7`,text:`game`,category:`words`,difficulty:1,hint:`游戏`},{id:`al_8`,text:`code`,category:`python`,difficulty:1,hint:`代码`},{id:`al_9`,text:`fun`,category:`words`,difficulty:1,hint:`有趣`},{id:`al_10`,text:`learn`,category:`words`,difficulty:1,hint:`学习`},{id:`al_11`,text:`star`,category:`words`,difficulty:1,hint:`星星`},{id:`al_12`,text:`run`,category:`python`,difficulty:1,hint:`运行`}]},{id:`typing_l2_python_kw`,title:`Python 关键字`,description:`练习 Python 中常用的关键字，为学编程做准备`,difficulty:2,tasks:[{id:`pk_1`,text:`print`,category:`python`,difficulty:2,hint:`输出函数 - 打印信息`},{id:`pk_2`,text:`for`,category:`python`,difficulty:2,hint:`循环关键字`},{id:`pk_3`,text:`if`,category:`python`,difficulty:2,hint:`判断关键字`},{id:`pk_4`,text:`else`,category:`python`,difficulty:2,hint:`否则分支`},{id:`pk_5`,text:`def`,category:`python`,difficulty:2,hint:`定义函数`},{id:`pk_6`,text:`import`,category:`python`,difficulty:2,hint:`导入模块`},{id:`pk_7`,text:`range`,category:`python`,difficulty:2,hint:`范围函数`},{id:`pk_8`,text:`input`,category:`python`,difficulty:2,hint:`输入函数`},{id:`pk_9`,text:`return`,category:`python`,difficulty:2,hint:`返回值`},{id:`pk_10`,text:`while`,category:`python`,difficulty:2,hint:`while循环`},{id:`pk_11`,text:`list`,category:`python`,difficulty:2,hint:`列表类型`},{id:`pk_12`,text:`True`,category:`python`,difficulty:2,hint:`布尔值-真`}]},{id:`typing_l2_python_funcs`,title:`Python 函数名`,description:`练习 Python 常用函数名的输入`,difficulty:2,tasks:[{id:`pf_1`,text:`len`,category:`python`,difficulty:2,hint:`获取长度`},{id:`pf_2`,text:`str`,category:`python`,difficulty:2,hint:`转为字符串`},{id:`pf_3`,text:`int`,category:`python`,difficulty:2,hint:`转为整数`},{id:`pf_4`,text:`append`,category:`python`,difficulty:2,hint:`列表追加`},{id:`pf_5`,text:`random`,category:`python`,difficulty:2,hint:`随机数模块`},{id:`pf_6`,text:`math`,category:`python`,difficulty:2,hint:`数学模块`},{id:`pf_7`,text:`open`,category:`python`,difficulty:2,hint:`打开文件`},{id:`pf_8`,text:`sort`,category:`python`,difficulty:2,hint:`排序`},{id:`pf_9`,text:`split`,category:`python`,difficulty:2,hint:`分割字符串`},{id:`pf_10`,text:`join`,category:`python`,difficulty:2,hint:`连接字符串`}]},{id:`typing_l3_snippets`,title:`代码片段练习`,description:`输入完整的 Python 代码行，学打字的同时熟悉代码结构`,difficulty:3,tasks:[{id:`cs_1`,text:`print("Hello")`,category:`python`,difficulty:3,hint:`打印Hello`},{id:`cs_2`,text:`for i in range(10):`,category:`python`,difficulty:3,hint:`循环10次`},{id:`cs_3`,text:`if x > 5:`,category:`python`,difficulty:3,hint:`判断x大于5`},{id:`cs_4`,text:`name = "Python"`,category:`python`,difficulty:3,hint:`变量赋值`},{id:`cs_5`,text:`import random`,category:`python`,difficulty:3,hint:`导入随机模块`},{id:`cs_6`,text:`def greet(name):`,category:`python`,difficulty:3,hint:`定义问候函数`},{id:`cs_7`,text:`numbers = [1, 2, 3]`,category:`python`,difficulty:3,hint:`创建列表`},{id:`cs_8`,text:`print(f"Hi {name}")`,category:`python`,difficulty:3,hint:`f-string格式化`}]},{id:`typing_l3_sentences`,title:`英文句子工厂`,description:`练习输入完整的英文句子`,difficulty:2,tasks:[{id:`es_1`,text:`I love Python.`,category:`sentences`,difficulty:2,hint:`我爱Python`},{id:`es_2`,text:`Coding is fun.`,category:`sentences`,difficulty:2,hint:`编程很有趣`},{id:`es_3`,text:`Hello, world!`,category:`sentences`,difficulty:2,hint:`你好，世界！`},{id:`es_4`,text:`Let us learn together.`,category:`sentences`,difficulty:2,hint:`让我们一起学习`},{id:`es_5`,text:`Practice makes perfect.`,category:`sentences`,difficulty:2,hint:`熟能生巧`},{id:`es_6`,text:`Keep going, you are great!`,category:`sentences`,difficulty:2,hint:`继续加油，你很棒！`},{id:`es_7`,text:`I can write code.`,category:`sentences`,difficulty:2,hint:`我会写代码了`},{id:`es_8`,text:`Today is a good day.`,category:`sentences`,difficulty:2,hint:`今天是美好的一天`}]},{id:`typing_l4_mixed`,title:`综合挑战`,description:`混合字母、单词和代码的综合练习`,difficulty:4,tasks:[{id:`mx_1`,text:`print("Hello, World!")`,category:`python`,difficulty:4,hint:`经典第一行代码`},{id:`mx_2`,text:`for i in range(5):`,category:`python`,difficulty:4,hint:`循环5次`},{id:`mx_3`,text:`Python is awesome!`,category:`sentences`,difficulty:3,hint:`Python太棒了`},{id:`mx_4`,text:`def add(a, b):`,category:`python`,difficulty:4,hint:`定义加法函数`},{id:`mx_5`,text:`return a + b`,category:`python`,difficulty:3,hint:`返回两数之和`},{id:`mx_6`,text:`if __name__ == "__main__":`,category:`python`,difficulty:5,hint:`主程序入口`},{id:`mx_7`,text:`Learning never stops.`,category:`sentences`,difficulty:3,hint:`学无止境`},{id:`mx_8`,text:`my_list.append(item)`,category:`python`,difficulty:4,hint:`往列表添加元素`},{id:`mx_9`,text:`while count > 0:`,category:`python`,difficulty:4,hint:`while循环条件`},{id:`mx_10`,text:`The quick brown fox`,category:`sentences`,difficulty:3,hint:`经典的包含所有字母的句子`}]},{id:`typing_l4_code_blocks`,title:`代码块挑战`,description:`输入多行 Python 代码块，模拟真实编程体验`,difficulty:4,tasks:[{id:`cb_1`,text:`for i in range(3):`,category:`python`,difficulty:4,hint:`循环开始`},{id:`cb_2`,text:`    print(i)`,category:`python`,difficulty:4,hint:`缩进4个空格`},{id:`cb_3`,text:`if score >= 90:`,category:`python`,difficulty:4,hint:`成绩判断`},{id:`cb_4`,text:`    print("Excellent!")`,category:`python`,difficulty:4,hint:`打印Excellent`},{id:`cb_5`,text:`total = sum(numbers)`,category:`python`,difficulty:4,hint:`求和`},{id:`cb_6`,text:`result = a * b + c`,category:`python`,difficulty:3,hint:`算术表达式`},{id:`cb_7`,text:`names = ["Alice", "Bob"]`,category:`python`,difficulty:4,hint:`字符串列表`},{id:`cb_8`,text:`print(len(names))`,category:`python`,difficulty:4,hint:`输出列表长度`}]}],jt=[{level:1,title:`键盘新手`,minScore:0,icon:`⌨️`},{level:2,title:`字母小达人`,minScore:100,icon:`🔤`},{level:3,title:`指法小能手`,minScore:300,icon:`👆`},{level:4,title:`键盘小飞侠`,minScore:800,icon:`🚀`},{level:5,title:`闪电打字员`,minScore:2e3,icon:`⚡`},{level:6,title:`代码输入师`,minScore:5e3,icon:`💻`},{level:7,title:`键盘大师`,minScore:12e3,icon:`🎹`},{level:8,title:`键盘传奇`,minScore:3e4,icon:`🏆`}];function Mt(e){let t=jt[0];for(let n of jt)e>=n.minScore&&(t=n);return t}var G={keyboard:`_keyboard_1bd4r_5`,row:`_row_1bd4r_20`,key:`_key_1bd4r_5`,keyLabel:`_keyLabel_1bd4r_42`,wideKey:`_wideKey_1bd4r_51`,spaceKey:`_spaceKey_1bd4r_55`,homeBump:`_homeBump_1bd4r_64`,correct:`_correct_1bd4r_74`,error:`_error_1bd4r_87`,shake:`_shake_1bd4r_1`,hint:`_hint_1bd4r_108`,hintPulse:`_hintPulse_1bd4r_1`,muteButton:`_muteButton_1bd4r_125`},Nt=[[{label:"`",code:`Backquote`},{label:`1`,code:`Digit1`},{label:`2`,code:`Digit2`},{label:`3`,code:`Digit3`},{label:`4`,code:`Digit4`},{label:`5`,code:`Digit5`},{label:`6`,code:`Digit6`},{label:`7`,code:`Digit7`},{label:`8`,code:`Digit8`},{label:`9`,code:`Digit9`},{label:`0`,code:`Digit0`},{label:`-`,code:`Minus`},{label:`=`,code:`Equal`},{label:`⌫`,code:`Backspace`,width:2}],[{label:`Tab`,code:`Tab`,width:1.5},{label:`Q`,code:`KeyQ`},{label:`W`,code:`KeyW`},{label:`E`,code:`KeyE`},{label:`R`,code:`KeyR`},{label:`T`,code:`KeyT`},{label:`Y`,code:`KeyY`},{label:`U`,code:`KeyU`},{label:`I`,code:`KeyI`},{label:`O`,code:`KeyO`},{label:`P`,code:`KeyP`},{label:`[`,code:`BracketLeft`},{label:`]`,code:`BracketRight`},{label:`\\`,code:`Backslash`,width:1.5}],[{label:`Caps`,code:`CapsLock`,width:1.75},{label:`A`,code:`KeyA`},{label:`S`,code:`KeyS`},{label:`D`,code:`KeyD`},{label:`F`,code:`KeyF`},{label:`G`,code:`KeyG`},{label:`H`,code:`KeyH`},{label:`J`,code:`KeyJ`},{label:`K`,code:`KeyK`},{label:`L`,code:`KeyL`},{label:`;`,code:`Semicolon`},{label:`'`,code:`Quote`},{label:`Enter`,code:`Enter`,width:2.25}],[{label:`Shift`,code:`ShiftLeft`,width:2.25},{label:`Z`,code:`KeyZ`},{label:`X`,code:`KeyX`},{label:`C`,code:`KeyC`},{label:`V`,code:`KeyV`},{label:`B`,code:`KeyB`},{label:`N`,code:`KeyN`},{label:`M`,code:`KeyM`},{label:`,`,code:`Comma`},{label:`.`,code:`Period`},{label:`/`,code:`Slash`},{label:`Shift`,code:`ShiftRight`,width:2.25}],[{label:`Space`,code:`Space`,width:6}]];function Pt({nextExpectedChar:e,lastKeyCode:t,lastKeyCorrect:n,muted:r,onToggleMute:i}){let[a,o]=(0,_.useState)({}),s=(0,_.useRef)({});(0,_.useEffect)(()=>{if(!t)return;let e=n?`correct`:`error`;return o(n=>({...n,[t]:e})),s.current[t]&&clearTimeout(s.current[t]),s.current[t]=setTimeout(()=>{o(e=>{let n={...e};return delete n[t],n})},350),()=>{Object.values(s.current).forEach(e=>clearTimeout(e))}},[t,n]);function c(e){if(!e||e.length===0)return null;let t=e.toLowerCase();for(let e of Nt)for(let n of e){if(n.label.toLowerCase()===t)return n.code;if(t===` `&&n.code===`Space`)return`Space`;if(t===`
`&&n.code===`Enter`)return`Enter`;if(t===`	`&&n.code===`Tab`)return`Tab`}return null}let l=c(e);return(0,b.jsxs)(`div`,{className:G.keyboard,children:[Nt.map((e,t)=>(0,b.jsx)(`div`,{className:G.row,children:e.map(e=>{let t=a[e.code],n=l===e.code,r=G.key;t===`correct`?r+=` ${G.correct}`:t===`error`&&(r+=` ${G.error}`),n&&(r+=` ${G.hint}`),e.code===`Space`&&(r+=` ${G.spaceKey}`),e.code===`Backspace`&&(r+=` ${G.wideKey}`);let i=e.width?{flex:e.width}:{flex:1};return(0,b.jsxs)(`div`,{className:r,style:i,children:[(0,b.jsx)(`span`,{className:G.keyLabel,children:e.label}),(e.code===`KeyF`||e.code===`KeyJ`)&&(0,b.jsx)(`span`,{className:G.homeBump})]},e.code)})},t)),(0,b.jsx)(`button`,{className:G.muteButton,onClick:i,title:r?`开启音效`:`静音`,children:r?`🔇`:`🔊`})]})}var K={container:`_container_17in1_5`,hint:`_hint_17in1_12`,target:`_target_17in1_18`,char:`_char_17in1_29`,correct:`_correct_17in1_45`,current:`_current_17in1_53`,blink:`_blink_17in1_1`,error:`_error_17in1_76`,pending:`_pending_17in1_81`,shake:`_shake_17in1_86`,containerShake:`_containerShake_17in1_1`,complete:`_complete_17in1_99`,popIn:`_popIn_17in1_1`};function Ft({task:e,currentCharIndex:t,isError:n}){let r=[...e.text];return(0,b.jsxs)(`div`,{className:K.container,children:[(0,b.jsx)(`div`,{className:K.hint,children:e.hint}),(0,b.jsx)(`div`,{className:`${K.target} ${n?K.shake:``}`,children:r.map((e,r)=>{let i;i=r<t?K.correct:r===t?n?K.error:K.current:K.pending;let a=e===` `?`␣`:e;return(0,b.jsx)(`span`,{className:`${K.char} ${i}`,children:a},r)})}),t>=r.length&&(0,b.jsx)(`div`,{className:K.complete,children:`✅ 完成！`})]})}var q={container:`_container_1w92j_5`,progressWrapper:`_progressWrapper_1w92j_12`,bar:`_bar_1w92j_19`,fill:`_fill_1w92j_27`,progressLabel:`_progressLabel_1w92j_34`,stats:`_stats_1w92j_43`,statItem:`_statItem_1w92j_50`,statLabel:`_statLabel_1w92j_57`,statValue:`_statValue_1w92j_62`,comboWarm:`_comboWarm_1w92j_68`,comboHot:`_comboHot_1w92j_72`,comboBounce:`_comboBounce_1w92j_1`};function It({currentTaskIndex:e,totalTasks:t,combo:n,maxCombo:r,totalScore:i,accuracy:a,elapsedSeconds:o}){let s=t>0?Math.round(e/t*100):0,c=e=>`${Math.floor(e/60)}:${(e%60).toString().padStart(2,`0`)}`,l=n>=20?q.comboHot:n>=10?q.comboWarm:``;return(0,b.jsxs)(`div`,{className:q.container,children:[(0,b.jsxs)(`div`,{className:q.progressWrapper,children:[(0,b.jsx)(`div`,{className:q.bar,children:(0,b.jsx)(`div`,{className:q.fill,style:{width:`${s}%`}})}),(0,b.jsxs)(`span`,{className:q.progressLabel,children:[e,` / `,t]})]}),(0,b.jsxs)(`div`,{className:q.stats,children:[(0,b.jsxs)(`div`,{className:q.statItem,children:[(0,b.jsx)(`span`,{className:q.statLabel,children:`得分`}),(0,b.jsxs)(`span`,{className:q.statValue,children:[`⭐ `,i]})]}),(0,b.jsxs)(`div`,{className:q.statItem,children:[(0,b.jsx)(`span`,{className:q.statLabel,children:`连击`}),(0,b.jsx)(`span`,{className:`${q.statValue} ${l}`,children:n>0?`🔥 x${n}`:`-`})]}),(0,b.jsxs)(`div`,{className:q.statItem,children:[(0,b.jsx)(`span`,{className:q.statLabel,children:`最高连击`}),(0,b.jsx)(`span`,{className:q.statValue,children:r>0?`✨ ${r}`:`-`})]}),(0,b.jsxs)(`div`,{className:q.statItem,children:[(0,b.jsx)(`span`,{className:q.statLabel,children:`准确率`}),(0,b.jsxs)(`span`,{className:q.statValue,children:[Math.round(a*100),`%`]})]}),(0,b.jsxs)(`div`,{className:q.statItem,children:[(0,b.jsx)(`span`,{className:q.statLabel,children:`时间`}),(0,b.jsx)(`span`,{className:q.statValue,children:c(o)})]})]})]})}var J={overlay:`_overlay_6qtng_5`,fadeIn:`_fadeIn_6qtng_1`,panel:`_panel_6qtng_21`,slideUp:`_slideUp_6qtng_1`,title:`_title_6qtng_37`,sessionName:`_sessionName_6qtng_43`,starsRow:`_starsRow_6qtng_50`,star:`_star_6qtng_50`,earned:`_earned_6qtng_62`,starPop:`_starPop_6qtng_1`,empty:`_empty_6qtng_66`,statsGrid:`_statsGrid_6qtng_78`,statItem:`_statItem_6qtng_85`,statLabel:`_statLabel_6qtng_95`,statValue:`_statValue_6qtng_100`,levelInfo:`_levelInfo_6qtng_107`,levelIcon:`_levelIcon_6qtng_118`,levelTitle:`_levelTitle_6qtng_122`,actions:`_actions_6qtng_129`,retryBtn:`_retryBtn_6qtng_135`,continueBtn:`_continueBtn_6qtng_136`};function Lt({record:e,session:t,currentLevel:n,onContinue:r,onRetry:i}){return(0,b.jsx)(`div`,{className:J.overlay,children:(0,b.jsxs)(`div`,{className:J.panel,children:[(0,b.jsx)(`h2`,{className:J.title,children:`🎉 练习完成！`}),(0,b.jsx)(`p`,{className:J.sessionName,children:t.title}),(0,b.jsx)(`div`,{className:J.starsRow,children:[1,2,3].map(t=>(0,b.jsx)(`span`,{className:`${J.star} ${t<=e.stars?J.earned:J.empty}`,children:`⭐`},t))}),(0,b.jsxs)(`div`,{className:J.statsGrid,children:[(0,b.jsxs)(`div`,{className:J.statItem,children:[(0,b.jsx)(`span`,{className:J.statLabel,children:`总得分`}),(0,b.jsxs)(`span`,{className:J.statValue,children:[`+`,e.score]})]}),(0,b.jsxs)(`div`,{className:J.statItem,children:[(0,b.jsx)(`span`,{className:J.statLabel,children:`准确率`}),(0,b.jsxs)(`span`,{className:J.statValue,children:[Math.round(e.accuracy*100),`%`]})]}),(0,b.jsxs)(`div`,{className:J.statItem,children:[(0,b.jsx)(`span`,{className:J.statLabel,children:`速度`}),(0,b.jsxs)(`span`,{className:J.statValue,children:[e.wpm,` WPM`]})]}),(0,b.jsxs)(`div`,{className:J.statItem,children:[(0,b.jsx)(`span`,{className:J.statLabel,children:`最高连击`}),(0,b.jsxs)(`span`,{className:J.statValue,children:[`🔥 `,e.maxCombo]})]}),(0,b.jsxs)(`div`,{className:J.statItem,children:[(0,b.jsx)(`span`,{className:J.statLabel,children:`总击键`}),(0,b.jsx)(`span`,{className:J.statValue,children:e.totalKeystrokes})]}),(0,b.jsxs)(`div`,{className:J.statItem,children:[(0,b.jsx)(`span`,{className:J.statLabel,children:`用时`}),(0,b.jsx)(`span`,{className:J.statValue,children:(e=>`${Math.floor(e/60)}分${e%60}秒`)(e.duration)})]})]}),(0,b.jsxs)(`div`,{className:J.levelInfo,children:[(0,b.jsx)(`span`,{className:J.levelIcon,children:n.icon}),(0,b.jsxs)(`span`,{className:J.levelTitle,children:[n.title,` (Lv.`,n.level,`)`]})]}),(0,b.jsxs)(`div`,{className:J.actions,children:[(0,b.jsx)(`button`,{className:J.retryBtn,onClick:i,children:`🔄 再练一次`}),(0,b.jsx)(`button`,{className:J.continueBtn,onClick:r,children:`📋 选择其他练习`})]})]})})}var Y={container:`_container_1f4v7_5`,header:`_header_1f4v7_11`,levelBadge:`_levelBadge_1f4v7_16`,levelIcon:`_levelIcon_1f4v7_27`,levelTitle:`_levelTitle_1f4v7_31`,levelNum:`_levelNum_1f4v7_36`,headerStats:`_headerStats_1f4v7_44`,grid:`_grid_1f4v7_53`,card:`_card_1f4v7_60`,locked:`_locked_1f4v7_76`,cardDifficulty:`_cardDifficulty_1f4v7_82`,cardTitle:`_cardTitle_1f4v7_87`,cardDesc:`_cardDesc_1f4v7_93`,cardMeta:`_cardMeta_1f4v7_100`,lockOverlay:`_lockOverlay_1f4v7_114`,lockIcon:`_lockIcon_1f4v7_126`,lockText:`_lockText_1f4v7_130`};function Rt({sessions:e,typingStats:t,onSelect:n}){let r=Mt(t.totalScore);return(0,b.jsxs)(`div`,{className:Y.container,children:[(0,b.jsxs)(`div`,{className:Y.header,children:[(0,b.jsxs)(`div`,{className:Y.levelBadge,children:[(0,b.jsx)(`span`,{className:Y.levelIcon,children:r.icon}),(0,b.jsx)(`span`,{className:Y.levelTitle,children:r.title}),(0,b.jsxs)(`span`,{className:Y.levelNum,children:[`Lv.`,r.level]})]}),(0,b.jsxs)(`div`,{className:Y.headerStats,children:[(0,b.jsxs)(`span`,{children:[`⭐ `,t.totalScore,` 积分`]}),(0,b.jsxs)(`span`,{children:[`📝 `,t.records.length,` 次练习`]})]})]}),(0,b.jsx)(`div`,{className:Y.grid,children:e.map(e=>{let t=e.difficulty<=r.level+1;return(0,b.jsxs)(`button`,{className:`${Y.card} ${t?``:Y.locked}`,onClick:()=>t&&n(e),disabled:!t,children:[(0,b.jsx)(`div`,{className:Y.cardDifficulty,children:`⭐`.repeat(e.difficulty)}),(0,b.jsx)(`h3`,{className:Y.cardTitle,children:e.title}),(0,b.jsx)(`p`,{className:Y.cardDesc,children:e.description}),(0,b.jsxs)(`div`,{className:Y.cardMeta,children:[(0,b.jsxs)(`span`,{children:[e.tasks.length,` 条练习`]}),(0,b.jsxs)(`span`,{children:[`约 `,Math.round(e.tasks.length*.4),` 分钟`]})]}),!t&&(0,b.jsxs)(`div`,{className:Y.lockOverlay,children:[(0,b.jsx)(`span`,{className:Y.lockIcon,children:`🔒`}),(0,b.jsxs)(`span`,{className:Y.lockText,children:[`达到 `,r.level+1,` 级后解锁`]})]})]},e.id)})})]})}var X={page:`_page_12x42_5`,pageTitle:`_pageTitle_12x42_14`,pageSubtitle:`_pageSubtitle_12x42_21`,preStartContainer:`_preStartContainer_12x42_29`,preStartCard:`_preStartCard_12x42_36`,preStartTitle:`_preStartTitle_12x42_46`,preStartDesc:`_preStartDesc_12x42_52`,preStartMeta:`_preStartMeta_12x42_58`,startBtn:`_startBtn_12x42_67`,preStartHint:`_preStartHint_12x42_90`,topBar:`_topBar_12x42_97`,topBarSpacer:`_topBarSpacer_12x42_102`,backBtn:`_backBtn_12x42_106`,targetArea:`_targetArea_12x42_122`,taskDots:`_taskDots_12x42_130`,dot:`_dot_12x42_136`,dotDone:`_dotDone_12x42_144`,dotActive:`_dotActive_12x42_148`,muteIndicator:`_muteIndicator_12x42_154`};function zt(){let{progress:e,addTypingRecord:t}=I(),n=e.typingStats,[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),l=At[0],u=kt(r??l),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),h=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!r||u.phase!==`running`)return;let e=e=>{f(e.code);let t=[`Shift`,`Control`,`Alt`,`Meta`,`CapsLock`,`Tab`,`Escape`],n=[`F1`,`F2`,`F3`,`F4`,`F5`,`F6`,`F7`,`F8`,`F9`,`F10`,`F11`,`F12`];[...t,...n].includes(e.key)||e.preventDefault();let i=r.tasks[u.currentTaskIndex],a=Tt(e.key,e.shiftKey);if(i){let n=i.text[u.currentCharIndex];t.includes(e.key)||(a===n||e.key===`Backspace`?m(!0):m(!1))}u.handleKeyPress(a)};return window.addEventListener(`keydown`,e,{capture:!0}),()=>window.removeEventListener(`keydown`,e,{capture:!0})},[r,u]),(0,_.useEffect)(()=>{u.phase===`complete`&&(t(u.getRecord()),o(!0))},[u.phase]),(0,_.useEffect)(()=>()=>{h.current&&clearTimeout(h.current)},[]);let g=(0,_.useCallback)(e=>{i(e),o(!1)},[]),v=(0,_.useCallback)(()=>{u.start()},[u]),y=(0,_.useCallback)(()=>{o(!1),u.start()},[u]),x=(0,_.useCallback)(()=>{i(null),o(!1)},[]),S=(0,_.useCallback)(()=>{let e=!_t();gt(e),c(e)},[]);if(!r)return(0,b.jsxs)(`div`,{className:X.page,children:[(0,b.jsx)(`h1`,{className:X.pageTitle,children:`⌨️ 打字练习`}),(0,b.jsx)(`p`,{className:X.pageSubtitle,children:`每次 5 分钟，让手指熟悉键盘，顺便记 Python 关键字！`}),(0,b.jsx)(Rt,{sessions:At,typingStats:n,onSelect:g})]});if(u.phase===`idle`)return(0,b.jsx)(`div`,{className:X.page,children:(0,b.jsxs)(`div`,{className:X.preStartContainer,children:[(0,b.jsx)(`button`,{className:X.backBtn,onClick:x,children:`← 返回选择`}),(0,b.jsxs)(`div`,{className:X.preStartCard,children:[(0,b.jsx)(`h2`,{className:X.preStartTitle,children:r.title}),(0,b.jsx)(`p`,{className:X.preStartDesc,children:r.description}),(0,b.jsxs)(`div`,{className:X.preStartMeta,children:[(0,b.jsxs)(`span`,{children:[r.tasks.length,` 条练习`]}),(0,b.jsxs)(`span`,{children:[`难度: `,`⭐`.repeat(r.difficulty)]})]}),(0,b.jsx)(`button`,{className:X.startBtn,onClick:v,children:`🚀 开始练习！`}),(0,b.jsx)(`p`,{className:X.preStartHint,children:`提示：输入时请使用英文输入法，按提示逐个输入字符`})]})]})});let C=r.tasks[u.currentTaskIndex];return(0,b.jsxs)(`div`,{className:X.page,children:[(0,b.jsxs)(`div`,{className:X.topBar,children:[(0,b.jsx)(`button`,{className:X.backBtn,onClick:x,children:`← 退出`}),(0,b.jsx)(`div`,{className:X.topBarSpacer})]}),(0,b.jsx)(It,{currentTaskIndex:u.currentTaskIndex,totalTasks:r.tasks.length,combo:u.combo,maxCombo:u.maxCombo,totalScore:u.totalScore,accuracy:u.accuracy,elapsedSeconds:u.elapsedSeconds}),(0,b.jsx)(Pt,{nextExpectedChar:u.nextExpectedChar,lastKeyCode:d,lastKeyCorrect:p,muted:s,onToggleMute:S}),(0,b.jsx)(`div`,{className:X.targetArea,children:C&&(0,b.jsx)(Ft,{task:C,currentCharIndex:u.currentCharIndex,isError:u.isError})}),(0,b.jsx)(`div`,{className:X.taskDots,children:r.tasks.map((e,t)=>(0,b.jsx)(`span`,{className:`${X.dot} ${t<u.currentTaskIndex?X.dotDone:t===u.currentTaskIndex?X.dotActive:``}`},t))}),a&&(0,b.jsx)(Lt,{record:u.getRecord(),session:r,currentLevel:Mt(n.totalScore),onContinue:x,onRetry:y}),s&&(0,b.jsx)(`div`,{className:X.muteIndicator,children:`🔇 音效已关闭`})]})}var Z={storyMap:`_storyMap_1lxiw_5`,title:`_title_1lxiw_9`,chapterList:`_chapterList_1lxiw_17`,chapterNode:`_chapterNode_1lxiw_23`,current:`_current_1lxiw_43`,completed:`_completed_1lxiw_49`,locked:`_locked_1lxiw_54`,nodeIcon:`_nodeIcon_1lxiw_60`,nodeInfo:`_nodeInfo_1lxiw_65`,nodeTitle:`_nodeTitle_1lxiw_72`,nodeStars:`_nodeStars_1lxiw_78`};function Bt({episodes:e,progress:t,currentEpisodeId:n,onSelectEpisode:r}){return(0,b.jsxs)(`div`,{className:Z.storyMap,children:[(0,b.jsx)(`h3`,{className:Z.title,children:`📜 冒险旅程`}),(0,b.jsx)(`div`,{className:Z.chapterList,children:e.map((i,a)=>{let o=t[i.id],s=o?.completed,c=i.id===n,l=a===0||t[e[a-1]?.id]?.completed;return(0,b.jsxs)(`button`,{className:`${Z.chapterNode} ${c?Z.current:``} ${s?Z.completed:``} ${l?``:Z.locked}`,onClick:()=>l&&r(i.id),disabled:!l,title:l?i.title:`先完成前面的关卡！`,children:[(0,b.jsx)(`span`,{className:Z.nodeIcon,children:s?`✅`:l?`📍`:`🔒`}),(0,b.jsxs)(`div`,{className:Z.nodeInfo,children:[(0,b.jsxs)(`span`,{className:Z.nodeTitle,children:[`第`,a+1,`关：`,i.title.replace(/^第.+?：/,``)]}),s&&(0,b.jsx)(`span`,{className:Z.nodeStars,children:`⭐`.repeat(o.stars)})]})]},i.id)})})]})}var Q={page:`_page_3rtb8_5`,hero:`_hero_3rtb8_11`,title:`_title_3rtb8_16`,subtitle:`_subtitle_3rtb8_23`,progress:`_progress_3rtb8_29`,progressBar:`_progressBar_3rtb8_39`,progressFill:`_progressFill_3rtb8_47`,content:`_content_3rtb8_54`,mapWrapper:`_mapWrapper_3rtb8_60`,intro:`_intro_3rtb8_64`,cta:`_cta_3rtb8_85`};function Vt(){let e=m(),{progress:t}=I(),n=t=>{e(`/lesson/${t}`)},r=A.filter(e=>t.completedLessons[e.id]?.completed).length;return(0,b.jsxs)(`div`,{className:Q.page,children:[(0,b.jsxs)(`div`,{className:Q.hero,children:[(0,b.jsx)(`h1`,{className:Q.title,children:`🐍 故事模式`}),(0,b.jsx)(`p`,{className:Q.subtitle,children:`和 Python 小蛇一起踏上代码世界的冒险旅程！`}),(0,b.jsxs)(`div`,{className:Q.progress,children:[`已完成 `,r,` / `,A.length,` 关`,(0,b.jsx)(`div`,{className:Q.progressBar,children:(0,b.jsx)(`div`,{className:Q.progressFill,style:{width:`${A.length>0?r/A.length*100:0}%`}})})]})]}),(0,b.jsxs)(`div`,{className:Q.content,children:[(0,b.jsx)(`div`,{className:Q.mapWrapper,children:(0,b.jsx)(Bt,{episodes:A,progress:t.completedLessons,onSelectEpisode:n})}),(0,b.jsxs)(`div`,{className:Q.intro,children:[(0,b.jsx)(`h3`,{children:`📖 故事简介`}),(0,b.jsx)(`p`,{children:`在神秘的代码世界里，Python 小蛇沉睡了。 你需要用编程魔法唤醒它，然后一起穿越数字峡谷、 走过三岔路口、探索魔法宝库，最后铸造属于自己的魔法杖！`}),(0,b.jsx)(`p`,{children:`每一关都是一个编程挑战——学会新的 Python 技能， 你就能帮小蛇克服一个又一个难关。`}),(0,b.jsx)(`p`,{className:Q.cta,children:`🚀 准备好了吗？从第一关开始，唤醒 Python 小蛇！`})]})]})]})}var $={page:`_page_mh8n5_5`,hero:`_hero_mh8n5_11`,title:`_title_mh8n5_16`,subtitle:`_subtitle_mh8n5_23`,stats:`_stats_mh8n5_29`,challengeGrid:`_challengeGrid_mh8n5_38`,challengeCard:`_challengeCard_mh8n5_44`,locked:`_locked_mh8n5_55`,completed:`_completed_mh8n5_61`,cardHeader:`_cardHeader_mh8n5_71`,challengeNum:`_challengeNum_mh8n5_77`,difficulty:`_difficulty_mh8n5_81`,cardTitle:`_cardTitle_mh8n5_85`,cardDesc:`_cardDesc_mh8n5_92`,cardMeta:`_cardMeta_mh8n5_104`,starsEarned:`_starsEarned_mh8n5_112`,startBtn:`_startBtn_mh8n5_116`};function Ht(){let e=m(),{progress:t}=I(),n=j.filter(e=>t.completedLessons[e.id]?.completed).length,r=j.reduce((e,n)=>e+(t.completedLessons[n.id]?.stars??0),0),i=t=>{e(`/lesson/${t}`)};return(0,b.jsxs)(`div`,{className:$.page,children:[(0,b.jsxs)(`div`,{className:$.hero,children:[(0,b.jsx)(`h1`,{className:$.title,children:`🏟️ Code Arena`}),(0,b.jsx)(`p`,{className:$.subtitle,children:`代码竞技场 — 挑战你的编程极限！`}),(0,b.jsxs)(`div`,{className:$.stats,children:[(0,b.jsxs)(`span`,{children:[`🏆 `,n,`/`,j.length,` 关已通关`]}),(0,b.jsxs)(`span`,{children:[`⭐ `,r,` 颗星`]})]})]}),(0,b.jsx)(`div`,{className:$.challengeGrid,children:j.map((e,n)=>{let r=t.completedLessons[e.id],a=r?.completed,o=n>0&&!t.completedLessons[j[n-1].id]?.completed;return(0,b.jsxs)(`div`,{className:`${$.challengeCard} ${a?$.completed:``} ${o?$.locked:``}`,children:[(0,b.jsxs)(`div`,{className:$.cardHeader,children:[(0,b.jsx)(`span`,{className:$.challengeNum,children:a?`✅`:o?`🔒`:`⚔️`}),(0,b.jsx)(`span`,{className:$.difficulty,children:`⭐`.repeat(e.difficulty)})]}),(0,b.jsx)(`h3`,{className:$.cardTitle,children:e.title}),(0,b.jsx)(`p`,{className:$.cardDesc,children:e.content.intro.split(`
`).slice(0,2).join(` `)}),(0,b.jsxs)(`div`,{className:$.cardMeta,children:[(0,b.jsxs)(`span`,{children:[`⏱️ `,e.estimatedTime,`分钟`]}),a&&(0,b.jsx)(`span`,{className:$.starsEarned,children:`⭐`.repeat(r.stars)})]}),(0,b.jsx)(`button`,{className:$.startBtn,onClick:()=>i(e.id),disabled:o,children:o?`先通关前面`:a?`再挑战一次`:`开始挑战`})]},e.id)})})]})}function Ut(){return(0,b.jsx)(s,{children:(0,b.jsxs)(l,{element:(0,b.jsx)(C,{}),children:[(0,b.jsx)(l,{path:`/`,element:(0,b.jsx)(le,{})}),(0,b.jsx)(l,{path:`/lesson/:lessonId`,element:(0,b.jsx)(dt,{})}),(0,b.jsx)(l,{path:`/course-map`,element:(0,b.jsx)(pt,{})}),(0,b.jsx)(l,{path:`/story`,element:(0,b.jsx)(Vt,{})}),(0,b.jsx)(l,{path:`/arena`,element:(0,b.jsx)(Ht,{})}),(0,b.jsx)(l,{path:`/achievements`,element:(0,b.jsx)(mt,{})}),(0,b.jsx)(l,{path:`/typing`,element:(0,b.jsx)(zt,{})})]})})}var Wt=h;(0,v.createRoot)(document.getElementById(`root`)).render((0,b.jsx)(_.StrictMode,{children:(0,b.jsx)(Wt,{children:(0,b.jsx)(Ut,{})})}));