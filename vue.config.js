/*=========================================================================================
  Author: Hazem Ashraf
  Author URL: https://www.linkedin.com/in/hazem-ashraf-1242169b/
==========================================================================================*/


module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  devServer: {
    proxy: 'http://localhost:8080/',
  },

}

