import 'flatpickr/dist/themes/material_blue.css'
import { Russian } from 'flatpickr/dist/l10n/ru.js'
//@ts-ignore
import Flatpickr from 'react-flatpickr'
import dateSvg from '@/assets/images/trip/date.svg'
import icon from '@/assets/images/3.svg'
import rightArrow from '@/assets/images/right-arrow.svg'
import leftArrow from '@/assets/images/left-arrow.svg'
import './FlatPicker2.scss'
import React from 'react'
import { ConvertDateToConvert } from '@/utils/convert-date-to-standart/ConvertDateToStandart'
import { useTranslation } from 'react-i18next'

const CustomInput = ({
	value,
	defaultValue,
	inputRef,
	date,
	openCalendar,
	setOpenCalendar,
	calendarRef,
	error,
	setError,
	array,
	...props
}: any) => {
	const errorReset = {
		fromTownCode: false,
		countryCode: false,
		meal_types: false,
		date: false
	}
	const {t} = useTranslation()
	return (
		<div
			className='flatPicker'
			onClick={() => {
				// setOpenCalendar(true)
				// setError((error:any) => ({ ...error, ...errorReset }))
			}}
		>
			<p>Дата</p>
			<p className='search-box-title' ref={inputRef}>
				{date !== null ? ConvertDateToConvert(date,t) : t('choose_date') }
				<img src={dateSvg} alt='' />
			</p>

			<div className='search-box-wrapper d-flex'>
			</div>
			{/* {error?.date && <span className='error'>Заполните поле</span>} */}
			{array.length === 0 && <span className='dateNullError'>{t('not_info_about_hotel')}</span>}
		</div>
	)
}

const FlatPicker = ({
	array = [],
	openCalendar,
	setOpenCalendar,
	calendarRef,
	date,
	setDate
}: // error,
// setError
any) => {

	return (
		<>
			<Flatpickr
				data-enable-time
				value={date}
				// onOpen={onOpen}
				onChange={(a: any, value: any) => setDate(value)}
				locale={Russian}
				showMonths={1}
				shorthandCurrentMonth={false}
				position='below'
				static={true}
				inline={true}
				// clickOpens={false}

				// allowInpuе={true}
				options={{
					enable: array,
					enableTime: false,
					locale: Russian,
					showMonths: 1,
					weekNumbers: false,
					shorthandCurrentMonth: false,
					static: true,
					nextArrow: `<img src=${rightArrow} />`,
					prevArrow: `<img src=${leftArrow} />`,
					minDate: 'today'
					//position: 'below',
					// clickOpens: false,
				}}
				render={({ defaultValue, value, ...props }: any, ref: any) => {
					return (
						<CustomInput
							defaultValue={defaultValue}
							inputRef={ref}
							date={date}
							array={array}
							openCalendar={openCalendar}
							setOpenCalendar={setOpenCalendar}
							calendarRef={calendarRef}
							// error={error}
							// setError={setError}
						/>
					)
				}}
			/>
			<div className='box_vert_line'></div>
		</>
	)
}

export default FlatPicker
