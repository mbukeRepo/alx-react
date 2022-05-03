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
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
             loader: 'image-webpack-loader',
             options: {
               mozjpeg: {
               progressive: true,
             },
             // optipng.enabled: false will disable optipng
             optipng: {
               enabled: false,
             },
             pngquant: {
               quality: [0.65, 0.90],
               speed: 4
             },
             gifsicle: {
               interlaced: false,
             },
             // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
    ]
  }
};
