const path = require('path') // 处理绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/index.ts'), // 入口文件
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'main.js', //打包后输出文件的文件名
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false
    },
  },
  resolve: {
    extensions: ['.ts','.js', '.jsx', '.json'],
  },
  //配置loader
  module: {
    rules:[{test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/}]
  },
  //配置插件
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    // template: path.join(__dirname, '/index.html'),
  })
],
  devServer: {
    static: "./dist",// 本地服务器所加载的页面所在的目录
    historyApiFallback: true,// 不跳转
    hot: true,// 热加载
    port: 8080,// 端口号
    open:false,// 是否自动打开浏览器
  }
}
