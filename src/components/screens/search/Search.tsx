import SubscribeBlock from '@/components/ui/subscribe-block/SubscribeBlock'
import React from 'react'
import Header from '../Home/header/Header'
import PopularTours from './popular-tours/PopularTours'

import style from './Search.module.scss'

const Search = () => {
	return (
		<div className='search-page'>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<div className={style.searchTours}>
				<h1>
					Популярные направления
				</h1>
				<PopularTours />
			</div>
			<SubscribeBlock />
		</div>
	)
}

export default Search
