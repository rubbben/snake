const path = require("path");

module.exports = {
    entry: ["@babel/polyfill","./src/script.js"],
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                } 
            }
        ]
    }
}