const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, options) => {
  console.log(env, options)
  return {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    entry: './src/main.js',
    output: {
      publicPath: '/',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
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
            {
              loader: 'sass-loader',
              options: {
                additionalData: `
                  @use "sass:color";
                  @use "sass:list";
                  @use "sass:map";
                  @use "sass:math";
                  @use "sass:meta";
                  @use "sass:selector";
                  @use "sass:string";
                  @import "~/scss/_variables";
                `
              }
            }
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
    devServer: {
      historyApiFallback: true
    }
  }
}
