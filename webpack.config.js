var path = require("path")

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "bundle"),
    port: 9000,
  },
  entry: "./dist/client",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "bundle"),
  },
}
