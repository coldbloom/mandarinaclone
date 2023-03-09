import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import 'react-image-gallery/styles/scss/image-gallery.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer/Footer'

import TourSearch from './pages/TourSearch/TourSearch'
import Contacts from './pages/Contacts/Contacts'
import Blog from './pages/Blog/Blog'

import LoadingPage from './components/LoadingPage/LoadingPage'
import SearchBox from './components/mainForm/searchBox'
import Home from './components/screens/Home/Home'
import SearchPage from './components/screens/search-page/SearchPage'
import Hotel from '@/components/screens/hotel/Hotel'
import Search from '@/components/screens/search/Search'
import GetOffer from '@/components/screens/get-offer/GetOffer';

function App() {
	const [loading, setLoading] = React.useState(false)
	const [tours, setTours] = useState()

	const [timeData, setTimeData] = useState(
		localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo') || '')
			: {
					adult: 1,
					child: 0,
					childs_age: [],
					countryCode: '',
					data: '',
					meal_types: ['RO', 'BB', 'HB', 'FB', 'AI', 'UAI'],
					nights_max: 18,
					nights_min: 1,
					price_range_max: 10000,
					price_range_min: 10,
					townFrom: '',
					rating: [true, true, true, true, true]
			  }
	)

	const loaderFunc = () => {
		setTimeout(() => {
			setLoading(true)
		}, [1000])
	}

	React.useEffect(() => {
		window.addEventListener('load', loaderFunc)
		return () => {
			window.removeEventListener('load', loaderFunc)
		}
	}, [])

	setTimeout(() => {
		setLoading(true)
	}, [0])

	return (
		<>
			{loading ? (
				<>
					<Routes>
						<Route
							path='/'
							element={
								<Home
									setTours={setTours}
									timeData={timeData}
									setTimeData={setTimeData}
								/>
							}
						/>
						<Route path='/search' element={<Search />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/get-offer' element={<GetOffer />} />
						{/* <Route path='/get-offer' element={<GetOffer />} /> */}
						<Route path='/hotel/:id' element={<Hotel />} />
						<Route
							path='/search-tours'
							element={
								<SearchPage
									tours={tours}
									setTours={setTours}
									timeData={timeData}
									setTimeData={setTimeData}
								/>
							}
						/>
					</Routes>
					<Footer />
				</>
			) : (
				<LoadingPage />
			)}
		</>
	)
}

export default App
