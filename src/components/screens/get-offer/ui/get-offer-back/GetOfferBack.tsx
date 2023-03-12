import Button from '@/components/ui/button/Button'
import React, { ButtonHTMLAttributes, FC } from 'react'
import style from './getOfferBack.module.scss'

interface PropsGetOfferBackButton
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const GetOfferBack: FC<PropsGetOfferBackButton> = ({ children }) => {
	return (
		<Button className={style.button} classDiv='text-center'>
			{children}
		</Button>
	)
}

export default GetOfferBack
