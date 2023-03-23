import { ApiData } from '@/api/apiData/api.data'
import LoadingPage from '@/components/LoadingPage/LoadingPage'
import MailingComp from '@/components/MailingComp/MailingComp'
import SubscribeBlock from '@/components/ui/subscribe-block/SubscribeBlock'
import { SearchDirectionService } from '@/services/search-direction/search-direction.service'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQueries } from 'react-query'
import Footer from '../footer/Footer'
import Header from '../Home/header/Header'
import PopularTours from './popular-tours/PopularTours'

import style from './Search.module.scss'

const Search: FC<any> = ({ setTimeData, timeData, setLoading,lang,setLang}) => {
	const [first, setFirst] = useState(true)
	const {t} = useTranslation()
	const countryCode = ApiData.countryCode
	const getPopularTour = useQueries([
		{
			queryKey: ['post', 1],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[0],
					townFrom: timeData.townFrom || 'ee'
				})
		},
		{
			queryKey: ['post2', 2],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[1],
					townFrom: timeData.townFrom || 'ee'
				})
		},
		{
			queryKey: ['post3', 3],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[2],
					townFrom: timeData.townFrom || 'ee'
				})
		},
		{
			queryKey: ['post4', 4],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[3],
					townFrom: timeData.townFrom || 'ee'
				})
		},
		{
			queryKey: ['post5', 5],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[4],
					townFrom: timeData.townFrom || 'ee'
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
		if (ready) {
			setFirst(false)
			setLoading(false)
		}
	}, [ready])

	useEffect(() => {
		return setFirst(true)
	}, [])
	if (first) return <LoadingPage />
	return (
		<div className='search-page'>
			<div className='bg-gray-wrapper'>
				<Header lang={lang} setLang={setLang}/>
			</div>
			<div className={style.searchTours}>
				<h1>{t('popular_destionations')}</h1>
				{ready && (
					<PopularTours
						setTimeData={setTimeData}
						timeData={timeData}
						getPopularTour={getPopularTour}
					/>
				)}
			</div>
			<MailingComp />
			<Footer />
		</div>
	)
}

export default Search
