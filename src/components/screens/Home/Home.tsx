import React, { FC } from 'react'
import InviteComp from '../invite-comp/InviteComp'

import { bestHotels } from '@/assets/data/bestHotels'
import { popularHotel } from '@/assets/data/popularHotel'
import Header from './header/Header'
import OfferComp from './offer-comp/OfferComp'
import IndividualOffer from './individual-offer/IndividualOffer'
import PrincipleWork from './principle-work/PrincipleWork'
import ReviewSlider from './rewiew-slider/ReviewSlider'
import ArticlesComp from './articles-comp/ArticlesComp'
import MailingComp from './mailing-comp/MailingComp'
import PopularDestinations from './popular-destinations/PopularDestinations'
import { useQuery } from 'react-query'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'

const Home: FC<any> = ({ setTours, timeData, setTimeData }) => {
	const data = {
		data: '2023-05-18',
		adult: 1,
		nights_min: 1,
		nights_max: 18,
		townFrom: 'ee',
		countryCode: 'gr'
	}
	const getBestHotels = useQuery(
		'get-best-hotels',
		() => SearchToursService.getSearchTours(data),
		{
			select: data => {
				const dataSet = data.data.data.map((el: any) => ({
					images: el.photoList.map(
						(el: any) => `https://api.mandarina.lv/${el.urlPhoto}`
					),
					price: el.price,
					name: el.name,
					nights: el.nights,
					hotelCode: el.hotelCode,
					// countryCode:el.
				}))
				return dataSet
			}
		}
	)
	console.log(getBestHotels?.data)

	return (
		<div className='flex flex-col items-center bg-transparent'>
			<Header />
			<div className='mainBg flex flex-col items-center'>
				<InviteComp
					setTours={setTours}
					timeData={timeData}
					setTimeData={setTimeData}
				/>
			</div>
			<main className='max-w-full'>
				{getBestHotels.isSuccess && (
					<>
						<OfferComp
							data={getBestHotels.data}
							title='Лучшие предложения'
							description='Предложения, которые могут быть интересны'
						/>
						<OfferComp
							data={getBestHotels.data}
							title='Популярные предложения'
							description='Предложения, которые могут быть интересны'
						/>
					</>
				)}
				<IndividualOffer />
				<PrincipleWork />
				<ReviewSlider />
				<ArticlesComp />
				<PopularDestinations />
				<MailingComp />
			</main>
		</div>
	)
}

export default Home
