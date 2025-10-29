<script>
	import { isLoading } from 'svelte-i18n';
	import { initI18n } from '../lib/i18n';
	import '../app.css';
	import Menu from '../common/Menu.svelte';
	import Header from '../common/Header.svelte';
	import Footer from '../common/Footer.svelte';
	import Loading from '../common/Loading.svelte';

	initI18n();

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

		<Menu />
	{/if}
</div>
