const http = require("http");
const server = http.createServer((request, response) => {
  // logs the requested URL
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ message: "Welcome to the main page" }));
    response.end();
    //console.log(request.url)
  }
});
server.listen(4040);
console.log(`Listening on Port: ${4040}`);
