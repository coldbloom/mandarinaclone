import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import { PropsGetOffer } from '../get-offer.interface'
import { PropsGetOfferState } from './get-offer.interface'
import { GetOfferData1 } from './get-offer1.data'
import style from './GetOffer.module.scss'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'

const GetOffer1: FC<PropsGetOfferState> = ({ state, setState }) => {
	return (
		<div className={style.getOffer1}>
			<div className={style.header}>
				<h1>Когда хотите отправиться в путешествие?</h1>
				<h3>Я знаю точные даты</h3>
			</div>
			<div className={style.table}>
				{GetOfferData1.map(el => (
					<div
						key={el.month}
						className={`${style.item} ${
							el.month === state.month && style.active
						}`}
						onClick={() =>
							setState(state => ({ ...state, month: el.month }))
						}
					>
						{el.month}
					</div>
				))}
			</div>
			<GetOfferButton>Следующий шаг</GetOfferButton>
		</div>
	)
}

export default GetOffer1
