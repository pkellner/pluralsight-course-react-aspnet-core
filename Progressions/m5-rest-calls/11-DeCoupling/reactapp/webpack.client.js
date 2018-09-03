const path = require('path');
const APP_DIR = path.resolve(__dirname, 'ClientApp');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const Dotenv = require('dotenv-webpack');

const config = {
    entry: APP_DIR + '/Client.js',

    devServer: {
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true
    },

    output: {
        path: PUBLIC_DIR,
        filename: 'clientbundle.js'
    },

    plugins: [
        new Dotenv()
    ],

    node: {
        module: 'empty',
        fs: 'empty'
    }

    //devtool: 'source-map',

};

//module.exports = config;

module.exports = merge(baseConfig, config);