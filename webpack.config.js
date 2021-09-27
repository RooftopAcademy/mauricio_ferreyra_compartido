const path = require('path');

module.exports = {
  entry: './src/object/App.ts',
  module: {
    rules: [
      {
        // test: /\.tsx?$/,
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')]
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};