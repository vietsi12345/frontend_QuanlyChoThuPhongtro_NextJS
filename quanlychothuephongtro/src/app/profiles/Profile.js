"use client"
import { getUserByJwt, logOut } from '@/redux/auth/Action'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useLoading } from '../LoadingProvider'

const Profile = ({ children }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;

    const { setIsLoading } = useLoading()
    const { user } = useSelector(state => state.auth)

    const handleLogOut = () => {
        dispatch(logOut())
        setIsLoading(true)
        router.push('/')
    }
    useEffect(() => {
        dispatch(getUserByJwt(jwt))
    }, [jwt]);

    return (
        <div className='w-[1020px] flex m-10'>
            <div className='w-1/4 border rounded-xl  h-[300px] bg-white  border-gray-300 p-4 pt-7'>
                <div className='flex flex-col gap-3 px-5'>
                    <Link href="/profiles/my-booking" onClick={() => setIsLoading(true)} className='flex items-center gap-2 cursor-pointer'>
                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c9954122d8006592fbcbd4a82ac994c.svg' />
                        <span>Đặt chỗ của tôi</span>
                    </Link>
                    <Link href="/profiles/my-contracts" onClick={() => setIsLoading(true)} className='flex items-center cursor-pointer gap-2 '>
                        <img src='https://img.pikbest.com/element_our/20230315/bg/f5b6b9a22e218.png!w700wp'
                            className='w-[24px] h-[24px]' />

                        <span>Hợp đồng</span>
                    </Link>
                    <Link href="/profiles/my-invoices" onClick={() => setIsLoading(true)} className='flex items-center cursor-pointer gap-2 '>
                        <img src='https://png.pngtree.com/png-clipart/20230811/original/pngtree-bill-invoice-bill-receipt-vector-picture-image_10399500.png'
                            className='w-[24px] h-[24px]' />

                        <span>Hóa đơn</span>
                    </Link>
                    <Link href="/profiles/my-profiles" onClick={() => setIsLoading(true)} className='flex items-center cursor-pointer gap-2 '>
                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f1e5ba7cea40df07a49fbd2cadb81dd0.svg' />
                        <span>Tài khoản</span>
                    </Link>
                    <div onClick={handleLogOut} className='flex items-center cursor-pointer gap-2 '>
                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/336593031502efcd0f97e6b35e7703a1.svg' />
                        <span>Đăng xuất</span>
                    </div>
                </div>
            </div>
            <div className='w-3/4'>
                {children}
            </div>
        </div>
    )
}

export default Profile