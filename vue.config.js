const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://fanyi-api.baidu.com',  // 目标 API 地址
        changeOrigin: true,  // 修改源
        pathRewrite: { '^/api': '' },  // 重写路径
        secure: false,
      },
    },
  },

})
