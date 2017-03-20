import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AppcacheWebpackPlugin from 'appcache-webpack-plugin';
import getBaseConfig from './base-config';

const ROOT_PATH = path.resolve('./');

export default {
    ...getBaseConfig(false),
    devtool: 'hidden-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'src/index.html')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new AppcacheWebpackPlugin({
            cache: [
                'https://chayns-res.tobit.com/API/v3.1/js/chayns.min.js'
            ],
            output: 'cache.manifest'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false,
            __QA__: false,
            __LIVE__: true,
        }),
    ]
};
