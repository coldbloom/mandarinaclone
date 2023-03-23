import React, { FC } from 'react'
import hotelstar from '@/assets/images/hotel-star.svg'
import hotelstarTransporent from '@/assets/images/hotel-star-transporent.svg'
import { useTranslation } from 'react-i18next'

const RaitingModule: FC<any> = ({ handleChange, checkedValue }) => {
	const {t} = useTranslation()
	return (
		<>
			<div className='filter_name'>{t('hotel_rating')}</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-1'
					style={{ display: 'none' }}
					type='checkbox'
					checked={checkedValue[0]}
					onChange={e => handleChange(e, 0)}
				/>
				<label htmlFor='input-1' className='custom-checkbox'></label>
				<div className='stars_hotel'>
					<img src={hotelstar} alt='' />
					<img src={hotelstarTransporent} alt='' />
					<img src={hotelstarTransporent} alt='' />
					<img src={hotelstarTransporent} alt='' />
					<img src={hotelstarTransporent} alt='' />
				</div>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-2'
					style={{ display: 'none' }}
					type='checkbox'
					checked={checkedValue[1]}
					onChange={e => handleChange(e, 1)}
				/>
				<label htmlFor='input-2' className='custom-checkbox'></label>
				<div className='stars_hotel'>
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstarTransporent} alt='' />
					<img src={hotelstarTransporent} alt='' />
					<img src={hotelstarTransporent} alt='' />
				</div>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-3'
					style={{ display: 'none' }}
					type='checkbox'
					checked={checkedValue[2]}
					onChange={e => handleChange(e, 2)}
				/>
				<label htmlFor='input-3' className='custom-checkbox'></label>
				<div className='stars_hotel'>
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstarTransporent} alt='' />
					<img src={hotelstarTransporent} alt='' />
				</div>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-4'
					style={{ display: 'none' }}
					type='checkbox'
					checked={checkedValue[3]}
					onChange={e => handleChange(e, 3)}
				/>
				<label htmlFor='input-4' className='custom-checkbox'></label>
				<div className='stars_hotel'>
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstarTransporent} alt='' />
				</div>
			</div>
			<div className='wrapper_checkbox'>
				<input
					id='input-5'
					style={{ display: 'none' }}
					type='checkbox'
					checked={checkedValue[4]}
					onChange={e => handleChange(e, 4)}
				/>
				<label htmlFor='input-5' className='custom-checkbox'></label>
				<div className='stars_hotel'>
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
					<img src={hotelstar} alt='' />
				</div>
			</div>
		</>
	)
}

export default RaitingModule
