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
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
  };
};
