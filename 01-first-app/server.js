var http = require('http'); //gives access to http functions such as create server

function onRequest(request, response) { // this is so the server does something when accessed
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end(); // just shows that the request is done
}

http.createServer(onRequest).listen(8000); //creates the server and listens for any requests on port 8000

/* Notes: 
- look above
*/