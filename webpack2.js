const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env,options) => {

  const isProduction = options.mode === 'production';
  const config = {
    mode: isProduction ? 'production' : 'development',
    watch: isProduction,
    devtool: isProduction ? 'none' : 'source-map',
    entry: ['./src/index.js', './src/sass/newstyle.scss'],
    output: {    
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[hash][ext][query]'
          }
        },
        {
          test: /\.(woff?2)$/i,          
          generator: {
            filename: 'assets/font/[hash][ext][query]'
          }
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
    ],
    }
  return config;
}