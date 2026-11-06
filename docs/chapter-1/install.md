# 1. 下载安装 Codex CLI

## 方式一：官方安装脚本（macOS/Linux）

官方快速开始文档提供了独立安装脚本：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

安装或更新完成后，重新打开终端，确认命令已加入 `PATH`：

```bash
codex --version
```

## 方式二：npm 安装

如果你更习惯 Node.js 工具链，可以使用 npm 全局安装：

```bash
npm install -g @openai/codex
```

然后验证：

```bash
codex --version
```

## Windows

Windows 用户可以从 [Codex CLI 官方页面](https://learn.chatgpt.com/docs/codex/cli) 的 Windows 选项获取对应安装方式。也可以在 WSL 中按 Linux 步骤安装。安装后请在实际运行 Codex 的终端环境中执行 `codex --version`。

## 启动并登录

进入项目目录后运行：

```bash
cd /path/to/your-project
codex
```

首次启动时，选择 **Sign in with ChatGPT** 或页面提供的其他登录方式。完成登录后，直接描述任务即可，例如：

```text
请先阅读这个项目的结构，告诉我主要模块以及本地启动方式。
```

## 使用 ChatGPT Desktop

现在桌面端的应用名称是 **ChatGPT Desktop**，不再单独叫 Codex Desktop。安装 ChatGPT Desktop 后，打开新对话顶部的产品选择器，选择 **Codex**，然后选择要使用的本地项目或文件夹。

桌面端适合希望使用图形界面、项目文件和长任务的场景；终端用户继续使用上面的 `codex` 命令即可。两种入口使用的是同一类 Codex 能力，但登录状态和具体功能可能受账号、平台版本及工作区设置影响。

官方入口：

- [ChatGPT Desktop 快速开始](https://learn.chatgpt.com/docs/quickstart)
- [ChatGPT Desktop 应用说明](https://learn.chatgpt.com/docs/app)

::: tip 产品名称变化
你可能仍会在旧教程、安装包或截图中看到“Codex Desktop”。查找最新版下载和设置时，以 ChatGPT Desktop 官方页面为准；安装后在产品选择器中选择 Codex。
:::

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `codex` | 启动交互式终端界面 |
| `codex exec "任务描述"` | 非交互执行一次任务，适合脚本和 CI |
| `/model` | 在交互界面切换模型和推理强度 |
| `/permissions` | 查看或调整当前会话权限 |
| `/status` | 查看当前会话配置 |

## 安装后检查清单

1. `codex --version` 能打印版本号。
2. 在一个测试项目中运行 `codex`，能够完成登录。
3. 用一个只读问题验证 Codex 能读取当前目录。
4. 如果要使用自定义 Provider，继续阅读[下一节](./provider)。
