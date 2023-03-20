import React, {
	FC,
	useRef,
	useState,
	HTMLAttributes,
	DetailedHTMLProps
} from 'react'
import Button from '../button/Button'
import { PropsHotelInfoCard } from './hotel-info-card.interface'

import style from './HotelInfoCard.module.scss'

import { IoIosArrowDown } from 'react-icons/io'
const HotelInfoCard: FC<PropsHotelInfoCard> = ({
	img,
	title,
	text,
	children,	
	isVisible,
	setIsVisible,
	index
}) => {
	//const [isVisible, setIsVisible] = useState(false)
	const ref = useRef<null>(null)

	return (
		<div className={style.infoCard}>
			<div className={style.header}>
				<div className={style.picture}>
					<img src={img} alt='' />
					<p>{title}</p>
				</div>
				<Button
					className={`${style.button}`}
					//@ts-ignore
					style={ isVisible===index ? {transform:`rotate(${180}deg)`} : {transform:`rotate(${0}deg)`}}
					onClick={() => {
						if(isVisible === index){
							setIsVisible(0)
						}else{
						setIsVisible(index)
						}
					}}
				>
					<IoIosArrowDown />
				</Button>
			</div>

			<div
				className={style.text}
				ref={ref}
				style={{
					height: `${
						//@ts-ignore
						isVisible===index ? `${ref?.current?.scrollHeight}px` : '0'
					}`
				}}
			>
				<ul>{children}</ul>
			</div>
		</div>
	)
}

export default HotelInfoCard
