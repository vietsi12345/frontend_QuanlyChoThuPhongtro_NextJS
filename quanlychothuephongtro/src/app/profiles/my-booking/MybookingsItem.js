"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaMugSaucer } from 'react-icons/fa6';
import { formatVietNameseToSring } from '@/ultils/common/formatVietNameseToSring';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';
import { getRoomById } from '@/redux/room/Action';
import axios from 'axios';
import { API_BASE_URL } from '@/config/Api';
import { getUserByJwt } from '@/redux/auth/Action';
import { updateBookingStatus } from '@/redux/booking/Actions';

const MybookingsItem = ({ item }) => {
    const [room, setRoom] = useState(null);
    const [hotel, setHotel] = useState(null);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);


    useEffect(() => {
        const fetchRoom = async () => {
            const response = await axios.get(`${API_BASE_URL}/api/rooms/${item?.roomId}`)
            setRoom(response.data);
        };

        // const fetchHotel = async () => {
        //     const response = await apiGetHotelByID(item.hotelId);
        //     setHotel(response.data);
        // };

        fetchRoom();
        // fetchHotel();
        // dispatch(getRoomById(item?.roomId))
    }, [item.roomId]);


    const handleCancelBooking = () => {
        const status = {
            status: "Đã hủy"
        }
        dispatch(updateBookingStatus(status, item.id));
    };

    return (
        <div className='border border-gray-200 rounded-xl bg-white shadow-lg px-5 pb-5 flex flex-col pt-3'>
            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-7 w-2/3 '>
                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' alt="hotel" />
                    <div>
                        <h1 className='font-bold text-lg'>{room?.house.name}</h1>
                        <div className='flex items-center gap-12'>
                            <p className='text-gray-800 text-sm'>{`Mã đặt chỗ: ${item?.confirmationCode}`}</p>
                            <p className='text-gray-800 text-sm'>{`Trạng thái: ${item?.status}`}</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-1/3'>
                    <button onClick={handleCancelBooking}
                        className={`px-2 py-1 rounded-lg text-white 
                            ${item?.status === 'Đang chờ duyệt' ? 'bg-orange-600 hover:bg-orange-400' : 'bg-gray-400'}`}
                    >
                        Hủy đăng ký
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-[72px]'>
                <div className='pt-2 w-2/3'>
                    <p className='font-semibold text-center'>Thông tin phòng</p>
                    <div className='w-full flex gap-5'>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <p className='text-base text-gray-700'>{`Loại phòng: ${room?.roomType.name}`}</p>
                            <p className='text-base text-gray-700'>{`Trạng thái phòng: ${room?.availability}`}</p>
                            <p className='text-base text-gray-700'>{`Khách: ${item.adults} người lớn, ${item.children} trẻ em`}</p>
                            <p className='text-base text-gray-700'>{`Ngày đặt: ${item?.startDate}`}</p>
                        </div>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <p className='text-base text-gray-700'>{`ID phòng:  ${room?.id}`}</p>
                            <p className='text-base text-gray-700'> {`***`} </p>
                            <p className='text-base text-gray-700'>{`Tổng tiền: ${formatMonneyVietNam(room?.price || 0)}`}</p>
                            <p className='text-base text-gray-700'>{`Hạn: ${item?.endDate}`}</p>
                        </div>
                    </div>
                </div>
                <img src={room?.image ? `data:image/png;base64,${room?.image}` : null}
                    className='w-[100px] h-[100px] object-cover rounded-lg' alt="room"
                />
            </div>
        </div>
    );
};

export default MybookingsItem;
