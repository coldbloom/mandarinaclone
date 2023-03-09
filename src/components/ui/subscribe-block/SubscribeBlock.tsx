import React from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import style from './SubscribeBlock.module.scss'

const SubscribeBlock = () => {
	return (
		<div className={style.subscribe}>
			<div className={style.content}>
				<div className={style.text}>
					<h1>Получайте новости на свою электронную почту</h1>
					<p>
						Отличные предложения, идеи и советы для успешного
						путешествия
					</p>
				</div>
				<div className={style.inputBlock}>
					<Input placeholder='Ваша э- почта'/>
					<Button className={style.button}>Подписаться</Button>
				</div>
				<div></div>
			</div>
		</div>
	)
}

export default SubscribeBlock
