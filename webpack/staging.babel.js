import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import prodConfig from './production.babel';


export default webpackMerge(
    prodConfig,
    {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('staging')
            }),
        ]
    }
);
