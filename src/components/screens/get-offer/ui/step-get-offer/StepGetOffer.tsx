import React from 'react'
import style from './StepGetOffer.module.scss'

const StepGetOffer = () => {
	return (
		<div>
			{[...Array(6)].map((el) => (
				<div>
          {el+1}
        </div>
			))}
		</div>
	)
}
export default StepGetOffer