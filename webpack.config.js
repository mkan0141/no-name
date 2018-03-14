const path = require('path');
const webpack = require('webpack');
const publidDir = path.join(__dirname, '/public');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
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
  },
  {
    entry: {
      style: './app/src/css/index.scss',
    },
    output: {
      path: publidDir,
      publicPath: './public',
      filename: 'bundle.css',
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
];
