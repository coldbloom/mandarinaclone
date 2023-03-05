import React from 'react';
import './OfferComp.scss'

import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import SwiperCore, {Keyboard, Pagination, Navigation, Thumbs} from "swiper";
import {EffectFade} from 'swiper';
import SlideComp from "../SlideComp/SlideComp";

import 'swiper/css';

//SwiperCore.use([Navigation, Pagination])

const OfferComp = ({data, title, description}) => {
    return (
        <div className='OfferComp offer-component'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 col-md-10'>
                        <h3 className='block_title'>{title}</h3>
                        <p className='block_description'>{description}</p>
                    </div>
                </div>
            </div>
            <div className='container-xxl'>
                <div className="SwiperWrapper">
                    <Swiper
                        loop={true}
                        spaceBetween={25}
                        // navigation={true}
                        modules={[Navigation, Thumbs, Pagination]}
                        grabCursor={true}
                        //slidesPerView={1} //
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 4,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            // 768: {
                            //     slidesPerView: 2,
                            // },
                            992: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                        {data.map((el, index) =>
                            <SwiperSlide key={index}>
                                <SlideComp data={el}></SlideComp>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OfferComp;