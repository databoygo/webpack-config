const path = require("path")
module.exports = {
  entry: path.resolve(__dirname, "../../src/index.tsx"),
  output: {
    filename: "static/js/[name]..js",
    path: undefined,
    clean:true
  },
}