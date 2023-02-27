import React, {useEffect} from 'react';
import done from './../../assets/images/done.svg'
import axios from "axios";

import './mainForm.scss'

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
    {name: "Без питания"},
    {name: "Завтрак"},
    {name: "Полупансион"},
    {name: "Полный пансион"},
    {name: "Всё включено"},
    {name: "Всё включено+"},
]

const testRequest = {
    townFrom: 'lv',
    countryCode: null,
    adults: '2',
    childs: '2',
    childs_age: '4,4'
}


const ModalFormContent = ({number, callback}) => {
    const [dataReq, setDataReq] = React.useState(testRequest)
    const [actualDate, setActualDate] = React.useState([])

    const [nightMin, setNightMin] = React.useState(3)
    const [nightMax, setNightMax] = React.useState(14)

    const [auditsCount, setAuditsCount] = React.useState(2)
    const [childsCount, setChildsCount] = React.useState(0)

    const minusCounterMin = () => {
        if (nightMin > 3) {
            setNightMin(nightMin - 1)
        }
    }
    const plusCounterMin = () => {
        if (nightMin < 18 && nightMin < nightMax) {
            setNightMin(nightMin + 1)
        }
    }
    const minusCounterMax = () => {
        if (nightMax > nightMin) {
            setNightMax(nightMax - 1)
        }
    }
    const plusCounterMax = () => {
        if (nightMin < 18 && nightMin > nightMax) {
            setNightMax(nightMax + 1)
        }
    }

    const plusAdits = () => {
        if (auditsCount < 5) {
            setAuditsCount(auditsCount + 1)
        }
    }
    const minusAudits = () => {
        if (auditsCount > 1) {
            setAuditsCount(auditsCount - 1)
        }
    }

    const changeCountryCode = (code) => {
        const newDataReq = {...dataReq}
        newDataReq.countryCode = code
        setDataReq(newDataReq)
    }

    React.useEffect(() => {
        let url = `http://91.203.69.22/api/date?townFrom=${dataReq.townFrom}&countryCode=${dataReq.countryCode}&adults=${dataReq.adults}&childs=${dataReq.childs}&childs_age=&price_range_min=10&price_range_max=1000&nights_min=${nightMin}&nights_max=${nightMax}\n`
        if (dataReq.countryCode !== null) {
            axios.get(url)
                .then(response => setActualDate(response.data))

            callback(actualDate)
        }
    }, [dataReq])

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
                           onClick={() => changeCountryCode(direction.code)}
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
                        <div className='btn_counter_people minus active'
                             onClick={minusCounterMin}>
                        </div>
                        <div className='text'>{nightMin}</div>
                        <div className='btn_counter_people plus active'
                             onClick={plusCounterMin}>
                        </div>
                    </div>
                    <div className='people_counter_wrapper night_max'>
                        <div className='btn_counter_people minus active'
                             onClick={minusCounterMax}
                        ></div>
                        <div className='text'>{nightMax}</div>
                        <div className='btn_counter_people plus'
                             onClick={plusCounterMax}
                        ></div>
                    </div>
                </div>}
            {number === 5 &&
                <div className='flex flex-col audits'>
                    <div className='row_people_counter'>
                        <div>
                            <div className='text'>Взрослые</div>
                            <div className='description-nights'>Старше 14 лет</div>
                        </div>
                        <div className='people_counter_wrapper adults'>
                            <div className='btn_counter_people minus active'></div>
                            <div>{auditsCount}</div>
                            <div className='btn_counter_people plus active'></div>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='row_people_counter'>
                        <div>
                            <div className='text'>Дети</div>
                            <div className="description-nights">С 2 до 14 лет</div>
                        </div>
                        <div className='people_counter_wrapper childs'>
                            <div className='btn_counter_people minus active'></div>
                            <div></div>
                            <div className='btn_counter_people plus active'></div>
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