type StockEntry = {
    '1. open': string,
    '2. high': string,
    '3. low': string,
    '4. close': string,
};

export type StockData = {
    'Monthly Adjusted Time Series': Record<string, StockEntry>,
    'Weekly Adjusted Time Series': Record<string, StockEntry>,
    'Time Series (Daily)': Record<string, StockEntry>,
};

const formatSeriesData = (seriesData: Record<string, StockEntry>, formattedData: Array<{ x: string, y: number[] }>) => {
    Object.entries(seriesData).forEach(([key, value]: [string, StockEntry]) => {
        formattedData.push({
            x: key,
            y: [
                parseFloat(value['1. open']),
                parseFloat(value['2. high']),
                parseFloat(value['3. low']),
                parseFloat(value['4. close'])
            ]
        });
    });
}

export const formatStockData = (stockData: StockData) => {
    const formattedData: Array<{ x: string, y: number[] }> = [];
    
    if(stockData['Monthly Adjusted Time Series']){
        formatSeriesData(stockData['Monthly Adjusted Time Series'], formattedData);
    }
    if(stockData['Weekly Adjusted Time Series']){
        formatSeriesData(stockData['Weekly Adjusted Time Series'], formattedData);
    }
    if(stockData['Time Series (Daily)']){
        formatSeriesData(stockData['Time Series (Daily)'], formattedData);
    }
    return formattedData;
}
