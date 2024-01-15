const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const db = require("./models");
db.sequelize.sync();

// https://stackoverflow.com/a/13779626
// You must make sure that you define all configurations BEFORE defining routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// https://stackoverflow.com/a/53240717
// disable cache
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

require("./routes/pengguna.routes.js")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to testCKB backend" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
