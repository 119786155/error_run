<script>
	import { _ } from 'svelte-i18n';
	import Story from './Story.svelte';
</script>

<svelte:head>
	<title>{$_('pages.story.title')}</title>
	<meta name="description" content={$_('pages.story.title')} />
</svelte:head>

<Story />
