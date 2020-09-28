const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: './public',
                to: '.',
                globOptions: {
                    ignore: ['./index.html']
                }
            }],
        }),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('http://localhost:8080/')
        })
    ]
})