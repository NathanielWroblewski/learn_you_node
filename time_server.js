var net = require('net')
var server = net.createServer(function(socket) {
  var date = new Date()
  socket.write(formatDate(date))
  socket.end()
})
server.listen(8000)

function formatDate(date) {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() +
  ' ' + date.getHours() + ':' + date.getMinutes() + '\n'
}
