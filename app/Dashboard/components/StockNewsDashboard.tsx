"use client"

import React from 'react'
import NewsList from './NewsList';
import dynamic from 'next/dynamic';

const StockCharts = dynamic(() => import('./StockCharts'), {
    ssr: false,
})

export default function StockNewsDashboard() {
    const [symbol, setSymbol] = React.useState('ibm');
    const [inputValue, setInputValue] = React.useState('ibm');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSymbol(inputValue);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id='symbol' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    className='text-black'
                />
                <button type="submit">Search</button>
            </form>
            <StockCharts symbol={symbol} />
            <NewsList symbol={symbol}/>
        </div>
    )
}
