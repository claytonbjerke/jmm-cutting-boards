var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8000));

app.use(express.static(path.join(__dirname, '/src')));

// app.listen(app.get('port'), function() {
//     console.log('Listening on port: ', app.get('port'));
// });

http.createServer(app).listen(app.get('port'));
//https.createServer({}, app).listen(app.get('port'));
