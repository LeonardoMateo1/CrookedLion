type StockEntry = {
    '1. open': string,
    '2. high': string,
    '3. low': string,
    '4. close': string,
};

export type StockData = {
    'Monthly Adjusted Time Series': Record<string, StockEntry>,
    'Weekly Adjusted Time Series': Record<string, StockEntry>,
    'Daily Time Series': Record<string, StockEntry>,
};

const formatSeriesData = (seriesData: Record<string, StockEntry>, formattedData: Array<{ x: string, y: string[] }>) => {
    Object.entries(seriesData).forEach(([key, value]: [string, StockEntry]) => {
        formattedData.push({
            x: key,
            y: [
                value['1. open'],
                value['2. high'],
                value['3. low'],
                value['4. close'],
            ]
        });
    });
}

export const formatStockData = (stockData: StockData) => {
    const formattedData: Array<{ x: string, y: string[] }> = [];
    if(stockData['Monthly Adjusted Time Series']){
        formatSeriesData(stockData['Monthly Adjusted Time Series'], formattedData);
    };
    if(stockData['Weekly Adjusted Time Series']){
        formatSeriesData(stockData['Weekly Adjusted Time Series'], formattedData);
    };
    if(stockData['Daily Time Series']){
        formatSeriesData(stockData['Daily Time Series'], formattedData);
    }
    return formattedData;
}