import React from 'react';
import Header from "../../componets/Header";
import './Contacts.scss'

const Contacts = () => {
    return (
        <>
            <div className='bg-gray-wrapper'>
                <Header/>
            </div>
            <main>
                <div className='contacts'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <h1 className='block_title center_title contact_title'>
                                    Контакты компании Mandarina
                                </h1>
                                <div className='block_description blog_desc'>
                                    Контактная информация и реквизиты
                                </div>
                            </div>
                        </div>
                        <div className='row contacts_row'>
                            <div className='col-12 col-lg-7'>
                                <div className='form_contact_wrapper'>
                                    <form action="">
                                        <div className='form_name'>Свяжитесь с нами</div>
                                        <div className='input_wpap_contact first'>
                                            <label htmlFor="">Имя</label>
                                            <input type="text"/>
                                        </div>
                                        <div className='input_wpap_contact'>
                                            <label htmlFor="">Фамилия</label>
                                            <input type="text"/>
                                        </div>
                                        <div className='input_wpap_contact'>
                                            <label htmlFor="">Э-почта</label>
                                            <input type="text"/>
                                        </div>
                                        <div className='input_wpap_contact'>
                                            <label htmlFor="">Номер телефон</label>
                                            <input type="text"/>
                                        </div>
                                        <div className='input_wpap_contact'>
                                            <label htmlFor="">Ваш запрос</label>
                                            <textarea type="text" placeholder="Здесь Вы можете задать вопрос или описать ситуацию, с которой Вы столкнулись."/>
                                        </div>
                                    </form>
                                    <button className='send_contact hvr-event'>Отправить</button>
                                </div>
                            </div>
                            <div className='col-12 col-lg-5'>
                                <div className='contact_information'>
                                    <h2 className='requisites_title_txt'>Реквизиты</h2>
                                    iSYTC, SIA
                                    <br/>
                                    <br/>
                                    <span className='fw500'>PTAC лицензия:</span>
                                    <a href="/docs/licence.pdf" target="_blank">T-2019-265</a>
                                    <br/>
                                    <span className="fw500">Юр. адрес:</span>
                                    Katrīnas dambis 24B - 12, Rīga, LV-1045
                                    <br/>
                                    <span className="fw500">Рег. номер:</span>
                                    40103282473
                                    <br/>
                                    <span className="fw500">AS SEB banka:</span>
                                    LV23UNLA0050015289965
                                    <br/>
                                    <br/>
                                    <span className="fw500">SWIFT:</span>
                                    UNLALV2X
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contacts;