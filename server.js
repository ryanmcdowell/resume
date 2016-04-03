'use strict';

var compression = require('compression');
var express = require('express');
var app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist'));

if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(process.env.PORT || 8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
  // [END server]
}