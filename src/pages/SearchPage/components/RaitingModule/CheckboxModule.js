import React from 'react';
import hotelstar from "../../../../assets/images/hotel-star.svg";
import hotelstarTransporent from "../../../../assets/images/hotel-star-transporent.svg";
import {forEach} from "react-bootstrap/ElementChildren";

const CheckboxModule = ({id, array, raitingArray, setRaitingArray}) => {

    let activeStars = new Array (id)
    let notActiveStars = new Array (5 - id)
    for (let i = 0; i < id; i++) {
        activeStars.push(1)
    }
    for (let i = 0; i < 5 - id; i++) {
        notActiveStars.push(1)
    }
    const [checkedValue, setCheckedValue] = React.useState(false)
    const [req, setReq] = React.useState('')
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

    const onChange = (id) => {
        let symbol = id.toString()
        setCheckedValue(!checkedValue)
        setReq(req + symbol)
        console.log(req)
    }

    return (
        <div className='wrapper_checkbox'>
            <div className="custom-checkbox" onClick={() => onChange(id)}>
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
                {activeStars.map((_, i) => <img key={i} src={hotelstar} alt=""/>)}
                {notActiveStars.map((_, i) => <img key={i} src={hotelstarTransporent} alt=""/>)}
            </div>
        </div>
    );
};

export default CheckboxModule;