const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, './index.tsx'),
  output: {
    path: path.resolve(__dirname, '../public/'),
    publicPath: '/',
    filename: 'javascripts/application.js'
  },
  module: {
    rules: [
      {
        test: /\.(d.ts|ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator : {
          filename : 'images/[hash:8].[name][ext][query]',
        }
      }
    ]
  },
  resolve: {
    extensions: ['.d.ts', '.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/application.css',
      chunkFilename: 'application.css'
    })
  ]
}
