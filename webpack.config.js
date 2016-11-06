module.exports = {
    entry: {
        chartingTest: "./compiledjs/ChartingTest"
    },
    output: {
        filename: "[name].bundle.js",
        path: "./out"
    },
    devtool: "source-map",
    module: {
        preLoaders: [{
            loader: "source-map-loader",
            exclude: /node_modules/,
        }],
    },
    externals: {
        "d3": "d3"
    }
};
