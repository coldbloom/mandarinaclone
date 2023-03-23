import { axiosClassic } from '@/api/interceptors'
import { PropsCheckoutService } from './checkout.service.interface'

export const CheckoutService = {
	async payment(data:any) {
		const response = await axiosClassic.post('/payment', data)
		return response
	},
}
