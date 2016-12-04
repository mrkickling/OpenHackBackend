/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//-----------------------------------------------------------------------
// create a new express server
var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cfenv = require('cfenv');

var appEnv = cfenv.getAppEnv();

// Serve files from ./public
app.use(express.static('public'));

// start server on the specified port and binding host
server.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});

io.on('connection', function(client){
    console.log('conoect');
    client.on('request', function(data){
        io.emit('newRequest', data);
        console.log('req')
    })
    
})

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry


