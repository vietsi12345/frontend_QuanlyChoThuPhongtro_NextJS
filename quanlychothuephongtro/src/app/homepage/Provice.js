import React from 'react'
import { location } from '../../ultils/constain'

const Provice = () => {
    return (
        <div className='pt-40 flex flex-col gap-7 items-center w-1020 ' >
            <span className='font-semibold text-2xl'>Các điểm đến thu hút nhất Việt Nam</span>
            <div className='flex items-center gap-5 justify-center '>
                {location.map(item => {
                    return (
                        <div key={item.id} className='shadow-md rounded-bl-md rounded-br-md text-blue-700 cursor-pointer hover:text-orange-600'>
                            <img src={item.image}
                                alt={item.name}
                                className='w-[345px] h-[345px] object-cover rounded-tl-md rounded-tr-md'
                            />
                            <div className='py-2 font-medium text-center'>{item.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Provice
