var http = require('http');
var fs = require('fs'); //imports the file system task allows for reading of files

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}); // the / html allows it to be a html file instead of a plain type text
    fs.readFile('./index.html', null, function(error, data) { // this reads the file
        if (error) { // just in case of an error
            response.writeHead(404); //error type
            response.write('File not found!');
        } else {
            response.write(data); // this passes the data into it
        }
        response.end(); // once again ends the function 
    });
}

http.createServer(onRequest).listen(8000);