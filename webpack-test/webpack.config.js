const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }]
        }, {
           test: /\.css$/,
           use: ['style-loader','css-loader']
        },{
            test:/\.(png|jpg|gif|svg|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },{
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
        }]
    },
    devServer: {
        open: true,
        port: 9000
    }
};