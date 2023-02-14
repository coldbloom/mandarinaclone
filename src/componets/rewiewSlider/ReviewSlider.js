import React from 'react';
import './ReviewSlide.scss'

import hotelStar from '../../assets/images/hotel-star.svg'

import "swiper/css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Thumbs} from "swiper";

import {reviews} from "../../assets/data/reviews";
import ReviewSlide from "./ReviewSlide";

const ReviewSlider = () => {
    return (
        <div className='review-component px-15px'>
            <h3>Отзывы наших клиентов</h3>
            <p>Мы рады, что большинство наших клиентов – это люди, с которыми у нас сложились постоянные и доверительные отношения.</p>

            <div className='carousel-wrapper'>
                <Swiper>
                    {reviews.map((review, index) =>
                        <SwiperSlide key={index}>
                            <ReviewSlide
                                description={review.description}
                                name={review.name}
                                type={review.type}
                                image={review.image}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewSlider;