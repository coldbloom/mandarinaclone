import React, { FC } from 'react'

interface PropsUseChangeRange {
	setPriceMin: (e: any) => void
	setPriceMax: (e: any) => void
	setNightMin: (night: number) => void
	setNightMax: (night: number) => void
}
//ts-ignore
export const useChangeRange= ({
	setPriceMin,
	setPriceMax,
	setNightMin,
	setNightMax
}:PropsUseChangeRange) => {
	const setPriceMinFunc = (e: any) => {
		setPriceMin(e)
	}
	const setPriceMaxFunc = (e: any) => {
		setPriceMax(e)
	}
	const setNightMinFunc = (night: any) => {
		setNightMin(night / 1000)
	}
	const setNightMaxFunc = (night: any) => {
		setNightMax(night / 1000)
	}
	//ts-ignore
	return {
		setPriceMinFunc,
		setPriceMaxFunc,
		setNightMinFunc,
		setNightMaxFunc
	}
}

// export default useChangeRange
