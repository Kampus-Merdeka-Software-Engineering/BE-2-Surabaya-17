require('dotenv').config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


app.use(cors());

app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.json({ message: "Hello World." });
});

require('./routes/branches.routes')(app);
require('./routes/specialty.routes')(app);
require('./routes/reservation.routes')(app);

app.listen(3333, () => {
    console.log("Server is running on port 3333.");
});
