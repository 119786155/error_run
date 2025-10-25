<script>
	import { locale, locales } from 'svelte-i18n';

	const map = {
		'zh-CN': '中文',
		en: 'English'
	};
</script>

<select bind:value={$locale} class="bg-transparent border-none outline-none">
	{#each $locales as locale}
		<option value={locale}>{map[locale]}</option>
	{/each}
</select>
