const Stock = require('../models/Stock');
const alphaVantageClient = require('../config/alphaVantage')

//fetch a single stock data
const fetchStockData = async (req, res) => {

    console.log('Fetching stock data')
    try {
        const { symbol } = req.params;
        const response = await alphaVantageClient.get('',{
            params: {
                function: 'TIME_SERIES_INTRADAY',
                symbol: symbol,
                interval: '60min'
                
            }
        });
        const stockData = response.data['Time Series (60min)']; 
        res.json(stockData); 
        

}catch (err) {
    console.error(err);
    res.status(500).json({ error: 'error fetching stock data from external API' });
}



}
module.exports = { fetchStockData};
