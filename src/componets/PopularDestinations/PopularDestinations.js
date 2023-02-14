import React from 'react';
import {destinations} from "../../assets/data/destinations";

import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import DestinationSlide from "./DestinationSlide";
import './PopularDestinations.scss'

const PopularDestinations = () => {
    return (
        <div className='popular-destinations px-15px'>
            <h3>Популярные направления</h3>
            <p>Это популярные направления за последний месяц</p>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1000: {
                        slidesPerView: 2
                    }
                }}
            >
                {destinations.map((data, index) =>
                    <SwiperSlide key={index}>
                        <DestinationSlide {...data}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default PopularDestinations;