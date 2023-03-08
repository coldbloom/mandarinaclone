import React, { FC } from 'react'
import { PropsArrow } from './arrow.interface'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import style from './Arrow.module.scss'

const Arrow: FC<PropsArrow> = ({ direction,className }) => {
	return (
		<div className={`${style.arrow} ${className}`}>
			{direction === 'right' ? (
				<MdOutlineKeyboardArrowRight />
			) : (
				<MdOutlineKeyboardArrowLeft />
			)}
		</div>
	)
}

export default Arrow
