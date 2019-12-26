const path = require('path');
const aliases = require('./webpack.aliases');
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
  mode: 'production',
  externals: [nodeExternals()],
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
  }
};
