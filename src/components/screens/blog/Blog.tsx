import { BlogService } from '@/services/blog/blog.service'
import { ConvertDateMongo } from '@/utils/convert-date-mongo/ConvertDateMongo'
import React from 'react'
import { useQuery } from 'react-query'
import ArticlesComp from '../Home/articles-comp/ArticlesComp'
import Header from '../Home/header/Header'
import MailingComp from '../Home/mailing-comp/MailingComp'

import './Blog.scss'

const Blog = () => {
	const getPost = useQuery('get-posts', () => BlogService.getBlog(),{
		select:(data)=>data.data
	})
	console.log(getPost?.data)
	
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<main>
				<div className='blog-page'>
					<div className='container-xxl'>
						<div className='row'>
							<div className='col-12'>
								{/* <h1 className='block_title center_title blog_title'>
									Советы для твоего отдыха от экспертов по
									путешествиям
								</h1>
								<div className='block_description blog_desc'>
									Получите вдохновение для следующей поездки.
								</div> */}
							</div>
						</div>
					</div>
					{getPost.data && <ArticlesComp data={getPost.data}/>}
					<MailingComp />
				</div>
			</main>
		</>
	)
}

export default Blog
