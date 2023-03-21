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
import { useTranslation } from 'react-i18next'

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
	const {t} = useTranslation()
	const [error, setError] = useState({
		fromTownCode: false,
		countryCode: false,
		date: false,
		meal_types: false
	})

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
				header={t('guests')}
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
				header={t('number_of_nights')}
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
				header={t('price_up_to')}
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
				header={t('meal')}
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
				onClick={()=>setHotelEnabled(true)}
				classDiv={style.customButton}
				className={style.request}
				disabled={loadingDate || offerList.isLoading}
			>
				{loadingDate && <img src={spinnerSvg} alt='spinner' />}
				{t('check_availability')}
			</Button>
		</div>
	)
}

export default BoxForm
