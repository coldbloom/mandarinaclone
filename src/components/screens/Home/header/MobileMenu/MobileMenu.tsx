import React, { useState } from 'react'
import './MobileMenu.scss'

import { Link, useLocation } from 'react-router-dom'
import Button from '@/components/ui/button/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import svgArrow from '@/assets/images/arrowExit.svg'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
const MobileMenu = ({ closed, lang, setLang }: any) => {
	const location = useLocation()

	const [activeLink, setActiveLink] = React.useState('main')
	const [activeLink2, setActiveLink2] = React.useState(0)
	const saveActiveClass = (link: any) => {
		setActiveLink(link)
		setActiveLink2(1)
	}
	const [visible,setVisible] = useState(false)
	const changeLanguageHandler = (lang: string) => {
		i18next.changeLanguage(lang)
		setLang(lang)
		//@ts-ignore
		// getPost.refetch('ru')
	}

	const [isDop, setIsDop] = useState(false)
	const {t} = useTranslation()
	return (
		<div className='mobile-menu-wrap container-xxl'>
			<div className='row'>
				<div className='col-12'>
					{/* {!isDop && ( */}
						<ul className={`menu_mob_list ${isDop && 'hidden-first-table'}`}>
							<li className='_item _first_menu'>
								<Link
									to='/'
									className={`item_a_menu ${
										location.pathname === '/' && 'active'
									}`}
									onClick={() => {
										closed()
										saveActiveClass('main')
									}}
								>
									{t('main')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/search'
									className={`item_a_menu ${
										location.pathname === '/search' &&
										'active'
									}`}
									onClick={() => {
										closed()
										setActiveLink('search')
									}}
								>
									{t('search_tours')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/contacts'
									className={`item_a_menu ${
										location.pathname === '/contacts' &&
										'active'
									}`}
									onClick={() => {
										closed()
										saveActiveClass('contacts')
									}}
								>
									{t('contacts')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/blog'
									className={`item_a_menu ${
										location.pathname === '/blog' &&
										'active'
									}`}
									onClick={() => {
										closed()
										saveActiveClass('blog')
									}}
								>
										{t('blog')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/get-offer'
									className={`item_a_menu ${
										location.pathname === '/get-offer' &&
										'active'
									}`}
									onClick={() => {
										closed()
										saveActiveClass('grt-offer')
									}}
								>
									{t('get_offer')}
								</Link>
							</li>
							<li
								onClick={() =>{
									setVisible(!visible)
									setIsDop(!isDop)
								}}
								className='_item _dop_item'
							>
								<button className='item_a_menu _dop'>
								{t('additionally')}
								</button>
							</li>
						</ul>
					{/* // )  */}
					{/* )} */}
						<ul className={`menu_mob_list visible_dop_item ${visible && 'visible_dop_item_active'}`}>
							<li
								onClick={() => setIsDop(!isDop)}
								className='_item _dop_item mt-0'
							>
								<button className='item_a_menu _dop active'>
								{t('additionally')}
								</button>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/terms'
									className='item_a_menu'
									onClick={() => {
										closed()
										saveActiveClass('grt-offer')
									}}
								>
									{t('refund_policy')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/privacy-policy'
									className='item_a_menu'
									onClick={() => {
										closed()
										saveActiveClass('grt-offer')
									}}
								>
										{t('security_policy')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/return-policy'
									className='item_a_menu'
									onClick={() => {
										closed()
										saveActiveClass('grt-offer')
									}}
								>
									{t('cookie_policy')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Link
									to='/cookies'
									className='item_a_menu'
									onClick={() => {
										closed()
										saveActiveClass('grt-offer')
									}}
								>
									{t('terms_of_service')}
								</Link>
							</li>
							<li className='_item _first_menu'>
								<Button
									onClick={() => {
										setIsDop(!isDop)
										setVisible(!visible)
									}}
									className='arrowButtonExitHeader'
								>
									<img src={svgArrow} alt='arrow' />
								</Button>
							</li>
						</ul>
				

					<div className='contacts-wrapper'>
						<div className='tel-wrapper'>
							<a href='tel:+371 26 619 971'>
								<svg
									width='17'
									height='16'
									viewBox='0 0 17 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M15.1712 10.5022C14.1916 10.5022 13.2298 10.349 12.3183 10.0478C11.8717 9.89542 11.3227 10.0352 11.0501 10.3151L9.25105 11.6732C7.16469 10.5595 5.87952 9.27475 4.78102 7.20404L6.09915 5.45188C6.4416 5.10988 6.56444 4.61029 6.41727 4.14154C6.11477 3.22529 5.96111 2.26392 5.96111 1.28392C5.96115 0.575958 5.38519 0 4.67728 0H1.73895C1.03103 0 0.455078 0.575958 0.455078 1.28387C0.455078 9.39846 7.05664 16 15.1712 16C15.8791 16 16.4551 15.424 16.4551 14.7161V11.786C16.455 11.0781 15.8791 10.5022 15.1712 10.5022Z'
										fill='#3982CB'
									></path>
								</svg>
								<div>+371 26 619 971</div>
							</a>
						</div>
						<div className='tel-wrapper email'>
							<a href='mailto:info@mandarina.lv'>
								<svg
									width='18.91'
									height='14.55'
									viewBox='0 0 26 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M3.15309 0.0392771C2.17336 0.241684 1.27724 0.847633 0.709452 1.69162C0.439782 2.09257 0.162086 2.7351 0.140702 3.00772L0.126987 3.18229L6.57082 7.28431L13.0147 11.3864L13.7329 10.9328C14.1279 10.6834 17.0226 8.83744 20.1656 6.83076L25.88 3.18223L25.8663 3.00767C25.8449 2.7351 25.5672 2.09257 25.2975 1.69162C24.8102 0.967316 24.113 0.439531 23.2386 0.133136L22.8831 0.00852088L13.1305 0.000672632C7.72133 -0.00367565 3.27774 0.0135056 3.15309 0.0392771ZM0 11.0834C0 16.4098 0.00284451 16.5745 0.102758 16.9822C0.451871 18.4073 1.48153 19.5043 2.84451 19.9033C3.15878 19.9953 3.64778 20 13.0035 20C22.3592 20 22.8482 19.9953 23.1625 19.9033C24.5278 19.5036 25.5602 18.4016 25.9054 16.9755C26.005 16.564 26.0073 16.4129 25.9946 11.0872L25.9816 5.62135L19.9116 9.48676C16.5731 11.6127 13.7273 13.41 13.5876 13.4806C13.3026 13.6248 12.8386 13.6549 12.5412 13.5483C12.4097 13.5012 6.07435 9.48915 0.342865 5.82339L0 5.60412V11.0834Z'
										fill='#3982CB'
									></path>
								</svg>
								<div>info@mandarina.lv</div>
							</a>
						</div>
						<div className='language-wrapper'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12.2699 7.48613C12.2678 6.81381 12.1957 6.14354 12.0549 5.48613H13.8549C13.7622 5.21191 13.6502 4.94458 13.5199 4.68613H11.8449C11.53 3.63416 11.0416 2.64218 10.3999 1.75113C9.98987 1.57873 9.56237 1.45132 9.12488 1.37113C10.004 2.31575 10.6677 3.43998 11.0699 4.66613H8.37488V1.28613H7.62488V4.67113H4.92988C5.33292 3.44276 5.9983 2.31673 6.87988 1.37113C6.44427 1.44998 6.01846 1.57571 5.60988 1.74613C4.96561 2.63344 4.47386 3.62201 4.15488 4.67113H2.46988C2.33717 4.9343 2.22354 5.20667 2.12988 5.48613H3.94488C3.80403 6.14354 3.73197 6.81381 3.72988 7.48613C3.73126 8.22152 3.81512 8.95444 3.97988 9.67113H2.20988C2.31332 9.9514 2.43698 10.2238 2.57988 10.4861H4.19488C4.50099 11.444 4.95479 12.3483 5.53988 13.1661C5.95887 13.3458 6.39657 13.4783 6.84488 13.5611C6.02884 12.671 5.40126 11.625 4.99988 10.4861H7.62988V13.6561H8.37988V10.4861H10.9999C10.5971 11.6255 9.96783 12.6715 9.14988 13.5611C9.6003 13.4755 10.0397 13.3396 10.4599 13.1561C11.0441 12.3413 11.4978 11.4405 11.8049 10.4861H13.4049C13.5471 10.2286 13.6708 9.96128 13.7749 9.68613H11.9999C12.1725 8.96532 12.2631 8.2273 12.2699 7.48613ZM7.62488 9.67113H4.75488C4.40287 8.29505 4.38743 6.85444 4.70988 5.47113H7.62488V9.67113ZM11.2449 9.67113H8.37488V5.48613H11.2899C11.4335 6.143 11.5039 6.81376 11.4999 7.48613C11.5039 8.22212 11.4183 8.95586 11.2449 9.67113Z'
									fill='#3982CB'
								></path>
								<path
									d='M7.99903 0C6.41678 0 4.87006 0.469192 3.55447 1.34824C2.23887 2.22729 1.21349 3.47672 0.607991 4.93853C0.00248969 6.40034 -0.155937 8.00887 0.152745 9.56072C0.461427 11.1126 1.22335 12.538 2.34217 13.6569C3.46099 14.7757 4.88646 15.5376 6.4383 15.8463C7.99015 16.155 9.59869 15.9965 11.0605 15.391C12.5223 14.7855 13.7717 13.7602 14.6508 12.4446C15.5298 11.129 15.999 9.58225 15.999 8C15.999 5.87827 15.1562 3.84344 13.6559 2.34315C12.1556 0.842855 10.1208 0 7.99903 0ZM7.99903 15C6.61456 15 5.26118 14.5895 4.11004 13.8203C2.95889 13.0511 2.06168 11.9579 1.53187 10.6788C1.00206 9.3997 0.863434 7.99224 1.13353 6.63437C1.40363 5.2765 2.07031 4.02922 3.04928 3.05025C4.02825 2.07128 5.27553 1.4046 6.6334 1.1345C7.99126 0.864407 9.39873 1.00303 10.6778 1.53284C11.9569 2.06266 13.0501 2.95986 13.8193 4.11101C14.5885 5.26215 14.999 6.61553 14.999 8C14.999 9.85652 14.2615 11.637 12.9488 12.9497C11.636 14.2625 9.85554 15 7.99903 15Z'
									fill='#3982CB'
								></path>
							</svg>
							<div className='language-change-mobile'>
								<p
									onClick={() => {
										changeLanguageHandler('ru')
									}}
									className={`${
										lang === 'ru' && 'language-active'
									}`}
								>
									RU
								</p>
								<p
									onClick={() => {
										changeLanguageHandler('lv')
									}}
									className={`${
										lang === 'lv' && 'language-active'
									}`}
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

export default MobileMenu
