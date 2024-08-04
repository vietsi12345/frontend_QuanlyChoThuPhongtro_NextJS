"use client"
import React, { useEffect, useState } from 'react'
import icons from '@/ultils/icon'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam'
import { formatVietNameseToSring } from '@/ultils/common/formatVietNameseToSring'
import { useSearchParams } from 'next/navigation'
import { getRoomById } from '@/redux/room/Action'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/app/LoadingProvider'
import axios from 'axios'
import { createPayment } from '@/redux/payment/Action'
import { API_BASE_URL } from '@/config/Api'
import { getUserByJwt } from '@/redux/auth/Action'


const { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, GoDotFill, FaCheck, RxAvatar } = icons

const PaymentV2 = () => {
    const [time, setTime] = useState(10 * 60 + 0) // set thời gian đếm ngược là 10 phút
    const [selectedOption, setSelectedOption] = useState('Momo');
    const [isShowOptioneMomo, setIsShowOptioneMomo] = useState(true)
    const { user } = useSelector(state => state.auth)
    const { room } = useSelector(state => state.room)
    const { payment } = useSelector(state => state.payment)
    const router = useRouter()
    const dispatch = useDispatch()
    const { setIsLoading } = useLoading()

    // console.log(confirmationCode)
    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        if (value === 'Momo') {
            setIsShowOptioneMomo(true);
        } else {
            setIsShowOptioneMomo(false);
        }
    };

    const goHome = async () => {
        setIsLoading(true)
        router.push('/')
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [time])
    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;
    useEffect(() => {
        dispatch(getUserByJwt(jwt))
    }, [user])

    //
    const searchParams = useSearchParams();
    const roomPrice = searchParams.get("roomPrice")
    const totalService = searchParams.get("totalService")
    const totalAmount = searchParams.get("totalAmount")
    const billMonth = searchParams.get("billMonth")
    const dueDate = searchParams.get("dueDate")
    const roomId = searchParams.get("roomId")
    const invoiceId = searchParams.get("invoiceId")
    //

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getRoomById(roomId))
    }, [])


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `00:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    const handlePayment = async (redirectUrl, amount) => {
        if (!isShowOptioneMomo) {
            const data = {
                paymentMethod: "ZaloPay",
                amount: amount,
                invoiceId: invoiceId
            }
            const response = await axios.post(`${API_BASE_URL}/api/payments`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const redirectUrlFinal = `${redirectUrl}?paymentId=${response.data.id}`
            console.log(redirectUrlFinal)
            try {
                // const paymentData = await apiZaloPay({ redirectUrl, amount });
                const response = await axios.post('http://localhost:8888/payment/zalopay', {
                    redirectUrl: redirectUrlFinal,
                    amount
                });
                // Xử lý dữ liệu phản hồi, ví dụ: chuyển hướng người dùng tới URL thanh toán
                window.location.href = response.data.order_url;
            } catch (error) {
                console.error("Error during payment:", error);
            }
        }
        else { // thanh toán momo
            const data = {
                paymentMethod: "MoMo",
                amount: amount,
                invoiceId: invoiceId
            }
            const response = await axios.post(`${API_BASE_URL}/api/payments`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const redirectUrlFinal = `${redirectUrl}?paymentId=${response.data.id}`
            console.log(redirectUrlFinal)
            try {
                // const paymentData = await apiZaloPay({ redirectUrl, amount });
                const response = await axios.post('http://localhost:8888/payment/momo', {
                    redirectUrl: redirectUrlFinal,
                    amount
                });
                // Xử lý dữ liệu phản hồi, ví dụ: chuyển hướng người dùng tới URL thanh toán
                window.location.href = response.data.payUrl;
            } catch (error) {
                console.error("Error during payment:", error);
            }
        }
    };


    return (
        <div className='bg-[#F7F9FA] w-full '>
            <div className='bg-[#FFFFFF] w-full h-[58px]  flex items-center justify-around'>
                <img src='https://gcs.tripi.vn/public-tripi/tripi-feed/img/475201KCm/anh-mo-ta.png'
                    className='w-[108px] h-[58px] object-cover cursor-pointer'
                    onClick={goHome}
                />
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber1 size={20} />
                        <span>Xác thực</span>
                    </div>
                    <span >----- </span>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber2 size={20} color='blue' />
                        <span>Thanh toán</span>
                    </div>
                    <span >----- </span>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber3 size={20} />
                        <span>Gửi phiếu xác nhận</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-10'>
                <div className='w-[1080px] '>
                    <div className='flex gap-3'>
                        <div className='w-3/5 flex flex-col gap-6 '>
                            <div className='p-4 flex gap-2 bg-[#0078d7] rounded-lg'>
                                <span className='text-white'>Đừng lo lắng, giá vẫn giữ nguyên. Hoàn tất thanh toán của bạn bằng</span>
                                <span className='text-green-300 font-semibold'>{formatTime(time)}</span>
                                <span className="clock-icon ">🕒</span>
                            </div>
                            <div className='flex justify-between p-5 mt-3'>
                                <h1 className='text-xl font-semibold'>Bạn muốn thanh toán thế nào?</h1>
                                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2023/12/12/1702364449716-d0093df3166e4ba84c56ad9dd75afcda.webp?tr=h-23,q-75'
                                    className='w-[83px] h-[23px] object-contain'
                                />
                            </div>
                            <div className='flex gap-3 items-center px-4'>
                                <input
                                    type='radio'
                                    id='Momo'
                                    name='payment'
                                    value='Momo'
                                    checked={selectedOption === 'Momo'}
                                    onChange={handleChange}
                                    className='size-6'
                                />
                                <label htmlFor='Momo' className='text-xl font-semibold'>Momo</label>
                                <span className='bg-[#DDFEB4] text-sm'>Ưu đãi giảm giá</span>
                                <img src='https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png'
                                    className='w-[50px] h-[24px] object-contain mr-2 ml-auto'
                                />
                            </div>
                            {isShowOptioneMomo && <div className='mx-8 flex flex-col gap-2 bg-blue-100 p-3 rounded-xl border border-blue-700'>
                                <div className='flex  gap-2'>
                                    <GoDotFill size={15} />
                                    <span className='text-sm'>Đảm bảo bạn có ví điện tử hoặc ứng dụng ngân hàng di động hỗ trợ thanh toán bằng Momo.</span>
                                </div>
                                <div className='flex  gap-2'>
                                    <GoDotFill size={15} />
                                    <span className='text-sm'>`Mã QR sẽ xuất hiện sau khi bạn nhấp vào nút &apos;Thanh toán&apos;. Chỉ cần lưu hoặc chụp màn hình mã QR.`</span>
                                </div>
                                <div className='flex  gap-2'>
                                    <GoDotFill size={15} />
                                    <span className='text-sm'>Vui lòng sử dụng mã QR mới nhất được cung cấp để hoàn tất thanh toán của bạn.</span>
                                </div>
                            </div>}
                            <div className='flex gap-3 items-center px-4'>
                                <input
                                    type='radio'
                                    id='zalopay'
                                    name='payment'
                                    value='zalopay'
                                    checked={selectedOption === 'zalopay'}
                                    onChange={handleChange}
                                    className='size-6'
                                />
                                <label htmlFor='zalopay' className='text-xl font-semibold'>ZaloPay</label>
                                <span className='bg-[#DDFEB4] text-sm'>Ưu đãi giảm giá</span>
                                <img src='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png'
                                    className='w-[50px] h-[24px] object-contain mr-2 ml-auto'
                                />
                            </div>
                            {!isShowOptioneMomo && <div className='mx-8 flex flex-col gap-2 bg-blue-100 p-3 rounded-xl border border-blue-700'>
                                <div className='flex  gap-2'>
                                    <GoDotFill size={15} />
                                    <span className='text-sm'>Đảm bảo bạn có ví điện tử hoặc ứng dụng ngân hàng di động hỗ trợ thanh toán bằng ZaloPay.</span>
                                </div>
                                <div className='flex  gap-2'>
                                    <GoDotFill size={15} />
                                    <span className='text-sm'>Mã QR sẽ xuất hiện sau khi bạn nhấp vào nút &apos;Thanh toán&apos;. Chỉ cần lưu hoặc chụp màn hình mã QR.</span>
                                </div>
                                <div className='flex  gap-2'>
                                    <GoDotFill size={15} />
                                    <span className='text-sm'>Vui lòng sử dụng mã QR mới nhất được cung cấp để hoàn tất thanh toán của bạn.</span>
                                </div>
                            </div>}
                            <div className='flex flex-col gap-3'>
                                <div className='flex justify-between p-3'>
                                    <span className='font-bold text-xl'>Tổng giá</span>
                                    <span className='font-bold text-xl text-orange-500'>{formatMonneyVietNam(+totalAmount)}</span>
                                </div>
                                <div className='p-5 bg-white rounded-lg flex flex-col gap-3'>
                                    <button
                                        className='bg-orange-500 text-white font-semibold text-lg p-3 rounded-lg hover:bg-orange-700'
                                        onClick={() => handlePayment(`http://localhost:3000/payment/v3`, totalAmount)}
                                    >
                                        {isShowOptioneMomo ? `Thanh toán bằng Momo` : `Thanh toán bằng ZaloPay`}
                                    </button>
                                    <span className='text-sm text-center'>Bằng việc tiếp tục thanh toán, bạn đã đồng ý với Điều khoản & Điều kiện cũng như Chính sách quyền riêng tư của Traveloka.</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5  rounded-md flex flex-col gap-5'>
                            <div className=' rounded-md '>
                                <div className='flex items-center gap-3 p-4 justify-center bg-white rounded-md'>
                                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' />
                                    <div>
                                        <h3 className='font-semibold text-base'>Tóm tắt nhà trọ</h3>
                                        <span className='text-sm text-gray-500'>{`${room?.house?.name}`}</span>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-col justify-center '>
                                    <h3 className='font-semibold text-base text-center'>{room?.house?.name}</h3>
                                    <div className='flex gap-5 px-4 justify-center' >
                                        <span className='text-base text-gray-500'>Hóa đơn tháng: </span>
                                        <span className='text-base text-black'>{`${billMonth}`}</span>
                                    </div>
                                    <div className='flex gap-5 px-4 justify-center'>
                                        <span className='text-base text-gray-500'>Hạn thanh toán: </span>
                                        <span className='text-base text-black'>{`${dueDate}`}</span>
                                    </div>
                                </div>
                                <div className='bg-white flex flex-col p-4 gap-3 rounded-md'>
                                    <h3 className='font-semibold  mt-3'>{room?.roomType?.name}</h3>
                                    <div className='flex gap-3 items-center'>
                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/089ab79c91e595414ce6be5e7c98aa39.svg' />
                                        <span className='text-base text-gray-600'>Breakfast included for 1 pax</span>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bf6a43a380752458f8ff4bcf166ccd42.svg' />
                                        <span className='text-base text-gray-600'>1 Giường Đôi Và 1 Giường Đơn</span>
                                    </div>
                                    <div className='flex gap-3 items-center border-b border-gray-300 pb-3'>
                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f0f6df93a9354e95d086ef2f54fd33d.svg' />
                                        <span className='text-base text-gray-600'>Wifi free</span>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold mt-3'>Tên khách</h3>
                                        <span className='text-base text-gray-600'>{user?.fullName}</span>
                                        <div className='flex items-center gap-2 px-3'>
                                            <FaCheck color='green' />
                                            <span className='text-base text-black'>Miễn phí hủy phòng</span>
                                        </div>
                                        <div className='flex items-center gap-2 px-3'>
                                            <FaCheck color='green' />
                                            <span className='text-base text-black'>Có thể đổi lịch</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 bg-white rounded-lg flex flex-col gap-2'>
                                <span className='font-semibold'>Chi tiết người liên lạc</span>
                                <div className='flex items-center gap-3'>
                                    <RxAvatar size={25} />
                                    <div className='flex flex-col'>
                                        <span className='text-base'>{user?.fullName}</span>
                                        <span className='text-base text-gray-600'>{user?.phone}</span>
                                        <span className='text-base text-gray-600'>{user?.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {time === 0 && <div className='fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] z-20 flex items-center justify-center'>
                <div className='bg-white w-1/3 rounded-md p-4 flex flex-col gap-3'>
                    <h2 className='font-bold text-xl text-center'>Phiên thanh toán của bạn đã kết thúc</h2>
                    <span className='text-center'>Rất tiếc, bạn không thể tiếp tục đặt phòng này. Nếu bạn đã thanh toán, vui lòng xác nhận thanh toán của bạn. Hoặc bạn có thể quay lại trang chủ để đặt lại.</span>
                    <button onClick={goHome} className='bg-gray-200 text-blue-600 font-semibold p-2 rounded-md hover:bg-gray-300 mx-8'>Quay lại trang chủ</button>
                </div>
            </div>}
        </div>
    )
}

export default PaymentV2
