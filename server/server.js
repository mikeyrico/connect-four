var app = require('./app');
var http = require('http');

app.set('port', process.env.PORT || '3000');
var server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log(`You are now listening on port ${app.get('port')}`);
});




