const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            tempalte: '.src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', { targets: "defaults"}],
                        ['@babel/preset-react', { targets: "defaults"}]
                      ]
                    }
                }
            }
        ]
    }
}