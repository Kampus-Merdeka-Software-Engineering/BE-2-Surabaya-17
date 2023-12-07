require('dotenv').config()

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

const port = 8000;

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

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

//specialties
app.use(express.json());

app.post('/data', (req, res) => {
    const jsonData = req.body;

    console.log('Data JSON yang diterima:', jsonData);

    res.send('Data JSON diterima.');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
