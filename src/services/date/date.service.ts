import { axiosClassic } from '@/api/interceptors'
import { PropsDateService } from './date.service.interface'

export const DateService = {
	async getDate({
		townFrom,
		countryCode,
		adults,
		childs,
		childs_age,
		nights_min,
		nights_max,
		price_range_min = 10,
		price_range_max = 10000,
		meal_types = ['RO', 'BB', 'HB', 'FB', 'AI', 'UAI']
	}: PropsDateService) {
		const response = await axiosClassic.get('/date', {
			params: {
				townFrom,
				countryCode,
				adults,
				childs,
				childs_age,
				nights_min,
				nights_max,
				price_range_min,
				price_range_max,
				meal_types: String(meal_types)
			}
		})
		return response
	}
}
