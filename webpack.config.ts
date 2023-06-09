import * as path from 'path';
import * as webpack from 'webpack';


const config: webpack.Configuration = {
  entry: './src/index.ts',
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "src", "tests"),
        ]
      },
      {
        test: /\.css$/i,
        use: [ "style-loader", "css-loader" ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: [
    'react',
    'react-dom'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  performance: {
    maxEntrypointSize: 400000
  }
};

export default config;