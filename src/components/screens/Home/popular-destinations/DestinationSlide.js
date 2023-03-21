import React from 'react';
import { useTranslation } from 'react-i18next';

const DestinationSlide = ({image, name, amount}) => {
    const {t} = useTranslation()
    // console.log(name,'weflknwelfk2');
    return (
        <div className='slide-wrapper'>
            <div style={{backgroundImage: `url(${image})`}} className="image">
                <p className='name'>{t(name)}</p>
                <p className='hotels'>{amount} {t('hotels')}</p>
            </div>
        </div>
    );
};

export default DestinationSlide;