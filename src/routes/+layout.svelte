<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { get } from '../lib/theme.svelte.js';
	import { page } from '$app/state';
	import Menu from './Menu.svelte';

	const enableMenu = page.url.searchParams.get('m');

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
    <img src="/batb.png" />
    <a href="https://beian.mps.gov.cn/#/query/webSearch?code=13010802002611" rel="noreferrer" target="_blank" class="gaba">冀公网安备13010802002611号</a>
		<a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2025130546号</a>
	</footer>

	{#if enableMenu}
		<Menu />
	{/if}
</div>

<style>
	footer {
		text-align: center;
	} 

	footer a {
		display: inline-block;
		margin-right: 5px;
		color: #666;
		text-decoration: none;
		font-size: 80%;
	}

	footer a:hover {
		color: #888;
	}

  footer img {
    width: 16px;
    position: relative;
    top: 4px;
  }

  footer a.gaba {
    margin-left: 0;
  }
</style>
