import { axiosClassic } from '@/api/interceptors'
import { PropsSearchDirection } from './search-direction.interface'

export const SearchDirectionService = {
	async getSearchDirection({
		countryCode,
		townFrom = 'ee'
	}: PropsSearchDirection) {
		const response = await axiosClassic.get('search-direction', {
			params: { countryCode, townFrom }
		})
    return response
	}
  
}
