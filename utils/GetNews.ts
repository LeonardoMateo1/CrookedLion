const encodedApiToken = encodeURIComponent(process.env.NEWS_API_KEY!);


export const getNews = async ( symbol: string ) => {
    const res = await fetch(` https://api.marketaux.com/v1/news/all?symbols=${symbol}&filter_entities=true&language=en&api_token=AaczVo8TBSjl1UvsvL3DWVVEaf5xvs3rC7jCZSGU`);

    if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
    }

    const data = await res.json();

    if (!data || typeof data !== 'object') {
        throw new Error('Invalid response from the API.');
    }
    console.log(data)

    return data;
}