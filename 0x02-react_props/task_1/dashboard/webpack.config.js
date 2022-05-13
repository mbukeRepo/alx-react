const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/dist")
    },
    compress: true,
    port: 8564,
    open: true
  },
  module: {
    rules: [
      {
       test: /\.m?js$/,
       exclude: /node_modules/,
       use: {
        loader: 'babel-loader'
       }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|gif|png|jpeg|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      }
    ]}
 };
