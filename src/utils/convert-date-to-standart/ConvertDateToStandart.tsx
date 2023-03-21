import { GetOfferData2 } from '@/components/screens/get-offer/get-offer1/get-offer1.data'
import { useTranslation } from 'react-i18next'

export const ConvertDateToConvert = (date: string,t?:any) => {
	const newDate = date.split('-')
	//const {t} = useTranslation()
	
	return `${parseInt(newDate[2])} ${
		t(GetOfferData2[parseInt(newDate[1])-1].monthDate)
	}`
}

export const ConvertDateToConvertYear = (date?: string,t?:any) => {
	const newDate = date?.split('-')
	if (!newDate) return ''
	return `${parseInt(newDate[2])} ${
		t(GetOfferData2[parseInt(newDate[1])].monthDate)
	} ${newDate[0]}`
}
