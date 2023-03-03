import React from 'react';
import hotelstar from "../../../../assets/images/hotel-star.svg";
import hotelstarTransporent from "../../../../assets/images/hotel-star-transporent.svg";

const CheckboxModule = ({id, raitingArray, setRaitingArray}) => {

    const [checkedValue, setCheckedValue] = React.useState(false)
    // const onChangeCheckBox = (symbol, raitingArray) => {
    //     let string = raitingArray
    //     setCheckedValue((prev) => !prev)
    //     if (checkedValue === true) {
    //         if (!(string.includes(symbol))) {
    //             string = string + symbol;
    //             console.log('!includes', string)
    //         }
    //     } else {
    //         if (string.includes(symbol)) {
    //             let pos = string.indexOf(symbol)
    //             string = string.slice(0, pos) + string.slice(pos + 1, string.length)
    //         }
    //     }
    //     console.log(string)
    //     setRaitingArray(string)
    // }

    return (
        <div className='wrapper_checkbox'>
            <div className="custom-checkbox" onClick={() => setCheckedValue(!checkedValue)}>
                {
                    checkedValue && <div className='active-checkbox' />
                    // raitingArray.includes(id) && (
                    //     <div className='active-checkbox'>
                    //
                    //     </div>
                    // )
                }
            </div>
            <div className='stars_hotel'>
                <img src={hotelstar} alt=""/>
                <img src={hotelstarTransporent} alt=""/>
                <img src={hotelstarTransporent} alt=""/>
                <img src={hotelstarTransporent} alt=""/>
                <img src={hotelstarTransporent} alt=""/>
            </div>
        </div>
    );
};

export default CheckboxModule;