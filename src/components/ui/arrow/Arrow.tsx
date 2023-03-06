import React, { FC } from 'react'
import { PropsArrow } from './arrow.interface'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const Arrow:FC<PropsArrow> = ({direction}) => {
  return (
    <div className=''>
      <BsFillArrowLeftCircleFill/>
      
      <BsFillArrowRightCircleFill />
    </div>
  )
}

export default Arrow