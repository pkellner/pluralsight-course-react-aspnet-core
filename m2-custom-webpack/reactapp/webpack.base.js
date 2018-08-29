module.exports = {

    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                options: {
                    presets: [
                        'react', 'stage-2',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                },
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};