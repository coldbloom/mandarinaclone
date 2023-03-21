import React from 'react'
import icon from '@/assets/images/3.svg'
import '../main-form/mainForm.scss'
import { useTranslation } from 'react-i18next'

const CalendarSearchBoxEmpty = ({ setOpenForm, item, setError, error }) => {
	const {t} = useTranslation()
	const errorReset = {
		fromTownCode: false,
		countryCode: false,
		meal_types: false,
		date: false
	}
	return (
		<>
			<div
				className='search-box flatpickr-custom-input'
				onClick={() => {
					setOpenForm(item)
					setError(error => ({ ...error, ...errorReset }))
				}}
			>
				<p className='search-box-title'>{t('departure')}</p>
				<div className='search-box-wrapper'>
					<img src={icon} alt='' />
					<p className='search-box-input'>{t('date')}</p>
				</div>
			</div>
			{error.date && <span className='error'>{"t('fill_in_the_field')"}</span>}
			<div className='box_vert_line'></div>
		</>
	)
}

export default CalendarSearchBoxEmpty
