import React from 'react';
import './MailingComp.scss'

const MailingComp = () => {
    return (
        <div className='mailing'>
            <div className='block'>
                <div className='circle_subsc'></div>
                <div className='circle_subsc2'></div>
                <div className='circle_subsc3'></div>
                <div className='content-wrapper px-15px'>
                    <p className='title'>Получайте новости на свою электронную почту</p>
                    <p className='description'>Отличные предложения, идеи и советы для успешного путешествия</p>
                    <input type="text"/>
                    <button>Подписаться</button>
                </div>
            </div>
        </div>
    );
};

export default MailingComp;