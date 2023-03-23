import React from 'react'
import SkeletonLoaderCardTour from './SkeletonLoaderCardTour'
import style from './SkeletonLoaderCardTour.module.scss'
type Props = {}

const SkeletonFullCards = (props: Props) => {
	return (
		<div className={`d-flex justify-between ${style.visibleDisplaySkeleton}`}>
			{[...Array(3)].map(() => (
				<SkeletonLoaderCardTour />
			))}
		</div>
	)
}
export default SkeletonFullCards
