import "flatpickr/dist/themes/material_green.css";
import { Russian } from "flatpickr/dist/l10n/ru.js"

import Flatpickr from "react-flatpickr";
import {Component, useState} from "react";

import icon from './../../assets/images/3.svg'

import React from 'react';



const CustomInput = ({ value, defaultValue, inputRef, date, ...props }) => {
    return (
        <div className='search-box' ref={inputRef} style={{paddingTop: "15px", borderRadius: "0px"}}>
            <p className='search-box-title'>Вылет</p>
            <div className='search-box-wrapper'>
                <img src={icon} alt=""/>
                {
                    date !== null
                    ? <p className='search-box-input'>{date}</p>
                    : <p className='search-box-input'>Дата</p>
                }
            </div>
        </div>)
};


const FlatPicker = () => {

    const [date, setDate] = useState(null)
    const onchangeChange = (e) => {
        const str = JSON.stringify(e[0])
        let year = (str.slice(1,5))
        let mount = (str.slice(6,8))
        let day = ("0" + JSON.stringify(Number(str.slice(10,11)) + 1))
        const value = `${year}-${mount}-${day}`
        setDate(value)
    }

    return (
        <div>
            <Flatpickr
                data-enable-time
                value={date}
                // onOpen={onOpen}
                onChange={e => onchangeChange(e)}
                locale={Russian}
                showMonths={1}
                shorthandCurrentMonth={false}
                // clickOpens={false}

                // allowInpuе={true}
                options={{
                    enable: ["2023-02-30", "2023-02-21", "2023-02-08"],
                    enableTime: false,
                    locale: Russian,
                    showMonths: 1,
                    weekNumbers: false,
                    shorthandCurrentMonth: false,
                    // clickOpens: false,

                }}
                render={
                    ({defaultValue, value, ...props}, ref) => {
                        return <CustomInput defaultValue={defaultValue} inputRef={ref} date={date}/>
                    }
                }
            />
        </div>
    );
};

export default FlatPicker;