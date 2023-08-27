const entryOut = require("./module/entryOut.js"); //入口与输出
const htmlPlugin = require("./module/html.js"); //html
const style = require("./module/style.js")  //样式
const babel = require("./module/babel.js")  //js
const asset = require("./module/assets.js") //静态资源
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); //热更新

const config = Object.assign(
    {
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx']
      }
    },
    entryOut,
    {
      module: {
        rules: [
          style,
          babel,
          ...asset,
        ]
      }
    },
    {
      plugins: [
        htmlPlugin,
        new ReactRefreshPlugin()
      ]
    }
  )
// console.log(config.module)
module.exports = config