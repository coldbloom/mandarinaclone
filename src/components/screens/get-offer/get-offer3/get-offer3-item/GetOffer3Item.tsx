import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import style from './GetOffer3Item.module.scss'

const GetOffer3Item: FC<any> = ({
	title,
	handleChangePlus,
	handleChangeMinus,
	number,
	disabledTop,
	disabledBottom,
	index
}) => {
	return (
		<div className={style.item}>
			<p>{title}</p>
			<div className={style.buttons}>
				<Button onClick={()=>handleChangeMinus(index)} disabled={disabledTop}>
					<span>-</span>
				</Button>
				<p>{number}</p>
				<Button onClick={()=>handleChangePlus(index)} disabled={disabledBottom}>
					<span>+</span>
				</Button>
			</div>
		</div>
	)
}

export default GetOffer3Item
