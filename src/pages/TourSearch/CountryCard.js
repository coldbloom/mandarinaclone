import React from 'react';

const CountryCard = ({image, title, description, mb = 0}) => {
    return (
        <div className='col-12 col-lg-6 d-flex flex-column justify-content-between'>
            <div
                style={{backgroundImage: `url(${image})`, marginBottom: `${mb}`}}
                className='popular_card card_bg_spain card_bg_turc popular_card card_size-3 mb-card-country'
            >
                <div className='title_popular_card'>{title}</div>
                <div className='description_popular_card'>{description}</div>
            </div>
        </div>
    );
};

export default CountryCard;