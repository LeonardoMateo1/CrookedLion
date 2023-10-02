export const LogSignForms = [
    {
        id: 1,
        description: "Harnessing cutting-edge technology and comprehensive market data, CrookedLion stands out as a leading stock analysis platform. Trusted by professionals and novices alike, it delivers actionable insights that drive smart investment decisions.",
        name: "Steven Bryant",
        position: "Head Investor",
        company: "Lenvera",
        imgurl: "/steven.jpg"
    },
    {
        id: 2,
        description: "In the intricate world of stock market analysis, CrookedLion emerges as a beacon of clarity. Its user-friendly interface combined with in-depth analytics makes it the go-to platform for anyone serious about growing their portfolio.",
        name: "Peter Smith",
        position: "Investment Analyst",
        company: "Stock Adventure",
        imgurl: "/peter.jpg"
    },
    {
        id: 3,
        description: "CrookedLion redefines stock market analysis with its intuitive tools and real-time data. Pioneering in its approach, it's not just a website – it's your most reliable partner in the quest for stock market success.",
        name: "Xavier Provost",
        position: "Investor",
        company: "Lion Venture",
        imgurl: "/xavier.jpg"
    },
];

const responsiveOptions = [
    {
        breakpoint: 1000,
        options: {
            chart: {
                height: 600,
            }
        }
    },
    {
        breakpoint: 600,
        options: {
            chart: {
                height: 400,
            }
        }
    }
];
const alternateresponsiveOptions = [
    {
        breakpoint: 1000,
        options: {
            chart: {
                height: 400,
            }
        }
    },
    {
        breakpoint: 600,
        options: {
            chart: {
                height: 400,
            }
        }
    }
];

export const dayCandleStickOptions = {
    chart: {
        type: "candlestick",
        width: "100%",
        height: 800,
        foreColor: "#373d3f"
    },
    title: {
        text: "Daily Stock Chart",
        align: "left",
    },
    responsive: responsiveOptions,
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};
export const monthCandleStickOptions = {
    chart: {
        type: "candlestick",
        width: "100%",
        height: 600
    },
    title: {
        text: "Monthly Stock Chart ",
        align: "left",
    },
    responsive: alternateresponsiveOptions,
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};
export const weekCandleStickOptions = {
    chart: {
        type: "candlestick",
        width: "100%",
        height: 600
    },
    title: {
        text: "Weekly Stock Chart",
        align: "left",
    },
    responsive: alternateresponsiveOptions,
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};

export const Countries = [
    { id: 1, country: 'ar', name: 'Argentina' },
    { id: 2, country: 'au', name: 'Australia' },
    { id: 3, country: 'be', name: 'Belgium' },
    { id: 4, country: 'br', name: 'Brazil' },
    { id: 5, country: 'ca', name: 'Canada' },
    { id: 6, country: 'ch', name: 'Switzerland' },
    { id: 7, country: 'cl', name: 'Chile' },
    { id: 8, country: 'cn', name: 'China' },
    { id: 9, country: 'cz', name: 'Czech Republic' },
    { id: 10, country: 'de', name: 'Germany' },
    { id: 11, country: 'dk', name: 'Denmark' },
    { id: 12, country: 'eg', name: 'Egypt' },
    { id: 13, country: 'es', name: 'Spain' },
    { id: 14, country: 'eu', name: 'European Union' },
    { id: 15, country: 'fr', name: 'France' },
    { id: 16, country: 'gb', name: 'United Kingdom' },
    { id: 17, country: 'global', name: 'Global' },
    { id: 18, country: 'gr', name: 'Greece' },
    { id: 19, country: 'hk', name: 'Hong Kong' },
    { id: 20, country: 'hu', name: 'Hungary' },
    { id: 21, country: 'id', name: 'Indonesia' },
    { id: 22, country: 'ie', name: 'Ireland' },
    { id: 23, country: 'il', name: 'Israel' },
    { id: 24, country: 'in', name: 'India' },
    { id: 25, country: 'it', name: 'Italy' },
    { id: 26, country: 'jp', name: 'Japan' },
    { id: 27, country: 'kr', name: 'Korea' },
    { id: 28, country: 'lk', name: 'Sri Lanka' },
    { id: 29, country: 'mx', name: 'Mexico' },
    { id: 30, country: 'my', name: 'Malaysia' },
    { id: 31, country: 'nl', name: 'Netherlands' },
    { id: 32, country: 'no', name: 'Norway' },
    { id: 33, country: 'nz', name: 'New Zealand' },
    { id: 34, country: 'ph', name: 'Philippines' },
    { id: 35, country: 'pt', name: 'Portugal' },
    { id: 36, country: 'qa', name: 'Qatar' },
    { id: 37, country: 'ru', name: 'Russian Federation' },
    { id: 38, country: 'sa', name: 'Saudi Arabia' },
    { id: 39, country: 'tr', name: 'Turkey' },
    { id: 40, country: 'tw', name: 'Taiwan' },
    { id: 41, country: 'us', name: 'United States' },
    { id: 42, country: 've', name: 'Venezuela' },
    { id: 43, country: 'za', name: 'South Africa' }
];

export const Languages = [
    { id: 1, language: 'ar', name: 'Arabic' },
    { id: 2, language: 'bg', name: 'Bulgarian' },
    { id: 3, language: 'bn', name: 'Bengali' },
    { id: 4, language: 'cs', name: 'Czech' },
    { id: 5, language: 'da', name: 'Danish' },
    { id: 6, language: 'de', name: 'German' },
    { id: 7, language: 'el', name: 'Greek' },
    { id: 8, language: 'en', name: 'English' },
    { id: 9, language: 'es', name: 'Spanish' },
    { id: 10, language: 'et', name: 'Estonian' },
    { id: 11, language: 'fa', name: 'Persian' },
    { id: 12, language: 'fi', name: 'Finnish' },
    { id: 13, language: 'fr', name: 'French' },
    { id: 14, language: 'he', name: 'Hebrew' },
    { id: 15, language: 'hi', name: 'Hindi' },
    { id: 16, language: 'hr', name: 'Croatian' },
    { id: 17, language: 'hu', name: 'Hungarian' },
    { id: 18, language: 'id', name: 'Indonesian' },
    { id: 19, language: 'it', name: 'Italian' },
    { id: 20, language: 'ja', name: 'Japanese' },
    { id: 21, language: 'ko', name: 'Korean' },
    { id: 22, language: 'lt', name: 'Lithuanian' },
    { id: 23, language: 'multi', name: 'Multilingual' },
    { id: 24, language: 'nl', name: 'Dutch' },
    { id: 25, language: 'no', name: 'Norwegian' },
    { id: 26, language: 'pl', name: 'Polish' },
    { id: 27, language: 'pt', name: 'Portuguese' },
    { id: 28, language: 'ro', name: 'Romanian' },
    { id: 29, language: 'ru', name: 'Russian' },
    { id: 30, language: 'sk', name: 'Slovak' },
    { id: 31, language: 'sv', name: 'Swedish' },
    { id: 32, language: 'ta', name: 'Tamil' },
    { id: 33, language: 'th', name: 'Thai' },
    { id: 34, language: 'tr', name: 'Turkish' },
    { id: 35, language: 'uk', name: 'Ukrainian' },
    { id: 36, language: 'vi', name: 'Vietnamese' },
    { id: 37, language: 'zh', name: 'Chinese' }
];