export const CheckedKeys = (arrayBoolItems: boolean[]) => {
	let arrayStrings = ''
	for (let i = 0; i < arrayBoolItems.length; i++) {
		if (arrayBoolItems[i]) arrayStrings += i + 1
	}
	return arrayStrings
}
