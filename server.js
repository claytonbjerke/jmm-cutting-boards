var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8000));

app.use(express.static(path.join(__dirname, '/build')));

app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
