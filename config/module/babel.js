const path = require('path')

const presets = [
  [
      "@babel/preset-env",  //js代码兼容性转译
      { //预设配置
          targets: {
              "browsers": ["last 2 versions", "> 0.2%", "maintained node versions", "not dead"],
          },
          useBuiltIns: "usage", //usage表示使用自己指定的corejs，entry表示使用官方推荐的corejs
          corejs: 3 //corejs的作用类似于polyfill
      },
  ],
  ["@babel/preset-react"], // //转译jsx
  [
    "@babel/preset-typescript",
    { //因为jsx和ts一起使用jsx中的<>会和ts中的<>冲突。造成歧义，所以需要配置
      isTSX: true,   
      allExtensions: true
    }
  ] //转译tsx中的typescript
];

module.exports = {
  test: /.(js|jsx|tsx|ts)$/,
  exclude: /node_modules/, //排除内容不解析
  // include: path.resolve(__dirname + '../../../src'),
  use: {
    loader:'babel-loader',
    options: {
      plugins: [require.resolve('react-refresh/babel')],
      presets: presets
    }
  }
}