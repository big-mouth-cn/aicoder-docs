# 3. 将 Provider 设置为 AICoder

准备好 AICoder 的 **API Base URL、API Key、模型 ID** 后，选择下面一种配置方式即可。官网是 [https://aicoder.work](https://aicoder.work)，接口参数请使用控制台提供的值。

## 方式一：通过 CC-Switch 配置

[CC-Switch](https://github.com/farion1231/cc-switch) 是开源的 Provider 配置管理工具，支持 Windows、macOS 和 Linux。它可以帮你管理 Codex 的连接配置，免去手动编辑 TOML 的步骤。

1. 从 [CC-Switch Releases](https://github.com/farion1231/cc-switch/releases) 下载适合操作系统的安装包并安装。
2. 打开 CC-Switch，选择 **Codex**。即使桌面应用现在叫 ChatGPT，管理编程工具配置时仍选择 Codex。
3. 点击添加供应商，选择自定义配置，将名称填写为 **AICoder**。
4. 填写 AICoder 控制台提供的 API Base URL、API Key 和模型 ID。若有协议选项，按 AICoder 的 Codex 接入说明选择 Responses API。
5. 保存并点击“启用”，然后退出并重新打开 Codex CLI；使用桌面端时，完全退出并重开 ChatGPT Desktop，再进入 Codex 新对话验证。

CC-Switch 不同版本的按钮名称可能略有差异。它负责管理连接配置，实际请求使用的是你的 AICoder 账号及额度。

建议先使用基础的直连配置完成接入；不要同时用 CC-Switch 和手动编辑来反复覆盖同一份配置。排查问题前先备份现有配置。

## 方式二：手动修改配置

### 打开用户配置文件

默认路径：

- macOS / Linux：`~/.codex/config.toml`
- Windows：`%USERPROFILE%\.codex\config.toml`

如果设置过 `CODEX_HOME`，请使用该目录内的 `config.toml`。已有配置先备份，再合并下方字段；不要直接清空原文件。Provider 放在用户配置中，不要放到项目的 `.codex/config.toml`。

### 添加 AICoder Provider

将下面两个占位值替换为控制台提供的信息：

```toml
model = "替换为AICoder提供的模型ID"
model_provider = "aicoder"

[model_providers.aicoder]
name = "AICoder"
base_url = "替换为AICoder提供的API根地址"
wire_api = "responses"
env_key = "AICODER_API_KEY"
```

`model` 和 `model_provider` 是顶层字段，要放在 TOML 表头之前；已有同名字段时修改原值，不要重复添加。`wire_api = "responses"` 要求服务端支持 Responses API，具体以 AICoder 的 Codex 接入说明为准。

### 设置 API Key

macOS / Linux，在准备启动 Codex 的终端中执行：

```bash
export AICODER_API_KEY="替换为你的AICoder密钥"
codex
```

Windows PowerShell：

```powershell
$env:AICODER_API_KEY = "替换为你的AICoder密钥"
codex
```

上面的环境变量只对当前终端及其启动的进程生效。**从桌面图标启动的 ChatGPT Desktop 不一定能读取终端中设置的变量。** 桌面端建议优先使用 CC-Switch；手动配置时，需要确保应用进程也能读取 `AICODER_API_KEY`，配置后完全退出并重启应用。

## 验证接入

CLI 用户进入一个项目目录后运行 `codex`；桌面用户打开 ChatGPT Desktop，选择 Codex 并打开项目，然后新建对话，发送：

```text
请阅读当前项目，简要介绍目录结构，先不要修改文件。
```

确认能收到回复，并到 AICoder 控制台检查是否出现对应的调用或用量记录。这样可以验证请求确实通过 AICoder 发出。

## 无法使用时检查什么

| 现象 | 优先检查 |
| --- | --- |
| 401 / 403 | API Key 是否正确、是否启用，分组和模型权限是否可用 |
| 404 | Base URL 路径是否正确，有没有重复添加 `/v1` 或 `/responses` |
| 模型不存在 | `model` 是否与 AICoder 提供的模型 ID 完全一致 |
| 提示缺少环境变量 | 启动 Codex 的进程是否能读取 `AICODER_API_KEY` |
| 配置后仍走原服务 | 是否启用了 AICoder、是否重启客户端并新建对话，有没有其他配置覆盖 |
| 额度不足或请求受限 | AICoder 账号余额、套餐、分组额度及限流设置 |

参考资料：[Codex 官方高级配置](https://learn.chatgpt.com/docs/config-file/config-advanced)、[CC-Switch 中文说明](https://github.com/farion1231/cc-switch/blob/main/README_ZH.md)。
