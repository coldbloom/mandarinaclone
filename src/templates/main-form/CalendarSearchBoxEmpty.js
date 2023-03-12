import React from 'react'
import icon from '@/assets/images/3.svg'
import '../main-form/mainForm.scss'

const CalendarSearchBoxEmpty = ({ setOpenForm, item, setError, error }) => {
	const errorReset = {
		fromTownCode: false,
		countryCode: false,
		meal_types: false,
		date: false
	}
	console.log(error.date);
	return (
		<>
			<div
				className='search-box flatpickr-custom-input'
				onClick={() => {
					setOpenForm(item)
					setError(error => ({ ...error, ...errorReset }))
				}}
			>
				<p className='search-box-title'>Вылет</p>
				<div className='search-box-wrapper'>
					<img src={icon} alt='' />
					<p className='search-box-input'>Дата</p>
				</div>
			</div>
			{error.date && <span className='error'>Заполните поле</span>}
			<div className='box_vert_line'></div>
		</>
	)
}

export default CalendarSearchBoxEmpty
