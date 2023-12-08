require('dotenv').config()

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");

app.get("/", (req, res) => {
    res.json({ message: "Hello World." });
});

require('./app/routes/branches.routes')(app);
require('./app/routes/specialties.routes')(app);
require('./app/routes/reservation.routes')(app);

app.listen(3333, () => {
    console.log("Server is running on port 3333.");
});
