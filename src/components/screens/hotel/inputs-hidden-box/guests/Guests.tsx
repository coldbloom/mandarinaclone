import Button from '@/components/ui/button/Button'
import React, { FC } from 'react'
import style from './Guests.module.scss'
import arrowSvg from '@/assets/images/arrowExit.svg'
import { useTranslation } from 'react-i18next'
interface PropsNights {
	state: any
	setState: any
	modalRef: any
	setOpenForm:any
}

const Guests: FC<PropsNights> = ({
	state,
	setState,
	modalRef,
	setOpenForm
}) => {
	const {t} = useTranslation()
	const handlerPlusMinAdult = () => {
		if (state.adult >= 4) return
		setState((state: any) => ({
			...state,
			adult: state.adult + 1
		}))
	}
	const handlerMinusMinAdult = () => {
		if (state.adult <= 1) return
		setState((state: any) => ({
			...state,
			adult: state.adult - 1
		}))
	}
	const handlerPlusMaxChild = () => {
		if (state.child >= 3) return
		const newChildsAge = [...state.childs_age]
		newChildsAge.push(2)
		setState((state: any) => ({
			...state,
			child: state.child + 1,
			childs_age:newChildsAge
		}))
	}
	const handlerMinusMaxChild = () => {
		const newChildsAge = [...state.childs_age]
		newChildsAge.pop()
		if (state.child <= 0) return
		setState((state: any) => ({
			...state,
			child: state.child - 1,
			childs_age:newChildsAge
		}))
	}
	const handlerPlusChildsAge = (index: number) => {
		if (state.childs_age[index] >= 14) return
		const newChildsAge = [...state.childs_age]
		newChildsAge[index] = state.childs_age[index] + 1
		setState((state: any) => ({
			...state,
			childs_age: newChildsAge
		}))
	}
	const handlerMinusChildsAge = (index:number) => {
		if (state.childs_age[index] <= 2) return
		const newChildsAge = [...state.childs_age]
		newChildsAge[index] = state.childs_age[index] - 1
		setState((state: any) => ({
			...state,
			childs_age: newChildsAge
		}))
	}

	return (
		<div className={style.guests} ref={modalRef}>
			{/* <div className={style.header}>
				<p>Взрослые</p>
				<p>Старше 14 лет</p>
			</div> */}
			<div className={style.item}>
				<div>
					<p>{t('adults')}</p>
					<p>{t('over_14_years_old')}</p>
				</div>
				<div className={style.buttons}>
					<Button
						className={`${state.adult <= 1 && style.disabled}`}
						onClick={() => handlerMinusMinAdult()}
					>
						-
					</Button>
					<p>{state.adult}</p>
					<Button
						className={`${state.adult >= 4 && style.disabled}`}
						onClick={() => handlerPlusMinAdult()}
					>
						+
					</Button>
				</div>
			</div>
			<div className={style.item}>
				<div>
					<p>{t('childs')}</p>
					<p>{t('from_2_to_14_years_old')}</p>
				</div>
				<div className={style.buttons}>
					<Button
						className={`${state.child <= 0 && style.disabled}`}
						onClick={() => handlerMinusMaxChild()}
					>
						-
					</Button>
					<p>{state.child}</p>
					<Button
						className={`${state.child >= 3 && style.disabled}`}
						onClick={() => handlerPlusMaxChild()}
					>
						+
					</Button>
				</div>
			</div>
			{state.child.length !== 0 &&
				state.childs_age.map((el: any, key: any) => (
					<div key={key} className={style.item}>
						<div>
							<p>{t('number_of_years')}</p>
							<p>{t('from_2_to_14_years_old')}</p>
						</div>
						<div className={style.buttons}>
							<Button
								className={`${
									state.childs_age[key] <= 2 && style.disabled
								}`}
								onClick={() => handlerMinusChildsAge(key)}
							>
								-
							</Button>
							<p>{state.childs_age[key]}</p>
							<Button
								className={`${
									state.childs_age[key] >= 14 && style.disabled
								}`}
								onClick={() => handlerPlusChildsAge(key)}
							>
								+
							</Button>
						</div>
					</div>
				))}
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

export default Guests
