import React, { FC } from 'react'
import './ArticleComp.scss'
import Article from './Article'
import { ConvertDateMongo } from '@/utils/convert-date-mongo/ConvertDateMongo'
import { Link, useLocation } from 'react-router-dom'

const ArticlesComp: FC<any> = ({ data }) => {
	const location = useLocation()

	return (
		<div className='article-wrap'>
			<div className='carusel_wrap carusel_wrap4 mt_block'>
				<div className='container-xxl carusel_container'>
					<div className='header'>
						<h1>
							Советы для твоего отдыха от экспертов по
							путешествиям!
						</h1>
						<p>Получите вдохновение для следующей поездки.</p>
					</div>
					<div className='row articles_row'>
						{data.map((el: any, key: any) => (
							<Article
								key={el.id}
								title={el.title}
								image={`https://mandarina.lv/storage/${el.image}`}
								date={ConvertDateMongo(data[key].created_at)}
								url={el.url}
								description={`${el.description?.substring(
									0,
									100
								)}...`}
							/>
						))}
					</div>
				</div>
			</div>
			{location.pathname === '/' && (
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<Link
								to='/blog'
								className='btn_article_all hvr-event'
							>
								Открыть все статьи
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default ArticlesComp
