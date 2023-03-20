export interface PropsGetOffer {
	month: string
	step: number
	countryCode: string
	childs: number
	adults: number
	chidls_age: number[]
	comment: string
	form: {
		firstName: string
		lastName: string
		phone: string
		email: string
	}
	price_range_min: number | null
	price_range_max: number | null
	peopleBaby: number
}
export type TypeStateGetOffer = {
	month: string
	step: number
	countryCode: string
	peopleBaby: number,
	childs: number
	adults: number
	comment: string
	chidls_age: number[]
	form: {
		firstName: string
		lastName: string
		phone: string
		email: string
	}
	price_range_min: number | null
	price_range_max: number | null
}
