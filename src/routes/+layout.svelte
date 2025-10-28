<script>
	import { isLoading } from 'svelte-i18n';
	import { initI18n } from '../lib/i18n';
	import '../app.css';
	import { page } from '$app/state';
	import Menu from '../common/Menu.svelte';
	import Header from '../common/Header.svelte';
	import Footer from '../common/Footer.svelte';
	import Loading from '../common/Loading.svelte';

	initI18n();

	const enableMenu = page.url.searchParams.get('m');

	let { children } = $props();
</script>

<div>
	{#if $isLoading}
		<Loading />
	{:else}
		<Header />

		<main>
			{@render children()}
		</main>

		<Footer />

		{#if enableMenu}
			<Menu />
		{/if}
	{/if}
</div>
