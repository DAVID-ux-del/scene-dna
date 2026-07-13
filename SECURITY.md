# Security Policy

## 报告安全问题

请不要为未修复的漏洞创建公开 Issue。使用 GitHub 仓库的 **Security → Report a vulnerability** 私下提交报告，并提供：

- 受影响的扩展版本和浏览器版本；
- 可复现步骤与预期影响；
- 已知的缓解方法（如有）。

请勿在报告中附上真实 API Key、访问令牌或含个人信息的图片。若密钥可能已经泄露，请先在对应服务商处撤销并重新生成。

## 数据边界

SceneDNA 没有开发者中转服务器。API Key 保存在 `chrome.storage.local`；待分析图片和 Key 只会发送到用户在设置页配置的 OpenAI 兼容 API 地址。安装第三方版本前，请核对扩展来源和源码。
