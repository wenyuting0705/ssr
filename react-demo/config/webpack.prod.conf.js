const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.con')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: "js/[name].[chunkhash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-demo',
      template: '../public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    new CleanWebpackPlugin(['../dist'], { allowExternal: true })
  ],
  optimization: {
    splitChunks: {
        chunks: "all",
        minChunks: 1,
        minSize: 0,
        cacheGroups: {
            framework: {
                test: "framework",
                name: "framework",
                enforce: true
            }
        }
    }
}
})