import { ApiData } from '@/api/apiData/api.data'
import { SearchDirectionService } from '@/services/search-direction/search-direction.service'
import CardPopularTour from '@/components/ui/card-popular-tour/CardPopularTour'
import React, { useEffect, useState } from 'react'
import { useQueries } from 'react-query'
import style from './PopularTours.module.scss'

const PopularTours = () => {
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

	console.log(getPopularTour)
	const [ready, isReady] = useState(false)

	useEffect(() => {
		if (!ready) {
			for (let i = 0; i < getPopularTour.length; i++) {
				if (getPopularTour[i].isLoading) return
				isReady(true)
			}
		}
	}, [getPopularTour])

	if (!ready) return null
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
							price={el.data?.data.price}
							subTitle='subtitle'
							title='title'
							countHotel={el.data?.data.countHotel}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default PopularTours
