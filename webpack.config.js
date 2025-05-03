const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js", output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "bandler.js",
    },
    module: {
        rules: [{
            test: /\.js$/, exclude: /node_modules/, use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", {
                        targets: "> 0.25%, not dead"
                    }]]
                }
            }
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",]
        }]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "style.css",
    })],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        open: true,
    }
}