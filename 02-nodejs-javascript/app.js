var http = require('http'); //once again imports http core module
var module1 = require('./module1'); //you can also bring in your own modules so you create them based on the file you have made prior
var module2 = require('./module2');

function onRequest(request, response) { // once again the response
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module2.myVariable); //grabs the module2 variable
    module2.myFunction(); //calling the function from module2
    response.end();
} // can also insert the function into the "onRequest" space and delete the name and insert inside

http.createServer(onRequest).listen(8000); //creates the server again for port 8000