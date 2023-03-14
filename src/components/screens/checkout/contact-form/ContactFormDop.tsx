import React, { FC } from 'react'
import style from './ContactForm.module.scss'
const ContactFormDop: FC<any> = ({ index, value, setValue }) => {
	return (
		<div className={style.form}>
			<h2>Контактная информация №{index + 1}</h2>
			<form>
				<div>
					<label>Имя</label>
					<input
						type='text'
						value={value.firstName}
						onChange={e =>
							setValue(e.target.value, index, 'firstName')
						}
					/>
				</div>
				<div>
					<label>Фамилия</label>
					<input
						type='text'
						value={value.lastName}
						onChange={e =>
							setValue(e.target.value, index, 'lastName')
						}
					/>
				</div>
				<div>
					<label>Дата рождения</label>
					<input
						type='date'
						value={value.date}
						onChange={e => setValue(e.target.value, index, 'date')}
					/>
				</div>
			</form>
		</div>
	)
}

export default ContactFormDop
