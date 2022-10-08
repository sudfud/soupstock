# soupstock
A simple Node app for retrieving stock information

### Build and Run using Docker
1. Get a free API key from [Alpha Vantage](https://www.alphavantage.co/).

2. Clone the repository and move to the soupstock directory.
```
git clone https://github.com/sudfud/soupstock
cd soupstock
```

3. Build a Docker image.
```
docker build -t soupstock .
```

4. Run a Docker container with the newly created image.
```
docker run -dp 3000:3000 -e AV_API_KEY=[Your API key] soupstock
```

5. Try it out!
```
curl localhost:3000/stock/MSFT
```

### Available Endpoints
#### GET /stock/{symbol}
Retrieve the stock information of a given symbol [ex. MSFT]. 
<br><br>Returns a JSON object with the following attributes if the given symbol is valid. Otherwise, returns a 400 status code.
- prices: The closing prices of this symbol from the past 11 days.
- average: The average closing price of this symbol over the past 11 days.
