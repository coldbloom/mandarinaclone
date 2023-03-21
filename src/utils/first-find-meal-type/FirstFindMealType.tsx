import React from 'react'
import { ApiData } from '@/api/apiData/api.data'
import { useTranslation } from 'react-i18next'

const FindTypeInCode = (key: any) => {
	for (let i = 0; i < ApiData.nutritionType.length; i++) {
		if (ApiData.nutritionType[i].code === key) {
			return ApiData.nutritionType[i].name
		}
	}
}

export const FirstFindMealType = (meal_types: any) => {
	const { t } = useTranslation()
	let state = []
	let firstKey = -1
	if (!meal_types) return ''
	for (let i = 0; i < ApiData.nutritionType.length; i++) {
		const key = meal_types.indexOf(ApiData.nutritionType[i].code)
		if (key !== -1) {
			state.push(ApiData.nutritionType[i].code)
			if (firstKey === -1) firstKey = key
		}
	}
	if (firstKey === -1) return `${t('select_options')}`
	if (state.length > 1)
		return `${t(FindTypeInCode(meal_types[firstKey]) || '')} ${t(
			'and_better'
		)}`
	if (state.length === 1)
		return `${t(FindTypeInCode(meal_types[firstKey]) || '')}`
	return `${t('select_options')}`
}
