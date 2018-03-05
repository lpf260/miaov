const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'apc.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'aac.html',
            template: 'src/index.html'
        })
    ]
};
