<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Menu from './Menu.svelte';
	import { get } from '../lib/theme.svelte.js';

	onMount(async () => {
		const { listenOsTheme } = await import('../lib/theme.svelte.js');

		listenOsTheme();
	});

	let { children } = $props();
</script>

<div class="app" data-theme={get()}>
	<main>
		{@render children()}
	</main>

	<footer></footer>
	<Menu />
</div>
