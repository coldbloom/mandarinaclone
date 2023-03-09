import Button from '@/components/ui/button/Button'
import React from 'react'
import style from './GetOfferButton.module.scss'

const GetOfferButton = ({children}:{children:React.ReactNode}) => {
  return (
    <Button className={style.button} classDiv='text-center'>
      {children}
    </Button>
  )
}
export default GetOfferButton