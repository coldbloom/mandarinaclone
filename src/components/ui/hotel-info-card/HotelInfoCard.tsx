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
const HotelInfoCard: FC<PropsHotelInfoCard> = ({ img, title, text }) => {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef<null>(null)

	return (
		<div className={style.infoCard}>
			<div className={style.header}>
				<div>
					<img src={img} alt='' />
					<p>{title}</p>
				</div>
				<Button
					className={`${style.button} ${isVisible && style.isVisible}`}
					onClick={() => setIsVisible(!isVisible)}
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
						isVisible ? `${ref?.current?.scrollHeight + 20}px` : '0'
					}`
				}}
			>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default HotelInfoCard
