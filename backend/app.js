var app = require('http').createServer();
var request = require('request');
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(13374);

io.on('connection', function (socket) {
  
  setInterval(function() {
    request('http://status.hasi.it', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        socket.emit('status', JSON.parse(body));
      }
    });
  }, 500)

});

