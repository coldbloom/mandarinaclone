import React, { FC, useContext } from 'react'

import './SearchPage.scss'

import Header from '@/templates/header/Header'
import InviteComp from '@/components/screens/invite-comp/InviteComp'
import MainForm from '@/templates/main-form/MainForm'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import OffersCountComp from './components/OffersCountComp'
import SearchPageHotelCard from './components/SearchPageHotelCard/SearchPageHotelCard'
import RangeSlider from './components/RangeSlider/RangeSlider'
import RaitingModule from './components/RaitingModule/RaitingModule'

import hotelstar from './../../assets/images/hotel-star.svg'
import hotelstarTransporent from '../../assets/images/hotel-star-transporent.svg'
import TypeFoodModule from './components/TypeFoodModule/TypeFoodModule'
import { useMutation, useQueryClient } from 'react-query'
import { DateService } from '@/services/date/date.service'
import { PropsDateService } from '@/services/date/date-service.interface'
import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import { UserDataContext } from '@/index.js'
import Pagination from '@/components/ui/pagination/Pagination'
import PopularTours from './popular-tours/PopularTours'
import Button from '@/components/ui/button/Button'
import { CheckedKeys } from '@/utils/checked-keys/CheckedKeys'
import { PullValueInState } from '@/utils/checked-keys/PullInValueInState'

