"use client"

import React from 'react'
import NewsList from './NewsList';
import dynamic from 'next/dynamic';
import CustomButton from '@/components/CustomButton';
import { Countries, Languages } from '@/constants';

const StockCharts = dynamic(() => import('./StockCharts'), {
    ssr: false,
})

export default function StockNewsDashboard() {

    const [symbol, setSymbol] = React.useState('IBM');
    const [inputValue, setInputValue] = React.useState('IBM');
    
    const [language, setLanguage] = React.useState('en');
    const [country, setCountry] = React.useState('us');

    const [selectedLanguage, setSelectedLanguage] = React.useState(language);
    const [selectedCountry, setSelectedCountry] = React.useState(country);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSymbol(inputValue);
        setLanguage(selectedLanguage);
        setCountry(selectedCountry);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className='pl-3 flex mb-3 w-full justify-center'>
                <div className='flex flex-col'>
                    <label>Stock Ticker</label>
                    <input 
                        type="text" 
                        id='symbol' 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        className='text-black outline-none h-10 uppercase pl-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Country</label>
                    <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="mb-3 text-black h-10 border"
                    >
                        {Countries.map((country) => (
                            <option key={country.id} value={country.country}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label>Language</label>
                    <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="mb-3 text-black h-10 border"
                    >
                        {Languages.map((language) => (
                            <option key={language.id} value={language.language}>
                                {language.name} ({language.language})
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='text-bg'>.</label>
                    <CustomButton 
                        btnType='submit'
                        title='Search'
                        containerStyles='bg-accent h-10 px-4 font-semibold'
                    />
                </div>
            </form>
            <StockCharts symbol={symbol} />
            <NewsList symbol={symbol} language={language} country={country}/>
        </div>
    )
}
