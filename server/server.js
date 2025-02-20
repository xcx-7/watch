// server/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db');

// require('dotenv').config();
dotenv.config();
const app = express();


connectDB();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
}));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running..');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
