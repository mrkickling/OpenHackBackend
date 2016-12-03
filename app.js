/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://rodakors:brptcIFNG0G20zgpbOW8eOShgAwIbksk2tvOJK6NLY21GPO45iNGrTGzfkmwjK42okDpWGWcm2BgYbKoorzQMQ==@rodakors.documents.azure.com:10250/?ssl=true", function (err, db) {
  db.close();
    console.log(db);
});


// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

app.get('/getEvents', function(req, res){
    
    /* Gör en request till databasen... */
    res.send('hello hih');
})