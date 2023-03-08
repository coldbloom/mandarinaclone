import React, { useRef } from 'react'
import './ReviewSlide.scss'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import { reviews } from '@/assets/data/reviews'
import ReviewSlide from './ReviewSlide'
import { useSlider } from './useReviewSlider'
import Button from '@/components/ui/button/Button'
import Arrow from '@/components/ui/arrow/Arrow'

const ReviewSlider = () => {
	const ref = useRef<any>(null)
	console.log(ref?.current?.swiper.activeIndex)

	//const { sliderRef, handleNext, handlePrev } = useSlider()
	const handleNext = () => {
		ref?.current?.swiper.slideNext()
	}
	const handlePrev = () => {
		ref?.current?.swiper.slidePrev()
	}

	return (
		<div className='review-component'>
			<div className='carusel_wrap carusel_wrap3 mt_block feedback_wrapper'>
				<div className='container-xxl'>
					<div className='otz'>
						<div className=''>
							<div className='flex justify-between'>
								<h3 className='block_title'>
									Отзывы наших клиентов
								</h3>
								<div className='flex'>
									<Button onClick={() => handlePrev()}>
										<Arrow />
									</Button>
									<Button onClick={() => handleNext()}>
										<Arrow
											direction='right'
											className='ml-3'
										/>
									</Button>
								</div>
							</div>
							<p className='block_description w-5/6'>
								Мы рады, что большинство наших клиентов – это
								люди, с которыми у нас сложились постоянные и
								доверительные отношения.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='review-swiper-wrapper'>
				<div className='container-xxl carousel-wrapper'>
					<Swiper
						ref={ref}
						loop={true}
						modules={[Pagination]}
						spaceBetween={10}
						slidesPerView={2}
						pagination={{
							clickable: true,
							dynamicBullets: true,
							dynamicMainBullets: 4
						}}
						// breakpoints={{
						// 	576: {
						// 		slidesPerView: 1
						// 	},
						// 	768: {
						// 		slidesPerView: 1
						// 	},
						// 	1000: {
						// 		slidesPerView: 2
						// 	}
						// }}
					>
						{reviews.map((review, index) => (
							<SwiperSlide key={index}>
								<ReviewSlide
									description={review.description}
									name={review.name}
									type={review.type}
									image={review.image}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default ReviewSlider
