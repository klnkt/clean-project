const path = require('path');
const Dotenv = require('dotenv-webpack');
const aliases = require('./webpack.aliases');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  module: {
      rules: [
          // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
          { test: /\.tsx?$/, loader: "ts-loader" },
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            use: []
          }
      ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.mjs'],
    modules: [
      'node_modules',
    ],
    alias: {},
  },
  mode: 'development',
  devtool: 'source-map',
  externals: [nodeExternals()],
  entry: './src/index.dev.ts',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv({ path: path.resolve(__dirname, '../.env') }),
    new NodemonWebpackPlugin(),
  ],
};