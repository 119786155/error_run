<script>
	import { _ } from 'svelte-i18n';
	import Poem from './Poem.svelte';
</script>

<svelte:head>
	<title>{$_('pages.poem.title')}</title>
	<meta name="description" content={$_('pages.poem.title')} />
</svelte:head>

<Poem />
