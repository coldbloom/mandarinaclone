import React, { FC } from 'react'

import './SearchPage.scss'

import Header from '@/components/screens/Home/header/Header'
import { useSearchParams } from 'react-router-dom'
import style from './SearchPage.module.scss'
import 'swiper/css'
import OffersCountComp from './components/OffersCountComp'
import SearchPageHotelCard from './components/SearchPageHotelCard/SearchPageHotelCard'
import RangeSlider from './components/RangeSlider/RangeSlider'
import RaitingModule from './components/RaitingModule/RaitingModule'

import TypeFoodModule from './components/TypeFoodModule/TypeFoodModule'
import { useMutation, useQueryClient } from 'react-query'
import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import Pagination from '@/components/ui/pagination/Pagination'

import Button from '@/components/ui/button/Button'
import { CheckedKeys } from '@/utils/checked-keys/CheckedKeys'
import { PullValueInState } from '@/utils/checked-keys/PullInValueInState'
import InviteComp2 from '@/utils/form-helper/invite-comp/InviteComp2'

const SearchPage: FC<any> = ({ tours, setTours, timeData, setTimeData }) => {
	console.log(timeData)

	const toursInfo = timeData
	// localStorage.getItem('userInfo')
	// 	? JSON.parse(localStorage.getItem('userInfo') || '')
	// 	: null

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

	const [priceMin, setPriceMin] = React.useState(timeData.price_range_min)
	const [priceMax, setPriceMax] = React.useState(timeData.price_range_max)
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

	// React.useEffect(() => {
	// 	if (toursInfo) {
	// 		const dataProps: PropsSearchTours = {
	// 			townFrom: toursInfo.fromTownCode,
	// 			countryCode: toursInfo.countryCode,
	// 			adult: toursInfo.adults,
	// 			data: toursInfo.date,
	// 			nights_min: toursInfo.nights_min,
	// 			nights_max: toursInfo.nights_max
	// 		}
	// 		//queryClient.invalidateQueries('get-search-tours', toursInfo)
	// 		//getTours.mutate(dataProps)
	// 	}
	// }, [search])
	// console.log(dataProps)
	
	React.useEffect(() => {
		const dataProps: PropsSearchTours = {
			townFrom: toursInfo?.fromTownCode,
			countryCode: toursInfo?.countryCode,
			adult: toursInfo?.adults,
			data: toursInfo?.date,
			nights_min: toursInfo?.nights_min,
			nights_max: toursInfo?.nights_max,
			price_range_min: toursInfo?.price_range_min,
			price_range_max: toursInfo?.price_range_max,

		}
		if (toursInfo) getTours.mutate(dataProps)
	}, [])

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

	const handlerSearch = () => {
		const dataProps: PropsSearchTours = {
			townFrom: toursInfo.fromTownCode,
			countryCode: toursInfo.countryCode,
			adult: toursInfo.adults,
			data: toursInfo.date,
			nights_min: nightMin,
			nights_max: nightMax,
			rating: CheckedKeys(checkedValue),
			price_range_min: priceMin,
			price_range_max: priceMax
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
		setTimeData((data: any) => ({
			...data,
			nights_min,
			nights_max,
			price_range_min,
			price_range_max
		}))

		let localeStorageNew =
			localStorage.getItem('userInfo') &&
			JSON.parse(localStorage.getItem('userInfo') || '')

		localeStorageNew = {
			...localeStorageNew,
			nights_min,
			nights_max,
			price_range_min,
			price_range_max
		}
		localStorage.setItem('userInfo', JSON.stringify(localeStorageNew))
	}
	console.log(tours)

	return (
		<>
			<div className='search-page'>
				<div>
					<div className='bg-gray-wrapper'>
						<Header />
					</div>
					<InviteComp2
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
										initialMin={priceMin}
										initialMax={priceMax}
										min={10}
										max={10000}
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

						<div className={style.hotelCards}>
							{tours?.data.length === 0 ? (
								<div className='text-center text-4xl my-7 font-bold'>
									По выбранным параметрам нет туров
								</div>
							) : (
								<div className='row search_row_mb'>
									{tours?.data?.length &&
										tours.data.map((hotel: any, i: any) => (
											<SearchPageHotelCard
												hotel={hotel}
												key={i}
											/>
										))}
								</div>
							)}
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
