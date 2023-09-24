const api_token = process.env.NEWS_API_KEY

export const getNews = async ( symbol: string) => {
    const res = await fetch(` https://api.marketaux.com/v1/news/all?symbols=${symbol}&filter_entities=true&language=en&api_token=${api_token}`);

    if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
    }

    const data = await res.json();
    
    console.log(data)

    return data;
}