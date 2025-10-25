<script>
	import { isLoading } from 'svelte-i18n';
	import '../lib/i18n';
	import '../app.css';
	import { page } from '$app/state';
	import Menu from '../common/Menu.svelte';
	import Footer from '../common/Footer.svelte';

	const enableMenu = page.url.searchParams.get('m');

	let { children } = $props();
</script>

<div>
	{#if $isLoading}
		<img class="loading" src="/loading.svg" alt="Please wait..." />
	{:else}
		<main>
			{@render children()}
		</main>

		<Footer />

		{#if enableMenu}
			<Menu />
		{/if}
	{/if}
</div>
