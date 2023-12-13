const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: '/',
    },

    entry: {
        index: './src/pug/index.pug'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: PugPlugin.loader,
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|ico|svg|webp)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                }
            }
        ],
    },

    plugins: [
        new PugPlugin({
            pretty: true,
            css: {
                filename: 'assets/css/[name].[contenthash:8].css'
            }
        }),
    ],
}