const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './src/js/index.js'
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: false,
                        presets: ['react', 'es2015']
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new webpack.optimize.UglifyJsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    }
};
