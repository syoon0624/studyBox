const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, options) => {
  console.log(env, options)
  return {
    resolve: {
      extensions: ['.js'],
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    entry: './src/main.js',
    output: {
      // path: '',
      // filename: '',
      publicPath: '/',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'static' }
        ]
      }),
      new VueLoaderPlugin()
    ],
    // devServer: {
    //   port: 8080,
    //   open: true,
    //   historyApiFallback: true
    // }
  }
}