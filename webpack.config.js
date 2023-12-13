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
                // To use images on pug files:
                test: /\.(png|jpg|jpeg|ico|svg|webp)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]'
                }
            },
        ],
    },

    plugins: [
        // new CopyWebpackPlugin([
        //     { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
        //     { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
        //     { from: `${PATHS.src}/static`, to: '' },
        // ]),

        new PugPlugin({
            pretty: true,
            //☝🏽 Format HTML (only in dev mode)
            css: {
                filename: 'assets/css/[name].[contenthash:8].css'
            }
        }),
    ],
}