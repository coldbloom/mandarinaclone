import Button from '@/components/ui/button/Button'
import React, { FC, useRef, useState } from 'react'
import style from './GetOfferSearchBox.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { ApiData } from '@/api/apiData/api.data'
import { PropsGetOfferState } from '../../get-offer1/get-offer.interface'
import { RevertCountryCode } from '@/utils/revert-countryCode/RevertCountryCode'
import { PropsGetOfferSearchBox } from './PropsGetOfferSearchBox'
import exitSvg from '@/assets/images/arrowExit.svg'

const GetOfferSearchBox: FC<PropsGetOfferSearchBox> = ({
	state,
	setState,
	handleClick,
	setError
}) => {
	const [isOpenBox, setIsOpenBox] = useState(false)
	const modalRef = useRef(null)
	React.useEffect(() => {
		let handler = (e: any) => {
			//@ts-ignore
			if (!modalRef.current?.contains(e.target)) {
				setIsOpenBox(false)
			}
		}

		document.addEventListener('mousedown', handler)
		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [])
	const handlerClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setIsOpenBox(!isOpenBox)
		e.stopPropagation()
	}

	return (
		<div className={style.getOfferSearchBox}>
			<div ref={modalRef} className={style.class}>
				<Button
					className={style.button}
					classDiv={style.div}
					onClick={e => {
						setError(false)
						handlerClick(e)
					}}
				>
					<div className={style.itemTable}>
						{RevertCountryCode(state.countryCode) ||
							'Выберите направление'}
						<MdKeyboardArrowDown />
					</div>
				</Button>
				{isOpenBox && (
					<ul className={style.table}>
						{ApiData.directionsData2.map((el, key) => (
							<li
								className={`${style.item} ${
									el.code === state.countryCode &&
									style.active
								}`}
								key={key}
								onClick={() => {
									handleClick(el.code)
									setIsOpenBox(false)
								}}
							>
								{el.name}
							</li>
						))}
						<div className={style.exit} onClick={()=>setIsOpenBox(false)}>
							<img src={exitSvg} alt='arrow-exit' />
						</div>
					</ul>
				)}
			</div>
		</div>
	)
}
export default GetOfferSearchBox
