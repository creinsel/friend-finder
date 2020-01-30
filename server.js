var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use("assets",express.static("assets"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });