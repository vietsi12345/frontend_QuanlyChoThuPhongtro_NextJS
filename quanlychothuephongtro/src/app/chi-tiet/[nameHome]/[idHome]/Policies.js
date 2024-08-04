import React from 'react'
import icons from '../../../../ultils/icon'


const { CiClock2 } = icons

const Policies = ({ name }) => {
    return (
        <div id='chinhsach' className='w-[1100px] flex'>
            <div className='w-1/3 bg-[#c5dcea] rounded-md p-3 pt-5 px-4'>
                <h2 className='font-semibold text-lg'> {`Chính sách và những thông tin liên quan của ${name}`}</h2>
            </div>
            <div className='w-2/3 bg-white'>
                <div className='flex m-5 gap-3 pt-4 pb-5 border-b border-gray-300'>
                    <CiClock2 size={24} />
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold text-sm'>Thời gian nhận phòng/trả phòng</h4>
                        <div className='flex gap-3'>
                            <div className='flex gap-2' >
                                <p className='text-gray-700 text-sm'>Giờ nhận phòng:</p>
                                <p className='font-semibold text-sm'>Từ 15:00</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-gray-700 text-sm'>Giờ Trả phòng:</p>
                                <p className='font-semibold text-sm'>Trước 12:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex m-5 gap-3 pb-5 border-b border-gray-300'>
                    <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/07/20/1658303119103-94f9989225fde9bbfebe9c00ba9b4d5b.png?tr=h-24,q-75,w-24'
                        className='w-[24px] h-[24px]'
                    />
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold text-sm'>Lưu Ý về Tiện Ích</h4>
                        <p className='text-gray-700 text-sm'>Sảnh mở cửa cho số lượng khách giới hạn mỗi ngày từ 1-9-2023 đến 30-6-2024.</p>
                    </div>
                </div>
                <div className='flex m-5 gap-3 pb-5 border-b border-gray-300'>
                    <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/07/20/1658303166332-9509e705d4f7add6f628bb488b7a39f8.png?tr=h-24,q-75,w-24'
                        className='w-[24px] h-[24px]'
                    />
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold text-sm'>Hướng Dẫn Nhận Phòng Chung</h4>
                        <p className='text-gray-700 text-sm'>Deposit fee: 1,000 THB in cash or Credit Card
                            hotel will undertake scheduled renovation works for the Lobby from 1 September 2023 to 30 June 2024.Some disruption caused by construction noise will be present at the hotel from 09:00 to 18:00.</p>
                    </div>
                </div>
                <div className='flex flex-col m-5 pb-5'>
                    <h4 className='font-bold text-blue-700 text-lg'>Thông tin chung</h4>
                    <div className='flex'>
                        <div className='w-1/3'>
                            <p className='text-gray-700 text-sm bg-gray-100 p-2'>Tiện ích chung</p>
                            <p className='text-gray-700 text-sm  p-2'>Thời gian nhận/trả phòng</p>
                            <p className='text-gray-700 text-sm bg-gray-100 p-2'>Khoảng cách đến trung tâm thành phố</p>
                            <p className='text-gray-700 text-sm  p-2'>Điểm đến phổ biến</p>
                            <p className='text-gray-700 text-sm bg-gray-100 p-2'>Có ăn sáng</p>
                        </div>
                        <div className='w-2/3'>
                            <p className='text-gray-700 text-sm bg-gray-100 p-2'>Máy lạnh, Nhà hàng, Hồ bơi, Lễ tân 24h, Chỗ đậu xe, Thang máy</p>
                            <p className='text-gray-700 text-sm  p-2'>Từ 15:00 - Trước 12:00</p>
                            <p className='text-gray-700 text-sm bg-gray-100 p-2 h-[56px]'>1.06 km</p>
                            <p className='text-gray-700 text-sm  p-2'>Pratunam Market, Chulalongkorn University, Sala Daeng BTS Station</p>
                            <p className='text-gray-700 text-sm bg-gray-100 p-2'>Có</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Policies
