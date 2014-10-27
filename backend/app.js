var app = require('http').createServer(handler);
var request = require('request');
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(13374);

function handler (req, res) {
}

var data = null;

io.on('connection', function (socket) {
  setInterval(function(){
    socket.emit('status', data);
  }, 555);
});

setInterval(function() {
  request('http://status.hasi.it', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
    }
  });
}, 200);




