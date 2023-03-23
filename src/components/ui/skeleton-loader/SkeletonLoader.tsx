import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'classnames'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		// <div className={classNameDiv}>
			<Skeleton
				{...rest}
				baseColor='#1F2125'
				highlightColor='#7f3243'
				className={cn('rounded-lg', className)}
			/>
		// </div>
	)
}

export default SkeletonLoader
