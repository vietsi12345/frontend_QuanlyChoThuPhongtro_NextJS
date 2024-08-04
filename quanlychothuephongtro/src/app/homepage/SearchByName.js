import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaUser, FaCaretDown } from 'react-icons/fa';
import icons from '@/ultils/icon';
import { useDispatch, useSelector } from 'react-redux';
import { searchHomeByName } from '@/redux/Home/Action';
import { formatMonneyVietNam } from '@/ultils/common/formatMonneyVietNam';



const { CiSearch, IoLocation } = icons;

const SearchByName = ({ search, setSearch, setIdHome }) => {
    const dispatch = useDispatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { homesSearch } = useSelector(state => state.home);
    useEffect(() => {
        dispatch(searchHomeByName(search))
    }, [search]);

    const selectedHome = (name, id) => {
        setSearch(name);
        setDropdownOpen(false);
        setIdHome(id)
    };

    return (
        <div className='relative w-full bg-white rounded-md'>
            <div
                className="border border-gray-300 rounded-lg p-1 hover:cursor-pointer flex items-center justify-between"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <div className='flex gap-1 items-center w-full'>
                    <CiSearch size={30} />
                    <input
                        type='text'
                        className="outline-none p-2 rounded-md w-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10">
                    <p className='text-sm text-gray-600'>Các khách sạn bạn có thể chọn để lưu trú</p>
                    <div className='w-full flex flex-wrap'>
                        {homesSearch.map((item, index) => (
                            <div onClick={() => selectedHome(item.name, item.id)} key={index} className='p-4 w-1/2 flex gap-2 items-center cursor-pointer'>
                                <img src={`data:image/png;base64,${item.imageBase64}`}
                                    className='w-[60px] h-[60px] object-cover'
                                />
                                <div>
                                    <h3 className='text-base'>{item.name}</h3>
                                    <div className='flex gap-3'>
                                        <p className='text-sm text-red-500'>{formatMonneyVietNam(item?.minRoomPrice)}</p>
                                        <div className='flex items-center gap-2'>
                                            <IoLocation size={14} color='blue' />
                                            <p className='text-sm text-blue-500'>{`${item.district}, ${item.city}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchByName;
