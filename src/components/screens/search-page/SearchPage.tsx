import React, { FC, useContext, useEffect, useState } from 'react'

import './SearchPage.scss'
import Header from '@/components/screens/Home/header/Header'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import style from './SearchPage.module.scss'
import 'swiper/css'
import OffersCountComp from './components/OffersCountComp'
import SearchPageHotelCard from './components/SearchPageHotelCard/SearchPageHotelCard'
import RangeSlider from './components/RangeSlider/RangeSlider'
import RaitingModule from './components/RaitingModule/RaitingModule'

import TypeFoodModule from './components/TypeFoodModule/TypeFoodModule'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import Pagination from '@/components/ui/pagination/Pagination'
import searchIcon from '@/assets/images/IconSearch.svg'
import Button from '@/components/ui/button/Button'
import { CheckedKeys } from '@/utils/checked-keys/CheckedKeys'
import { PullValueInState } from '@/utils/checked-keys/PullInValueInState'
import InviteComp2 from '@/utils/form-helper/invite-comp/InviteComp2'

import useCustomSearch from './useCustomSearch'
import CheckRating from '@/utils/check-rating/CheckRating'
import LoadingPage from '@/components/LoadingPage/LoadingPage'
import 'react-toastify/dist/ReactToastify.css'
import filterSvg from '@/assets/images/filter.svg'
import { ToastContainer, toast } from 'react-toastify'

