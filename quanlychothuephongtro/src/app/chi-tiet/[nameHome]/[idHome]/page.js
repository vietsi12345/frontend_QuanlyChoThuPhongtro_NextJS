import Contact from '@/app/homepage/Contact'
import { Header } from '@/app/homepage/Header'
import Info from '@/app/homepage/Info'
import React from 'react'
import DetailHome from './DetailHome'

const page = () => {
    return (
        <div className="bg-[#F5F5F5] flex flex-col items-center h-full w-full">
            <Header />
            <DetailHome />
            <Contact />
            <Info />
        </div>
    )
}

export default page
