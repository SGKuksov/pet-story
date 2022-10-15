const path = require("path");
const config = require("./tasks/config");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  context: process.cwd(),
  mode: process.env.NODE_ENV,
  entry: {
    app: config.scripts.input
  },
  output: {
    filename: "[name].js",
    path: config.scripts.output
  },
  devtool: isDev ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false
            }
          }
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  devServer: {
    overlay: false
  }
};
