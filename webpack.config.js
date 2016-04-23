var webpack = require('webpack');
var path = require('path');

module.exports = {

    devtool: 'cheap-module-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src', 'index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'public'),
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
            loader: 'react-hot!babel',
            exclude: [path.resolve(__dirname, 'node_modules')]
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
