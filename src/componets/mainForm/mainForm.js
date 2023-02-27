import React, {useRef, useState} from 'react';
import { useFormik } from 'formik';
import useBreakpoint from 'use-breakpoint';

import './mainForm.scss'
import ModalFormContent from "./modalFormContent";

import closeArrow from './../../assets/images/close-arrow.svg'
import SearchBox from "./searchBox";
import CalendarSearchBoxEmpty from "./CalendarSearchBoxEmpty";

import FlatPickerCalendar from "../FlatPickerCalendar";

import icon_1 from './../../assets/images/1.svg'
import icon_2 from './../../assets/images/2.svg'
import icon_4 from './../../assets/images/4.svg'
import icon_5 from './../../assets/images/5.svg'
import icon_6 from './../../assets/images/6.svg'
import searchIcon from "../../assets/images/IconSearch.svg";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

const BREAKPOINTS = {mobile: 0, tablet: 768, desktop: 1200}
const testRequest = {
    townFrom: 'lv',
    countryCode: null,
    adults: 2,
    childs: 0,
    childs_age: '4,4',
    nights_min: 3,
    nights_max: 18,
    meal_types: ['AI','BB','HB','UAI','RO','FB'],
}
const MainForm = () => {
    const [openForm, setOpenForm] = useState(0)
    const modalRef = useRef(null)

    const calendarRef = useRef(null)

    const [openCalendar, setOpenCalendar] = React.useState(false)
    const [directionName, setDirectionName] = React.useState(null)
    const [dataReq, setDataReq] = React.useState(testRequest)
    const [actualDate, setActualDate] = useState([])

    const {breakpoint, maxWidth, minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');

    React.useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current?.contains(e.target)) {
                setOpenForm(0)
            }
        };

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    React.useEffect(() => {
        // let url = `http://91.203.69.22/api/date?townFrom=${dataReq.townFrom}&countryCode=${dataReq.countryCode}&adults=${auditsCount}&childs=${childsCount}&childs_age=&price_range_min=10&price_range_max=1000&nights_min=${nightMin}&nights_max=${nightMax}`
        // let url = `http://91.203.69.22/api/date?townFrom=${dataReq.townFrom}&countryCode=${dataReq.countryCode}&adults=${auditsCount}&childs=${childsCount}&childs_age=&price_range_min=10&price_range_max=1000&nights_min=${nightMin}&nights_max=${nightMax}`
        let url = `http://91.203.69.22/api/date?townFrom=${dataReq.townFrom}&countryCode=${dataReq.countryCode}&adults=${dataReq.adults}&childs=${dataReq.childs}&childs_age=&price_range_min=10&price_range_max=1000&nights_min=${dataReq.nights_min}&nights_max=${dataReq.nights_max}&meal_types=${dataReq.meal_types}`
        if (dataReq.countryCode !== null) {
            axios.get(url)
                .then(response => setActualDate(Object.values(response.data))) // преобразуем объект в массив по значению

            setTimeout(() => {
                calendarRef.current.click()
            }, 500)
        }
    }, [directionName, openCalendar])


    const changeCountryCode = (direction) => {
        const newDataReq = {...dataReq}
        newDataReq.countryCode = direction.code
        setDataReq(newDataReq)
        setDirectionName(direction.name)
        setOpenForm(0)
    }

    const plusAdults = () => {
        if (dataReq.adults < 5) {
            setDataReq({...dataReq, adults: dataReq.adults + 1})
        }
    }
    const minusAdults = () => {
        if (dataReq.adults > 1) {
            setDataReq({...dataReq, adults: dataReq.adults - 1})
        }
    }
    const plusChilds = () => {
        if (dataReq.childs < 3) {
            setDataReq({...dataReq, childs: dataReq.childs + 1})
        }
    }
    const minusChilds = () => {
        if (dataReq.childs > 0) {
            setDataReq({...dataReq, childs: dataReq.childs - 1})
        }
    }

    const minusCounterMin = () => {
        if (dataReq.nights_min > 3) {
            setDataReq({...dataReq, nights_min: dataReq.nights_min - 1})
        }
    }
    const plusCounterMin = () => {
        if (dataReq.nights_min < 18 && dataReq.nights_min < dataReq.nights_max) {
            setDataReq({...dataReq, nights_min: dataReq.nights_min + 1})
        }
    }
    const minusCounterMax = () => {
        if (dataReq.nights_max > dataReq.nights_min) {
            setDataReq({...dataReq, nights_max: dataReq.nights_max - 1})
        }
    }
    const plusCounterMax = () => {
        if (dataReq.nights_max < 18) {
            setDataReq({...dataReq, nights_max: dataReq.nights_max + 1})
        }
    }

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='search-wrap'>
                        <div className='form-container'>
                            <SearchBox setOpenForm={setOpenForm} title="Город отправления" field="Рига" icon={icon_1} item={1}/>
                            <SearchBox setOpenForm={setOpenForm} title="Направление" field="Выберите направление" icon={icon_2} item={2} directionName={directionName}/>
                            {dataReq.countryCode === null
                                ? <CalendarSearchBoxEmpty item={2} setOpenForm={setOpenForm}/>
                                : <FlatPickerCalendar array={actualDate} openCalendar={openCalendar} setOpenCalendar={setOpenCalendar} calendarRef={calendarRef}/>}
                            <SearchBox setOpenForm={setOpenForm} title="Ночей" field="3-18 ночей" icon={icon_4} item={4}/>
                            <SearchBox setOpenForm={setOpenForm} title="Гости" field="2" icon={icon_5} item={5}/>
                            <SearchBox setOpenForm={setOpenForm} title="Питание" field="Всё включено" icon={icon_6} item={6}/>

                            <button className='searchButton'>
                                <img src={searchIcon} alt="Поиск" className='img'/>
                                <p className='text'>Искать</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {
                (openForm !== 0) &&
                <div className={`modalWindow ${openForm === 1 ? 'modal-one' : ""} ${openForm === 2 ? 'modal-two' : ""} ${openForm === 4 ? 'modal-four' : ""} ${openForm === 5 ? 'modal-five' : ""} ${openForm === 6 ? 'modal-six' : ""}`}
                     ref={modalRef}
                >
                    {
                        //console.log('open modal')
                        (openForm !== 3) &&
                        <>
                            {breakpoint !== 'desktop' &&
                                <div onClick={() => setOpenForm(0)} className="close_select_body">
                                    <img src={closeArrow} alt="close"/>
                                </div>
                            }
                            <ModalFormContent
                                number={openForm}
                                changeCountryCode={changeCountryCode}
                                dataReq={dataReq}
                                setDataReq={setDataReq}

                                plusAdults={plusAdults}
                                minusAdults={minusAdults}
                                plusChilds={plusChilds}
                                minusChilds={minusChilds}

                                plusCounterMin={plusCounterMin}
                                minusCounterMin={minusCounterMin}
                                plusCounterMax={plusCounterMax}
                                minusCounterMax={minusCounterMax}
                            />
                        </>
                    }
                </div>
            }
        </>
    );
};

export default MainForm;