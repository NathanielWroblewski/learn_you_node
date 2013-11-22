var fs = require('fs')
var regex = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(process.argv[2], function(err, files) {
  if (err) {
    throw err
  }
  else {
    files.forEach(function(filename) {
      if (filename.match(regex)) console.log(filename)
    })
  }
})
