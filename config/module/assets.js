module.exports = [
  //图像
  {
    test: /.(png|jpg|jepg|git|svg)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 10 * 1024, //限制在 10kb
      }
    },
    generator: {
      filename: 'static/images/[name][ext]'  //由于有多种类型文件，所以需要ext动态设置文件后缀
    }
  },
  // 视频
  {
    test: /.(mp4|mp3|webm)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 10 * 1024,
      }
    },
    generator: {
      filename: 'static/medias/[name][ext]'
    }
  },
  //字体
  {
    test: /.(woff2|eot|ttf|otf)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 10 * 1024,
      }
    },
    generator: {
      filename: 'static/fonts/[name][ext]'
    }
  },
]