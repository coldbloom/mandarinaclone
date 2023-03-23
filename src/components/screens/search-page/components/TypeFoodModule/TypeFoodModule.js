import { ApiData } from '@/api/apiData/api.data'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TypeFoodModuleData } from './TypeFoodModule.data'

const TypeFoodModule = ({ handleChange, mealValue }) => {
	const {t} = useTranslation()
	return (
		<>
			<div className='filter_name'>{t('meal')}</div>
			{ApiData.nutritionType.map((el, key) => {
				return (
					<div className='wrapper_checkbox' key={key}>
						<input
							id='input-RB'
							style={{ display: 'none' }}
							type='checkbox'
							checked={mealValue.indexOf(el.code) !== -1}
							onChange={() => ''}
						/>
						<label
							htmlFor='input-RB'
							className='custom-checkbox'
							onClick={() => handleChange(el.code)}
						></label>
						<p>{t(el.name)}</p>
					</div>
				)
			})}
		</>
	)
}

export default TypeFoodModule
