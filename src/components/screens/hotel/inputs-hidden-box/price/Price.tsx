import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import style from './Price.module.scss'
interface PropsNights {
	state: any
	setState: any
	modalRef: any
}

const Price: FC<PropsNights> = ({ state, setState, modalRef }) => {
	return (
		<div className={style.price} ref={modalRef}>
			<input
				type='text'
				placeholder='9 999€'
				className={style.inputPrice}
				value={`${state.price_range_max}`}
				onChange={e => {
					// if()
					setState((state: any) => ({
						...state,
						price_range_max: e.target.value
					}))
				}}
			/>
		</div>
	)
}

export default Price
