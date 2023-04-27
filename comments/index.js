const express = require("express");
const http = require("http");
const router = require("./routes");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(router);

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("server running");
});
