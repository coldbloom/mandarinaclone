import React, { FC } from 'react'
import './ArticleComp.scss'
import Article from './Article'
import { ConvertDateMongo } from '@/utils/convert-date-mongo/ConvertDateMongo'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ArticlesComp: FC<any> = ({ data }) => {
	const location = useLocation()
	const { t } = useTranslation()
	return (
		<div className='article-wrap'>
			<div className='carusel_wrap carusel_wrap4 mt_block'>
				<div className='container-xxl carusel_container'>
					<div className='header'>
						<h1>
							{t('tips_for_your_vacation_from_travel_experts')}
						</h1>
						<p>{t('get_inspired_for_your_next_trip')}</p>
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
								{t('open_all_articles')}
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default ArticlesComp
