import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LineChart = ({ data }) => {
    const chartData = {
        labels: data?.hourly?.map((d) => d.title) || [],
        datasets: [
            {
                label: "Temperature",
                data: data?.hourly?.map((d) => d.temp) || [],
                borderColor: "rgba(75, 192, 192, 0.6)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Temperature (°C)",
                },
                ticks: {
                    callback: function (value) {
                        return value + "°C";
                    },
                },
            },
        },
        elements: {
            line: {
                tension: 0.5,
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            title: {
                display: true,
                text: "Hourly Temperature",
            },
        },
    };

    return (
        <div className="bg-primary rounded-md shadow-custom p-4 w-full md:w-[47%] h-80 mt-4 m-4 xs:-m-0.5">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;
