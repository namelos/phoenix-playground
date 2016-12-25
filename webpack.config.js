var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './web/static/js/app.js',
    output: {
        path: './priv/static/js',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'web/static/js')
        }]
    }
}