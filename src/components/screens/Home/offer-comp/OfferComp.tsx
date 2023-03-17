import React, { useRef } from 'react'
import './OfferComp.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import SwiperCore, { Keyboard, Pagination, Navigation, Thumbs } from 'swiper'
import { EffectFade } from 'swiper'
import SlideComp from '../slide-comp/SlideComp'

import 'swiper/css'
import { useSlider } from './useReviewSlider'
import Button from '@/components/ui/button/Button'
import Arrow from '@/components/ui/arrow/Arrow'

//SwiperCore.use([Navigation, Pagination])

const OfferComp = ({ data, title, description }: any) => {
	//const {handleNext,handlePrev,sliderRef} = useSlider()
	const ref = useRef<any>(null)
	const handleNext = () => {
		ref?.current?.swiper.slideNext()
	}
	const handlePrev = () => {
		ref?.current?.swiper.slidePrev()
	}
	return (
		<div className='OfferComp offer-component'>
			<div className='container-xxl'>
				<div className='row'>
				<div className=''>
							<div className='flex justify-between items-center'>
								<h3 className='block_title'>
								Предложения, которые могут быть интересны
								</h3>
								{window.innerWidth > 950 && (
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
								)}
							</div>
							<p className='block_description w-5/6'>
							Предложения, которые могут быть интересны
							</p>
						</div>
				</div>
			</div>
			<div className='container-xxl'>
				<div className='SwiperWrapper'>
					<Swiper
						ref={ref}
						loop={true}
						spaceBetween={25}
						allowTouchMove={window.innerWidth>950 ? false : true}
						// navigation={true}
						modules={[Navigation, Thumbs, Pagination]}
						grabCursor={true}
						//slidesPerView={1} //
						pagination={{
							clickable: true,
							dynamicBullets: true,
							dynamicMainBullets: 4
						}}
						breakpoints={{
							576: {
								slidesPerView: 1
							},
							// 768: {
							//     slidesPerView: 2,
							// },
							992: {
								slidesPerView: 3
							}
						}}
					>
						{data.map((el: any, index: any) => {
							return (
								<SwiperSlide key={index}>
									<SlideComp data={el}></SlideComp>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default OfferComp
