var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = { //defines what objects should be exported
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname; // pathname is the /_____
      switch (path) { // this check what route was taken
          case '/': //default type leads to home/ index page
              renderHTML('./index.html', response);
              break;
          case '/login': // causes the login page to load instead
              renderHTML('./login.html', response);
              break;
          default: //if neither are triggered it defaults to the error message
              response.writeHead(404);
              response.write('Route not defined');
              response.end();
      }

  }
};