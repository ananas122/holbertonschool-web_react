const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./../src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve("./dist"),
    },
    devServer: {
        hot: true,
        static: {
            directory: path.resolve("./dist"),
        },
        compress: true,
        port: 8564,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
};

