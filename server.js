<<<<<<< HEAD
var express  = require('express');
var app      = express();                                      

app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
=======
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
>>>>>>> 8ec526b27158f221a7d5ce514520303fe2351c04
