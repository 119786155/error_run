<script>
	import { _ } from 'svelte-i18n';
	import Bar from './Bar.svelte';
	import Bubble from './Bubble.svelte';
</script>

<svelte:head>
	<title>{$_('pages.chart.title')}</title>
	<meta name="description" content={$_('pages.chart.title')} />
</svelte:head>

<Bubble />
