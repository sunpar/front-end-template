const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    public: 'localhost:8080',
    disableHostCheck: true,
  },
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.DEV',
    }),
  ],
});