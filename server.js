require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main route and response JSON
app.get('/', (req, res) => {
  res.json({ message: 'Hello World.' });
});

// Require routes
const branchesRoutes = require('./routes/branches.routes');
const specialtyRoutes = require('./routes/specialty.routes');
const reservationRoutes = require('./routes/reservation.routes');
const menuRoutes = require('./routes/menu.routes');

// Use routes
app.use('/branches', branchesRoutes);
app.use('/specialty', specialtyRoutes);
app.use('/reservation', reservationRoutes);
app.use('/menu', menuRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT}.);
});