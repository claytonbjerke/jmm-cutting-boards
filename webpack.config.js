var webpack = require('webpack');
var path = require('path');

module.exports = {

    devtool: 'cheap-source-map',

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
        host: '0.0.0.0',
        port: 9000,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            }
        })
    ]
};
