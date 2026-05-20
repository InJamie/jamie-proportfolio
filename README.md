# jamie-proportfolio

Jamie 的个人作品集网站。基于 React + Vite 搭建，包含首页介绍、番茄钟、日程日历等页面，用于展示个人信息与日常小工具。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 |
| 构建 | Vite 6 |
| 路由 | react-router-dom 7 |
| 样式 | Tailwind CSS 4 + DaisyUI 5 |
| 规范 | ESLint 9 |

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:5173）
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 项目结构

```
jamie-proportfolio/
├── index.html              # HTML 入口
├── vite.config.js          # Vite 配置（React + Tailwind 插件）
├── eslint.config.js        # ESLint 配置
├── package.json
└── src/
    ├── main.jsx            # React 挂载入口
    ├── App.jsx             # 根组件：路由 + 页眉 + 页脚
    ├── index.css           # 全局样式 + Tailwind/DaisyUI 引入
    ├── assets/             # 静态资源（社交图标 SVG 等）
    └── pages/
        ├── Home.jsx        # 首页：个人介绍 / 经历 / 项目
        ├── HeaderPage.jsx  # 顶部导航栏
        ├── Routes.jsx      # 「路线」占位页（导航暂未细分）
        ├── Pomodoro.jsx    # 番茄钟
        └── Calendar.jsx    # 日程日历
```

## 路由一览

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | `Home` | 个人主页，含 About、Experience、Projects、Contact 等区块 |
| `/routes` | `Routes` | 占位页，导航中 Project / About Me / Contact 目前都指向此处 |
| `/pomodoro` | `Pomodoro` | 25 分钟专注 + 5 分钟休息的番茄钟 |
| `/calendar` | `Calendar` | 月历视图 + 事件增删（数据仅存于内存，刷新会丢失） |

路由在 `src/App.jsx` 中通过 `<Routes>` 注册；顶部链接在 `src/pages/HeaderPage.jsx`。

## 核心文件说明

### `src/App.jsx`

- 使用 `BrowserRouter` 包裹整站
- 布局：居中容器（`w-3/4`）+ `HeaderPage` + `<main>` 路由出口 + 固定 Footer（Gitee / GitHub / 微信图标）
- 所有页面共享同一页眉和页脚

### `src/pages/HeaderPage.jsx`

- 左侧：Logo「J」+ 站名 Jamie（点击回首页）
- 中间：导航链接（Project、About Me、Contact → `/routes`；番茄闹钟、日程日历 → 对应路由）
- 右侧：`Hire Me`、`logo` 按钮（待完善）

### `src/pages/Home.jsx`

- 首页内容区，目前文案为模板（Ada Lee 设计师示例）
- 引用 `src/assets/WechatIMG5905.jpg` 作为头像（需确保该文件存在）
- 后续可替换为 Jamie 的真实简介与作品

### `src/pages/Pomodoro.jsx`

- 专注 25 分钟 / 休息 5 分钟，支持开始、暂停、重置
- 倒计时结束自动切换专注/休息模式
- 使用 `useRef` 保存 `setInterval` 句柄，卸载时清理定时器

### `src/pages/Calendar.jsx`

- 月历网格（6 周 × 7 天），可切换月份
- 支持添加、删除事件；事件列表按日期时间排序
- 状态用 `useState` 管理，**未做 localStorage 持久化**

### `src/index.css`

- 引入 Tailwind CSS 4：`@import "tailwindcss"`
- 启用 DaisyUI：`@plugin "daisyui"`
- 含部分全局按钮、链接样式（与 Tailwind 类混用）

## 样式与 UI

- **Tailwind**：在 JSX 中通过 `className` 使用工具类
- **DaisyUI**：已配置插件，部分类名如 `bg-base-100`、`border-base-200` 来自 DaisyUI 主题
- 番茄钟、日历页使用渐变背景（`bg-gradient-to-br`）和卡片式布局

## 开发与扩展建议

1. **首页内容**：在 `Home.jsx` 中替换模板文案与图片路径
2. **导航**：将 Project / About Me / Contact 拆成独立路由或锚点，避免都指向 `/routes`
3. **Footer 链接**：为 Gitee / GitHub / 微信图标添加 `<a href="...">` 或点击跳转
4. **日历持久化**：可将 `events` 同步到 `localStorage` 或后端 API
5. **页眉右侧**：完成 `Hire Me`、主题切换等交互
6. **资源**：`Home.jsx` 引用的 `WechatIMG5905.jpg` 若缺失会导致构建/运行报错，需放入 `src/assets/`

## 当前状态（便于上手时对照）

- ✅ 多页面路由、统一布局、番茄钟、日历基础功能
- 🚧 导航多项指向同一占位页 `/routes`
- 🚧 Footer 社交图标暂无外链
- 🚧 首页为英文模板内容，待个性化
- 🚧 `HeaderPage` 中 `Hire Me`、第二个 logo 按钮待实现

## 相关命令速查

```bash
npm run dev      # 开发
npm run build    # 构建到 dist/
npm run preview  # 本地预览 dist/
npm run lint     # ESLint
```

---

如有问题，可从 `src/App.jsx` 和 `src/pages/HeaderPage.jsx` 入手理解页面如何串联，再按需阅读各 `pages/*.jsx` 文件。
