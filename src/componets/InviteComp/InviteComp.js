import React from 'react';
import './InviteComp.scss'
import searchIcon from '../../assets/images/IconSearch.svg'
import MainForm from "../mainForm/mainForm";

const InviteComp = () => {
    return (
        <div className='inviteComp'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='title-first-screen'>
                            Найдите путешествие своей мечты с “Mandarina”
                        </h1>
                    </div>
                </div>

                <MainForm />

                <button className='searchButton'>
                    <img src={searchIcon} alt="Поиск" className='img'/>
                    <p className='text'>Искать</p>
                </button>
            </div>
        </div>
    );
};

export default InviteComp;