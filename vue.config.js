const {
  defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: process.env.NODE_ENV !== 'production'
  lintOnSave: false,

  //方式一：配置代理服务器
  devServer: {
    proxy: {
      "^/Books": {
        target: 'http://localhost:8081'
      }
    }
  }
  /*devServer: {

    proxy: {
      '^/Books': {
        ws: false, //是否启用websockets
        changeOrigin: true, //开启代理： 在本地会创建一个虚拟服务端，然后发送请求数据，并且同时接收请求数据，这样客户端和服务端进行数据的交互就不会有跨域问题
        target: 'http://localhost:8081' // 要访问的跨域的域名
      }
    }
  }*/

})