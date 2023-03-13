import AboutTable from '@/templates/about-table/AboutTable'
import React, { FC, useState } from 'react'
import Header from '../Home/header/Header'
import style from './Checkout.module.scss'
import img2 from '@/assets/images/default-home.jpeg'
import Button from '@/components/ui/button/Button'
import { RiPencilFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const Checkout: FC<any> = ({ checkout, setCheckout }) => {
	const navigate = useNavigate()
	const [formInfo, setFormInfo] = useState([])
	if (!checkout?.checkIn) {
		 navigate('/search-tours')
		 return null
	}
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<div className={`${style.content} container-xxl`}>
				<div className={style.header}>
					<h1>Заполнение данных</h1>
					<p>Пожалуйста, заполните ваши данные</p>
				</div>
				<div className={style.card}>
					<div className={style.infoTour}>
						<div className={style.picture}>
							<h3>Информация о бронировании </h3>
							<img src={checkout.photo} alt='info-card' />
						</div>
						<div className={`${style.infoItem} ${style.firstItem}`}>
							<h5>Направление</h5>
							<p>{checkout.hotelName}</p>
						</div>
						<div className={`${style.infoItem} ${style.twoItem}`}>
							<h5>Дата</h5>
							<p>{checkout.checkOut}</p>
							<p>{checkout.checkIn}</p>
						</div>
						<div className={`${style.infoItem} ${style.threeItem}`}>
							<h5>Гости</h5>
							<p>{checkout.adult} взрослых</p>
							{checkout.child !== 0 && (
								<p>{checkout.child} детей</p>
							)}
						</div>
						<Button className={style.changeItems}>
							Изменить
							<RiPencilFill />
						</Button>
					</div>
					<div className={style.dopInfo}>
						<ul>
							<li>
								<div className={style.hotelInfoFirst}>
									<span>Отель:</span>
									<p>{checkout.hotelName}</p>
								</div>
							</li>
							<li className={style.hotelInfoTwo}>
								<span>Тип номера:</span>
								<p>{checkout.room}</p>
							</li>
							<li className={style.hotelInfoThree}>
								<span>Питание:</span>
								<p>{checkout.meal}</p>
							</li>
							{/* <li className={style.hotelInfoFour}>
								<span>В цену включено:</span>
								<p>Завтраки</p>
							</li> */}
						</ul>
					</div>
				</div>
				<div className={style.userCard}>
					<h3>Контактная информации №1</h3>
					<form>
						<input type='text' />
						<input type='text' />
						<input type='text' />
						<input type='text' />
						<input type='text' />
					</form>
				</div>
			</div>
		</>
	)
}
export default Checkout
