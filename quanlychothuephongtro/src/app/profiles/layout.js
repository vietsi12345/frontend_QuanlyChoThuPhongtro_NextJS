"use client"
import React, { useEffect } from 'react'
import { Header } from '../homepage/Header'
import Contact from '../homepage/Contact'
import Info from '../homepage/Info'
import Profile from './Profile.js'
import { getUserByJwt } from '@/redux/auth/Action'
import { useDispatch, useSelector } from 'react-redux'



const ProfileLayout = ({ children }) => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const jwt = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;
    console.log(user, "prof")
    useEffect(() => {
        dispatch(getUserByJwt(jwt))
    }, [jwt])
    return (
        <div className="bg-[#F5F5F5] flex flex-col items-center h-full w-full">
            <Header />
            <div className='w-full flex flex-col items-center gap-3'>
                <Profile>
                    {children}
                </Profile>
            </div>
            <Contact />
            <Info />
        </div>
    )
}

export default ProfileLayout