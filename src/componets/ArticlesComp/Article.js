import React from 'react';
import './ArticleComp.scss'

const Article = ({image, title}) => {
    return (
        <div className="article">
            <div
                style={{backgroundImage: `url(${image})`}}
                className='image'>
                <p className='date'>18.10.2022</p>
            </div>
            <p className='name'>{title}</p>
        </div>
    );
};

export default Article;