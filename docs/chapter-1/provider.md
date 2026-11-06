# 3. 将 Provider 设置为 AICoder

准备好 AICoder 的 **API Base URL、API Key、模型 ID** 后，选择下面一种配置方式即可。官网是 [https://aicoder.work](https://aicoder.work)，API Base URL 为 `https://api.aicoder.work/v1`；API Key 和模型 ID 请从控制台获取。

## 方式一：通过 CC-Switch 配置

[CC-Switch](https://github.com/farion1231/cc-switch) 是开源的 Provider 配置管理工具，支持 Windows、macOS 和 Linux。它可以帮你管理 Codex 的连接配置，免去手动编辑 TOML 的步骤。

1. 从 [CC-Switch Releases](https://github.com/farion1231/cc-switch/releases) 下载适合操作系统的安装包并安装。
2. 打开 CC-Switch，选择 **Codex**。即使桌面应用现在叫 ChatGPT，管理编程工具配置时仍选择 Codex。
3. 点击添加供应商，选择自定义配置，将名称填写为 **AICoder**。
4. 将 API Base URL 填为 `https://api.aicoder.work/v1`，再填写控制台提供的 API Key 和模型 ID。若有协议选项，按 AICoder 的 Codex 接入说明选择 Responses API。
5. 保存并点击“启用”，然后退出并重新打开 Codex CLI；使用桌面端时，完全退出并重开 ChatGPT Desktop，再进入 Codex 新对话验证。

### 配置截图

![CC-Switch 中配置 AICoder：选择 Codex，填写 API Key 和 API 请求地址](/images/cc-switch-aicoder.png)

如图，在 Codex 的供应商配置中，将名称设置为 `AICoder`，API 请求地址填写 `https://api.aicoder.work/v1`，API Key 填写你在 AICoder 控制台创建的密钥。截图中的密钥已隐藏；默认模型仅为示例，请选择账号实际可用的模型。

CC-Switch 不同版本的按钮名称可能略有差异。它负责管理连接配置，实际请求使用的是你的 AICoder 账号及额度。

建议先使用基础的直连配置完成接入；不要同时用 CC-Switch 和手动编辑来反复覆盖同一份配置。排查问题前先备份现有配置。

## 方式二：手动修改配置

### 打开用户配置文件

默认路径：

- macOS / Linux：`~/.codex/config.toml`
- Windows：`%USERPROFILE%\.codex\config.toml`

如果设置过 `CODEX_HOME`，请使用该目录内的 `config.toml`。已有配置先备份，再合并下方字段；不要直接清空原文件。Provider 放在用户配置中，不要放到项目的 `.codex/config.toml`。

### 添加 AICoder Provider

将下面的模型 ID 和 API Key 占位值替换为控制台提供的信息：

```toml
model = "gpt-6.1-sol"
model_provider = "aicoder"

[model_providers.aicoder]
name = "AICoder"
base_url = "https://api.aicoder.work/v1"
wire_api = "responses"
experimental_bearer_token = "替换为你的AICoder密钥"
```

`model` 和 `model_provider` 是顶层字段，要放在 TOML 表头之前；已有同名字段时修改原值，不要重复添加。`wire_api = "responses"` 要求服务端支持 Responses API，AICoder 当前完全支持。

### 保存并重新打开 Codex

`experimental_bearer_token` 填写的是 API Key 本身，不是环境变量名，也不需要添加 `Bearer ` 前缀。此配置方式不需要设置 `AICODER_API_KEY` 环境变量。

保存配置后，CLI 用户重新运行 `codex`；桌面用户完全退出并重开 ChatGPT Desktop，再进入 Codex 新建对话。

::: warning 配置文件包含密钥
该方式会将 API Key 保存在本机的 `config.toml` 中。不要把此文件提交到 GitHub、公开分享或放入截图；备份时也应妥善保管。
:::

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
| 认证配置未生效 | `experimental_bearer_token` 是否填写了实际 API Key，是否仍残留旧的认证配置 |
| 配置后仍走原服务 | 是否启用了 AICoder、是否重启客户端并新建对话，有没有其他配置覆盖 |
| 额度不足或请求受限 | AICoder 账号余额、套餐、分组额度及限流设置 |

参考资料：[Codex 官方高级配置](https://learn.chatgpt.com/docs/config-file/config-advanced)、[CC-Switch 中文说明](https://github.com/farion1231/cc-switch/blob/main/README_ZH.md)。
