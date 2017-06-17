const webpack = require('webpack');
const path = require('path');

module.exports = {
  // เปิดใช้งาน sourcemap ด้วยโหมด eval
  devtool: 'eval',
  
  // ตรงจุดนี้สำคัญครับ! จุดเริ่มต้นของโปรแกรมเราคือ index.js
  // Dashboard.js หรือ Article.js จะเข้าถึงได้ก็ต้องผ่านไฟล์นี้
  // เราจึงบอกว่า index.js เป็น "entry" หรือทางเข้าถึงของโมดูลอื่น
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/theme/elements.scss',
    './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    
    // หลังจากรวมร่างทุกไฟล์เข้าเป็นไฟล์เดียวแล้ว ให้ไฟล์เดียวนั้นชื่ออะไร
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./public",
    hot: true,
    inline: false,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        // สำหรับไฟล์นามสกุล css ให้ใช้ Loader สองตัวคือ css-loader และ style-loader
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        // ใช้ Loader สามตัวสำหรับ scss
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};