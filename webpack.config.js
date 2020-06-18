const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'images/**',
                    globOptions: { ignore: ['**/app.png'] },
                },
                'style.css',
                'manifest.json',
                { from: 'images/app.png', to: 'app.png' },
            ],
        }),
        new HtmlWebpackPlugin({
            chunksSortMode: 'none',
            template: 'index.html',
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            include: ['index.html', 'style.css', 'manifest.json', /\.js$/],
            navigateFallback: 'index.html',
            swDest: 'service-worker.js',
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts.gstatic.com\//,
                    handler: 'StaleWhileRevalidate',
                },
            ],
        }),
    ],
};
