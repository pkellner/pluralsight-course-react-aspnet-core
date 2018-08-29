const webpack = require('webpack');
const path = require ('path');

const APP_DIR = path.resolve(__dirname,'');
const BUILD_DIR = path.resolve(__dirname,'build');

const config = {
    entry: APP_DIR + '/HelloWorld.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config;
