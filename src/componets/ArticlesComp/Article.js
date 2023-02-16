import React from 'react';
import './ArticleComp.scss'

const Article = ({image, title}) => {
    return (
        <div className="col-12 col-lg-4 card_wrap card_wrap4">
            <div className='card_body'>
                <div
                    style={{backgroundImage: `url(${image})`}}
                    className='card_img_article card_img_article3 '
                >
                    <div className='article_date'>18.10.2022</div>
                    <button className='btn_watch hvr-event '>Посмотреть</button>
                </div>
                <div className='card_description_body'>
                    <a href="" className="article_title">{title}</a>
                </div>
            </div>
        </div>
    );
};

export default Article;