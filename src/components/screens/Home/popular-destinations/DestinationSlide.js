import React from 'react';

const DestinationSlide = ({image, name, amount}) => {
    return (
        <div className='slide-wrapper'>
            <div style={{backgroundImage: `url(${image})`}} className="image">
                <p className='name'>{name}</p>
                <p className='hotels'>{amount} гостиницы</p>
            </div>
        </div>
    );
};

export default DestinationSlide;