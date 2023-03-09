import React, { createContext, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
//@ts-ignore
export const UserDataContext = createContext({
	// userData: JSON.parse(localStorage.getItem('userInfo')) || null,
	// setUserData: () => {}
})
//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

// const [userDate, setUserDate] = useState(
// 	JSON.parse(localStorage.getItem('userInfo')) || null
// )

// setUserDate()
// const value = useMemo(() => ({ userDate, setUserDate }), [userDate])

root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* //@ts-ignore */}
			<UserDataContext.Provider
				value={JSON.parse(localStorage.getItem('userInfo')) || null}
			>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</UserDataContext.Provider>
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
