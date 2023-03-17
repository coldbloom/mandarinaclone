import { FC, useCallback, useRef, useState } from 'react'
import { SwiperRef } from 'swiper/react'

// import { PropsUseSlider } from './slider.interface'
// import { ISliderInit } from '@/screens/cards/cards-hooks/slider.interface'

export const useSlider = ({ setSlider }: any) => {

	const setSliderIndex = (index: number) =>
		setSlider((prev: any) => ({ ...prev,index }))

	const sliderRef = useRef<SwiperRef>(null)

	const handlePrev = useCallback(() => {
		sliderRef.current && setSliderIndex(sliderRef.current?.swiper.activeIndex - 1)
		sliderRef.current?.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		sliderRef.current && setSliderIndex(sliderRef.current?.swiper.activeIndex + 1)
		sliderRef.current?.swiper.slideNext()
	}, [])

	return { sliderRef, handleNext, handlePrev }
}