require('dotenv').config();

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3333;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//main route and respons json
app.get("/", (req, res) => {
    res.json({ message: "Hello World." });
});

//require
require('./routes/branches.routes')(app);
require('./routes/specialty.routes')(app);
require('./routes/reservation.routes')(app);

//start server
app.listen(3333, () => {
    console.log("Server is running on port 3333.");
});
