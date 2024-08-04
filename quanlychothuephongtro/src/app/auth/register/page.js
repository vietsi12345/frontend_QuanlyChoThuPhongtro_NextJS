import DetailHome from '@/app/chi-tiet/[nameHome]/[idHome]/DetailHome'
import Contact from '@/app/homepage/Contact'
import { Header } from '@/app/homepage/Header'
import Info from '@/app/homepage/Info'
import React from 'react'
import Register from './Register'


const page = () => {
    return (
        <div>
            <div className="bg-[#F5F5F5] flex flex-col items-center h-full w-full">
                <Header />
                <Register />
                <Contact />
                <Info />
            </div>
        </div>
    )
}

export default page
