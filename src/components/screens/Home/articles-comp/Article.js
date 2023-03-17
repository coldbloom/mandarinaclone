import {
	ConvertDateToConvert,
	ConvertDateToConvertYear
} from '@/utils/convert-date-to-standart/ConvertDateToStandart'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ArticleComp.scss'

const Article = ({ image, title, date, url, description }) => {
	const path = useLocation()
	return (
		<div className='col-12 col-lg-4 card_wrap card_wrap4'>
			<div className='card_body'>
				<Link to={`/blog/${url}`}>
					<div
						style={{ backgroundImage: `url(${image})` }}
						className='card_img_article card_img_article3 '
					>
						<div className='article_date'>
							{ConvertDateToConvertYear(date)}
						</div>
						<button className='btn_watch hvr-event '>
							Посмотреть
						</button>
					</div>
					{/* {path.pathname !== '/blog' && } */}
				</Link>
				<div className='card_description_body'>
					<Link to={`/blog/${url}`} className='article_title'>
						{title}
					</Link>
				</div>
				<div className='card_description2_body'>{description}</div>
			</div>
		</div>
	)
}

export default Article
