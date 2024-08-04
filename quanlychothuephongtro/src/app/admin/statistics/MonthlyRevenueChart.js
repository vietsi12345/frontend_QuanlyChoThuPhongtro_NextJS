"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const MonthlyRevenueChart = ({ data }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Doanh thu',
                data: Object.values(data),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doanh thu theo tháng',
            },
            datalabels: {
                color: 'black',
                anchor: 'end',
                align: 'top',
                formatter: (value) => {
                    return formatMonneyVietNam(value); // Format numbers with commas
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tháng',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Doanh thu',
                },
                ticks: {
                    callback: (value) => {
                        return value.toLocaleString()// Format numbers with commas
                    }
                }
            }
        }
    };

    return <Bar data={chartData} options={options} />;
};

export default MonthlyRevenueChart;
