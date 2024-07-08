import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, units }) => {
    const chartData = {
        labels: ["Temperature (°C)", "Humidity (%)", `Wind (${units === "metric" ? 'km/h' : 'm/s'})`],
        datasets: [
            {
                label: "Value",
                data: [data.temp, data.humidity, data.speed],
                backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Weather Details",
                font: {
                    size: 20,
                },
            },
        },
        borderRadius: 5,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Value",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Metric",
                },
            },
        },
    };

    return (
        <div className="bg-primary rounded-md shadow-custom p-4 w-[47%] h-80 mt-4 m-4">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