const SearchPage: FC<any> = ({ tours, setTours, timeData, setTimeData }) => {
	const toursInfo = localStorage.getItem('userInfo')
		? JSON.parse(localStorage.getItem('userInfo') || '')
		: null

	const [searchParams]: any = useSearchParams()
	//const [tours, setTours] = React.useState<any>()
	const [search, setSearch] = React.useState(false)
	const [reset, setReset] = React.useState(false)

	let {
		townFrom: townFrom,
		countryCode: countryCode,
		adult: adult,
		child: child,
		data: data,
		nights_max: nights_max,
		nights_min: nights_min,
		price_range_min: price_range_min,
		price_range_max: price_range_max,
		page: page,
		sort: sort
	} = Object.fromEntries([...searchParams])

	const [priceMin, setPriceMin] = React.useState()
	const [priceMax, setPriceMax] = React.useState()
	const [nightMin, setNightMin] = React.useState<any>(timeData.nights_min)
	const [nightMax, setNightMax] = React.useState<any>(timeData.nights_max)

	const [raitingArray, setRaitingArray] = React.useState('')
	const setPriceMinFunc = (e: any) => {
		setPriceMin(e)
	}
	const setPriceMaxFunc = (e: any) => {
		setPriceMax(e)
	}
	const setNightMinFunc = (night: any) => {
		setNightMin(night / 1000)
	}
	const setNightMaxFunc = (night: any) => {
		setNightMax(night / 1000)
	}
	const queryClient = useQueryClient()

	const getTours = useMutation(
		'get-tours',
		(data: PropsSearchTours) => SearchToursService.getSearchTours(data),
		{
			onSuccess: data => {
				setTours(data.data)
			}
		}
	)

	React.useEffect(() => {
		if (toursInfo) {
			const dataProps: PropsSearchTours = {
				townFrom: toursInfo.fromTownCode,
				countryCode: toursInfo.countryCode,
				adult: toursInfo.adults,
				data: toursInfo.date,
				nights_min: toursInfo.nights_min,
				nights_max: toursInfo.nights_max
			}
			queryClient.invalidateQueries('get-search-tours', toursInfo)
			//getTours.mutate(dataProps)
		}
	}, [search])

	React.useEffect(() => {
		const dataProps: PropsSearchTours = {
			townFrom: toursInfo?.fromTownCode,
			countryCode: toursInfo?.countryCode,
			adult: toursInfo?.adults,
			data: toursInfo?.date,
			nights_min: toursInfo?.nights_min,
			nights_max: toursInfo?.nights_max
		}
		if (toursInfo) getTours.mutate(dataProps)
	}, [])

	React.useEffect(() => {
		// setNightMax(18)
		// setNightMin(1)
	}, [reset])

	const [checkedValue, setCheckedValue] = React.useState([
		true,
		true,
		true,
		true,
		true
	])
	const [mealValue, setMealValue] = React.useState<any>([
		true,
		true,
		true,
		true,
		true,
		true
	])

	const handleChange = (event: any, key: number) => {
		const { value, checked } = event.target
		const data = [...checkedValue]
		data[key] = checked
		setCheckedValue(data)
	}

	const handleMealChange = (event: any, key: any) => {
		const { value, checked } = event.target
		const data = [...mealValue]
		data[key] = checked
		setMealValue(data)
	}

	const getSearchTours = useMutation(
		'get-search-tours2',
		(data: PropsSearchTours) => SearchToursService.getSearchTours(data),
		{
			onSuccess: data => {
				setTours(data.data)
			}
		}
	)

	if (!toursInfo)
		return (
			<div className='search-page'>
				<div className='bg-gray-wrapper'>
					<Header />
				</div>
				<PopularTours />
			</div>
		)

	const handlerSearch = () => {
		const dataProps: PropsSearchTours = {
			townFrom: toursInfo.fromTownCode,
			countryCode: toursInfo.countryCode,
			adult: toursInfo.adults,
			data: toursInfo.date,
			nights_min: toursInfo.nights_min,
			nights_max: toursInfo.nights_max,
			rating: CheckedKeys(checkedValue)
		}
		getSearchTours.mutate(dataProps)
	}

	const handlerReset = () => {
		setCheckedValue(PullValueInState(checkedValue))
		setMealValue(PullValueInState(mealValue))
		const nights_min = 1
		const nights_max = 18
		// const priceMin = 10
		// const priceMax = 9999
		setTimeData((data: any) => ({ ...data, nights_min, nights_max }))
		let localeStorageNew =
			localStorage.getItem('userInfo') &&
			JSON.parse(localStorage.getItem('userInfo') || '')
		localeStorageNew = { ...localeStorageNew, nights_min, nights_max }
		localStorage.setItem('userInfo', JSON.stringify(localeStorageNew))
	}
	return (
		<>
			<div className='search-page mt-40'>
				<div className='bg-gray-wrapper'>
					<Header />
				</div>
				<h1 className='text-center text-6xl my-20 font-bold'>
					Поиск по путешествию
				</h1>
				<div className='inviteComp py-5'>
					<MainForm
						setTours={setTours}
						timeData={timeData}
						setTimeData={setTimeData}
					/>
				</div>
				<OffersCountComp
					hotelsCount={tours?.total}
					getSearchTours={getSearchTours}
					toursInfo={toursInfo}
				/>
				<div className='container-xxl container_search_result'>
					<div className='row'>
						<div className='col-4 search_filter_result_wrap'>
							<div className='search_filter_result_body'>
								<div className='filter_item'>
									<div className='filter_name'>
										Какую гостиницу Вы выбрали?
									</div>
									<div className='hotel_search'>
										<input
											type='text'
											className='select_hotel'
										/>
									</div>
								</div>
								<div className='filter_item'>
									<RangeSlider
										initialMin={200}
										initialMax={7000}
										min={10}
										max={9999}
										step={100}
										step2={10}
										priceCap={100}
										scaleError={0}
										title={'Ценовой диапазон'}
										changeMin={setPriceMinFunc}
										changeMax={setPriceMaxFunc}
										reset={reset}
									/>
								</div>
								{/* <div className='filter_item'>
									<div className='filter_name'>Город</div>
									<div className='hotel_search'>
										<input
											type='text'
											className='select_hotel'
										/>
									</div>
								</div> */}
								<div className='filter_item'>
									<RangeSlider
										initialMin={1000 * nightMin}
										initialMax={1000 * nightMax}
										min={1000}
										max={18000}
										step={100}
										step2={1000}
										priceCap={1000}
										scaleError={0}
										title={'Кол-во ночей'}
										changeMin={setNightMinFunc}
										changeMax={setNightMaxFunc}
										nightMax={nightMax}
										nightMin={nightMin}
										reset={reset}
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
								>
									<Button
										className='py-2 px-4 border-red-100 border-1'
										onClick={() => handlerSearch()}
									>
										<span>Искать</span>
									</Button>
									<Button
										className='py-2 px-4 border-red-100 border-1'
										onClick={() => handlerReset()}
									>
										<span>Сброс</span>
									</Button>
								</div>
							</div>
						</div>

						<div className='col-12 col-lg-8 search_col-8'>
							<div className='row search_row_mb'>
								{tours?.data?.length &&
									tours.data.map((hotel: any, i: any) => (
										<SearchPageHotelCard
											hotel={hotel}
											key={i}
										/>
									))}
							</div>
							<Pagination
								setTours={setTours}
								toursInfo={toursInfo}
								tours={tours}
								total={2}
								allPages={4}
								getSearchTours={getSearchTours}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SearchPage
