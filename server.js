// Calling dependencies

var express = require('express');
var bodyparser = require('body-parser'); //Using body parser allows you to access req.body from within your routes, and use that data for example to create a user in a database
var path = require('path');

//Defining the express app & PORT
var app = express();
var PORT = process.env.PORT || 8080;

//Allow PUBLIC directory to access the static files: css files
app.use(express.static(path.join(__dirname, './app/public')));

//adding parse to properly analize incoming request and interpret components
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());

//Add the app routes 
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//Start listening on PORT
app.listen(PORT, function(){
    console.log('Friend Finder App is listeining on port:  ' + PORT);
});
