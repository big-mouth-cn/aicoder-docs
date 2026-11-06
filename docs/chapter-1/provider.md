# 2. 配置自定义 Provider

自定义 Provider 适合以下场景：公司内部模型网关、LLM Router、兼容 OpenAI API 的第三方服务，或本地 Ollama/LM Studio。Codex 的 Provider 配置主要包括：唯一 ID、请求地址、使用的协议、认证方式和可选请求头。

## 配置文件位置

默认用户配置文件是：

```text
~/.codex/config.toml
```

如果设置了 `CODEX_HOME`，配置目录会改为 `$CODEX_HOME`。Provider 建议配置在用户级文件中；项目级 `.codex/config.toml` 对 Provider、认证和请求地址等敏感配置有限制，不适合用来保存个人密钥。

## 使用 CC-Switch 图形化配置

如果不想手动编辑 TOML，可以使用 [CC-Switch](https://github.com/farion1231/cc-switch)。它是一个开源桌面管理工具，支持 Windows、macOS 和 Linux，并可以集中管理 Claude Code、Codex、Gemini CLI 等工具的 Provider。

基本流程：

1. 从 [CC-Switch Releases](https://github.com/farion1231/cc-switch/releases) 下载对应系统版本并安装。
2. 打开 CC-Switch，在侧栏选择 **Codex**，点击右上角的“+”添加供应商。
3. 选择已有预设，或创建自定义配置，填写 Provider 名称、Base URL、API Key 和模型等信息。
4. 点击“启用”切换供应商，然后重启 Codex CLI 或 ChatGPT Desktop 中的 Codex，让配置生效。

CC-Switch 会替你写入 Codex 的配置文件，适合需要在多个网关之间频繁切换的场景。API Key 仍然属于敏感信息：只从可信来源安装 CC-Switch，不要把包含密钥的配置文件提交到 GitHub，也不要在截图或日志中公开密钥。

如果需要精确控制 `wire_api`、自定义请求头或认证命令，仍建议直接编辑 `~/.codex/config.toml`，因为图形化工具的字段和行为可能随版本变化。

## 最小配置

下面的例子把 Provider 命名为 `proxy`，通过环境变量 `OPENAI_API_KEY` 读取密钥：

```toml
model = "gpt-6.1-sol"
model_provider = "proxy"

[model_providers.proxy]
name = "我的模型网关"
base_url = "https://proxy.example.com/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"
```

设置环境变量后启动：

```bash
export OPENAI_API_KEY="替换为你的密钥"
codex
```

Windows PowerShell：

```powershell
$env:OPENAI_API_KEY = "替换为你的密钥"
codex
```

`base_url` 应填写 Provider 的 API 根地址。`wire_api = "responses"` 表示使用 Responses API 协议；你的网关必须真正支持该协议，而不只是提供一个看起来相似的 URL。

## 配置多个 Provider

可以在同一个文件中定义多个 Provider，并通过 `model_provider` 选择默认 Provider：

```toml
model = "my-model"
model_provider = "mistral"

[model_providers.proxy]
name = "公司网关"
base_url = "https://proxy.example.com/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"

[model_providers.mistral]
name = "Mistral"
base_url = "https://api.mistral.ai/v1"
env_key = "MISTRAL_API_KEY"
```

Provider ID 需要唯一。官方保留了 `openai`、`ollama`、`lmstudio`、`amazon-bedrock`、`amazon-bedrock-runtime` 和 `gcp` 等内置 Provider 名称，不要拿这些 ID 创建自定义 Provider。

## 自定义请求头

固定值请求头可以直接写入 `http_headers`；需要从环境变量读取的请求头使用 `env_http_headers`：

```toml
[model_providers.proxy]
name = "带租户标识的网关"
base_url = "https://proxy.example.com/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"
http_headers = { "X-Tenant" = "my-team" }
env_http_headers = { "X-Features" = "PROXY_FEATURES" }
```

```bash
export PROXY_FEATURES="coding"
```

不要把 Authorization、API Key 或 Cookie 直接写进 `http_headers` 并提交到仓库。

## 只修改 OpenAI Provider 的地址

如果只是想让内置 OpenAI Provider 经过代理或路由，不需要创建新的 Provider，可以使用：

```toml
openai_base_url = "https://proxy.example.com/v1"
```

这个方式会保留内置 `openai` Provider 的其他行为。

## 验证配置

先在终端确认环境变量存在（只检查是否存在，不要打印密钥）：

```bash
test -n "$OPENAI_API_KEY" && echo "API Key 已设置"
```

然后运行：

```bash
codex --model my-model
```

输入一个低风险的只读任务，例如“列出当前目录的文件并解释项目入口”。如果出现认证错误，按顺序检查：

1. `model_provider` 是否与 `[model_providers.<id>]` 的 `<id>` 完全一致。
2. `base_url` 是否是网关要求的 API 根路径，是否重复或缺少 `/v1`。
3. `wire_api` 是否与网关实际支持的协议一致。
4. 环境变量名是否与 `env_key` 一致。
5. 网关是否允许当前模型，以及是否要求额外请求头。

## 常见配置误区

- 把 `config.toml` 当成 JSON 编写；它是 TOML 格式。
- 把 API Key 写进 Git 仓库。
- 只配置了 `base_url`，但没有设置 `model_provider`。
- 把聊天补全协议的地址直接当作 Responses API 使用。
- 在项目级 `.codex/config.toml` 中配置个人凭据，导致配置被忽略或误提交。

更多字段和限制请参考[官方高级配置文档](https://learn.chatgpt.com/docs/config-file/config-advanced)。
