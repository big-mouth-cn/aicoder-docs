# AICoder · 让 AI 编程更轻松

## 限时活动：免费体验一周

添加微信 **snaking23**，免费获得 **7 日订阅分组**，体验 AICoder 的 AI 编程服务。活动规则、领取条件及有效期以官网说明为准。

[现在开始使用 AICoder →](https://aicoder.work)

**使用 OpenAI 官方模型，3 分钟接入 Codex Desktop / CLI。**

AICoder 是面向开发者的 AI 编程订阅服务，提供 **ChatGPT 官方模型**的 API 接入，并持续跟进最新模型。注册账号、选择订阅分组后，将 Codex 的 Provider 设置为 AICoder，即可在熟悉的桌面端或终端中阅读代码、实现功能、排查问题和审查修改。当前可用模型以控制台列表为准。

**OpenAI 官方模型 · 持续跟进最新模型 · 全球可访问 · 高性价比订阅**

[访问 AICoder 官网](https://aicoder.work) · [查看完整接入教程](https://docs.aicoder.work)

## 适合哪些开发者？

- 想快速开始使用 Codex，不想反复研究接入配置。
- 习惯在桌面应用或 CLI 中完成日常开发任务。
- 希望通过订阅方式使用 AI 编程服务，兼顾使用体验和成本。
- 已经使用 CC-Switch，希望方便地管理和切换 Provider。

## 三步开始使用

### 1. 安装 Codex Desktop / CLI

喜欢图形界面，可以安装 ChatGPT Desktop 并选择 Codex；习惯终端，可以通过 npm 安装 CLI：

```bash
npm install -g @openai/codex
```

[查看各系统桌面端下载链接与安装步骤](https://docs.aicoder.work/chapter-1/install)

### 2. 注册 AICoder，创建 API Key

前往 [aicoder.work](https://aicoder.work) 注册账号，按需求选择订阅分组，然后在控制台创建 API Key，并确认可用模型 ID。

**如果没有可选分组，请先订阅，再创建 API Key。**

[查看账号注册与 API Key 创建步骤](https://docs.aicoder.work/chapter-1/account)

### 3. 将 Provider 设置为 AICoder

推荐使用 **CC-Switch**：选择 Codex，添加供应商 AICoder，填写 API Key、模型 ID 和以下 API 请求地址，保存并启用：

```text
https://api.aicoder.work/v1
```

也可以编辑用户配置文件 `~/.codex/config.toml`：

```toml
model = "替换为账号可用的模型ID"
model_provider = "aicoder"

[model_providers.aicoder]
name = "AICoder"
base_url = "https://api.aicoder.work/v1"
wire_api = "responses"
experimental_bearer_token = "替换为你的AICoder密钥"
```

已有配置请先备份并合并字段。不要将包含真实 API Key 的配置提交到 GitHub。

重新打开 Codex 并新建对话，就可以开始第一个任务：

```text
请阅读当前项目，介绍目录结构和本地启动方式，先不要修改文件。
```

[查看 CC-Switch 配置截图、手动配置与常见问题](https://docs.aicoder.work/chapter-1/provider)
