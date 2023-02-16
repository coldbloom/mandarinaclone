import React from 'react';
import './PrincipleWork.scss'

const AdvantagesCard = ({image, title, description}) => {
    return (
        <div className='advantages-card'>
            <img src={image} alt=""/>
            <h4 className='advantages_title'>{title}</h4>
            <p className='advantages_description'>{description}</p>
        </div>
    );
};

export default AdvantagesCard;