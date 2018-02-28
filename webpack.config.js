const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/src/index.jsx',

    // バンドルファイルの出力場所
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './public')
    },
    module: {
        loaders: [{
            exclude: '/node_modules/',
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
            },
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
