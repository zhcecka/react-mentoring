const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
      publicPath: '/',
  },

  devServer: {
    historyApiFallback: true
 },

  devtool: "source-map",

  resolve: {
      extensions: [".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },

};