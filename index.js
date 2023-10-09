const liveServer = require('live-server');
 
var params = {
    port: 8080, 
    host: "driel-44.youareidiot.pl", 
    root: ".", 
    open: false, 
    file: "index.html", 
    wait: 1000, 
    logLevel: 2, 
    middleware: [function(req, res, next) { next(); }] 
};
liveServer.start(params);