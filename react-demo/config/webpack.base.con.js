const path = require('path');


module.exports = {
  entry: {
    path: './src/main.js',
    framework: ['react','react-dom']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/, 
        loader: 'babel-loader'
      }
    ]
  }
}