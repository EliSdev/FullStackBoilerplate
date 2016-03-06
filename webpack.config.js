module.exports = {
  context: __dirname + '/public',
  entry: "./app/index.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.html$/, exclude: /(node_modules|public\/app\/libs)/, loader: 'raw'}
    ]
  }
};
