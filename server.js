require('dotenv').config()

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
// db.sequelize.sync({ force: false }).then(() => {
//     console.log('Drop and Resync Db');
// });

app.get("/", (req, res) => {
    res.json({ message: "Hello World." });
});

require('./app/routes/branches.routes')(app);
require('./app/routes/specialty.routes')(app);
require('./app/routes/reservation.routes')(app);

app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});
