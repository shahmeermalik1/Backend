const express = require('express');
const { getStocks, addStock, fetchStockData } = require('../controllers/stockController');
const router = express.Router();

router.get('/:symbol', fetchStockData);


module.exports = router;
