import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import reportWebVitals from './reportWebVitals'


import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ToastrCustom from '@/components/ui/toastr/ToastrCustom'
import '@/utils/i18.js';
import '@/assets/shrifts/Gilroy-Bold.ttf'

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

// i18next
// 	.use(initReactI18next) // passes i18n down to react-i18next
// 	.use(I18nextBrowserLanguageDetector)
// 	.use(HttpApi)
// 	.init(
// 		{
// 			debug: true,
// 			fallbackLng: 'ru',
// 			interpolation: {
// 				escapeValue: false // not needed for react as it escapes by default
// 			},
// 			resources: {
// 				ru: {
// 					translation: { TRANSLATION_RU }
// 				}
// 			}
// 		}
// 		// supportedLngs: ['ru'],
// 		// fallbackLng: 'ru',
// 		// detection: {
// 		// 	order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
// 		// 	caches: ['cookie']
// 		// },
// 		// resources:{
// 		// 	ru:{TRANSLATION_RU}
// 		// }
// 		//backend: {
// 		// loadPath: 'src/assets/locales/{{lng}}/translation.json'
// 		//loadPath:TRANSLATION_RU
// 		//}
// 	)
//then(()=>
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* //@ts-ignore */}
			<UserDataContext.Provider
				value={JSON.parse(localStorage.getItem('userInfo')) || null}
			>
				<QueryClientProvider client={queryClient}>
					<ToastrCustom />
					<App />
				</QueryClientProvider>
			</UserDataContext.Provider>
		</BrowserRouter>
	</React.StrictMode>
)
//)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
