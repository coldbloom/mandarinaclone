import { GetOfferData2 } from '@/components/screens/get-offer/get-offer1/get-offer1.data'

export const ConvertDateToConvert = (date: string) => {
	const newDate = date.split('-')

	
	return `${parseInt(newDate[2])} ${
		GetOfferData2[parseInt(newDate[1])-1].monthDate
	}`
}

export const ConvertDateToConvertYear = (date?: string) => {
	const newDate = date?.split('-')
	if (!newDate) return ''
	return `${parseInt(newDate[2])} ${
		GetOfferData2[parseInt(newDate[1])].monthDate
	} ${newDate[0]}`
}
