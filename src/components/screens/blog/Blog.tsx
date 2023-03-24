import { LangContext } from '@/components/provider/MainProvider'
import { BlogService } from '@/services/blog/blog.service'
import { ConvertDateMongo } from '@/utils/convert-date-mongo/ConvertDateMongo'
import React, { FC, useContext } from 'react'
import { useQuery } from 'react-query'
import Footer from '../footer/Footer'
import ArticlesComp from '../Home/articles-comp/ArticlesComp'
import Header from '../Home/header/Header'
import MailingComp from '../Home/mailing-comp/MailingComp'

import './Blog.scss'

const Blog: FC<any> = ({ getPost }) => {
	const { lang, toggleLang: setLang } = useContext(LangContext)

	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header lang={lang} setLang={setLang} />
			</div>
			<main>
				<div className='blog-page'>
					<div className='container-xxl'>
						<div className='row'>
							<div className='col-12'></div>
						</div>
					</div>
					{getPost.data && <ArticlesComp data={getPost.data} />}
					<MailingComp />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Blog
