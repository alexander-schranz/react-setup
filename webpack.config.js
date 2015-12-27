var path = require('path');
var webpack = require('webpack');

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
    debug: true,
    plugins: [],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel', 'babel-loader?optional=runtime'],
                include: path.join(__dirname, 'public/app/scripts')
            }
        ]
    }
};

module.exports = config;