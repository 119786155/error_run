<script>
	import { locale } from 'svelte-i18n';
	import { zhLanguages } from '../lib/i18n';

	const getSelected = (locale, type = 'zh') => {
		const selected = { selected: 'selected' };

		if (type === 'zh') {
			return zhLanguages.includes(locale) ? selected : {};
		}

		return zhLanguages.includes(locale) ? {} : selected;
	};

	const onchange = (evt) => {
		const value = evt.target.value;

		let result = !~value.indexOf('en') && !~value.indexOf('zh') ? 'en' : value;

		locale.set(result);
	};
</script>

<select class="bg-transparent border-none outline-none" {onchange}>
	<option value="zh" {...getSelected($locale)}>中文</option>
	<option value="en" {...getSelected($locale, 'en')}>English</option>
</select>
