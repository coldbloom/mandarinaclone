import React, { FC } from 'react'
import style from './ContactForm.module.scss'

const ContactFormMain: FC<any> = ({
	index,
	value,
	setValue,
	error,
	resetError
}) => {
	return (
		<div className={style.form} onClick={()=>resetError()}>
			<h2>Контактная информация №{index + 1}</h2>
			<form>
				<div >
					<label>Имя</label>
					<input
						type='text'
						value={value.firstName}
						onChange={e =>
							setValue(e.target.value, index, 'firstName')
						}
					/>
					{error[index].firstName && <span>Заполните имя</span>}
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
					{error[index].lastName && <span>Заполните фамилию</span>}
				</div>
				<div>
					<label>Электронная почта</label>
					<input
						type='text'
						value={value.email}
						onChange={e => setValue(e.target.value, index, 'email')}
					/>
					{error[index].email && <span>Заполните почту</span>}
				</div>
				<div>
					<label>Телефон</label>
					<input
						type='text'
						value={value.phone}
						onChange={e => setValue(e.target.value, index, 'phone')}
					/>
					{error[index].phone && <span>{error[index].phone}</span>}
				</div>
				<div>
					<label>Дата рождения</label>
					<input
						type='date'
						value={value.date}
						onChange={e => setValue(e.target.value, index, 'date')}
					/>
					{error[index].date && <span>Заполните дату рождения</span>}
				</div>
			</form>
		</div>
	)
}

export default ContactFormMain
