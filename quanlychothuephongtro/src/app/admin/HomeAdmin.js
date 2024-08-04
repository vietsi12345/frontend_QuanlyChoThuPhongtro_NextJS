"use client"
import React, { useEffect } from 'react'
import { AdminPanelSettings, Category, Dashboard, Fastfood, ShoppingBag } from '@mui/icons-material'
import ShopTwoIcon from '@mui/icons-material/ShopTwo'
import Event from '@mui/icons-material/Event'
import Logout from '@mui/icons-material/Logout'
import { Divider, Drawer, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { useRouter, useSearchParams } from 'next/navigation'
import { getUserByJwt, logOut } from '@/redux/auth/Action'
import { useLoading } from '../LoadingProvider'
import PaymentIcon from '@mui/icons-material/Payment';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NotificationPopup } from '../homepage/NotificationPopup'
import { getNotificationForUser, getNotificationUnReadForUser } from '@/redux/notification/Action'

const menu = [
    { title: "Quản lý khách hàng", icon: <Dashboard />, path: "/customers" },
    { title: "Quản lý đơn đặt phòng", icon: <ShoppingBag />, path: "/bookings" },
    { title: "Quản lý hợp đồng", icon: <LibraryBooksIcon />, path: "/contracts" },
    { title: "Quản lý nhà trọ", icon: <AddHomeIcon />, path: "/home" },
    { title: "Quản lý phòng", icon: <ShopTwoIcon />, path: "/rooms" },
    { title: "Quản lý dịch vụ", icon: <RoomServiceIcon />, path: "/services" },
    { title: "Quản lý Hóa đơn", icon: <Category />, path: "/invoices" },
    { title: "Quản lý Payment", icon: <PaymentIcon />, path: "/payments" },
    { title: "Thống kê doanh thu", icon: <EqualizerIcon />, path: "/statistics" },
    { title: "Đăng xuất", icon: <Logout />, path: "/logout" }
]

const AdminLayout = () => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const router = useRouter();
    const dispatch = useDispatch();
    const { setIsLoading } = useLoading()
    const { myNotification, myNotificationUnread } = useSelector(state => state.notification)
    const { user } = useSelector(state => state.auth)
    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;

    const handleNavigate = (item) => {
        setIsLoading(true)
        router.push(`/admin${item.path}`)
        if (item.title === "Đăng xuất") {
            dispatch(logOut())
            setIsLoading(true)
            router.push(`/`)
        }
    }

    useEffect(() => {
        dispatch(getUserByJwt(jwt))
    }, [jwt])

    useEffect(() => {
        dispatch(getNotificationForUser(user?.id))
        dispatch(getNotificationUnReadForUser(user?.id))
    }, [user?.id])

    return (
        <div>
            <>
                <Drawer variant={isSmallScreen ? "temporary" : "permanent"} anchor='left' open={true} sx={{ zIndex: 1 }}>
                    <div className='w-[70] lg:w-[20] flex flex-col justify-center text-xl space-y-[1.65rem]'>
                        <div className='hover:bg-gray-300 h-full flex items-center px-2 pt-4'>
                            <NotificationPopup notifications={myNotification} notificationsUnread={myNotificationUnread} />
                        </div>
                        {menu.map((item, index) => (
                            <React.Fragment key={index}>
                                <div onClick={() => handleNavigate(item)} className='px-5 flex items-center gap-5 cursor-pointer'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {index !== menu.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </div>
                </Drawer>
            </>
        </div>
    )
}

export default AdminLayout
