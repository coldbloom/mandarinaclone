import Header from '@/components/screens/Home/header/Header'
import MailingComp from '@/components/screens/Home/mailing-comp/MailingComp'
import Footer from '@/components/screens/footer/Footer'
import { BlogService } from '@/services/blog/blog.service'
import { ConvertDateMongo } from '@/utils/convert-date-mongo/ConvertDateMongo'
import { ConvertDateToConvertYear } from '@/utils/convert-date-to-standart/ConvertDateToStandart'
import React, { FC, useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import style from './BlogId.module.scss'
import { useTranslation } from 'react-i18next'
import { LangContext } from '@/components/provider/MainProvider'

const BlogId:FC = () => {
	const { id } = useParams()
	const {lang,toggleLang:setLang} = useContext(LangContext)
	//@ts-ignore
	const postId = useQuery('get-post-id', () => BlogService.getId(id,lang), {
		enabled: !!id,
		select: data => data.data.map((el:any)=>({
			country:el.country,
			created_at:el.created_at,
			description:el?.description || el.description_lv,
			id:el.id,
			image:el.image,
			title:el?.title || el.title_lv,
			url:el.url,
			content:el?.content || el.content_lv
		}))[0]
	})
	
  function createMarkup(text:string) {
    return {__html: text}
  }
	const {t} = useTranslation()
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header lang={lang} setLang={setLang}/>
			</div>
			<div className={style.blogId}>
				{postId.data && (
					<div>
						<div className={style.img}>
							<img
								src={`https://mandarina.lv/storage/${postId.data.image}`}
								alt='blog-img'
							/>
							<div className={style.infoPost}>
								<Link to='blog'>Blog</Link>
								<span>
									{ConvertDateToConvertYear(ConvertDateMongo(postId.data.created_at),t)}
								</span>
							</div>
						</div>
						<h1>{postId.data.country}</h1>
						<div className={style.description}>
              <h3>{postId.data.description}</h3>
              <div className={style.text}>
              <div dangerouslySetInnerHTML={createMarkup(postId.data.content)} />
              </div>
            </div>
					</div>
				)}
			</div>
      <MailingComp />
			<Footer />
		</>
	)
}

export default BlogId
