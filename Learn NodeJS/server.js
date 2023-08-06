const http = require("http");
const fs = require("fs")
const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
  // res.writeHead(200, { "Content-Type": "/plain" });
  // res.end('Ehab Aqili \n');

    fs.readFile("./htmltest.html",
      (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      }
    );
});



server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port} `);
});
