import SearchBox from '@/templates/main-form/SearchBox'
import React, { FC, useState } from 'react'
import { toast } from 'react-toastify'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import { PropsGetOfferState } from './get-offer2.interface'
import style from './GetOffer2.module.scss'

const GetOffer2: FC<PropsGetOfferState> = ({ state, setState }) => {
	const [error, setError] = useState(false)
	const handlerClick = () => {
		if (!state.countryCode) {
			toast.error('Выберите место назначения')
			return setError(true)
		}
		setState(state => ({ ...state, step: state.step + 1 }))
	}
	const handleClickCountry = (code: string) => {
		setState(state => ({ ...state, countryCode: code }))
	}
	return (
		<div className={style.getOffer2}>
			<div className={style.header}>
				<h1>Куда хотите отправиться?</h1>
			</div>
			<GetOfferSearchBox
				state={state}
				setState={setState}
				handleClick={handleClickCountry}
				setError={setError}
			/>
			<GetOfferButton onClick={() => handlerClick()}>
				Следующий шаг
			</GetOfferButton>
		</div>
	)
}

export default GetOffer2
