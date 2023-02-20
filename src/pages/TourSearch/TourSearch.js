import React from 'react';
import './TourSearch.scss'

import sp from './../../assets/images/destinations/PhotoSpain.webp'

const TourSearch = () => {
    return (
        <main>
            <div className='issetSearch'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 title_page'>
                            <div className='block_title popular_title'>
                                Популярные направления
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carusel_wrap carusel_wrap5'>
                    <div className='row' style={{marginTop: "20px"}}></div>
                    <div className='col-12 col-lg-12  d-flex flex-column justify-content-between issetSearch_row'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 d-flex flex-column justify-content-between'>
                                <div style={{backgroundImage: `url${sp}`}} className='popular_card card_bg_spain card_bg_turc popular_card card_size-3 mb-card-country'>
                                    <div className='title_popular_card'>Испания</div>
                                    <div className='description_popular_card'>69 гостиницы</div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 d-flex flex-column justify-content-between'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TourSearch;