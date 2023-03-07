import { FC } from 'react'
import { PropsButton } from './button.interface'
import style from './Button.module.scss'

const Button:FC<PropsButton> = ({children,classDiv,className,...rest}) => {
	return (
		<div className={`${style.button} ${classDiv}`}>
			<button className={className} {...rest}>{children}</button>
		</div>
	)
}
export default Button
