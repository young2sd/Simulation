//Import statements
var express = require('express');
var path = require('path');

var app = express();

var port = 8080;

app.get("/", handleRoot);
app.get("/index.html", handleRoot);
app.use('/css', express.static( path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.get("*", handleUnknown);

app.listen(port, function() {
  console.log("Express function running.");
  console.log("Listening on port " + port);
});

function handleRoot(request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
}

function handleUnknown(request, response) {
  response.sendFile(path.join(__dirname , "unknown.html"));
}
