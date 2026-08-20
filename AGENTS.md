# Codex 项目指引（NeutronStar 博客）

## 文档导航

- 改主题 / 组件 / UI：先读 [docs/前端微调指南.md](./docs/前端微调指南.md)，按“想改什么 -> 改哪文件 -> 怎么改”定位后再动手。
- 部署 / 二次修改 / 踩坑：读 [docs/部署全记录与二次修改指南.md](./docs/部署全记录与二次修改指南.md)。
- 本次交付：读 [docs/本次交付总结-T1-T6.md](./docs/本次交付总结-T1-T6.md)。

新会话接到“改 XX”任务时，先读 [docs/前端微调指南.md](./docs/前端微调指南.md) 对应章节，再动手。

## 命令速查

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm preview`
- 构建前先设：`$env:CODEBUDDY_SAFE_DELETE_ENABLED='0'`

## 技术栈

- Astro 7.1
- Svelte 5
- Tailwind v4
- Swup
- Pagefind
- Decap CMS

## 当前待办

- 内容维护：继续按后台更新文章、友链、番剧、日记、设备、项目、技能、时间线。
- 主题修改：优先走 `src/config/` 和 `src/components/`，保持结构与 Mizuki 对齐。
- 发布验证：改完先 build，再做路由和页面复核。
