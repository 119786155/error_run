import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('zh-CN', () => import('./zh.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
