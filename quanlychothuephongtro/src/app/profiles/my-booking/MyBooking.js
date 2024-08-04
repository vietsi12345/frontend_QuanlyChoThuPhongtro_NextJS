"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MybookingsItem from './MybookingsItem'
import { getBookingsForUser } from '@/redux/booking/Actions'



const MyBooking = () => {
    const { myBookings } = useSelector(state => state.booking)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBookingsForUser(user?.id))
    }, [])


    return (
        <div className='flex flex-col p-5 gap-5'>
            <h1 className='text-2xl font-bold'>Danh sách đặt chỗ</h1>
            {myBookings?.map((item, index) => (
                <MybookingsItem key={index} item={item} />
            ))}
        </div>
    )
}

export default MyBooking
