import React from 'react';
import logo from './../../assets/images/Footer-logo.svg'

import facebook from './../../assets/images/footer/facebook.svg'
import instagram from './../../assets/images/footer/instagram.svg'
import payments from './../../assets/images/footer/paymentsupport.png'

import './Footer.scss'

const Footer = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.screen.width);

    React.useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.screen.width)
        };
        // Ваш код
        console.log(windowWidth)
        return () => {
            window.onresize = false
        };
    }, [windowWidth]);
    return (
        <div className='footer container-xxl 2xl:container'>
            <div className='block-1-wrapper'>
                <div className='logo-wrapper'>
                    <img src={logo} alt="" className='footer-logo'/>
                    <p className='logo-description'>Сервис для быстрого и простого оформления путешествий в любую точку
                        мира</p>
                </div>

                <div className='content-1'>
                    <h5 className='title-footer'>Дополнительно</h5>
                    <div className='ul'>
                        <p className='li'>Поиск тура</p>
                        <p className='li'>Главная</p>
                        <p className='li'>Контакты</p>
                        <p className='li'>Блог</p>
                    </div>
                </div>

                <div className='content-2'>
                    <h5 className='title-footer'>Дополнительно</h5>
                    <div className='ul'>
                        <p className='li'>Политика возврата</p>
                        <p className='li'>Политика безопасности</p>
                        <p className='li'>Политика файлов cookie</p>
                        <p className='li'>Условия предоставления услуг</p>
                    </div>
                </div>

                {windowWidth > 1200 &&
                    <div className='content-3'>
                        <h5 className='title-footer'>Контакты</h5>
                        <div className='ul-last'>
                            <p className='li'>+371 26 619 971</p>
                            <p className='li'>info@mandarina.lv</p>
                        </div>
                    </div>
                }
            </div>
            <div className='block-2-wrapper'>
                {windowWidth < 1200 &&
                    <div className='content-3'>
                        <h5 className='title-footer'>Контакты</h5>
                        <div className='ul-last'>
                            <p className='li'>+371 26 619 971</p>
                            <p className='li'>info@mandarina.lv</p>
                        </div>
                    </div>
                }

                <div className='content-4'>
                    <h5 className='title-footer title-footer-soc-net'>Соц. сети</h5>
                    <div className='social-net-wrapper'>
                        <img src={facebook} alt="" className='social-net-img'/>
                        <img src={instagram} alt="" className='social-net-img'/>
                    </div>
                </div>
            </div>

            <div className='main-footer'>
                <div className='wrapper'>
                    <p>MANDARINA - © 2022 Все права защищены</p>
                    <div>
                        <img src={payments} alt="" className='img'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;