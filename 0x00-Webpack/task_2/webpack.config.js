const path = require('path');

module.exports =  {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
	maxAssetSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test:  /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [{loader: 'image-webpack-loader', options: {
          bypassOnDebug: true,
          disable: true
        }}]
      }
    ]
  }
};
