import SearchBox from '@/templates/main-form/SearchBox'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import { GetOfferData4 } from './get-offer4.data'
import { PropsGetOfferState } from './get-offer4.interface'
import style from './GetOffer4.module.scss'

const GetOffer4: FC<PropsGetOfferState> = ({ state, setState }) => {
	const [error, setError] = useState(false)
	const {t} = useTranslation()
	const handlerClick = () => {
		if (!state.price_range_min) {
			toast.error('Выберите место назначения')
			return setError(true)
		}
		setState(state => ({ ...state, step: state.step + 1 }))
	}

	return (
		<div className={style.getOffer4}>
			<div className={style.header}>
				<h1>{t('select_a_price_range')}</h1>
				<h2>
				{t('we_will_try_to_find_the_best_offers_for_you')}
				</h2>
			</div>
			<div className={style.table}>
				{GetOfferData4.map(el => (
					<div
						key={el.title}
						className={`${style.item} ${
							el.price_range_min === state.price_range_min &&
							style.active
						}`}
						onClick={() => {
							if (error) setError(false)
							setState(state => ({
								...state,
								price_range_max: el.price_range_max,
								price_range_min: el.price_range_min
							}))
						}}
					>
						{el.title}
					</div>
				))}
			</div>
			{/* {error && <div>Выберите месяц</div>} */}
			<GetOfferButton onClick={() => handlerClick()}>
				{t('next_step')}
			</GetOfferButton>
		</div>
	)
}

export default GetOffer4
