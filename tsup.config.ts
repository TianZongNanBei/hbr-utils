export default {
  entry: ['./src/index.ts'], // 入口文件
  format: ['cjs', 'esm'], // 输出格式
  outDir: 'dist', // 输出目录
  minify: true, // 压缩代码（生产环境推荐）
  sourcemap: true // 生成 sourcemap
}
