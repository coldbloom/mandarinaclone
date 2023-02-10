import React from 'react';

import './SlideComp.scss'
import hotelStar from '../../assets/images/hotel-star.svg'

import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';

const SlideComp = ({data}) => {
    return (
        <div className='slideComp'>

            <div className='flex flex-row justify-between'>
                <div className='imageSwiperWrapper'>

                </div>
                <h1>{data.name}</h1>
                <div className='hotel-stars'>
                    <img src={hotelStar} alt="" className='hotel-star'/>
                    <img src={hotelStar} alt="" className='hotel-star'/>
                    <img src={hotelStar} alt="" className='hotel-star'/>
                    <img src={hotelStar} alt="" className='hotel-star'/>
                    <img src={hotelStar} alt="" className='hotel-star'/>
                </div>
            </div>
        </div>
    );
};

export default SlideComp;