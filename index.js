//Required local file Dependencies
var module_loader = require('./webhook');

//------------------------------------UNCOMMENT FOR LOCAL DEBUGGING------------------------------------

//------------------------------------------------------------------------------------------------------
// Load Up the Dependencies
var express = require('express');

var bodyParser = require('body-parser');

require('dotenv').config()

//Configuring the Express Middleware
app = express()
// http = require('http'),
// httpServer = http.Server(app);

//Set PORT to Dynamic Environments to run on any Server
var port = process.env.PORT || 5000;

//Configure Express to Recieve JSON and extended URLencoded formats
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Set RESTful routes
app.get('/', function(req, res) {
  res.send('API Running. Successful!');
});

app.post('/api/webhook', function(req, res) {
    //var url = req.body.url;
    // var token = req.body.token;
    // var geo = req.body.geo;
    console.log("REQUEST : " + JSON.stringify(req.body))
    module_loader.Logic(req, res, (err, result)=>{
        console.log("Callback Result : " + result)
        response = {
            "error": null,
            "successful": true
        }
        res.send(response)
    });
});


// Start the server
app.listen(port);
console.log("Server has booted up successfully at PORT :  " + port);