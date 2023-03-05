import React from 'react'
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

const Home = () => {
	return (
		<>
			<div className='mainBg flex flex-col items-center'>
				<Header />
				<InviteComp />
			</div>
			<main className='max-w-full'>
				 <OfferComp
					data={bestHotels}
					title='Лучшие предложения'
					description='Предложения, которые могут быть интересны'
				/>
				<OfferComp
					data={popularHotel}
					title='Поппулярные предложения'
					description='Предложения, которые могут быть интересны'
				/>
				
				<IndividualOffer />
				<PrincipleWork />
				<ReviewSlider />
				<ArticlesComp />
				<PopularDestinations />
				<MailingComp />
			</main>
		</>
	)
}

export default Home
