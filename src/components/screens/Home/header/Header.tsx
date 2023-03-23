import React, { FC } from 'react'
import './Header.scss'
import logoBlue from '@/assets/images/header/header-logo.svg'
import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'

import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1200 }
const Header:FC<any> = ({lang,setLang,getPost}) => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		'desktop'
	)

	return (
		<>{breakpoint === 'desktop' ? <HeaderDesktop lang={lang} setLang={setLang}/> : <HeaderMobile lang={lang} setLang={setLang}/>}</>
	)
}

export default Header
