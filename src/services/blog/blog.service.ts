import { axiosClassic } from '@/api/interceptors'
import { PropsDateService } from './blog.service.interface'

export const BlogService = {
	async getBlog(lang: string = 'RU') {
		const response = await axiosClassic.get('/blog-posts', {
			params: {
				lang: lang
			}
		})
		return response
	},
	async getId(url: string, lang: string = 'RU') {
		const response = await axiosClassic.get(`/blog-post/${url}`, {
			params: {
				lang: lang
			}
		})
		return response
	}
}
