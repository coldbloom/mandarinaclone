import React from 'react';
import {destinations} from "../../assets/data/destinations";

import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import DestinationSlide from "./DestinationSlide";
import DesktopDestinations from "./DesktopDestinations";
import './PopularDestinations.scss'

const PopularDestinations = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.screen.width);

    React.useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.screen.width)
        };
        // Ваш код
        console.log(windowWidth)
        return () => {
            window.onresize = false
        };
    }, [windowWidth]);
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
                windowWidth < 993
                ?    <div className='container-xxl'>
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
                :    <DesktopDestinations />
            }
        </div>
    );
};

export default PopularDestinations;