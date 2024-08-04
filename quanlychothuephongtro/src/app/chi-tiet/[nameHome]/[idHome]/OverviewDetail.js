import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam'
import React from 'react'

const OverviewDetail = ({ name, address, description, services }) => {
    return (
        <div id='tongquan' className='w-[1100px] flex gap-4'>
            <div className='w-2/3 flex flex-col gap-4'>
                <div id='motacannha' className='border border-gray-300 flex flex-col  p-5 gap-3'>
                    <div className='flex gap-5  '>
                        <div className='bg-[rgba(12,133,12,0.76)] flex items-center gap-2 border border-green-700'>
                            <img src='https://cdn6.agoda.net/images/agoda-homes/homes-logo.svg'
                                alt='logo'
                                className='w-[18px] h-[18px] object-cover'
                            />
                            <span>agodaHomes</span>
                        </div>
                        <img src='https://cdn6.agoda.net/images/MIN-11586/default/agoda_preferred_logo.png' alt='logo'
                            className='w-[94px] h-[26px] object-cover'
                        />
                    </div>
                    <div className='border-b border-gray-300'>
                        <p className='font-bold text-3xl'>{name}</p>
                        <div className='flex gap-1 mb-4 cursor-pointer hover:underline'>
                            <p>{`${address} -`}</p>
                            <p className='text-blue-400'> SEE MAP</p>
                        </div>
                    </div>
                    <div className='text-base'>
                        {description}
                    </div>
                </div>
                <div id='diemnoibat' className='border border-gray-300 p-3 flex flex-col gap-4'>
                    <span className='font-medium text-lg'>Điểm nổi bật</span>
                    <div className='flex'>
                        <div className='flex flex-col items-center w-1/5'>
                            <img src='https://cdn6.agoda.net/images/property/highlights/bus.svg' />
                            <span className='text-sm text-center'>990 mét đến phương tiện công cộng </span>
                        </div>
                        <div className='flex flex-col items-center w-1/5'>
                            <img src='https://cdn6.agoda.net/images/property/highlights/like.svg' />
                            <span className='text-sm text-center'>Tuyệt vời cho các hoạt động </span>
                        </div>
                        <div className='flex flex-col items-center w-1/5'>
                            <img src='https://cdn6.agoda.net/images/property/highlights/medal.svg' />
                            <span className='text-sm text-center'>Giá trị hàng đầu </span>
                        </div>
                        <div className='flex flex-col items-center w-1/5'>
                            <img src='https://cdn6.agoda.net/images/property/highlights/spray.svg' />
                            <span className='text-sm text-center'>Lấp lánh sạch sẽ </span>
                        </div>
                        <div className='flex flex-col items-center w-1/5'>
                            <img src='https://cdn6.agoda.net/images/property/highlights/bedKing.svg' />
                            <span className='text-sm text-center'>Phòng tiện nghi và chất lượng tuyệt vời </span>
                        </div>
                    </div>
                </div>
                <div id='tienichchinh' className='border border-gray-300 p-3 flex flex-col gap-4'>
                    <span className='font-medium text-lg'>Dịch vụ</span>
                    <div className='flex flex-wrap gap-4'>
                        {services.map((item, index) =>
                            <div key={index} className='flex flex-col items-center w-1/7'>
                                <img src='https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-room-service-line-icon-vector-png-image_1886393.jpg'
                                    className='w-[33px] h-[32px] object-cover'
                                />
                                <span className='text-sm text-center'>{`${item?.name}: ${formatMonneyVietNam(item?.unitPrice)}/${item?.unit}`}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='w-1/3 flex flex-col gap-4'>
                <div id='chamdiiem' className='border border-gray-300 p-5 flex flex-col'>
                    <span className='font-bold text-2xl'>9,0 Đặc biệt</span>
                    <span className='text-blue-600 font-medium'>628 đánh giá</span>
                    <div className='mt-3 flex gap-2'>
                        <span className='bg-[#D8F5D5] px-3 text-sm'> Vị trí 9,4</span>
                        <span className='bg-[#D8F5D5] px-3 text-sm'> Cơ sở vật chất 9,3</span>
                    </div>
                    <div className='mt-1 flex gap-2'>
                        <span className='bg-[#D8F5D5] px-3 text-sm'> Giá trị đồng tiền 9,3</span>
                        <span className='bg-[#D8F5D5] px-3 text-sm'> Sạch sẽ 9,2</span>
                    </div>
                </div>
                <div id='giodky' className='border border-gray-300 p-5 h-[142px]'>
                    <div className='flex justify-between border-b border-gray-300 pb-4'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Đăng ký vào:</span>
                            <span className='text-base'>14:00 đến 22:00</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Thủ tục thanh toán:</span>
                            <span className='text-base'>14:00 đến 22:00</span>
                        </div>
                    </div>
                    <button className='pt-3 ml-40 text-blue-600 font-semibold'>Xem thêm thông tin</button>
                </div>
                <div id='ggmap' className='border border-gray-300 h-[280px]'>
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.520072541675!2d106.78408977451805!3d10.847992257870672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752772b245dff1%3A0xb838977f3d419d!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCQ1ZUIGPGoSBz4bufIHThuqFpIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1718362080188!5m2!1svi!2s"
                        className='w-full h-full'
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe> */}
                </div>
            </div>
        </div>
    )
}

export default OverviewDetail
