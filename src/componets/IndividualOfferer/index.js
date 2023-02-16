import React from 'react';
import './IndividualOffer.scss'

const IndividualOffer = () => {
    return (
        <div className='container-xxl individual_offer_container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='individual_offer_body'>
                        <h3 className='individual_offer_title'>Желаете получить индивидуальное предложение?</h3>
                        <p className='individual_offer_description'>Мы найдём вам идеальный вариант</p>
                        <button className='btn_individual_offer hvr-event'>Получить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualOffer;