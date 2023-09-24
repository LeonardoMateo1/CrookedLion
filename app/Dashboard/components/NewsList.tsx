"use client"

import Image from "next/image";
import React, { useEffect } from 'react';
import { NewsType } from "@/utils/NewsType";
import { getNews } from "@/utils/GetNews";


export default function NewsList({ symbol }: { symbol: string }) {

    const [news, setNews] = React.useState<NewsType | null>(null);

    useEffect(() => {
        async function fetchNews() {
            const fetchedData = await getNews(symbol); // Assuming getNews can accept a symbol prop
            if (fetchedData) {
                setNews({
                page: fetchedData.meta.page,
                results: fetchedData.data
                });
            }
        }
        fetchNews();
    }, [symbol]);

    if (!news) return <div>Loading...</div>;



    return (
        <div>
            {
                news.results.map((newsItem) => (
                    <div key={newsItem.uuid}>
                        <h2>{newsItem.title}</h2>
                        <p>{newsItem.description}</p>
                        <div>
                            <Image
                                src={newsItem.image_url}
                                width={500}
                                height={500}
                                alt={newsItem.title}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
