# Codex 项目指引（NeutronStar 博客）

## 文档导航

- 改主题 / 组件 / UI：先读 [docs/前端微调指南.md](./docs/前端微调指南.md)，按“想改什么 -> 改哪文件 -> 怎么改”定位后再动手。
- 部署 / 二次修改 / 踩坑：读 [docs/部署全记录与二次修改指南.md](./docs/部署全记录与二次修改指南.md)。
- 本次交付：读 [docs/本次交付总结-T1-T6.md](./docs/本次交付总结-T1-T6.md)。
- 文档总索引：读 [docs/README.md](./docs/README.md)。

新会话接到“改 XX”任务时，先读 [docs/前端微调指南.md](./docs/前端微调指南.md) 对应章节，再动手。

## 长期规则

- 命令自动运行，不要每次问用户。
- 清理临时文件不阻塞；删不掉就先移到项目内 `1/` 暂存。
- `.codebuddy/` 禁止提交。
- 敏感信息不落盘、不写进仓库。
- `pnpm build` 前先设 `CODEBUDDY_SAFE_DELETE_ENABLED='0'`。
- 本地预览优先用 `3001` 或 `8080`，避开 `4321`。
- 不要改 `astro.config.mjs` 的 `site/base`。
- 不要引入新依赖。
- 不要用破坏性删除命令。
- 需要打开 `.md` 文件时，用：
  - `powershell.exe -NoProfile -Command "Start-Process 'E:\Program Files (x86)\typora\Typora\Typora.exe' -ArgumentList '<md绝对路径>'"`

## 项目常识

- Astro 7.1 + Svelte 5 + Tailwind v4 + Swup + Pagefind + Decap CMS
- 部署目标是 Cloudflare Pages
- 线上主站是 `https://blog.neutronstar.fun`

## 当前工作方式

- 先看 `src/config/` 和对应文档，再动组件或页面。
- 改数据优先改 `src/data/*.json`，保留 `{ items: [...] }` 结构。
- 改完先 `pnpm build`，再做路由/页面复核，最后提交推送。
