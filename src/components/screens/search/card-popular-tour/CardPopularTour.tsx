import React, { FC } from 'react'
import defaultImg from '@/assets/images/default-home.jpeg'
import style from './CardPopularTour.module.scss'
import Button from '../../../ui/button/Button'
import { PropsCardPopularTour } from './card-popular-tour.interface'
import { IoIosArrowForward } from 'react-icons/io'
import { RevertCountryCode } from '@/utils/revert-countryCode/RevertCountryCode'
import { useNavigate } from 'react-router-dom'

const CardPopularTour: FC<PropsCardPopularTour> = ({
	subTitle,
	data,
	setTimeData,
	timeData,
	title
}) => {
	const navigate = useNavigate()
	const handlerClick = () => {
		const newArray = {
			adult: 2,
			child: 0,
			childs_age: [],
			countryCode: title,
			data: data.date,
			meal_types: ['RO', 'BB', 'HB', 'FB', 'AI', 'UAI'],
			nights_max: 18,
			nights_min: Number(data.nights),
			price_range_max: 10000,
			price_range_min: 10,
			townFrom: timeData.townFrom || 'lv',
			rating: [true, true, true, true, true]
		}
		localStorage.setItem('userInfo', JSON.stringify(newArray))
		setTimeData((state: any) => ({ ...state, ...newArray }))
		navigate('/search-tours')
	}
	return (
		<div className={style.popularTour}>
			<img src={defaultImg} alt='popular-tour' />
			<div className={style.header}>
				<h2>{RevertCountryCode(title)}</h2>
				<p>{subTitle}</p>
			</div>
			<div className={style.footer}>
				<p>Двое взрослых</p>
				<div className={style.footerButton}>
					<p>
						от <span>{data?.price} €</span>
					</p>
					<Button
						className={style.button}
						onClick={() => handlerClick()}
					>
						{data?.countHotel} отелей{' '}
						<IoIosArrowForward></IoIosArrowForward>{' '}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CardPopularTour
