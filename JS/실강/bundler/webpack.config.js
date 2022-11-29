const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './main.js', // 진입점
  output: {
    // 결과 출력
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'abc.js',
    clean: true,
  },
  module: {
    // loader
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요!!(밑에 갈수록 1순위)
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외 옵션
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
  devServer: {
    port: 5050,
  },
};
