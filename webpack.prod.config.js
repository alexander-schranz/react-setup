var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var config = {
    context: path.join(__dirname, 'public/app/scripts'),
    entry: './app',
    output: {
        path: path.join(__dirname, 'public/dist/scripts'),
        filename: 'app.js',
        chunkFilename: 'app.c[id].js?v=[hash]',
        sourceMapFilename: '[file].map',
        publicPath: '/dist/scripts/'
    },
    plugins: [
        new Clean(['public/dist/scripts'], __dirname),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            output: {
                comments: false
            },
            sourceMap: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel', 'babel', 'babel-loader?optional=runtime'],
                include: path.join(__dirname, 'public/app/scripts')
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = config;