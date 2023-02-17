import React from 'react';
import './DesktopDestinations.scss'

import egypt from './../../assets/images/destinations/EG.webp'
import dominica from './../../assets/images/destinations/DO.webp'
import grece from './../../assets/images/destinations/GR.webp'
import spain from './../../assets/images/destinations/PhotoSpain.webp'
import turkey from './../../assets/images/destinations/TR.webp'

const DesktopDestinations = () => {
    return (
        <div className='popular_container'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 col-lg-7'>
                        <div className='row'>
                            <div className='col-5 d-flex flex-column justify-content-between'>
                                <div className='popular_card card_bg_spain card_bg_turc popular_card card_size-3 mb-card-country' style={{backgroundImage: `url(${spain})`}}>
                                    <div className='title_popular_card'>Испания</div>
                                    <div className='description_popular_card'>69 гостинницы</div>
                                </div>
                                <div className='popular_card card_bg_eg card_size-3' style={{backgroundImage: `url(${egypt})`}}>
                                    <div className='title_popular_card'>Египет</div>
                                    <div className='description_popular_card'>150 гостинницы</div>
                                </div>
                            </div>
                            <div className='col-7'>
                                <div className='popular_card card_bg_GR' style={{backgroundImage: `url(${grece})`, height: "100%"}}>
                                    <div className="title_popular_card">Греция</div>
                                    <div className="description_popular_card">59 гостинницы</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-5  d-flex flex-column justify-content-between'>
                        <div className='row'>
                            <div className='col-12 d-flex flex-column justify-content-between'>
                                <div className='popular_card card_bg_TR card_size-3 mb-card-country' style={{backgroundImage: `url(${turkey})`}}>
                                    <div className="title_popular_card">Турция</div>
                                    <div className="description_popular_card">36 гостиницы</div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex flex-column justify-content-between'>
                                <div className='popular_card card_bg_do card_size-3' style={{backgroundImage: `url(${dominica})`}}>
                                    <div className='title_popular_card'>Доминиканская республика</div>
                                    <div className='description_popular_card'>12 гостинницы</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopDestinations;