import React, { useState } from 'react';
import { FaPlus, FaMinus, FaUser, FaCaretDown } from 'react-icons/fa';

const SearchOfPeople = ({ rooms, setRooms, adults, setAdults, child, setChild }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleRoomsChange = (delta) => {
        if (rooms + delta >= 1) {
            setRooms(rooms + delta);
        }
    };

    const handleAdultsChange = (delta) => {
        if (adults + delta >= 1) {
            setAdults(adults + delta);
        }
    };

    const handlechildChange = (delta) => {
        if (child + delta >= 0) {
            setChild(child + delta);
        }
    };

    return (
        <div className="relative  text-left bg-white rounded-lg">
            <div className="border border-gray-300 rounded-lg  p-1 hover:cursor-pointer flex items-center justify-between"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <div className="flex items-center gap-2">
                    <FaUser className="text-xl" />
                    <div>
                        <div>{adults} người lớn, {child} trẻ em</div>
                        <div className="text-sm text-gray-500">{rooms} phòng</div>
                    </div>
                </div>
                <FaCaretDown className="ml-2" />
            </div>

            {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10 "  >
                    <div className="flex justify-between items-center mb-4">
                        <span>Phòng</span>
                        <div className="flex items-center gap-2">
                            <button onClick={() => handleRoomsChange(-1)} disabled={rooms <= 1} className="bg-gray-200 p-2 rounded-full">
                                <FaMinus />
                            </button>
                            <span>{rooms}</span>
                            <button onClick={() => handleRoomsChange(1)} className="bg-gray-200 p-2 rounded-full">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span>Người lớn</span>
                        <div className="flex items-center gap-2">
                            <button onClick={() => handleAdultsChange(-1)} disabled={adults <= 1} className="bg-gray-200 p-2 rounded-full">
                                <FaMinus />
                            </button>
                            <span>{adults}</span>
                            <button onClick={() => handleAdultsChange(1)} className="bg-gray-200 p-2 rounded-full">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span>Trẻ em</span>
                        <div className="flex items-center gap-2">
                            <button onClick={() => handlechildChange(-1)} disabled={child <= 0} className="bg-gray-200 p-2 rounded-full">
                                <FaMinus />
                            </button>
                            <span>{child}</span>
                            <button onClick={() => handlechildChange(1)} className="bg-gray-200 p-2 rounded-full">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchOfPeople;
