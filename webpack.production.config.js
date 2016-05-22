import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
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
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loaders: ['babel']
    }, {
      test: /(\.css|\.scss)$/,
      loader: ExtractTextPlugin.extract('css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap!toolbox')
    }]
  },
  toolbox: {
    theme: path.join(__dirname, 'src/styles/jmm-theme.scss')
  }
};
