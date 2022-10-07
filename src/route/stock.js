const axios = require('axios');

const avApiKey = process.env.AV_API_KEY;
const avUrl = 'https://www.alphavantage.co/query';

const daysLength = 11;

function stock (req, res) {
    const params = {
        function: 'TIME_SERIES_DAILY',
        symbol: req.params.symbol,
        apikey: avApiKey
    };
    const result = {};
    
    axios.get(avUrl, { params: params })
        .then((response) => {
            const prices = {};
            let average = 0;
            const priceEntries = Object.entries(response.data['Time Series (Daily)']);

            for (let i = 0; i < daysLength; i++) {
                const priceEntry = priceEntries[i];
                const date = priceEntry[0];
                const price = Number(priceEntry[1]['4. close']);

                prices[date] = price;
                average += price;
            }
            average = Number((average / daysLength).toFixed(2));

            result.prices = prices;
            result.average = average;

            res.status(200);
            res.send(result);
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(400);
        });
}

module.exports = stock;