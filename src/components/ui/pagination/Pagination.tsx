import { PropsSearchTours } from '@/services/search-tours/SearchToursService.interface'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import React, { FC, useEffect, useState } from 'react'
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill
} from 'react-icons/bs'
import { useMutation, useQueryClient } from 'react-query'
import Button from '../button/Button'
import { PropsPagination } from './pagination.interface'
import style from './pagination.module.scss'
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
		current_page: 0
	})
	useEffect(() => {
		if (tours) {
			const { from, last_page, current_page } = tours
			setPaginationData(paginationData => ({
				...paginationData,
				from,
				last_page,
				current_page
			}))
		}
	}, [tours])

	const handleClickPlus = () => {}
	const handleClickMinus = () => {}

	const handleClickSendRequest = (index: number) => {
		const dataProps: PropsSearchTours = {
			...toursInfo,
			page: index
		}
		getSearchTours.mutate(dataProps)
	}

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
					paginationData.current_page === paginationData.last_page ||
					getSearchTours.isLoading
				}
			>
				<BsFillArrowLeftCircleFill />
			</Button>
			<div className={style.items}>
				{[...Array(paginationData.last_page)].map((item, index) => (
					<p
						key={index}
						onClick={() => handleClickSendRequest(index + 1)}
						className={`${
							index + 1 === paginationData.current_page &&
							style.active
						}`}
					>
						{index + 1}
					</p>
				))}
			</div>
			<Button
				className={`${
					(paginationData.current_page === paginationData.last_page ||
						getSearchTours.isLoading) &&
					style.disable
				}`}
				onClick={() =>
					handleClickSendRequest(paginationData.current_page + 1)
				}
				disabled={
					paginationData.current_page === paginationData.last_page ||
					getSearchTours.isLoading
				}
			>
				<BsFillArrowRightCircleFill />
			</Button>
		</div>
	)
}

export default Pagination
