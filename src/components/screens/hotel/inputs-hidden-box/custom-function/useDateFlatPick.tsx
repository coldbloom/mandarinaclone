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
				townFrom: townFrom,
				countryCode: countryCode
			})
			if (getDate.data?.data) {
				setActualDate(Object.values(getDate.data.data))
				setTimeout(() => {
					if (calendarRef.current) {
						calendarRef.current.click()
					}
				}, 500)
			}
		}
	}, [
		meal_types,
		newTimeDate.nights_min,
		newTimeDate.nights_max,
		newTimeDate.price_range_max
	])

	return <></>
}
