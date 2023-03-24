import React, { FC, useContext, useEffect } from 'react'
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
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import SkeletonLoaderCardTour from '@/components/ui/skeleton-types/SkeletonLoaderCardTour'
import SkeletonFullCards from '@/components/ui/skeleton-types/SkeletonFullCards'
import { LangContext } from '@/components/provider/MainProvider'

const Home: FC<any> = ({ setTours, timeData, setTimeData,getPost }) => {
	const { lang,toggleLang:setLang } = useContext(LangContext)
	
	const { t } = useTranslation()
	const getBestHotels = useBestHotel()
	const getPopularHotels = usePopularHotel()
	return (
		<div className='flex flex-col bg-transparent'>
			<Header/>
			<div className='mainBg flex flex-col items-center'>
				<InviteComp
					setTours={setTours}
					timeData={timeData}
					setTimeData={setTimeData}
				/>
			</div>
			<main className='max-w-full'>
				{/* {getBestHotels.isSuccess && ( */}
				<OfferComp
					getBestHotels={getBestHotels}
					title={t('best_tour')}
					description={t('offer_mb_interest')}
					lang={lang}
					setLang={setLang}
				/>
				{/* )} */}

				<OfferComp
					getBestHotels={getPopularHotels}
					title={t('popular_tour')}
					description={t('offer_mb_interest')}
					lang={lang}
					setLang={setLang}
				/>
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
