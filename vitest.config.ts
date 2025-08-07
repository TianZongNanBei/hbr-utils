// vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // 测试文件匹配模式
    include: ['**/*.{test,spec}.{js,ts}'],
    // 是否开启浏览器环境模拟（默认是 Node 环境）
    environment: 'node' // 可选 'jsdom'（浏览器模拟）
  }
})
