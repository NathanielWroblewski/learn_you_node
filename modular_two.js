module.exports = function(filepath, pattern, callback) {
  var fs = require('fs')
  var regex = new RegExp('\\.' + pattern + '$')
  var results = []

  fs.readdir(filepath, function(err, files) {
    if (err) return callback(err)
    files.forEach(function(filename) {
      if (filename.match(regex)) results.push(filename)
    })
    callback(null, results)
  })
}
