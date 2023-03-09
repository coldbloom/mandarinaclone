import React, { useState } from 'react'
import Header from '../Home/header/Header'
import bgImg from '@/assets/images/BG_getAnOffer_bg.jpg'
import style from './GetOffer.module.scss'
import GetOffer1 from './GetOffer1/GetOffer1'
import { TypeStateGetOffer } from './get-offer.interface'
import StepGetOffer from './ui/step-get-offer/StepGetOffer'

const GetOffer = () => {
	const [state, setState] = useState<TypeStateGetOffer>({ step:null, month: '' })

	return (
		<div>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			
			<div className={style.content}>
			<StepGetOffer/>
				<img src={bgImg} alt='bg-image' />
				<GetOffer1 state={state} setState={setState}/>
			</div>
		</div>
	)
}

export default GetOffer
