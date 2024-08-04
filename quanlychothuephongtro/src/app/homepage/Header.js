"use client"

import React, { useEffect, useState } from 'react';
import icons from '../../ultils/icon';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByJwt } from '@/redux/auth/Action';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { NotificationPopup } from './NotificationPopup';
import { useLoading } from '../LoadingProvider';
import { getNotificationForUser, getNotificationUnReadForUser } from '@/redux/notification/Action';

const { GiSelfLove, FaMoneyBill, RxAvatar, IoMenuOutline, FaUserPlus, IoNotificationsCircle } = icons;

export const Header = () => {
    const [jwt, setJwt] = useState(null);
    const { user } = useSelector(state => state.auth);
    const { myNotification, myNotificationUnread } = useSelector(state => state.notification);
    const router = useRouter();
    const dispatch = useDispatch();
    const { setIsLoading } = useLoading();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setJwt(localStorage.getItem("jwt"));
        }
    }, []);

    useEffect(() => {
        if (user?.id) {
            dispatch(getNotificationForUser(user.id));
            dispatch(getNotificationUnReadForUser(user.id));
        }
    }, [user?.id, dispatch]);

    const handleNavigation = (path) => {
        setIsLoading(true);
        router.push(path);
    };

    const goLogin = () => handleNavigation("/auth/login");
    const goRegister = () => handleNavigation("/auth/register");
    const goProfiles = () => handleNavigation("/profiles");
    const goHome = () => handleNavigation("/");

    return (
        <div className='border-b border-gray-300 px-4 flex items-center justify-between w-[1020px] h-[56px]'>
            <div onClick={goHome}>
                <img src='https://gcs.tripi.vn/public-tripi/tripi-feed/img/475201KCm/anh-mo-ta.png'
                    alt="logo"
                    className='w-[114px] h-[56px] object-cover'
                />
            </div>
            <div className='flex gap-3 h-full hover:cursor-pointer'>
                <div className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                    <GiSelfLove size='21' />
                    <span className='font-semibold text-base'>Yêu thích</span>
                </div>
                <div className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                    <FaMoneyBill size='21' />
                    <div className='font-semibold text-base'>VNĐ</div>
                </div>
                {!jwt ? (
                    <>
                        <Link href="/auth/login" onClick={() => setIsLoading(true)} className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                            <RxAvatar size='21' />
                            <div className='font-semibold text-base'>Đăng nhập</div>
                        </Link>
                        <Link href="/auth/register" onClick={() => setIsLoading(true)} className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                            <FaUserPlus size='21' />
                            <div className='font-semibold text-base'>Tạo tài khoản</div>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/profiles/my-booking" onClick={() => setIsLoading(true)} className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                            <RxAvatar size='21' />
                            <div className='font-semibold text-base'>{`Xin chào, ${user?.fullName || 'Người dùng'}`}</div>
                        </Link>
                        <div className='hover:bg-gray-300 h-full flex items-center px-2'>
                            <NotificationPopup notifications={myNotification} notificationsUnread={myNotificationUnread} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
