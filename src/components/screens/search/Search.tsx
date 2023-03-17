import { ApiData } from '@/api/apiData/api.data'
import LoadingPage from '@/components/LoadingPage/LoadingPage'
import MailingComp from '@/components/MailingComp/MailingComp'
import SubscribeBlock from '@/components/ui/subscribe-block/SubscribeBlock'
import { SearchDirectionService } from '@/services/search-direction/search-direction.service'
import React, { FC, useEffect, useState } from 'react'
import { useQueries } from 'react-query'
import Header from '../Home/header/Header'
import PopularTours from './popular-tours/PopularTours'

import style from './Search.module.scss'

const Search: FC<any> = ({ setTimeData, timeData }) => {
	const [loading, setLoading] = useState(true)

	const countryCode = ApiData.countryCode
	const getPopularTour = useQueries([
		{
			queryKey: ['post', 1],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[0],
					townFrom: timeData.townFrom
				})
		},
		{
			queryKey: ['post2', 2],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[1],
					townFrom: timeData.townFrom
				})
		},
		{
			queryKey: ['post3', 3],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[2],
					townFrom: timeData.townFrom
				})
		},
		{
			queryKey: ['post4', 4],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[3],
					townFrom: timeData.townFrom
				})
		},
		{
			queryKey: ['post5', 5],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[4],
					townFrom: timeData.townFrom
				})
		}
	])
	const [ready, isReady] = useState(false)

	useEffect(() => {
		if (!ready) {
			for (let i = 0; i < getPopularTour.length; i++) {
				if (!getPopularTour[i].isSuccess) return
				isReady(true)
			}
		}
	}, [getPopularTour])
	useEffect(() => {
		if (ready) setLoading(false)
	}, [ready])

	useEffect(() => {
		return setLoading(true)
	}, [])
	if (loading) return <LoadingPage />
	return (
		<div className='search-page'>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<div className={style.searchTours}>
				<h1>Популярные направления</h1>
				{ready && (
					<PopularTours
						setTimeData={setTimeData}
						timeData={timeData}
						getPopularTour={getPopularTour}
					/>
				)}
			</div>
			<MailingComp />
		</div>
	)
}

export default Search
