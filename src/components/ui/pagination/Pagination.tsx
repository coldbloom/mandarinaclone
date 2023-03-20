import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import React, { FC, useEffect, useState } from 'react'
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowLeft
} from 'react-icons/md'
import Button from '../button/Button'
import { PropsPagination } from './pagination.interface'
import style from './pagination.module.scss'
import { DOTS, usePagination } from './usePagination'
const Pagination: FC<PropsPagination> = ({
	setTours,
	toursInfo,
	tours,
	total,
	allPages,
	getSearchTours
}) => {
	const [paginationData, setPaginationData] = useState({
		from: 0,
		last_page: 0,
		current_page: 0,
		to: 0,
		per_page: 0,
		total: 0
	})
	useEffect(() => {
		if (tours) {
			const { from, last_page, current_page, to, per_page, total } = tours
			setPaginationData(paginationData => ({
				...paginationData,
				from,
				last_page,
				current_page,
				to,
				per_page,
				total
			}))
		}
	}, [tours])

	const handleClickSendRequest = (index: number) => {
		const dataProps: PropsSearchTours = {
			...toursInfo,
			page: index
		}
		getSearchTours.mutate(dataProps)
	}
	const paginationRange = usePagination({
		currentPage: paginationData.current_page,
		totalCount: paginationData.total,
		siblingCount: 0,
		pageSize: 12
	})
	
	
	return (
		<div className={style.pagination}>
			<Button
				className={`${
					(paginationData.current_page === 1 ||
						getSearchTours.isLoading) &&
					style.disable
				}`}
				onClick={() =>
					handleClickSendRequest(paginationData.current_page - 1)
				}
				disabled={
					paginationData.current_page === 1 ||
					getSearchTours.isLoading
				}
			>
				<MdOutlineKeyboardArrowLeft />
			</Button>
			<ul className={style.items}>
				{paginationRange?.map((pageNumber, key) => {
					if (pageNumber === DOTS) {
						return (
							<li key={key} className={`${style.dots}`}>
								&#8230;
							</li>
						)
					}
					return (
						<li
							className={`${style.paginationItem} ${
								paginationData.current_page === pageNumber &&
								style.active
							}`}
							onClick={() => {
								if(paginationData.current_page===pageNumber) return
								handleClickSendRequest(pageNumber)
							}}
							key={key}
						>
							{pageNumber}
						</li>
					)
				})}
			</ul>
			<Button
				className={`${
					(paginationData.current_page === paginationData.last_page ||
						getSearchTours.isLoading) &&
					style.disable
				} `}
				classDiv={style.button}
				onClick={() =>
					handleClickSendRequest(paginationData.current_page + 1)
				}
				disabled={
					paginationData.current_page === paginationData.last_page ||
					getSearchTours.isLoading
				}
			>
				<MdOutlineKeyboardArrowRight />
			</Button>
		</div>
	)
}

export default Pagination
