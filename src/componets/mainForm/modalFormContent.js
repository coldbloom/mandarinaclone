import React from 'react';
import done from './../../assets/images/done.svg'

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

const nutritionType = [
    {name: "Без питания"},
    {name: "Завтрак"},
    {name: "Полупансион"},
    {name: "Полный пансион"},
    {name: "Всё включено"},
    {name: "Всё включено+"},
]

const ModalFormContent = ({number}) => {
    return (
        <div className='modalFormContent'>
            {number === 1 &&
                <div className='flex row'>
                    <img src={done} alt="done"/>
                    <p className='active text ml-2'>Riga</p>
                </div>}
            {number === 2 &&
                <div className='flex flex-col'>
                    {directionsData.map((direction, index) => (
                        <p className='text directionText' key={index}>{direction.name}</p>
                    ))}
                </div>}
            {number === 4 &&
                <div>4</div>}
            {number === 5 &&
                <div>5</div>}
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