import React from 'react';
import './OfferComp.scss'

import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Keyboard, Pagination, Navigation, Thumbs} from "swiper";
import {EffectFade} from 'swiper';
import SlideComp from "../SlideComp/SlideComp";

import 'swiper/css';

const OfferComp = ({data, title, description}) => {
    return (
        <div className='OfferComp px-15px'>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>

            <div className="SwiperWrapper">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                    //slidesPerView={1} //
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1000: {
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
    );
};

export default OfferComp;