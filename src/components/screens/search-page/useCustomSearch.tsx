import { useDebounce } from '@/hooks/useDebounse'
import { SearchToursService } from '@/services/search-tours/SearchToursService.service'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const useCustomSearch = () => {
	const [isSearching, setIsSearching] = useState(false)
	const [value, isValue] = useState('')

	const debouncedSearchTerm = useDebounce(value, 1000)
	const allHotel = useQuery(
		'get-hotel-name',
		() => SearchToursService.getHotelName(value),
		{
			enabled: isSearching,
			select: data => {
				if (data.statusText === 'custom') return
				return data.data.slice(0, 4)
			},
			onSuccess: () => setIsSearching(false)
		}
	)

	useEffect(() => {
		if (debouncedSearchTerm) {
			setIsSearching(true)
		} else {
			setIsSearching(false)
		}
	}, [debouncedSearchTerm])

	return { allHotel, isValue, value, isSearching }
}

export default useCustomSearch
