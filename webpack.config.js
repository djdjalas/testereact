const path = require('path');

module.exports = {
    entry: './source/cliente.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    resolve: {
    extensions: ['.js', '.jsx']
  },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
