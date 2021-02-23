const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './css/test.css',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // Extracts CSS into a separate file.
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
            },
            {
                test: /\.png$/i,
                use: 'file-loader'
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
};
