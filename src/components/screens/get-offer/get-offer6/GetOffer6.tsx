import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import SearchBox from '@/templates/main-form/SearchBox'
import Input from '@/ui/input/Input'
import React, { FC, useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import { PropsGetOfferState } from './get-offer6.interface'
import style from './GetOffer6.module.scss'

const GetOffer6: FC<PropsGetOfferState> = ({ state, setState }) => {
	const [id,setId] = useState<any>()

	const getOffer = useMutation(
		'get-offer',
		(data: any) => SearchToursService.getOffer(data),
		{
			onSuccess: () => {
				alert('all successfully')
			}
		}
	)
	const [error, setError] = useState({
		firstName: false,
		lastName: false,
		phone: false,
		email: false
	})
	console.log(state)

	const handlerClick = () => {
		let newError = { ...error }
		let flag = false
		Object.keys(state.form).map(el => {
			//@ts-ignore
			if (!state.form[el]) {
				//@ts-ignore
				newError[el] = true
				flag = true
			}
		})
		if (flag) return setError(newError)
		const date = {
			month: state.month,
			date: state.month,
			country: state.countryCode,
			peopleAdults: state.adults,
			peopleСhildren: state.childs,
			priceRange: `${state.price_range_min} - ${state.price_range_max}`,
			email: state.form.email,
			phone: state.form.phone,
			peopleBaby: state.peopleBaby,
			first_name: state.form.firstName,
			last_name: state.form.lastName,
			comment: state.comment
		}
		getOffer.mutate(date)
		// const id = toast.loading('loading')
		// setId(id)
	}
	return (
		<div className={style.getOffer6}>
			<div className={style.header}>
				<h1>Контакты</h1>
				<h2>
					Оставьте свою контактную информацию, чтобы мы могли с Вами
					связаться
				</h2>
			</div>
			<form className={style.form}>
				<div className={style.contInput}>
					<label>Имя</label>
					<input
						type='text'
						placeholder='Введите своё имя здесь'
						value={state.form.firstName}
						onChange={e => {
							setError(error => ({ ...error, firstName: false }))
							setState(state => ({
								...state,
								form: {
									...state.form,
									firstName: e.target.value
								}
							}))
						}}
					/>
					{error.firstName && <span>Это поле обязательно</span>}
				</div>
				<div className={style.contInput}>
					<label>Фамилия</label>
					<input
						type='text'
						placeholder='Введите своё имя здесь'
						value={state.form.lastName}
						onChange={e => {
							setError(error => ({ ...error, lastName: false }))
							setState(state => ({
								...state,
								form: {
									...state.form,
									lastName: e.target.value
								}
							}))
						}}
					/>
					{error.lastName && <span>Это поле обязательно</span>}
				</div>
				<div className={style.contInput}>
					<label>Номер телефона</label>
					<input
						type='text'
						placeholder='Введите своё имя здесь'
						value={state.form.phone}
						onChange={e => {
							setError(error => ({ ...error, phone: false }))
							setState(state => ({
								...state,
								form: {
									...state.form,
									phone: e.target.value
								}
							}))
						}}
					/>
					{error.phone && <span>Это поле обязательно</span>}
				</div>
				<div className={style.contInput}>
					<label>Э-почта</label>
					<input
						type='email'
						placeholder='Введите своё имя здесь'
						required={true}
						value={state.form.email}
						onChange={e => {
							setError(error => ({ ...error, email: false }))
							setState(state => ({
								...state,
								form: {
									...state.form,
									email: e.target.value
								}
							}))
						}}
					/>
					{error.email && <span>Это поле обязательно</span>}
				</div>
			</form>
			<GetOfferButton
				disabled={getOffer.isLoading}
				onClick={() => handlerClick()}
			>
				Следующий шаг
			</GetOfferButton>
		</div>
	)
}

export default GetOffer6
