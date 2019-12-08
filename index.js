var fs = require("fs");
var http = require("http");
var url = require("url");
function request(req, res) {
  var stuff = url.parse(req.url, true);
  if (stuff.pathname === "/"){
    
  }
}
var srv = http.createServer(request);

srv.listen(8080);
