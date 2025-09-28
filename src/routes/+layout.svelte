<script>
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(async () => {
		const themeLib = await import('../lib/theme');

		themeLib.listenOsThemeChange();
	});

	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>

	<footer></footer>
</div>

<style>
</style>
