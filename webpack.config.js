module.exports = {
  entry: {
      javascript: "./entry.js"
  },
  output: {
      filename: './bundle.js'
  },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" }
        ]
    }
};
