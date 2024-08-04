import React, { memo } from 'react'
import { Header } from '../../homepage/Header'
import Contact from '../../homepage/Contact'
import Info from '../../homepage/Info'
import Login from './Login'

const page = () => {
    return (
        <div className="bg-[#F5F5F5] flex flex-col items-center h-full w-full">
            <Header />
            <Login />
            <Contact />
            <Info />
        </div>
    )
}

export default memo(page)
