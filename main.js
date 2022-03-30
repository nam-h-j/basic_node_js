var http = require("http");
var fs = require("fs");
var port = 3000;
var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == "/") {
    url = "/index.html";
  }
  if (request.url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(port);
console.log("server start....");
console.log(`run in : //localhost:${3000}`);
