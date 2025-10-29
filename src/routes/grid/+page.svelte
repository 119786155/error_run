<script>
	import { _ } from 'svelte-i18n'
	import Grid from './Grid.svelte'
</script>

<svelte:head>
	<title>{$_('pages.grid.title')}</title>
	<meta name="description" content={$_('pages.grid.title')} />
</svelte:head>

<Grid />
