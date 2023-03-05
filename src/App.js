import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer/Footer'

import TourSearch from './pages/TourSearch/TourSearch'
import Contacts from './pages/Contacts/Contacts'
import Blog from './pages/Blog/Blog'
import GetOffer from './pages/GetOffer/GetOffer'

import LoadingPage from './components/LoadingPage/LoadingPage'
import SearchBox from './components/mainForm/searchBox'
import Home from './components/screens/Home/Home'
import SearchPage from './components/screens/search-page/SearchPage'


function App() {
	const [loading, setLoading] = React.useState(false)

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
						<Route path='/' element={<Home />} />
						<Route path='/search' element={<TourSearch />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/get-offer' element={<GetOffer />} />
						<Route path='/search-tours' element={<SearchPage />} />
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
