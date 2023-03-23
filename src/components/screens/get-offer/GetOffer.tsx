import React, { FC, useState } from 'react'
import Header from '../Home/header/Header'
import bgImg from '@/assets/images/BG_getAnOffer_bg.webp'
import style from './GetOffer.module.scss'
import GetOffer1 from './get-offer1/GetOffer1'
import { TypeStateGetOffer } from './get-offer.interface'
import StepGetOffer from './ui/step-get-offer/StepGetOffer'
import GetOffer2 from './get-offer2/GetOffer2'
import GetOfferButton from './ui/get-offer-button/GetOfferButton'
import GetOfferBack from './ui/get-offer-back/GetOfferBack'
import GetOffer3 from './get-offer3/GetOffer3'
import GetOffer4 from './get-offer4/GetOffer4'
import GetOffer5 from './get-offer5/GetOffer5'
import GetOffer6 from './get-offer6/GetOffer6'
import Footer from '../footer/Footer'
import { useTranslation } from 'react-i18next'

const GetOffer:FC<any> = ({lang,setLang}) => {
	const [state, setState] = useState<TypeStateGetOffer>({
		step: 1,
		countryCode: '',
		month: '',
		childs: 0,
		chidls_age: [],
		adults: 1,
		comment: '',
		form: {
			firstName: '',
			lastName: '',
			phone: '',
			email: ''
		},
		peopleBaby:0,
		price_range_min: null,
		price_range_max: null
	})
	const {t} = useTranslation()
	return (
		<div>
			<div className='bg-gray-wrapper'>
				<Header lang={lang} setLang={setLang}/>
			</div>
			<div className={style.margin}></div>
			<div className={style.content}>
				<img src={bgImg} alt='bg-image' />
				<div className={style.cont}>
					<StepGetOffer state={state} />
					{state.step === 1 && (
						<GetOffer1 state={state} setState={setState} />
					)}
					{state.step === 2 && (
						<GetOffer2 state={state} setState={setState} />
					)}
					{state.step === 3 && (
						<GetOffer3 state={state} setState={setState} />
					)}
					{state.step === 4 && (
						<GetOffer4 state={state} setState={setState} />
					)}
					{state.step === 5 && (
						<GetOffer5 state={state} setState={setState} />
					)}
					{state.step === 6 && (
						<GetOffer6 state={state} setState={setState} />
					)}

					{state.step !== 1 && (
						<GetOfferBack
							setState={setState}
						>
							{t('back')}
						</GetOfferBack>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default GetOffer
