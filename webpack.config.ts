import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import "webpack-dev-server";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: { transpileOnly: true },
      },
    ],
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
  ],
};

export default config;
