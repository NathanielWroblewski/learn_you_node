var http = require('http')
var page = ''

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8')
  response.on('data', function(chunk) {
    page += chunk
  })
  response.on('end', function() {
    console.log(page.length)
    console.log(page)
    page = ''
  })
})
