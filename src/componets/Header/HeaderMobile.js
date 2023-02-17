import React from 'react';
import logoBlue from "../../assets/images/header/header-logo.svg";

const HeaderMobile = () => {

    const [isMenuClicked, setMenuClicked] = React.useState(false)
    const [burgerClass, setBurgerClass] = React.useState("burger-bar unclicked")

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
        } else {
            setBurgerClass("burger-bar unclicked")
        }
        setMenuClicked(!isMenuClicked)
    }

    return (
        <header className='header-mobile'>
            <div className='container-xxl'>
                <div className='header-container px-15px'>
                    <img src={logoBlue} alt="Mandarina" className='logoBlue' />

                    <div className='block md:hidden flex flex-row'>
                        <div className='flex items-center box-border'>
                            <div className='burger-menu' onClick={updateMenu}>
                                <div className={burgerClass}></div>
                                <div className={burgerClass}></div>
                                <div className={burgerClass}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMobile;