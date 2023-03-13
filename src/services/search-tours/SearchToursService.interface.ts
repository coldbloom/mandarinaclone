export interface PropsSearchTours {
	townFrom: string
	countryCode: string
	adult: number
	child?: number
	childs_age?: number
	price_range_min?: number
	price_range_max?: number
	nights_min: number
	nights_max: number
	sort?: string
	rating?: string | boolean[]
	data:string
	meal_types?: string[] | string,
	page?:number
}

export interface PropsOfferList {
	townFrom: string
	hotelCode:string
	adult: number
	child?: number
	childs_age?: number
	price_range_min?: number
	price_range_max?: number
	nights_min: number
	nights_max: number
	sort?: string
	rating?: string | boolean[]
	data:string
	meal_types?: string[] | string,
	page?:number
}
