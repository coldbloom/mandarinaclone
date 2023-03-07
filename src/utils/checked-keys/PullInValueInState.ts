export const PullValueInState = (arrayBoolItems: boolean[]) => {
	let arrayBoolItemsChange = [...arrayBoolItems]
	for (let i = 0; i < arrayBoolItems.length; i++) {
		arrayBoolItemsChange[i] = true
	}
  return arrayBoolItemsChange
}
