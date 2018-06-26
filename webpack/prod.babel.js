import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import merge from 'webpack-merge';
import common from './common';

const ROOT_PATH = path.resolve('./');

export default merge(
    common,
    {
        mode: 'production',
        output: {
            filename: '[name].bundle.js?[hash]',
        },
        devtool: 'hidden-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(ROOT_PATH, 'src/index.html')
            })
        ]
    }
);
