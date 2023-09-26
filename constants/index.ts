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