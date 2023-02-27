import React from 'react';
import './DateSlide.scss'

const DateSlide = () => {
    return (
        <div className='date1'>
            <div className='row'>
                <div className=''>
                    <div className='col-12'>
                        <div className='title_getAnOffer'>
                            Когда хотите отправиться в путешествие?
                        </div>
                    </div>
                    <div className='col-12 choose_exact_dates_col'>
                        <div className='flatpickr-wrapper'>
                            <div className='choose_exact_dates flatpickr-input'>
                                Я знаю точные даты
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row months_row g-0'>
                <div className='col-12'>
                    <div className='months_container flwrap'>
                        <label htmlFor="" className='month_getAnOffer'>Май</label>
                        <label htmlFor="" className='month_getAnOffer'>Июнь</label>
                        <label htmlFor="" className='month_getAnOffer'>Июль</label>
                    </div>
                    <div className='months_container flwrap'>
                        <label htmlFor="" className='month_getAnOffer'>Август</label>
                        <label htmlFor="" className='month_getAnOffer'>Сентябрь</label>
                        <label htmlFor="" className='month_getAnOffer'>Октябрь</label>
                    </div>
                    <div className='months_container flwrap'>
                        <label htmlFor="" className='month_getAnOffer'>Ноябрь</label>
                        <label htmlFor="" className='month_getAnOffer'>Декабрь</label>
                        <label htmlFor="" className='month_getAnOffer'>Январь</label>
                    </div>
                    <div className='months_container flwrap'>
                        <label htmlFor="" className='month_getAnOffer'>Февраль</label>
                        <label htmlFor="" className='month_getAnOffer'>Март</label>
                        <label htmlFor="" className='month_getAnOffer'>Апрель</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateSlide;