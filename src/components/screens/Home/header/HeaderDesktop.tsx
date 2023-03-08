import React, { useState } from 'react'
import logoWhite from '@/assets/images/logo.svg'
import phone from '@/assets/images/header/phone.svg'
import mail from '@/assets/images/header/mail.svg'
import lang from '@/assets/images/header/lang.svg'
import { HiPhone } from 'react-icons/hi'
import { IoMdMail } from 'react-icons/io'
import { AiOutlineGlobal } from 'react-icons/ai'
import logoBlue from '@/assets/images/header/header-logo.svg'
import './HeaderDesktop.scss'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/button/Button'

const HeaderDesktop = () => {
	//@ts-ignore
	window.addEventListener('scroll', e => setScrollTop(window.pageYOffset))
	const [scrollTop, setScrollTop] = useState(0)
	const color = window.location.pathname !== '/' ? '#A69DA5' : 'transparent'
	return (
		<div
			className={`header_transparent ${
				scrollTop > 180 && 'activeHeader changeStyle'
			} ${scrollTop > 500 && 'activeHeaderAnimate'}`}
		>
			<div className='container-xxl header_container '>
				<div className='row'>
					<div className='col-12 nav_wrap'>
						<Link to={'/'}>
							<div
								className='logo'
								onClick={() =>
									console.log(window.location.pathname, '123')
								}
							>
								{scrollTop > 180 ? (
									<img src={logoBlue}></img>
								) : (
									<img src={logoWhite} alt='' />
								)}
							</div>
						</Link>
						<ul className='nav_ menu'>
							<Link to={'/'}>
								<li className='menu-item'>Главная</li>
							</Link>
							<Link to={'/search'}>
								<li className='menu-item'>Поиск тура</li>
							</Link>
							<Link to={'/contacts'}>
								<li className='menu-item'>Контакты</li>
							</Link>
							<Link to={'/blog'}>
								<li className='menu-item'>Блог</li>
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
							<div className='contactbody_ tel'>
								<HiPhone />
								<span>+371 26 619 971</span>
							</div>
							<div className='contactbody_ mail'>
								<IoMdMail />
								<span>info@mandarina.lv</span>
							</div>
						</div>
						<Button className='lang_body'>
							<AiOutlineGlobal />
							<span>RU</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderDesktop
