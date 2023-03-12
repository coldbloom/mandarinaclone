import SearchBox from '@/templates/main-form/SearchBox'
import React, { FC } from 'react'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import { PropsGetOfferState } from './get-offer5.interface'
import style from './GetOffer5.module.scss'

const GetOffer5: FC<PropsGetOfferState> = ({ state, setState }) => {
	const handlerClick = () => {
		setState(state => ({ ...state, step: state.step + 1 }))
	}
	return (
		<div className={style.getOffer5}>
			<div className={style.header}>
				<h1>Пожелания и комментарии</h1>
				<h2>
					Если у Вас имеются дополнительные пожелания или комментарии
					в связи с поездкой, напишите нам
				</h2>
			</div>
			<div className={style.textarea}>
				<textarea
					value={state.comment}
					onChange={e =>
						setState(state => ({
							...state,
							comment: e.target.value
						}))
					}
				/>
			</div>
			<GetOfferButton onClick={() => handlerClick()}>
				Следующий шаг
			</GetOfferButton>
		</div>
	)
}

export default GetOffer5
