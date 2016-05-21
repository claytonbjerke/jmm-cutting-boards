import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  '__DEV__': false
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: true,
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
      test: /(\.css|\.scss)$/,
      include: path.join(__dirname, 'src'),
      loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
    }, {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'react-hot!babel',
      exclude: [path.resolve(__dirname, 'node_modules')]
    }]
  }
};
