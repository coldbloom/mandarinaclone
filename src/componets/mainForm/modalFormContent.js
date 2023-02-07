import React from 'react';

const ModalFormContent = ({number}) => {
    return (
        <div>
            {number === 1 &&
                <div>1</div>}
            {number === 2 &&
                <div>2</div>}
            {number === 3 &&
                <div>3</div>}
            {number === 4 &&
                <div>4</div>}
            {number === 5 &&
                <div>5</div>}
            {number === 6 &&
                <div>6</div>}
        </div>
    );
};

export default ModalFormContent;