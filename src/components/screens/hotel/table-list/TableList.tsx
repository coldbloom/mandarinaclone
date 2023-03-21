import React, { FC } from 'react'
import style from './TableList.module.scss'
import tourSvg from '@/assets/images/tourSvg.svg'
import Button from '@/components/ui/button/Button'
import dateSvg from '@/assets/images/trip/date.svg'
import hotelSvg from '@/assets/images/trip/hotel.svg'
import mealSvg from '@/assets/images/trip/meal.svg'
import tripSvg from '@/assets/images/trip/trip.svg'

const TableList: FC<any> = ({
	offerList,
	sendOrder,
	hotelEnabled,
	getHotel
}) => {
	return (
		<div className={`${style.tableList}`}>
			<ul className={style.externalUl}>
				<li>
					<ul className={style.insideUl}>
						<li>Дата вылета</li>
						<li>Кол-во мест в самолёте</li>
						<li>Тип номера</li>
						<li>Питание </li>
						<li>Цена на всех</li>
						<li></li>
					</ul>
				</li>
				{hotelEnabled ? (
					<div className={style.offerListLoading}>
						Поиск подходящих предложений
					</div>
				) : offerList.length !== 0 ? (
					<>
						{offerList.map((el: any, key: any) => (
							<li key={key}>
								<ul className={style.insideUlList}>
									<li className='leading-6 '>
										<div className='flex justify-center'>
											<img
												src={tourSvg}
												alt='tour'
												className='mr-1'
											/>
											<div>
												<p>
													{el.checkIn.replace(
														/-/g,
														'.'
													)}
												</p>
												<p className='text-left'>
													{el.checkOut
														.substring(5, 10)
														.replace('-', '.')}
												</p>
											</div>
										</div>
										<p className='text-center mr-8 text-[#BCBCBC] text-[1.1rem]'>
											{' '}
											{el.nights} ночей
										</p>
									</li>
									<li>10+</li>
									<li className='flex justify-center'>
										<img src={hotelSvg} className='mr-3' />
										{el.room}
									</li>
									<li className='flex justify-center'>
										<img src={mealSvg} className='mr-3' />
										{el.meal}
									</li>
									<li className={style.order}>
										{el.price} €
									</li>
									<li>
										<Button
											onClick={() => {
												sendOrder({
													checkIn: el.checkIn,
													checkOut: el.checkOut,
													hotelName: el.hotelName,
													meal: el.meal,
													price: el.price,
													room: el.room
												})
											}}
										>
											Заказать
										</Button>
									</li>
								</ul>
							</li>
						))}
					</>
				) : (
					<div className={style.offerListLoading}>
						Туров не найдено
					</div>
				)}
			</ul>

			<ul className={style.externalUl2}>
				{hotelEnabled ? (
					<div className={style.offerListLoading}>
						Поиск подходящих предложений
					</div>
				) : offerList.length !== 0 ? (
					<>
						{offerList.map((el: any, key: any) => (
							<li key={key}>
								<ul className={style.insideUlList2}>
									<li className='leading-6 '>
										<div className='flex justify-start'>
											<img
												src={tourSvg}
												alt='tour'
												className='mr-1'
											/>
											<div>
												<p>
													{el.checkIn.replace(
														'-',
														'.'
													)}
												</p>
												<p className='text-left'>
													{el.checkOut
														.substring(5, 10)
														.replace('-', '.')}
												</p>
											</div>
										</div>

										<p className='ml-3 text-[#BCBCBC] text-[1.1rem]'>
											{' '}
											{el.nights} ночей
										</p>
										<div className={style.trip}>
											<img src={tripSvg} alt='trip' />
											<p>{getHotel.location_ru}</p>
										</div>
									</li>
									<li className={style.order}>
										{el.price} €
										<Button
											onClick={() =>
												sendOrder({
													checkIn: el.checkIn,
													checkOut: el.checkOut,
													hotelName: el.hotelName,
													meal: el.meal,
													price: el.price,
													room: el.room
												})
											}
										>
											Заказать
										</Button>
									</li>
									<li className='flex justify-center'>
										<img src={mealSvg} className='mr-2' />
										{el.meal}
									</li>
									<li className='flex justify-center'>
										<img src={hotelSvg} className='mr-2' />
										{el.room}
									</li>
								</ul>
							</li>
						))}
					</>
				) : (
					<div className={style.offerListLoading}>
						Туров не найдено
					</div>
				)}
			</ul>
		</div>
	)
}
export default TableList
