import React from 'react'

import './SearchPage.scss'

import Header from '@/templates/header/Header'
import InviteComp from './components/InviteComp'
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
import { PropsDateService } from '@/services/date/dateService.interface'
import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'

const SearchPage = () => {
	const toursInfo = JSON.parse(
		localStorage.getItem('userInfo') || ''
	)

	const [searchParams]: any = useSearchParams()
	const [tours, setTours] = React.useState<any>()
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
	const [nightMin, setNightMin] = React.useState<any>()
	const [nightMax, setNightMax] = React.useState<any>()

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
	const getTours = useMutation('get-tours', (data:PropsSearchTours) =>
		SearchToursService.getSearchTours(data),{
			onSuccess:(data)=>{
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
				nights_max: toursInfo.nights_max,
			}
			getTours.mutate(dataProps)
		}
		
		// let url = `https://api.mandarina.lv/api/search-tours?townFrom=${'ee'}&countryCode=${'eg'}&adult=${'1'}&child=${'0'}&data=${'20230414'}&nights_min=${'1'}&nights_max=${'18'}&price_range_min=${'10'}&price_range_max=${'1000'}&sort=${''}&page=${''}&raiting=${checkedValue.join(
		// 	''
		// )}`
		// axios.get(url).then(response => setTours(response.data))
	}, [search])

	React.useEffect(() => {}, [search])

	// React.useEffect(() => {
	//     setNightMax(20)
	//     setNightMin(1)
	// }, [reset])

	const [checkedValue, setCheckedValue] = React.useState<any>([])
	const [mealValue, setMealValue] = React.useState<any>([])
	const handleChange = (event: any) => {
		const { value, checked } = event.target

		if (checked) {
			setCheckedValue((pre: any) => [...pre, value])
		} else {
			setCheckedValue((pre: any) => {
				return [...pre.filter((skill: any) => skill !== value)]
			})
		}
	}

	const handleMealChange = (event: any) => {
		const { value, checked } = event.target

		if (checked) {
			setMealValue((pre: any) => [...pre, value])
		} else {
			setMealValue((pre: any) => {
				return [...pre.filter((skill: any) => skill !== value)]
			})
		}
	}

	return (
		<>
			<div className='search-page'>
				<div className='bg-gray-wrapper'>
					<Header />
				</div>
				<InviteComp/>
				<div className='container-xxl'>
					<MainForm />
				</div>
				<OffersCountComp hotelsCount={tours?.total} />
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
								<div className='filter_item'>
									<div className='filter_name'>Город</div>
									<div className='hotel_search'>
										<input
											type='text'
											className='select_hotel'
										/>
									</div>
								</div>
								<div className='filter_item'>
									<RangeSlider
										initialMin={1000}
										initialMax={20000}
										min={1000}
										max={20000}
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
									/>
								</div>
								<div className='filter_item'>
									<TypeFoodModule
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
									<button
										className='btn_ get-offer hvr-event'
										onClick={() => setSearch(!search)}
									>
										Искать
									</button>
									<button
										className='btn_ get-offer hvr-event reset_btn'
										onClick={() => setReset(!reset)}
									>
										Сбросить
									</button>
								</div>
							</div>
						</div>

						<div className='col-12 col-lg-8 search_col-8'>
							<div className='row search_row_mb'>
								{tours?.data.map((hotel: any, i: any) => (
									<SearchPageHotelCard
										hotel={hotel}
										key={i}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SearchPage
