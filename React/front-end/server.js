const http = require("http");
const fs = require("fs");

const PORT = 8000;

const server = http.createServer(function (req, res) {
  if (req && req.url && req.url == "/home") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const content = fs.readFileSync("./public/home.html", "utf-8");
    res.write(content);
    res.end();
  } else if (req && req.url && req.url == "/login") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const content = fs.readFileSync("./public/login.html", "utf-8");
    res.write(content);
    res.end();
  } else if (req && req.url && req.url == "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const content = fs.readFileSync("./public/index.html", "utf-8");
    res.write(content);
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1> OOPs Page not found </h1>");
    res.end();
  }
});

server.listen(PORT, function () {
  console.log("Server started at http://localhost:8000");
});
