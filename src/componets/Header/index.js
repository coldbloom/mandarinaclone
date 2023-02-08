import React from 'react';
import './Header.scss'
import logoBlue from './../../assets/images/logofooter.svg'
const Header = () => {

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
            <div className='header-container px-15px'>
                {/*<img src={logoBlue} alt="Mandarina" className='logoBlue'/>*/}
                <svg viewBox="0 0 197 50" fill="#3982CB" xmlns="http://www.w3.org/2000/svg" className='logoBlue'>
                    <path
                        d="M67.1852 19.432H71.6067V36.5696H67.1852V34.5473C65.8599 36.2154 63.9976 37.0494 61.5984 37.0494C59.3134 37.0494 57.3483 36.1811 55.7031 34.4445C54.0807 32.685 53.2695 30.5371 53.2695 28.0008C53.2695 25.4644 54.0807 23.328 55.7031 21.5914C57.3483 19.8319 59.3134 18.9522 61.5984 18.9522C63.9976 18.9522 65.8599 19.7862 67.1852 21.4543V19.432ZM59.0277 31.4968C59.9189 32.388 61.05 32.8336 62.421 32.8336C63.792 32.8336 64.9231 32.388 65.8142 31.4968C66.7282 30.5828 67.1852 29.4175 67.1852 28.0008C67.1852 26.5841 66.7282 25.4302 65.8142 24.539C64.9231 23.625 63.792 23.168 62.421 23.168C61.05 23.168 59.9189 23.625 59.0277 24.539C58.1366 25.4302 57.691 26.5841 57.691 28.0008C57.691 29.4175 58.1366 30.5828 59.0277 31.4968Z"
                        fill="#3982CB;"></path>
                    <path
                        d="M85.1445 18.9522C87.0182 18.9522 88.5606 19.5805 89.7717 20.8373C91.0056 22.0941 91.6225 23.8307 91.6225 26.0471V36.5696H87.201V26.5955C87.201 25.453 86.8926 24.5847 86.2756 23.9906C85.6587 23.3737 84.8361 23.0652 83.8078 23.0652C82.6653 23.0652 81.7513 23.4194 81.0658 24.1277C80.3803 24.8361 80.0376 25.8986 80.0376 27.3153V36.5696H75.6161V19.432H80.0376V21.3514C81.1115 19.7519 82.8138 18.9522 85.1445 18.9522Z"
                        fill="#3982CB;"></path>
                    <path
                        d="M108.388 12.577H112.81V36.5696H108.388V34.5473C107.086 36.2154 105.235 37.0494 102.836 37.0494C100.528 37.0494 98.5512 36.1811 96.906 34.4445C95.2836 32.685 94.4725 30.5371 94.4725 28.0008C94.4725 25.4644 95.2836 23.328 96.906 21.5914C98.5512 19.8319 100.528 18.9522 102.836 18.9522C105.235 18.9522 107.086 19.7862 108.388 21.4543V12.577ZM100.231 31.4968C101.145 32.388 102.287 32.8336 103.658 32.8336C105.029 32.8336 106.16 32.388 107.051 31.4968C107.943 30.5828 108.388 29.4175 108.388 28.0008C108.388 26.5841 107.943 25.4302 107.051 24.539C106.16 23.625 105.029 23.168 103.658 23.168C102.287 23.168 101.145 23.625 100.231 24.539C99.3395 25.4302 98.8939 26.5841 98.8939 28.0008C98.8939 29.4175 99.3395 30.5828 100.231 31.4968Z"
                        fill="#3982CB;"></path>
                    <path
                        d="M129.878 19.432H134.299V36.5696H129.878V34.5473C128.552 36.2154 126.69 37.0494 124.291 37.0494C122.006 37.0494 120.041 36.1811 118.396 34.4445C116.773 32.685 115.962 30.5371 115.962 28.0008C115.962 25.4644 116.773 23.328 118.396 21.5914C120.041 19.8319 122.006 18.9522 124.291 18.9522C126.69 18.9522 128.552 19.7862 129.878 21.4543V19.432ZM121.72 31.4968C122.611 32.388 123.743 32.8336 125.114 32.8336C126.485 32.8336 127.616 32.388 128.507 31.4968C129.421 30.5828 129.878 29.4175 129.878 28.0008C129.878 26.5841 129.421 25.4302 128.507 24.539C127.616 23.625 126.485 23.168 125.114 23.168C123.743 23.168 122.611 23.625 121.72 24.539C120.829 25.4302 120.384 26.5841 120.384 28.0008C120.384 29.4175 120.829 30.5828 121.72 31.4968Z"
                        fill="#3982CB;"></path>
                    <path
                        d="M142.73 22.3797C143.141 21.2829 143.816 20.4603 144.752 19.9119C145.712 19.3635 146.775 19.0893 147.94 19.0893V24.0249C146.592 23.8649 145.381 24.1391 144.307 24.8475C143.256 25.5558 142.73 26.7326 142.73 28.3778V36.5696H138.309V19.432H142.73V22.3797Z"
                        fill="#3982CB;"></path>
                    <path
                        d="M152.719 17.3755C151.988 17.3755 151.348 17.1127 150.8 16.5872C150.275 16.0388 150.012 15.399 150.012 14.6678C150.012 13.9366 150.275 13.2968 150.8 12.7484C151.348 12.2 151.988 11.9258 152.719 11.9258C153.474 11.9258 154.113 12.2 154.639 12.7484C155.187 13.2968 155.461 13.9366 155.461 14.6678C155.461 15.399 155.187 16.0388 154.639 16.5872C154.113 17.1127 153.474 17.3755 152.719 17.3755ZM150.526 36.5696V19.432H154.947V36.5696H150.526Z"
                        fill="#3982CB;"></path>
                    <path
                        d="M168.523 18.9522C170.396 18.9522 171.939 19.5805 173.15 20.8373C174.384 22.0941 175.001 23.8307 175.001 26.0471V36.5696H170.579V26.5955C170.579 25.453 170.271 24.5847 169.654 23.9906C169.037 23.3737 168.214 23.0652 167.186 23.0652C166.043 23.0652 165.129 23.4194 164.444 24.1277C163.758 24.8361 163.416 25.8986 163.416 27.3153V36.5696H158.994V19.432H163.416V21.3514C164.49 19.7519 166.192 18.9522 168.523 18.9522Z"
                        fill="#3982CB;"></path>
                    <path
                        d="M191.911 19.432H196.333V36.5696H191.911V34.5473C190.586 36.2154 188.724 37.0494 186.325 37.0494C184.04 37.0494 182.074 36.1811 180.429 34.4445C178.807 32.685 177.996 30.5371 177.996 28.0008C177.996 25.4644 178.807 23.328 180.429 21.5914C182.074 19.8319 184.04 18.9522 186.325 18.9522C188.724 18.9522 190.586 19.7862 191.911 21.4543V19.432ZM183.754 31.4968C184.645 32.388 185.776 32.8336 187.147 32.8336C188.518 32.8336 189.649 32.388 190.54 31.4968C191.454 30.5828 191.911 29.4175 191.911 28.0008C191.911 26.5841 191.454 25.4302 190.54 24.539C189.649 23.625 188.518 23.168 187.147 23.168C185.776 23.168 184.645 23.625 183.754 24.539C182.863 25.4302 182.417 26.5841 182.417 28.0008C182.417 29.4175 182.863 30.5828 183.754 31.4968Z"
                        fill="#3982CB;"></path>
                    <rect y="0.5" width="48.5564" height="48.5564" rx="11" fill="#3982CB"></rect>
                    <path className="last_path"
                          d="M38.1305 10.4971V39.0596H32.7036V20.5348L24.9 33.796H24.2662L16.4626 20.5756V39.0596H10.9961V10.4971H16.621L24.5831 24.0031L32.5056 10.4971H38.1305Z"
                          fill="white"></path>
                </svg>
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
        </header>
    );
};

export default Header;