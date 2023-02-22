import React from 'react';
import Header from "../../componets/Header";

import oceanBg from '../../assets/images/BG_getAnOffer_bg.jpg'

const GetOffer = () => {
    return (
        <>
            <div className='bg-gray-wrapper'>
                <Header/>
            </div>
            <main>
                <div className='getAnOffer_bg' style={{backgroundImage: `url(${oceanBg})`}}>
                    <div className='container-xxl'>

                    </div>
                </div>
            </main>
        </>
    );
};

export default GetOffer;