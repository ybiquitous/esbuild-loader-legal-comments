const path = require("path");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

const output = {
  path: path.resolve(__dirname, "dist"),
};
const mode = "production";
const devtool = "source-map";

/** @type {import("webpack").Configuration} */
module.exports = [
  {
    entry: {
      "webpack-default": "./index.js",
    },
    output,
    mode,
    devtool,
    optimization: {
      minimize: true,
      minimizer: ["..."],
    },
  },
  {
    entry: {
      "webpack-eof": "./index.js",
    },
    output,
    mode,
    devtool,
    optimization: {
      minimize: true,
      minimizer: [
        new ESBuildMinifyPlugin({
          legalComments: "eof",
        }),
      ],
    },
  },
  {
    entry: {
      "webpack-linked": "./index.js",
    },
    output,
    mode,
    devtool,
    optimization: {
      minimize: true,
      minimizer: [
        new ESBuildMinifyPlugin({
          legalComments: "linked",
        }),
      ],
    },
  },
];
