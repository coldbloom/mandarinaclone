import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import useBreakpoint from 'use-breakpoint'

import './mainForm.scss'
import ModalFormContent from './modalFormContent'

import closeArrow from '@/assets/images/close-arrow.svg'

import CalendarSearchBoxEmpty from './CalendarSearchBoxEmpty'
import { useMutation, useQuery } from 'react-query'
import FlatPickerCalendar from '../../components/screens/Home/flat-picker-calendar'

import icon_1 from '@/assets/images/1.svg'
import icon_2 from '@/assets/images/2.svg'
import icon_4 from '@/assets/images/4.svg'
import icon_5 from '@/assets/images/5.svg'
import icon_6 from '@/assets/images/6.svg'
import searchIcon from '@/assets/images/IconSearch.svg'
import axios from 'axios'
//import data from "bootstrap/js/src/dom/data";
import { useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox'
import { DateService } from '@/services/date/date.service'
import { PropsDateService } from '@/services/date/date-service.interface'
import { useDateRequestMainFrom } from './useDateRequestMainFrom'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import Button from '@/components/ui/button/Button'
import { UserDataContext } from '@/index'
import { FindNameToKey } from '@/utils/find-name-to-key/FindNameToKey'
import { ApiData } from '@/api/apiData/api.data'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1200 }

const toursInfo: any = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo') || '')
	: null

// export const getSearchToursMutation = (setTours:any,navigate:any,dataReq:any)=>{
// 	const getSearchTours = useMutation(
// 		'get-search-tours',
// 		(data: PropsSearchTours) => SearchToursService.getSearchTours(data),
// 		{
// 			onSuccess: (data) => {
// 				setTours(data.data)
// 				localStorage.setItem('userInfo', JSON.stringify(dataReq))
// 				navigate('/search-tours')
// 			}
// 		}
// 	)
// 	return getSearchTours
// }

const testRequest: any = {
	fromTownCode:
	toursInfo?.fromTownCode || null,
	countryCode:
		 toursInfo?.countryCode || null,
	adults: toursInfo?.adults || 1,
	childs: toursInfo?.childs || 0,
	// childs_age: '',
	nights_min: toursInfo?.nights_min || 1,
	nights_max: toursInfo?.nights_max || 18,
	meal_types: ['AL', 'BB'],
	date: toursInfo?.date || ''
}

