import React from 'react';
import Header from "../../componets/Header";
import getAnOfferBg from '../../assets/images/BG_getAnOffer_bg.jpg'
import DateSlide from "./DateSlide/DateSlide";

const GetOffer = () => {
    return (
        <>
            <div className='bg-gray-wrapper'>
                <Header/>
            </div>
            <main>
                <div className='get-offer'>
                    <div className='getAnOffer_bg' style={{backgroundImage: `url(${getAnOfferBg})`}}>
                        <div className='container-xxl'>
                            <DateSlide />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default GetOffer;