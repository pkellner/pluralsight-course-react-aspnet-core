const path = require('path');
const APP_DIR = path.resolve(__dirname, 'ClientApp');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

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
// https://groups.google.com/forum/#!msg/antlr-discussion/7VP0aLjMnwI/UFtxBnmpAgAJ
    node: {
        module: "empty",
        fs: "empty"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-2',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ],
                    "plugins": ["transform-class-properties"]
                }
            }
        ]
    }

};

module.exports = config;