import React from 'react'
import icons from '../../ultils/icon'
import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/navigation'
import { formatVietNameseToSring } from '../../ultils/common/formatVietNameseToSring'
import { formatMonneyVietNam } from '../../ultils/common/formatMonneyVietNam'
import { useLoading } from '../LoadingProvider'

const { IoLocation, FaStar } = icons

const ItemHome = ({ price, name, address, image, id, star }) => {
    const { setIsLoading } = useLoading()
    const router = useRouter()
    const handleNavigate = () => {
        setIsLoading(true)
        router.push(`/chi-tiet/${formatVietNameseToSring(name)}/${id}`)
    }
    return (
        <div
            onClick={handleNavigate}
            className='flex flex-col gap-1 cursor-pointer'
        >
            <img src={`data:image/png;base64,${image}`}
                className='w-[245px] h-[200px] object-cover shadow-xl rounded-md'
            />
            <span className='font-semibold w-[245px]'>{name}</span>
            <div className='flex items-center gap-1'>
                {(() => {
                    let stars = [];
                    for (let i = 1; i <= star; i++) {
                        stars.push(<FaStar color='green' key={i} size={15} />);
                    }
                    return stars;
                })()}
                <IoLocation className="text-blue-400" />
                <span className='text-blue-400 text-sm'>{address}</span>
            </div>
            <span className='text-sm text-gray-600'>Giá phòng trọ chưa gồm thuế và phí</span>
            <span className='text-red-600 font-medium'>{formatMonneyVietNam(price)} </span>
        </div>
    )
}

export default ItemHome
