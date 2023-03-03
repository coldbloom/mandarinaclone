import React from 'react';
import hotelstar from "../../../../assets/images/hotel-star.svg";
import hotelstarTransporent from "../../../../assets/images/hotel-star-transporent.svg";

import CheckboxModule from "./CheckboxModule";

const RaitingModule = ({setRaitingArray, raitingArray}) => {
    return (
        <>
            <div className='filter_name'>
                Рейтинг гостинницы
            </div>
            <CheckboxModule id={'1'} raitingArray={raitingArray} setRaitingArray={setRaitingArray}/>
            <CheckboxModule id={'2'} raitingArray={raitingArray} setRaitingArray={setRaitingArray}/>
            <CheckboxModule id={'3'} raitingArray={raitingArray} setRaitingArray={setRaitingArray}/>
            <CheckboxModule id={'4'} raitingArray={raitingArray} setRaitingArray={setRaitingArray}/>
            <CheckboxModule id={'5'} raitingArray={raitingArray} setRaitingArray={setRaitingArray}/>
        </>
    );
};

export default RaitingModule;