import React, { Dispatch } from 'react'

interface PropsResetFilter {
	setHiddenFilter: Dispatch<any>
  setCheckedValue:Dispatch<any>
  setMealValue:Dispatch<any>
  timeData:any
  setTimeData:Dispatch<any>
}

export const useResetFilter = ({
	setHiddenFilter,
	setCheckedValue,
	setMealValue,
	timeData,
	setTimeData
}: PropsResetFilter) => {
	const handlerReset = () => {
		setHiddenFilter(false)
		setCheckedValue([true, true, true, true, true])
		setMealValue(['RO', 'BB', 'HB', 'FB', 'AI', 'UAI'])
		const nights_min = 1
		const nights_max = 18
		const newDate = {
			...timeData,
			nights_min,
			nights_max,
			price_range_min: 10,
			price_range_max: 10000,
			meal_types: ['RO', 'BB', 'HB', 'FB', 'AI', 'UAI'],
			rating: [true, true, true, true, true]
		}
		// searchToursMain.mutate(newDate)
		// setTimeData(newDate)
		localStorage.setItem('userInfo', JSON.stringify(newDate))
	}
  return {handlerReset}
}
