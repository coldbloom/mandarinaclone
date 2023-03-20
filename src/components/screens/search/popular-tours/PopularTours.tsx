import { ApiData } from '@/api/apiData/api.data'
import { SearchDirectionService } from '@/services/search-direction/search-direction.service'
import CardPopularTour from '@/components/screens/search/card-popular-tour/CardPopularTour'
import React, { FC, useEffect, useState } from 'react'
import { useQueries } from 'react-query'
import style from './PopularTours.module.scss'
import { RevertCountryCode } from '@/utils/revert-countryCode/RevertCountryCode'
import { useNavigate } from 'react-router-dom'
const PopularTours: FC<any> = ({ setTimeData, timeData,getPopularTour}) => {
	const countryCode = ApiData.countryCode

	
	//if (!ready) return <span>Loading</span>
	return (
		<div className={style.popularTours}>
			{getPopularTour.map((el:any, key:any) => {
				return (
					<div
						className={`${style.itemCard} ${
							key === 0 && 'row-span-2'
						} ${key === 1 && 'col-span-1 row-span-1'} ${
							key === 2 && 'row-span-1 col-span-1'
						} `}
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
