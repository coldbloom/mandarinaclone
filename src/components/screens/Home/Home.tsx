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
import Footer from '../footer/Footer'
import { useTranslation } from 'react-i18next'
import useBestHotel from '@/hooks/useBestHotel'
import usePopularHotel from '@/hooks/usePopularHotel'

const Home: FC<any> = ({ setTours, timeData, setTimeData }) => {
	const getPost = useQuery('get-posts', () => BlogService.getBlog(), {
		select: data => data.data
	})
	const { t, i18n } = useTranslation()
	const data = {
		data: '2023-05-18',
		adult: 1,
		nights_min: 1,
		nights_max: 18,
		townFrom: 'ee',
		countryCode: 'gr'
	}
	const getBestHotels = useBestHotel()
	const getPopularHotels = usePopularHotel()
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
					<OfferComp
						data={getBestHotels.data}
						title='Лучшие предложения'
						description='Предложения, которые могут быть интересны'
					/>
				)}
				{getPopularHotels.data && (
					<OfferComp
						data={getPopularHotels.data}
						title='Популярные предложения'
						description='Предложения, которые могут быть интересны'
					/>
				)}
				<IndividualOffer />
				<PrincipleWork />
				<ReviewSlider />
				{getPost.data && <ArticlesComp data={getPost.data} />}
				<PopularDestinations />
				<MailingComp />
			</main>
			<Footer />
		</div>
	)
}

export default Home
