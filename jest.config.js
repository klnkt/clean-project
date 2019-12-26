const { defaults: tsjPreset } = require('ts-jest/presets');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
module.exports = {
  testMatch: ['**/?(*.)+(spec|test).(j|t)s?(x)'],
  // mapping irrelevant stuff to mockups
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${rootDir}/tests/mocks/fileMock.js`,
    '\\.(css|scss)$': `${rootDir}/tests/transform/identity-obj-proxy.js`,
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'd.ts'],
  moduleDirectories: ['node_modules'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@shyftplan/js-config).+(j|t)s?(x)$'
  ],
  rootDir: './',
  roots: [
    "<rootDir>/sources",
  ],
  testEnvironment: "node",
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'text'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      isolatedModules: true,
    }
  },
};