const MainForm: FC<any> = ({ setTours,timeData,setTimeData }) => {
	const getDate = useMutation('get-date-tours', (data: PropsDateService) =>
		DateService.getDate(data)
	)
	// 	const getSearchTours = getSearchToursMutation(setTours,navigate,dataReq)
	// const getSearchTours = useMutation(
	// 	'get-search-tours',
	// 	(data: PropsSearchTours) => SearchToursService.getSearchTours(data),
	// 	{
	// 		onSuccess: (data) => {
	// 			console.log(setTours);

	// 			setTours(data.data)
	// 			localStorage.setItem('userInfo', JSON.stringify(dataReq))
	// 			navigate('/search-tours')
	// 		}
	// 	}
	// )
	const getSearchTours = useMutation(
		'get-search-tours',
		(data: PropsSearchTours) => SearchToursService.getSearchTours(data),
		{
			onSuccess: data => {
				setTours(data.data)
				localStorage.setItem('userInfo', JSON.stringify(dataReq))
				setTimeData(dataReq)
				navigate('/search-tours')
			}
		}
	)
	const [openForm, setOpenForm] = useState(0)
	const modalRef = useRef(null)
	let navigate = useNavigate()
	const calendarRef = useRef<HTMLParagraphElement | null>(null)
	const [openCalendar, setOpenCalendar] = React.useState(false)
	const [directionName, setDirectionName] = React.useState(
		FindNameToKey(ApiData.directionsData2, timeData?.countryCode)
	)
	const [fromTown, setFromTown] = React.useState<null | string>(
		FindNameToKey(ApiData.directionsData, timeData?.fromTownCode)
	)
	const [nutrition, setNutrition] = React.useState<null | string>(null)
	const [dataReq, setDataReq] = React.useState(testRequest)
	const [actualDate, setActualDate] = React.useState([])
	//const [tours, setTours] = React.useState(null)
	const [searchClick, setSearchClick] = React.useState(false)
	const [date, setDate] = React.useState<null | string>(
		timeData?.date || null
	)

	//@ts-ignore
	let reqData = date?.slice(0, 4) + date?.slice(5, 7) + date?.slice(8, 10)

	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		'desktop'
	)

	React.useEffect(() => {
		let handler = (e: any) => {
			if (e === -1) {
				setOpenForm(0)
			}
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

	const {
		fromTownCode,
		countryCode,
		adults,
		childs,
		// childs_age,
		nights_min,
		nights_max,
		meal_types,
		dateFrom
	} = dataReq

	// const sendSearchQuery = () => {
	// 	let i = 0
	// 	console.log(dataReq)

	// 	const key = Object.keys(dataReq)
	// 	for (let i = 0; i < key.length; i++) {
	// 		if (!dataReq[key[i]] && key[i] !== 'childs') return false
	// 	}
	// 	return setSearchClick(true)
	// }

	useDateRequestMainFrom({
		fromTown,
		directionName,
		getDate,
		dataReq,
		setActualDate,
		calendarRef,
		openCalendar
	})
	useEffect(() => {
		setDataReq({ ...dataReq, date })
	}, [date])

	const handleClickRequest = () => {
		if (date === null) return
		const data: PropsSearchTours = {
			townFrom: dataReq.fromTownCode,
			countryCode: dataReq.countryCode,
			adult: dataReq.adults,
			nights_min: dataReq.nights_min,
			nights_max: dataReq.nights_max,
			meal_types: dataReq.meal_types,
			data: date.split('-').join('')
		}

		getSearchTours.mutate(data)
	}

	React.useEffect(() => {
		if (date === null) return
		const data: PropsSearchTours = {
			townFrom: dataReq.fromTownCode,
			countryCode: dataReq.countryCode,
			adult: dataReq.adults,
			nights_min: dataReq.nights_min,
			nights_max: dataReq.nights_max,
			meal_types: dataReq.meal_types,
			data: date.split('-').join('')
		}

		if (searchClick) {
			getSearchTours.mutate(data)
		}
	}, [searchClick])

	const changeCountryCode = (direction: any) => {
		const newDataReq = { ...dataReq }
		newDataReq.countryCode = direction.code
		setDataReq(newDataReq)
		setDirectionName(direction.name)
		setOpenForm(0)
	}
	const changeCountryFrom = (direction: any) => {
		const newDataReq = { ...dataReq }
		newDataReq.fromTownCode = direction.code
		setDataReq(newDataReq)
		setFromTown(direction.name)
		setOpenForm(0)
	}
	const changeNutrition = (direction: any) => {
		const newDataReq = { ...dataReq }
		newDataReq.meal_types = direction.code
		setDataReq(newDataReq)
		setNutrition(direction.name)
		setOpenForm(0)
	}

	const plusAdults = () => {
		if (dataReq.adults < 5) {
			setDataReq({ ...dataReq, adults: dataReq.adults + 1 })
		}
	}
	const minusAdults = () => {
		if (dataReq.adults > 1) {
			setDataReq({ ...dataReq, adults: dataReq.adults - 1 })
		}
	}
	const plusChilds = () => {
		if (dataReq.childs < 3) {
			setDataReq({ ...dataReq, childs: dataReq.childs + 1 })
		}
	}
	const minusChilds = () => {
		if (dataReq.childs > 0) {
			setDataReq({ ...dataReq, childs: dataReq.childs - 1 })
		}
	}

	const minusCounterMin = () => {
		if (dataReq.nights_min > 1) {
			setDataReq({ ...dataReq, nights_min: dataReq.nights_min - 1 })
		}
	}
	const plusCounterMin = () => {
		if (
			dataReq.nights_min < 18 &&
			dataReq.nights_min < dataReq.nights_max
		) {
			setDataReq({ ...dataReq, nights_min: dataReq.nights_min + 1 })
		}
	}
	const minusCounterMax = () => {
		if (dataReq.nights_max > dataReq.nights_min) {
			setDataReq({ ...dataReq, nights_max: dataReq.nights_max - 1 })
		}
	}
	const plusCounterMax = () => {
		if (dataReq.nights_max < 18) {
			setDataReq({ ...dataReq, nights_max: dataReq.nights_max + 1 })
		}
	}

	return (
		<>
			<div className='row'>
				<div className='col-12'>
					<div className='search-wrap'>
						<div className='form-container'>
							<SearchBox
								setOpenForm={setOpenForm}
								title='Город отправления'
								field='Выберите город отправления'
								icon={icon_1}
								item={1}
								directionName={fromTown}
								openForm={openForm}
								modalRef={modalRef}
								changeCountryFrom={changeCountryFrom}
								setDate={setDate}
								date={date}
							/>
							<SearchBox
								setOpenForm={setOpenForm}
								title='Направление'
								field='Выберите направление'
								icon={icon_2}
								item={2}
								number={2}
								directionName={directionName}
								openForm={openForm}
								modalRef={modalRef}
								changeCountryCode={changeCountryCode}
								setDate={setDate}
								date={date}
							/>
							{dataReq.countryCode === null ? (
								<CalendarSearchBoxEmpty
									item={2}
									setOpenForm={setOpenForm}
								/>
							) : dataReq.fromTownCode === null ? (
								<CalendarSearchBoxEmpty
									item={1}
									setOpenForm={setOpenForm}
								/>
							) : (
								<FlatPickerCalendar
									array={actualDate}
									openCalendar={openCalendar}
									setOpenCalendar={setOpenCalendar}
									calendarRef={calendarRef}
									date={date}
									setDate={setDate}
								/>
							)}
							<SearchBox
								setOpenForm={setOpenForm}
								title='Ночей'
								field={`${dataReq.nights_min} - ${dataReq.nights_max} ночей`}
								icon={icon_4}
								item={4}
								minusCounterMin={minusCounterMin}
								plusCounterMin={plusCounterMin}
								minusCounterMax={minusCounterMax}
								plusCounterMax={plusCounterMax}
								dataReq={dataReq}
								openForm={openForm}
								modalRef={modalRef}
							/>
							<SearchBox
								setOpenForm={setOpenForm}
								title='Гости'
								field={dataReq.adults + dataReq.childs}
								icon={icon_5}
								item={5}
								dataReq={dataReq}
								minusAdults={minusAdults}
								plusAdults={plusAdults}
								minusChilds={minusChilds}
								plusChilds={plusChilds}
								adults={adults}
								openForm={openForm}
								modalRef={modalRef}
							/>
							<SearchBox
								setOpenForm={setOpenForm}
								title='Питание'
								field='Всё включено'
								icon={icon_6}
								item={6}
								directionName={nutrition}
								openForm={openForm}
								modalRef={modalRef}
								changeNutrition={changeNutrition}
							/>
							<Button
								className='searchButton'
								onClick={() => handleClickRequest()}
							>
								<img
									src={searchIcon}
									alt='Поиск'
									className='img'
								/>
								<p className='text'>Искать</p>
							</Button>
							{/* <button
								className='searchButton'
								onClick={() => sendSearchQuery()}
							>
								<img
									src={searchIcon}
									alt='Поиск'
									className='img'
								/>
								<p className='text'>Искать</p>
							</button> */}
						</div>
					</div>
				</div>
			</div>

			{/* {openForm !== 0 && (
				<div
					className={`modalWindow ${
						openForm === 1 ? 'modal-one' : ''
					} ${openForm === 2 ? 'modal-two' : ''} ${
						openForm === 4 ? 'modal-four' : ''
					} ${openForm === 5 ? 'modal-five' : ''} ${
						openForm === 6 ? 'modal-six' : ''
					}`}
					ref={modalRef}
				> */}
			{/* {openForm !== 3 && (
						<>
							{breakpoint !== 'desktop' && (
								<div
									onClick={() => setOpenForm(0)}
									className='close_select_body'
								>
									<img src={closeArrow} alt='close' />
								</div>
							)}
							<ModalFormContent
								number={openForm}
								changeCountryCode={changeCountryCode}
								changeCountryFrom={changeCountryFrom}
								changeNutrition={changeNutrition}
								dataReq={dataReq}
								plusAdults={plusAdults}
								minusAdults={minusAdults}
								plusChilds={plusChilds}
								minusChilds={minusChilds}
								plusCounterMin={plusCounterMin}
								minusCounterMin={minusCounterMin}
								plusCounterMax={plusCounterMax}
								minusCounterMax={minusCounterMax}
							/>
						</>
					)} */}
			{/* </div>
			)} */}
		</>
	)
}

export default MainForm
