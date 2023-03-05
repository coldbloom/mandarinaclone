import React from 'react';

const TypeFoodModule = ({handleChange}) => {
    return (
        <>
            <div className='filter_name'>
                Рейтинг гостинницы
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-RB" style={{display: "none"}} type="checkbox" value='RB' onChange={handleChange}/>
                <label htmlFor="input-RB" className="custom-checkbox"></label>
                <p>Без питания</p>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-BB" style={{display: "none"}} type="checkbox" value='BB' onChange={handleChange}/>
                <label htmlFor="input-BB" className="custom-checkbox"></label>
                <p>Завтрак</p>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-HB" style={{display: "none"}} type="checkbox" value='HB' onChange={handleChange}/>
                <label htmlFor="input-HB" className="custom-checkbox"></label>
                <p>Полупансион</p>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-FB" style={{display: "none"}} type="checkbox" value='FB' onChange={handleChange}/>
                <label htmlFor="input-FB" className="custom-checkbox"></label>
                <p>Полный пансион</p>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-AI" style={{display: "none"}} type="checkbox" value='AI' onChange={handleChange}/>
                <label htmlFor="input-AI" className="custom-checkbox"></label>
                <p>Всё включено</p>
            </div>
            <div className='wrapper_checkbox'>
                <input id="input-UAI" style={{display: "none"}} type="checkbox" value='UAI' onChange={handleChange}/>
                <label htmlFor="input-UAI" className="custom-checkbox"></label>
                <p>Всё включено+</p>
            </div>
        </>
    );
};

export default TypeFoodModule;