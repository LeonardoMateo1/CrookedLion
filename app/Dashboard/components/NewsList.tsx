"use client"

import Image from "next/image";
import React, { useEffect } from 'react';
import { NewsType } from "@/utils/NewsType";
import { getNews } from "@/utils/GetNews";
import Link from "next/link";


type NewsListProps = {
    symbol: string;
    language: string;
    country: string;
};

export default function NewsList({ symbol, language, country }: NewsListProps) {

    const [news, setNews] = React.useState<NewsType | null>(null);

    useEffect(() => {
        async function fetchNews() {
            const fetchedData = await getNews(symbol, language, country);
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
        <div className="flex flex-col gap-5 px-4">
            {
                news.results.map((newsItem) => (
                    <div key={newsItem.uuid} className="hover:shadow-lg hover:shadow-secondary">
                        <Link href={newsItem.url} className="flex flex-col-reverse sm:flex-row-reverse  text-black">
                            <div className="w-full flex justify-start px-4 items-center bg-primary brightness-50">
                                <p>{newsItem.description}</p>
                            </div>
                            <div>
                                <img
                                    src={newsItem.image_url}
                                    alt={newsItem.title}
                                    className="sm:w-[300px] object-cover h-full w-full"
                                />
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
