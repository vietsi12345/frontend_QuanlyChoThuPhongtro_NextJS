"use client"
import React, { useEffect, useState } from 'react';
import MonthlyRevenueChart from './MonthlyRevenueChart';
import { useDispatch, useSelector } from 'react-redux';
import { getStatisticalByYear } from '@/redux/Invoice/Action';

const data =
{
    "2024-09": 717000.00,
    "2024-08": 935000.00,
    "2024-07": 810000.00
}


const Page = () => {
    const [revenueData, setRevenueData] = useState({});
    const [year, setYear] = useState(new Date().getFullYear());
    const dispatch = useDispatch()
    const { statistical } = useSelector(state => state.invoice)


    useEffect(() => {
        dispatch(getStatisticalByYear(year))
    }, [year]);

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <div>
            <h1>Doanh thu theo tháng</h1>
            <div>
                <label htmlFor="year">Chọn năm: </label>
                <select id="year" value={year} onChange={handleYearChange}>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>
            <MonthlyRevenueChart data={statistical || []} />
        </div>
    );
};

export default Page;
