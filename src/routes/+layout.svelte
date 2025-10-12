<script>
	import { isLoading } from 'svelte-i18n';
	import '../lib/i18n';
	import '../app.css';
	import { onMount } from 'svelte';
	import { get } from '../lib/theme.svelte.js';
	import { page } from '$app/state';
	import Menu from './Menu.svelte';
	import Footer from './Footer.svelte';

	const enableMenu = page.url.searchParams.get('m');

	onMount(async () => {
		const { listenOsTheme } = await import('../lib/theme.svelte.js');

		listenOsTheme();
	});

	let { children } = $props();
</script>

{#if $isLoading}
	Please wait...
{:else}
	<div class="app" data-theme={get()}>
		<main>
			{@render children()}
		</main>

		<Footer />

		{#if enableMenu}
			<Menu />
		{/if}
	</div>
{/if}
