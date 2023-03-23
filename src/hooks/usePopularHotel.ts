import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import React from 'react'
import { useQuery } from 'react-query'
import defaultImg from '@/assets/images/default-home.jpeg'

const usePopularHotel = () => {
  const getPopularHotels = useQuery(
		'get-popular-hotels',
		() => SearchToursService.getPopular(),
		{
			select: data => {
				const dataSet = data.data.map((el: any) => ({
					images: el.photoList.length !== 0 ? el.photoList.map(
						(el: any) => `https://api.mandarina.lv/${el.urlPhoto}`
					) : [defaultImg],
					price: el.price,
					name: el.name,
					nights: el.nights,
					hotelCode: el.hotelCode,
					rating: el.rating,
					location_lv:el.location_lv,
					location_ru:el.location_ru,
					location_en:el.location_en,
				}))
				return dataSet
			}
		}
	)
  return getPopularHotels
}

export default usePopularHotel