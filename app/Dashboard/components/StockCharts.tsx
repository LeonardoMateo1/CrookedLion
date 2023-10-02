"use client"

import Image from "next/image";
import { dayCandleStickOptions, monthCandleStickOptions, weekCandleStickOptions, } from '@/constants';
import React, { useEffect, useMemo } from 'react'
import ReactApexChart from 'react-apexcharts';
import { getDailyStockData, getWeeklyStockData, getMonthlyStockData } from "@/utils/GetStock";
import { formatStockData, StockData } from '@/utils/StockType'


type Granularity = 'daily' | 'weekly' | 'monthly';

export default function StockCharts({ symbol }: { symbol: string }) {
    const [stockData, setStockData] = React.useState<Record<Granularity, StockData | null>>({
        daily: null,
        weekly: null,
        monthly: null
    });

    const fetchFunctions: Record<Granularity, () => Promise<StockData>> = {
        daily: () => getDailyStockData(symbol),
        weekly: () => getWeeklyStockData(symbol),
        monthly: () => getMonthlyStockData(symbol)
    };

    useEffect(() => {
        (async () => {
            for (const granularity of (Object.keys(fetchFunctions) as Granularity[])) {
                const data = await fetchFunctions[granularity]();
                setStockData(prevData => ({
                    ...prevData,
                    [granularity]: data
                }));
            }
        })();
    }, [symbol]);

    const dailySeriesData = useMemo(() => {
        return stockData.daily ? formatStockData(stockData.daily) : [];
    }, [stockData.daily]);
    
    const weeklySeriesData = useMemo(() => {
        return stockData.weekly ? formatStockData(stockData.weekly) : [];
    }, [stockData.weekly]);
    
    const monthlySeriesData = useMemo(() => {
        return stockData.monthly ? formatStockData(stockData.monthly) : [];
    }, [stockData.monthly]);


    return (
        <div className="flex-center md:flex-row flex-col">
            <div className="flex flex-col w-full" id="stockchart">
                <ReactApexChart 
                    series={
                        [
                            {
                                data: monthlySeriesData as any
                            }
                        ]
                    }
                    // @ts-ignore
                    options={monthCandleStickOptions}
                    type="candlestick"
                />
                <ReactApexChart 
                    series={
                        [
                            {
                                data: weeklySeriesData as any
                            }
                        ]
                    }
                    // @ts-ignore
                    options={weekCandleStickOptions}
                    type="candlestick"
                />
            </div>
            <div className="w-full" id="stockchart">
                <ReactApexChart 
                    series={
                        [
                            {
                                data: dailySeriesData as any
                            }
                        ]
                    }
                    // @ts-ignore
                    options={dayCandleStickOptions}
                    type="candlestick"
                />
            </div>
        </div>
    )
}
