<script>
	import { locale, locales } from 'svelte-i18n';

	const map = {
		'zh-CN': '中文',
		en: 'English'
	};
</script>

<select bind:value={$locale} class="i18n-selector">
	{#each $locales as locale}
		<option value={locale}>{map[locale]}</option>
	{/each}
</select>

<style>
	.i18n-selector {
		border: none;
		background-color: transparent;
		margin-left: 20px;
		outline: none;
	}
</style>
