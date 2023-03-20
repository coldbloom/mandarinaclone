import React, { useState, useRef, useEffect, FC } from 'react'
import './RangeSlider.scss'

const RangeSlider: FC<any> = ({
	min,
	max,
	initialMax,
	initialMin,
	step,
	step2,
	priceCap,
	title,
	scaleError,
	changeMin,
	changeMax,
	nightMin,
	nightMax,
	reset
}) => {
	const progressRef = useRef<any>(null)
	const [minValue, setMinValue] = useState(initialMin)
	const [maxValue, setMaxValue] = useState(initialMax)

	const handleMin = (e: any) => {
		if (maxValue - minValue >= priceCap && maxValue <= max) {
			if (parseInt(e.target.value) > parseInt(maxValue)) {
			} else {
				setMinValue(parseInt(e.target.value))
			}
		} else {
			if (parseInt(e.target.value) < minValue) {
				setMinValue(parseInt(e.target.value))
			}
		}
	}
	const handleMax = (e: any) => {
		if (maxValue - minValue >= priceCap+step && maxValue <= max) {
			if (parseInt(e.target.value)< parseInt(minValue)) {
			} else {
				setMaxValue(parseInt(e.target.value))
			}
		} else {
			if (parseInt(e.target.value) > maxValue) {
				setMaxValue(parseInt(e.target.value))
			}
		}
	}

	useEffect(() => {
		progressRef.current.style.left =
			(minValue / max) * step -
			(scaleError - (minValue * scaleError) / 18000) +
			'%'

		progressRef.current.style.right =
			step -
			(maxValue / max) * step +
			(scaleError - (maxValue * scaleError) / 18000) +
			'%'
		changeMin(minValue)
		changeMax(maxValue)
	}, [minValue, maxValue])

	useEffect(() => {
		if (step2 === 1000) {
			progressRef.current.style.left =
				((initialMin - 1000) / max) * 100 + '%'
			console.log(
				progressRef.current.style.left,
				'ergw344897tuyfhjvt78ivkct35'
			)
			setMinValue(initialMin)
			progressRef.current.style.right = (1 - initialMax / max) * 100 + '%'
			setMaxValue(initialMax)
		}
		if (step2 === 10) {
			progressRef.current.style.left = (initialMin / max) * 100 + '%'
			setMinValue(initialMin)
			progressRef.current.style.right = (1 - initialMax / max) * 100 + '%'
			setMaxValue(initialMax)
		}
	}, [reset])

	return (
		<div className='filter_item price-range-slider'>
			<div className='filter_name price_name'>{title}</div>

			{/*Slider*/}
			<div className='mb-4'>
				<div className='range-slider-scale'>
					<div
						className='progress absolute h-1 bg-green-900 rounded range-slider-scale-active'
						ref={progressRef}
					></div>
				</div>

				<div className='range-input relative'>
					<input
						onChange={handleMin}
						type='range'
						value={minValue}
						min={min}
						step={step2}
						max={max}
						className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none'
					/>

					<input
						onChange={handleMax}
						type='range'
						value={maxValue}
						min={min}
						step={step2}
						max={max}
						className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none'
					/>
				</div>
			</div>

			<div className='wrapper_input_price'>
				<div className='wrap_select_price'>
					{nightMin ? (
						<p className='select_price afterVal current'>
							{nightMin}
						</p>
					) : (
						<p className='select_price afterVal current'>
							{minValue} €
						</p>
					)}
				</div>
				<div className='wrap_select_price'>
					{nightMax ? (
						<p className='select_price afterVal current'>
							{nightMax}
						</p>
					) : (
						<p className='select_price afterVal current'>
							{maxValue} €
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default RangeSlider
