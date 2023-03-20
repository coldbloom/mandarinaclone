import React, { Suspense, useState } from 'react'
import logoWhite from '@/assets/images/logo.svg'
import phone from '@/assets/images/header/phone.svg'
import mail from '@/assets/images/header/mail.svg'
import lang from '@/assets/images/header/lang.svg'
import { HiPhone } from 'react-icons/hi'
import { IoMdMail } from 'react-icons/io'
import { AiOutlineGlobal } from 'react-icons/ai'
import logoBlue from '@/assets/images/header/header-logo.svg'
import './HeaderDesktop.scss'
import { Link, useLocation } from 'react-router-dom'
import Button from '@/components/ui/button/Button'
import { useTranslation } from 'react-i18next'

const HeaderDesktop = () => {
	const [visible, setVisible] = useState(false)

	//@ts-ignore
	window.addEventListener('scroll', e => setScrollTop(window.pageYOffset))
	const path = useLocation()
	const { t, i18n } = useTranslation()
	const changeLanguageHandler = (lang: string) => {
		i18n.changeLanguage('ru')
	}
	const lang = localStorage.getItem('i18nextLng')
	const location = useLocation()
	const [scrollTop, setScrollTop] = useState(0)
	const color = window.location.pathname !== '/' ? '#A69DA5' : 'transparent'
	return (
		<div
			className={`header_transparent ${
				scrollTop > 180 && 'activeHeader changeStyle'
			} ${scrollTop > 500 && 'activeHeaderAnimate'} `}
		>
			<div className='container-xxl header_container '>
				<div className='row'>
					<div className='col-12 nav_wrap'>
						<Link to={'/'}>
							<div className='logo'>
								{scrollTop > 180 ? (
									<img src={logoBlue}></img>
								) : (
									<img src={logoWhite} alt='' />
								)}
							</div>
						</Link>
						<ul className='nav_ menu'>
							<Link to={'/'}>
								<li
									className={`menu-item ${
										path.pathname === '/' && 'active-head'
									}`}
								>
									{t('main')}
								</li>
							</Link>
							<Link to={'/search'}>
								<li
									className={`menu-item ${
										path.pathname === '/search' &&
										'active-head'
									}`}
								>
									Поиск тура
								</li>
							</Link>
							<Link to={'/contacts'}>
								<li
									className={`menu-item ${
										path.pathname === '/contacts' &&
										'active-head'
									}`}
								>
									Контакты
								</li>
							</Link>
							<Link to={'/blog'}>
								<li
									className={`menu-item ${
										path.pathname === '/blog' &&
										'active-head'
									}`}
								>
									Блог
								</li>
							</Link>
						</ul>
						<Link to={'/get-offer'}>
							<div className='wrap_btn_offer'>
								<p className='btn_ get-offer hvr-event'>
									Получить предложение
								</p>
							</div>
						</Link>
						<div className='wrap_contact'>
							<a href='tel:37126619971'>
								<div className='contactbody_ tel'>
									<HiPhone />
									<span>+371 26 619 971</span>
								</div>
							</a>
							<a href='mailto:info@mandarina.lv'>
								<div className='contactbody_ mail'>
									<IoMdMail />
									<span>info@mandarina.lv</span>
								</div>
							</a>
						</div>
						<div className='relative'>
							<Button
								className='lang_body'
								onClick={() => {
									changeLanguageHandler('ru')
									setVisible(!visible)
								}}
							>
								<AiOutlineGlobal />
								<span>RU</span>
							</Button>
							<div
								className={`language-change ${
									visible && 'language-change-active'
								}`}
							>
								<p
									onClick={() => {
										setVisible(false)
									}}
								>
									RU
								</p>
								<p
									onClick={() => {
										setVisible(false)
									}}
								>
									LV
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderDesktop
