const getStyleLoaders = (preProcessor) => {
  return [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env"
          ]
        }
      }
    },
    preProcessor
  ].filter(Boolean) //Booleans是一个布尔类型强制转换函数，如果preProcessor为undefined，则会数组里去除它
}

module.exports = {
  oneOf: [
    {
      test: /.css$/,
      use: getStyleLoaders()
    },
    {
      test: /.less$/,
      use: getStyleLoaders('less-loader')
    },
    {
      test: /.s[ac]ss$/,
      use: getStyleLoaders('sass-loader')
    },
    {
      test: /.styl$/,
      use: getStyleLoaders('stylus-loader')
    },
  ]
}