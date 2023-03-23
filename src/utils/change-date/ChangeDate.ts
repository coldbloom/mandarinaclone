export const ChangeDate = (date: string) => {
	const newDate = date.split('-')

	return `${newDate[2]}.${newDate[1]}.${newDate[0]}`
}
export const ChangeMont = (date: string) => {
	const newDate = date.split('-')

	return `${newDate[1]}.${newDate[0]}`
}
