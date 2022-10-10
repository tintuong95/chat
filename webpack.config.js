const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { NODE_ENV = "production" } = process.env;
module.exports = {
  entry: "./src/index.js",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },

  watch: NODE_ENV === "development",
  externals: [nodeExternals()],
};
