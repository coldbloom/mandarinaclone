import React, { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import 'react-image-gallery/styles/scss/image-gallery.scss'

import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'

import TourSearch from './pages/TourSearch/TourSearch'

import LoadingPage from './components/LoadingPage/LoadingPage'
import SearchBox from './components/mainForm/searchBox'
import Home from './components/screens/Home/Home'
import SearchPage from './components/screens/search-page/SearchPage'
import Hotel from '@/components/screens/hotel/Hotel'
import Search from '@/components/screens/search/Search'
import GetOffer from '@/components/screens/get-offer/GetOffer'
import Blog from '@/components/screens/blog/Blog'
import BlogId from '@/components/screens/blog/blog-id/BlogId'
import CookiePage from '@/components/screens/cookie/CookiePage'
import ReturnPolicy from '@/components/screens/return-policy/ReturnPolicy'
import PrivacyPolicy from '@/components/screens/privacy-policy/PrivacyPolicy'
import TermsPage from '@/components/screens/terms/TermsPage'
import Footer from '@/components/screens/footer/Footer'
import Contacts from '@/components/screens/contacts/Contacts'
import Checkout from '@/components/screens/checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css';

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
	const [checkout, setCheckout] = useState(
		localStorage.getItem('checkout')
			? JSON.parse(localStorage.getItem('checkout') || '')
			: {}
	)

	// const loaderFunc = () => {
	// 	setTimeout(() => {
	// 		setLoading(true)
	// 	}, [1000])
	// }

	// React.useEffect(() => {
	// 	window.addEventListener('load', loaderFunc)
	// 	return () => {
	// 		window.removeEventListener('load', loaderFunc)
	// 	}
	// }, [])

	// setTimeout(() => {
	// 	setLoading(true)
	// }, [0])
	const Wrapper = ({children}) => {
		const location = useLocation();
		useLayoutEffect(() => {
			document.documentElement.scrollTo(0, 0);
		}, [location.pathname]);
		return children
	} 
	return (
		<>
			{/* {loading ? ( */}
				<>
				{/* <Wrapper> */}
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
						<Route
							path='/search'
							element={
								<Search
									timeData={timeData}
									setTimeData={setTimeData}
								/>
							}
						/>
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/blog/:id' element={<BlogId />} />
						<Route path='/get-offer' element={<GetOffer />} />
						<Route
							path='/hotel/:id'
							element={
								<Hotel
									timeData={timeData}
									setTimeData={setTimeData}
									checkout={checkout}
									setCheckout={setCheckout}
								/>
							}
						/>
						<Route path='/cookies' element={<CookiePage />} />
						<Route
							path='/return-policy'
							element={<ReturnPolicy />}
						/>
						<Route
							path='/privacy-policy'
							element={<PrivacyPolicy />}
						/>
						<Route path='/terms' element={<TermsPage />} />
						<Route
							path='/checkout'
							element={
								<Checkout
									checkout={checkout}
									setCheckout={setCheckout}
								/>
							}
						/>

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
					{/* </Wrapper> */}
				</>
		</>
	)
}

export default App
