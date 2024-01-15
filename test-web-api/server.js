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
