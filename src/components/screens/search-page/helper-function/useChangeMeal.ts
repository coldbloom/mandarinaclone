import { TypesMeal } from '@/types/meal.types'
import React, { Dispatch, FC } from 'react'

interface PropsChangeMeal {
	mealValue: TypesMeal
	setMealValue: Dispatch<any>
}

export const useChangeMeal = ({ mealValue, setMealValue }: PropsChangeMeal) => {
	const handleMealChange = (code: any) => {
		const newMealValue = [...mealValue]
		const key = mealValue.indexOf(code)
		if (key === -1) {
			newMealValue.push(code)
		} else {
			newMealValue.splice(key, 1)
		}
		setMealValue(newMealValue)
	}
	return { handleMealChange }
}
