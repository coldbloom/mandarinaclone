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
		sort: 'DESC'
	},
	{
		value: 'Максимальная цена - минимальная',
		label: 'Максимальная цена - минимальная',
		sort: 'ASC'
	},
	{ value: 'Кол-во звёзд 1-5', label: 'Кол-во звёзд 1-5' },
	{ value: 'Кол-во звёзд 5-1', label: 'Кол-во звёзд 5-1' }
]

const OffersCountComp = ({ hotelsCount, getSearchTours, toursInfo }: any) => {
	const [selectedOption, setSelectedOption] = useState('Самые популярные')

	const onChange = (newValue: any) => {
		if (newValue.sort) {
			const dataProps: PropsSearchTours = {
				townFrom: toursInfo.fromTownCode,
				countryCode: toursInfo.countryCode,
				adult: toursInfo.adults,
				data: toursInfo.date,
				nights_min: toursInfo.nights_min,
				nights_max: toursInfo.nights_max,
				sort:newValue.sort
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
