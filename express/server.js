const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   console.log("Got a request");
//   res.send("Hello Browser");
//   res.status(500).send("internal from server");
//   res.json({ message: "hello from coding" });
//   res.download("./server.js")
//   res.sendFile(__dirname + '/index.html');
// });
//  app.get("/users", (req, res) => {
//     res.send("UserList");
//   });

//   app.get("/users/new", (req, res) => {
//     res.send("User New List");

//   });
// const Data = JSON.parse(fs.readFileSync("./Data.json"));

const userRouter = require("./routes/users");

app.use("/users", userRouter);
app.use("/new", userRouter);

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
