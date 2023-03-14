import AboutTable from '@/templates/about-table/AboutTable'
import React, { FC, useEffect, useState } from 'react'
import Header from '../Home/header/Header'
import style from './Checkout.module.scss'
import img2 from '@/assets/images/default-home.jpeg'
import Button from '@/components/ui/button/Button'
import { RiPencilFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import ContactFormMain from './contact-form/ContactFormMain'
import ContactFormDop from './contact-form/ContactFormDop'
import MailingComp from '../Home/mailing-comp/MailingComp'

const Checkout: FC<any> = ({ checkout, setCheckout }) => {
	const navigate = useNavigate()
	const formDopError = { firstName: false, lastName: false, date: false }
	const formMainError = { ...formDopError, phone: false, email: false }
	const formDop = { firstName: '', lastName: '', date: '' }
	const formMain = { ...formDop, phone: '', email: '' }

	const [formInfoError, setFormInfoError] = useState<any>([])
	const [formInfo, setFormInfo] = useState<any>([])

	useEffect(() => {
		if (checkout) {
			const newFormError = [
				...Array(checkout.child + checkout.adult)
			].map(el => formDopError)

			const newForm = [...Array(checkout.child + checkout.adult)].map(
				el => formDop
			)
			newFormError[0] = formMainError
			newForm[0] = formMain
			setFormInfo(newForm)
			setFormInfoError(newFormError)
		}
	}, [checkout])

	if (!checkout?.checkIn) {
		navigate('/search-tours')
		return null
	}
	const setValue = (value: string, index: number, type: string) => {
		const newForm = { ...formInfo[index] }
		console.log(newForm)
		newForm[type] = value

		// switch (type){
		// 	case 'firstName':
		// 		console.log('34rr3');
		// 		newForm.firstName = value
		// 	default: console.log('wfefew');

		// }
		// console.log(newForm);

		//newForm[index][type] = value
		//console.log(newForm[index].firstName)
		//console.log(newForm);
		const newStateForm = [...formInfo]
		newStateForm[index] = newForm
		console.log(newStateForm)

		setFormInfo((state: any) => newStateForm)
	}
	console.log(formInfo)

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
				<div className={`${style.forms} container-xxl`}>
					{formInfo.map((el: any, key: any) => {
						if (key === 0)
							return (
								<ContactFormMain
									key={key}
									index={key}
									value={formInfo[key]}
									setValue={setValue}
								/>
							)
						return (
							<ContactFormDop
								key={key}
								index={key}
								value={formInfo[key]}
								setValue={setValue}
							/>
						)
					})}
				</div>
				<div className={style.pay}>
					<div className={style.leftBlock}>
						<div className={style.header}>
							<h2>Детали цены</h2>
							<p>Цена за {checkout.adult} взрослых</p>
						</div>
						<div>
							<div>
								<p>Итоговая цена</p>
								<p>{checkout.price}</p>
							</div>
							<div>
								<p>Предоплата</p>
								<p>150 E</p>
							</div>
						</div>
					</div>
					<div className={style.rightBlock}>
						<div>
							<div>
								<p>Карты</p>
								<p>{checkout.price}</p>
							</div>
							{/* <div>
								<p>Предоплата</p>
								<p>150 E</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<MailingComp />
		</>
	)
}
export default Checkout
