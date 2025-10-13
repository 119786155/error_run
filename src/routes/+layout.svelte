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

<div class="app" data-theme={get()}>
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

<style>
	.loading {
		animation: rotation 5.5s infinite linear;
		transform-origin: 50% 50%;
		width: 400px;
		position: absolute;
		left: calc((100% - 400px) / 2);
		top: calc((100% - 400px) / 2);
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	[data-theme='dark'] .loading {
		filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
	}
</style>
