import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import icons from '../../ultils/icon'

const { LuCalendarSearch } = icons

const DatePicked = ({ startDate, endDate, setStartDate, setEndDate }) => {

    return (
        <div className="date-inputs flex bg-white rounded-lg ">
            <div className='border border-gray-300 w-1/2 h-[53.6px] rounded-lg flex gap-2 items-center p-3 hover:cursor-pointer'>
                <LuCalendarSearch size={24} />
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Chọn ngày bắt đầu"
                        dateFormat="eee, dd MMMM yyyy"
                        locale={vi}
                        className='hover:cursor-pointer'
                        popperClassName='z-1000'
                    />
                </div>
            </div>
            <div className='border border-gray-300 w-1/2 h-[53.6px] rounded-lg flex gap-2 items-center p-3 hover:cursor-pointer'>
                <LuCalendarSearch size={24} />
                <div>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="Chọn ngày kết thúc"
                        dateFormat="eee, dd MMMM yyyy"
                        locale={vi}
                        className='hover:cursor-pointer'
                        popperClassName='z-1000'
                    />

                </div>
            </div>
        </div>
    );
};

export default DatePicked;
