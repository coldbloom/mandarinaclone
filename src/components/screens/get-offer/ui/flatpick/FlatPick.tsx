import React, { FC } from 'react'
//@ts-ignore
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import './FlatPicker.scss'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

import icon from '@/assets/images/3.svg'
import rightArrow from '@/assets/images/right-arrow.svg'
import leftArrow from '@/assets/images/left-arrow.svg'
const CustomInput = ({
	value,
	defaultValue,
	inputRef,
	date,
	openCalendar,
	setOpenCalendar,
	calendarRef,
	...props
}: any) => {
	return (
		<div
			className='custom-picker-offer-text'
			ref={inputRef}
			// onClick={() => {
			// 	setOpenCalendar(true)
			// }}
		>
			<p className='custom-picker-header' ref={calendarRef}>
				Я знаю точные даты
			</p>
			<div className='search-box-wrapper d-flex'>
				{date !== null ? (
					<p className='search-box-input-custom'>{date}</p>
				) : (
					<p className='search-box-input-custom'>Дата</p>
				)}
			</div>
		</div>
	)
}
const FlatPick: FC<any> = ({
	array = [],
	openCalendar,
	setOpenCalendar,
	calendarRef,
	date,
	setState,
	error,
	setError
}) => {
	return (
		<Flatpickr
			data-enable-time
			// value={date}zx
			// onOpen={onOpen}
			onChange={(a: any, value: any) =>
				setState((state: any) => ({ ...state, month: value }))
			}
			locale={Russian}
			showMonths={1}
			shorthandCurrentMonth={false}
			position='below'
			static={true}
			// clickOpens={false}

			allowInput={true}
			options={{
				// enable: array,
				enableTime: false,
				locale: Russian,
				showMonths: 1,
				weekNumbers: false,
				shorthandCurrentMonth: false,
				static: true,
				nextArrow: `<img src=${rightArrow} />`,
				prevArrow: `<img src=${leftArrow} />`,
				minDate: 'today',
				position: 'below',
				mode: 'range'
				//clickOpens: false,
			}}
			render={({ defaultValue, value, ...props }: any, ref: any) => {
				return (
					<CustomInput
						defaultValue={defaultValue}
						inputRef={ref}
						date={date}
						// openCalendar={openCalendar}
						//  setOpenCalendar={setOpenCalendar}
						calendarRef={calendarRef}
					/>
				)
			}}
		/>
	)
}
export default FlatPick
