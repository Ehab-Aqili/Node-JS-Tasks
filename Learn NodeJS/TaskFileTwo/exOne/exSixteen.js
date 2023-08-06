const net = require("net");

const client = net.createConnection({ port: 8080 }, () => {
  console.log("Connected to server");
  client.write("Hello from client");
});

client.on("data", (data) => {
  console.log(`Received data from server: ${data}`);
});

client.on("end", () => {
  console.log("Disconnected from server");
});

client.on("error", (err) => {
  console.error("Error:", err);
});
