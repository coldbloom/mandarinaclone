import { axiosClassic } from '@/api/interceptors'
import { PropsDateService } from './blog.service.interface'

export const BlogService = {
	async getBlog(lang?:string) {
		
		const response = await axiosClassic.get('/blog-posts', {
			params: {
				lang: lang === 'ru' ? 'RU' : "LV"
			}
		})
		return response
	},
	async getId(url: string, lang:string) {
		const response = await axiosClassic.get(`/blog-post/${url}`, {
			params: {
				lang: lang ==='ru' ? 'RU' : 'LV'
			}
		})
		return response
	}
}
