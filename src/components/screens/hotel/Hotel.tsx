import Header from '@/components/screens/Home/header/Header'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
//@ts-ignore
import ImageGallery from 'react-image-gallery'
import style from './Hotel.module.scss'
import infoSvg1 from '@/assets/images/info-card/rest.svg'
import infoSvg2 from '@/assets/images/info-card/about.svg'
import infoSvg3 from '@/assets/images/info-card/meal.svg'
import infoSvg4 from '@/assets/images/info-card/about.svg'
import infoSvg5 from '@/assets/images/info-card/geo.svg'
import defaultImg from '@/assets/images/default-home.jpeg'
import kidSvg from '@/assets/images/trip/kids.svg'
import './Hotel.scss'
import HotelInfoCard from '@/components/ui/hotel-info-card/HotelInfoCard'
import { FindNameToKey } from '@/utils/find-name-to-key/FindNameToKey'
import { ApiData } from '@/api/apiData/api.data'
import { PropsDateService } from '@/services/blog/blog.service.interface'
import { DateService } from '@/services/date/date.service'
import TableList from './table-list/TableList'
import BoxForm from './search-box/BoxForm'
import { useDateFlatPick } from './inputs-hidden-box/custom-function/useDateFlatPick'
import LeftNav from './navigation/LeftNav'
import RightNav from './navigation/RightNav'
import LoadingPage from '@/components/LoadingPage/LoadingPage'
import Footer from '../footer/Footer'
import { useTranslation } from 'react-i18next'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { LangContext } from '@/components/provider/MainProvider'

