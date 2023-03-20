import React from 'react'
import { TypeFoodModuleData } from './TypeFoodModule.data'

const TypeFoodModule = ({ handleChange, mealValue }) => {
	return (
		<>
			<div className='filter_name'>Питание</div>
			{TypeFoodModuleData.map((el, key) => {
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
						<p>{el.title}</p>
					</div>
				)
			})}
		</>
	)
}

export default TypeFoodModule
