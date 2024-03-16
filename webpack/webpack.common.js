const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: [
        {
            loader: 'babel-loader',
        },
        ]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff(2)?|svg|otf|eot|ttf)$/,
      type: 'asset/inline',
    }
   ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '..', './build'),
  },
  plugins: [ 
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '..', './src/index.html'),
        }),
    ],
}

module.exports = config