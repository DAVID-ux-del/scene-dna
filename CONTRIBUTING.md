# Contributing to SceneDNA

感谢你愿意改进 SceneDNA。提交改动前，请先确认它保持扩展的本地优先原则：API Key 只存储在 `chrome.storage.local`，图片与密钥只发送到用户配置的 API 服务。

## 本地验证

1. 在 Chrome 的 `chrome://extensions` 中开启开发者模式。
2. 选择“加载已解压的扩展程序”，加载 `extension/`。
3. 修改代码后，在扩展卡片上点击“重新加载”。
4. 至少验证设置保存、连接测试、右键解析图片和复制提示词四条路径。

JavaScript 文件也可以先做快速语法检查：

```bash
node --check extension/background.js
node --check extension/options.js
node --check extension/popup.js
node --check extension/content/overlay.js
```

## 提交 Pull Request

- 一个 PR 只处理一个问题，说明改动动机和验证方式。
- 不要提交真实 API Key、请求响应、个人图片或其他敏感数据。
- UI 改动请附截图；行为改动请写出可复现步骤。
- 保持 Manifest V3 兼容，不引入远程脚本。
