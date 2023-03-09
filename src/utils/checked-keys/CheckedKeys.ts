export const CheckedKeys = (arrayBoolItems: any) => {
	let arrayStrings = ''
	for (let i = 0; i < arrayBoolItems.length; i++) {
		if (arrayBoolItems[i]) arrayStrings += i + 1
	}
	return arrayStrings
}
