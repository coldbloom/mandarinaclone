import React, { FC } from 'react'
import defaultImg from '@/assets/images/default-home.jpeg'
import style from './CardPopularTour.module.scss'
import Button from '../button/Button'
import { PropsCardPopularTour } from './card-popular-tour.interface'
import { IoIosArrowForward } from 'react-icons/io'

const CardPopularTour: FC<PropsCardPopularTour> = ({
	title,
	subTitle,
	price,
	countHotel
}) => {
	return (
		<div className={style.popularTour}>
			<img src={defaultImg} alt='popular-tour' />
			<div className={style.header}>
				<h2>{title}</h2>
				<p>{subTitle}</p>
			</div>
			<div className={style.footer}>
				<p>Двое взрослых</p>
				<div className={style.footerButton}>
					<p>
						от <span>{price}E</span>
					</p>
					<Button className={style.button}>
						{countHotel} отелей{' '}
						<IoIosArrowForward></IoIosArrowForward>{' '}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CardPopularTour
