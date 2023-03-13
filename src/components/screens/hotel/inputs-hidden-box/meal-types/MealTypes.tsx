import { ApiData } from '@/api/apiData/api.data'
import React, { FC } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import style from './MealTypes.module.scss'
interface PropsNights {
	state: any
	setState: any
	modalRef: any
}

const MealTypes: FC<PropsNights> = ({ state, setState, modalRef }) => {
	const changeMealTypes = (meal: any) => {
		let newMealTypes = [...state.meal_types]
		const key = newMealTypes.indexOf(meal.code)
		if (key !== -1) {
			newMealTypes.splice(key, 1)
		} else {
			newMealTypes.push(meal.code)
		}
		setState((state: any) => ({ ...state, meal_types: newMealTypes }))
	}
	return (
		<div className={style.mealTypes} ref={modalRef}>
			<ul className={style.list}>
				{ApiData.nutritionType.map((el, key) => (
					<li
						className={
							state.meal_types.indexOf(el.code) !== -1
								? style.active
								: ''
						}
						onClick={() => changeMealTypes(el)}
					>
						{state.meal_types.indexOf(el.code) !== -1 && (
							<div className={style.checkMark}>
								<AiOutlineCheck />
							</div>
						)}
						{el.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default MealTypes
