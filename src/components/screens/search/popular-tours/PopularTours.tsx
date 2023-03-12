import { ApiData } from '@/api/apiData/api.data'
import { SearchDirectionService } from '@/services/search-direction/search-direction.service'
import CardPopularTour from '@/components/screens/search/card-popular-tour/CardPopularTour'
import React, { FC, useEffect, useState } from 'react'
import { useQueries } from 'react-query'
import style from './PopularTours.module.scss'
import {RevertCountryCode} from '@/utils/revert-countryCode/RevertCountryCode'
import { useNavigate } from 'react-router-dom'
const PopularTours:FC<any> = ({setTimeData,timeData}) => {
	
	const countryCode = ApiData.countryCode
	const getPopularTour = useQueries([
		{
			queryKey: ['post', 1],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[0]
				})
		},
		{
			queryKey: ['post2', 2],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[1]
				})
		},
		{
			queryKey: ['post3', 3],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[2]
				})
		},
		{
			queryKey: ['post4', 4],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[3]
				})
		},
		{
			queryKey: ['post5', 5],
			queryFn: () =>
				SearchDirectionService.getSearchDirection({
					countryCode: countryCode[4]
				})
		}
	])
	const [ready, isReady] = useState(false)

	useEffect(() => {
		if (!ready) {
			for (let i = 0; i < getPopularTour.length; i++) {
				if (getPopularTour[i].isLoading) return
				isReady(true)
			}
		}
	}, [getPopularTour])
	console.log(getPopularTour[0]);
	
	if (!ready) return <span>Loading</span>
	return (
		<div className={style.popularTours}>
			{getPopularTour.map((el, key) => {
				return (
					<div
						className={`${style.itemCard} ${key === 0 && 'row-span-2'} ${
							key === 1 && 'col-span-1 row-span-1'
						} ${key===2 && 'row-span-1 col-span-1'} `}
						key={key}
					>
						<CardPopularTour
							data={getPopularTour[key].data?.data}
							subTitle='subtitle'
							setTimeData={setTimeData}
							timeData={timeData}
							title={countryCode[key]}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default PopularTours