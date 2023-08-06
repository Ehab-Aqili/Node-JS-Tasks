const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log(`Received data from client: ${data}`);
    socket.write("Server received your message");
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.write("Welcome to the TCP server");
});

const port = 8080;

server.listen(port, () => {
  console.log(`TCP server is running and listening on port ${port}`);
});
