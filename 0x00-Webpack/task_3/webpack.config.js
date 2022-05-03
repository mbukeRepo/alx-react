const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry : {
      header: path.resolve(__dirname, 'modules/header/header.js'),
      body: path.resolve(__dirname, 'modules/body/body.js'),
      footer: path.resolve(__dirname, 'modules/footer/footer.js'),
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].bundle.js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    }
    devtool: 'inline-source-map',
    performance: {
      maxAssetSize: 1000000,
    },
    devServer: {
      contentBase: path.join(__dirname, './public'),
      compress: true,
      port: 8564,
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: 'index.html'
      }),
      new CleanWebpackPlugin()
    ],
    module: {
    rules: [
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
    ]
  }
}
