const axios = require('axios');


const alphaVantageClient = axios.create({
    baseURL: 'https://www.alphavantage.co/query?',
    params: {
        apikey: "2BX2CR649UX2LZUN", // Your API key
    },
});

module.exports = alphaVantageClient;
