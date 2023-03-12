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
	const directionsData = [
		{
			name: 'Рига',
			code: 'lv'
		},
		{
			name: 'Талин',
			code: 'ee'
		},
		{
			name: 'Вильнюс',
			code: 'lt'
		}
	]

	const directionsData2 = [
		{
			name: 'Греция',
			code: 'gr'
		},
		{
			name: 'Египет',
			code: 'eg'
		},
		{
			name: 'Испания',
			code: 'cn'
		},
		{
			name: 'Черногория',
			code: 'me'
		},
		{
			name: 'Турция',
			code: 'tr'
		}
	]
	const nutritionType = [
		{ name: 'Без питания', code: 'RO' },
		{ name: 'Завтрак', code: 'BB' },
		{ name: 'Полупансион', code: 'HB' },
		{ name: 'Полный пансион', code: 'FB' },
		{ name: 'Всё включено', code: 'AI' },
		{ name: 'Всё включено+', code: 'UAI' }
	]

	const errorReset = {
		fromTownCode: false,
		countryCode: false,
		meal_types: false,
		date: false
	}
	const handlerSetDate = () => {
		return date ? setDate(null) : ''
	}
	const [child, setChild] = useState(null)

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
						{directionName ? directionName : field}
					</p>
					{item === 1 && error?.fromTownCode && (
						<span className='error'>Заполните поле</span>
					)}
					{item === 2 && error.countryCode && (
						<span className='error'>Заполните поле</span>
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
													{direction.name}
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
											{direction.name}
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
										<div className='text'>Ночей</div>
										<div className='description-nights'>
											Кол-во ночей
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
												Взрослые
											</div>
											<div className='description-text'>
												Старше 14 лет
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
											<div className='title'>Дети</div>
											<div className='description-text'>
												С 2 до 14 лет
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
												console.log(dataReq?.childYear)

												return (
													<div
														className='row_people_counter'
														key={key}
													>
														<div>
															<div className='title'>
																Количество лет
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
														</div>
													</div>
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
									{nutritionType.map((nutrition, index) => (
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
												{nutrition.name}
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
