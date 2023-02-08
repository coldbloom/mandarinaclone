import React from 'react';

const SearchBox = ({setOpenForm, icon, title, field, item}) => {
    return (
        <div className='search-box' onClick={() => setOpenForm({item})}>
            <p className='search-box-title'>{title}</p>
            <div className='search-box-wrapper'>
                <img src={icon} alt=""/>
                <p className='search-box-input'>{field}</p>
            </div>
        </div>
    );
};

export default SearchBox;