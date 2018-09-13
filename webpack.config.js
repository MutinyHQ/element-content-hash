const path = require("path");

const PATHS = {
  src: path.join(__dirname, "src/"),
  dist: path.join(__dirname, "dist/")
};

const config = {
  mode: process.env.NODE_ENV || "development",
  entry: path.join(PATHS.src, "index.ts"),
  output: {
    path: path.join(PATHS.dist),
    filename: "index.js",
    library: "element-content-hash",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".ts"],
    modules: [path.join(PATHS.src), path.join(__dirname, "node_modules")]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules|test/
      }
    ]
  }
};

module.exports = config;
