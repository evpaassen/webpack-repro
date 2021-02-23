const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './css/test.css',
    output: {
        clean: true,

        // Workaround for the 'Automatic publicPath is not supported in this browser' error in Webpack 5 / mini-css-extract-plugin.
        // See: https://stackoverflow.com/questions/64294706/webpack5-automatic-publicpath-is-not-supported-in-this-browser
        // Uncomment the next line to make it work.
        // publicPath: "",
    },
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
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
};
