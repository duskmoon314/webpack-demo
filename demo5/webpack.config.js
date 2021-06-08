const path = require("path");

const configs = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    // another: "./src/another-module.js",
  },
  // entry: {
  //   index: {
  //     import: "./src/index.js",
  //     dependOn: "shared",
  //   },
  //   another: {
  //     import: "./src/another-module.js",
  //     dependOn: "shared",
  //   },
  //   shared: "lodash",
  // },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // optimization: {
  //   // runtimeChunk: "single",
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};

module.exports = configs;
