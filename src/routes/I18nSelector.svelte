<script>
	import { locale, locales } from 'svelte-i18n';
</script>

<select bind:value={$locale} class="i18n-selector">
	{#each $locales as locale}
		<option value={locale}>{locale}</option>
	{/each}
</select>

<style>
	.i18n-selector {
		border: none;
		background-color: transparent;
		margin-left: 20px;
	}
</style>
