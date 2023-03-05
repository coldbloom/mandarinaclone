import React from 'react';

const SearchBox = ({setOpenForm, icon, title, field, item, directionName}) => {
    return (
        <>
            <div className={`search-box w-[100px] ${item === 1 && 'search-box-first-child'} ${item === 6 && 'search-box-last-child'}`}
                 onClick={() => setOpenForm(item)}
            >
                <p className='search-box-title'>{title}</p>
                <div className='search-box-wrapper'>
                    <img src={icon} alt=""/>
                    <p className='search-box-input'>{directionName ? directionName : field}</p>
                </div>
            </div>
            {item !== 6 && <div className='box_vert_line'></div>}
        </>
    );
};

export default SearchBox;