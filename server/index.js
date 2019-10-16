const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./api");
const authRoute = require("./auth/Routes");

const path = require("path");
require("./auth/passport");
const SERVER_PORT = process.env.PORT || 4000;

//Import Routes
// register Routes middle wares
//app.use("/api/user", authRoute);
//register middle wares
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/api", api);

if (process.env.NODE_ENV !== "development") {
  app.use("/", express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(SERVER_PORT, () => {
  console.log(`This server is running on Port ${SERVER_PORT}`);
});
