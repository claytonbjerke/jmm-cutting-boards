import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  '__DEV__': true
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src', 'index.js')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?sourceMap']
    }]
  }
};
