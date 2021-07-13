module.exports = {
  devServer:{
    proxy: {
      '/api': {
        target: 'http://192.168.240.252:9997',
        // target:'http://eaphase2.project.shayulei.com:15003/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      }
    }
  }
}