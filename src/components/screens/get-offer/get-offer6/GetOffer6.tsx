import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import SearchBox from '@/templates/main-form/SearchBox'
import Input from '@/ui/input/Input'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import { PropsGetOfferState } from './get-offer6.interface'
import style from './GetOffer6.module.scss'

const GetOffer6: FC<PropsGetOfferState> = ({ state, setState }) => {
	const [id,setId] = useState<any>()
	const { t } = useTranslation()
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
	}
	return (
		<div className={style.getOffer6}>
			<div className={style.header}>
				<h1>{t('contacts')}</h1>
				<h2>
				{t('leave_your_contact_information_so_that_we_can_contact_you')}
				</h2>
			</div>
			<form className={style.form}>
				<div className={style.contInput}>
					<label>{t('firstname')}</label>
					<input
						type='text'
						placeholder={t('enter_your_name_here')||''}
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
					{error.firstName && <span>{t('this_field_is_required')}</span>}
				</div>
				<div className={style.contInput}>
					<label>{t('adults')}</label>
					<input
						type='text'
						placeholder={t('enter_your_last_name_here')||''}
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
					{error.lastName && <span>{t('this_field_is_required')}</span>}
				</div>
				<div className={style.contInput}>
					<label>{t('phone')}</label>
					<input
						type='text'
						placeholder={t('enter_your_phone_number_here')||''}
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
					{error.phone && <span>{t('this_field_is_required')}</span>}
				</div>
				<div className={style.contInput}>
					<label>{t('email')}</label>
					<input
						type='email'
						placeholder={t('enter_your_email_address_here')||''}
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
					{error.email && <span>{t('this_field_is_required')}</span>}
				</div>
			</form>
			<GetOfferButton
				disabled={getOffer.isLoading}
				onClick={() => handlerClick()}
			>
			{t('get_offer')}
			</GetOfferButton>
		</div>
	)
}

export default GetOffer6
