# SceneDNA

Chrome Manifest V3 扩展：右键网页图片，调用用户配置的 OpenAI 兼容视觉模型，生成可复制的 AI 绘图提示词。

## 架构

- `extension/manifest.json`：扩展清单。
- `extension/background.js`：右键菜单、图片获取和视觉模型调用。
- `extension/content/`：注入当前页面的结果浮层。
- `extension/popup.*`：API Key 快速设置。
- `extension/options.*`：API Key、模型和 API 地址完整设置。
- `store/`：Chrome Web Store 文案和隐私政策。

## 开发

Chrome → `chrome://extensions` → 开启开发者模式 → 加载已解压的扩展程序 → 选择 `extension/` 目录。

API Key 必须保存在 `chrome.storage.local`，不得写入仓库、日志或同步存储。
