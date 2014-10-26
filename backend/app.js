var app = require('http').createServer(handler);
var request = require('request');
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(13374);

function handler (req, res) {
}

io.on('connection', function (socket) {
  setInterval(function(){
    getStatus(function(s) {
      socket.emit('status', s);
    });
  }, 100);
});

function getStatus(callback) {
  request('http://status.hasi.it', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  });
}


