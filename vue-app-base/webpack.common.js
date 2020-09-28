const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.(less|css)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.png$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024,
                    esModule: false
                }
            }
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue-app',
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ]
}