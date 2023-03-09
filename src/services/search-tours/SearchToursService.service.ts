import { axiosClassic } from '@/api/interceptors'
import { PropsSearchTours } from './SearchToursService.interface'

export const SearchToursService = {
	async getSearchTours({
		townFrom,
		countryCode,
		adult,
		child = 0,
		childs_age,
		price_range_min = 10,
		price_range_max = 100,
		meal_types = 'AL,BB',
		nights_max,
		nights_min,
		rating,
		sort,
		data,
		page=1
	}: PropsSearchTours) {
		console.log(meal_types);
		
		const response = await axiosClassic.get('/search-tours', {
			params: {
				townFrom,
				countryCode,
				adult,
				child,
				childs_age,
				price_range_min,
				price_range_max,
				meal_types,
        nights_max,
        nights_min,
        rating,
        sort,
				data,
				page
			}
		})
		return response
	},
	async getHotel({id}:{id:string}){
		
		const response = axiosClassic.get(`hotel/${id}`)
		return response
	}
}
