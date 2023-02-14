import React from 'react';
import hotelStar from '../../assets/images/hotel-star.svg'
import './ReviewSlide.scss'

const ReviewSlide = ({name, description, type, image}) => {
    return (
        <>
            <div className='review-slide'>
                <div className="content">
                <div className='stars'>
                    <img src={hotelStar} alt="" className='star'/>
                    <img src={hotelStar} alt="" className='star'/>
                    <img src={hotelStar} alt="" className='star'/>
                    <img src={hotelStar} alt="" className='star'/>
                    <img src={hotelStar} alt="" className='star'/>
                </div>
                <p className='description'>{description}</p>
                <p className='name'>{name}</p>
                <p className='type'>{type}</p>

                </div>
                <img src={image} alt="" className='person'/>
            </div>
        </>
    );
};

export default ReviewSlide;