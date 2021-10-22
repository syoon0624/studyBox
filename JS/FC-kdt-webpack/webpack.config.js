const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  return {
    resolve: {
      extensions: ['.js'],
    },
    entry: './src/main.js',
    output: {
      //path: '',
      filename: 'core.js',
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [{ from: 'static', to: '' }],
      }),
    ],
    devServer: {
      port: 8080,
      open: true,
      historyApiFallback: true,
    },
  };
};
