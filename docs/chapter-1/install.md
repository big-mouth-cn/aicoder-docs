# 1. 下载安装 Codex Desktop / CLI

桌面端和 CLI 任选一种即可。喜欢图形界面选桌面端，习惯终端选 CLI。

## Codex Desktop：现在叫 ChatGPT Desktop

1. 打开[官方桌面端下载与安装指南](https://learn.chatgpt.com/docs/quickstart)。
2. 选择你的操作系统，下载并安装 **ChatGPT Desktop**。平台和硬件支持以下载页面为准。
3. 打开应用，按界面提示完成初始设置。
4. 在新对话的产品选择器中选择 **Codex**，再打开你的项目文件夹。

旧教程中的“Codex Desktop”指的是桌面使用方式；当前请从 ChatGPT Desktop 官方入口下载，进入应用后选择 Codex。

如果准备使用 AICoder，请继续下一章获取 API Key，再配置 Provider。ChatGPT 账号登录与 AICoder API Key 是两套不同的凭据。

## Codex CLI：在终端中使用

### 使用 npm 安装

先安装 Node.js 的受支持 LTS 版本，并确认终端可以执行 `node` 和 `npm`，然后运行：

```bash
npm install -g @openai/codex
codex --version
```

能输出版本号就说明 CLI 已安装。

### macOS / Linux 的另一种方式

也可以使用官方独立安装脚本：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

安装完成后重新打开终端，执行 `codex --version` 验证。

Windows 用户可在安装 Node.js 后使用 npm 方式，也可以在 WSL 中按 Linux 方式安装。其他安装选项见 [Codex CLI 官方文档](https://learn.chatgpt.com/docs/codex/cli)。

## 下一步

先不要急着发起任务。进入[注册 AICoder 账号和 API](./account)，拿到连接 AICoder 所需的信息。
