import React, { FC, useRef, useState } from 'react'
import Nights from '../inputs-hidden-box/nights/Nights'
import SearchBox from './SearchBox'
import style from './BoxForm.module.scss'
import Guests from '../inputs-hidden-box/guests/Guests'
import Price from '../inputs-hidden-box/price/Price'
import FlatPickerCalendar from '@/components/screens/Home/flat-picker-calendar'
import { useDateFlatPick } from '../inputs-hidden-box/custom-function/useDateFlatPick'
import Button from '@/components/ui/button/Button'
import { FirstFindMealType } from '@/utils/first-find-meal-type/FirstFindMealType'
import MealTypes from '../inputs-hidden-box/meal-types/MealTypes'
import FlatPicker from '../inputs-hidden-box/flatpickr/FlatPicker'
import spinnerSvg from '@/assets/images/spinner.svg'

const BoxForm: FC<any> = ({
	modalRef,
	newTimeDate,
	setNewTimeData,
	openForm,
	setOpenForm,
	setHotelEnabled,
	actualDate,
	offerList,
	date,
	setDate,
	loadingDate,calendarRef,openCalendar,setOpenCalendar
}) => {
	// useDateFlatPick({
	// 	getDate,
	// townFrom,
	// setActualDate,
	// countryCode,
	// meal_types,
	// calendarRef,
	// openCalendar
	// })
	const [error, setError] = useState({
		fromTownCode: false,
		countryCode: false,
		date: false,
		meal_types: false
	})
	// const calendarRef = useRef<HTMLParagraphElement | null>(null)
	// const [openCalendar, setOpenCalendar] = React.useState(false)
	// const [actualDate, setActualDate] = React.useState([])

	return (
		<div className={style.boxForm}>
			<div className='box-custom'>
				<FlatPicker
					array={actualDate}
					openCalendar={openCalendar}
					setOpenCalendar={setOpenCalendar}
					calendarRef={calendarRef}
					date={date}
					setDate={setDate}
					setError={setError}
					error={error}
				/>
			</div>
			<SearchBox
				state={newTimeDate}
				index={2}
				openForm={openForm}
				setOpenForm={setOpenForm}
				header='Гости'
				title={`${newTimeDate.adult + newTimeDate.child} `}
			>
				{openForm === 2 && (
					<Guests
						modalRef={modalRef}
						state={newTimeDate}
						setState={setNewTimeData}
					/>
				)}
			</SearchBox>

			<SearchBox
				state={newTimeDate}
				index={3}
				openForm={openForm}
				setOpenForm={setOpenForm}
				header='Количество ночей'
				title={`${newTimeDate.nights_min} - ${newTimeDate.nights_max} ночей`}
			>
				{openForm === 3 && (
					<Nights
						modalRef={modalRef}
						state={newTimeDate}
						setState={setNewTimeData}
					/>
				)}
			</SearchBox>
			<SearchBox
				state={newTimeDate}
				index={4}
				openForm={openForm}
				setOpenForm={setOpenForm}
				header='Цена до:'
				// title={`${newTimeDate.nights_min} - ${newTimeDate.nights_max} ночей`}
			>
				<Price
					modalRef={modalRef}
					state={newTimeDate}
					setState={setNewTimeData}
				/>
			</SearchBox>
			<SearchBox
				state={newTimeDate}
				index={5}
				openForm={openForm}
				setOpenForm={setOpenForm}
				header='Питание'
				title={FirstFindMealType(newTimeDate.meal_types)}
			>
				{openForm === 5 && (
					<MealTypes
						modalRef={modalRef}
						state={newTimeDate}
						setState={setNewTimeData}
					/>
				)}
			</SearchBox>
			<Button
				//onClick={() => offerList.mutate()}
				onClick={()=>setHotelEnabled(true)}
				className={style.request}
				disabled={loadingDate || offerList.isLoading}
			>
				{loadingDate && <img src={spinnerSvg} alt='spinner' />}
				Проверить <br></br> доступность
			</Button>
		</div>
	)
}

export default BoxForm
