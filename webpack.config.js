const path = require('path');

module.exports = {
    entry: './src/index.js',
  output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'boild'),
  },
};