
import {getWeekNumber} from "./getWeekNumber";
export const createDate = (locale = 'default', d = new Date()) => {
    const dayNumber = d.getDate()
    const day = d.toLocaleDateString(locale, { weekday: 'long' })
    const dayNumberInWeek = d.getDate() + 1
    const dayShort = d.toLocaleDateString(locale, { weekday: 'short' })
    const year = d.getFullYear()
    const yearShort = d.toLocaleDateString(locale, { year: "2-digit" })
    const month = d.toLocaleDateString(locale, {month: 'long'})
    const monthShort = d.toLocaleDateString(locale, {month: 'short'})
    const monthNumber = d.getMonth() + 1
    const monthIndex = d.getMonth()
    const timestamp = d.getTime()
    const week = getWeekNumber(d)

    return {
        d,
        dayNumber,
        day,
        dayNumberInWeek,
        dayShort,
        year,
        yearShort,
        month,
        monthShort,
        monthNumber,
        monthIndex,
        timestamp,
        week,
    }
}