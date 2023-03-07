export const FindNameToKey = (arrayCode: any[], code: string) => {
	if (!arrayCode) return null
	for (let i = 0; i < arrayCode.length; i++) {
		if (arrayCode[i].code === code) return arrayCode[i].name
	}
	return null
}
