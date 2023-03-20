import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import style from './navigate.module.scss'
import arrowSvg from '@/assets/images/trip/leftArrow.svg'

const LeftNav: FC<any> = ({ onClick, disabled }) => {
	return (
		<Button disabled={disabled} onClick={onClick} className={`${style.left} ${disabled && style.disabled}`} classDiv={style.divLeft}>
			<img src={arrowSvg} alt="" />
		</Button>
	)
}
export default LeftNav
