const express = require('express');
const stockRoutes = require('./routes/stockRoutes');

const cors = require('cors');



const app = express();

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/stocks', stockRoutes);


// Routes for monthly budget app

const budgetRoutes = require('./routes/monthlyBudgetRoutes');
app.use('/api/budget', budgetRoutes);







// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error Handling Middleware


module.exports = app;
