const HtmlPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  return {
    entry: './src/main.js',
    output: {
      //path: '',
      filename: 'core.js',
      publicPath: '/',
      clean: true,
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html',
      }),
    ],
  };
};
