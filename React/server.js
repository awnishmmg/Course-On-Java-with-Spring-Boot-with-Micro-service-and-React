const http = require("http");

const PORT = 8000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.write("<h1>Welcome to Node </h1>");
  res.write("<script> window.alert('Hello world');</script>");
  res.end();
});

server.listen(PORT, function () {
  console.log("Server started at http://localhost:8000");
});
