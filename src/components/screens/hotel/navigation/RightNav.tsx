import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import style from './navigate.module.scss'
import arrowSvg from '@/assets/images/trip/arrow.svg'

const RightNav: FC<any> = ({ onClick, disabled }) => {
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			className={`${style.left} ${disabled && style.disabled}`}
			classDiv={style.divRight}
		>
			<img src={arrowSvg} alt='' />
		</Button>
	)
}
export default RightNav
