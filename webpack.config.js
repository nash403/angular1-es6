var webpack = require('webpack');

module.exports = {
  entry: "./main",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions: ["",".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/], // exclude unwanted js files
      loader: 'babel', // 'babel-loader' is also valid name
      /*query: {
        presets: ['es2015'], // I created a .babelrc file so that I don't need this option
      }*/
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin() // Plugin for js minification
  ]
}