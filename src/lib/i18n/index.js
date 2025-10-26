import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

const zhFilePath = './zh.json';
const enFilePath = './en.json';
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
];

export const zhLanguages = ['zh', 'zh-CN', 'zh-TW', 'zh-HK'];

export const initI18n = () => {
	zhLanguages.forEach((language) => register(language, () => import(zhFilePath)));
	enLanguages.forEach((language) => register(language, () => import(enFilePath)));

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
};
