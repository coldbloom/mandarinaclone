import Button from '@/components/ui/button/Button'
import React, { ButtonHTMLAttributes, FC } from 'react'
import style from './GetOfferButton.module.scss'

interface PropsGetOfferButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:React.ReactNode,
  
}

const GetOfferButton:FC<PropsGetOfferButton> = ({children,...rest}) => {
  return (
    <Button className={style.button} classDiv='text-center' {...rest}>
      {children}
    </Button>
  )
}
export default GetOfferButton