const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const movieRouter = require("./routes/movie-router");

const app = express();
const apiPort = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/build")));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// if api route, have express handle, otherwise, delegate control to client, (react router handles views / routing)
app.use("/api", movieRouter);

// serve file / react app
app.get("*", (req, res) => {
  console.log("ping");
  console.log(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
