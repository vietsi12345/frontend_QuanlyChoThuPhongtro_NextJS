"use client"

import React, { useEffect, useState } from 'react'
import icons from '@/ultils/icon';
import { useDispatch, useSelector } from 'react-redux'
import { GiPodiumSecond } from 'react-icons/gi';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';
import { getUserByJwt } from '@/redux/auth/Action';
import { getRoomById } from '@/redux/room/Action';
import { useLoading } from '@/app/LoadingProvider';

const { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, CiClock2, IoIosCloseCircle } = icons

const PaymentV1 = () => {
    const { user } = useSelector(state => state.auth)
    const { room } = useSelector(state => state.room)

    const { setIsLoading } = useLoading()

    const [isShowAcpectPayment, setIsShowAcpectPayment] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPhone, setErrorPhone] = useState('')

    const router = useRouter()
    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;

    const dispatch = useDispatch()

    //
    const searchParams = useSearchParams();
    const roomPrice = searchParams.get("roomPrice")
    const totalService = searchParams.get("totalService")
    const totalAmount = searchParams.get("totalAmount")
    const billMonth = searchParams.get("billMonth")
    const dueDate = searchParams.get("dueDate")
    const roomId = searchParams.get("roomId")
    //

    const hanldeClickBtnThanhToan = () => {
        let checkValidAll = true;

        if (!name) {
            setErrorName('Vui lòng điền đầy đủ họ và tên')
            checkValidAll = false
        } else setErrorName('')
        if (!email) {
            setErrorEmail('Vui lòng điền đầy đủ thông tin email')
            checkValidAll = false
        } else setErrorEmail('')
        if (!phone) {
            setErrorPhone('Vui lòng điền thông tin số điên thoại liên hệ')
            checkValidAll = false
        } else setErrorPhone('')
        // if (isShowNoMe) {
        //     if (!nameNoME) {
        //         setErrorNameNoMe('Vui lòng điền đầy đủ họ và tên khách')
        //         checkValidAll = false
        //     } else setErrorNameNoMe('')
        // }
        if (checkValidAll) {
            setIsShowAcpectPayment(true)
        }
    }

    const handleClickBtnThayDoi = (e) => {
        e.stopPropagation()
        setIsShowAcpectPayment(false)
    }

    const goHome = () => {
        setIsLoading(true)
        router.push('/')
    }


    const goPaymentV2 = () => {
        setIsLoading(true)
        router.push(`/payment/v2?${searchParams.toString()}`)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getUserByJwt(jwt))
        dispatch(getRoomById(roomId))
    }, [])

    useEffect(() => {
        if (user) {
            setName(user.fullName);
            setEmail(user.email)
            setPhone(user.phone)
        }
    }, [user]);

    return (
        <div className='bg-[#F7F9FA] w-full '>
            <div className='bg-[#FFFFFF] w-full h-[58px]  flex items-center justify-around'>
                <img src='https://gcs.tripi.vn/public-tripi/tripi-feed/img/475201KCm/anh-mo-ta.png'
                    className='w-[108px] h-[58px] object-cover cursor-pointer'
                    onClick={goHome}
                />
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber1 size={20} color='blue' />
                        <span>Xác thực</span>
                    </div>
                    <span >----- </span>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber2 size={20} />
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
                    <div className='p-4 flex flex-col gap-5'>
                        <h1 className='text-2xl font-semibold'>Đặt phòng của bạn</h1>
                        <span className='text-base text-gray-600'>Hãy đảm bảo tất cả thông tin chi tiết trên trang này đã chính xác trước khi tiến hành thanh toán.</span>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-3/5 flex flex-col gap-6'>
                            <div className='flex gap-2 items-center bg-white rounded-lg p-2'>
                                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2023/11/01/1698829542551-90fc7f7a6017f1edae48bde77fd42cd4.svg?tr=h-67,q-75,w-56'
                                    className='w-[56px] h-[57px]'
                                />
                                <div className='text-sm w-4/5'>Nhận ưu đãi độc quyền và tận hưởng nhiều lợi ích hơn khi bạn đăng nhập.</div>
                                <span className='text-blue-600 font-semibold text-sm text-center cursor-pointer'>Đăng nhập hoặc đăng ký</span>
                            </div>
                            <div className='bg-white rounded-lg p-4 pt-7 flex flex-col gap-2'>
                                <h3 className='font-semibold text-xl'>Thông tin liên hệ (Đối với E-Voucher)</h3>
                                <span className='text-sm text-gray-500'>Hãy điền chính xác tất cả thông tin để đảm bảo bạn nhận được Phiếu xác nhận  đặt phòng (E-voucher) qua email của mình.</span>
                                <div className='mt-7 flex flex-col gap-2'>
                                    <span>Họ và tên</span>
                                    <input
                                        type='email'
                                        className="outline-none border border-gray-300 p-2 rounded-md w-full"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {errorName && <div className='text-red-500 text-sm'>{errorName}</div>}
                                </div>
                                <div className='flex gap-3'>
                                    <div className='mt-7 flex flex-col gap-2 w-3/5'>
                                        <span>Email</span>
                                        <input
                                            type='email'
                                            className="outline-none border border-gray-300 p-2 rounded-md w-full"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>}
                                        <span className='text-sm text-gray-500'>Chúng tôi sẽ gửi e-voucher tới email này.</span>
                                    </div>
                                    <div className='mt-7 flex flex-col gap-2 w-2/5'>
                                        <span>Số điện thoại</span>
                                        <input
                                            type='phone'
                                            className="outline-none border border-gray-300 p-2 rounded-md w-full"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        {errorPhone && <div className='text-red-500 text-sm'>{errorPhone}</div>}
                                        <span className='text-sm text-gray-500'>ví dụ. +62812345678 gồm Mã quốc gia (+62) và Số di động 0812345678.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-5 rounded-lg flex flex-col gap-4'>
                                <h2 className='text-black font-semibold text-xl'>Chi tiết giá</h2>
                                <div className='flex justify-center gap-3'>
                                    <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/09/13/1663036323265-71c4f62650fd2a96cda8cd045e2ab935.webp?tr=h-16,q-75'
                                        className='w-[16px] h-[16px]'
                                    />
                                    <span className='text-sm text-blue-500 font-semibold'>Thuế và phí là các khoản được Traveloka chuyển trả cho khách sạn. Mọi thắc mắc về thuế và hóa đơn, vui lòng tham khảo Điều khoản và Điều kiện của Traveloka để được giải đáp</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Giá phòng</span>
                                    <span>{room?.price && formatMonneyVietNam(room?.price)}</span>
                                </div>
                                <div className='flex justify-between border-b border-black pb-3'>
                                    <span>Giá dịch vụ</span>
                                    <span>{formatMonneyVietNam(+totalService)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='font-bold text-xl'>Tổng giá</span>
                                    <span className='font-bold text-xl text-orange-500'>{formatMonneyVietNam(+totalAmount)}</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <CiClock2 size={20} color='blue' />
                                <span className='text-sm text-blue-600 font-semibold'>Hãy giữ phòng này ngay trước khi nó tăng cao hơn!</span>
                            </div>
                            <div className='p-5 bg-white rounded-lg flex flex-col gap-3'>
                                <button onClick={hanldeClickBtnThanhToan} className='bg-orange-500 text-white font-semibold text-lg p-3 rounded-lg hover:bg-orange-700'>Tiếp tục thanh toán</button>
                                <span className='text-sm text-center'>Bằng việc tiếp tục thanh toán, bạn đã đồng ý với Điều khoản & Điều kiện cũng như Chính sách quyền riêng tư của Traveloka.</span>
                            </div>
                        </div>
                        <div className='w-2/5  rounded-md flex flex-col gap-5'>
                            <div className=' rounded-md '>
                                <div className='flex items-center gap-3 p-4 justify-center bg-white rounded-md'>
                                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' />
                                    <div>
                                        <h3 className='font-semibold text-base'>{`Tên nhà trọ`}</h3>
                                        <span className='text-sm text-gray-500'>{`${room?.house?.name}`}</span>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-col justify-center '>
                                    <div className='flex gap-5 px-4'>
                                        <span className='text-base text-gray-500'>Hóa đơn tháng: </span>
                                        <span className='text-base text-black'>{`${billMonth}`}</span>
                                    </div>
                                    <div className='flex gap-5 px-4'>
                                        <span className='text-base text-gray-500'>Hạn thanh toán: </span>
                                        <span className='text-base text-black'>{`${dueDate}`}</span>
                                    </div>
                                </div>
                                <div className='bg-white flex flex-col p-4 gap-3 rounded-md'>
                                    <img src={room?.image ? `data:image/png;base64,${room?.image}` : null}
                                        className='w-[375px] h-[180px] shadow-xl mx-3 object-cover'
                                    />
                                    <h3 className='font-semibold text-lg mt-3'>{`${room?.roomType?.name}`}</h3>
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
                                    <div className='flex justify-between'>
                                        <span className='font-semibold'>Tổng giá hóa đơn</span>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-semibold text-orange-600'>{formatMonneyVietNam(+totalAmount)}</span>
                                            <div className='flex '>
                                                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2023/11/01/1698829441207-82213d07f4b2ba6faa56962a05138746.svg?tr=q-75'
                                                    className='w-[12px] h-[12px] object-cover'
                                                />
                                                <span className='text-sm text-green-500'>Giá tốt nhất</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 bg-white rounded-lg flex flex-col gap-5'>
                                <div className='flex gap-4'>
                                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/377593f86d55e9458089c177e9b5723a.svg' />
                                    <span className='font-semibold'> Chính sách hủy và đổi lịch</span>
                                </div>
                                <div className='text-sm px-3 bg-gray-100 rounded-md p-1'>
                                    Bạn có giá tốt nhất với phòng này!
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <IoIosCloseCircle color='gray' size={19} />
                                    <span className='font-semibold text-gray-500'> Chính sách hủy và đổi lịch.</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <IoIosCloseCircle color='gray' size={19} />
                                    <span className='font-semibold text-gray-500'> Non-reschedulable.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isShowAcpectPayment && <div onClick={() => setIsShowAcpectPayment(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] z-20 flex items-center justify-center'
            >
                <div onClick={(e) => {
                    e.stopPropagation()
                    setIsShowAcpectPayment(true)
                }}
                    className='bg-white w-1/3 rounded-md'
                >
                    <div className='flex p-3 gap-6'>
                        <img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/07/24/1500886087756-48f7e3513ab4f1227fc7a1e568a6ddc8.png?tr=h-151,w-130'
                            className='w-[130px] h-[151px] object-cover'
                        />
                        <div className='flex flex-col gap-2'>
                            <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/289132fc2c4e238ca785875d50fa98f1.svg'
                                className='w-[124px] h-[28px] object-cover' />
                            <span>Tất cả thông tin bạn điền đã chính xác chưa?</span>
                            <span className='px-8'>{`Họ và tên: ${name}`}</span>
                            <span className='px-8'>{`Email: ${email}`}</span>
                            <span className='px-8'>{`Số di động: ${phone}`}</span>
                            <span>Vé điện tử/phiếu thanh toán sẽ được gửi qua email và tóm tắt đặt chỗ sẽ được gửi đến số di động của bạn.</span>
                        </div>
                    </div>
                    <div className='flex gap-2 p-2'>
                        <button onClick={handleClickBtnThayDoi}
                            className='bg-gray-100 p-1 rounded-lg text-blue-600 font-semibold w-1/2 hover:bg-gray-200'
                        >
                            Thay đổi</button>
                        <button className='bg-blue-600 p-1 rounded-lg text-white font-semibold w-1/2 hover:bg-blue-500'
                            onClick={goPaymentV2}
                        >
                            Thông tin đã chính xác
                        </button>
                    </div>
                </div>
            </div>}
        </div>

    )
}

export default PaymentV1
