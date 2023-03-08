import React from 'react'
import Header from '../Home/header/Header'
import PopularTours from '../search-page/popular-tours/PopularTours'

const Search = () => {
	return (
		<div className='search-page'>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<PopularTours />
		</div>
	)
}

export default Search
