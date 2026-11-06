# aicoder-docs

基于 VitePress 的 Codex 中文使用文档，适合部署到 Cloudflare Pages。

## 本地运行

```bash
npm install
npm run docs:dev
```

## Cloudflare Pages

- 构建命令：`npm run docs:build`
- 输出目录：`docs/.vitepress/dist`
- Node.js 版本：20 或更高

将 GitHub 仓库连接到 Cloudflare Pages 后，每次推送到 `main` 会自动构建。然后在 Pages 的 Custom domains 中添加你的域名。
