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
import { BlogService } from '@/services/blog/blog.service'

const Home: FC<any> = ({ setTours, timeData, setTimeData }) => {
	const getPost = useQuery('get-posts', () => BlogService.getBlog(),{
		select:(data)=>data.data
	})
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

	return (
		<div className='flex flex-col bg-transparent'>
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
				{ getPost.data && <ArticlesComp data={getPost.data}/>}
				<PopularDestinations />
				<MailingComp />
			</main>
		</div>
	)
}

export default Home
