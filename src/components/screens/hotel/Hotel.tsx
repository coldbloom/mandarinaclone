import Header from '@/components/screens/Home/header/Header'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
//@ts-ignore
import ImageGallery from 'react-image-gallery'
import style from './Hotel.module.scss'
import infoSvg1 from '@/assets/images/info-card/rest.svg'
import infoSvg2 from '@/assets/images/info-card/about.svg'
import infoSvg3 from '@/assets/images/info-card/meal.svg'
import infoSvg4 from '@/assets/images/info-card/about.svg'
import infoSvg5 from '@/assets/images/info-card/geo.svg'
import './Hotel.scss'
import HotelInfoCard from '@/components/ui/hotel-info-card/HotelInfoCard'
import FlatPickerCalendar from '@/components/screens/Home/flat-picker-calendar'
import { useDateRequestMainFrom } from '@/templates/main-form/useDateRequestMainFrom'
import { FindNameToKey } from '@/utils/find-name-to-key/FindNameToKey'
import { ApiData } from '@/api/apiData/api.data'
import { PropsDateService } from '@/services/blog/blog.service.interface'
import { DateService } from '@/services/date/date.service'
import SearchBox from '@/templates/main-form/SearchBox'
import icon_5 from '@/assets/images/5.svg'
import icon_6 from '@/assets/images/6.svg'
import icon_4 from '@/assets/images/4.svg'
import { FirstFindMealType } from '@/utils/first-find-meal-type/FirstFindMealType'
import TableList from './table-list/TableList'
import BoxForm from './search-box/BoxForm'
import { useDateFlatPick } from './inputs-hidden-box/custom-function/useDateFlatPick'
import Button from '@/components/ui/button/Button'
const Hotel: FC<any> = ({ timeData, setTimeData, checkout, setCheckout }) => {
	const { id } = useParams()
	const [hotelEnabled,setHotelEnabled] = useState<string|undefined>(id)
	const [newTimeDate, setNewTimeData] = useState(timeData)
	const getHotel = useQuery(
		'get-hotel',
		() =>
			//@ts-ignore
			SearchToursService.getHotel({ id }),
		{
			enabled: !!id,
			
			// select: data =>
			// 	data.data.photoList.map((el: any) => ({
			// 		original: `https://api.mandarina.lv/${el.urlPhoto}`,
			// 		thumbnail: `https://api.mandarina.lv/${el.urlPhoto}`
			// 	}))
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
		() => SearchToursService.getOfferList({ ...newTimeDate,hotelCode: id }),
		{
			enabled: !!hotelEnabled,
			onSuccess:()=>setHotelEnabled(undefined)
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
	const getDate = useMutation('get-date-tours', (data: PropsDateService) =>
		DateService.getDate(data)
	)

	const [actualDate, setActualDate] = React.useState([])
	const [images, setImages] = useState(null)
	const [date, setDate] = React.useState<null | string>(dataReq?.date || null)
	// useDateRequestMainFrom({
	// 	fromTown,
	// 	directionName,
	// 	getDate,
	// 	dataReq,
	// 	setActualDate,
	// 	calendarRef,
	// 	openCalendar
	// })

	useEffect(() => {
		if (getHotel.isSuccess && getHotel.data.data.photoList) {
			const images = getHotel.data.data.photoList.map((el: any) => ({
				original: `https://api.mandarina.lv/${el.urlPhoto}`,
				thumbnail: `https://api.mandarina.lv/${el.urlPhoto}`
			}))
			setImages(images)
		}
	}, [getHotel.data])

	React.useEffect(() => {
		let handler = (e: any) => {
			// if (e === -1) {
			// 	setOpenForm(0)
			// }
			//@ts-ignore
			if (!modalRef.current?.contains(e.target)) {
				console.log(modalRef.current)

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
		openCalendar
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
			photo: `https://api.mandarina.lv/${getHotel.data?.data?.photoList[0].urlPhoto}`
		}
		setCheckout(newOrder)
		setTimeData(newTimeDate)
		//@ts-ignore
		localStorage.setItem('checkout', JSON.stringify(newOrder))
		navigate('/checkout')
	}
	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
			</div>
			<div className='container-xxl'>
				<div className='mt-36'>
					{images && (
						<div className={style.slider}>
							<ImageGallery
								items={images}
								thumbnailPosition='left'
							/>
						</div>
					)}
				</div>

				<Button
					onClick={() =>
						setNewTimeData((state: any) => ({
							...state,
							meal_types: ['ab,fe']
						}))
					}
				>
					Click
				</Button>

				<div className={`${style.description} `}>
					<h2>{getHotel.data?.data.name}</h2>
				</div>
				<div className={style.bg}>
					<div className={style.price}>
						<h3>
							$$$$$ <span>на одного человека</span>
						</h3>
						<p>*цена зависит от даты вылета и типа питания</p>
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
							/>
							{/* </div> */}
						</div>
					</div>
				</div>

				{offerList.data && (
					<TableList
						offerList={offerList.data.data}
						sendOrder={sendOrder}
					/>
				)}
				<div className={style.hotelInfo}>
					<img
						src={`https://api.mandarina.lv/${getHotel.data?.data.photoList[0].urlPhoto}`}
						alt='description'
					/>
					<div className={style.description}>
						<h2>Информация о гостиннице</h2>

						{getHotel.data?.data.descriptionHotel.length !== 0 ? (
							<div></div>
						) : (
							<div>Пока нет информации</div>
						)}
					</div>
				</div>
				<div>
					{/* //{getHotel.data?.data && getHotel.data.data.hotelActiveRestList.map((el,key)=>)} */}
					{getHotel.data?.data && (
						<>
							<HotelInfoCard
								title='Активности'
								img={infoSvg1}
								text='rfewfe'
							>
								{getHotel.data.data.hotelActiveRestList.map(
									(el: any, key: any) => (
										<div
											dangerouslySetInnerHTML={createMarkup(
												el.activeRest
											)}
										></div>
									)
								)}
							</HotelInfoCard>
							<HotelInfoCard
								title='Информация о гостиннице'
								img={infoSvg2}
								text='rfewfe'
							>
								{getHotel.data.data.hotelAboutList.map(
									(el: any, key: any) => (
										<div
											dangerouslySetInnerHTML={createMarkup(
												el.hotel
											)}
										></div>
									)
								)}
							</HotelInfoCard>
							<HotelInfoCard
								title='Питание'
								img={infoSvg3}
								text='rfewfe'
							>
								{getHotel.data.data.hotelFoodList.map(
									(el: any, key: any) => (
										<div
											dangerouslySetInnerHTML={createMarkup(
												el.food
											)}
										></div>
									)
								)}
							</HotelInfoCard>
							<HotelInfoCard
								title='Примечение'
								img={infoSvg4}
								text='rfewfe'
							>
								{getHotel.data.data.hotelNoteList.map(
									(el: any, key: any) => (
										<div
											dangerouslySetInnerHTML={createMarkup(
												el.notes
											)}
										></div>
									)
								)}
							</HotelInfoCard>
							<HotelInfoCard
								title='Расположение'
								img={infoSvg5}
								text='rfewfe'
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
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Hotel
