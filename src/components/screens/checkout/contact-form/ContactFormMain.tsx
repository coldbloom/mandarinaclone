import FlatPick from './flatpick/FlatPick'
import React, { FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import style from './ContactForm.module.scss'

const ContactFormMain: FC<any> = ({
	index,
	value,
	setValue,
	error,
	resetError
}) => {
	const {t} = useTranslation()
	const calendarRef = useRef<HTMLParagraphElement | null>(null)
	const [date, setDate] = useState('')
	return (
		<div className={style.form} onClick={()=>resetError()}>
			<h2>{t('contact_information')} №{index + 1}</h2>
			<form>
				<div >
					<label>{t('firstname')}</label>
					<input
						type='text'
						value={value.firstName}
						onChange={e =>
							setValue(e.target.value, index, 'firstName')
						}
					/>
					
					{error[index].firstName && <span>{t('fill_in_the_field')}</span>}
				</div>
				<div>
					<label>{t('lastname')}</label>
					<input
						type='text'
						value={value.lastName}
						onChange={e =>
							setValue(e.target.value, index, 'lastName')
						}
					/>
					{error[index].lastName && <span>{t('fill_in_the_field')}</span>}
				</div>
				<div>
					<label>{t('adres_email')}</label>
					<input
						type='text'
						value={value.email}
						onChange={e => setValue(e.target.value, index, 'email')}
					/>
					{error[index].email && <span>{t('fill_in_the_field')}</span>}
				</div>
				<div>
					<label>{t('phone_number')}</label>
					<input
						type='text'
						value={value.phone}
						onChange={e => setValue(e.target.value, index, 'phone')}
					/>
					{error[index].phone && <span>{error[index].phone}</span>}
				</div>
				<div>
					<label>{t('date_of_birth')}</label>
					<input
						type='date'
						value={value.date}
						onChange={e => setValue(e.target.value, index, 'date')}
					/>
					{/* <FlatPick calendarRef={calendarRef}
						date={date}
						setDate={setDate}
						// setState={setState}
						/> */}
					{error[index].date && <span>{t('fill_in_the_field')}</span>}
				</div>
			</form>
		</div>
	)
}

export default ContactFormMain
