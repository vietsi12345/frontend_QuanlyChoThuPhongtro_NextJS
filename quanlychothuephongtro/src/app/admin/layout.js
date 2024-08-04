import React from 'react'
import AdminLayout from './HomeAdmin'

const layout = ({ children }) => {
    return (
        <div>
            <div className='lg:flex justify-between'>
                <div>
                    <AdminLayout />
                </div>

                <div className='lg:w-[80%] px-5'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout
