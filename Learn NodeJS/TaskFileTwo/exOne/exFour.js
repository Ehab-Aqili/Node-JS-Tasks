const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/example") {
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome From Root");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
