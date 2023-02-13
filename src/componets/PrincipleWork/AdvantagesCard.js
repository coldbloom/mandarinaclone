import React from 'react';
import './PrincipleWork.scss'

const AdvantagesCard = ({image, title, description}) => {
    return (
        <div className='advantages-card'>
            <img src={image} alt=""/>
            <h4>{title}</h4>
            <div className='description-container'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AdvantagesCard;