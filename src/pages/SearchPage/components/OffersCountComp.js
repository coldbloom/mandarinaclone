import React, {useState} from 'react';
import './../SearchPage.scss'

import Select from 'react-select'
//import {selectOptions} from "@testing-library/user-event/dist/select-options";

const options = [
    { value: "Самые популярные", label: "Самые популярные" },
    { value: "Минимальная цена - максимальная", label: "Минимальная цена - максимальная" },
    { value: "Максимальная цена - минимальная", label: "Максимальная цена - минимальная" },
    { value: "Кол-во звёзд 1-5", label: "Кол-во звёзд 1-5" },
    { value: "Кол-во звёзд 5-1", label: "Кол-во звёзд 5-1" },
];

const OffersCountComp = ({hotelsCount}) => {
    const [selectedOption, setSelectedOption] = useState("Самые популярные");

    const onChange = (newValue) => {
        setSelectedOption(newValue.value)
        //console.log(selectedOption)
    }
    const getValue = () => {
        return selectedOption ? options.find(x => x.value === selectedOption) : ''
    }

    return (
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12 offers-count-comp'>
                    <div className='search_count_body'>
                        <div>
                            <b>{hotelsCount}</b>
                            предложения путешествий
                        </div>
                        <div className='search-sort-wrapper'>
                            <div className='search_sort'>
                                Сортировать
                            </div>
                            <div className='select_wrapper'>
                                <Select
                                    options={options}
                                    value={getValue()}
                                    onChange={onChange}
                                    classNamePrefix='custom-select'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersCountComp;