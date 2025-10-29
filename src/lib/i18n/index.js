import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

const enLanguages = [
	'en',
	'en-AU',
	'en-IN',
	'en-GB',
	'en-GB-oxendict',
	'en-US',
	'en-IE',
	'en-CA',
	'en-ZA',
	'en-NZ'
]
export const zhLanguages = ['zh', 'zh-CN', 'zh-TW', 'zh-HK']

zhLanguages.forEach((language) => register(language, () => import('./zh.json')))
enLanguages.forEach((language) => register(language, () => import('./en.json')))

export const initI18n = () => {
	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	})
}
