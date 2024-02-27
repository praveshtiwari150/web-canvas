import React, { useState } from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TopMetaInfo = () => {

    const dateformat = (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${day} ${months[monthIndex]} ${year}`
    }

    const currDate = new Date();
    const formattedDate = dateformat(currDate);
    
    

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Top Relevant');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className='top-meta-info'>
            <div className='meta-left'>
                <div className='meta-info'>
                    <FaRegCircleCheck /> Last Updated - {formattedDate}
                </div>
                <div>
                    <IoInformationCircleOutline /> Advertising Discloure
                </div>
            </div>
            <div className='dropdown'>
                <button className='dropdown-btn' onClick={toggleMenu}>
                    {selectedOption} {isOpen ? <IoIosArrowUp/>:<IoIosArrowDown />}
                </button>
                {
                    isOpen && (
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => handleOption('Date')}>Date</button>
                            <button className='dropdown-item' onClick={() => handleOption('Top Rated')}>Top Rated</button>
                            <button className='dropdown-item' onClick={() => handleOption('Top Relevant')}>Top Releveant</button>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default TopMetaInfo
