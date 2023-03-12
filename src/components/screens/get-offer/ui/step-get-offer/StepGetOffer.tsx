import React, { FC } from 'react'
import { PropsStepGetOfferState } from './step-get-offer.interface'
import style from './StepGetOffer.module.scss'

const StepGetOffer: FC<PropsStepGetOfferState> = ({ state }) => {
	return (
		<div className={style.stepGetOffer}>
			{[...Array(6)].map((el, index) => (
				<div
					key={index}
					className={`${style.item} ${
						state.step > (index) && style.active
					}`}
				>
					{index + 1}
				</div>
			))}
		</div>
	)
}
export default StepGetOffer
