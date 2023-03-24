import AboutTable from '@/templates/about-table/AboutTable'
import React, { FC, useContext, useEffect, useState } from 'react'
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
import { useTranslation } from 'react-i18next'
import pencilSvg from '@/assets/images/trip/pencil.svg'
import { ChangeDate } from '@/utils/change-date/ChangeDate'
import { useMutation } from 'react-query'
import { CheckoutService } from '@/services/checkout/checkout.service'
import { LangContext } from '@/components/provider/MainProvider'

const Checkout: FC<any> = ({ checkout, setCheckout}) => {
	const {lang,toggleLang:setLang} = useContext(LangContext)
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

	const { t } = useTranslation()
	const payment = useMutation('payment', (data: any) =>
		CheckoutService.payment(data)
	)

	const handlerPayment = () => {}
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
		const newFormError = [...formInfoError]
		let flag = false
		for (let i = 0; i < formInfoError.length; i++) {
			Object.keys(formInfo[i]).map((el: any) => {
				if (!formInfo[i][el]) {
					newFormError[i][el] = true
					flag = true
				}
			})
		if(!check){
			setErrorCheck((check)=>({...check,check:true}))
			flag = true
		}
		if(!agree){
			setErrorCheck((agree)=>({...agree,agree:true}))
			flag = true
		}
		}
		if(flag){
			return setFormInfoError(newFormError)
		}
		// if{check}
		let data: any = {
			countPeople: String(checkout.child + checkout.adult),
			checkInDate: checkout.checkIn,
			checkOutDate: checkout.checkOut,
			hotel: checkout.hotelName,
			room: checkout.room,
			board_types:checkout.meal,
			location:
				checkout.location_en ||
				checkout.location_lv ||
				checkout.location_ru,
			full_price: checkout.price,
			prepayment: '150',
			paymentMethod: check
		}
		let firstName = [
			'first_name1',
			'first_name2',
			'first_name3',
			'first_name4',
			'first_name5'
		]
		let lastName = [
			'last_name1',
			'last_name2',
			'last_name3',
			'last_name4',
			'last_name5'
		]
		let birtday = [
			'date_birthday1',
			'date_birthday2',
			'date_birthday3',
			'date_birthday4',
			'date_birthday5'
		]
		for (let i = 0; i < formInfo.length; i++) {
			data[firstName[i]] = formInfo[i].firstName
			data[lastName[i]] = formInfo[i].lastName
			data[birtday[i]] = formInfo[i].date
			if (i === 0) {
				data.email = formInfo[i].email
				data.tel = formInfo[i].phone
			}
		}
	

		payment.mutate(data)
	}
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<div className={`${style.content} container-xxl`}>
				<div className={style.header}>
					<h1>{t('filling_in_the_data')}</h1>
					<p>{t('please_fill_in_your_details')}</p>
				</div>
				<div className={style.card}>
					<h3>{t('booking_information')}</h3>
					<div className={style.infoTour}>
						<div className={style.picture}>
							<img src={checkout.photo} alt='info-card' />
						</div>
						<div className={`${style.infoItem} ${style.firstItem}`}>
							<h5>{t('direction')}</h5>
							<p>
								{lang === 'ru'
									? checkout.location_ru
									: lang === 'lv'
									? checkout.location_lv
									: checkout.location_en ||
									  checkout.hotelName}
							</p>
						</div>
						<div className={`${style.infoItem} ${style.twoItem}`}>
							<h5>{t('date')}</h5>
							<p>{ChangeDate(checkout.checkOut)}</p>
							<p>{ChangeDate(checkout.checkIn)}</p>
						</div>
						<div className={`${style.infoItem} ${style.threeItem}`}>
							<h5>{t('guests')}</h5>
							<p>
								{checkout.adult} {t('adults')}
							</p>
							{checkout.child !== 0 && (
								<p>
									{checkout.child} {t('childs')}
								</p>
							)}
						</div>
						<Link to={`/hotel/${checkout.hotelCode}`}>
							<Button className={style.changeItems}>
								{t('change')}
								<img src={pencilSvg} alt='' />
							</Button>
						</Link>
					</div>
					<div className={style.dopInfo}>
						<ul>
							<li>
								<div className={style.hotelInfoFirst}>
									<span>{t('hotel')}:</span>
									<p>{checkout.hotelName}</p>
									<div className='inline-flex items-center'>
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
								<span>{t('type_number')}:</span>
								<p>{checkout.room}</p>
							</li>
							<li className={style.hotelInfoThree}>
								<span>{t('meal')}:</span>
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
							<h2>{t('price_details')}</h2>
							<div className={style.price}>
								<p>
									{t('price_for')} {checkout.adult}{' '}
									{t('adults')}
								</p>
								<p>{checkout.price}€</p>
							</div>
						</div>
						<div>
							<div className={style.summ}>
								<p>{t('final_price')}</p>
								<p>€ {checkout.price}</p>
							</div>
							<div className={style.summ}>
								<p>{t('prepayment')}</p>
								<p>€ 150</p>
							</div>
						</div>
					</div>
					<div className={style.rightBlock}>
						<h2>{t('method_pay')}</h2>
						<form action=''>
							<div onClick={() => setCheck('klix')}>
								<div className={style.wrapper_checkbox}>
									<input
										style={{ display: 'none' }}
										type='checkbox'
										checked={check === 'klix'}
										onChange={() => setCheck('klix')}
									/>
									<div
										className={style.custom_checkbox}
									></div>
								</div>
								<p>{t('payment_by_card_or_internet_bank')}</p>
								<img src={visaSvg} alt='' />
							</div>
							<div onClick={() => setCheck('luminor_lv_pis')}>
								<div className={style.wrapper_checkbox}>
									<input
										style={{ display: 'none' }}
										type='checkbox'
										checked={check === 'luminor_lv_pis'}
										onChange={() =>
											setCheck('luminor_lv_pis')
										}
									/>
									<div
										className={style.custom_checkbox}
									></div>
								</div>
								<p>Luminor</p>
								<img src={luminorSvg} alt='' />
							</div>
							<div
								onClick={() => setCheck('citadele_lv_digilink')}
							>
								<div className={style.wrapper_checkbox}>
									<input
										style={{ display: 'none' }}
										type='checkbox'
										checked={
											check === 'citadele_lv_digilink'
										}
										onChange={() =>
											setCheck('citadele_lv_digilink')
										}
									/>
									<div
										className={style.custom_checkbox}
									></div>
								</div>
								<p>Citadele</p>
								<img src={citadeleSvg} alt='' />
							</div>
							<div onClick={() => setCheck('seb_lv_pis')}>
								<div className={style.wrapper_checkbox}>
									<input
										style={{ display: 'none' }}
										type='checkbox'
										checked={check === 'seb_lv_pis'}
										onChange={() => setCheck('seb_lv_pis')}
									/>
									<div
										className={style.custom_checkbox}
									></div>
								</div>
								<p>SEB</p>
								<img src={sebSvg} alt='' />
							</div>
							<div onClick={() => setCheck('swedbank_lv_pis')}>
								<div className={style.wrapper_checkbox}>
									<input
										id='input-1'
										style={{ display: 'none' }}
										type='checkbox'
										checked={check === 'swedbank_lv_pis'}
										onChange={() =>
											setCheck('swedbank_lv_pis')
										}
									/>
									<div
										className={style.custom_checkbox}
									></div>
								</div>
								<p>Swedbank</p>
								<img src={swedbankSvg} alt='' />
							</div>
							<div onClick={() => setCheck('invoice')}>
								<div className={style.wrapper_checkbox}>
									<input
										style={{ display: 'none' }}
										type='checkbox'
										checked={check === 'invoice'}
										onChange={() => setCheck('invoice')}
									/>
									<div
										className={style.custom_checkbox}
									></div>
								</div>
								<p>{t('receive_an_invoice_by_email')}</p>
							</div>
						</form>
						{errorCheck.check && <span>Заполните поле</span>}
					</div>
					
				</div>
				<div className={style.footerButton}>
					<div onClick={() => setAgree(!agree)}>
						<div
							className={style.wrapper_checkbox}
							onClick={e => setAgree(!agree)}
						>
							<input
								id='input-1'
								style={{ display: 'none' }}
								type='checkbox'
								checked={agree}
								onChange={e => setAgree(!agree)}
							/>
							<div
								className={style.custom_checkbox}
								
							></div>
						</div>
						<div>
							{t('i_agree_with')}{' '}
							<Link to='/terms'>{t('terms_of_service_v2')}</Link>{' '}
							и{' '}
							<Link to='/return-policy'>
								{t('refund_rules_v2')}
							</Link>
							{errorCheck.agree && <span>Обязательно к подтверждению</span>}
						</div>
						
					</div>
						
					<div>
						<Button onClick={() => handlerRequest()}>
							{t('go_to_pay')}
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
