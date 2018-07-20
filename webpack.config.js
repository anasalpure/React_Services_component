const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //or 'production'
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },



  module: {

    rules: [
      {
        test: /\.jsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["env", "react"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
 
      },


    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
