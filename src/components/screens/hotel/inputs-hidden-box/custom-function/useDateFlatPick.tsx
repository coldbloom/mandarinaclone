import React, { FC } from 'react'


export const useDateFlatPick: FC<any> = ({
	getDate,
	townFrom,
	setActualDate,
	countryCode,
	meal_types,
	calendarRef,
	openCalendar
}) => {
	React.useEffect(() => {
		console.log('wfewf');
		
		if (meal_types) {
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
	}, [meal_types,openCalendar])

	return <></>
}
