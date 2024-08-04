import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { formatMonneyVietNam } from '../../../ultils/common/formatMonneyVietNam';
import { getRoomById } from '@/redux/room/Action';



const BookingDetailAdmin = ({ item }) => {
  const dispatch = useDispatch();
  const { room } = useSelector(state => state.room);

  useEffect(() => {
    dispatch(getRoomById(item.roomId))
  }, []);

  return (
    <div className='border border-gray-200 rounded-xl bg-white shadow-lg px-5 pb-5 flex flex-col pt-3'>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-7 w-2/3 '>
          <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' alt="hotel" />
          <div>
            <h1 className='font-bold text-lg'>{room?.name}</h1>
            <div className='flex items-center gap-12'>
              <p className='text-gray-800 text-sm'>{`Mã đặt chỗ: ${item?.confirmationCode}`}</p>
              <p className='text-gray-800 text-sm'>{`Trạng thái: ${item?.status}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='pt-2'>
          <p className='font-semibold text-center'>Thông tin phòng</p>
          <div className=' flex gap-5  w-[500px]'>
            <div className='flex flex-col gap-1 w-1/2'>
              <p className='text-base text-gray-700'>{`Loại phòng: ${room?.roomType.name}`}</p>
              <p className='text-base text-gray-700'>{`Khách: ${item.adults} người lớn, ${item.children} trẻ em`}</p>
              <p className='text-base text-gray-700'>{`Ngày nhận phòng: ${item?.startDate}`}</p>
            </div>
            <div className='flex flex-col gap-1 w-1/2'>
              <p className='text-base text-gray-700'>{`ID phòng:  ${item?.roomId}`}</p>
              <p className='text-base text-gray-700'>{`Giá phòng:  ${formatMonneyVietNam(room?.price || 0)}`}</p>
              <p className='text-base text-gray-700'>{`Ngày trả phòng: ${item?.endDate}`}</p>
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

export default BookingDetailAdmin;
