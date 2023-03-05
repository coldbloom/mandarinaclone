import React, { FC } from 'react';
import hotelstar from "@/assets/images/hotel-star.svg";
import hotelstarTransporent from "@/assets/images/hotel-star-transporent.svg";

const RaitingModule:FC<any> = ({handleChange}) => {
    return (
        <>
            <div className='filter_name'>
                Рейтинг гостинницы
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-1" style={{display: "none"}} type="checkbox" value='1' onChange={handleChange}/>
                <label htmlFor="input-1" className="custom-checkbox"></label>
                <div className='stars_hotel'>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                </div>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-2" style={{display: "none"}} type="checkbox" value='2' onChange={handleChange}/>
                <label htmlFor="input-2" className="custom-checkbox"></label>
                <div className='stars_hotel'>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                </div>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-3" style={{display: "none"}} type="checkbox" value='3' onChange={handleChange}/>
                <label htmlFor="input-3" className="custom-checkbox"></label>
                <div className='stars_hotel'>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                </div>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-4" style={{display: "none"}} type="checkbox" value='4' onChange={handleChange}/>
                <label htmlFor="input-4" className="custom-checkbox"></label>
                <div className='stars_hotel'>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstarTransporent} alt=""/>
                </div>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-5" style={{display: "none"}} type="checkbox" value='5' onChange={handleChange}/>
                <label htmlFor="input-5" className="custom-checkbox"></label>
                <div className='stars_hotel'>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                    <img src={hotelstar} alt=""/>
                </div>
            </div>
        </>
    );
};

export default RaitingModule;