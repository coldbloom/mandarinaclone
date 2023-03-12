import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/Footer-logo.svg'

import facebook from './../../assets/images/footer/facebook.svg'
import instagram from './../../assets/images/footer/instagram.svg'
import payments from './../../assets/images/footer/paymentsupport.png'

import './Footer.scss'

const Footer = () => {
	return (
		<footer>
			<div className='container-xxl'>
				<div className='row footer-row-menu'>
					<div className='col-12 col-md-4'>
						<div className='logo'>
							<img src={logo} alt='' />
						</div>
						<p className='logo_description left_footer'>
							Сервис для быстрого и простого оформления
							путешествий в любую точку мира
						</p>
					</div>
					<div className='col-12 col-md-2 offset-lg-1'>
						<p className='title_footer'>Дополнительно</p>
						<ul className='footer_list'>
							<li className='list_item'>Поиск тура</li>
							<li className='list_item'>Главная</li>
							<li className='list_item'>Контакты</li>
							<li className='list_item'>Блог</li>
						</ul>
					</div>
					<div className='col-12 col-md-3'>
						<p className='title_footer'>Дополнительно</p>
						<ul className='footer_list'>
							<Link to='/terms'>
								<li className='list_item'>Политика возврата</li>
							</Link>
							<Link to='/privacy-policy'>
								<li className='list_item'>
									Политика безопасности
								</li>
							</Link>
							<Link to='/cookies'>
								<li className='list_item'>
									Политика файлов cookie
								</li>
							</Link>
							<Link to='/return-policy'>
								{' '}
								<li className='list_item'>
									Условия предоставления услуг
								</li>
							</Link>
						</ul>
					</div>
					<div className='col-12 col-md-2 last-col-contact'>
						<p className='title_footer'>Контакты</p>
						<ul className='footer_list'>
							<li className='list_item'>+371 26 619 971</li>
							<li className='list_item'>info@mandarina.lv</li>
						</ul>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div className='soc_network'>
							<div className='title_footer title_icons_soc_network'>
								Соц. сети
							</div>
							<div className='icons_soc_network'>
								<a href='' className='hvr-event'>
									<img src={facebook} alt='' />
								</a>
								<a href='' className='hvr-event'>
									<img src={instagram} alt='' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright_wrap'>
				<div className='container-xxl'>
					<div className='row copyright_row'>
						<div className='col-12 col-md-6 logo_description center-alig'>
							MANDARINA - © 2022 Все права защищены
						</div>
						<div className='col-12 col-md-6'>
							<img src={payments} alt='' className='payment' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
