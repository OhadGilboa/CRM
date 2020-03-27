// Server setup
const express = require("express");
const app = express();
const path = require("path");
const api = require("./server/routes/api");
const bodyParser = require("body-parser");
const axios = require(`axios`);
let data = require(`./src/data.json`);
const Sequelize = require(`sequelize`);
const sequelize = new Sequelize("mysql://root:12345678@localhost/sql_join");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use("/", api);

const addClients = async function(body) {
  for (let i = 0; i < body.length; i++) {
    let query = `INSERT INTO Clients VALUES(null, "${body[i].name}", "${
      body[i].surName
    }", "${body[i].country}", "${body[i].firstContact}", "${
      body[i].emailType
    }", "${body[i].sold ? 1 : 0}", "${body[i].owner}")`;
    await sequelize.query(query);
  }
};

// addClients(data);

const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log(`Running on port ${port}`);
});
