//import dayjs from 'dayjs' node.js에서는 import가 x
const path = require('path'); //NodeJS 내장함수
const HtmlWebpackPlugin = require('html-webpack-plugin');
//export function () {}
module.exports = (env, options) => {
  return {
    entry: './main.js', // 진입점
    output: {
      // path: path.resolve(__dirname, 'dist'),
      // filename: 'main.js',
    },
    module: {
      rules: [
        {
          //.scss파일 또는 css파일 찾기 라는 정규식
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
  };
};
