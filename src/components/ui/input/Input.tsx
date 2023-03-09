import React, { FC } from 'react'
import { PropsInput } from './input.interface'
import style from './Input.module.scss'

const Input: FC<PropsInput> = ({ classDiv, ...rest }) => {
	return (
		<div className={`${style.input} ${classDiv}`}>
			<input {...rest} />
		</div>
	)
}

export default Input
