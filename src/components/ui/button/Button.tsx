import { FC } from 'react'
import { PropsButton } from './button.interface'
import style from './Button.module.scss'

const Button:FC<PropsButton> = ({children,className,...rest}) => {
	return (
		<div className={style.button}>
			<button className={className} {...rest}>{children}</button>
		</div>
	)
}
export default Button
