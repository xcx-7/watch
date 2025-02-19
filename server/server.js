// server/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db');

// require('dotenv').config();
dotenv.config();
const app = express();

// Middleware
// app.use(express.json());
// app.use(cors());

connectDB();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
}));
// Connect to MongoDB (replace <your_connection_string> in .env)
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));


// Basic route
app.get('/', (req, res) => {
  res.send('API is running..');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
