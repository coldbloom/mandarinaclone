import Header from '@/components/screens/Home/header/Header'
import MailingComp from '@/components/screens/Home/mailing-comp/MailingComp'
import { BlogService } from '@/services/blog/blog.service'
import { ConvertDateMongo } from '@/utils/convert-date-mongo/ConvertDateMongo'
import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import style from './BlogId.module.scss'

const BlogId = () => {
	const { id } = useParams()

	//@ts-ignore
	const postId = useQuery('get-post-id', () => BlogService.getId(id), {
		enabled: !!id,
		select: data => data.data[0]
	})
	console.log(postId.data)
  function createMarkup(text:string) {
    return {__html: text}
  }
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
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
									{ConvertDateMongo(postId.data.created_at)}
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
		</>
	)
}

export default BlogId
