import React, { useState, useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <nav>
            {isMobile ? (
                <div className='mobile-container'>
                    <IoSearchOutline className='search-icon' />
                    <div className='mob-nav-elements'>Categories</div>
                    <div className='mob-nav-elements'>Website Builders</div>
                    <div className='mob-nav-elements'>Today's Deals</div>
                    
                </div>
            ) : (
                    <>
                        <form className='search-bar'>
                            <span>
                                <IoSearchOutline className='search-icon' />
                            </span>
                            <input type="search" className='search-input' />
                        </form>
                        <div className='nav-elements'>Categories</div>
                        <div className='nav-elements'>Website Builders</div>
                        <div className='nav-elements'>Today's Deals</div>
                </>
            )}
            
        </nav>
    )
}

export default Header;
