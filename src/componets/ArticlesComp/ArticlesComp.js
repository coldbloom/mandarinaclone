import React from 'react';
import './ArticleComp.scss'
import Article from "./Article";

const ArticlesComp = () => {
    return (
        <div className='article-comp px-15px'>
            <h3>Советы для твоего отдыха от экспертов по путешествиям!</h3>
            <p className='description'>Получите вдохновение для следующей поездки.</p>
            <div className='content-wrapper'>
                <Article title="Объединённые Арабские Эмираты – страна роскоши и пустыни" image="https://mandarina.lv/storage/posts/fwFKMJavvO8O8HYrOhApg148gnLXyYEblO9hY9L1.jpg"/>
                <Article title="Тенерифе – остров вечной весны" image="https://mandarina.lv/storage/posts/le69eL6X0Asek8HALblbBZA4G5SOma0xuHE4C4SX.jpg"/>
                <Article title="Хургада – главный туристический центр" image="https://mandarina.lv/storage/posts/mGIAHzFZzkxyKPvDvBOvEnI5K7c9Gs2YPrtUA0Aw.jpg"/>
            </div>
            <button>Открыть все статьи</button>
        </div>
    );
};

export default ArticlesComp;