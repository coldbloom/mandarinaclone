import React, { FC } from 'react'

type Props = {}

export const useDateRequestMainFrom: FC<any> = ({
	fromTown,
	directionName,
	getDate,
	dataReq,
	setActualDate,
	calendarRef,
	openCalendar
}) => {
	React.useEffect(() => {
		if (fromTown && directionName) {
			getDate.mutate({
				townFrom: dataReq.fromTownCode,
				countryCode: dataReq.countryCode
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
	}, [fromTown, directionName, openCalendar])

	return <></>
}
