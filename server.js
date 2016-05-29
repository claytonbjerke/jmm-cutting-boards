var express = require('express');
var path = require('path');
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8080;

app.set('port', port);
app.use(express.static(path.join(__dirname, '/dist')));
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
