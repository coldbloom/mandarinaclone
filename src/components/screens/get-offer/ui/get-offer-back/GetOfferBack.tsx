import Button from '@/components/ui/button/Button'
import React, { ButtonHTMLAttributes, FC } from 'react'
import style from './getOfferBack.module.scss'

interface PropsGetOfferBackButton
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	setState: any
}

const GetOfferBack: FC<PropsGetOfferBackButton> = ({ children, setState }) => {
	return (
		<Button
			onClick={() =>
				setState((state: any) => ({ ...state, step: state.step - 1 }))
			}
			className={style.button}
			classDiv='text-center'
		>
			{children}
		</Button>
	)
}

export default GetOfferBack
