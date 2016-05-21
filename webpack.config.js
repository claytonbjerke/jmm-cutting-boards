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
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
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
      test: /(\.scss|\.css)$/,
      loaders: [
        require.resolve('style-loader'),
        require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        require.resolve('sass-loader') + '?sourceMap'
      ]
    }]
  }
};
