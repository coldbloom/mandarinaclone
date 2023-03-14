import React, { FC } from 'react'

type Props = {}

export const useDateRequestMainFrom: FC<any> = ({
	fromTown,
	directionName,
	getDate,
	dataReq,
	setActualDate,
	calendarRef,
	openCalendar,
	date,
	setDate,
	meal_types
}) => {
	React.useEffect(() => {
		if (fromTown && directionName) {
			getDate.mutate({
				townFrom: dataReq.fromTownCode,
				countryCode: dataReq.countryCode,
				meal_types: dataReq.meal_types
			})
			if (getDate.data?.data) {
				if(Object.values(getDate.data?.data).indexOf(date) === -1){
					setDate(null)
				}
				
				setActualDate(Object.values(getDate.data.data))
				setTimeout(() => {
					if (calendarRef.current) {
						calendarRef.current.click()
					}
				}, 500)
			}
		}
	}, [fromTown, directionName, openCalendar,meal_types])

	return <></>
}
