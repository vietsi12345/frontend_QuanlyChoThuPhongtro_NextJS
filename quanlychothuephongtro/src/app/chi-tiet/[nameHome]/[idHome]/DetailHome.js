"use client"

import React, { useEffect, useState } from 'react';
import Policies from './Policies';

import NavbarDetail from './NavbarDetail';
import SearchDetail from './SearchDetail';
import OverviewDetail from './OverviewDetail';
import RoomOfHome from './RoomOfHome';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Utilities from './Utilities';
import { getHomeById } from '@/redux/Home/Action';
import { useDispatch, useSelector } from 'react-redux';
import { getAllService } from '@/redux/Service/Action';


const arrTestImg = [1, 2, 3, 4, 5, 6];



const DetailHome = () => {
    const dispath = useDispatch()
    const { homeById } = useSelector(state => state.home)
    const { services } = useSelector(state => state.service)
    const pathname = usePathname()
    const id = pathname.split("/").pop()
    const similarHotel = [1, 2, 3, 4]
    console.log("homeById", homeById)
    useEffect(() => {
        window.scrollTo(0, 0);
        dispath(getHomeById(id))
        dispath(getAllService())
        // dispath(actions.getSimilarHotel(id))
    }, []);
    // const today = new Date();
    // const tomorrow = new Date();
    // tomorrow.setDate(today.getDate() + 1);

    const searchParams = useSearchParams();

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(tomorrow);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    useEffect(() => {
        if (searchParams) {
            const startDate1 = searchParams.get('startDate1');
            const endDate1 = searchParams.get('endDate1');
            const adults1 = searchParams.get('adults1');
            const children1 = searchParams.get('children1');
            const rooms1 = searchParams.get('rooms1');

            if (startDate1) setStartDate(new Date(startDate1));
            if (endDate1) setEndDate(new Date(endDate1));
            if (adults1) setAdults(parseInt(adults1));
            if (children1) setChildren(parseInt(children1));
            if (rooms1) setRooms(parseInt(rooms1));
        }
    }, [searchParams]);

    // const router = useRouter();
    // const {
    //     startDate1,
    //     endDate1,
    //     adults1,
    //     children1,
    //     rooms1
    // } = router.query;


    // const startDate2 = startDate1 ? new Date(startDate1) : today;
    // const endDate2 = endDate1 ? new Date(endDate1) : tomorrow;
    // const adults2 = adults1 ? parseInt(adults1) : 1;
    // const children2 = children1 ? parseInt(children1) : 0;
    // const rooms2 = rooms1 ? parseInt(rooms1) : 1;
    // console.log(homeById)
    // xử lì chọnn ngày trên thanh search


    // const [startDate, setStartDate] = useState(startDate2);
    // const [endDate, setEndDate] = useState(endDate2);
    // const [rooms, setRooms] = useState(rooms2);
    // const [adults, setAdults] = useState(adults2);
    // const [children, setChildren] = useState(children2);




    return (

        <div className='w-full flex flex-col items-center gap-3 mb-10'>
            <SearchDetail nameHotel={homeById?.name}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                rooms={rooms} setRooms={setRooms}
                adults={adults} setAdults={setAdults}
                child={children}
                setChild={setChildren}
            />
            <div className='w-[1100px] h-[288px] mt-5 flex gap-2'>
                {homeById?.imageBase64 ? (
                    <img
                        src={homeById?.imageBase64 ? `data:image/png;base64,${homeById.imageBase64}` : null}
                        alt='anh1'
                        className='w-2/5 object-cover'
                    />
                ) : (
                    <div className='w-2/5 object-cover bg-gray-200 flex items-center justify-center'>
                        <span>No Image Available</span>
                    </div>
                )}
                <div className='w-3/5 flex flex-wrap gap-2'>
                    {arrTestImg.map((item, index) => (
                        <img
                            key={index}
                            src={homeById?.imageBase64 ? `data:image/png;base64,${homeById.imageBase64}` : null}
                            alt='mang anh'
                            className='w-[210px] h-[140px] object-cover'
                        />
                    ))}
                </div>
            </div>
            <NavbarDetail price={homeById?.minRoomPrice?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} />
            <OverviewDetail name={homeById?.name} address={`${homeById?.street}, 
                                                            ${homeById?.ward}, 
                                                            ${homeById?.district},
                                                            ${homeById?.city}`}
                description={homeById?.description}
                services={services} />
            <RoomOfHome name={homeById?.name} id={id}
                startDate={startDate} endDate={endDate}
                adults={adults}
                child={children}
            />
            <div id='kslq' className='rounded-xl w-[1100px]  bg-blue-100 p-5 pt-7 flex flex-col gap-1'>
                <h2 className=' font-semibold text-lg'>Cơ sở lưu trú khác bạn có thể thích</h2>
                <h2 className=' text-sm'>Cơ sở lưu trú tương tự đã được khách chọn</h2>
                {/* <div className='m-5 max-w-[1020px] w-full flex flex-wrap justify-between pb-7'>
                    {similarHotel.map((e, index) => (
                        <ItemHome key={index} name={e.name}
                            city={e.city}
                            price={e.price}
                            image={e?.photo}
                            id={e.id}
                            star={e?.rating}
                        />
                    ))}
                </div> */}
            </div>
            <Utilities name={homeById?.name} />
            <Policies name={homeById?.name} />

        </div>
    );
};

export default DetailHome;
