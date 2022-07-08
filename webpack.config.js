const path = require("path");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

const output = {
  path: path.resolve(__dirname, "dist"),
};

module.exports = [
  {
    entry: {
      default: "./index.js",
    },
    output,
    optimization: {
      minimize: true,
      minimizer: ["..."],
    },
  },
  {
    entry: {
      eof: "./index.js",
    },
    output,
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
      linked: "./index.js",
    },
    output,
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
