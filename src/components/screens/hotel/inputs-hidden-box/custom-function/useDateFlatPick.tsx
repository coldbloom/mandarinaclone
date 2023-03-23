import React, { FC } from 'react'

export const useDateFlatPick: FC<any> = ({
	getDate,
	townFrom,
	setActualDate,
	countryCode,
	meal_types,
	calendarRef,
	openCalendar,
	newTimeDate
}) => {

	React.useEffect(() => {
		if (townFrom && countryCode) {
			getDate.mutate({
				townFrom: newTimeDate.townFrom,
				countryCode: newTimeDate.countryCode,
				adults: newTimeDate.adult,
				childs: newTimeDate.child,
				nights_min: newTimeDate.nights_min,
				nights_max: newTimeDate.nights_max,
				childs_age: newTimeDate.childs_age,
				price_range_min: newTimeDate.price_range_min,
				price_range_max: newTimeDate.price_range_max,
				meal_types: newTimeDate.meal_types
			})
			// if (getDate.data?.data) {
				// setActualDate(Object.values(getDate.data.data))
			// 	setTimeout(() => {
			// 		if (calendarRef.current) {
			// 			calendarRef.current.click()
			// 		}
			// 	}, 500)
			// }
		}
	}, [
		meal_types,
		newTimeDate.nights_min,
		newTimeDate.nights_max,
		newTimeDate.price_range_max,
		newTimeDate.adult,
		newTimeDate.child,
		newTimeDate.childs_age
	])

	return <></>
}
