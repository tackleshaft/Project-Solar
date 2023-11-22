const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devServer: {
        static: {
          directory: path.join(__dirname, 'src'),
          publicPath: '/dist',
        },
        // compress: true,
        port: 3000
      },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                      ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  // 'sass-loader'
                ],
              },
        ]
    }
}