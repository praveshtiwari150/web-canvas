import React from 'react'
import Navmenu from '../scenes/Navmenu'
import TopMetaInfo from '../scenes/TopMetaInfo'
import Products from "../scenes/Products";
import MiniProductCard from '../scenes/MiniProductCard';
import SignupSection from '../scenes/SignupSection';

const ContentArea = () => {
    return (
        <div className='content-area'>
            <div className='title'>Best Website builders in the US</div>
            <hr />
            <TopMetaInfo/>
            <hr />
            <Navmenu />
            <span className='flow'>Home &nbsp; {'>'} &nbsp; Hosting for all  &nbsp; {'>'} &nbsp; Hosting &nbsp; {'>'} &nbsp; Hosting6 &nbsp; {'>'} &nbsp; Hosting5 &nbsp; </span>
            <Products />
            <span className='related'>Related deals you might like for</span>
            <MiniProductCard />
            <SignupSection/>
        </div>
    )
}

export default ContentArea
