import React from 'react';
import logo from './../../assets/images/Footer-logo.svg'

import facebook from './../../assets/images/footer/facebook.svg'
import instagram from './../../assets/images/footer/instagram.svg'

import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer px-15px'>
            <div className='logo-wrapper'>
                <img src={logo} alt="" className='footer-logo'/>
                <p className='logo-description'>Сервис для быстрого и простого оформления путешествий в любую точку мира</p>
            </div>

            <div className='content-1'>
                <h5>Дополнительно</h5>
                <p>Поиск тура</p>
                <p>Главная</p>
                <p>Контакты</p>
                <p>Блог</p>
            </div>

            <div className='content-2'>
                <h5>Дополнительно</h5>
                <p>Политика возврата</p>
                <p>Политика безопасности</p>
                <p>Политика файлов cookie</p>
                <p>Условия предоставления услуг</p>
            </div>

            <div className='content-3'>
                <h5>Контакты</h5>
                <p>+371 26 619 971</p>
                <p>info@mandarina.lv</p>
            </div>

            <div>
                <h5>Соц. сети</h5>
                <div>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;