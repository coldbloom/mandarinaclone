import React from 'react';
import './InviteComp.scss'
import searchIcon from '../../assets/images/IconSearch.svg'
import MainForm from "../mainForm/mainForm";

const InviteComp = () => {
    return (
        <div className='inviteComp px-15px'>
            <h1 className='text-left text-white title-text'>Найдите путешествие своей мечты с “Mandarina”</h1>

            <MainForm />

            <button className='searchButton'>
                <img src={searchIcon} alt="Поиск" className='img'/>
                <p className='text'>Искать</p>
            </button>
        </div>
    );
};

export default InviteComp;