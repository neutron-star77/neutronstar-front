# Codex 项目指引（NeutronStar 博客）

## 文档导航

- 改主题 / 组件 / UI：先读 [docs/前端微调指南.md](./docs/前端微调指南.md)，按“想改什么 -> 改哪文件 -> 怎么改”定位后再动手。
- 部署 / 二次修改 / 踩坑：读 [docs/部署全记录与二次修改指南.md](./docs/部署全记录与二次修改指南.md)。
- 本次交付：读 [docs/本次交付总结-T1-T6.md](./docs/本次交付总结-T1-T6.md)。
- 文档总索引：读 [docs/README.md](./docs/README.md)。

新会话接到“改 XX”任务时，先读 [docs/前端微调指南.md](./docs/前端微调指南.md) 对应章节，再动手。

## 主题修改模板

当用户说“修改主题”时，先弹出并沿用下面这段模板，让用户只替换【本次要改的内容】即可。

```text
开始 NeutronStar 博客的主题修改任务。

【项目锚点】
- 项目根目录：F:\AI\projects\blog\neutronstar-front
- 线上站：https://blog.neutronstar.fun（CF Pages + Git 集成自动构建）
- 参考仓库（Mizuki 原版）：F:\AI\projects\blog\mizuki-ref\
- 部署链：改代码 → pnpm build → commit+push → CF 自动构建上线（不要再手动 wrangler deploy）

【动手前必读】
- 先读根目录 AGENTS.md 的文档导航
- 再读 docs/前端微调指南.md，按“想改什么 → 改哪文件 → 怎么改”定位
- 读 docs/本次交付总结-T1-T6.md 了解当前配置状态（Giscus/Decap/Pagefind 已配好）

【执行约定（ABC）】
- C 修复：只改必要文件，不动布局骨架，改完立刻 pnpm build 验证
- 构建前设 CODEBUDDY_SAFE_DELETE_ENABLED=0；本地预览端口优先 3001
- 清理临时文件移到项目内 1 文件夹，不卡删除
- 命令自动跑，每步汇报结果

【本次要改的内容】
（在这里写：一句话描述，如“把文章卡片悬停改成边框发光+轻微抬升，参考前端微调指南”）

【环境注意（你跑命令时必守）】
- 命令通道是 git bash：PowerShell cmdlet 要加 powershell.exe -NoProfile -Command "..." 前缀；打开 md 用 Start-Process 那条命令
- 找文件用 Everything es.exe：& "E:\Program Files (x86)\图拉丁工具箱\图吧工具箱202507\tools\其他工具\Everything\es.exe" "关键词"
- NAS 读文件优先 SMB（/z/ 等），SSH 用 C:/Program Files/Git/usr/bin/ssh.exe hewll
- .codebuddy/ 严禁提交到 git

【完成后】
- pnpm build 通过 → commit + push origin main → 等 CF 自动构建（约1-2分钟）→ curl https://blog.neutronstar.fun/ 验证
- 汇报改动文件清单 + 验证结果
```

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
