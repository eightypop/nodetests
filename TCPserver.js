var net = require('net');

var server = net.createServer(function (socket) {
  console.log("connection made.....");
  socket.on('end', function() {
    console.log('server disconnected');
  });
  socket.on('data', function(data) {
    socket.write(data.toString());
    socket.end();
  });
});

server.listen(50505, 'redwreckage.com');
