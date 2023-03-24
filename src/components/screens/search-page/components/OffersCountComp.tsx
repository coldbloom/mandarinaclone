import React, { useState } from 'react'
import './../SearchPage.scss'

import Select from 'react-select'
import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import { useTranslation } from 'react-i18next'
//import {selectOptions} from "@testing-library/user-event/dist/select-options";

const OffersCountComp = ({
	hotelsCount,
	getSearchTours,
	toursInfo,
	nightMin,
	nightMax,
	checkedValue,
	priceMin,
	priceMax,
	mealValue,
	setSort,
	sort
}: any) => {
	const { t } = useTranslation()
	const [selectedOption, setSelectedOption] = useState(t('very_popular'))

	const options = [
		{ value: t('very_popular'), label: t('very_popular'), sort: null },
		{
			value: t('min_max'),
			label: t('min_max'),
			sort: 'ASC'
		},
		{
			value: t('max_min'),
			label: t('max_min'),
			sort: 'DESC'
		},
		{ value: t('rating_min_max'), label: t('rating_min_max') },
		{ value: t('rating_max_min'), label: t('rating_max_min') }
	]

	const onChange = (newValue: any) => {
		
		if (newValue) {
			setSort(newValue.sort)
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
		if (selectedOption) {
			const select = options.find(x => x.value === selectedOption)
			return {
				...select,
				value: t(select?.value || ''),
				label: t(select?.label || '')
			}
		} else {
			return ''
		}
	}
	return (
		<div className='container-xxl'>
			<div className='row'>
				<div className='col-12 offers-count-comp'>
					<div className='search_count_body'>
						<div>
							<b>{hotelsCount}</b>
							{t('travel_offers')}
						</div>
						<div className='search-sort-wrapper'>
							<div className='search_sort search_sort_sp'>
								{t('sort')}:
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
