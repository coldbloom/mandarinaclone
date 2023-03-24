import ToastrCustom from '@/components/ui/toastr/ToastrCustom'
import React, { createContext, FC, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export const LangContext = createContext<any>({ lang: localStorage.getItem('i18nextLng') })
const MainProvider: FC<any> = ({ children }) => {
	const [lang, setLang] = useState(localStorage.getItem('i18nextLng'))
	const toggleLang = (lang: 'ru' | 'lv') => {
		return setLang(lang)
	}
	return (
		<React.StrictMode>
			<BrowserRouter>
				<LangContext.Provider value={{ lang, toggleLang }}>
					{/* //@ts-ignore */}
					<QueryClientProvider client={queryClient}>
						<ToastrCustom />
						{children}
					</QueryClientProvider>
				</LangContext.Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default MainProvider
