require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main route and response JSON
app.get("/", (req, res) => {
    res.json({ message: "Hello World." });
});

// Require routes
require('./routes/branches.routes')(app);
require('./routes/specialty.routes')(app);
require('./routes/reservation.routes')(app);
require('./routes/menu.routes')(app);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
