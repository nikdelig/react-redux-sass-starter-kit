const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    watch: true,
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
    },

    devServer: {
        inline: true,
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        publicPath: './dist',
        open: 'http://localhost:8080',
        port: 8080,
        overlay: {
            warnings: true,
            errors: true
        },
        staticOptions: {
            redirect: true
        }
    }
};
