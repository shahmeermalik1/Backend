const express = require('express');
const app = require('./src/app');
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// Use the port provided by the environment or default to 3001
const PORT = process.env.PORT || 3001;

// MongoDB connection string from environment variables
const DB_URI = process.env.DB_URI || 'your-default-mongodb-uri-here';

// Connect to MongoDB
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
