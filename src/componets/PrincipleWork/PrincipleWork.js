import React from 'react';
import './PrincipleWork.scss'
import AdvantagesCard from "./AdvantagesCard";

import iconbox1 from '../../assets/images/icon box.png'
import iconbox2 from '../../assets/images/icon box2.png'
import iconbox3 from '../../assets/images/icon box3.png'

const PrincipleWork = () => {
    return (
        <div className='principle-work px-15px'>
            <h3>Принцип работы</h3>
            <p>Приложение Mandarina имеет множество преимуществ</p>
            <div className='advantages'>
                <AdvantagesCard
                    image={iconbox1}
                    title="Соблюдение сроков"
                    description="Своевременно и без задержек выполняем все необходимые действия для Вашего путешествия. В короткий срок подготовим предложение Вашего путешествия."
                >
                </AdvantagesCard>
                <AdvantagesCard
                    image={iconbox2}
                    title="Обеспечение качества"
                    description="Мы сотрудничаем только с надежными туристическими операторами и обеспечиваем сервис высокого уровня."
                >
                </AdvantagesCard>
                <AdvantagesCard
                    image={iconbox3}
                    title="Выгодные цены"
                    description="Мы предлагаем широкий выбор путешествий с возможностью сравнения цен, чтобы Вы могли выбрать для себя наиболее подходящий и выгодный вариант."
                >
                </AdvantagesCard>
            </div>
        </div>
    );
};

export default PrincipleWork;