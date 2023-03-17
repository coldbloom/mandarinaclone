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
				value={`${state.price}`}
				onChange={e =>
					setState((state: any) => ({
						...state,
						price: e.target.value
					}))
				}
			/>
		</div>
	)
}

export default Price
