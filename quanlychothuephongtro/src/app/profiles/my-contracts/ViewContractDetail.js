import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { formatMonneyVietNam } from '../../../ultils/common/formatMonneyVietNam';
import { getRoomById } from '@/redux/room/Action';
import { getUserById } from '@/redux/auth/Action';



const ViewContractDetail = ({ item }) => {
    console.log(item)
    const dispatch = useDispatch();
    const { room } = useSelector(state => state.room);
    const { userById } = useSelector(state => state.auth);
    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;
    useEffect(() => {
        dispatch(getUserById(jwt, item.booking.userId))
        dispatch(getRoomById(item.booking.roomId))
    }, []);

    return (
        <div className='border border-gray-200 rounded-xl bg-white shadow-lg px-5 pb-5 flex flex-col pt-3'>
            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-7 w-2/3 '>
                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' alt="hotel" />
                    <div>
                        <h1 className='font-bold text-lg'>{`Hợp đồng thuê phòng`}</h1>
                        <div className='flex items-center gap-12'>
                            <p className='text-gray-800 text-sm'>{`Mã hợp đồng: ${item?.id}`}</p>
                            <p className='text-gray-800 text-sm'>{`Trạng thái: ${item?.status}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='pt-2'>
                    <p className='font-semibold text-center'>{room?.house?.name}</p>
                    <div className=' flex gap-5  w-[550px]'>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <p className='text-base text-gray-700'>{`Họ và tên: ${userById?.fullName}`}</p>
                            <p className='text-base text-gray-700'>{`ID loại phòng: ${room?.roomType?.id}`}</p>
                            <p className='text-base text-gray-700'>{`Khách: ${item?.booking?.adults} người lớn, ${item?.booking?.children} trẻ em`}</p>
                            <p className='text-base text-gray-700'>{`Ngày bắt đầu: ${item?.startDate}`}</p>
                            <p className='text-base text-gray-700'>{`Số điện thoại: ${userById?.phone}`}</p>
                        </div>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <p className='text-base text-gray-700'>{`ID phòng:  ${room?.id}`}</p>
                            <p className='text-base text-gray-700'>{`Loại phòng: ${room?.roomType?.name}`}</p>
                            <p className='text-base text-gray-700'>{`Giá phòng:  ${formatMonneyVietNam(room?.price || 0)}`}</p>
                            <p className='text-base text-gray-700'>{`Ngày kết thúc: ${item?.endDate}`}</p>
                            <p className='text-base text-gray-700'>{`Email: ${userById?.email}`}</p>
                        </div>
                    </div>
                </div>
                <img src={room?.image ? `data:image/png;base64,${room?.image}` : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60p7T44uwQN0ZlnMrXtMEDoLMhbd4EVBjZg&s`}
                    className='w-[100px] h-[100px] object-cover rounded-lg' alt="room"
                />
            </div>
        </div>
    );
};

export default ViewContractDetail;
