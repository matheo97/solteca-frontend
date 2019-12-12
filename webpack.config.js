import path from 'path';

module.exports = {
  entry: './App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: { rules: [ { test: /\.js$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader', options: { presets: ['env', 'react'] } } } ] } };