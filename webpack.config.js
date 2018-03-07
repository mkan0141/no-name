const path = require('path');
const webpack = require('webpack');
const publidDir = path.join(__dirname, '/public');

module.exports = {
    entry: './app/src/index.jsx',
    target: 'node',
    // バンドルファイルの出力場所
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './public')
    },
    module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: publidDir,
    }
};
