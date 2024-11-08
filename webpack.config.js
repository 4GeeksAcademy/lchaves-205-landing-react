const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;
// Only for Gitpod
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}

if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        use: [{
          loader: "style-loader" 
        }, {
          loader: "css-loader" 
        }]
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "path": require.resolve("path-browserify"),
      "util": require.resolve("util/"),
      "assert": require.resolve("assert/"),
      "constants": require.resolve("constants-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "fs": false, 
    }
  },
  devtool: "source-map",
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    client: {
      webSocketURL: publicUrl
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: 'template.html'
    }),
  ]
};
