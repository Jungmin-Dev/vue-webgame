const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
