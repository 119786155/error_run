<script>
	import '../app.css';
	import { onMount } from 'svelte';
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

	<footer>
		<a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2025130546号</a>
	</footer>
</div>

<style>
	footer {
		text-align: center;
	}

	footer a {
		display: inline-block;
		margin: 2rem;
		color: #666;
		text-decoration: none;
		font-size: 80%;
	}

	footer a:hover {
		color: #888;
	}
</style>
