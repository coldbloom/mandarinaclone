import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import style from './Nights.module.scss'
import arrowSvg from '@/assets/images/arrowExit.svg'
interface PropsNights {
	state: any
	setState: any
	modalRef: any
	setOpenForm:any
}

const Nights: FC<PropsNights> = ({
	// HandlerPlus,
	// HandlerMinus
	state,
	setState,
	modalRef,
	setOpenForm
}) => {
	const handlerPlusMinNight = (e: any) => {
		e.stopPropagation()
		if (state.nights_min + 1 >= state.nights_max) return
		setState((state: any) => ({
			...state,
			nights_min: state.nights_min + 1
		}))
	}
	const handlerMinusMinNight = (e: any) => {
		e.stopPropagation()
		if (state.nights_min <= 2) return
		setState((state: any) => ({
			...state,
			nights_min: state.nights_min - 1
		}))
	}
	const handlerPlusMaxNight = (e: any) => {
		if (state.nights_max >= 18) return
		setState((state: any) => ({
			...state,
			nights_max: state.nights_max + 1
		}))
	}
	const handlerMinusMaxNight = (e: any) => {
		if (state.nights_max <= state.nights_min + 1) return
		setState((state: any) => ({
			...state,
			nights_max: state.nights_max - 1
		}))
	}

	return (
		<div className={style.nights} ref={modalRef}>
			<div className={style.header}>
				<p>Ночей</p>
				<p>Кол-во ночей</p>
			</div>
			<div>
				<div className={style.buttons}>
					<Button
						className={`${state.nights_min <= 2 && style.disabled}`}
						onClick={e => handlerMinusMinNight(e)}
					>
						-
					</Button>
					<p>{state.nights_min}</p>
					<Button
						className={`${
							state.nights_min >= state.nights_max - 1 &&
							style.disabled
						}`}
						onClick={e => handlerPlusMinNight(e)}
					>
						+
					</Button>
				</div>
			</div>
			<div className={style.buttons}>
				<Button
					className={`${
						state.nights_min +1 >= state.nights_max &&
						style.disabled
					}`}
					onClick={e => handlerMinusMaxNight(e)}
				>
					-
				</Button>
				<p>{state.nights_max}</p>
				<Button
					className={`${state.nights_max >= 18 && style.disabled}`}
					onClick={e => handlerPlusMaxNight(e)}
				>
					+
				</Button>
			</div>
			<Button
				onClick={e => {
					e.stopPropagation()
					setOpenForm(0)
				}}
				className={`arrowButtonExit ${style.styleButtonArrow}`}
			>
				<img src={arrowSvg} alt='' />
			</Button>
		</div>
	)
}

export default Nights
