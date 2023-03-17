import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import style from './navigate.module.scss'
import arrowSvg from '@/assets/images/trip/leftArrow.svg'

const LeftNav: FC<any> = ({ onClick, disabled }) => {
	return (
		<Button onClick={onClick} className={style.left} classDiv={style.divLeft}>
			<img src={arrowSvg} alt="" />
		</Button>
	)
}
export default LeftNav
