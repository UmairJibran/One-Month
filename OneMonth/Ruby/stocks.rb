require "stock_quote"

StockQuote::Stock.new(api_key: 'https://cloud.iexapis.com/stable/sk_7f954ff3757346fa9e2ef5839e5e7e87')
StockQuote::Stock.quote("AAPL")