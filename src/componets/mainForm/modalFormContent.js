import React, {useEffect} from 'react';
import done from './../../assets/images/done.svg'
import axios from "axios";

import './mainForm.scss'
import data from "bootstrap/js/src/dom/data";

const directionsData = [
    {
        name: 'Греция',
    },
    {
        name: 'Егтпет',
    },
    {
        name: 'Индонезия',
    },
    {
        name: 'Испания',
    },
    {
        name: 'Доминиканская Республика',
    },
    {
        name: 'ОАЭ',
    },
    {
        name: 'Тайланд',
    },
    {
        name: 'Шри Ланка',
    },
    {
        name: 'Италия',
    },
    {
        name: 'Турция',
    },
    {
        name: 'Куба',
    },
    {
        name: 'Маврикий',
    },
    {
        name: 'Мальдивы',
    },
    {
        name: 'Мексика',
    },
    {
        name: 'Сейшелы',
    },
    {
        name: 'Танзания',
    },
    {
        name: 'Тунис',
    },
]

const directionsData2 = [
    {
        name: 'Греция',
        code: 'gr',
    },
    {
        name: 'Егтпет',
        code: 'eg',
    },
    {
        name: 'Испания',
        code: 'sp',
    },
    {
        name: 'Доминиканская Республика',
        code: 'de',
    },
    {
        name: 'Турция',
        code: 'tr',
    },
]

const nutritionType = [
    {name: "Без питания", type: "AI"},
    {name: "Завтрак", type: "BB"},
    {name: "Полупансион", type: "HB"},
    {name: "Полный пансион", type: "UAI"},
    {name: "Всё включено", type: "RO"},
    {name: "Всё включено+", type: "FB"},
]


const ModalFormContent = ({number, changeCountryCode, dataReq, plusAdults, minusAdults, plusChilds, minusChilds, minusCounterMin, plusCounterMin, plusCounterMax, minusCounterMax}) => {

    const [nightMin, setNightMin] = React.useState(3)
    const [nightMax, setNightMax] = React.useState(14)

    const [auditsCount, setAuditsCount] = React.useState(2)
    const [childsCount, setChildsCount] = React.useState(0)


    return (
        <div className='modalFormContent'>
            {number === 1 &&
                <div className='flex flex-row items-center'>
                    <img src={done} alt="done" className='img-done'/>
                    <p className='active text ml-2'>Riga</p>
                </div>}
            {number === 2 &&
                <div className='flex flex-col'>
                    {directionsData2.map((direction, index) => (
                        <p key={index}
                           className='text directionText'
                           onClick={() => {
                               changeCountryCode(direction)
                           }}
                        >{direction.name}</p>
                    ))}
                </div>}
            {number === 4 &&
                <div className='flex flex-row justify-between nights'>
                    <div>
                        <div className='text'>Ночей</div>
                        <div className='description-nights'>Кол-во ночей</div>
                    </div>
                    <div className='people_counter_wrapper night_min'>
                        <div className={`btn_counter_people minus ${dataReq.nights_min > 3 && 'active'}`}
                             onClick={minusCounterMin}>
                        </div>
                        <div className='text'>{dataReq.nights_min}</div>
                        <div className={`btn_counter_people plus ${(dataReq.nights_min < 18 && dataReq.nights_min < dataReq.nights_max) && 'active'}`}
                             onClick={plusCounterMin}>
                        </div>
                    </div>
                    <div className='people_counter_wrapper night_max'>
                        <div className={`btn_counter_people minus ${dataReq.nights_max > dataReq.nights_min && 'active'}`}
                             onClick={minusCounterMax}
                        ></div>
                        <div className='text'>{dataReq.nights_max}</div>
                        <div className={`btn_counter_people plus ${dataReq.nights_max < 18 && 'active'}`}
                             onClick={plusCounterMax}
                        ></div>
                    </div>
                </div>}
            {number === 5 &&
                <div className='flex flex-col audits'>
                    <div className='row_people_counter'>
                        <div>
                            <div className='title'>Взрослые</div>
                            <div className='description-text'>Старше 14 лет</div>
                        </div>
                        <div className='people_counter_wrapper adults'>
                            <div className={`btn_counter_people minus ${dataReq.adults > 1 && 'active'}`}
                                 onClick={minusAdults}></div>
                            <div className='text'>{dataReq.adults}</div>
                            <div className={`btn_counter_people plus ${dataReq.adults < 5 && 'active'}`}
                                 onClick={plusAdults}></div>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='row_people_counter'>
                        <div>
                            <div className='title'>Дети</div>
                            <div className="description-text">С 2 до 14 лет</div>
                        </div>
                        <div className='people_counter_wrapper childs'>
                            <div className={`btn_counter_people minus ${dataReq.childs > 0 && 'active'}`}
                                 onClick={minusChilds}></div>
                            <div className='text'>{dataReq.childs}</div>
                            <div className={`btn_counter_people plus ${dataReq.childs < 3 && 'active'}`}
                                 onClick={plusChilds}></div>
                        </div>
                    </div>
                </div>}
            {number === 6 &&
                <div>
                    {nutritionType.map((nutrition, index) => (
                        <p className='text directionText' key={index}>{nutrition.name}</p>
                    ))}
                </div>}
        </div>
    );
};

export default ModalFormContent;