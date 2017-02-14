import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ROOT_PATH = path.resolve('./');
const SERVER_URL = 'PROD';

export default {
    entry:  [
        path.resolve(ROOT_PATH, 'src/index')
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, "build"),
        filename: "[name].bundle.js",
        chunkFilename: '[name].chunk.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'webpack-replace',
                    options: {
                        search: '##server_url##',
                        replace: SERVER_URL
                    }
                },{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'hidden-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            },
            __DEV__: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.public.html',
            filename: 'index.html',
            inject: true,
            hash: true
        })
    ]
};