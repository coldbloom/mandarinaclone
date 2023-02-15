import React, {useRef, useState} from 'react';
import './mainForm.scss'
import ModalFormContent from "./modalFormContent";

import closeArrow from './../../assets/images/close-arrow.svg'
import SearchBox from "./searchBox";

import FlatPickerCalendar from "../FlatPickerCalendar";

import icon_1 from './../../assets/images/1.svg'
import icon_2 from './../../assets/images/2.svg'
import icon_4 from './../../assets/images/4.svg'
import icon_5 from './../../assets/images/5.svg'
import icon_6 from './../../assets/images/6.svg'

const MainForm = () => {

    const [openForm, setOpenForm] = useState(0)
    const modalRef = useRef(null)

    React.useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current?.contains(e.target)) {
                setOpenForm(0)
            }
        };

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <>
            <div>
                <SearchBox setOpenForm={setOpenForm} title="Город отправления" field="Рига" icon={icon_1} item={1}/>
                <SearchBox setOpenForm={setOpenForm} title="Направление" field="Выберите направление" icon={icon_2} item={2}/>
                <FlatPickerCalendar />
                <SearchBox setOpenForm={setOpenForm} title="Ночей" field="3-18 ночей" icon={icon_4} item={4}/>
                <SearchBox setOpenForm={setOpenForm} title="Гости" field="2" icon={icon_5} item={5}/>
                <SearchBox setOpenForm={setOpenForm} title="Питание" field="Всё включено" icon={icon_6} item={6}/>
            </div>

            {
                (openForm !== 0) &&
                <div className='modalWindow' ref={modalRef}>
                    {
                        //console.log('open modal')
                        (openForm !== 3) &&
                        <>
                            <div onClick={() => setOpenForm(0)} className="close_select_body">
                                <img src={closeArrow} alt="close"/>
                            </div>
                            <ModalFormContent number={openForm}/>
                        </>
                    }
                </div>
            }
            {
                (openForm === 3) &&
                <FlatPickerCalendar />
            }
        </>
    );
};

export default MainForm;