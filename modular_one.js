var parse = require('./modular_two')

parse(process.argv[2], process.argv[3], function(err, files) {
  if (err) return console.log('Error reading directory.')
  files.forEach(function(filename) {
    console.log(filename)
  })
})
