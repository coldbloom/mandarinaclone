import React from 'react'
import SkeletonLoader from '../skeleton-loader/SkeletonLoader'
import style from './SkeletonLoaderCardTour.module.scss'
type Props = {}

const SkeletonLoaderCardTour = (props: Props) => {
	return (
		// <div className={style.card}>
			<div className={`${style.card}`}>
				<div className={style.cardImg}>
					<SkeletonLoader
						className={style.skeletonCard}
						count={1}
						// height={40}
					/>
					<div className={style.header}>
						<div className={style.skeletonHeader}>
							<SkeletonLoader count={1} />
						</div>
						<div className={style.rating}>
							<SkeletonLoader
								className={style.skeletonRating}
								count={1}
							/>
						</div>
					</div>
					<div>
						<SkeletonLoader
							className={style.skeltonRange}
							count={1}
						/>
						<SkeletonLoader
							className={style.skeltonRange}
							count={1}
						/>
					</div>
				</div>

				{/* <SkeletonLoader
				className={style.skeletonCard}
				count={1}
				// height={40}
			
				
			/> */}
			</div>
		// </div>
	)
}

export default SkeletonLoaderCardTour
