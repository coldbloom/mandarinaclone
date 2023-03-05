import React from 'react'
import icon from '@/assets/images/3.svg'
import '../main-form/mainForm.scss'

const CalendarSearchBoxEmpty = ({ setOpenForm, item }) => {
	return (
		<>
			<div
				className='search-box flatpickr-custom-input'
				onClick={() => setOpenForm(item)}
			>
				<p className='search-box-title'>Вылет</p>
				<div className='search-box-wrapper'>
					<img src={icon} alt='' />
					<p className='search-box-input'>Дата</p>
				</div>
			</div>
			<div className='box_vert_line'></div>
		</>
	)
}

export default CalendarSearchBoxEmpty
