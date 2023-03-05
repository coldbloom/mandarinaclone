import React from 'react'
import './ReviewSlide.scss'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import { reviews } from '@/assets/data/reviews'
import ReviewSlide from './ReviewSlide'

const ReviewSlider = () => {
	return (
		<div className='review-component'>
			<div className='carusel_wrap carusel_wrap3 mt_block feedback_wrapper'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12 col-md-10'>
							<h3 className='block_title'>
								Отзывы наших клиентов
							</h3>
							<p className='block_description'>
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
						loop={true}
						modules={[Pagination]}
						spaceBetween={10}
						pagination={{
							clickable: true,
							dynamicBullets: true,
							dynamicMainBullets: 4
						}}
						breakpoints={{
							576: {
								slidesPerView: 1
							},
							768: {
								slidesPerView: 1
							},
							1000: {
								slidesPerView: 2
							}
						}}
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
