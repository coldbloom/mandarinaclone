
import {createDate} from "./createDate";
import {getMonthNumberOfDays} from "./getMonthNumberOfDays";

export const createMonth = (local = null, dat = null) => {
    const locale = local !== null ? local : 'default'
    const date = dat !== null ? dat : new Date()

    const d = createDate(locale, date)
    const {month: monthName, year, monthNumber, monthIndex} = d

    const getDay = (dayNumber) => createDate(locale, new Date(year, monthIndex, dayNumber))

    const createMonthDays = () => {
        const days = []

        for (let i = 0; i <= getMonthNumberOfDays(monthIndex, year) - 1; i++) {
            days[i] = getDay(i + 1)
        }

        return days
    }

    return {
        getDay,
        monthName,
        monthIndex,
        monthNumber,
        year,
        createMonthDays
    }

}