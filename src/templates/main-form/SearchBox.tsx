import React, { useState } from 'react'
import './mainForm.scss'
import { HiArrowLongLeft } from 'react-icons/hi2'
import './mainForm.scss'
import './form.scss'
//import data from 'bootstrap/js/src/dom/data'
import './modalFormDesktop.scss'
import Button from '@/components/ui/button/Button'
import arrowSvg from '@/assets/images/arrowExit.svg'
import { AiOutlineCheck } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { ApiData } from '@/api/apiData/api.data'
const SearchBox = ({
	setOpenForm,
	icon,
	title,
	field,
	item,
	directionName,
	openForm,
	modalRef,
	dataReq,
	minusCounterMin,
	minusAdults,
	minusCounterMax,
	plusCounterMin,
	changeCountryCode,
	plusCounterMax,
	changeCountryFrom,
	minusChilds,
	plusChilds,
	number,
	setDate,
	plusYearChild,
	minusYearChild,
	date,
	changeNutrition,
	plusAdults,
	error,
	setError
}: any) => {
	const {t} = useTranslation()
	const directionsData = [
		{
			name: 'riga',
			code: 'lv'
		},
		{
			name: 'talin',
			code: 'ee'
		},
		{
			name: 'vilnus',
			code: 'lt'
		}
	]

	const directionsData2 = [
		{
			name: 'greece',
			code: 'gr'
		},
		{
			name: 'egypt',
			code: 'eg'
		},
		{
			name: 'spain',
			code: 'cn'
		},
		{
			name: 'montenegro',
			code: 'me'
		},
		{
			name: 'turkey',
			code: 'tr'
		}
	]

	const errorReset = {
		fromTownCode: false,
		countryCode: false,
		meal_types: false,
		date: false
	}

	return (
		<>
			<div
				className={`search-box ${
					item === 1 && 'search-box-first-child'
				} ${item === 2 && 'search-box-two-child'} 
				${item === 3 && 'search-box-three-child'}
				${item === 4 && 'search-box-four-child'}
				${item === 5 && 'search-box-five-child'}
				${item === 6 && 'search-box-last-child'}
				relative 
				`}
				onClick={() => {
					setOpenForm(item)
					setError((error: any) => ({ ...error, ...errorReset }))
				}}
			>
				<p className='search-box-title'>{title}</p>
				<div className='search-box-wrapper'>
					<img src={icon} alt='' />
					<p className='search-box-input'>
						{directionName ? t(directionName) : t(field)}
					</p>
					{item === 1 && error?.fromTownCode && (
						<span className='error'>{t('fill_in_the_field')}</span>
					)}
					{item === 2 && error.countryCode && (
						<span className='error'>{t('fill_in_the_field')}</span>
					)}
				</div>

				{openForm !== 0 && (
					<div className='form'>
						{openForm === 1 && item === 1 && (
							<div
								className={`form-item flex-row items-center`}
								ref={modalRef}
							>
								<>
									{directionsData.map((direction, index) => {
										return (
											<>
												<p
													key={index}
													className={`text directionText ${
														dataReq.fromTownCode ===
															direction.code &&
														'activeElement'
													}`}
													onClick={e => {
														setOpenForm(0)
														changeCountryFrom(
															direction
														)
														e.stopPropagation()
														setDate(null)
														// handlerSetDate()
													}}
												>
													{t(direction.name)}
												</p>
											</>
										)
									})}
									{window.innerWidth < 1003 && (
										<Button
											onClick={e => {
												setOpenForm(0)
												e.stopPropagation()
											}}
											className='arrowButtonExit'
										>
											<img src={arrowSvg} alt='' />
										</Button>
									)}
								</>
							</div>
						)}
						{openForm === 2 && item === 2 && (
							<div
								className='form-item flex flex-col'
								ref={modalRef}
							>
								<>
									{directionsData2.map((direction, index) => (
										<p
											key={index}
											className={`text directionText ${
												dataReq.countryCode ===
													direction.code &&
												'activeElement'
											}`}
											onClick={e => {
												setOpenForm(0)
												changeCountryCode(direction)
												e.stopPropagation()
												// handlerSetDate()
											}}
										>
											{t(direction.name)}
										</p>
									))}
									{window.innerWidth < 1003 && (
										<Button
											onClick={e => {
												setOpenForm(0)
												e.stopPropagation()
											}}
											className='arrowButtonExit'
										>
											<img src={arrowSvg} alt='' />
										</Button>
									)}
								</>
							</div>
						)}

						{openForm === 4 && item === 4 && (
							<div className={`form-item nights `} ref={modalRef}>
								<div className='nightFlex'>
									<div>
										<div className='text'>{t('nights')}</div>
										<div className='description-nights'>
											{t('number_of_nights_reduction')}
										</div>
									</div>
									<div className='people_counter_wrapper night_min'>
										<div
											className={`btn_counter_people minus ${
												dataReq.nights_min > 1 &&
												'active'
											}`}
											onClick={minusCounterMin}
										></div>
										<div className='text'>
											{dataReq.nights_min}
										</div>
										<div
											className={`btn_counter_people plus ${
												dataReq.nights_min < 18 &&
												dataReq.nights_min <
													dataReq.nights_max &&
												'active'
											}`}
											onClick={plusCounterMin}
										></div>
									</div>
									<div className='people_counter_wrapper night_max'>
										<div
											className={`btn_counter_people minus ${
												dataReq.nights_max >
													dataReq.nights_min &&
												'active'
											}`}
											onClick={minusCounterMax}
										></div>
										<div className='text'>
											{dataReq.nights_max}
										</div>
										<div
											className={`btn_counter_people plus ${
												dataReq.nights_max < 18 &&
												'active'
											}`}
											onClick={plusCounterMax}
										></div>
									</div>
								</div>
								{window.innerWidth < 1003 && (
									<Button
										onClick={e => {
											setOpenForm(0)
											e.stopPropagation()
										}}
										className='arrowButtonExit absolute'
									>
										<img src={arrowSvg} alt='' />
									</Button>
								)}
							</div>
						)}

						{openForm === 5 && item === 5 && (
							<>
								<div
									className='form-item flex flex-col audits'
									ref={modalRef}
								>
									<div className='row_people_counter'>
										<div>
											<div className='title'>
												{t('adults')}
											</div>
											<div className='description-text'>
												{t('over_14_years_old')}
											</div>
										</div>
										<div className='people_counter_wrapper adults'>
											<div
												className={`btn_counter_people minus ${
													dataReq?.adults > 1 &&
													'active'
												}`}
												onClick={minusAdults}
											></div>
											<div className='text'>
												{dataReq?.adults}
											</div>
											<div
												className={`btn_counter_people plus ${
													dataReq?.adults < 5 &&
													'active'
												}`}
												onClick={plusAdults}
											></div>
										</div>
									</div>

									<div className='row_people_counter'>
										<div>
											<div className='title'>{t('childs')}</div>
											<div className='description-text'>
												{t('from_2_to_14_years_old')}
											</div>
										</div>
										<div className='people_counter_wrapper childs'>
											<div
												className={`btn_counter_people minus ${
													dataReq?.childs > 0 &&
													'active'
												}`}
												onClick={minusChilds}
											></div>
											<div className='text'>
												{dataReq?.childs}
											</div>
											<div
												className={`btn_counter_people plus ${
													dataReq?.childs < 3 &&
													'active'
												}`}
												onClick={plusChilds}
											></div>

											
										</div>
										
									</div>
									{window.innerWidth < 1003 && (
												<Button
													onClick={e => {
														setOpenForm(0)
														e.stopPropagation()
													}}
													className='arrowButtonExit'
												>
													<img
														src={arrowSvg}
														alt=''
													/>
												</Button>
											)}
									{(dataReq?.childYear &&
										[...Array(dataReq.childs)].map(
											(el: any, key) => {
												return (
													<>
													<div
														className='row_people_counter'
														key={key}
													>
														<div>
															<div className='title'>
																 {t('number_of_years')}
															</div>
														</div>
														<div className='people_counter_wrapper childs'>
															<div
																className={`btn_counter_people minus ${
																	dataReq
																		?.childYear[
																		key
																	] > 2 &&
																	'active'
																}`}
																onClick={() =>
																	minusYearChild(
																		key
																	)
																}
															></div>
															<div className='text'>
																{
																	dataReq
																		?.childYear[
																		key
																	]
																}
															</div>
															<div
																className={`btn_counter_people plus ${
																	dataReq
																		?.childYear[
																		key
																	] < 14 &&
																	'active'
																}`}
																onClick={() =>
																	plusYearChild(
																		key
																	)
																}
															></div>

															
														</div>
														
													</div>
													{window.innerWidth <
																1003 && (
																<Button
																	onClick={e => {
																		setOpenForm(
																			0
																		)
																		e.stopPropagation()
																	}}
																	className='arrowButtonExit'
																>
																	<img
																		src={
																			arrowSvg
																		}
																		alt=''
																	/>
																</Button>
															)}
													</>
												)
											}
										)) ||
										''}
								</div>
							</>
						)}
						<>
							{openForm === 6 && item === 6 && (
								<div className='form-item' ref={modalRef}>
									{ApiData.nutritionType.map((nutrition, index) => (
										<div
											className='flex checkStyle'
											key={index}
										>
											{dataReq.meal_types.indexOf(
												nutrition.code
											) !== -1 && (
												<div className='checkMark'>
													<AiOutlineCheck />
												</div>
											)}
											<p
												className={`text directionText ${
													dataReq.meal_types.indexOf(
														nutrition.code
													) !== -1 && 'activeElement'
												}`}
												key={index}
												onClick={e => {
													// setOpenForm(0)
													changeNutrition(nutrition)
													e.stopPropagation()
												}}
											>
												{t(nutrition.name)}
											</p>
										</div>
									))}
									{window.innerWidth < 1003 && (
										<Button
											onClick={e => {
												setOpenForm(0)
												e.stopPropagation()
											}}
											className='arrowButtonExit'
										>
											<img src={arrowSvg} alt='' />
										</Button>
									)}
								</div>
							)}
						</>
					</div>
				)}
			</div>
			{item !== 6 && <div className='box_vert_line'></div>}
		</>
	)
}

export default SearchBox
