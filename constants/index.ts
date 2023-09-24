export const LogSignForms = [
    {
        id: 1,
        stars: "5",
        description: "",
        name: "Steven Bryant",
        position: "Head Investor",
        company: "Lenvera",
        imgurl: ""
    },
    {
        id: 2,
        stars: "5",
        description: "",
        name: "Peter Smith",
        position: "Investment Analyst",
        company: "Stock Adventure",
        imgurl: ""
    },
    {
        id: 3,
        stars: "5",
        description: "",
        name: "Xavier Provost",
        position: "Investor",
        company: "Lion Venture",
        imgurl: ""
    },
];

export const dayCandleStickOptions = {
    chart: {
        type: "candlestick",
        width: "100%",
        height: 1000,
        foreColor: "#373d3f"
    },
    title: {
        text: "Daily Stock Chart",
        align: "left",
    },
    responsive: [{
        breakpoint: 1000,
    }],
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
        height: "100%"
    },
    title: {
        text: "Monthly Stock Chart ",
        align: "left",
    },
    responsive: [{
        breakpoint: 1000,
    }],
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
        height: "100%"
    },
    title: {
        text: "Weekly Stock Chart",
        align: "left",
    },
    responsive: [{
        breakpoint: 1000,
    }],
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};