import Footer from '../footer/Footer'
import MailingComp from '../Home/mailing-comp/MailingComp'
import OfferComp from '../Home/offer-comp/OfferComp'
import useBestHotel from '@/hooks/useBestHotel'
import { useTranslation } from 'react-i18next'
import { LangContext } from '@/components/provider/MainProvider'
import { useChangeRange } from './helper-function/useChangeRange'
import { useWindowSize } from '@/hooks/useWindowSize'
import { useChangeMeal } from './helper-function/useChangeMeal'
import { useResetFilter } from './helper-function/useResetFilter'
const SearchPage: FC<any> = ({
	tours,
	setTours,
	timeData,
	setTimeData,
	searchToursMain,
	setLoading
}) => {
	const { lang, toggleLang: setLang } = useContext(LangContext)
	const { t } = useTranslation()
	const { width }: any = useWindowSize()
	const client = useQueryClient()

	const getBestHotels = useBestHotel()
	const { allHotel, isValue, value, isSearching } = useCustomSearch()

	const toursInfo = timeData

	const [priceMin, setPriceMin] = React.useState(timeData.price_range_min)
	const [priceMax, setPriceMax] = React.useState(timeData.price_range_max)
	const [nightMin, setNightMin] = React.useState(timeData.nights_min)
	const [nightMax, setNightMax] = React.useState(timeData.nights_max)
	const [checkedValue, setCheckedValue] = React.useState(timeData.rating)
	const [mealValue, setMealValue] = React.useState(timeData.meal_types)
	const [sort, setSort] = useState(timeData.sort)

	const [hiddenFilter, setHiddenFilter] = useState(false)

	const {
		setNightMaxFunc,
		setNightMinFunc,
		setPriceMaxFunc,
		setPriceMinFunc
	} = useChangeRange({ setPriceMin, setPriceMax, setNightMin, setNightMax })

	const { handleMealChange } = useChangeMeal({ mealValue, setMealValue })

	const getToursFirst = useQuery(
		'get-tours-first',
		() => SearchToursService.getSearchTours(toursInfo),
		{
			onSuccess: data => {
				setTours(data.data)
				setFirst(false)
			}
		}
	)

	const handleChange = (event: any, key: number) => {
		const { checked } = event.target
		const data = [...checkedValue]
		data[key] = checked
		setCheckedValue(data)
	}

	const handlerSearch = () => {
		const dataProps: PropsSearchTours = {
			...toursInfo,
			nights_min: nightMin,
			nights_max: nightMax,
			rating: checkedValue,
			price_range_min: priceMin,
			price_range_max: priceMax,
			meal_types: mealValue,
			sort
		}
		setHiddenFilter(false)
		searchToursMain.mutate(dataProps)
	}
	const { handlerReset } = useResetFilter({
		setCheckedValue,
		setHiddenFilter,
		setMealValue,
		setTimeData,
		timeData
	})

	useEffect(() => {
		if (!getToursFirst.isLoading) {
			setLoading(false)
		}
	}, [getToursFirst.isLoading])

	React.useEffect(() => {
		hiddenFilter && width < 1200
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'scroll')
	}, [hiddenFilter])

	const [first, setFirst] = useState(true)

	useEffect(() => {
		if (searchToursMain.isSuccess) {
			setFirst(false)
		}
	}, [searchToursMain])
	useEffect(() => {
		return setFirst(true)
	}, [])

	if (first) return <LoadingPage />

	return (
		<>
			<div className={`search-page ${hiddenFilter && 'overflow-hidden'}`}>
				<div>
					<div className='bg-gray-wrapper'>
						<Header />
					</div>
					<InviteComp2
						timeData={timeData}
						setTimeData={setTimeData}
						searchToursMain={searchToursMain}
					/>
				</div>
				<OffersCountComp
					hotelsCount={!searchToursMain.isLoading ? tours?.total : ''}
					getSearchTours={searchToursMain}
					toursInfo={toursInfo}
					nightMin={nightMin}
					nightMax={nightMax}
					checkedValue={checkedValue}
					priceMin={priceMin}
					priceMax={priceMax}
					mealValue={mealValue}
					setSort={setSort}
					sort={sort}
				/>
				<div className='container-xxl container_search_result'>
					<div className='row'>
						<div
							className={`col-4 search_filter_result_wrap ${
								hiddenFilter && 'mobile-menu-filter'
							} `}
						>
							<div
								className={`search_filter_result_body 
								`}
							>
								<div className='filter_item'>
									<div className='filter_name'>
										{t('which_hotel_did_you_choose')}
									</div>
									<div className='hotel_search'>
										<input
											type='text'
											className='select_hotel'
											value={value}
											onChange={e => {
												isValue(e.target.value)
												client.setQueryData(
													'get-hotel-name',
													() => ({
														data: [],
														statusText: 'custom'
													})
												)
											}}
										/>

										{isSearching ? (
											<div className='searchTableLoading'>
												{t('loading')}
											</div>
										) : allHotel.data &&
										  allHotel.data?.length !== 0 ? (
											<ul className='searchTable'>
												{allHotel.data?.map(
													(el: any) => (
														<Link
															to={`/hotel/${el.hotelCode}`}
															key={el.id}
														>
															<li>{el.name}</li>
														</Link>
													)
												)}
											</ul>
										) : (
											allHotel.data?.length === 0 && (
												<div className='searchTableLoading'>
													{t('not_a_found')}
												</div>
											)
										)}
									</div>
								</div>
								<div className='filter_item'>
									<RangeSlider
										initialMin={priceMin}
										initialMax={priceMax}
										min={10}
										max={10000}
										step={100}
										step2={10}
										priceCap={100}
										scaleError={0}
										title={t('price_range')}
										changeMin={setPriceMinFunc}
										changeMax={setPriceMaxFunc}
										// reset={reset}
									/>
								</div>
								<div className='filter_item'>
									<RangeSlider
										initialMin={1000 * nightMin}
										initialMax={1000 * nightMax}
										min={1000}
										max={18000}
										step={100}
										step2={1000}
										priceCap={1000}
										scaleError={5.5}
										title={t('number_of_nights_reduction')}
										changeMin={setNightMinFunc}
										changeMax={setNightMaxFunc}
										nightMax={nightMax}
										nightMin={nightMin}
										// reset={reset}
									/>
								</div>
								<div className='filter_item'>
									<RaitingModule
										handleChange={handleChange}
										checkedValue={checkedValue}
									/>
								</div>
								<div className='filter_item'>
									<TypeFoodModule
										mealValue={mealValue}
										handleChange={handleMealChange}
									/>
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginTop: '35px'
									}}
									className='buttons-cards-handler'
								>
									<Button
										className='search-card-tours'
										onClick={() => handlerSearch()}
									>
										<span>
											{width > 1200 ? (
												t('search')
											) : (
												<span>
													<img
														src={searchIcon}
														alt=''
													/>
													{t('search')}
												</span>
											)}
										</span>
									</Button>
									<Button
										className='reset-card-tours'
										onClick={() => handlerReset()}
									>
										<span>
											{width > 1200 ? (
												t('reset')
											) : (
												<span>{t('delete')}</span>
											)}
										</span>
									</Button>
								</div>
							</div>
						</div>

						<div className={style.hotelCards}>
							{searchToursMain.isLoading && (
								<div className='text-center text-4xl my-7 font-bold'>
									{t('loading')}
								</div>
							)}
							{tours?.data?.length === 0 &&
							!searchToursMain.isLoading ? (
								<div className='text-center text-4xl my-7 font-bold'>
									{t('not_info_about_hotel')}
								</div>
							) : (
								''
							)}
							{!searchToursMain.isLoading &&
								tours?.data?.length !== 0 && (
									<div className='row search_row_mb'>
										{tours?.data?.length &&
											tours.data.map(
												(hotel: any, i: any) => (
													<SearchPageHotelCard
														hotel={hotel}
														key={i}
													/>
												)
											)}
									</div>
								)}
							{!searchToursMain.isLoading &&
								tours?.data?.length !== 0 && (
									<Pagination
										setTours={setTours}
										toursInfo={toursInfo}
										tours={tours}
										total={2}
										allPages={4}
										getSearchTours={searchToursMain}
									/>
								)}
						</div>
					</div>
				</div>
			</div>
			{!hiddenFilter && width < 1200 && (
				<div
					className={`mobile-filter ${
						width > 500 && 'mobile-menu-active'
					}`}
					onClick={() => setHiddenFilter(true)}
				>
					<p>{t('filter')}</p>
					<img src={filterSvg} alt='' />
				</div>
			)}
			{getBestHotels.data && (
				<OfferComp
					getBestHotels={getBestHotels}
					title={t('best_tour')}
					description={t('offer_mb_interest')}
					lang={lang}
					setLang={setLang}
				/>
			)}
			<MailingComp />
			<Footer />
		</>
	)
}

export default SearchPage
