# SceneDNA

[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](LICENSE)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-6d5dfc.svg)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-0f766e.svg?logo=googlechrome&logoColor=white)

**SceneDNA** 是一个本地优先的浏览器图片解析工具。在网页图片上点击右键，它会提取场景、主体、构图、文字、色彩和约束，生成可用于 AI 图像创作的结构化提示词。

![SceneDNA 界面预览](docs/preview.svg)

## 工作方式

```text
右键网页图片
  → SceneDNA 读取图片
  → 调用你配置的 OpenAI 兼容视觉模型
  → 生成高信息密度的复现提示词
  → 在当前页面展示并一键复制
```

SceneDNA 不使用开发者中转服务器。API Key 仅保存在 `chrome.storage.local`，图片与 Key 只会发送到你在设置中指定的 API 服务。

## 安装

1. 下载或克隆本仓库。
2. 打开 Chrome 的 `chrome://extensions`。
3. 开启「开发者模式」，点击「加载已解压的扩展程序」。
4. 选择本仓库的 `extension/` 目录。
5. 打开 SceneDNA 设置，填写 API Key、视觉模型和 API 地址。
6. 在任意网页图片上右键，选择「用 SceneDNA 解析图片」。

## 项目结构

```text
extension/                  Chrome Manifest V3 扩展源码
  manifest.json             扩展清单
  background.js             右键菜单、抓图和模型调用
  content/overlay.{js,css}   结果浮层
  popup.html / popup.js      快速设置
  options.html / options.js  完整设置
store/                       应用商店文案与隐私政策
docs/preview.svg             界面预览
```

## 说明

图片转提示词是有损过程，无法保证完全还原原图。人脸、复杂排版、小字和隐藏细节仍可能出现偏差。

## License

[MIT](LICENSE)
