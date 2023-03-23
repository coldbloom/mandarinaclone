import React, { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import 'react-image-gallery/styles/scss/image-gallery.scss'

import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import 'react-toastify/dist/ReactToastify.css'
import LoadingPage from './components/LoadingPage/LoadingPage'
import { SearchToursService } from './services/search-tours/SearchToursService.service'
import { useMutation, useQuery } from 'react-query'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import 'react-loading-skeleton/dist/skeleton.css'
import { BlogService } from './services/blog/blog.service'
function App() {
	const [tours, setTours] = useState()
	const [loading, setLoading] = useState(true)
	const [lang, setLang] = useState(localStorage.getItem('i18nextLng'))
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
	const getPost = useQuery(['get-posts',lang], () => BlogService.getBlog(lang), {
		select: data =>
			data.data.map(el => ({
				country: el.country,
				created_at: el.created_at,
				image: el.image,
				id: el.id,
				title: el?.title || el.title_lv,
				url: el.url,
				description: el?.description || el.description_lv
			}))
	})
	const searchToursMain = useMutation(
		'search-tours-main',
		data => SearchToursService.getSearchTours(data),
		{
			onSuccess: data => setTours(data.data)
		}
	)
	const { pathname } = useLocation()

	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant'
		})
	}, [pathname])
	useEffect(() => {
		//setLoading('1')
	}, [])
	return (
		<>
			<>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								setTours={setTours}
								timeData={timeData}
								setTimeData={setTimeData}
								loadingFoot={loading}
								setLoadingFoot={setLoading}
								lang={lang}
								setLang={setLang}
								getPost={getPost}
							/>
						}
					/>
					<Route
						path='/search'
						element={
							<Search
								timeData={timeData}
								setTimeData={setTimeData}
								loading={loading}
								setLoading={setLoading}
								lang={lang}
								setLang={setLang}
							/>
						}
					/>
					<Route
						path='/contacts'
						element={<Contacts lang={lang} setLang={setLang} />}
					/>
					<Route
						path='/blog'
						element={
							<Blog
								getPost={getPost}
								lang={lang}
								setLang={setLang}
							/>
						}
					/>
					<Route
						path='/blog/:id'
						element={<BlogId lang={lang} setLang={setLang} />}
					/>
					<Route
						path='/get-offer'
						element={<GetOffer lang={lang} setLang={setLang} />}
					/>
					<Route
						path='/hotel/:id'
						element={
							<Hotel
								timeData={timeData}
								setTimeData={setTimeData}
								checkout={checkout}
								setCheckout={setCheckout}
								lang={lang}
								setLang={setLang}
							/>
						}
					/>
					<Route
						path='/cookies'
						element={<CookiePage lang={lang} setLang={setLang} />}
					/>
					<Route
						path='/return-policy'
						element={<ReturnPolicy lang={lang} setLang={setLang} />}
					/>
					<Route
						path='/privacy-policy'
						element={
							<PrivacyPolicy lang={lang} setLang={setLang} />
						}
					/>
					<Route
						path='/terms'
						element={<TermsPage lang={lang} setLang={setLang} />}
					/>
					<Route
						path='/checkout'
						element={
							<Checkout
								checkout={checkout}
								setCheckout={setCheckout}
								lang={lang} setLang={setLang}
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
								searchToursMain={searchToursMain}
								loading={loading}
								setLoading={setLoading}
								lang={lang} setLang={setLang}
							/>
						}
					/>
				</Routes>
				{/* {!loading && <Footer />} */}

				{/* </Wrapper> */}
			</>
		</>
	)
}

export default App
