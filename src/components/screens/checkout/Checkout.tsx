import AboutTable from '@/templates/about-table/AboutTable'
import React, { FC, useEffect, useState } from 'react'
import Header from '../Home/header/Header'
import style from './Checkout.module.scss'
import img2 from '@/assets/images/default-home.jpeg'
import Button from '@/components/ui/button/Button'
import { RiPencilFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import ContactFormMain from './contact-form/ContactFormMain'
import ContactFormDop from './contact-form/ContactFormDop'
import MailingComp from '../Home/mailing-comp/MailingComp'
import { RatingStar } from 'rating-star'
import visaSvg from '@/assets/images/pay/visa_mastcard.png'
import sebSvg from '@/assets/images/pay/seb.png'
import swedbankSvg from '@/assets/images/pay/swedbank.png'
import citadeleSvg from '@/assets/images/pay/citadele.png'
import luminorSvg from '@/assets/images/pay/luminor.png'
import starSvg from '@/assets/images/hotel-star.svg'
import Footer from '../footer/Footer'

const Checkout: FC<any> = ({ checkout, setCheckout }) => {
	const navigate = useNavigate()
	const formDopError = { firstName: false, lastName: false, date: false }
	const formMainError = { ...formDopError, phone: false, email: false }
	const formDop = { firstName: '', lastName: '', date: '' }
	const formMain = { ...formDop, phone: '', email: '' }

	const [formInfoError, setFormInfoError] = useState<any>([])
	const [formInfo, setFormInfo] = useState<any>([])
	const [check, setCheck] = useState<any>()
	const [agree, setAgree] = useState(false)
	const [errorCheck, setErrorCheck] = useState({ check: false, agree: false })

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
		newForm[type] = value
		const newStateForm = [...formInfo]
		newStateForm[index] = newForm
		setFormInfo((state: any) => newStateForm)
	}
	const resetError = () => {
		const newFormError = [...formInfoError]
		for (let i = 0; i < formInfoError.length; i++) {
			Object.keys(newFormError[i]).map((el: any) => {
				newFormError[i][el] = false
			})
		}
		setFormInfoError(newFormError)
	}
	const handlerRequest = () => {
		//console.log(formInfoError);
		const newFormError = [...formInfoError]
		for (let i = 0; i < formInfoError.length; i++) {
			Object.keys(formInfo[i]).map((el: any) => {
				if (!formInfo[i][el]) {
					newFormError[i][el] = true
				}
			})
		}
		setFormInfoError(newFormError)
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
									<div className='flex items-center'>
										<p>{checkout.hotelName}</p>
										{[
											...Array(
												Math.floor(
													checkout.rating / 100
												)
											)
										].map(() => (
											<img src={starSvg} alt='' />
										))}
									</div>
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
				<div className={`${style.forms}`}>
					{formInfo.map((el: any, key: any) => {
						if (key === 0)
							return (
								<ContactFormMain
									key={key}
									index={key}
									value={formInfo[key]}
									setValue={setValue}
									error={formInfoError}
									resetError={resetError}
								/>
							)
						return (
							<ContactFormDop
								key={key}
								index={key}
								value={formInfo[key]}
								setValue={setValue}
								error={formInfoError}
								resetError={resetError}
							/>
						)
					})}
				</div>
				<div className={style.pay}>
					<div className={style.leftBlock}>
						<div className={style.header}>
							<h2>Детали цены</h2>
							<div className={style.price}>
								<p>Цена за {checkout.adult} взрослых</p>
								<p>{checkout.price}€</p>
							</div>
						</div>
						<div>
							<div className={style.summ}>
								<p>Итоговая цена</p>
								<p>€ {checkout.price}</p>
							</div>
							<div className={style.summ}>
								<p>Предоплата</p>
								<p>€ 150</p>
							</div>
						</div>
					</div>
					<div className={style.rightBlock}>
						<h2>Метод оплаты</h2>
						<form action=''>
							<div onClick={() => setCheck(1)}>
								<input
									type='checkbox'
									name='favorite_pet'
									checked={check === 1}
									onChange={() => setCheck(1)}
								/>
								<p>Оплата картой или интернет банком (LKIX)</p>
								<img src={visaSvg} alt='' />
							</div>
							<div onClick={() => setCheck(2)}>
								<input
									type='checkbox'
									name='favorite_pet'
									checked={check === 2}
									onChange={() => setCheck(2)}
								/>
								<p>Luminor</p>
								<img src={luminorSvg} alt='' />
							</div>
							<div onClick={() => setCheck(3)}>
								<input
									type='checkbox'
									name='favorite_pet'
									checked={check === 3}
									onChange={() => setCheck(3)}
								/>
								<p>Citadele</p>
								<img src={citadeleSvg} alt='' />
							</div>
							<div onClick={() => setCheck(4)}>
								<input
									type='checkbox'
									name='favorite_pet'
									checked={check === 4}
									onChange={() => setCheck(4)}
								/>
								<p>SEB</p>
								<img src={sebSvg} alt='' />
							</div>
							<div onClick={() => setCheck(5)}>
								<input
									type='checkbox'
									name='favorite_pet'
									checked={check === 5}
									onChange={() => setCheck(5)}
								/>
								<p>Swedbank</p>
								<img src={swedbankSvg} alt='' />
							</div>
							<div onClick={() => setCheck(6)}>
								<input
									type='checkbox'
									name='favorite_pet'
									checked={check === 6}
									onChange={() => setCheck(6)}
								/>
								<p>Получить счёт на электронную почту</p>
							</div>
						</form>
					</div>
				</div>
				<div className={style.footerButton}>
					<div onClick={() => setAgree(!agree)}>
						<input
							type='checkbox'
							checked={agree}
							onChange={() => ''}
						/>
						<div>
							Я согласен с{' '}
							<Link to='/terms'>
								условиями предоставления услуг
							</Link>{' '}
							и{' '}
							<Link to='/return-policy'>правилами возврата</Link>
						</div>
					</div>
					<div>
						<Button onClick={() => handlerRequest()}>
							Перейти к оплате
						</Button>
					</div>
				</div>
			</div>
			<MailingComp />
			<Footer />
		</>
	)
}
export default Checkout
