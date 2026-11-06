# 第一章：如何使用 Codex？

Codex 是一个可以在终端中检查代码、修改文件、运行命令和自动化重复任务的 AI 编程助手。本章以 **Codex CLI** 为主线，介绍安装、登录、启动，以及连接自定义 Provider 的完整流程。

## 本章你会学到什么

- 在 macOS、Linux 或 Windows 上安装 Codex CLI
- 在项目目录中启动 Codex 并完成登录
- 使用 `~/.codex/config.toml` 配置自定义 Provider
- 用环境变量管理 API Key，避免把密钥提交到 Git
- 验证 Provider 是否能正常工作

## 开始之前

建议准备：

- 一个 Git 仓库或本地项目目录
- Node.js/npm（如果使用 npm 安装方式）
- ChatGPT 登录方式或兼容的 API Key
- 一个兼容 OpenAI Responses API 的模型网关或 Provider（如果不使用内置 OpenAI Provider）

::: warning 密钥安全
不要把 API Key 写进项目文件、`config.toml` 或提交到 GitHub。优先使用环境变量；如果密钥已经泄露，请立即在 Provider 控制台撤销并重新生成。
:::

## 章节导航

1. [下载安装 Codex CLI](./install)
2. [配置自定义 Provider](./provider)

## 官方资料

- [Codex CLI 官方文档](https://learn.chatgpt.com/docs/codex/cli)
- [Codex 高级配置](https://learn.chatgpt.com/docs/config-file/config-advanced)
- [Codex 配置参考](https://learn.chatgpt.com/docs/config-file/config-reference)
