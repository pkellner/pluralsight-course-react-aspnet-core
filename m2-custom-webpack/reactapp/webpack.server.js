const path = require ('path');
const APP_DIR = path.resolve(__dirname,'ClientApp');
const BUILD_DIR = path.resolve(__dirname,'build');

const webpackNodeExternals = require('webpack-node-externals');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const SERVER_DIR = path.resolve(__dirname, 'ServerApp');

const config = {
    target: 'node',
    entry: SERVER_DIR + '/Server.js',

    output: {
        path: BUILD_DIR,
        filename: 'serverbundle.js'
    },
    externals: [webpackNodeExternals()]

};

//module.exports = config;
module.exports = merge(baseConfig, config);