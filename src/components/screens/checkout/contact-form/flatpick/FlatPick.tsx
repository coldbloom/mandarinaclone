import React, { FC } from 'react'
//@ts-ignore
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import './FlatPicker.scss'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

import rightArrow from '@/assets/images/right-arrow.svg'
import leftArrow from '@/assets/images/left-arrow.svg'
import { useTranslation } from 'react-i18next'
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
	

	const { t } = useTranslation()
	return (
		<div
			className='custom-picker-offer-text'
			ref={inputRef}
			// onClick={() => {
			// 	setOpenCalendar(true)
			// }}
		>
			<p className='custom-picker-header' ref={calendarRef}>
				{t('i_know_the_exact_dates')}
			</p>
			<div className='search-box-wrapper d-flex'>
				{date !== null ? (
					<p className='search-box-input-custom'>{date}</p>
				) : (
					<p className='search-box-input-custom'>{t('date')}</p>
				)}
			</div>
		</div>
	)
}
const FlatPick: FC<any> = ({
	calendarRef,
	date,
	setState,
}) => {
	const lang = localStorage.getItem('i18nextLng')
	return (
		<Flatpickr
			data-enable-time
			// value={date}zx
			// onOpen={onOpen}
			onChange={(a: any, value: any) =>
				setState((state: any) => ({ ...state, month: value }))
			}
			//locale={Russian}
			showMonths={1}
			shorthandCurrentMonth={false}
			position='below'
			static={true}
			// clickOpens={false}

			allowInput={true}
			options={{
				// enable: array,
				enableTime: false,
				locale: lang ==='ru' ? Russian : '',
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
