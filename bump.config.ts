// bump.config.ts
import { defineConfig } from 'bumpp'

export default defineConfig({
  commit: true, // 是否自动提交
  tag: true, // 是否生成标签
  push: true, // 是否推送
  recursive: false, // 是否递归升级子包
  files: ['package.json'] // 指定需升级的文件
})
