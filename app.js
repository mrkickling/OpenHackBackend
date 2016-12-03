/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

/*Cloudant database for testing
var url_bluemix_db = "https://7d55f152-6d9e-4b06-9a95-e5d5c0ec063a-bluemix:2430031faa923f88729d0e742e7b7faa68d8c6185eea9c675ff65b3545e4a35f@7d55f152-6d9e-4b06-9a95-e5d5c0ec063a-bluemix.cloudant.com"; */

//Azure database
var mongoClient = require("mongodb").MongoClient;
mongoClient.connect( "mongodb://rodakors:brptcIFNG0G20zgpbOW8eOShgAwIbksk2tvOJK6NLY21GPO45iNGrTGzfkmwjK42okDpWGWcm2BgYbKoorzQMQ==@rodakors.documents.azure.com:10250/?ssl=true", function (err, db) {
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

/*  __________Event_Feed (not priority)__________
    Will require:
        Event Feed for Help Seeker:
            (ID, ref)
            
    x   Event Feed for Volunteer:
*/
app.get('/getEvents', function(req, res){
    
    /* Gör en request till databasen... */
    res.send('hello hih');
})

/*  __________Be om hjälp__________
        
*/
app.get('/addHelp', function(req, res){
    
    /* Gör en request till databasen... */
    res.send('hello hjälp');
})