import React from 'react';
import './ArticleComp.scss'
import Article from "./Article";

const ArticlesComp = () => {
    return (
        <div className='article-wrap'>
            <div className='carusel_wrap carusel_wrap4 mt_block'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 col-md-10'>
                            <h3 className='block_title'>Советы для твоего отдыха от экспертов по путешествиям!</h3>
                            <p className='block_description '>Получите вдохновение для следующей поездки.</p>
                        </div>
                    </div>
                </div>
                <div className='container-xxl carusel_container'>
                    <div className='row articles_row'>
                        <Article title="Объединённые Арабские Эмираты – страна роскоши и пустыни" image="https://mandarina.lv/storage/posts/fwFKMJavvO8O8HYrOhApg148gnLXyYEblO9hY9L1.jpg"/>
                        <Article title="Тенерифе – остров вечной весны" image="https://mandarina.lv/storage/posts/le69eL6X0Asek8HALblbBZA4G5SOma0xuHE4C4SX.jpg"/>
                        <Article title="Хургада – главный туристический центр" image="https://mandarina.lv/storage/posts/mGIAHzFZzkxyKPvDvBOvEnI5K7c9Gs2YPrtUA0Aw.jpg"/>
                    </div>
                </div>
            </div>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <a href="" className='btn_article_all hvr-event'>Открыть все статьи</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesComp;