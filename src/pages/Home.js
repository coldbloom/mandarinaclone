import React from 'react'
import OfferComp from '../components/OfferComp/OfferComp'
import { bestHotels } from '../assets/data/bestHotels'
import { popularHotel } from '../assets/data/popularHotel'
import IndividualOffer from '../components/IndividualOfferer'
import PrincipleWork from '../components/PrincipleWork/PrincipleWork'
import ReviewSlider from '../components/rewiewSlider/ReviewSlider'
import ArticlesComp from '../components/ArticlesComp/ArticlesComp'
import PopularDestinations from '../components/PopularDestinations/PopularDestinations'
import MailingComp from '../components/MailingComp/MailingComp'
import InviteComp from '../components/InviteComp/InviteComp'
import Header from '../components/Header'

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
					title='Популярные предложения'
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
