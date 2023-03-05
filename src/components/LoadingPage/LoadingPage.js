import React from 'react';
import './LoadingPage.scss'
import preloader from './../../assets/images/preloader.png'

const LoadingPage = () => {
    return (
        <div className='loadingPage'>
            <img src={preloader} alt="Загрузка" className="logo"/>
        </div>
    );
};

export default LoadingPage;