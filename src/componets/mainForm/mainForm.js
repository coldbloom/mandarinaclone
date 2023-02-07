import React, {useState} from 'react';
import './mainForm.scss'
import ModalFormContent from "./modalFormContent";

import closeArrow from './../../assets/images/close-arrow.svg'

const MainForm = () => {

    const [openForm, setOpenForm] = useState(0)

    return (
        <>
            <div>
                <div className='search-box' onClick={() => setOpenForm(1)}>
                    <p className='search-box-title'>Город отправления</p>
                    <div className='search-box-wrapper'>
                        <svg width="24" height="24" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.363 2.60149C14.1044 1.35931 12.5008 0.513379 10.7551 0.170666C9.00943 -0.172047 7.19997 0.00385319 5.55555 0.676122C3.91113 1.34839 2.50562 2.48684 1.51674 3.9475C0.527864 5.40816 3.51041e-05 7.12544 0 8.88217C0 13.6816 4.59772 17.6733 7.06819 19.818C7.41139 20.1186 7.70789 20.3732 7.94448 20.5907C8.23132 20.8538 8.6084 21 8.99998 21C9.39157 21 9.76865 20.8538 10.0555 20.5907C10.2921 20.3732 10.5886 20.1156 10.9318 19.818C13.4022 17.6733 18 13.6816 18 8.88217C18.003 7.71519 17.7716 6.5592 17.3189 5.48112C16.8663 4.40304 16.2015 3.42428 15.363 2.60149ZM10.1073 18.891C9.75696 19.1916 9.45336 19.4582 9.20357 19.6927C9.14772 19.742 9.07542 19.7693 9.00049 19.7693C8.92556 19.7693 8.85326 19.742 8.79741 19.6927C8.54762 19.4622 8.24504 19.1996 7.89371 18.891C5.57149 16.8746 1.24894 13.1214 1.24894 8.87816C1.24894 6.84868 2.06578 4.90232 3.51976 3.46727C4.97375 2.03221 6.94577 1.226 9.00202 1.226C11.0583 1.226 13.0303 2.03221 14.4843 3.46727C15.9383 4.90232 16.7551 6.84868 16.7551 8.87816C16.752 13.1244 12.4295 16.8746 10.1073 18.891Z" fill="#868F98"></path>
                            <path d="M9 5C8.20888 5 7.43552 5.2346 6.77772 5.67412C6.11992 6.11365 5.60723 6.73836 5.30448 7.46927C5.00173 8.20017 4.92252 9.00444 5.07686 9.78036C5.2312 10.5563 5.61216 11.269 6.17157 11.8284C6.73098 12.3878 7.44372 12.7688 8.21964 12.9231C8.99556 13.0775 9.79983 12.9983 10.5307 12.6955C11.2616 12.3928 11.8864 11.8801 12.3259 11.2223C12.7654 10.5645 13 9.79112 13 9C12.9989 7.93947 12.5771 6.92268 11.8272 6.17277C11.0773 5.42286 10.0605 5.00108 9 5ZM9 11.7424C8.4576 11.7424 7.92737 11.5816 7.47638 11.2803C7.02539 10.9789 6.67388 10.5506 6.46631 10.0495C6.25874 9.54837 6.20443 8.99696 6.31025 8.46497C6.41607 7.93299 6.67726 7.44433 7.0608 7.0608C7.44434 6.67726 7.93299 6.41607 8.46498 6.31025C8.99696 6.20443 9.54837 6.25874 10.0495 6.46631C10.5506 6.67388 10.9789 7.02538 11.2803 7.47638C11.5816 7.92737 11.7424 8.45759 11.7424 9C11.7416 9.72709 11.4524 10.4242 10.9383 10.9383C10.4242 11.4524 9.72709 11.7416 9 11.7424Z" fill="#868F98"></path>
                        </svg>
                        <p className='search-box-input'>Рига</p>
                    </div>
                </div>
                <div className='search-box' onClick={() => setOpenForm(2)}>
                    <p className='search-box-title'>Направление</p>
                    <div className='search-box-wrapper'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p className='search-box-input'>Выберите направление</p>
                    </div>
                </div>
                <div className='search-box' onClick={() => setOpenForm(3)}>
                    <p className='search-box-title'>Вылет</p>
                    <div className='search-box-wrapper'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4651 2.79688H4.68728C3.52135 2.79688 2.57617 3.74205 2.57617 4.90799V19.6858C2.57617 20.8517 3.52135 21.7969 4.68728 21.7969H19.4651C20.631 21.7969 21.5762 20.8517 21.5762 19.6858V4.90799C21.5762 3.74205 20.631 2.79688 19.4651 2.79688Z" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16.5762 0.796875V4.79688" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7.57617 0.796875V4.79688" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M2.57617 8.79688H21.5762" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p className='search-box-input'>Дата</p>
                    </div>
                </div>
                <div className='search-box' onClick={() => setOpenForm(4)}>
                    <p className='search-box-title'>Ночей</p>
                    <div className='search-box-wrapper'>
                        <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7129 1C15.8272 2.64942 16.4217 4.59483 16.4199 6.58533C16.4199 12.1523 11.8578 16.6653 6.22975 16.6653C4.3897 16.6687 2.58286 16.1753 1 15.237C2.73603 18.6543 6.30976 21 10.4392 21C16.2719 21 21 16.323 21 10.5533C21 6.289 18.4153 2.62367 14.7129 1Z" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p className='search-box-input'>3-18 ночей</p>
                    </div>
                </div>
                <div className='search-box' onClick={() => setOpenForm(5)}>
                    <p className='search-box-title'>Гости</p>
                    <div className='search-box-wrapper'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p className='search-box-input'>2</p>
                    </div>
                </div>
                <div className='search-box' onClick={() => setOpenForm(6)}>
                    <p className='search-box-title'>Питание</p>
                    <div className='search-box-wrapper'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 2.5V7.5C4 10 7 10 7 10C7 10 10 10 10 7.5V2.5M7 2V22V2Z" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M15 6C15 2 19 2 19 2V10.5H15V6Z" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19 10.5V22M19 10.5H15V6C15 2 19 2 19 2V10.5Z" stroke="#868F98" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p className='search-box-input'>Всё включено</p>
                    </div>
                </div>
            </div>

            {
                (openForm !== 0) &&
                <div className='modalWindow'>
                    <div onClick={() => setOpenForm(0)} className="close_select_body">
                        <img src={closeArrow} alt="close"/>
                    </div>
                    <ModalFormContent number={openForm}/>
                </div>
            }
        </>
    );
};

export default MainForm;