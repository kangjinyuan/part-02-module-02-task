const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: true,
    devServer: {
        hot: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'eslint-loader',
            enforce: 'pre'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('http://localhost:8080/')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})