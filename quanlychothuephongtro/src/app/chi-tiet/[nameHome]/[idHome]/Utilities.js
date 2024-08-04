import React from 'react'
import icons from '../../../../ultils/icon'

const { IoIosCheckmark } = icons

const Utilities = ({ name }) => {
    return (
        <div id='ti' className='w-[1100px] bg-white py-7 px-5 rounded-xl flex flex-col gap-7'>
            <h2 className='font-bold text-lg '>{`Tất cả những tiện ích tại ${name}`}</h2>
            <div className='flex flex-wrap '>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/23/1482486478659-e5dc2da7d82c6e7f84df2d6da0cc611b.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Dịch vụ khách sạn</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Nhân viên xách hành lý</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Dịch vụ concierge/hỗ trợ khách</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Dịch vụ thu đổi ngoại tệ</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>EARLY_CHECK_IN</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Quầy lễ tân</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Lễ tân 24h</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bảo vệ 24 giờ</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Dịch vụ trả phòng muộn</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Dịch vụ giặt ủi</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303125539-7b3d286227796ff15b7ea10423eed047.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Tiện nghi công cộng</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bãi đậu xe</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Thang máy</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Nhà hàng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Nhà hàng phục vụ bữa sáng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Nhà hàng phục vụ bữa tối</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Nhà hàng phục vụ bữa trưa</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Dịch vụ dọn phòng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>DKét an toàn</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>WiFi tại khu vực chung</span>
                    </div>
                </div>
                <div className='w-1/3  flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303267558-027736faae615602d02d68900e440901.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Tiện nghi phòng</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Truyền hình cáp</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bàn làm việc</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Máy sấy tóc</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Két an toàn trong phòng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Minibar</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Tủ lạnh</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Phòng tắm vòi sen</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>TV</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303291459-90dd5748fca9d3c23751e007e6033cf2.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Các tiện ích lân cận</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Máy ATM/Ngân hàng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Thẩm mỹ viện</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Cửa hàng quà tặng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Cửa hàng thực phẩm</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Hiệu làm tóc</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Giặt ủi</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Cửa hàng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Siêu thị</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/23/1482486531890-cbaee7be1e0c71e690dba61a3ea68ae0.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Tiện nghi chung</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Máy lạnh</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Phòng liên thông</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Phòng gia đình</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Máy sưởi</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Phòng không hút thuốc</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Không khói thuốc</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Sân thượng/sân hiên</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303254515-bd78d369590cba427807f5b7b3df6022.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Ẩm thực</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bữa sáng với thực đơn gọi món</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bữa tối với thực đơn gọi món</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bữa trưa với thực đơn gọi món</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Nhà hàng có máy lạnh</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bữa sáng</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bữa sáng phục vụ món nóng</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303162984-24ed7bc5b92323ed368b29084492c2ce.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Tiện nghi văn phòng</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Máy tính</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Phòng hội nghị</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Tiện nghi hội họp</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Máy chiếu</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Nhà hát</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303369740-ad3659ca926b2a531848e977419027a3.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Vận chuyển</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bãi đậu xe hạn chế</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Bãi đậu xe (thu phí)</span>
                    </div>

                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303142181-b0683ff6bd673c9e0bf035cefb9c3811.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Hỗ trợ người khuyết tật</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Trang bị phòng phù hợp với người khuyết tật</span>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Phù hợp cho xe lăn</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303445040-27efd5874b7249a341778d5bb6c013f1.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Các hoạt động</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Trung tâm thể dục thể hình</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303184657-1997b10ede4170e61600e707c818f0cf.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Kết nối mạng</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Wifi (miễn phí)</span>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3 p-3'>
                    <div className='flex items-center gap-2'>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/21/1482303399632-cdb40cc0cf84b0628b1fbba87818dca0.png'
                            className='w-[24px] h-[24px] object-cover'
                        />
                        <h3 className='font-semibold text-base '>Thể thao & Giải trí</h3>
                    </div>
                    <div className='flex items-center px-2'>
                        <IoIosCheckmark size={24} />
                        <span>Trung tâm thể dục thể hình</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utilities
