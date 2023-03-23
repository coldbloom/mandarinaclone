import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import style from './ContactForm.module.scss'
const ContactFormDop: FC<any> = ({
	index,
	value,
	setValue,
	error,
	resetError
}) => {
	const {t} = useTranslation()
	return (
		<div className={style.form} onClick={() => resetError()}>
			<h2>{t('contact_information')} №{index + 1}</h2>
			<form>
				<div>
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
					<label>{t('date_of_birth')}</label>
					<input
						type='date'
						value={value.date}
						onChange={e => setValue(e.target.value, index, 'date')}
					/>
					{error[index].date && <span>{t('fill_in_the_field')}</span>}
				</div>	
			</form>
		</div>
	)
}

export default ContactFormDop
