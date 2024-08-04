import React from 'react'

const Contact = () => {
    return (
        <div className='w-full bg-gray-200 flex justify-around px-20 p-10'>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Trợ giúp</h3>
                <div className='flex flex-col'>
                    <h3>Trung tâm trợ giúp</h3>
                    <h3>Câu hỏi thường gặp</h3>
                    <h3>Chính sách Bảo mật</h3>
                    <h3>Chính sách về cookie</h3>
                    <h3>Điều khoản sử dụng</h3>
                    <h3>Quản lý thiết lập cookie</h3>
                    <h3>Đạo luật Dịch vụ số (EU)</h3>
                    <h3>Nguyên tắc và báo cáo nội dung</h3>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Công ty</h3>
                <div className='flex flex-col'>
                    <h3>Về chúng tôi</h3>
                    <h3>Tuyển dụng</h3>
                    <h3>Báo chí</h3>
                    <h3>Nhật ký mạng</h3>
                    <h3>PointsMAX</h3>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Điểm du lịch</h3>
                <div className='flex flex-col'>
                    <h3>Quốc gia</h3>
                    <h3>Thành phố</h3>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Đối tác của chúng tôi</h3>
                <div className='flex flex-col'>
                    <h3>Cổng thông tin đối tác YCS</h3>
                    <h3>Partner Hub</h3>
                    <h3>Quảng cáo trên Agodat</h3>
                    <h3>Đối tác liên kết</h3>
                    <h3>Đối tác kết nối</h3>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold'>Tải ứng dụng</h3>
                <div className='flex flex-col'>
                    <h3>Ứng dụng iOS</h3>
                    <h3>Ứng dụng Android</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact
