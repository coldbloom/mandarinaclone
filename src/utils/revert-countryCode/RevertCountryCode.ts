import { ApiData } from '@/api/apiData/api.data'

export const RevertCountryCode = (countryCode: string) => {
	for (let i = 0; i < ApiData.directionsData2.length; i++) {
		if (ApiData.directionsData2[i].code === countryCode){      
			return ApiData.directionsData2[i].name
    }
	}
	return ''
}
