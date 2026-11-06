# 2. 注册 AICoder 账号和 API

## 注册账号

1. 打开 AICoder 官网：[https://aicoder.work](https://aicoder.work)。
2. 点击注册入口，按页面要求填写信息并完成验证。
3. 登录 AICoder 控制台。

注册条件、验证方式和可用套餐以站点当前页面为准。

## 创建 API Key

在控制台找到 **API Key / API 密钥** 管理入口，创建一个用于 Codex 的密钥，例如命名为 `codex`。如果需要选择分组、额度或有效期，根据账号当前可用选项设置。

复制并妥善保存生成的 API Key。它是 Codex 调用 AICoder 的凭据，不是 AICoder 的登录密码。

## 准备三项连接信息

| 信息 | 从哪里获取 | 用在哪里 |
| --- | --- | --- |
| API Base URL | AICoder 控制台的接入说明 | Codex 的 `base_url` 或 CC-Switch 的接口地址 |
| API Key | 控制台创建的 API 密钥 | API 请求认证 |
| 模型 ID | 控制台接入说明或可用模型列表 | Codex 的 `model` |

**官网地址不一定就是 API Base URL。** 请复制控制台展示的完整 API 根地址，包括它要求的路径；不要自行猜测是否需要 `/v1`，也不要把 `/responses` 完整请求地址当作根地址填写。

如果控制台要求先开通套餐、充值或选择可用分组，完成后再测试调用。可用模型和额度以你的账号为准。

::: warning 保存好 API Key
不要把密钥提交到 GitHub，也不要发到群聊或公开截图中。如果泄露，请在 AICoder 控制台撤销旧密钥并创建新密钥。
:::

## 下一步

拿到以上三项信息后，进入[将 Provider 设置为 AICoder](./provider)。
