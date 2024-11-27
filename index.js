const express = require('express');
const app = require('./src/app');
const PORT = 3001;
const mongoose = require('mongoose');



// Replace with your MongoDB connection string


const DB_URI = 'mongodb+srv://malikshahmeer:HasHn36WriD5haeY@cluster0.jcb6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0e';

mongoose.connect(DB_URI)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));







app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
