const path = require('path');
const SERVER_DIR = path.resolve(__dirname, 'ServerApp');
const BUILD_DIR = path.resolve(__dirname, 'build');
const webpackNodeExternals = require('webpack-node-externals');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    target: 'node',
    entry: SERVER_DIR + '/server.js',

    output: {
        path: BUILD_DIR,
        filename: 'serverbundle.js'
    }
};

module.exports = merge(baseConfig, config);