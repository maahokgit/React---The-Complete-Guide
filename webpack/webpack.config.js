const path = require("path");

module.export = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js%/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
    ],
  },
};
