import Button from '@/components/ui/button/Button'
import React, { FC, useState } from 'react'
import { PropsGetOffer } from '../get-offer.interface'
import { PropsGetOfferState } from './get-offer.interface'
import { GetOfferData1 } from './get-offer1.data'
import style from './GetOffer1.module.scss'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
// import FlatPick from '../ui/flatpick/FlatPick'

const GetOffer1: FC<PropsGetOfferState> = ({ state, setState }) => {
	const [error, setError] = useState(false)
	const handlerClick = () => {
		if (!state.month) return setError(true)
		setState(state => ({ ...state, step: state.step + 1 }))
	}
	return (
		<div className={style.getOffer1}>
			<div className={style.header}>
				<h1>Когда хотите отправиться в путешествие?</h1>
				<div>
					<h3>Я знаю точные даты</h3>
					{/* <FlatPick /> */}
				</div>
			

			</div>
			<div className={style.table}>
				{GetOfferData1.map(el => (
					<div
						key={el.month}
						className={`${style.item} ${
							el.month === state.month && style.active
						}`}
						onClick={() => {
							if (error) setError(false)
							setState(state => ({ ...state, month: el.month }))
						}}
					>
						{el.month}
					</div>
				))}
			</div>
			{error && <div>Выберите месяц</div>}
			<GetOfferButton onClick={() => handlerClick()}>
				Следующий шаг
			</GetOfferButton>
		</div>
	)
}

export default GetOffer1
