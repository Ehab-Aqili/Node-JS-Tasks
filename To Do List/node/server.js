const express = require("express");
const cors = require("cors");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const Data = JSON.parse(fs.readFileSync("./Data.json"));

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  fs.readFile("./Data.json", (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      const jsonObj = JSON.parse(data);
      res.status(200).json(jsonObj[req.params.id].index);
    }
  });
});

app.post("/", (req, res) => {
  // console.log(req.body);
  const newId = Data[Data.length - 1].id + 1;
  const newData = Object.assign({ id: newId }, req.body);
  Data.push(newData);
  fs.writeFile("./Data.json", JSON.stringify(Data), (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(Data);
    }
  });
  res.send("done");
});

app.patch("/:id", (req, res) => {
  let id = req.params.id * 1;
  let updateData = Data.find((el) => el.id === id);
  if (!updateData) {
    return res.status(404).json({
      status: "fail",
      message: "No Data objects with ID:" + id + "is found",
    });
  }
  let index = Data.indexOf(updateData);
  Object.assign(updateData, req.body);
  Data[index] = updateData;
  fs.writeFile("./Data.json", JSON.stringify(Data), (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(Data);
    }
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
