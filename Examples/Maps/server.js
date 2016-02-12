var XDmvcServer = require('XD-MVC/xdmvcserver.js');
var xdmvc = new XDmvcServer();

var connect = require('connect'),
    http = require('http'),
	serveStatic = require('serve-static');
var app = connect().use(serveStatic(__dirname + '/public'));
var server = http.createServer(app);

xdmvc.start(9010, 3010, 9011);
var port = 8080;
server.listen(port);
console.log("Run maps on port " + port + ". path /maps.html");
