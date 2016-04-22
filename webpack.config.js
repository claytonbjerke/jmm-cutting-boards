// bundle.js  1.39 MB       0  [emitted]  main
// bundle.js.map  1.64 MB       0  [emitted]  main
var webpack = require('webpack');
var path = require('path');

const DEBUG = false //!process.argv.includes('--release');

module.exports = {

    devtool: DEBUG ? 'cheap-source-map' : false,

    entry: [
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        __dirname + '/src/index.js'
    ],

    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css?modules',
            include: /flexboxgrid/,
        }, {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            loader: 'react-hot!babel'
        }]
    },

    devServer: {
        contentBase: __dirname + '/src',
        port: 9000,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
