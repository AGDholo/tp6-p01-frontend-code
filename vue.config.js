module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    open: true,
    // host: "0.0.0.0",
    port: 8080,
    // contentBase: path.resolve(__dirname, "public"),
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://tp6-p01.api.heroui.net:1111", // 外部引入的url,连接的后端的服务器
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
    //before: app => {}
  }
};
