### 一个工具函数 npm 包

## 简介

hbr-utils 是一个轻量级的 JavaScript/TypeScript 工具函数库，提供常用的工具函数，帮助开发者更高效地编写代码。该库使用 TypeScript 编写，具有完整的类型定义支持。

[掘金链接:编写-测试-发布-更新 npm 包详细教程](https://juejin.cn/spost/7535423307547967498)

[github 仓库地址](https://github.com/TianZongNanBei/hbr-utils)

## 安装

```bash
# 使用 npm
npm install hbr-utils

# 使用 yarn
yarn add hbr-utils

# 使用 pnpm
pnpm add hbr-utils
```

## 使用

```javascript
// ES6 模块导入
import { add, toCamelCase } from 'hbr-utils'

// CommonJS 导入
const { add, toCamelCase } = require('hbr-utils') // 数学计算
import { add } from 'hbr-utils'
const result = add(1, 2) // 3
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

**贡献步骤:**

1. Fork 本项目
2. 创建功能分支 (git checkout -b feature/AmazingFeature)
3. 提交更改 (git commit -m 'Add some amazing feature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启 Pull Request
