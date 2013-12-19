var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {
  var fileStream = fs.createReadStream(process.argv[2])
  fileStream.pipe(response)
})

server.listen(8000)
