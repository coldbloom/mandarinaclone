import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ru from '@/assets/locales/ru/translation.json'
import HttpBackend from 'i18next-http-backend'
import ChainedBackend from 'i18next-chained-backend'
import Backend from 'i18next-fs-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import {translation_ru} from '@/assets/locales/ru/translation.js'
import {translation_lv} from '@/assets/locales/lv/translation.js'
const bundledResources = {
	ru: {
		translations: {
			main: 'value'
		}
	}
}

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		lng: localStorage.getItem('i18nextLng') || "ru",
		debug: true,
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		},
    resources: {
      ru: {
        translation: translation_ru
      },
      lv: {
        translation: translation_lv
      }
    }
	})

export default i18n
