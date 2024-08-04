import React, { useState, useEffect } from 'react';
import icons from '../../../../ultils/icon';

const arrBtn = [
    {
        id: 'tongquan',
        value: 'Tổng quan'
    },
    {
        id: 'phong',
        value: 'Phòng'
    },
    {
        id: 'kslq',
        value: 'Khánh sạn liên quan'
    },
    {
        id: 'ti',
        value: 'Tiện ích'
    },
    {
        id: 'danhgia',
        value: 'Đánh giá'
    },
    {
        id: 'vitri',
        value: 'Vị trí'
    },
    {
        id: 'chinhsach',
        value: 'Chính sách'
    },
]
const { GoUpload } = icons

const NavbarDetail = ({ price }) => {
    const [isGoNavBar, setisGoNavBar] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null); // State để theo dõi nút nào đang được chọn
    const [btnActiveScroll, setBtnActiveScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Điều kiện tùy vào chiều cao của phần tử bạn muốn cuộn qua
            if (window.scrollY > 390) { // Ví dụ: 300px, bạn có thể điều chỉnh giá trị này
                setisGoNavBar(true);
            } else {
                setisGoNavBar(false);
            }
            arrBtn.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const postionYFirst = rect.top + window.scrollY // lấy ra tọa độ Y1 vị trí của phần tử đó
                    const postionYEnd = postionYFirst + rect.height
                    if (window.scrollY >= postionYFirst - 120 && window.scrollY <= postionYEnd - 120) { //120 là chiều cao của thanh search và thanh navbar
                        setActiveIndex(item.id);
                    }
                    // else setActiveIndex(null)
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonActive = (id) => {
        setActiveIndex(id); // Cập nhật state để chỉ định nút đang được chọn
        // Tìm phần tử cần cuộn tới
        const element = document.getElementById(id);

        // Cuộn tới vị trí của phần tử
        if (element) {
            const rect = element.getBoundingClientRect();
            const postionY = rect.top + window.scrollY // lấy ra tọa độ Y vị trí của phần tử đó
            window.scrollTo({
                top: postionY - 120, //120 là chiều cao của thanh search và thanh navbar
                behavior: 'smooth'
            })
            // element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => { // button quay lên đầu trang
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Cuộn mượt
        });
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 520 - 120 && window.scrollY <= 616 - 120) {
            setBtnActiveScroll(true)
        }
        else setBtnActiveScroll(false)
    });



    const isNavbarHeader = ''
    const activeButton = 'h-full hover:text-blue-500 text-blue-500 border-b-4 border-blue-400'
    const noActiveButton = 'h-full hover:text-blue-500'

    return (
        <div className={`sticky top-[70px]  h-[50px] flex items-center justify-center ${isGoNavBar ? 'w-full shadow-xl flex bg-white ' : 'w-[1100px] border border-gray-300'}`}>
            <div className='w-3/5 flex items-center h-full justify-center gap-5 '>
                {arrBtn.map(item => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleButtonActive(item.id)}
                            className={activeIndex === item.id ? activeButton : noActiveButton}>
                            {item.value}
                        </button>
                    )
                })}
            </div>
            <div className='w-2/5 flex gap-4 items-center justify-center'>
                <span className='text-lg text-red-600 font-semibold'>{`${price}`}</span>
                <button className='bg-blue-600 rounded-xl hover:bg-blue-400 w-[192px] h-[36px] '>
                    <span className='font-semibold text-white '>Xem thỏa thuận này</span>
                </button>
                {isGoNavBar ? <div onClick={scrollToTop}
                    className='flex items-center gap-1 cursor-pointer hover:text-gray-400'
                >
                    <div className='font-semibold'> Trở lại đầu trang </div>
                    <GoUpload size={19} />
                </div> : ''}
            </div>
        </div>
    );
}

export default NavbarDetail;
