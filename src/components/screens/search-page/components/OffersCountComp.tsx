import React, { useState } from 'react'
import './../SearchPage.scss'

import Select from 'react-select'
import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
//import {selectOptions} from "@testing-library/user-event/dist/select-options";

const options = [
	{ value: 'Самые популярные', label: 'Самые популярные', sort: null },
	{
		value: 'Минимальная цена - максимальная',
		label: 'Минимальная цена - максимальная',
		sort: 'ASC'
	},
	{
		value: 'Максимальная цена - минимальная',
		label: 'Максимальная цена - минимальная',
		sort: 'DESC'
	},
	{ value: 'Кол-во звёзд 1-5', label: 'Кол-во звёзд 1-5' },
	{ value: 'Кол-во звёзд 5-1', label: 'Кол-во звёзд 5-1' }
]

const OffersCountComp = ({
	hotelsCount,
	getSearchTours,
	toursInfo,
	nightMin,
	nightMax,
	checkedValue,
	priceMin,
	priceMax,
	mealValue
}: any) => {
	const [selectedOption, setSelectedOption] = useState('Самые популярные')

	const onChange = (newValue: any) => {
		console.log('wefjwehm2bribwefijb3ifb3hb wekn fewjkbqfewhbfhjqbfuyb23i32ffq',priceMax);
		
		if (newValue) {
			const dataProps: PropsSearchTours = {
				...toursInfo,
				nights_min: nightMin,
				nights_max: nightMax,
				rating: checkedValue,
				price_range_min: priceMin,
				price_range_max: priceMax,
				meal_types: mealValue,
				sort: newValue.sort
			}
			getSearchTours.mutate(dataProps)
		}
		setSelectedOption(newValue.value)
	}
	const getValue = () => {
		return selectedOption
			? options.find(x => x.value === selectedOption)
			: ''
	}

	return (
		<div className='container-xxl'>
			<div className='row'>
				<div className='col-12 offers-count-comp'>
					<div className='search_count_body'>
						<div>
							<b>{hotelsCount}</b>
							предложения путешествий
						</div>
						<div className='search-sort-wrapper'>
							<div className='search_sort search_sort_sp'>
								Сортировать:
							</div>
							<div className='select_wrapper'>
								<Select
									options={options}
									value={getValue()}
									onChange={onChange}
									classNamePrefix='custom-select'
									isDisabled={getSearchTours.isLoading}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OffersCountComp
