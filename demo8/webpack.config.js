const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config({ path: __dirname + "/.env" });

const config = (env) => {
  // ENV import by dotenv
  console.log(process.env.dotenv);
  console.log(process.env.testStr);

  // ENV import by args in cli
  console.log(env.cliEnv);

  return {
    entry: "./src/index.js",
    plugins: [
      new HtmlWebpackPlugin({
        title: "Environment Variables",
      }),
      // Pass env in .env to code
      new webpack.EnvironmentPlugin(process.env),
    ],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};

module.exports = config;
