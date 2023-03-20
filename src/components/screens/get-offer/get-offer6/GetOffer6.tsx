import SearchBox from '@/templates/main-form/SearchBox'
import Input from '@/ui/input/Input'
import React, { FC, useState } from 'react'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import { PropsGetOfferState } from './get-offer6.interface'
import style from './GetOffer6.module.scss'

const GetOffer6: FC<PropsGetOfferState> = ({ state, setState }) => {
	const [error, setError] = useState({
		firstName: false,
		lastName: false,
		phone: false,
		email: false
	})
	const handlerClick = () => {
		let newError = { ...error }
		Object.keys(state.form).map(el => {
			//@ts-ignore
			if (!state.form[el]) {
				//@ts-ignore
				newError[el] = true
			}
		})
		return setError(newError)
		
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
			<GetOfferButton onClick={() => handlerClick()}>
				Следующий шаг
			</GetOfferButton>
		</div>
	)
}

export default GetOffer6
