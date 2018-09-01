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
    }//,
    //externals: [webpackNodeExternals()],

    //devtool: 'source-map',

};

//module.exports = config;

module.exports = merge(baseConfig, config);