# 星翊科技有限公司官网静态项目（优化版）

本项目为星翊科技有限公司官网静态展示站，基于原有深蓝金科技风基础进一步优化，重点强化了以下内容：

- 页面结构更完整，增加“真实产品与场景展示”模块。
- 支持中文 / English 一键切换，并自动记住语言选择。
- 产品图片优先使用用户提供海报中的真实场景截取，以及资料中的设备实物图。
- 组件模块化，便于继续调整文案、图片和结构。
- 所有图片统一放在 `figs/` 目录中。

## 目录结构

```text
starwing-tech-site/
├── index.html
├── serve.py
├── figs/
│   ├── hero-bg.jpg
│   ├── business-ai-card.jpg
│   ├── business-5g-card.jpg
│   ├── business-optical-card.jpg
│   ├── business-energy-card.jpg
│   ├── business-ai-real.jpg
│   ├── business-5g-real.jpg
│   ├── business-optical-real.jpg
│   ├── business-energy-real.jpg
│   ├── product-energy-system.png
│   ├── product-compute-module.png
│   ├── qr-code.png
│   └── logo-starwing.svg
├── src/
│   ├── components/
│   ├── data/siteData.js
│   ├── main.js
│   └── styles.css
└── README.md
```

## 运行方式

本项目不依赖 Node.js 或第三方包，只需要 Python 3。

进入项目目录后运行：

```bash
python serve.py --open
```

也可以继续使用 Python 自带的静态服务器：

```bash
python -m http.server 8000
```

然后浏览器打开 `http://localhost:8000`。

也可以直接双击 `index.html` 打开页面。

## 中英文切换

- 页面默认跟随浏览器语言，并会记住用户上次选择。
- 点击页面右上角的 `EN` / `中文` 按钮即可切换语言。
- 可通过 `?lang=en` 或 `?lang=zh` 直接指定链接语言。

## 后续如需继续优化

你后续可以继续让我做这些事：

1. 替换成更多正式官网/产品手册中的实拍图。
2. 加入多页面结构（首页 / 解决方案 / 关于我们 / 联系我们）。
3. 接入留言表单后端接口。
4. 输出 Vue / React 版本。
