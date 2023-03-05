import React from 'react'
import './mainForm.scss'

import './mainForm.scss'
import './form.scss'
//import data from 'bootstrap/js/src/dom/data'
import './modalFormDesktop.scss'

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
	changeNutrition,
	plusAdults
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
			code: 'sp'
		},
		{
			name: 'Доминиканская Республика',
			code: 'de'
		},
		{
			name: 'Турция',
			code: 'tr'
		}
	]

	const nutritionType = [
		{ name: 'Без питания', code: 'AI' },
		{ name: 'Завтрак', code: 'BB' },
		{ name: 'Полупансион', code: 'HB' },
		{ name: 'Полный пансион', code: 'UAI' },
		{ name: 'Всё включено', code: 'RO' },
		{ name: 'Всё включено+', code: 'FB' }
	]
	
	return (
		<>
			<div
				className={`search-box search-box-first-child ${
					item === 2 && 'search-box-two-child'
				} 
				${item === 3 && 'search-box-three-child'}
				${item === 4 && 'search-box-four-child'}
				${item === 5 && 'search-box-five-child'}
				${item === 6 && 'search-box-last-child'}
				relative 
				`}
				onClick={() => setOpenForm(item)}
			>
				<p className='search-box-title'>{title}</p>
				<div className='search-box-wrapper'>
					<img src={icon} alt='' />
					<p className='search-box-input'>
						{directionName ? directionName : field}
					</p>
				</div>

				{openForm !== 0 && (
					<div
						className='form'
						// className={`modalWindow ${
						// 	openForm === 1 ? 'modal-one' : ''
						// } ${openForm === 2 ? 'modal-two' : ''} ${
						// 	openForm === 4 ? 'modal-four' : ''
						// } ${openForm === 5 ? 'modal-five' : ''} ${
						// 	openForm === 6 ? 'modal-six' : ''
						// }`}
					>
						{openForm === 1 && item === 1 && (
							<div
								className={`form-item flex-row items-center`}
								ref={modalRef}
							>
								{directionsData.map((direction, index) => {
									return (
										<p
											key={index}
											className={`text directionText`}
											onClick={(e) => {
												setOpenForm(0)
												changeCountryFrom(direction)
												e.stopPropagation()
											}}
										>
											{direction.name}
										</p>
									)
								})}
							</div>
						)}
						{openForm === 2 && item === 2 && (
							<div
								className='form-item flex flex-col'
								ref={modalRef}
							>
								{directionsData2.map((direction, index) => (
									<p
										key={index}
										className='text directionText'
										onClick={(e) => {
											setOpenForm(0)
											changeCountryCode(direction)
											e.stopPropagation()
										}}
									>
										{direction.name}
									</p>
								))}
							</div>
						)}

						{openForm === 4 && item === 4 && (
							<div className='form-item flex flex-row justify-between nights' ref={modalRef}>
								<div>
									<div className='text'>Ночей</div>
									<div className='description-nights'>
										Кол-во ночей
									</div>
								</div>
								<div className='people_counter_wrapper night_min'>
									<div
										className={`btn_counter_people minus ${
											dataReq.nights_min > 1 && 'active'
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
												dataReq.nights_min && 'active'
										}`}
										onClick={minusCounterMax}
									></div>
									<div className='text'>
										{dataReq.nights_max}
									</div>
									<div
										className={`btn_counter_people plus ${
											dataReq.nights_max < 18 && 'active'
										}`}
										onClick={plusCounterMax}
									></div>
								</div>
							</div>
						)}
						{openForm === 5 && item === 5 && (
							<div className='form-item flex flex-col audits' ref={modalRef}> 
								<div className='row_people_counter'>
									<div>
										<div className='title'>Взрослые</div>
										<div className='description-text'>
											Старше 14 лет
										</div>
									</div>
									<div className='people_counter_wrapper adults'>
										<div
											className={`btn_counter_people minus ${
												dataReq.adults > 1 && 'active'
											}`}
											onClick={minusAdults}
										></div>
										<div className='text'>
											{dataReq.adults}
										</div>
										<div
											className={`btn_counter_people plus ${
												dataReq.adults < 5 && 'active'
											}`}
											onClick={plusAdults}
										></div>
									</div>
								</div>
								<div className='line'></div>
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
												dataReq.childs > 0 && 'active'
											}`}
											onClick={minusChilds}
										></div>
										<div className='text'>
											{dataReq.childs}
										</div>
										<div
											className={`btn_counter_people plus ${
												dataReq.childs < 3 && 'active'
											}`}
											onClick={plusChilds}
										></div>
									</div>
								</div>
							</div>
						)}
						{openForm === 6 && item === 6 && (
							<div className='form-item' ref={modalRef}>
								{nutritionType.map((nutrition, index) => (
									<p
										className='text directionText'
										key={index}
										onClick={(e) =>{
											setOpenForm(0)
											changeNutrition(nutrition)
											e.stopPropagation()
										}}
									>
										{nutrition.name}
									</p>
								))}
							</div>
						)}
					</div>
				)}
			</div>
			{item !== 6 && <div className='box_vert_line'></div>}
		</>
	)
}

export default SearchBox