const Hotel: FC<any> = ({
	timeData,
	setTimeData,
	checkout,
	setCheckout,
}) => {
	const {lang,toggleLang:setLang} = useContext(LangContext)
	const { id } = useParams()
	const { t } = useTranslation()
	const [hotelEnabled, setHotelEnabled] = useState<string | undefined>(id)
	const [newTimeDate, setNewTimeData] = useState(timeData)
	const [loading, setLoading] = React.useState(true)
	const getHotel = useQuery(
		'get-hotel',
		() =>
			//@ts-ignore
			SearchToursService.getHotel({ id }),
		{
			enabled: !!id,
			onSuccess: () => {
				setLoading(false)
			}
		}
	)
	const toursInfo: any = timeData
	const testRequest: any = {
		// fromTownCode: toursInfo?.townFrom || null,
		countryCode: toursInfo?.countryCode || null,
		adults: toursInfo?.adult || 1,
		childs: toursInfo?.child || 0,
		nights_min: toursInfo?.nights_min || 1,
		nights_max: toursInfo?.nights_max || 18,
		date: toursInfo?.data || '',
		price_range_min: toursInfo?.price_range_min || 10,
		price_range_max: toursInfo?.price_range_max || 10000,
		childYear: toursInfo?.childs_age || [],
		meal_types: toursInfo?.meal_types || [
			'RO',
			'BB',
			'HB',
			'FB',
			'AI',
			'UAI'
		]
	}

	const offerList = useQuery(
		'get-offer-left',
		() =>
			SearchToursService.getOfferList({ ...newTimeDate, hotelCode: id }),
		{
			enabled: !!hotelEnabled,
			onSuccess: () => setHotelEnabled(undefined),
			select: data => data.data.slice(0, 5)
		}
	)

	// useEffect(()=>{

	// },[newTimeDate])
	const [dataReq, setDataReq] = React.useState(testRequest)

	//const [openForm, setOpenForm] = useState(0)
	const modalRef = useRef(null)
	let navigate = useNavigate()
	const calendarRef = useRef<HTMLParagraphElement | null>(null)
	const [openCalendar, setOpenCalendar] = React.useState(false)
	const [directionName, setDirectionName] = React.useState(
		FindNameToKey(ApiData.directionsData2, dataReq?.countryCode)
	)
	const [fromTown, setFromTown] = React.useState<null | string>(
		FindNameToKey(ApiData.directionsData, dataReq?.fromTownCode)
	)

	const getDate = useMutation(
		'get-date-tours',
		(data: PropsDateService) => DateService.getDate(data),
		{
			onError: () => {
				setActualDate([])
			},
			onSuccess: data => {
				if (data.data.length === 0) {
					setActualDate([])
					setDate(null)
				} else {
					setActualDate(Object.values(data.data))
				}
				if (Object.values(data?.data)?.indexOf(date) === -1) {
					setDate(null)
					calendarRef?.current?.click()
				}
			}
		}
	)

	const [actualDate, setActualDate] = React.useState([])
	const [images, setImages] = useState(null)
	const [date, setDate] = React.useState<null | string>(
		newTimeDate?.data || null
	)
	useEffect(() => {
		if (getHotel.isSuccess && getHotel.data.data.photoList) {
			let images = getHotel.data.data.photoList.map((el: any) => ({
				original: `https://api.mandarina.lv/${el.urlPhoto}`,
				thumbnail: `https://api.mandarina.lv/${el.urlPhoto}`
			}))
			if (images.length === 0) {
				images = [...Array(1)].map(() => ({
					original: defaultImg,
					thumbnail: defaultImg
				}))
			}
			setImages(images)
		}
	}, [getHotel.data])

	React.useEffect(() => {
		let handler = (e: any) => {
			//@ts-ignore
			if (!modalRef.current?.contains(e.target)) {
				setOpenForm(0)
			}
		}
		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [])

	const [openForm, setOpenForm] = useState(0)
	useDateFlatPick({
		getDate,
		townFrom: newTimeDate.townFrom,
		setActualDate,
		countryCode: newTimeDate.countryCode,
		meal_types: newTimeDate.meal_types,
		calendarRef,
		openCalendar,
		newTimeDate
	})
	function createMarkup(text: string) {
		return { __html: text }
	}

	const sendOrder = ({
		checkIn,
		checkOut,
		hotelName,
		meal,
		price,
		room
	}: any) => {
		const newOrder = {
			checkIn,
			checkOut,
			hotelName,
			meal,
			price,
			room,
			rating: getHotel.data?.data.rating,
			adult: newTimeDate.adult,
			child: newTimeDate.child,
			photo:
				getHotel.data?.data?.photoList.length !== 0
					? `https://api.mandarina.lv/${getHotel.data?.data?.photoList[0].urlPhoto}`
					: defaultImg,
			location_lv: getHotel.data?.data.location_lv,
			location_ru: getHotel.data?.data.location_ru,
			location_en: getHotel.data?.data.location_en,
			hotelCode:getHotel.data?.data.hotelCode,
			
		}
		setCheckout(newOrder)
		setTimeData(newTimeDate)
		//@ts-ignore
		localStorage.setItem('checkout', JSON.stringify(newOrder))
		navigate('/checkout')
	}
	useEffect(() => {
		//return setLoading(false)
	}, [])
	//const [loading, setLoading] = useState(true)
	const ref = useRef<any>(null)
	const [isVisibleCard, setIsVisibleCard] = useState(0)

	if (loading) return <LoadingPage />

	return (
		<>
			{getHotel.isSuccess && (
				<>
					<div className='bg-gray-wrapper'>
						<Header/>
					</div>
					<div className='container-xxl'>
						<div className='mt-36 max-[600px]:mt-24'>
							{images && (
								<div className={style.slider}>
									<ImageGallery
										ref={ref}
										items={images}
										thumbnailPosition={
											window.innerWidth > 1000
												? 'left'
												: 'bottom'
										}
										showPlayButton={false}
										showFullscreenButton={false}
										renderLeftNav={(
											onClick: any,
											disabled: any
										) => (
											<LeftNav
												onClick={onClick}
												disabled={
													ref?.current?.state
														.currentIndex === 0
												}
											/>
										)}
										renderRightNav={(
											onClick: any,
											disabled: any
										) => (
											<RightNav
												onClick={onClick}
												disabled={
													ref?.current?.state
														.currentIndex ===
													getHotel.data.data
														?.photoList?.length -
														1
												}
											/>
										)}
									/>
								</div>
							)}
						</div>
						<div className={style.crumbs}>
							<span>
								<Link to='/search'>{t('search_tours')}</Link>
								{' > '}
							</span>
							<span>
								<Link to='/search-tours'>
									{lang === 'ru'
										? getHotel.data.data.location_ru
										: lang === 'lv'
										? getHotel.data.data.location_lv
										: t('search_tours')}
								</Link>
							</span>
						</div>
						<div className={`${style.description} `}>
							<h2>{getHotel.data?.data.name}</h2>
						</div>
						<div className={style.bg}>
							<div className={style.price}>
								<h3>
									{`${t('c')}`}{' '}
									{offerList?.data?.[0] ? (
										offerList.data?.[0].price?.replace(
											'.',
											','
										)
									) : (
										<SkeletonLoader
											count={1}
											width={100}
											height={50}
											className='mr-5'
										/>
									)}
									€<span>{t('at_all')}</span>
								</h3>
								<p>
									{t(
										'the_price_depends_on_the_date_of_departure_and_the_type_of_food'
									)}
								</p>
							</div>
							<div className='row '>
								<div className='col-12'>
									{/* <div className='search-wrap'> */}
									<BoxForm
										setOpenForm={setOpenForm}
										openForm={openForm}
										newTimeDate={newTimeDate}
										modalRef={modalRef}
										setNewTimeData={setNewTimeData}
										actualDate={actualDate}
										setHotelEnabled={setHotelEnabled}
										offerList={offerList}
										date={date}
										setDate={setDate}
										loadingDate={getDate.isLoading}
										calendarRef={calendarRef}
										openCalendar={openCalendar}
										setOpenCalendar={setOpenCalendar}
									/>
									{/* </div> */}
								</div>
							</div>
						</div>

						{/* //	{offerList.data &&  */}
						{/* ( */}
						<TableList
							offerList={offerList.data}
							sendOrder={sendOrder}
							hotelEnabled={hotelEnabled}
							getHotel={getHotel.data.data}
						/>
						{/* )} */}
						<div className={style.hotelInfo}>
							<img
								src={
									getHotel.data.data.photoList.length !== 1 &&
									getHotel.data.data.photoList?.[0]
										? `https://api.mandarina.lv/${getHotel.data?.data?.photoList?.[0].urlPhoto}`
										: defaultImg
								}
								alt='description'
							/>
							<div className={style.description2}>
								<h2>{t('info_about_hotels')}</h2>
								{getHotel.data?.data.descriptionHotel.length !==
								0 ? (
									<div>
										{
											getHotel.data?.data
												.descriptionHotel[0].description
										}
									</div>
								) : (
									<div>{t('not_a_info')}</div>
								)}
							</div>
						</div>
						<div>
							{/* //{getHotel.data?.data && getHotel.data.data.hotelActiveRestList.map((el,key)=>)} */}
							{getHotel.data?.data && (
								<>
									{getHotel.data.data.hotelForKidsList
										.length !== 0 && (
										<HotelInfoCard
											title={t('services_for_children')}
											img={kidSvg}
											text='rfewfe'
											isVisible={isVisibleCard}
											setIsVisible={setIsVisibleCard}
											index={1}
										>
											{getHotel.data.data.hotelForKidsList.map(
												(el: any, key: any) => (
													<div
														dangerouslySetInnerHTML={createMarkup(
															el.forKids
														)}
														key={key}
													></div>
												)
											)}
										</HotelInfoCard>
									)}
									{getHotel.data.data.hotelActiveRestList
										.length !== 0 && (
										<HotelInfoCard
											title={t('activities')}
											img={infoSvg1}
											text='rfewfe'
											isVisible={isVisibleCard}
											setIsVisible={setIsVisibleCard}
											index={2}
										>
											{getHotel.data.data.hotelActiveRestList.map(
												(el: any, key: any) => (
													<div
														dangerouslySetInnerHTML={createMarkup(
															el.activeRest
														)}
														key={key}
													></div>
												)
											)}
										</HotelInfoCard>
									)}
									{getHotel.data.data.hotelAboutList
										.length !== 0 && (
										<HotelInfoCard
											title={t('info_about_hotels')}
											img={infoSvg2}
											text='rfewfe'
											isVisible={isVisibleCard}
											setIsVisible={setIsVisibleCard}
											index={3}
										>
											{getHotel.data.data.hotelAboutList.map(
												(el: any, key: any) => (
													<div
														dangerouslySetInnerHTML={createMarkup(
															el.hotel
														)}
														key={key}
													></div>
												)
											)}
										</HotelInfoCard>
									)}
									{getHotel.data.data.hotelFoodList.length !==
										0 && (
										<HotelInfoCard
											title={t('meal')}
											img={infoSvg3}
											text='rfewfe'
											isVisible={isVisibleCard}
											setIsVisible={setIsVisibleCard}
											index={4}
										>
											{getHotel.data.data.hotelFoodList.map(
												(el: any, key: any) => (
													<div
														dangerouslySetInnerHTML={createMarkup(
															el.food
														)}
														key={key}
													></div>
												)
											)}
										</HotelInfoCard>
									)}
									{getHotel.data.data.hotelNoteList.length !==
										0 && (
										<HotelInfoCard
											title={t('note')}
											img={infoSvg4}
											text='rfewfe'
											isVisible={isVisibleCard}
											setIsVisible={setIsVisibleCard}
											index={5}
										>
											{getHotel.data.data.hotelNoteList.map(
												(el: any, key: any) => (
													<div
														dangerouslySetInnerHTML={createMarkup(
															el.notes
														)}
														key={key}
													></div>
												)
											)}
										</HotelInfoCard>
									)}
									{getHotel.data.data.hotelLocationList
										.length !== 0 && (
										<HotelInfoCard
											title={t('location')}
											img={infoSvg5}
											text='rfewfe'
											isVisible={isVisibleCard}
											setIsVisible={setIsVisibleCard}
											index={6}
										>
											{getHotel.data.data.hotelLocationList.map(
												(el: any, key: any) => (
													<div
														key={key}
														dangerouslySetInnerHTML={createMarkup(
															el.location
														)}
													></div>
												)
											)}
										</HotelInfoCard>
									)}
								</>
							)}
						</div>
					</div>
				</>
			)}
			<Footer />
		</>
	)
}

export default Hotel
