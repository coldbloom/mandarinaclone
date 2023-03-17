import { axiosClassic } from '@/api/interceptors'
import { PropsSendUs } from './post-query.interface'

export const PostQueryService = {
	async subscribeNews(email: string) {
		const response = await axiosClassic.post('send-email', { email })
		return response
	},
	async sendUs(form: PropsSendUs) {
		const response = await axiosClassic.post('send-email', form)
		return response
	}
}
