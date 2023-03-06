import React from 'react'

const TypeFoodModule = ({ handleChange, mealValue }) => {
	return (
		<>
			<div className='filter_name'>Питание</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-RB'
					style={{ display: 'none' }}
					type='checkbox'
					checked={mealValue[0]}
					onChange={e => handleChange(e, 0)}
				/>
				<label htmlFor='input-RB' className='custom-checkbox'></label>
				<p>Без питания</p>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-BB'
					style={{ display: 'none' }}
					type='checkbox'
					checked={mealValue[1]}
					onChange={e => handleChange(e, 1)}
				/>
				<label htmlFor='input-BB' className='custom-checkbox'></label>
				<p>Завтрак</p>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-HB'
					style={{ display: 'none' }}
					type='checkbox'
					checked={mealValue[2]}
					onChange={e => handleChange(e, 2)}
				/>
				<label htmlFor='input-HB' className='custom-checkbox'></label>
				<p>Полупансион</p>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-FB'
					style={{ display: 'none' }}
					type='checkbox'
					checked={mealValue[3]}
					onChange={e => handleChange(e, 3)}
				/>
				<label htmlFor='input-FB' className='custom-checkbox'></label>
				<p>Полный пансион</p>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-AI'
					style={{ display: 'none' }}
					type='checkbox'
					checked={mealValue[4]}
					onChange={e => handleChange(e, 4)}
				/>
				<label htmlFor='input-AI' className='custom-checkbox'></label>
				<p>Всё включено</p>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-UAI'
					style={{ display: 'none' }}
					type='checkbox'
					checked={mealValue[5]}
					onChange={e => handleChange(e, 5)}
				/>
				<label htmlFor='input-UAI' className='custom-checkbox'></label>
				<p>Всё включено+</p>
			</div>
		</>
	)
}

export default TypeFoodModule
