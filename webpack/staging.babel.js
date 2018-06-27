import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './common';

const ROOT_PATH = path.resolve('./');

export default merge(
    common,
    {
        mode: 'production',
        devtool: 'inline-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(ROOT_PATH, 'src/index.html')
            }),
            new webpack.DefinePlugin({
                __DEV__: false,
                __STAGING__: true,
                __PROD__: false,
            }),
        ]
    }
);
