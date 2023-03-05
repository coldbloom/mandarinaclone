import React from 'react';
import logoWhite from '../../assets/images/header/header-desktop-white-logo.svg'
import phone from '../../assets/images/header/phone.svg'
import mail from '../../assets/images/header/mail.svg'
import lang from '../../assets/images/header/lang.svg'

import './HeaderDesktop.scss'
import {Link} from "react-router-dom";

const HeaderDesktop = () => {

    const color = window.location.pathname !== '/' ? '#A69DA5' : 'transparent'
    return (
        <div className='header_transparent'>
            <div className='container-xxl header_container '>
                <div className='row'>
                    <div className='col-12 nav_wrap'>
                        <Link to={"/"}>
                            <div className='logo'>
                                <img src={logoWhite} alt=""/>
                            </div>
                        </Link>
                        <ul className='nav_ menu'>
                            <Link to={"/"}><li className='menu-item'>Главная</li></Link>
                            <Link to={"/search"}><li className='menu-item'>Поиск тура</li></Link>
                            <Link to={"/contacts"}><li className='menu-item'>Контакты</li></Link>
                            <Link to={"/blog"}><li className='menu-item'>Блог</li></Link>
                        </ul>
                        <Link to={"/get-offer"}>
                            <div className='wrap_btn_offer'>
                                <p className='btn_ get-offer hvr-event'>Получить предложение</p>
                            </div>
                        </Link>
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