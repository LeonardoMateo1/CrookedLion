const api_key = process.env.STOCK_DATA_API_KEY

export const getMonthlyStockData = async ( symbol: string ) => {
    const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=${api_key}`);

    if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
    }

    const data = await res.json();

    if (!data['Monthly Adjusted Time Series']) {
        throw new Error('Monthly Adjusted Time Series data not found in API response');
    }

    return data;
}

export const getWeeklyStockData = async ( symbol: string ) => {
    const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${api_key}`);

    if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
    }

    const data = await res.json();

    if (!data['Weekly Adjusted Time Series']) {
        throw new Error('Weekly Adjusted Time Series data not found in API response');
    }

    return data;
}

export const getDailyStockData = async ( symbol: string ) => {
    const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${api_key}`);

    if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
    }

    const data = await res.json();

    if (!data['Daily Time Series']) {
        throw new Error('Daily Time Series data not found in API response');
    }

    return data;
}