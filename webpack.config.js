module.exports = {
  context: __dirname + '/public',
  entry: "./app/index.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    loaders: []
  }
};
