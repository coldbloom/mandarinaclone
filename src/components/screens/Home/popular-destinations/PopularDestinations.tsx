import React from 'react';
import {destinations} from "@/assets/data/destinations";

import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import DestinationSlide from "./DestinationSlide";
import DesktopDestinations from "./DesktopDestinations";
import './PopularDestinations.scss'

import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = {mobile: 0, tablet: 768, desktop: 993}

const PopularDestinations = () => {
    const {breakpoint, maxWidth, minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');

    return (
        <div className='popular-destinations'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 col-md-10'>
                        <h3 className='block_title'>Популярные направления</h3>
                        <p className='block_description'>Это популярные направления за последний месяц</p>
                    </div>
                </div>
            </div>
            {
                breakpoint === 'desktop'
                ?    <DesktopDestinations />
                :    <div className='container-xxl'>
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
                            {destinations.map((data:any, index:any) =>
                                <SwiperSlide key={index}>
                                    <DestinationSlide {...data}/>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
            }
        </div>
    );
};

export default PopularDestinations;