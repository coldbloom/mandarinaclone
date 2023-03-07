import Header from '@/components/Header'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
//@ts-ignore
import ImageGallery from 'react-image-gallery'
import style from './Hotel.module.scss'
import './Hotel.scss'
import HotelInfoCard from '@/components/ui/hotel-info-card/HotelInfoCard'

const Hotel = () => {
	const { id } = useParams()
	const getHotel = useQuery(
		'get-hotel',
		() =>
			//@ts-ignore
			SearchToursService.getHotel({ id }),
		{
			enabled: !!id
			// select: data =>
			// 	data.data.photoList.map((el: any) => ({
			// 		original: `https://api.mandarina.lv/${el.urlPhoto}`,
			// 		thumbnail: `https://api.mandarina.lv/${el.urlPhoto}`
			// 	}))
		}
	)
	const [images, setImages] = useState(null)
	useEffect(() => {
		if (getHotel.isSuccess && getHotel.data.data.photoList) {
			const images = getHotel.data.data.photoList.map((el: any) => ({
				original: `https://api.mandarina.lv/${el.urlPhoto}`,
				thumbnail: `https://api.mandarina.lv/${el.urlPhoto}`
			}))
			setImages(images)
		}
	}, [getHotel.data])
	console.log(getHotel.data)

	return (
		<>
			<div className='bg-gray-wrapper'>
				<Header />
				{images && (
					<div className={style.slider}>
						<ImageGallery items={images} thumbnailPosition='left' />
					</div>
				)}
			</div>
			<div className={style.description}>
				<h2>{getHotel.data?.data.name}</h2>
				<div className={style.price}>
					<h3>
						C E GIVE ME DATA <span>на одного человека</span>
					</h3>
					<p>*цена зависит от даты вылета и типа питания</p>
				</div>
			</div>
			{/* <div className={style.hotelInfo}>
				<img
					src={`https://api.mandarina.lv/${getHotel.data?.data.photoList[0].urlPhoto}`}
					alt='description'
				/>
				{getHotel.data?.data.descriptionHotel.length && (
					<div className={style.description}>
						<h2>Информация о гостиннице</h2>
					</div>
				)}
			</div> */}
			<div>
				<HotelInfoCard title='fe' img='few' text='rfewfe' />
			</div>
		</>
	)
}

export default Hotel
