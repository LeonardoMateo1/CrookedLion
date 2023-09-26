"use client"

import React from 'react'
import NewsList from './NewsList';
import dynamic from 'next/dynamic';
import CustomButton from '@/components/CustomButton';

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
            <form onSubmit={handleSubmit} className='pl-3 flex mb-3 w-full justify-center'>
                <input 
                    type="text" 
                    id='symbol' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    className='text-black outline-none w-[20%]'
                />
                <CustomButton 
                    btnType='submit'
                    title='Search'
                    containerStyles='bg-accent px-3 py-[5px] font-semibold'
                />
            </form>
            <StockCharts symbol={symbol} />
            <NewsList symbol={symbol}/>
        </div>
    )
}
