import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AppcacheWebpackPlugin from 'appcache-webpack-plugin';
import getBaseConfig from './config';

const ROOT_PATH = path.resolve('./'),
    TS = new Date().getTime();

export default () => ({
    ...getBaseConfig(false),
    devtool: 'hidden-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'index.html')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new AppcacheWebpackPlugin({
            cache: [
                `##Version: ${TS}`,
                '',
                '##JS',
                'https://chayns-res.tobit.com/API/v3.1/js/chayns.min.js'
            ],
            output: 'cache.manifest'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('qa'),
            __DEV__: false,
            __QA__: true,
            __LIVE__: false,
        }),
    ]
});