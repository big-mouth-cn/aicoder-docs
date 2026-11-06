# 1. 下载安装 Codex Desktop / CLI

桌面端和 CLI 任选一种即可。喜欢图形界面选桌面端，习惯终端选 CLI。

## Codex Desktop：现在叫 ChatGPT Desktop

1. 根据下表选择操作系统和处理器架构，直接下载安装包。也可以查看[官方桌面端下载与安装指南](https://learn.chatgpt.com/docs/quickstart)。
2. 安装 **ChatGPT Desktop**。
3. 打开应用，按界面提示完成初始设置。
4. 在新对话的产品选择器中选择 **Codex**，再打开你的项目文件夹。

### 桌面端直接下载

如果无法打开官方下载页面，可以直接使用以下下载链接：

| 操作系统 | 处理器架构 | 下载链接 |
| --- | --- | --- |
| macOS | Apple Silicon（M 系列芯片） | [下载 Codex.dmg](https://persistent.oaistatic.com/codex-app-prod/Codex.dmg) |
| macOS | Intel | [下载 Codex-latest-x64.dmg](https://persistent.oaistatic.com/codex-app-prod/Codex-latest-x64.dmg) |
| Windows | 由 Microsoft 安装器处理 | [下载 Windows 安装器](https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi) |
| Linux（DEB 包） | x86_64 / AMD64 | [下载 chatgpt_amd64.deb](https://persistent.oaistatic.com/codex-app-prod/linux/deb/latest/chatgpt_amd64.deb) |
| Linux（DEB 包） | ARM64 | [下载 chatgpt_arm64.deb](https://persistent.oaistatic.com/codex-app-prod/linux/deb/latest/chatgpt_arm64.deb) |
| Linux（RPM 包） | x86_64 / AMD64 | [下载 chatgpt.x86_64.rpm](https://persistent.oaistatic.com/codex-app-prod/linux/rpm/latest/chatgpt.x86_64.rpm) |
| Linux（RPM 包） | ARM64 / aarch64 | [下载 chatgpt.aarch64.rpm](https://persistent.oaistatic.com/codex-app-prod/linux/rpm/latest/chatgpt.aarch64.rpm) |

Mac 用户可在苹果菜单的“关于本机”中确认芯片类型。Linux 用户可运行 `uname -m` 查看架构；Debian / Ubuntu 系列通常选择 DEB 包，Fedora / RHEL 系列通常选择 RPM 包。

旧教程或安装包文件名中可能仍会出现“Codex”。安装后打开 ChatGPT Desktop，在产品选择器中选择 Codex 即可。

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
