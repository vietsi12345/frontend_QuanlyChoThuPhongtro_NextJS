import React from 'react'

const Info = () => {
    return (
        <div className='w-full bg-slate-900 flex flex-col items-center gap-10 p-10'>
            <div className='flex flex-col'>
                <span className='text-white text-center'>
                    Mọi nội dung tại đây © 2005 – 2024 Công ty TNHH Tư nhân Agoda. Bảo Lưu Mọi Quyền.
                </span>
                <span className='text-white'>  Agoda.com là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.
                </span>
            </div>
            <div className='flex'>
                <img src='https://dongphucvina.vn/wp-content/uploads/2023/08/Letter-S-Leaf-Logo-1-400x400.jpeg' alt='Sĩ'
                    className='w-[144px] h-[48px] object-contain'
                />
                <img src='https://dongphucvina.vn/wp-content/uploads/2023/08/Thesaurus-Logo-_-Real-Company-_-Alphabet-Letter-T-Logo-400x400.png' alt='Thành'
                    className='w-[144px] h-[48px] object-contain'
                />
                <img src='https://dongphucvina.vn/wp-content/uploads/2023/08/H-Hand-Care-Logo-400x400.jpeg' alt='Hiếu'
                    className='w-[144px] h-[48px] object-contain'
                />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5vVeqIalFZW9YaGOXQE9vTeCBTtxyUx46eEQEB2jRg&s' alt='Nam'
                    className='w-[144px] h-[48px] object-contain'
                />
                <img src='https://gudlogo.com/wp-content/uploads/2019/04/chu%CC%9B%CC%83-D.jpg' alt='Đạt'
                    className='w-[144px] h-[48px] object-contain'
                />
            </div>
        </div>
    )
}

export default Info
