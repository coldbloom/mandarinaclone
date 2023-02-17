import React from 'react';
import logoBlue from '../../assets/images/header/header-logo.svg'
import phone from '../../assets/images/header/phone.svg'
import mail from '../../assets/images/header/mail.svg'
import lang from '../../assets/images/header/lang.svg'

import './HeaderDesktop.scss'

const HeaderDesktop = () => {
    return (
        <div className='header_transparent'>
            <div className='container-xxl header_container '>
                <div className='row'>
                    <div className='col-12 nav_wrap'>
                        <div className='logo'>
                            <img src={logoBlue} alt=""/>
                        </div>
                        <ul className='nav_ menu'>
                            <li className='menu-item'>Главная</li>
                            <li className='menu-item'>Поиск тура</li>
                            <li className='menu-item'>Контакты</li>
                            <li className='menu-item'>Блог</li>
                        </ul>
                        <div className='wrap_btn_offer'>
                            <p className='btn_ get-offer hvr-event'>Получить предложение</p>
                        </div>
                        <div className='wrap_contact'>
                            <div className='contactbody_ tel'>
                                <img src={phone} alt=""/>
                                <span>+371 26 619 971</span>
                            </div>
                            <div className='contactbody_ mail'>
                                <img src={mail} alt=""/>
                                <span>info@mandarina.lv</span>
                            </div>
                        </div>
                        <button className='lang_body'>
                            <img src={lang} alt=""/>
                            <span>RU</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;