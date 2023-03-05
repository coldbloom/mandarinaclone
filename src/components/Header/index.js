import React from 'react';
import './Header.scss'
import logoBlue from '../../assets/images/header/header-logo.svg'
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop"

import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = {mobile: 0, tablet: 768, desktop: 1200}
const Header = () => {

    const {breakpoint, maxWidth, minWidth} = useBreakpoint(BREAKPOINTS, 'desktop');

    return (
        <>
            {
                breakpoint === 'desktop'
                    ? <HeaderDesktop/>
                    : <HeaderMobile/>
            }
        </>
    );
};

export default Header;