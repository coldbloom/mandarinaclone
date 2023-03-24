import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ToastrCustom from '@/components/ui/toastr/ToastrCustom'
import '@/utils/i18.js'
import MainProvider from './components/provider/MainProvider'

//@ts-ignore
// export const LangContext = createContext(null)
// createContext({
// 	lang: JSON.parse(localStorage.getItem('i18nextLng')) || null,
// })

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

root.render(
	<MainProvider>
		<App />
	</MainProvider>
)
//)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
